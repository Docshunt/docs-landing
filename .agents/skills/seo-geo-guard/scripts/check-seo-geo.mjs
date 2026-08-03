#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];
const warnings = [];

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function walk(dir, matches = []) {
  const absolute = path.join(root, dir);
  if (!fs.existsSync(absolute)) return matches;
  for (const entry of fs.readdirSync(absolute, { withFileTypes: true })) {
    const rel = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(rel, matches);
    } else {
      matches.push(rel);
    }
  }
  return matches;
}

function routeFromPage(file) {
  let route = file.replace(/^src\/app/, "").replace(/\/page\.tsx$/, "");
  route = route.replace(/\(([^)]+)\)\//g, "");
  return route === "" ? "/" : route;
}

const pageFiles = walk("src/app").filter((file) => file.endsWith("/page.tsx"));
const routes = pageFiles.map(routeFromPage).sort();

if (!pageFiles.length) {
  errors.push("No App Router page files found under src/app/**/page.tsx.");
}

const requiredCrawlerRoutes = [
  "src/app/sitemap.xml/route.ts",
  "src/app/sitemap-index.xml/route.ts",
  "src/app/sitemap-blog_list.xml/route.ts",
  "src/app/sitemap-blog_detail.xml/route.ts",
  "src/app/llms.txt/route.ts",
  "src/app/ai.txt/route.ts",
];

if (!exists("src/app/robots.ts") && !exists("src/app/robots.txt/route.ts")) {
  errors.push("Missing crawler-facing route: src/app/robots.ts or src/app/robots.txt/route.ts");
}

for (const file of requiredCrawlerRoutes) {
  if (!exists(file)) errors.push(`Missing crawler-facing route: ${file}`);
}

if (exists("src/app/llms.txt/route.ts") !== exists("src/app/ai.txt/route.ts")) {
  errors.push("llms.txt and ai.txt route parity is broken; update both together.");
}

if (!exists("src/seo/metadata.ts")) {
  warnings.push("Missing src/seo/metadata.ts shared SEO helper file.");
} else {
  const metadata = read("src/seo/metadata.ts");
  if (!metadata.includes("https://docshunt.ai")) {
    errors.push("src/seo/metadata.ts does not contain the production SITE_URL https://docshunt.ai.");
  }
  for (const envName of ["NEXT_PUBLIC_SITE_ORIGIN", "NEXT_PUBLIC_APP_ORIGIN", "NEXT_PUBLIC_CHANNEL_ORIGIN"]) {
    if (!metadata.includes(`process.env.${envName}`)) {
      errors.push(`src/seo/metadata.ts must read ${envName}.`);
    }
  }
  if (/STATIC_ASSET_URL|vercel\.app/.test(metadata)) {
    errors.push("OG assets must use SITE_URL instead of the Vercel deployment origin.");
  }
  if (/canonical\s*:\s*["'`]\//.test(metadata) || /openGraph:[\s\S]*url\s*:\s*["'`]\//.test(metadata)) {
    errors.push("Relative canonical or openGraph.url detected in src/seo/metadata.ts.");
  }
  if (/localhost|127\.0\.0\.1|192\.168\./.test(metadata)) {
    errors.push("Localhost/LAN URL detected in src/seo/metadata.ts.");
  }
  if (!/DEFAULT_TITLE\s*=\s*"[^"]+\?/.test(metadata)) {
    errors.push("Landing DEFAULT_TITLE must lead with the target search question.");
  }
  if (!/DEFAULT_DESCRIPTION\s*=\s*\n?\s*"독스헌트는/.test(metadata)) {
    errors.push("Landing DEFAULT_DESCRIPTION must begin with a direct answer.");
  }
  if (!metadata.includes('"@context": "https://schema.org"')) {
    errors.push("JSON-LD must use the canonical https://schema.org context.");
  }
  if (/schema\.org\/version\/|schemaorg-current/.test(metadata)) {
    errors.push("JSON-LD must reference https://schema.org, not a versioned schema dump.");
  }
  if (!/export function articleJsonLd[\s\S]*?"@type": "BlogPosting"/.test(metadata)) {
    errors.push("Blog detail JSON-LD must use BlogPosting.");
  }
}

if (!read("src/app/landing-page-client.tsx").includes("softwareApplicationJsonLd")) {
  errors.push("Landing page must expose SoftwareApplication JSON-LD.");
}

for (const file of walk("src")) {
  const source = read(file);
  if (
    /(?:user-agent|userAgent)[\s\S]{0,500}(?:Googlebot|bingbot|GPTBot|OAI-SearchBot|ClaudeBot)|(?:Googlebot|bingbot|GPTBot|OAI-SearchBot|ClaudeBot)[\s\S]{0,500}(?:user-agent|userAgent)/i.test(
      source,
    )
  ) {
    errors.push(`${file} appears to serve bot-specific content; keep crawler and user content equivalent.`);
  }
}

for (const file of pageFiles) {
  const source = read(file);
  const route = routeFromPage(file);
  const hasMetadata = /export\s+(const\s+metadata|async\s+function\s+generateMetadata|function\s+generateMetadata)/.test(source);
  const isRoot = route === "/";
  const isBlogDetail = route.includes("/blog_detail/");
  const isMirror = route.includes("/mirror/");
  const isRedirect = /\bredirect\s*\(/.test(source);

  if (!hasMetadata && !isRoot && !isBlogDetail && !isMirror && !isRedirect) {
    warnings.push(`${file} (${route}) has no page-level metadata export; verify inherited metadata is intentional.`);
  }
  if (/canonical\s*:\s*["'`]\//.test(source) || /openGraph:[\s\S]*url\s*:\s*["'`]\//.test(source)) {
    errors.push(`Relative canonical or openGraph.url detected in ${file}.`);
  }
  if (/localhost|127\.0\.0\.1|192\.168\./.test(source)) {
    errors.push(`Localhost/LAN URL detected in public page source ${file}.`);
  }
}

if (exists("src/proxy.ts")) {
  const proxy = read("src/proxy.ts");
  if (/blog_list|blog_detail/.test(proxy)) {
    warnings.push("src/proxy.ts references blog_list/blog_detail; verify local blog pages are not being mirrored.");
  }
}

if (exists("src/data/blog-posts/index.ts") && exists("src/app/sitemap-blog_detail.xml/route.ts")) {
  const blogs = read("src/data/blog-posts/index.ts");
  const sitemap = read("src/app/sitemap-blog_detail.xml/route.ts");
  if (!/BLOG_POSTS/.test(sitemap)) {
    warnings.push("Blog detail sitemap route does not visibly reference BLOG_POSTS; verify sitemap stays aligned with blog data.");
  }
  if (!/post\d+/.test(blogs)) {
    warnings.push("Blog post index does not visibly aggregate per-post files; verify blog route generation manually.");
  }
} else if (exists("src/data/docshunt-blogs.ts") && exists("src/app/sitemap-blog_detail.xml/route.ts")) {
  warnings.push("Legacy single-file blog data detected; prefer one post file per entry under src/data/blog-posts/.");
}

const postFiles = walk("src/data/blog-posts").filter((entry) => /^\d{5}-.+\.ts$/.test(path.basename(entry)));
const seenBlogFields = new Map();

function quotedField(source, field) {
  return source.match(new RegExp(`\\b${field}:\\s*"((?:\\\\.|[^"\\\\])*)"`))?.[1];
}

for (const file of postFiles) {
  const source = read(file);
  const slug = quotedField(source, "slug");
  const sourceUrl = quotedField(source, "sourceUrl");

  for (const field of ["slug", "sourceUrl", "title", "description"]) {
    const value = quotedField(source, field);
    if (!value) {
      errors.push(`${file} is missing a string ${field}.`);
      continue;
    }
    if (field === "title" || field === "description") {
      const key = `${field}:${value}`;
      if (seenBlogFields.has(key)) {
        errors.push(`${file} duplicates ${field} from ${seenBlogFields.get(key)}.`);
      } else {
        seenBlogFields.set(key, file);
      }
    }
  }

  if (slug && sourceUrl !== `https://docshunt.ai/blog_detail/${slug}`) {
    errors.push(`${file} sourceUrl does not match its slug.`);
  }
  if (/\bverification:\s*\{/.test(source) && !/\bmodifiedDate:\s*"/.test(source)) {
    errors.push(`${file} has verification sources without modifiedDate.`);
  }
}

if (exists("src/components/blog-list-client.tsx")) {
  const blogList = read("src/components/blog-list-client.tsx");
  if (!/Link[\s\S]*\/blog_list\?page=/.test(blogList)) {
    errors.push("Blog pagination must expose crawlable /blog_list?page= URLs through Next Link.");
  }
}

if (exists("src/app/new-landing/page.tsx")) {
  const draftLanding = read("src/app/new-landing/page.tsx");
  if (!/\bredirect\s*\(\s*["']\/["']\s*\)/.test(draftLanding) && !/\bnoindex\b/.test(draftLanding)) {
    errors.push("/new-landing must redirect to / or explicitly use noindex.");
  }
}

if (
  !exists("src/app/about/page.tsx") ||
  !exists("src/seo/metadata.ts") ||
  !read("src/seo/metadata.ts").includes('BLOG_AUTHOR_NAME = "독스헌트 마케팅팀"') ||
  !read("src/seo/metadata.ts").includes('"@id": BLOG_AUTHOR_URL') ||
  !read("src/app/about/page.tsx").includes("authorProfileJsonLd") ||
  !read("src/app/blog_detail/[slug]/page.tsx").includes("BLOG_AUTHOR_PATH")
) {
  errors.push("Visible blog authorship, JSON-LD author, and /about editorial policy must stay aligned.");
}

if (!read("src/app/blog_detail/[slug]/page.tsx").includes("hasContentCta")) {
  errors.push("Blog detail must avoid rendering its generic CTA when rich content already includes one.");
}

if (!read("src/app/blog_detail/[slug]/page.tsx").includes('rawContentHtml?.includes("dh-seo-post-legacy")')) {
  errors.push("Blog detail must strip unscoped legacy style blocks before rendering imported HTML.");
}

const blogContentSource = read("src/data/docshunt-blog-content.ts");
for (const [imageTag] of blogContentSource.matchAll(/<img\b[^>]*>/g)) {
  if (!/\balt=/.test(imageTag)) errors.push(`Inline blog image is missing alt text: ${imageTag}`);
}

if (!read("src/app/sitemap-index.xml/route.ts").includes('loc: "/about"')) {
  errors.push("/about must be included in the main sitemap.");
}

const bubbleRuntimeReferences = walk("src").filter((file) => read(file).includes("bubble.io"));
for (const file of bubbleRuntimeReferences) {
  errors.push(`Bubble runtime dependency detected in ${file}; use a local public asset instead.`);
}

for (const file of postFiles) {
  const source = read(file);
  for (const [, field, assetPath] of source.matchAll(/\b(image|heroImage):\s*"([^"]+)"/g)) {
    if (!assetPath.startsWith("/docshunt-assets/")) {
      errors.push(`${file} ${field} must use a local /docshunt-assets/ path.`);
    } else if (!exists(path.join("public", assetPath))) {
      errors.push(`${file} ${field} points to missing asset ${assetPath}.`);
    }
  }
}

console.log("SEO/GEO guard route inventory:");
for (const route of routes) console.log(`- ${route}`);

for (const warning of warnings) console.warn(`WARN: ${warning}`);
for (const error of errors) console.error(`ERROR: ${error}`);

if (errors.length) process.exit(1);

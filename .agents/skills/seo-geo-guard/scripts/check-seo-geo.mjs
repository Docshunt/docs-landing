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
  "src/app/robots.ts",
  "src/app/sitemap.xml/route.ts",
  "src/app/sitemap-blog_detail.xml/route.ts",
  "src/app/llms.txt/route.ts",
  "src/app/ai.txt/route.ts",
];

for (const file of requiredCrawlerRoutes) {
  if (!exists(file)) warnings.push(`Missing crawler-facing route: ${file}`);
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
  if (/canonical\s*:\s*["'`]\//.test(metadata) || /openGraph:[\s\S]*url\s*:\s*["'`]\//.test(metadata)) {
    errors.push("Relative canonical or openGraph.url detected in src/seo/metadata.ts.");
  }
  if (/localhost|127\.0\.0\.1|192\.168\./.test(metadata)) {
    errors.push("Localhost/LAN URL detected in src/seo/metadata.ts.");
  }
}

for (const file of pageFiles) {
  const source = read(file);
  const route = routeFromPage(file);
  const hasMetadata = /export\s+(const\s+metadata|async\s+function\s+generateMetadata|function\s+generateMetadata)/.test(source);
  const isRoot = route === "/";
  const isBlogDetail = route.includes("/blog_detail/");
  const isMirror = route.includes("/mirror/");

  if (!hasMetadata && !isRoot && !isBlogDetail && !isMirror) {
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

console.log("SEO/GEO guard route inventory:");
for (const route of routes) console.log(`- ${route}`);

for (const warning of warnings) console.warn(`WARN: ${warning}`);
for (const error of errors) console.error(`ERROR: ${error}`);

if (errors.length) process.exit(1);

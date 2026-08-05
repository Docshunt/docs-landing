#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

function parseArgs(argv) {
  const args = {};
  for (let index = 0; index < argv.length; index += 2) {
    const key = argv[index];
    const value = argv[index + 1];
    if (!key?.startsWith("--") || !value) throw new Error(`Invalid argument: ${key ?? ""}`);
    args[key.slice(2)] = value;
  }
  return args;
}

function filenamePart(title) {
  return title
    .normalize("NFKC")
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

const args = parseArgs(process.argv.slice(2));
if (!args.slug || !args.title) {
  console.error("Usage: create-blog-post.mjs --slug <slug> --title <title> [--date YYYY.MM.DD] [--root <repo>]");
  process.exit(1);
}
if (args.slug.includes("/") || args.slug.includes("..")) throw new Error("Slug must be one URL path segment.");

const root = path.resolve(args.root ?? process.cwd());
const postsDir = path.join(root, "src/data/blog-posts");
const indexPath = path.join(postsDir, "index.ts");
const filenames = fs.readdirSync(postsDir).filter((name) => /^\d{5}-.+\.ts$/.test(name));
const numbers = filenames.map((name) => Number(name.slice(0, 5))).sort((left, right) => left - right);
if (numbers.some((number, index) => number !== index + 1)) {
  throw new Error("Existing blog post filenames must be contiguous from 00001 before creating a new post.");
}
const nextNumber = filenames.length + 1;
const number = String(nextNumber).padStart(5, "0");
const exportName = `post${String(nextNumber).padStart(2, "0")}`;
const stem = filenamePart(args.title);
const filename = `${number}-${stem}.ts`;
const postPath = path.join(postsDir, filename);
const date = args.date ?? new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Seoul" }).format(new Date()).replaceAll("-", ".");

if (!stem) throw new Error("Title cannot produce a filename.");
if (fs.existsSync(postPath)) throw new Error(`Post already exists: ${postPath}`);

let indexSource = fs.readFileSync(indexPath, "utf8");
const importMarker = '\nimport type { BlogPost } from "./types";';
const arrayMarker = "const BLOG_POST_SOURCE = [\n";
if (!indexSource.includes(importMarker) || !indexSource.includes(arrayMarker)) {
  throw new Error("index.ts markers changed; update this script before generating a post.");
}

const modulePath = `./${filename.slice(0, -3)}`;
indexSource = indexSource
  .replace(importMarker, `\nimport { ${exportName} } from "${modulePath}";${importMarker}`)
  .replace(arrayMarker, `${arrayMarker}  ${exportName},\n`);

const source = `import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

export const ${exportName} = {
  page: 1,
  index: 1,
  slug: ${JSON.stringify(args.slug)},
  sourceUrl: ${JSON.stringify(`https://docshunt.ai/blog_detail/${args.slug}`)},
  title: ${JSON.stringify(args.title)},
  description: "TODO: 검색 결과에서 글의 답과 대상을 설명하는 고유한 문장",
  date: ${JSON.stringify(date)},
  image: "/docshunt-assets/blog-covers/${number}-${filenamePart(args.slug)}-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/${number}-${filenamePart(args.slug)}-hero.jpg",
  paragraphs: ["TODO: 본문 핵심을 담은 일반 텍스트 대체 문단"],
  contentHtml: \`<div class="dh-seo-post">
  <p>TODO: 첫 두세 문장에서 검색 질문에 직접 답하세요.</p>
  <h2>TODO: 독자가 실제로 검색할 소제목</h2>
  <p>TODO: 근거, 예시, 다음 행동을 작성하세요.</p>
  <div class="dh-cta">
    <p>TODO: 독스헌트로 이어지는 구체적인 다음 행동</p>
    <a class="dh-cta-button" href="\${APP_URL}/f">무료로 시작하기</a>
  </div>
</div>\`,
} satisfies BlogPost;
`;

fs.writeFileSync(postPath, source, { flag: "wx" });
fs.writeFileSync(indexPath, indexSource);
console.log(path.relative(root, postPath));

#!/usr/bin/env node
// 운영 배포 뒤, 직전 릴리스 태그 이후 바뀐 블로그 글 주소를 IndexNow로 알린다.
// 사용: node scripts/indexnow-changed-posts.mjs <이전 ref> <현재 ref> [--dry-run]
import { execFileSync } from "node:child_process";

const [fromRef, toRef, flag] = process.argv.slice(2);
if (!fromRef || !toRef) {
  console.error("Usage: node scripts/indexnow-changed-posts.mjs <from-ref> <to-ref> [--dry-run]");
  process.exit(1);
}

const git = (...args) => execFileSync("git", args, { encoding: "utf8" });
const changed = git("-c", "core.quotePath=false", "diff", "--name-status", `${fromRef}..${toRef}`, "--", "src/data/blog-posts/")
  .trim()
  .split("\n")
  .filter(Boolean)
  .map((line) => line.split("\t"))
  .filter(([, file]) => /\/\d{5}-[^/]+\.ts$/.test(file));

const slugs = new Set();
for (const [status, file] of changed) {
  // 지운 글은 이전 ref에서, 나머지는 현재 ref에서 slug를 읽는다.
  const source = git("show", `${status.startsWith("D") ? fromRef : toRef}:${file}`);
  const slug = source.match(/^\s*slug:\s*"([^"]+)"/m)?.[1];
  if (slug) slugs.add(slug);
}

if (slugs.size === 0) {
  console.log("바뀐 블로그 글이 없어 IndexNow를 보내지 않습니다.");
  process.exit(0);
}

const paths = [...[...slugs].map((slug) => `/blog_detail/${slug}`), "/blog_list"];
console.log(`IndexNow 대상 ${paths.length}개:\n${paths.join("\n")}`);
if (flag === "--dry-run") process.exit(0);
execFileSync("node", ["scripts/submit-indexnow.mjs", ...paths], { stdio: "inherit" });

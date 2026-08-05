#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../../../");
const postsDir = path.join(root, "src/data/blog-posts");
const indexPath = path.join(postsDir, "index.ts");
const postFiles = fs
  .readdirSync(postsDir)
  .filter((name) => /^\d{5}-.+\.ts$/.test(name))
  .sort();
const numbers = postFiles.map((name) => Number(name.slice(0, 5)));
const expected = Array.from({ length: numbers.length }, (_, index) => index + 1);

const errors = [];
if (numbers.some((number, index) => number !== expected[index])) {
  errors.push(`blog post filenames must be contiguous from 00001; found ${numbers.join(", ") || "none"}`);
}

const indexSource = fs.readFileSync(indexPath, "utf8");
for (const filename of postFiles) {
  const modulePath = filename.slice(0, -3);
  if (!indexSource.includes(`from "./${modulePath}"`)) {
    errors.push(`blog post is not imported by index.ts: ${filename}`);
  }
}

for (const match of indexSource.matchAll(/from "\.\/(\d{5}-.+)";/g)) {
  const filename = `${match[1]}.ts`;
  if (!postFiles.includes(filename)) {
    errors.push(`index.ts imports a missing blog post: ${filename}`);
  }
}

if (errors.length > 0) {
  console.error(errors.map((error) => `ERROR: ${error}`).join("\n"));
  process.exit(1);
}

console.log(`Blog numbering OK: ${postFiles.length} contiguous post files (00001-${String(postFiles.length).padStart(5, "0")}).`);

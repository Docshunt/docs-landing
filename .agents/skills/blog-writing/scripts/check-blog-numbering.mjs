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

const typesSource = fs.readFileSync(path.join(postsDir, "types.ts"), "utf8");
const categoryIds = [...typesSource.matchAll(/^\s*id:\s*["']([^"']+)["'],/gm)].map((match) => match[1]);
const placementBlock = indexSource.match(/const BLOG_POST_PLACEMENTS:[\s\S]*?=\s*\{([\s\S]*?)\n\};/);
const placementEntries = placementBlock
  ? [...placementBlock[1].matchAll(/^\s*["']([^"']+)["']:\s*\{\s*category:\s*["']([^"']+)["']/gm)].map((match) => ({
      slug: match[1],
      category: match[2],
    }))
  : [];
const postSlugs = [];
for (const filename of postFiles) {
  const source = fs.readFileSync(path.join(postsDir, filename), "utf8");
  const slug = source.match(/\bslug:\s*["']([^"']+)["']/)?.[1];
  if (!slug) {
    errors.push(`blog post file has no slug field: ${filename}`);
  } else {
    postSlugs.push(slug);
  }
}

if (!placementBlock) {
  errors.push("index.ts must define BLOG_POST_PLACEMENTS for blog categories");
} else {
  const placements = new Map(placementEntries.map(({ slug, category }) => [slug, category]));
  for (const slug of postSlugs) {
    const category = placements.get(slug);
    if (!category) {
      errors.push(`blog post has no category mapping in index.ts: ${slug}`);
    } else if (!categoryIds.includes(category)) {
      errors.push(`blog post uses an unknown category: ${slug} -> ${category}`);
    }
  }

  for (const { slug } of placementEntries) {
    if (!postSlugs.includes(slug)) {
      errors.push(`index.ts maps a missing blog post category: ${slug}`);
    }
  }

  for (const category of categoryIds) {
    if (!placementEntries.some((entry) => entry.category === category)) {
      errors.push(`blog category has no posts: ${category}`);
    }
  }
}

if (errors.length > 0) {
  console.error(errors.map((error) => `ERROR: ${error}`).join("\n"));
  process.exit(1);
}

console.log(`Blog numbering OK: ${postFiles.length} contiguous post files (00001-${String(postFiles.length).padStart(5, "0")}).`);
console.log(`Blog categories OK: ${postSlugs.length} posts mapped across ${categoryIds.length} categories.`);

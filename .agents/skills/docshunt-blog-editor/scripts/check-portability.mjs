#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { chromium } from "playwright";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const skillRoot = path.resolve(scriptDirectory, "..");
const repositoryRoot = path.resolve(scriptDirectory, "../../../..");
const failures = [];
const warnings = [];

function pass(message) {
  console.log(`PASS ${message}`);
}

function fail(message) {
  failures.push(message);
  console.error(`FAIL ${message}`);
}

function warn(message) {
  warnings.push(message);
  console.warn(`WARN ${message}`);
}

function requireFile(relativePath) {
  const absolutePath = path.join(repositoryRoot, relativePath);
  if (fs.existsSync(absolutePath)) pass(`${relativePath} exists`);
  else fail(`${relativePath} is missing`);
}

function collectTextFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectTextFiles(entryPath);
    return /\.(?:md|mjs|yaml)$/.test(entry.name) ? [entryPath] : [];
  });
}

const packageJson = JSON.parse(fs.readFileSync(path.join(repositoryRoot, "package.json"), "utf8"));
const requiredNodeMajor = Number(packageJson.engines?.node?.match(/\d+/)?.[0] || 0);
const currentNodeMajor = Number(process.versions.node.split(".")[0]);

if (requiredNodeMajor && currentNodeMajor < requiredNodeMajor) {
  fail(`Node ${process.versions.node} does not satisfy package.json engines.node (${packageJson.engines.node})`);
} else {
  pass(`Node ${process.versions.node} satisfies package.json engines.node (${packageJson.engines?.node || "not set"})`);
}

for (const relativePath of [
  "AGENTS.md",
  ".agents/skills/docshunt-blog-editor/SKILL.md",
  ".agents/skills/blog-writing/SKILL.md",
  "public/docshunt-assets/docshunt-logo.svg",
  "public/docshunt-assets/fonts/pyeojin-gothic-bold.woff2",
  "src/data/blog-posts/index.ts",
]) {
  requireFile(relativePath);
}

const agents = fs.readFileSync(path.join(repositoryRoot, "AGENTS.md"), "utf8");
if (agents.includes(".agents/skills/docshunt-blog-editor/SKILL.md")) {
  pass("AGENTS.md routes Korean blog work to docshunt-blog-editor");
} else {
  fail("AGENTS.md does not route Korean blog work to docshunt-blog-editor");
}

const codexPath = path.join(repositoryRoot, ".codex");
try {
  const stat = fs.lstatSync(codexPath);
  if (stat.isSymbolicLink() && fs.readlinkSync(codexPath) === ".agents") {
    pass(".codex skill discovery points to .agents");
  } else if (process.platform === "win32") {
    warn(".codex is not the expected .agents symlink; AGENTS.md routing remains available on this symlink-disabled checkout");
  } else {
    fail(".codex is not the expected .agents symlink required for Codex skill discovery");
  }
} catch {
  if (process.platform === "win32") {
    warn(".codex discovery link is unavailable; AGENTS.md routing remains available on this symlink-disabled checkout");
  } else {
    fail(".codex discovery link is unavailable");
  }
}

const localPathPatterns = [
  { label: "macOS home path", pattern: /\/Users\/[A-Za-z0-9._-]+\// },
  { label: "Linux home path", pattern: /\/home\/[A-Za-z0-9._-]+\// },
  { label: "Windows home path", pattern: /[A-Za-z]:\\Users\\[^\\]+\\/ },
];

for (const filePath of collectTextFiles(skillRoot)) {
  const source = fs.readFileSync(filePath, "utf8");
  for (const { label, pattern } of localPathPatterns) {
    if (pattern.test(source)) fail(`${path.relative(repositoryRoot, filePath)} contains a machine-specific ${label}`);
  }
}
if (!failures.some((message) => message.includes("machine-specific"))) {
  pass("skill files contain no machine-specific home paths");
}

let browser;
try {
  browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 32, height: 32 } });
  await page.setContent("<!doctype html><title>portability</title>");
  await page.close();
  pass("Playwright Chromium launches successfully");
} catch (error) {
  fail(`Playwright Chromium launch failed: ${error.message}`);
} finally {
  await browser?.close();
}

if (process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY) {
  pass("optional Gemini reviewer is configured");
} else {
  warn("optional Gemini reviewer is not configured; use the manual editorial pass or set GEMINI_API_KEY/GOOGLE_API_KEY locally");
}

warn(
  "GPT image generation is a Codex tool capability, not a repository dependency; use an owned screenshot or a text-free licensed image when unavailable",
);

console.log(`\nPortability check finished with ${failures.length} failure(s) and ${warnings.length} warning(s).`);
if (failures.length) process.exit(1);

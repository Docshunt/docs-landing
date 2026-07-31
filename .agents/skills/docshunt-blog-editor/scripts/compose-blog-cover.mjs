#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { chromium } from "playwright";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "../../../..");

function resolveRepositoryPath(filePath) {
  return path.isAbsolute(filePath) ? filePath : path.resolve(repositoryRoot, filePath);
}

function readArg(name, fallback = "") {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : fallback;
}

function printUsage() {
  console.log(`Usage:
  node compose-blog-cover.mjs \\
    --background <text-free image> \\
    --title-lines "first line|second line" \\
    --hero-output <1200x750 jpg> \\
    --list-output <384x240 jpg> \\
    [--accent-line 2] [--accent #2f80ed] [--background-position center]`);
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function mimeFor(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  const types = {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".woff2": "font/woff2",
  };
  const mime = types[extension];
  if (!mime) throw new Error(`Unsupported asset type: ${extension}`);
  return mime;
}

function dataUrl(filePath) {
  const content = fs.readFileSync(filePath).toString("base64");
  return `data:${mimeFor(filePath)};base64,${content}`;
}

function screenshotOptions(output, quality) {
  const extension = path.extname(output).toLowerCase();
  if (extension === ".jpg" || extension === ".jpeg") {
    return { path: output, type: "jpeg", quality };
  }
  if (extension === ".png") return { path: output, type: "png" };
  throw new Error(`Output must be .jpg, .jpeg, or .png: ${output}`);
}

if (process.argv.includes("--help")) {
  printUsage();
  process.exit(0);
}

const backgroundInput = readArg("--background");
const titleLines = readArg("--title-lines")
  .split("|")
  .map((line) => line.trim())
  .filter(Boolean);
const heroOutputInput = readArg("--hero-output");
const listOutputInput = readArg("--list-output");
const accentLine = Number(readArg("--accent-line", String(titleLines.length)));
const accent = readArg("--accent", "#2f80ed");
const backgroundPosition = readArg("--background-position", "center");

if (!backgroundInput || !heroOutputInput || !listOutputInput || !titleLines.length) {
  printUsage();
  process.exit(1);
}

if (titleLines.length < 2 || titleLines.length > 3) {
  throw new Error("Use two or three title lines separated by |.");
}

if (accentLine < 1 || accentLine > titleLines.length) {
  throw new Error("--accent-line must point to one of the title lines.");
}

if (!/^#[0-9a-f]{6}$/i.test(accent)) {
  throw new Error("--accent must be a six-digit hexadecimal color such as #2f80ed.");
}

const positionParts = backgroundPosition.trim().split(/\s+/);
const validPositionPart = /^(?:left|center|right|top|bottom|(?:100|[0-9]{1,2})%)$/;
if (positionParts.length > 2 || positionParts.some((part) => !validPositionPart.test(part))) {
  throw new Error('--background-position must use keywords or percentages, such as "center" or "70% center".');
}

const background = resolveRepositoryPath(backgroundInput);
const heroOutput = resolveRepositoryPath(heroOutputInput);
const listOutput = resolveRepositoryPath(listOutputInput);

for (const filePath of [background]) {
  if (!fs.existsSync(filePath)) throw new Error(`Asset not found: ${filePath}`);
}

const logo = path.join(repositoryRoot, "public/docshunt-assets/docshunt-logo.svg");
const font = path.join(repositoryRoot, "public/docshunt-assets/fonts/pyeojin-gothic-bold.woff2");

for (const filePath of [logo, font]) {
  if (!fs.existsSync(filePath)) throw new Error(`Repository asset not found: ${filePath}`);
}

for (const output of [heroOutput, listOutput]) {
  fs.mkdirSync(path.dirname(output), { recursive: true });
}

const resolvedBackground = path.resolve(background);
const resolvedHeroOutput = path.resolve(heroOutput);
const resolvedListOutput = path.resolve(listOutput);

if (resolvedHeroOutput === resolvedListOutput) {
  throw new Error("Hero and list outputs must use different paths.");
}

if ([resolvedHeroOutput, resolvedListOutput].includes(resolvedBackground)) {
  throw new Error("Output paths must not overwrite the background image.");
}

const lineMarkup = titleLines
  .map((line, index) => `<span class="title-line${index + 1 === accentLine ? " accent" : ""}">${escapeHtml(line)}</span>`)
  .join("");

const html = `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <style>
    @font-face {
      font-family: "PyeojinGothic";
      src: url("${dataUrl(font)}") format("woff2");
      font-weight: 700;
      font-style: normal;
    }
    * { box-sizing: border-box; }
    html, body { margin: 0; width: 100%; height: 100%; overflow: hidden; background: white; }
    #stage { width: 1200px; height: 750px; transform-origin: top left; }
    #cover {
      position: relative;
      width: 1200px;
      height: 750px;
      overflow: hidden;
      background: #f7f9fc;
      color: #171b24;
      font-family: "PyeojinGothic", Arial, sans-serif;
      letter-spacing: 0;
    }
    .visual {
      position: absolute;
      inset: 0 0 0 auto;
      width: 57%;
      height: 100%;
      overflow: hidden;
      background: #eef2f7;
    }
    .visual img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: ${escapeHtml(backgroundPosition)};
    }
    .visual::after {
      content: "";
      position: absolute;
      inset: 0 auto 0 0;
      width: 28%;
      background: linear-gradient(90deg, #f7f9fc 0%, rgba(247, 249, 252, 0) 100%);
    }
    .copy {
      position: absolute;
      z-index: 2;
      left: 68px;
      top: 66px;
      width: 548px;
      height: 618px;
      display: flex;
      flex-direction: column;
    }
    .logo { width: 192px; height: auto; }
    .title {
      margin-top: 150px;
      width: 548px;
      font-size: 62px;
      line-height: 1.18;
      font-weight: 700;
      letter-spacing: 0;
    }
    .title-line { display: block; white-space: nowrap; }
    .title-line + .title-line { margin-top: 10px; }
    .title-line.accent { color: ${escapeHtml(accent)}; }
  </style>
</head>
<body>
  <div id="stage">
    <main id="cover">
      <div class="visual"><img src="${dataUrl(background)}" alt="" /></div>
      <div class="copy">
        <img class="logo" src="${dataUrl(logo)}" alt="DocsHunt" />
        <div class="title">${lineMarkup}</div>
      </div>
    </main>
  </div>
</body>
</html>`;

const browser = await chromium.launch({ headless: true });

async function render(width, height, scale, output, quality) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: "load" });
  await page.evaluate(async (nextScale) => {
    await document.fonts.ready;
    const stage = document.querySelector("#stage");
    const title = document.querySelector(".title");
    const lines = [...document.querySelectorAll(".title-line")];
    stage.style.transform = `scale(${nextScale})`;

    let size = 62;
    const fits = () => lines.every((line) => line.scrollWidth <= title.clientWidth);
    while (!fits() && size > 42) {
      size -= 1;
      title.style.fontSize = `${size}px`;
    }
    if (!fits()) throw new Error("Title does not fit the cover text-safe area.");
  }, scale);
  await page.screenshot(screenshotOptions(output, quality));
  await page.close();
}

try {
  await render(1200, 750, 1, heroOutput, 92);
  await render(384, 240, 0.32, listOutput, 88);
} finally {
  await browser.close();
}

console.log(path.resolve(heroOutput));
console.log(path.resolve(listOutput));

#!/usr/bin/env node

// Editorial copy guard for docs-landing blog posts.
//
// Posts whose modifiedDate (or date) is on or after COPY_RULES_EFFECTIVE_DATE are "strict":
// banned phrases, emoji, and out-of-range metadata fail the check. Older posts are reported
// as a backlog so legacy content does not block unrelated work. Rewriting a legacy post and
// bumping its modifiedDate makes it strict.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const COPY_RULES_EFFECTIVE_DATE = "2026.11.20";
const STALE_AFTER_DAYS = 180;
const TIME_SENSITIVE_CATEGORIES = new Set(["support-programs", "startup-programs"]);
const TIME_SENSITIVE_TITLE = /공고|모집|마감|접수|신청/;
const OPEN_NOTICE_WORDING = /공고\s*오픈|모집\s*중|접수\s*중|D-\d+/;

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../../../");
const postsDir = path.join(root, "src/data/blog-posts");

const args = new Set(process.argv.slice(2));
const allStrict = args.has("--all-strict");
const showBacklog = args.has("--backlog") || allStrict;
const asJson = args.has("--json");

if (args.has("--help")) {
  console.log(`Usage: node check-blog-copy.mjs [--backlog] [--all-strict] [--json]

  (default)     fail on strict posts only, print backlog counts
  --backlog     list every legacy-post finding
  --all-strict  treat every post as strict (audit mode)
  --json        print findings as JSON lines`);
  process.exit(0);
}

// Phrases that read as generic AI copy or make unsupported promises.
// Keep in sync with references/editorial-style.md "Expressions to Remove".
// BANNED_PHRASES fail anywhere in a strict post.
const BANNED_PHRASES = [
  "알아보겠습니다",
  "알아볼까요",
  "살펴보겠습니다",
  "정리해보겠습니다",
  "정리해 보겠습니다",
  "이번 글에서는",
  "한눈에 보기 쉽게",
  "총정리",
  "꿀팁",
  "필승",
  "필독",
  "획기적",
  "완벽 가이드",
  "안 하면 손해",
  "바로 탈락",
  "놓치지 마세요",
  "단단한 뼈대",
  "완벽한 출발점",
  "확실한 베이스캠프",
  "시장 선도",
];
// Context-dependent words: they fail in the title and description, but in the body they can be
// negated or quoted ("완벽한 문장을 기다리기보다", "미종결 환수금"), so the body only warns.
const HEADLINE_ONLY_BANNED = ["완벽한", "무조건", "종결", "지금 바로", "혁신적"];
const BANNED_PATTERNS = [
  { label: "합격률 N%", pattern: /합격률\s*\d+\s*%/ },
  { label: "N배 높이는", pattern: /\d+\s*배\s*(높이|올리)/ },
  { label: "N% 올리는", pattern: /\d+\s*%\s*(올리|높이)/ },
];
// Repetition of these in the body usually signals filler.
const WATCH_PHRASES = ["여러분", "중요합니다", "필수입니다"];

// Flags are pairs of Regional Indicator symbols, which Extended_Pictographic does not cover.
const EMOJI = /\p{Extended_Pictographic}|\p{Regional_Indicator}|\u20e3/u;
// A number checked against a cited source can be kept by wrapping it in an element with
// data-claim-verified, e.g. <q data-claim-verified>합격률 80%</q>. Only unsupported-claim patterns skip it.
const VERIFIED_CLAIM = /<([a-z]+)[^>]*\bdata-claim-verified\b[^>]*>[\s\S]*?<\/\1>/g;

function readString(source, field) {
  const match = source.match(new RegExp(`\\b${field}:\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)"`));
  return match ? match[1].replace(/\\(.)/g, "$1") : undefined;
}

function parseDate(value) {
  if (!value) return undefined;
  const match = value.match(/^(\d{4})\.(\d{2})\.(\d{2})$/);
  return match ? new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]))) : undefined;
}

function visibleText(source, { skipVerifiedClaims = false } = {}) {
  const html = source.match(/contentHtml:\s*`([\s\S]*?)`,\s*\n/)?.[1] ?? "";
  // A claim verified in contentHtml is also exempt where the same words repeat in the paragraphs fallback.
  const verifiedClaims = skipVerifiedClaims
    ? [...html.matchAll(VERIFIED_CLAIM)].map((match) => match[0].replace(/<[^>]+>/g, "").trim()).filter(Boolean)
    : [];
  const paragraphs = [...source.matchAll(/^\s*(["'`])((?:(?!\1)[^\\]|\\.)*)\1,?\s*$/gm)].map((match) =>
    verifiedClaims.reduce((text, claim) => text.split(claim).join(" "), match[2]),
  );
  const htmlText = (skipVerifiedClaims ? html.replace(VERIFIED_CLAIM, " ") : html)
    .replace(/\$\{[^}]*\}/g, " ")
    // Decorative component icons (e.g. dh-callout-icon) are hidden from readers and are not copy.
    .replace(/<span[^>]*aria-hidden="true"[^>]*>[\s\S]*?<\/span>/g, " ")
    .replace(/<(script|style)[\s\S]*?<\/\1>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/g, " ");
  return `${paragraphs.join("\n")}\n${htmlText}`;
}

function categoriesBySlug() {
  const indexSource = fs.readFileSync(path.join(postsDir, "index.ts"), "utf8");
  return new Map(
    [...indexSource.matchAll(/^\s*["']([^"']+)["']:\s*\{\s*category:\s*["']([^"']+)["']/gm)].map((match) => [match[1], match[2]]),
  );
}

const today = new Date();
const effective = parseDate(COPY_RULES_EFFECTIVE_DATE);
const categories = categoriesBySlug();
const posts = fs
  .readdirSync(postsDir)
  .filter((name) => /^\d{5}-.+\.ts$/.test(name))
  .sort()
  .map((file) => {
    const source = fs.readFileSync(path.join(postsDir, file), "utf8");
    const slug = readString(source, "slug") ?? "";
    const modified = readString(source, "modifiedDate") ?? readString(source, "date");
    const verificationDate = source.match(/verification:\s*\{\s*date:\s*"([^"]+)"/)?.[1];
    return {
      file,
      slug,
      title: readString(source, "title") ?? "",
      description: readString(source, "description") ?? "",
      category: categories.get(slug),
      modified,
      verificationDate,
      text: visibleText(source),
      claimText: visibleText(source, { skipVerifiedClaims: true }),
      strict: allStrict || (parseDate(modified) ?? new Date(0)) >= effective,
    };
  });

const findings = [];
function report(post, level, rule, detail) {
  findings.push({ file: post.file, slug: post.slug, level: post.strict ? level : "backlog", rule, detail });
}

// Duplicate descriptions block only when a strict post is in the group; legacy-only duplicates are backlog.
const descriptionGroups = new Map();
for (const post of posts) {
  if (!descriptionGroups.has(post.description)) descriptionGroups.set(post.description, []);
  descriptionGroups.get(post.description).push(post);
}
for (const group of descriptionGroups.values()) {
  if (group.length < 2) continue;
  const level = group.some((post) => post.strict) ? "error" : "backlog";
  for (const post of group) {
    const others = group.filter((other) => other !== post).map((other) => other.file);
    findings.push({
      file: post.file,
      slug: post.slug,
      level,
      rule: "duplicate-description",
      detail: `same description as ${others.join(", ")}`,
    });
  }
}

for (const post of posts) {
  const surfaces = { title: post.title, description: post.description, body: post.text };
  const claimSurfaces = { ...surfaces, body: post.claimText };

  for (const [surface, text] of Object.entries(surfaces)) {
    const emoji = text.match(EMOJI);
    if (emoji) report(post, "error", "emoji", `${surface}: "${emoji[0]}"`);
    for (const phrase of BANNED_PHRASES) {
      if (text.includes(phrase)) report(post, "error", "banned-phrase", `${surface}: "${phrase}"`);
    }
    for (const phrase of HEADLINE_ONLY_BANNED) {
      if (!text.includes(phrase)) continue;
      if (surface === "body") report(post, "warn", "context-phrase", `body: "${phrase}" (check it is quoted or negated)`);
      else report(post, "error", "banned-phrase", `${surface}: "${phrase}"`);
    }
    for (const { label, pattern } of BANNED_PATTERNS) {
      const match = claimSurfaces[surface].match(pattern);
      if (match) report(post, "error", "unsupported-claim", `${surface}: "${match[0]}" (${label})`);
    }
  }
  for (const phrase of WATCH_PHRASES) {
    const count = post.text.split(phrase).length - 1;
    if (count >= 2) report(post, "warn", "watch-phrase", `body: "${phrase}" x${count}`);
  }
  const exclamations = (post.text.match(/!/g) ?? []).length;
  if (exclamations > 2) report(post, "warn", "exclamation", `body: ${exclamations} exclamation marks`);

  const titleLength = [...post.title].length;
  if (titleLength > 60) report(post, "error", "title-length", `${titleLength} chars (max 60)`);
  else if (titleLength < 30) report(post, "warn", "title-length", `${titleLength} chars (aim 30-60)`);

  const descriptionLength = [...post.description].length;
  if (descriptionLength < 70 || descriptionLength > 160) {
    report(post, "error", "description-length", `${descriptionLength} chars (allowed 70-160, aim 100-150)`);
  } else if (descriptionLength < 100 || descriptionLength > 150) {
    report(post, "warn", "description-length", `${descriptionLength} chars (aim 100-150)`);
  }

  const openWording = `${post.title} ${post.description}`.match(OPEN_NOTICE_WORDING);
  if (openWording && !post.description.startsWith("[지난 공고]")) {
    findings.push({
      file: post.file,
      slug: post.slug,
      level: "stale",
      rule: "open-notice-wording",
      detail: `"${openWording[0]}" in title/description; confirm the notice is still open or mark it [지난 공고]`,
    });
  }

  const timeSensitive = TIME_SENSITIVE_CATEGORIES.has(post.category) || TIME_SENSITIVE_TITLE.test(post.title);
  if (timeSensitive) {
    const checked = parseDate(post.verificationDate);
    if (!checked) {
      findings.push({
        file: post.file,
        slug: post.slug,
        level: "stale",
        rule: "no-verification",
        detail: "time-sensitive post without verification",
      });
    } else {
      const ageDays = Math.floor((today - checked) / 86_400_000);
      if (ageDays > STALE_AFTER_DAYS) {
        findings.push({
          file: post.file,
          slug: post.slug,
          level: "stale",
          rule: "verification-age",
          detail: `verified ${post.verificationDate} (${ageDays} days ago); re-check against the latest official notice`,
        });
      }
    }
  }
}

const errors = findings.filter((finding) => finding.level === "error");
const warnings = findings.filter((finding) => finding.level === "warn");
const backlog = findings.filter((finding) => finding.level === "backlog");
const stale = findings.filter((finding) => finding.level === "stale");
const strictCount = posts.filter((post) => post.strict).length;

if (asJson) {
  for (const finding of findings) console.log(JSON.stringify(finding));
} else {
  const print = (list) => list.forEach(({ file, rule, detail }) => console.log(`  ${file}  [${rule}] ${detail}`));
  if (errors.length) {
    console.log("ERROR");
    print(errors);
  }
  if (warnings.length) {
    console.log("WARN");
    print(warnings);
  }
  if (showBacklog && backlog.length) {
    console.log("BACKLOG (legacy posts, not blocking)");
    print(backlog);
  }
  if (showBacklog && stale.length) {
    console.log("STALE (re-verify time-sensitive facts)");
    print(stale);
  }
  const legacyPosts = new Set(backlog.map((finding) => finding.file)).size;
  console.log(
    `Blog copy: ${strictCount} strict posts, ${errors.length} errors, ${warnings.length} warnings; ` +
      `${legacyPosts} legacy posts with ${backlog.length} findings; ${stale.length} time-sensitive posts to re-verify` +
      (showBacklog ? "" : " (run with --backlog for details)"),
  );
}

process.exit(errors.length ? 1 : 0);

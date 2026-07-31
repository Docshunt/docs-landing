#!/usr/bin/env node

import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

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
  node review-draft-with-gemini.mjs \\
    --post-file <src/data/blog-posts/post.ts> \\
    --artifact <test-results/blog-reviews/review.md> \\
    --allow-external-review \\
    [--task <review purpose>] [--model <gemini model>]

Environment:
  GEMINI_API_KEY or GOOGLE_API_KEY`);
}

if (process.argv.includes("--help")) {
  printUsage();
  process.exit(0);
}

const postFileInput = readArg("--post-file");
const artifactInput = readArg("--artifact");
const originalTask = readArg("--task", "독스헌트 블로그 원고를 사람다운 한국어 문체로 검수한다.");
const model = readArg("--model", process.env.GEMINI_REVIEW_MODEL || "gemini-3.1-pro-preview");
const apiKeys = [...new Set([process.env.GEMINI_API_KEY, process.env.GOOGLE_API_KEY].filter(Boolean))];
const externalReviewAllowed = process.argv.includes("--allow-external-review");

if (!postFileInput || !artifactInput) {
  printUsage();
  process.exit(1);
}

if (!externalReviewAllowed) {
  throw new Error(
    "External review sends the full draft to Google Gemini. Remove personal, customer, and confidential data, then pass --allow-external-review explicitly.",
  );
}

if (!apiKeys.length) {
  throw new Error("GEMINI_API_KEY or GOOGLE_API_KEY is required.");
}

const postFile = resolveRepositoryPath(postFileInput);
const artifact = resolveRepositoryPath(artifactInput);
const artifactRoot = path.join(repositoryRoot, "test-results");
const artifactRelativePath = path.relative(artifactRoot, artifact);

if (artifactRelativePath.startsWith("..") || path.isAbsolute(artifactRelativePath)) {
  throw new Error("Review artifacts may only be written under the ignored test-results directory.");
}

if (!fs.existsSync(postFile)) {
  throw new Error(`Post file not found: ${postFile}`);
}

const source = fs.readFileSync(postFile, "utf8");
const sourceDigest = createHash("sha256").update(source).digest("hex");
const prompt = `당신은 정부지원사업과 사업계획서 분야를 다루는 한국어 블로그의 시니어 편집자입니다.

아래 원고를 처음 보는 한국인 창업자의 입장에서 독립 검수하세요.

검수 기준:
1. 한 문장씩 읽었을 때 한국 실무자가 실제로 쓴 글처럼 자연스러운가
2. 번역투, 보고서투, 광고투, AI식 대칭 구성이나 추상어가 남아 있는가
3. 앞 문장의 결론을 다음 문장이 반복하지 않는가
4. 제목이 만든 궁금증을 본문이 정직하게 해결하는가
5. 평가자 행동, 합격 가능성, AI 사용 결과를 근거 없이 단정하지 않는가
6. 가상 사례와 확인된 사실이 명확히 구분되는가
7. 메인 키워드가 자연스럽고 검색 의도를 충족하는가

출력 형식:
- 사람다운 문체 점수: 100점 만점
- 반드시 고칠 문장: 정확한 원문, 문제, 자연스러운 대체 문장
- 선택적으로 고칠 부분
- 과장 또는 사실성 위험
- 최종 판정: 현재 게시 가능 / 소폭 수정 후 게시 / 재작성 필요

전체 글을 새로 쓰지 말고 실제 문제가 있는 부분만 지적하세요. 억지 지적은 하지 마세요.

[검수 원고]
${source}`;

let response;
let payload;
let lastError = "unknown error";

for (const apiKey of apiKeys) {
  response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-goog-api-key": apiKey,
    },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.2 },
    }),
  });
  payload = await response.json();
  if (response.ok) break;
  lastError = payload?.error?.message || `${response.status} ${response.statusText}`;
}

if (!response?.ok) {
  throw new Error(`Gemini API request failed: ${lastError}`);
}

const rawOutput = (payload.candidates || [])
  .flatMap((candidate) => candidate?.content?.parts || [])
  .map((part) => part?.text || "")
  .join("\n")
  .trim();

if (!rawOutput) {
  throw new Error("Gemini API returned no text.");
}

const markdown = `# Gemini DocsHunt Blog Review

## Original user task

${originalTask}

## Review input

Google Gemini API / \`${model}\`

- Post file: \`${path.relative(repositoryRoot, postFile)}\`
- SHA-256: \`${sourceDigest}\`
- External transmission was explicitly allowed after redaction review.

## Raw API output

\`\`\`text
${rawOutput}
\`\`\`

## Editor decision required

외부 모델의 결과는 편집 근거일 뿐 최종 결정이 아닙니다. 반드시 고칠 항목도 원문과 출처를 다시 대조하고, 문맥을 더 명확하게 만드는 경우에만 반영하세요.
`;

fs.mkdirSync(path.dirname(artifact), { recursive: true });
fs.writeFileSync(artifact, markdown);
console.log(path.resolve(artifact));

#!/usr/bin/env node
// 네이버 검색광고 키워드 도구로 후보 키워드의 월간 검색 수를 조회한다.
//
// 사용법:
//   node .agents/skills/blog-auto-publish/scripts/keyword-volume.mjs 예비창업패키지 "사업자등록 업종코드"
//   node .agents/skills/blog-auto-publish/scripts/keyword-volume.mjs --related 20 사업계획서
//   node .agents/skills/blog-auto-publish/scripts/keyword-volume.mjs --json 키워드1 키워드2
//
// 키는 공개 저장소 밖 ~/.config/docshunt/naver-searchad.env 또는 같은 이름의 환경 변수에서 읽는다.
// 키 값은 어떤 경우에도 출력하지 않는다.
import { createHmac } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const ENV_PATH = join(homedir(), ".config", "docshunt", "naver-searchad.env");
const KEYS = ["NAVER_SEARCHAD_CUSTOMER_ID", "NAVER_SEARCHAD_ACCESS_LICENSE", "NAVER_SEARCHAD_SECRET_KEY"];

function loadCredentials() {
  const values = {};
  if (existsSync(ENV_PATH)) {
    for (const line of readFileSync(ENV_PATH, "utf8").split(/\r?\n/)) {
      const index = line.indexOf("=");
      if (index > 0) values[line.slice(0, index).trim()] = line.slice(index + 1).trim();
    }
  }
  for (const key of KEYS) {
    if (process.env[key]) values[key] = process.env[key];
  }
  const missing = KEYS.filter((key) => !values[key]);
  if (missing.length > 0) {
    console.error(`검색량 키 없음: ${missing.join(", ")} (${ENV_PATH})`);
    process.exit(2);
  }
  return values;
}

function parseArgs(argv) {
  const options = { json: false, related: 0, keywords: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--json") options.json = true;
    else if (arg === "--related") options.related = Number(argv[++i] ?? 0);
    else options.keywords.push(arg);
  }
  if (options.keywords.length === 0) {
    console.error("조회할 키워드를 하나 이상 넣어 주세요.");
    process.exit(1);
  }
  return options;
}

const normalize = (keyword) => keyword.replace(/\s+/g, "").toLowerCase();
const count = (value) => (typeof value === "number" ? value : value === "< 10" ? 5 : Number(value) || 0);
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchKeywordTool(credentials, hints) {
  const uri = "/keywordstool";
  const timestamp = String(Date.now());
  const signature = createHmac("sha256", credentials.NAVER_SEARCHAD_SECRET_KEY).update(`${timestamp}.GET.${uri}`).digest("base64");
  const query = new URLSearchParams({ hintKeywords: hints.map(normalize).join(","), showDetail: "1" });
  const response = await fetch(`https://api.searchad.naver.com${uri}?${query}`, {
    headers: {
      "X-Timestamp": timestamp,
      "X-API-KEY": credentials.NAVER_SEARCHAD_ACCESS_LICENSE,
      "X-Customer": credentials.NAVER_SEARCHAD_CUSTOMER_ID,
      "X-Signature": signature,
    },
  });
  if (!response.ok) {
    const body = (await response.text()).slice(0, 200);
    throw new Error(`키워드 도구 응답 ${response.status}: ${body}`);
  }
  const data = await response.json();
  return data.keywordList ?? [];
}

function toRow(item) {
  const pc = count(item.monthlyPcQcCnt);
  const mobile = count(item.monthlyMobileQcCnt);
  return { keyword: item.relKeyword, pc, mobile, total: pc + mobile, competition: item.compIdx };
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const credentials = loadCredentials();
  const exact = new Map();
  const related = new Map();

  // 키워드 도구는 한 번에 힌트 키워드 5개까지 받는다.
  for (let i = 0; i < options.keywords.length; i += 5) {
    const hints = options.keywords.slice(i, i + 5);
    const wanted = new Set(hints.map(normalize));
    for (const item of await fetchKeywordTool(credentials, hints)) {
      const row = toRow(item);
      if (wanted.has(normalize(item.relKeyword))) exact.set(normalize(item.relKeyword), row);
      else related.set(normalize(item.relKeyword), row);
    }
    if (i + 5 < options.keywords.length) await sleep(1000);
  }

  const asked = options.keywords.map(
    (keyword) =>
      exact.get(normalize(keyword)) ?? {
        keyword,
        pc: 0,
        mobile: 0,
        total: 0,
        competition: "데이터 없음",
      },
  );
  const relatedRows = [...related.values()].sort((a, b) => b.total - a.total).slice(0, options.related);

  if (options.json) {
    console.log(JSON.stringify({ keywords: asked, related: relatedRows }, null, 2));
    return;
  }

  const print = (rows) => {
    for (const row of rows) {
      console.log(`${row.keyword}\t월 ${row.total} (PC ${row.pc} / 모바일 ${row.mobile})\t광고 경쟁 ${row.competition}`);
    }
  };
  console.log("# 조회한 키워드 (네이버 월간 검색 수, 10 미만은 5로 계산)");
  print(asked);
  if (relatedRows.length > 0) {
    console.log(`\n# 연관 키워드 상위 ${relatedRows.length}개 (주제와 무관한 것은 직접 걸러낼 것)`);
    print(relatedRows);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});

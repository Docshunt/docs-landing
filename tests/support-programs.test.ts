import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { setImmediate } from "node:timers/promises";
import test, { afterEach } from "node:test";

import type * as SupportProgramsModule from "../src/server/support-programs";
import type * as SupportProgramsXmlModule from "../src/seo/support-programs-xml";

const require = createRequire(import.meta.url);
const {
  SupportProgramNotFoundError,
  SupportProgramUpstreamError,
  fetchAllSupportPrograms,
  fetchSupportProgramDetail,
  fetchSupportProgramListPage,
  safePostingUrl,
  supportProgramDescription,
  supportProgramPath,
} = require("../src/server/support-programs.ts") as typeof SupportProgramsModule;
const { buildSupportProgramsRss, supportProgramSitemapUrls } =
  require("../src/seo/support-programs-xml.ts") as typeof SupportProgramsXmlModule;

const originalFetch = globalThis.fetch;

afterEach(() => {
  globalThis.fetch = originalFetch;
});

function program(overrides: Record<string, unknown> = {}) {
  return {
    productFileId: "notice:178097",
    fileSourceId: "notice:178097",
    source: "bizinfo",
    title: "2026년 수출지원 & 성장 공고",
    organizingAgency: "중소벤처기업부",
    deadline: "2026-09-30T18:00:00",
    deadlineDateOnly: false,
    createdAt: "2026-09-09T09:10:03.980738",
    isInterested: false,
    postingUrl: "https://example.com/notices/178097?a=1&b=2",
    templateViewerUrl: null,
    applicationFormPreviewUrl: null,
    hasApplicationForm: true,
    eligibility: null,
    analysisStatus: "not_requested",
    supportType: "사업화",
    supportTypes: ["사업화"],
    supportAmount: "최대 1억원",
    region: "전국",
    businessFields: ["software"],
    supportContent: ["연구개발비와 사업화 자금을 지원합니다."],
    eligibilityReasons: [],
    eligibilityConditions: [],
    automaticCheckConditions: [],
    directCheckConditions: [],
    announcementSummary: {
      oneLine: "수출 중소기업의 성장을 지원합니다.",
      markdown: "# 지원 내용",
    },
    attachments: [],
    isEligible: null,
    ...overrides,
  };
}

function apiResponse(data: unknown, init?: ResponseInit) {
  return new Response(JSON.stringify({ data, error: null }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
    ...init,
  });
}

test("encodes a raw support program id exactly once in the public path", () => {
  assert.equal(supportProgramPath("notice:한글/100%"), "/support-programs/notice%3A%ED%95%9C%EA%B8%80%2F100%25");
});

test("uses only API-provided text for descriptions and rejects unsafe posting URLs", () => {
  assert.equal(supportProgramDescription(program()), "수출 중소기업의 성장을 지원합니다.");
  assert.equal(supportProgramDescription(program({ announcementSummary: null })), "연구개발비와 사업화 자금을 지원합니다.");
  assert.equal(safePostingUrl("javascript:alert(1)"), undefined);
  assert.equal(safePostingUrl("https://example.com/notice"), "https://example.com/notice");
});

test("requests the public latest list API and parses its envelope", async () => {
  let requestedUrl = "";
  let requestedRevalidate: number | undefined;
  globalThis.fetch = async (input, init) => {
    requestedUrl = String(input);
    requestedRevalidate = (init as (RequestInit & { next?: { revalidate?: number } }) | undefined)?.next?.revalidate;
    return apiResponse({
      items: [program()],
      totalItems: 1,
      page: 0,
      pageSize: 50,
      totalTemplateItems: 0,
      totalKStartupItems: 1,
      kStartupAvailable: true,
      kStartupMessage: null,
    });
  };

  const result = await fetchSupportProgramListPage(0);

  assert.equal(requestedUrl, "https://app.docshunt.ai/api/products/business-plans?sort=LATEST&page=0&size=50");
  assert.equal(requestedRevalidate, 86_400);
  assert.equal(result.items[0]?.title, "2026년 수출지원 & 성장 공고");
  assert.equal(result.totalItems, 1);

  globalThis.fetch = async () => apiResponse({ items: [], totalItems: 1, page: 0, pageSize: 0 });
  await assert.rejects(fetchSupportProgramListPage(0), SupportProgramUpstreamError);
});

test("distinguishes a missing detail from an upstream failure", async () => {
  globalThis.fetch = async () => new Response("not found", { status: 404 });
  await assert.rejects(fetchSupportProgramDetail("missing-id"), SupportProgramNotFoundError);

  globalThis.fetch = async () => new Response("unavailable", { status: 503 });
  await assert.rejects(fetchSupportProgramDetail("notice:178097"), SupportProgramUpstreamError);
});

function listPage(page: number, totalItems = 251) {
  return {
    items: Array.from({ length: Math.min(50, totalItems - page * 50) }, (_, index) => {
      const id = `notice:${page * 50 + index}`;
      return program({ productFileId: id, fileSourceId: id });
    }),
    totalItems,
    page,
    pageSize: 50,
  };
}

test("shares a complete sitemap scan with at most two uncached page requests", async () => {
  let active = 0;
  let peak = 0;
  const requestedPages: number[] = [];
  globalThis.fetch = async (input, init) => {
    const url = new URL(String(input));
    const page = Number(url.searchParams.get("page"));
    assert.equal(init?.cache, "no-store");
    assert.equal((init as RequestInit & { next?: unknown }).next, undefined);
    assert.equal(url.searchParams.get("size"), "50");
    requestedPages.push(page);
    peak = Math.max(peak, ++active);
    await setImmediate();
    active--;
    return apiResponse(listPage(page));
  };

  const [items, concurrentItems] = await Promise.all([fetchAllSupportPrograms(), fetchAllSupportPrograms()]);

  assert.equal(items, concurrentItems);
  assert.equal(peak, 2);
  assert.deepEqual(requestedPages, [0, 1, 2, 3, 4, 5]);
  assert.deepEqual(
    items.map((item) => item.fileSourceId),
    Array.from({ length: 251 }, (_, index) => `notice:${index}`),
  );
});

test("rejects incomplete or inconsistent sitemap scans but accepts an empty catalogue", async () => {
  for (const failure of ["short-page", "changed-total", "changed-size", "duplicate"]) {
    globalThis.fetch = async (input) => {
      const page = Number(new URL(String(input)).searchParams.get("page"));
      const data = listPage(page, 51);
      if (page === 1) {
        if (failure === "short-page") data.items = [];
        if (failure === "changed-total") data.totalItems++;
        if (failure === "changed-size") data.pageSize--;
        if (failure === "duplicate") data.items = [program({ productFileId: "notice:0", fileSourceId: "notice:0" })];
      }
      return apiResponse(data);
    };
    await assert.rejects(fetchAllSupportPrograms(), SupportProgramUpstreamError, failure);
  }

  globalThis.fetch = async () => apiResponse(listPage(0, 0));
  assert.deepEqual(await fetchAllSupportPrograms(), []);
});

test("waits for the failed batch to drain before allowing another sitemap scan", async () => {
  const secondStarted = Promise.withResolvers<void>();
  const releaseSecond = Promise.withResolvers<void>();
  const requestedPages: number[] = [];
  globalThis.fetch = async (input) => {
    const page = Number(new URL(String(input)).searchParams.get("page"));
    requestedPages.push(page);
    if (page === 1) return new Response("unavailable", { status: 503 });
    if (page === 2) {
      secondStarted.resolve();
      await releaseSecond.promise;
    }
    return apiResponse(listPage(page));
  };

  const pending = fetchAllSupportPrograms();
  const rejection = assert.rejects(pending, SupportProgramUpstreamError);
  await secondStarted.promise;
  await setImmediate();
  assert.equal(fetchAllSupportPrograms(), pending);
  assert.deepEqual(requestedPages, [0, 1, 2]);
  releaseSecond.resolve();
  await rejection;

  globalThis.fetch = async () => apiResponse(listPage(0, 1));
  assert.equal((await fetchAllSupportPrograms()).length, 1);
});

test("builds escaped RSS and sitemap links to canonical detail pages", () => {
  const items = [program(), program({ productFileId: "no-date", fileSourceId: "no-date", createdAt: null })];
  const rss = buildSupportProgramsRss("https://docshunt.ai", items);
  const urls = supportProgramSitemapUrls(items);

  assert.match(rss, /<title>2026년 수출지원 &amp; 성장 공고<\/title>/);
  assert.match(rss, /<link>https:\/\/docshunt\.ai\/support-programs\/notice%3A178097<\/link>/);
  assert.match(rss, /<pubDate>Wed, 09 Sep 2026 00:10:03 GMT<\/pubDate>/);
  assert.equal((rss.match(/<pubDate>/g) ?? []).length, 1);
  assert.deepEqual(urls, [
    { loc: "/support-programs/notice%3A178097", priority: "0.7", changefreq: "daily" },
    { loc: "/support-programs/no-date", priority: "0.7", changefreq: "daily" },
  ]);
});

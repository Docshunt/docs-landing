import type { SupportProgram } from "../server/support-programs.ts";
import { supportProgramDescription, supportProgramId, supportProgramPath } from "../server/support-programs.ts";

import type { SitemapUrl } from "./sitemap-xml.ts";
import { escapeXml } from "./xml.ts";

function absoluteOriginUrl(origin: string, path: string) {
  return new URL(path, `${new URL(origin).origin}/`).href;
}

function rssDate(value: string | null | undefined) {
  if (!value) return undefined;
  const hasTimeZone = /(?:Z|[+-]\d{2}:\d{2})$/i.test(value);
  const normalized = hasTimeZone ? value : /^\d{4}-\d{2}-\d{2}$/.test(value) ? `${value}T00:00:00+09:00` : `${value}+09:00`;
  const date = new Date(normalized);
  return Number.isNaN(date.getTime()) ? undefined : date.toUTCString();
}

export function buildSupportProgramsRss(origin: string, programs: SupportProgram[]) {
  const channelLink = absoluteOriginUrl(origin, "/support-programs");
  const selfLink = absoluteOriginUrl(origin, "/rss.xml");
  const items = programs
    .slice(0, 50)
    .map((program) => {
      const link = absoluteOriginUrl(origin, supportProgramPath(supportProgramId(program)));
      const pubDate = rssDate(program.createdAt);
      return `  <item>
    <title>${escapeXml(program.title)}</title>
    <link>${escapeXml(link)}</link>
    <guid isPermaLink="true">${escapeXml(link)}</guid>
    <description>${escapeXml(supportProgramDescription(program))}</description>${pubDate ? `\n    <pubDate>${pubDate}</pubDate>` : ""}
  </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>독스헌트 지원사업 공고</title>
    <link>${escapeXml(channelLink)}</link>
    <description>최신 정부지원사업과 창업지원사업 공고를 확인하세요.</description>
    <language>ko-KR</language>
    <atom:link href="${escapeXml(selfLink)}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;
}

function kstTime(value: string, endOfDay: boolean) {
  const hasTimeZone = /(?:Z|[+-]\d{2}:\d{2})$/i.test(value);
  const normalized = hasTimeZone
    ? value
    : /^\d{4}-\d{2}-\d{2}$/.test(value)
      ? `${value}T${endOfDay ? "23:59:59" : "00:00:00"}+09:00`
      : `${value}+09:00`;
  const time = new Date(normalized).getTime();
  return Number.isNaN(time) ? undefined : time;
}

/** 마감이 지난 공고인지. 마감일이 없거나 읽을 수 없으면 지나지 않은 것으로 본다. */
export function isSupportProgramClosed(program: SupportProgram, now: Date) {
  if (!program.deadline) return false;
  const deadline = kstTime(program.deadline, program.deadlineDateOnly !== false);
  return deadline !== undefined && deadline < now.getTime();
}

function sitemapDate(value: string | null | undefined) {
  if (!value) return undefined;
  const time = kstTime(value, false);
  return time === undefined ? undefined : new Date(time).toISOString().slice(0, 10);
}

// 마감이 지난 공고는 검색엔진이 우선순위를 낮춰 "발견됨 - 색인 생성 안 됨"으로 쌓이므로 사이트맵에서 뺀다.
// 페이지 자체는 그대로 열리고, 이미 색인된 주소는 유지된다.
export function supportProgramSitemapUrls(programs: SupportProgram[], now = new Date()): SitemapUrl[] {
  return programs
    .filter((program) => !isSupportProgramClosed(program, now))
    .map((program) => {
      const lastmod = sitemapDate(program.createdAt);
      return {
        loc: supportProgramPath(supportProgramId(program)),
        ...(lastmod ? { lastmod } : {}),
        priority: "0.7",
        changefreq: "daily",
      };
    });
}

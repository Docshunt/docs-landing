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

export function supportProgramSitemapUrls(programs: SupportProgram[]): SitemapUrl[] {
  return programs.map((program) => ({
    loc: supportProgramPath(supportProgramId(program)),
    priority: "0.7",
    changefreq: "daily",
  }));
}

import { BLOG_POSTS } from "@/data/docshunt-blogs";
import { BLOG_LIST_DESCRIPTION, dateToIso } from "@/seo/metadata";
import { requestOrigin, absoluteOriginUrl } from "@/seo/request-origin";
import { escapeXml } from "@/seo/sitemap-xml";

function rssDate(date: string) {
  const isoDate = dateToIso(date);
  const parsed = isoDate ? new Date(`${isoDate}T00:00:00+09:00`) : undefined;

  if (!parsed || Number.isNaN(parsed.getTime())) {
    throw new Error(`Invalid blog date: ${date}`);
  }

  return parsed.toUTCString();
}

export function GET(request: Request) {
  const origin = requestOrigin(request);
  const url = (path: string) => absoluteOriginUrl(origin, path);
  const lastBuildDate = BLOG_POSTS.map((post) => post.modifiedDate ?? post.date)
    .sort()
    .at(-1)!;
  const items = BLOG_POSTS.slice(0, 50)
    .map((post) => {
      const link = url(post.sourceUrl);

      return `  <item>
    <title>${escapeXml(post.title)}</title>
    <link>${escapeXml(link)}</link>
    <guid isPermaLink="true">${escapeXml(link)}</guid>
    <pubDate>${rssDate(post.date)}</pubDate>
    <description>${escapeXml(post.description)}</description>
  </item>`;
    })
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>독스헌트 블로그</title>
    <link>${url("/blog_list")}</link>
    <description>${escapeXml(BLOG_LIST_DESCRIPTION)}</description>
    <language>ko-KR</language>
    <lastBuildDate>${rssDate(lastBuildDate)}</lastBuildDate>
    <atom:link href="${url("/feed.xml")}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`,
    {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control": "public, max-age=0, s-maxage=3600",
      },
    },
  );
}

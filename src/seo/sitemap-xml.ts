import { BLOG_CATEGORIES, BLOG_PAGE_COUNT, BLOG_POSTS, BLOG_POSTS_PER_PAGE, getPostsByCategory } from "@/data/docshunt-blogs";

import { dateToIso } from "./metadata";
import { absoluteOriginUrl } from "./request-origin";

export type SitemapUrl = {
  loc: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
};

export const SITEMAP_INDEX_PATH = "/sitemap.xml";
export const SITEMAP_PATHS = ["/sitemap-index.xml", "/sitemap-blog_detail.xml", "/sitemap-blog_list.xml"] as const;

export const STATIC_SITEMAP_URLS: SitemapUrl[] = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/refund-event", priority: "0.9", changefreq: "weekly" },
  { loc: "/pricing", priority: "0.8", changefreq: "monthly" },
  { loc: "/about", priority: "0.7", changefreq: "monthly" },
  { loc: "/sample", priority: "0.7", changefreq: "monthly" },
  { loc: "/review", priority: "0.7", changefreq: "monthly" },
  { loc: "/updates", priority: "0.6", changefreq: "weekly" },
  { loc: "/how_to_convert_hwpx", priority: "0.6", changefreq: "yearly" },
  { loc: "/privacy_policy", priority: "0.3", changefreq: "yearly" },
  { loc: "/business_info", priority: "0.3", changefreq: "yearly" },
  { loc: "/terms", priority: "0.3", changefreq: "yearly" },
  { loc: "/payment_policy", priority: "0.2", changefreq: "yearly" },
];

export function escapeXml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function renderUrl(origin: string, url: SitemapUrl) {
  return `  <url>
    <loc>${escapeXml(absoluteOriginUrl(origin, url.loc))}</loc>${url.lastmod ? `\n    <lastmod>${escapeXml(url.lastmod)}</lastmod>` : ""}${
      url.changefreq ? `\n    <changefreq>${url.changefreq}</changefreq>` : ""
    }${url.priority ? `\n    <priority>${url.priority}</priority>` : ""}
  </url>`;
}

function xmlResponse(body: string) {
  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "private, no-store",
    },
  });
}

export function sitemapIndex(origin: string) {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${SITEMAP_PATHS.map((path) => `  <sitemap><loc>${escapeXml(absoluteOriginUrl(origin, path))}</loc></sitemap>`).join("\n")}
</sitemapindex>`;

  return xmlResponse(body);
}

export function sitemapUrlSet(origin: string, urls: SitemapUrl[]) {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => renderUrl(origin, url)).join("\n")}
</urlset>`;

  return xmlResponse(body);
}

export function blogListSitemapUrls(): SitemapUrl[] {
  const generalPages = Array.from({ length: BLOG_PAGE_COUNT }, (_, index) => {
    const page = index + 1;
    return {
      loc: page === 1 ? "/blog_list" : `/blog_list?page=${page}`,
      priority: page === 1 ? "0.8" : "0.6",
      changefreq: "weekly" as const,
    };
  });

  const categoryPages = BLOG_CATEGORIES.flatMap(({ id }) => {
    const pageCount = Math.max(1, Math.ceil(getPostsByCategory(id).length / BLOG_POSTS_PER_PAGE));
    return Array.from({ length: pageCount }, (_, index) => {
      const page = index + 1;
      const query = new URLSearchParams({ category: id });
      if (page > 1) query.set("page", String(page));
      return {
        loc: `/blog_list?${query.toString()}`,
        priority: page === 1 ? "0.75" : "0.55",
        changefreq: "weekly" as const,
      };
    });
  });

  return [...generalPages, ...categoryPages];
}

export function blogDetailSitemapUrls(): SitemapUrl[] {
  return BLOG_POSTS.map((post) => {
    const lastmod = dateToIso(post.modifiedDate ?? post.date);
    return {
      loc: post.sourceUrl,
      ...(lastmod ? { lastmod } : {}),
      priority: "0.7",
      changefreq: "monthly" as const,
    };
  });
}

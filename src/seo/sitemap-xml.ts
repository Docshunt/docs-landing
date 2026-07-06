import { absoluteUrl } from "@/seo/metadata";

type SitemapUrl = {
  loc: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
};

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function renderUrl(url: SitemapUrl) {
  return `  <url>
    <loc>${escapeXml(absoluteUrl(url.loc))}</loc>${url.lastmod ? `\n    <lastmod>${escapeXml(url.lastmod)}</lastmod>` : ""}${
      url.changefreq ? `\n    <changefreq>${url.changefreq}</changefreq>` : ""
    }${url.priority ? `\n    <priority>${url.priority}</priority>` : ""}
  </url>`;
}

export function sitemapUrlSet(urls: SitemapUrl[]) {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(renderUrl).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

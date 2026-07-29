type SitemapUrl = {
  loc: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
};

function escapeXml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function urlForOrigin(origin: string, value: string) {
  const url = new URL(value, origin);
  return new URL(`${url.pathname}${url.search}${url.hash}`, origin).href;
}

function renderUrl(origin: string, url: SitemapUrl) {
  return `  <url>
    <loc>${escapeXml(urlForOrigin(origin, url.loc))}</loc>${url.lastmod ? `\n    <lastmod>${escapeXml(url.lastmod)}</lastmod>` : ""}${
      url.changefreq ? `\n    <changefreq>${url.changefreq}</changefreq>` : ""
    }${url.priority ? `\n    <priority>${url.priority}</priority>` : ""}
  </url>`;
}

export function sitemapUrlSet(origin: string, urls: SitemapUrl[]) {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => renderUrl(origin, url)).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "private, no-store",
    },
  });
}

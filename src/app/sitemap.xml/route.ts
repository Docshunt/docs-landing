import { SITE_URL } from "@/seo/metadata";

const sitemapPaths = ["/sitemap-index.xml", "/sitemap-blog_detail.xml", "/sitemap-blog_list.xml"];

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPaths.map((path) => `  <sitemap><loc>${SITE_URL}${path}</loc></sitemap>`).join("\n")}
</sitemapindex>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

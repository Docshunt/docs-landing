import { requestOrigin } from "@/seo/request-origin";

const sitemapPaths = ["/sitemap-index.xml", "/sitemap-blog_detail.xml", "/sitemap-blog_list.xml"];

export function GET(request: Request) {
  const origin = requestOrigin(request);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPaths.map((path) => `  <sitemap><loc>${origin}${path}</loc></sitemap>`).join("\n")}
</sitemapindex>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

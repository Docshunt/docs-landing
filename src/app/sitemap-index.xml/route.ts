import { sitemapUrlSet } from "@/seo/sitemap-xml";

export function GET() {
  return sitemapUrlSet([
    {
      loc: "/",
      priority: "1.0",
      changefreq: "weekly",
    },
  ]);
}

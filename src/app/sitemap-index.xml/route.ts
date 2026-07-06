import { sitemapUrlSet } from "@/seo/sitemap-xml";

export function GET() {
  return sitemapUrlSet([
    {
      loc: "/",
      priority: "1.0",
      changefreq: "weekly",
    },
    {
      loc: "/refund-event",
      priority: "0.9",
      changefreq: "weekly",
    },
  ]);
}

import { sitemapUrlSet } from "@/seo/sitemap-xml";

export function GET() {
  return sitemapUrlSet([
    {
      loc: "/blog_list",
      priority: "0.8",
      changefreq: "weekly",
    },
  ]);
}

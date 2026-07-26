import { BLOG_PAGE_COUNT } from "@/data/docshunt-blogs";
import { sitemapUrlSet } from "@/seo/sitemap-xml";

export function GET() {
  return sitemapUrlSet(
    Array.from({ length: BLOG_PAGE_COUNT }, (_, index) => {
      const page = index + 1;
      return {
        loc: page === 1 ? "/blog_list" : `/blog_list?page=${page}`,
        priority: page === 1 ? "0.8" : "0.6",
        changefreq: "weekly" as const,
      };
    }),
  );
}

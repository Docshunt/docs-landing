import { BLOG_CATEGORIES, BLOG_PAGE_COUNT, BLOG_POSTS_PER_PAGE, getPostsByCategory } from "@/data/docshunt-blogs";
import { requestOrigin } from "@/seo/request-origin";
import { sitemapUrlSet } from "@/seo/sitemap-xml";

export function GET(request: Request) {
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

  return sitemapUrlSet(requestOrigin(request), [...generalPages, ...categoryPages]);
}

import { getAllBlogPosts, getBlogPageCount } from "@/data/notion-blog";
import { requestOrigin } from "@/seo/request-origin";
import { sitemapUrlSet } from "@/seo/sitemap-xml";

export const revalidate = 60;

export async function GET(request: Request) {
  const pageCount = getBlogPageCount(await getAllBlogPosts());
  return sitemapUrlSet(
    requestOrigin(request),
    Array.from({ length: pageCount }, (_, index) => {
      const page = index + 1;
      return {
        loc: page === 1 ? "/blog_list" : `/blog_list?page=${page}`,
        priority: page === 1 ? "0.8" : "0.6",
        changefreq: "weekly" as const,
      };
    }),
  );
}

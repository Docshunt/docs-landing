import { getAllBlogPosts } from "@/data/notion-blog";
import { dateToIso } from "@/seo/metadata";
import { requestOrigin } from "@/seo/request-origin";
import { sitemapUrlSet } from "@/seo/sitemap-xml";

export const revalidate = 60;

export async function GET(request: Request) {
  const posts = await getAllBlogPosts();
  return sitemapUrlSet(
    requestOrigin(request),
    posts.map((post) => {
      const lastmod = dateToIso(post.modifiedDate ?? post.date);
      return {
        loc: post.sourceUrl,
        ...(lastmod ? { lastmod } : {}),
        priority: "0.7",
        changefreq: "monthly",
      };
    }),
  );
}

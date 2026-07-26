import { BLOG_POSTS } from "@/data/docshunt-blogs";
import { dateToIso } from "@/seo/metadata";
import { sitemapUrlSet } from "@/seo/sitemap-xml";

export function GET() {
  return sitemapUrlSet(
    BLOG_POSTS.map((post) => {
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

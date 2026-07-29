import { BLOG_POSTS } from "@/data/docshunt-blogs";
import { dateToIso } from "@/seo/metadata";
import { requestOrigin } from "@/seo/request-origin";
import { sitemapUrlSet } from "@/seo/sitemap-xml";

export function GET(request: Request) {
  return sitemapUrlSet(
    requestOrigin(request),
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

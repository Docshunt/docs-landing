import { requestOrigin } from "@/seo/request-origin";
import { blogDetailSitemapUrls, sitemapUrlSet } from "@/seo/sitemap-xml";

export function GET(request: Request) {
  return sitemapUrlSet(requestOrigin(request), blogDetailSitemapUrls());
}

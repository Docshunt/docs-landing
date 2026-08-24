import { sitemapUrlSet, STATIC_SITEMAP_URLS } from "@/seo/sitemap-xml";
import { requestOrigin } from "@/seo/request-origin";

export function GET(request: Request) {
  return sitemapUrlSet(requestOrigin(request), STATIC_SITEMAP_URLS);
}

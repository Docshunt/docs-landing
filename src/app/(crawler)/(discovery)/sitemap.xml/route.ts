import { requestOrigin } from "@/seo/request-origin";
import { sitemapIndex } from "@/seo/sitemap-xml";

export function GET(request: Request) {
  return sitemapIndex(requestOrigin(request));
}

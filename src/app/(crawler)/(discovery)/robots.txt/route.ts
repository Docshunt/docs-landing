import { robotsTxt } from "@/seo/crawler-content";
import { requestOrigin } from "@/seo/request-origin";

export function GET(request: Request) {
  return robotsTxt(requestOrigin(request));
}

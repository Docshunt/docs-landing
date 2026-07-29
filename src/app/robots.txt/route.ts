import { requestOrigin } from "@/seo/request-origin";

export function GET(request: Request) {
  const origin = requestOrigin(request);
  const body = `User-agent: *
Disallow: /version-test/

Sitemap: ${origin}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "private, no-store",
    },
  });
}

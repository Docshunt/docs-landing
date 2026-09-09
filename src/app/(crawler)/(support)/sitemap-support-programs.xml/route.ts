import { SITE_URL } from "@/seo/metadata";
import { sitemapUrlSet } from "@/seo/sitemap-xml";
import { supportProgramSitemapUrls } from "@/seo/support-programs-xml";
import { fetchAllSupportPrograms } from "@/server/support-programs";

export async function GET() {
  try {
    const response = sitemapUrlSet(SITE_URL, supportProgramSitemapUrls(await fetchAllSupportPrograms()));
    response.headers.set("Cache-Control", "public, max-age=0, s-maxage=86400, stale-while-revalidate=86400");
    return response;
  } catch {
    return new Response("Support programs sitemap is temporarily unavailable.", {
      status: 503,
      headers: { "Content-Type": "text/plain; charset=utf-8", "Retry-After": "300" },
    });
  }
}

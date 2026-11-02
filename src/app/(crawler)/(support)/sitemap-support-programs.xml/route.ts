import { unstable_cache } from "next/cache";

import { APP_URL, SITE_URL } from "@/seo/metadata";
import { sitemapUrlSet } from "@/seo/sitemap-xml";
import { supportProgramSitemapUrls } from "@/seo/support-programs-xml";
import { fetchAllSupportPrograms } from "@/server/support-programs";

const getSitemap = unstable_cache(
  async () => sitemapUrlSet(SITE_URL, supportProgramSitemapUrls(await fetchAllSupportPrograms())).text(),
  ["support-programs-sitemap-v1", APP_URL, SITE_URL],
  { revalidate: 86_400 },
);

export async function GET() {
  try {
    return new Response(await getSitemap(), {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        // Let the Data Cache own freshness; a CDN must not recache a stale result.
        "Cache-Control": "private, no-store",
      },
    });
  } catch {
    return new Response("Support programs sitemap is temporarily unavailable.", {
      status: 503,
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store", "Retry-After": "300" },
    });
  }
}

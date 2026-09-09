import { SITE_URL } from "@/seo/metadata";
import { buildSupportProgramsRss } from "@/seo/support-programs-xml";
import { fetchSupportProgramListPage } from "@/server/support-programs";

export async function GET() {
  try {
    const { items } = await fetchSupportProgramListPage();
    return new Response(buildSupportProgramsRss(SITE_URL, items), {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=86400",
      },
    });
  } catch {
    return new Response("Support programs feed is temporarily unavailable.", {
      status: 503,
      headers: { "Content-Type": "text/plain; charset=utf-8", "Retry-After": "300" },
    });
  }
}

import { sitemapUrlSet } from "@/seo/sitemap-xml";

export function GET() {
  return sitemapUrlSet([
    {
      loc: "/",
      priority: "1.0",
      changefreq: "weekly",
    },
    {
      loc: "/refund-event",
      priority: "0.9",
      changefreq: "weekly",
    },
    {
      loc: "/pricing",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      loc: "/about",
      priority: "0.7",
      changefreq: "monthly",
    },
    {
      loc: "/sample",
      priority: "0.7",
      changefreq: "monthly",
    },
    {
      loc: "/review",
      priority: "0.7",
      changefreq: "monthly",
    },
    {
      loc: "/how_credits_work",
      priority: "0.6",
      changefreq: "monthly",
    },
    {
      loc: "/how_to_convert_hwpx",
      priority: "0.6",
      changefreq: "yearly",
    },
    {
      loc: "/privacy_policy",
      priority: "0.3",
      changefreq: "yearly",
    },
    {
      loc: "/terms",
      priority: "0.3",
      changefreq: "yearly",
    },
    {
      loc: "/payment_policy",
      priority: "0.2",
      changefreq: "yearly",
    },
    {
      loc: "/marketing_consent",
      priority: "0.2",
      changefreq: "yearly",
    },
    {
      loc: "/marketing_consent_en_",
      priority: "0.2",
      changefreq: "yearly",
    },
  ]);
}

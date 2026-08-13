import type { NextConfig } from "next";

const appOrigin = new URL(process.env.NEXT_PUBLIC_APP_ORIGIN ?? "https://app.docshunt.ai").origin;

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  output: "standalone",
  async redirects() {
    return [
      { source: "/reset_pw", destination: `${appOrigin}/reset_pw`, permanent: true },
      { source: "/blog_editor_admin_", destination: `${appOrigin}/blog_editor_admin_`, permanent: true },
      {
        source: "/_deprecated_privacy_policy_en_",
        destination: `${appOrigin}/_deprecated_privacy_policy_en_`,
        permanent: true,
      },
      {
        source: "/_deprecated_terms_en_",
        destination: `${appOrigin}/_deprecated_terms_en_`,
        permanent: true,
      },
      { source: "/index_seo", destination: "/", permanent: true },
      { source: "/________", destination: "/refund-event", permanent: true },
      { source: "/2026_master_plan", destination: "/refund-event", permanent: true },
      { source: "/_deprecated_2026_master_plan", destination: "/refund-event", permanent: true },
      { source: "/_deprecated_index_2026_04_", destination: "/", permanent: true },
      { source: "/_deprecated_index_old", destination: "/", permanent: true },
      { source: "/_deprecated_pricing", destination: "/pricing", permanent: true },
    ];
  },
};

export default nextConfig;

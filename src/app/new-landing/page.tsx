import type { Metadata } from "next";

import { LandingPageClient } from "../landing-page-client";

export const metadata: Metadata = {
  title: "독스헌트 새 랜딩 시안",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NewLandingPage() {
  return <LandingPageClient initialDraft />;
}

import type { Metadata } from "next";
import { LandingPageClient } from "@/components/landing/pages";

export const metadata: Metadata = {
  title: "독스헌트 | 개편 전 메인",
  robots: { index: false, follow: false },
};

export default function LandingBeforeReview() {
  return <LandingPageClient initialDraft selectedUpdates />;
}

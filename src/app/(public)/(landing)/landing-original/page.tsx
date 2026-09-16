import type { Metadata } from "next";
import { LandingPageClient } from "@/components/landing/pages";

export const metadata: Metadata = {
  title: "독스헌트 | 원본 메인 보관",
  robots: { index: false, follow: false },
};

export default function LandingOriginal() {
  return <LandingPageClient initialDraft />;
}

import type { Metadata } from "next";

import { LandingPageClient } from "../landing-page-client";
import { buildPageMetadata, DEFAULT_DESCRIPTION, DEFAULT_TITLE, OG_IMAGE } from "@/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  path: "/new-landing",
  image: OG_IMAGE,
});

export default function NewLandingPage() {
  return <LandingPageClient initialDraft />;
}

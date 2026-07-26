import { JsonLd } from "@/components/json-ld";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, webPageJsonLd } from "@/seo/metadata";

import { LandingPageClient } from "./landing-page-client";

export default function Home() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ name: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, path: "/" })} />
      <LandingPageClient initialDraft />
    </>
  );
}

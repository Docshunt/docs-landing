import { PageDocument } from "@/components/site/layout/page-document";
import { JsonLd } from "@/components/json-ld";
import { LandingPageClient } from "@/components/landing/pages";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, softwareApplicationJsonLd, webPageJsonLd } from "@/seo/metadata";

export function HomeTemplate() {
  return (
    <PageDocument>
      <JsonLd data={webPageJsonLd({ name: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, path: "/" })} />
      <JsonLd data={softwareApplicationJsonLd()} />
      <LandingPageClient initialDraft />
    </PageDocument>
  );
}

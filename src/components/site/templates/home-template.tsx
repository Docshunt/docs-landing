import { PageDocument } from "@/components/site/layout/page-document";
import { JsonLd } from "@/components/json-ld";
import { LandingPageClient } from "@/components/landing/pages";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, softwareApplicationJsonLd, webPageJsonLd } from "@/seo/metadata";

type HomeTemplateProps = {
  selectedUpdates?: boolean;
};

export function HomeTemplate({ selectedUpdates = false }: HomeTemplateProps) {
  return (
    <PageDocument>
      <JsonLd data={webPageJsonLd({ name: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, path: "/" })} />
      <JsonLd data={softwareApplicationJsonLd()} />
      <LandingPageClient initialDraft selectedUpdates={selectedUpdates} />
    </PageDocument>
  );
}

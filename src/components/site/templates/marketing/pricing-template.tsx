import { PageDocument } from "@/components/site/layout/page-document";
import { PricingPageClient } from "@/components/pricing/pricing-page-client";
import { JsonLd } from "@/components/json-ld";
import { PRICING_DESCRIPTION, PRICING_TITLE, buildPageMetadata, webPageJsonLd } from "@/seo/metadata";

export const metadata = buildPageMetadata({
  title: PRICING_TITLE,
  description: PRICING_DESCRIPTION,
  path: "/pricing",
});

export function PricingPageTemplate() {
  return (
    <PageDocument>
      <JsonLd data={webPageJsonLd({ name: PRICING_TITLE, description: PRICING_DESCRIPTION, path: "/pricing" })} />
      <PricingPageClient />
    </PageDocument>
  );
}

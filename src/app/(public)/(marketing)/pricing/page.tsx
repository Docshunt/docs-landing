export { metadata } from "@/components/site/pages/marketing/pricing-page";

import { JsonLd } from "@/components/json-ld";
import { PricingPreviewClient } from "@/components/pricing/pricing-preview-client";
import { PageDocument } from "@/components/site/layout/page-document";
import { PRICING_DESCRIPTION, PRICING_TITLE, webPageJsonLd } from "@/seo/metadata";

export default function PricingPage() {
  return (
    <PageDocument>
      <JsonLd data={webPageJsonLd({ name: PRICING_TITLE, description: PRICING_DESCRIPTION, path: "/pricing" })} />
      <PricingPreviewClient />
    </PageDocument>
  );
}

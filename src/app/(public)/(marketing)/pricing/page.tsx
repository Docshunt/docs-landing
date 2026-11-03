export { metadata } from "@/components/site/pages/marketing/pricing-page";

import { JsonLd } from "@/components/json-ld";
import { PricingPreviewClient } from "@/components/pricing/pricing-preview-client";
import { PageDocument } from "@/components/site/layout/page-document";
import { PRICING_DESCRIPTION, PRICING_TITLE, webPageJsonLd } from "@/seo/metadata";

export const dynamic = "force-dynamic";

export default function PricingPage() {
  // Server-only request timestamp keeps seasonal prices correct before hydration.
  // eslint-disable-next-line react-hooks/purity
  const initialNow = Date.now();
  return (
    <PageDocument>
      <JsonLd data={webPageJsonLd({ name: PRICING_TITLE, description: PRICING_DESCRIPTION, path: "/pricing" })} />
      <PricingPreviewClient initialNow={initialNow} />
    </PageDocument>
  );
}

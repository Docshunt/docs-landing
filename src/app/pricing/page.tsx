import { PricingPageClient } from "./pricing-page-client";
import { JsonLd } from "@/components/json-ld";
import { PRICING_DESCRIPTION, PRICING_TITLE, buildPageMetadata, webPageJsonLd } from "@/seo/metadata";

export const metadata = buildPageMetadata({
  title: PRICING_TITLE,
  description: PRICING_DESCRIPTION,
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ name: PRICING_TITLE, description: PRICING_DESCRIPTION, path: "/pricing" })} />
      <PricingPageClient />
    </>
  );
}

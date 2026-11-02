import { PageDocument } from "@/components/site/layout/page-document";
import { JsonLd } from "@/components/json-ld";
import { LandingPageClient } from "@/components/landing/pages";
import { LandingLoginRedirect } from "@/components/landing-login-redirect";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, softwareApplicationJsonLd, webPageJsonLd } from "@/seo/metadata";

type HomeTemplateProps = {
  selectedUpdates?: boolean;
  redirectLoggedIn?: boolean;
};

export function HomeTemplate({ selectedUpdates = false, redirectLoggedIn = false }: HomeTemplateProps) {
  return (
    <PageDocument>
      {redirectLoggedIn ? <LandingLoginRedirect /> : null}
      <JsonLd data={webPageJsonLd({ name: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, path: "/" })} />
      <JsonLd data={softwareApplicationJsonLd()} />
      <LandingPageClient initialDraft selectedUpdates={selectedUpdates} />
    </PageDocument>
  );
}

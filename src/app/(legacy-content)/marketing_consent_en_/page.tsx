import { JsonLd } from "@/components/json-ld";
import { MARKETING_CONSENT_EN_DESCRIPTION, MARKETING_CONSENT_EN_TITLE, buildPageMetadata, webPageJsonLd } from "@/seo/metadata";

export const metadata = buildPageMetadata({
  title: MARKETING_CONSENT_EN_TITLE,
  description: MARKETING_CONSENT_EN_DESCRIPTION,
  path: "/marketing_consent_en_",
  locale: "en_US",
});

export default function MarketingConsentEnglishPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: MARKETING_CONSENT_EN_TITLE,
          description: MARKETING_CONSENT_EN_DESCRIPTION,
          path: "/marketing_consent_en_",
          inLanguage: "en",
        })}
      />
      <article className="legal-document" lang="en">
        <header className="legal-title">
          <h1>Consent to Collect and Use Marketing Information (Optional)</h1>
        </header>
        <dl className="legacy-definition-list">
          <div>
            <dt>Purpose of Collection</dt>
            <dd>
              To send marketing information, including new service and feature updates, event information and participation opportunities,
              and personalized advertisements.
            </dd>
          </div>
          <div>
            <dt>Information to be Collected</dt>
            <dd>Email address</dd>
          </div>
          <div>
            <dt>Retention and Use Period</dt>
            <dd>Until membership withdrawal or until consent to receive marketing information is withdrawn.</dd>
          </div>
        </dl>
        <p className="legacy-notice">
          ※ You may refuse to consent to receiving marketing information. Even if you refuse, you can still use all of Docshunt&apos;s
          services normally. You can withdraw your consent at any time through the customer center.
        </p>
      </article>
    </>
  );
}

import { PageDocument } from "@/components/site/layout/page-document";
import { JsonLd } from "@/components/json-ld";
import { MARKETING_CONSENT_DESCRIPTION, MARKETING_CONSENT_TITLE, buildPageMetadata, webPageJsonLd } from "@/seo/metadata";

export const metadata = buildPageMetadata({
  title: MARKETING_CONSENT_TITLE,
  description: MARKETING_CONSENT_DESCRIPTION,
  path: "/marketing_consent",
  robots: { index: false, follow: false },
});

export function MarketingConsentPageTemplate() {
  return (
    <PageDocument>
      <JsonLd
        data={webPageJsonLd({
          name: MARKETING_CONSENT_TITLE,
          description: MARKETING_CONSENT_DESCRIPTION,
          path: "/marketing_consent",
        })}
      />
      <article className="legal-document">
        <header className="legal-title">
          <h1>독스헌트AI 마케팅 정보 수집 및 이용동의 (선택)</h1>
        </header>
        <dl className="legacy-definition-list">
          <div>
            <dt>수집 목적</dt>
            <dd>신규 서비스 및 기능 업데이트 안내, 이벤트 정보 및 참여 기회 제공, 맞춤형 광고 등 마케팅 정보 전송</dd>
          </div>
          <div>
            <dt>수집 항목</dt>
            <dd>이메일 주소</dd>
          </div>
          <div>
            <dt>보유 및 이용기간</dt>
            <dd>회원 탈퇴 또는 마케팅 수신 동의 철회 시까지</dd>
          </div>
        </dl>
        <p className="legacy-notice">
          ※ 마케팅 정보 수신에 대한 동의를 거부할 수 있으며, 동의를 거부하시더라도 독스헌트의 모든 서비스를 정상적으로 이용하실 수 있습니다.
          수신 동의는 언제든지 고객센터를 통해 철회할 수 있습니다.
        </p>
      </article>
    </PageDocument>
  );
}

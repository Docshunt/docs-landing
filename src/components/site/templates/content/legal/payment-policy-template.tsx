import { PageDocument } from "@/components/site/layout/page-document";
import { JsonLd } from "@/components/json-ld";
import { PAYMENT_POLICY_DESCRIPTION, PAYMENT_POLICY_TITLE, buildPageMetadata, webPageJsonLd } from "@/seo/metadata";

export const metadata = buildPageMetadata({
  title: PAYMENT_POLICY_TITLE,
  description: PAYMENT_POLICY_DESCRIPTION,
  path: "/payment_policy",
});

export function PaymentPolicyPageTemplate() {
  return (
    <PageDocument>
      <JsonLd
        data={webPageJsonLd({
          name: PAYMENT_POLICY_TITLE,
          description: PAYMENT_POLICY_DESCRIPTION,
          path: "/payment_policy",
        })}
      />
      <article className="legal-document">
        <header className="legal-title">
          <h1>재화의 주문 및 결제</h1>
        </header>
        <section>
          <h2>제11조 (대금결제)</h2>
          <ol>
            <li>
              회원이 유료서비스에 대한 &quot;구매&quot;, &quot;결제&quot;, &quot;확인&quot; 등의 버튼을 클릭함으로써 이용약관에 따라
              유료서비스 이용계약이 성립합니다.
            </li>
            <li>회원은 신용카드, 직불카드 등의 결제수단을 이용하여 결제할 수 있습니다.</li>
            <li>구독형 서비스의 경우 회원이 등록한 결제수단을 통하여 매월 자동으로 결제됩니다.</li>
            <li>회원은 다음 결제일 전까지 마이페이지 또는 고객센터를 통해 자동결제를 중단할 수 있습니다.</li>
            <li>결제 실패 시 회사는 7일 이내에 재결제를 시도하며, 재결제가 실패할 경우 서비스 이용이 일시 중단될 수 있습니다.</li>
          </ol>
        </section>
        <section>
          <h2>제12조 (청약철회 등)</h2>
          <ol>
            <li>회원은 유료서비스를 전혀 사용하지 않았을 경우 결제일로부터 7일 이내에 청약철회를 할 수 있습니다.</li>
            <li>
              다음 경우에는 청약철회가 제한됩니다.
              <ol>
                <li>회원이 이미 서비스를 사용한 경우</li>
                <li>디지털콘텐츠의 제공이 개시된 경우</li>
              </ol>
            </li>
          </ol>
        </section>
      </article>
    </PageDocument>
  );
}

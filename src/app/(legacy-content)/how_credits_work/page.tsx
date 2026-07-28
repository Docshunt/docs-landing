import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { CREDITS_GUIDE_DESCRIPTION, CREDITS_GUIDE_TITLE, buildPageMetadata, webPageJsonLd } from "@/seo/metadata";

export const metadata = buildPageMetadata({
  title: CREDITS_GUIDE_TITLE,
  description: CREDITS_GUIDE_DESCRIPTION,
  path: "/how_credits_work",
});

export default function CreditsGuidePage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: CREDITS_GUIDE_TITLE,
          description: CREDITS_GUIDE_DESCRIPTION,
          path: "/how_credits_work",
        })}
      />
      <article className="legal-document">
        <header className="legal-title">
          <h1>How Credits Work</h1>
        </header>
        <section>
          <h2>1. What are credits?</h2>
          <p>
            Credits are units consumed when using various AI features such as Core Plan generation, automatic business plan setup, and more
            on DocsHunt. Credits are provided monthly depending on your plan, and with a Pro plan, you can purchase additional credits.
          </p>
        </section>
        <section>
          <h2>2. How many credits do I get with my plan?</h2>
          <p>Credits are topped up one day before your payment date and reset on the same day each month.</p>
          <div className="legacy-table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">요금제</th>
                  <th scope="col">월 제공 크레딧</th>
                  <th scope="col">추가 구매</th>
                  <th scope="col">이월 여부</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pro</td>
                  <td>10,000</td>
                  <td>가능</td>
                  <td>매월 초기화</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="legacy-notice">
            현재 판매 중인 플랜과 제공량은 <Link href="/pricing">요금제 페이지</Link>를 확인하세요.
          </p>
        </section>
        <section>
          <h2>3. How are credits used?</h2>
          <ul>
            <li>Document export: 500 credits</li>
            <li>Automatic business plan setup: 2,000 credits</li>
            <li>AI editing: 10 credits</li>
          </ul>
        </section>
        <section>
          <h2>5. Do credits expire?</h2>
          <ul>
            <li>Credits included with the Free/Pro plan are reset monthly and do not roll over.</li>
            <li>Additional credits you purchase do not expire and are permanently retained.</li>
          </ul>
        </section>
      </article>
    </>
  );
}

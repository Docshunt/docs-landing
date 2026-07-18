import type { Metadata } from "next";
import Link from "next/link";

const assets = "/docshunt-assets";
const appUrl = "https://app.docshunt.ai";
const refundApplicationUrl = "https://tally.so/r/EkZ7rX";
const interviewConsentUrl = "https://tally.so/r/dWvbeq";

const siteNavLinks = [
  { href: "/pricing", label: "요금제 / 환급" },
  { href: "/blog_list", label: "블로그" },
  { href: "/refund-event", label: "환급 받기" },
];

const eligibilitySteps = [
  {
    number: "01",
    title: "공고 신청 전",
    description: "해당 공고의 신청 마감일 전까지 연간 Pro 또는 Max 구독이 활성 상태여야 합니다.",
  },
  {
    number: "02",
    title: "준비와 신청",
    description: "맞춤 공고 추천과 양식별 사업계획서 작성으로 신청을 준비하세요.",
  },
  {
    number: "03",
    title: "최종 합격 발표일",
    description: "최종 합격 발표일에도 연간 Pro 또는 Max 구독이 활성 상태여야 합니다.",
  },
];

const refundTiers = [
  {
    rate: "10%",
    title: "일반 합격 인증",
    description: "합격 증빙을 제출하면 환급을 신청할 수 있어요.",
  },
  {
    rate: "25%",
    title: "블로그 후기",
    description: "독스헌트 이용 후기를 블로그에 남기면 더 높은 비율로 환급해드려요.",
  },
  {
    rate: "50%",
    title: "인터뷰 참여",
    description: "인터뷰 자료 제출과 활용에 동의하면 최대 환급 비율이 적용돼요.",
    featured: true,
  },
];

const noticeGroups = [
  {
    title: "○ 2026 지원사업 합격 시 환급 안내",
    items: [
      "별도 상품 구매 없이 독스헌트 연간 Pro 또는 Max 요금제를 이용한 고객이 환급 대상이 됩니다.",
      "해당 공고 신청 마감일 전부터 최종 합격 발표일까지 연간 Pro 또는 Max 구독이 활성 상태여야 합니다.",
      "환급액은 본인이 실제 결제한 금액을 기준으로 산정하며, 제세공과금 22% 공제 후 지급됩니다.",
    ],
  },
  {
    title: "○ 이용 기간 및 서비스 정책",
    items: [
      "서비스 이용 기간과 제공 기능은 구매한 독스헌트 요금제의 이용 정책을 따릅니다.",
      "시스템 안정성을 위해 요금제별 사용량 제한이 적용될 수 있습니다.",
    ],
  },
  {
    title: "○ 합격 시 환급 규정",
    items: [
      "일반 합격 인증은 10%, 블로그 후기는 25%, 인터뷰 참여는 50% 환급 비율이 적용됩니다.",
      "무료 체험, 쿠폰 또는 프로모션 크레딧, 이미 환불된 금액은 환급 산정에서 제외됩니다.",
      "합격 증빙 서류 제출과 내부 검토가 완료된 뒤 순차적으로 환급되며, 부정한 방법으로 참여한 경우 혜택이 취소될 수 있습니다.",
      "독스헌트는 지원사업 합격을 보장하지 않으며, 합격 발표 후 시작한 구독은 해당 합격 건의 환급 대상이 아닙니다.",
    ],
  },
];

export const metadata: Metadata = {
  title: "2026 지원사업 합격 시 환급 | 독스헌트",
  description: "연간 Pro 또는 Max 요금제로 지원사업을 준비하고 합격하면, 실제 결제한 구독료의 최대 50%를 환급받으세요.",
  alternates: {
    canonical: "https://docshunt.ai/refund-event",
  },
  openGraph: {
    title: "2026 지원사업 합격 시 환급",
    description: "연간 Pro 또는 Max 요금제로 지원사업을 준비하고 합격하면, 실제 결제한 구독료의 최대 50%를 환급받으세요.",
    url: "https://docshunt.ai/refund-event",
    type: "website",
    locale: "ko_KR",
  },
};

function Chevron() {
  return <span aria-hidden="true">›</span>;
}

function RefundHeroVisual() {
  return (
    <div className="refund-hero-visual" aria-hidden="true">
      <div className="refund-ticket refund-ticket-side refund-ticket-side-left">
        <span>지원사업 합격</span>
        <strong>
          구독료
          <br />
          합격 시 환급
        </strong>
        <b>최대 50%</b>
      </div>
      <div className="refund-ticket refund-ticket-main">
        <p>2026 지원사업 합격 환급</p>
        <strong>
          독스헌트
          <br />
          구독료 환급
        </strong>
        <span className="refund-ticket-rate">최대 50%</span>
        <span className="refund-ticket-year">2026</span>
        <div className="refund-ticket-brand" aria-hidden="true">
          <b>DOCSHUNT</b>
          <b>DOCSHUNT</b>
          <b>DOCSHUNT</b>
        </div>
      </div>
      <div className="refund-ticket refund-ticket-side refund-ticket-side-right">
        <span>환급 산정</span>
        <strong>
          실제 결제
          <br />
          금액 기준
        </strong>
        <b>2026</b>
      </div>
    </div>
  );
}

export default function RefundEventPage() {
  return (
    <main className="refund-event-page" id="top">
      <nav className="refund-event-nav" aria-label="독스헌트 사이트 내비게이션">
        <Link className="refund-event-logo" href="/" aria-label="독스헌트 홈">
          <img src={`${assets}/docshunt-logo-white.svg`} alt="DocsHunt" />
        </Link>
        <div className="refund-event-nav-links">
          {siteNavLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <a className="refund-event-nav-cta" href={appUrl}>
          무료로 시작하기
        </a>
        <details className="refund-event-mobile-menu">
          <summary aria-label="메뉴 열기">
            <span />
          </summary>
          <div>
            {siteNavLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </details>
      </nav>

      <section className="refund-hero" id="refund-package" aria-labelledby="refund-hero-title">
        <p className="refund-eyebrow">2026 지원사업 합격 시 환급</p>
        <h1 className="refund-hero-title" id="refund-hero-title">
          지원사업 준비부터 합격까지,
          <br />
          독스헌트 구독료 최대 50% 환급
        </h1>
        <p className="refund-hero-copy">
          연간 Pro 또는 Max로 해당 공고 신청 마감일 전부터 구독을 유지하면,
          <br />
          실제 결제한 구독료를 기준으로 최대 50%를 환급해드립니다.
        </p>
        <RefundHeroVisual />
        <a className="refund-button refund-button-light" href="#refund-eligibility">
          환급 조건 확인하기 <Chevron />
        </a>
      </section>

      <section className="refund-dark refund-benefit" id="refund-event" aria-labelledby="refund-benefit-title">
        <div className="refund-pill">구독할수록 쌓이는 환급 혜택</div>
        <h2 id="refund-benefit-title">
          매달 쓰는 독스헌트가
          <br />
          합격 시 환급으로 돌아옵니다
        </h2>
        <div className="refund-benefit-bar">
          <div>
            <span>환급 기준</span>
            <strong>연간 Pro·Max 구독료</strong>
          </div>
          <div>
            <span>환급 비율</span>
            <strong>최대 50%</strong>
          </div>
          <div>
            <span>지급 방식</span>
            <strong>제세공과금 22% 공제 후</strong>
          </div>
        </div>
        <a className="refund-button refund-button-outline-light" href={appUrl}>
          요금제 시작하기 <Chevron />
        </a>
        <ul className="refund-benefit-notes">
          <li>연간 Pro 또는 Max 요금제 이용만으로 환급 대상이 됩니다.</li>
          <li>해당 연도에 결제한 연간 구독료가 환급 기준 금액에 반영됩니다.</li>
          <li>지원사업 합격과 환급은 보장되지 않으며, 자세한 조건은 아래 참여 규정을 확인해 주세요.</li>
        </ul>
      </section>

      <section className="refund-eligibility" id="refund-eligibility" aria-labelledby="refund-eligibility-title">
        <div className="refund-eligibility-inner">
          <div className="refund-pill">환급 자격</div>
          <h2 id="refund-eligibility-title">
            두 시점만 지키면
            <br />
            환급을 신청할 수 있어요
          </h2>
          <p>사전 등록은 필요 없습니다. 공고를 신청하기 전부터 합격 발표일까지 연간 Pro 또는 Max 구독을 유지해 주세요.</p>
          <ol className="refund-eligibility-steps">
            {eligibilitySteps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <strong>{step.title}</strong>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="refund-tiers" aria-labelledby="refund-tiers-title">
        <div className="refund-tiers-inner">
          <div className="refund-pill">환급 방식</div>
          <h2 id="refund-tiers-title">
            합격 후, 원하는 방식으로
            <br />
            최대 50%까지 환급받으세요
          </h2>
          <p>합격을 증명하는 것부터 인터뷰 참여까지, 선택한 방식에 따라 환급 비율이 달라집니다.</p>
          <div className="refund-tier-grid">
            {refundTiers.map((tier) => (
              <article className={tier.featured ? "refund-tier-card is-featured" : "refund-tier-card"} key={tier.rate}>
                <strong>{tier.rate}</strong>
                <h3>{tier.title}</h3>
                <p>{tier.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="refund-application" id="refund-application" aria-labelledby="refund-application-title">
        <div className="refund-application-inner">
          <div className="refund-application-heading">
            <div className="refund-pill">합격 후 신청</div>
            <h2 id="refund-application-title">
              합격을 확인한 뒤,
              <br />
              환급을 신청하세요
            </h2>
            <p>공고 정보와 신청 마감일, 최종 합격 증빙, 선택한 환급 방식을 제출해 주세요.</p>
          </div>

          <div className="refund-application-grid">
            <article className="refund-application-card">
              <strong>01</strong>
              <h3>합격 인증과 환급 신청</h3>
              <p>지원사업명과 공고 링크, 신청 마감일, 최종 합격 증빙, 환급 방식을 한 번에 제출합니다.</p>
              <a href={refundApplicationUrl} target="_blank" rel="noreferrer">
                합격 인증 및 환급 신청하기 <Chevron />
              </a>
            </article>
            <article className="refund-application-card refund-consent-card">
              <strong>02</strong>
              <h3>인터뷰 환급을 선택했다면</h3>
              <p>1번 신청 후, 인터뷰 자료 제출과 활용 동의를 별도 폼에서 진행해 주세요.</p>
              <a href={interviewConsentUrl} target="_blank" rel="noreferrer">
                자료 제출 및 활용 동의하기 <Chevron />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="refund-notices" id="refund-notices" aria-labelledby="refund-notices-title">
        <h2 id="refund-notices-title">[이벤트 주의사항]</h2>
        <div className="refund-notice-list">
          {noticeGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <footer className="refund-footer">
        <div>
          <strong>주식회사 사페레아우데</strong>
          <p>대표 : 김성우</p>
          <p>고객지원 : yes-reply@docshunt.ai</p>
          <p>주소 : 서울시 동작구 상도로 55길 8, 챌린지스테이션 302호</p>
          <p>사업자등록번호 : 575-86-03204 | 통신판매업신고번호 : 제 2024-서울동작-0430 호</p>
        </div>
        <div className="refund-footer-links">
          <a href="https://www.instagram.com/docshunt_official/" target="_blank" rel="noreferrer">
            <img src={`${assets}/instagram-icon.png`} alt="" />
            docshunt_official
          </a>
          <span>
            <a href="https://docshunt.ai/privacy_policy">개인정보 처리방침</a>
            <b>|</b>
            <a href="https://docshunt.ai/terms">이용약관</a>
            <b>|</b>
            <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=5758603204" target="_blank" rel="noreferrer">
              사업자 정보 확인
            </a>
          </span>
        </div>
      </footer>

      <aside className="refund-bottom-bar" aria-label="합격 시 환급 고정 안내">
        <a href={appUrl}>요금제 시작하기</a>
        <a href="#refund-eligibility">환급 조건 보기</a>
      </aside>
    </main>
  );
}

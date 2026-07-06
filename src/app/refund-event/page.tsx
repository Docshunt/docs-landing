import type { Metadata } from "next";
import Link from "next/link";

import { Countdown, LazyDemoVideo } from "./client-widgets";

const assets = "/docshunt-assets";
const refundAssets = `${assets}/refund-event`;
const appUrl = "https://app.docshunt.ai";
const earlyBirdEndAt = "2026-12-31T23:59:59+09:00";
const earlyBirdEndLabel = "~12/31";

const eventNavLinks = [
  { href: "#refund-master-plan", label: "🔥 2026 사업계획서 마스터 플랜 🔥" },
  { href: "#refund-automation", label: "Sample Business Plan" },
  { href: "#refund-pricing", label: "Pricing" },
  { href: "#refund-event", label: "2026 CES" },
];

const noticeGroups = [
  {
    title: "○ 2026 마스터 플랜 얼리버드 혜택 안내",
    items: [
      "본 이벤트는 한정 기간 특가 프로모션입니다.",
      "얼리버드 기간 내 결제 시 정가 대비 최대 79% 할인된 가격에 이용하실 수 있습니다.",
      "본 마스터 플랜 상품은 지원사업 시즌 진행 단계에 따라 가격이 순차적으로 인상될 예정입니다.",
      "본 패키지는 2026년 지원사업 시즌에 맞춰 설계된 전용 상품으로, 타 쿠폰 및 이벤트와 중복 적용이 불가합니다.",
    ],
  },
  {
    title: "○ 이용 기간 및 서비스 정책",
    items: [
      "2026 마스터 플랜의 서비스 이용 기간은 결제일로부터 2026년 12월 31일까지입니다.",
      "기간 내 모든 기능을 무제한으로 제공하나, 시스템 안정성을 위해 일일 사용량 제한이 적용될 수 있습니다.",
      "사용하지 않은 일일 잔여 크레딧은 매일 정해진 시간에 소멸되며 다음 날로 이월되지 않습니다.",
    ],
  },
  {
    title: "○ 합격 환급 이벤트 참여 규정",
    items: [
      "2026년 지원사업 합격 시 조건에 따라 최대 100%까지 환급 혜택을 제공합니다.",
      "최종 합격 환급금은 본인이 실제 결제한 금액을 기준으로 산정됩니다.",
      "지원사업 선정 금액(예: 2,000만 원 이상 등)에 따라 환급 비율이 상이할 수 있으니 참여 방법 페이지를 반드시 확인해 주시기 바랍니다.",
      "합격 증빙 서류 제출 및 검토 완료 후 순차적으로 환급이 진행되며, 부정한 방법으로 참여 시 혜택이 취소될 수 있습니다.",
    ],
  },
  {
    title: "○ AI 서비스 이용 및 면책 안내",
    items: [
      "독스헌트는 AI 기반 사업계획서 생성 서비스로, 생성된 결과물의 절대적 정확성이나 최종 합격 여부를 보장하지 않습니다.",
      "AI 결과물은 반드시 사용자가 직접 검토하고 수정해야 하며, 결과물 활용으로 인해 발생하는 모든 책임은 사용자에게 있습니다.",
      "지원사업 양식 자동 완성 기능은 각 기관의 최신 공고 양식에 따라 순차적으로 업데이트됩니다.",
    ],
  },
];

const interviews = [
  {
    id: "34KtW8uyPrU",
    title: "3주의 시간을 아껴주는 사업계획서 AI 알려드려요!",
    name: "정승연 대표",
    company: "쿼카온어트립",
    quote: "독스헌트 활용해서 1년차에 7,700만원, 2년차에 2-3억원의 지원금을 확보했습니다.",
  },
  {
    id: "GmIQijv2EFw",
    title: "[지원사업 합격자 인터뷰] 사업계획서 마감 3일 전에 시작했는데, 2천만원 확보한 썰 풉니다.",
    name: "김지연 대표",
    company: "음파차트",
    quote: "지원사업 마감 3일 전에 시작해 불안한 마음이었지만, 독스헌트 덕분에 합격과 2천만원 지원금을 확보할 수 있었어요!",
  },
];

export const metadata: Metadata = {
  title: "2026 지원사업 사업계획서 마스터 플랜 | 독스헌트 환급 이벤트",
  description: "2026 지원사업 합격을 위한 독스헌트 마스터 플랜과 최대 100% 환급 이벤트를 확인하세요.",
  alternates: {
    canonical: "https://docshunt.ai/refund-event",
  },
  openGraph: {
    title: "2026 지원사업 사업계획서 마스터 플랜",
    description: "지원사업 사업계획서 작성부터 양식 자동 완성, 합격 환급 이벤트까지 한 번에 확인하세요.",
    url: "https://docshunt.ai/refund-event",
    type: "website",
    locale: "ko_KR",
  },
};

function Chevron() {
  return <span aria-hidden="true">›</span>;
}

export default function RefundEventPage() {
  return (
    <main className="refund-event-page" id="top">
      <nav className="refund-event-nav" aria-label="2026 마스터 플랜 이벤트 내비게이션">
        <Link className="refund-event-logo" href="/">
          <img src={`${assets}/docshunt-logo-white.svg`} alt="DocsHunt" width="128" height="20" />
        </Link>
        <div className="refund-event-nav-links">
          {eventNavLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a className="refund-event-nav-cta" href={appUrl}>
          Start Now
        </a>
        <details className="refund-event-mobile-menu">
          <summary aria-label="이벤트 메뉴 열기">
            <span />
          </summary>
          <div>
            {eventNavLinks.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </details>
      </nav>

      <section className="refund-hero" id="refund-master-plan" aria-labelledby="refund-hero-title">
        <p className="refund-eyebrow">2026 지원사업, 1만명의 대표가 선택한 독스헌트로 도전하세요</p>
        <h1 className="refund-hero-title" id="refund-hero-title">
          2026 지원사업 사업계획서
          <br />
          독스헌트로 전부 해결!
        </h1>
        <img className="refund-hero-art" src={`${refundAssets}/hero-master-plan.svg`} alt="2026 Master Plan" width="1440" height="351" />
        <a className="refund-button refund-button-light" href="#refund-pricing">
          플랜 자세히 보기 <Chevron />
        </a>
      </section>

      <section className="refund-countdown-strip" aria-label="얼리버드 종료 안내">
        <p>2026 마스터 플랜 얼리버드 종료까지 ({earlyBirdEndLabel})</p>
        <Countdown endAt={earlyBirdEndAt} />
      </section>

      <section className="refund-dark refund-consulting" aria-labelledby="refund-consulting-title">
        <h2 id="refund-consulting-title">
          컨설팅 1회 비용으로
          <br />
          10년을 쓸 수 있는 서비스
        </h2>
        <img
          src={`${refundAssets}/consultant-comparison.svg`}
          alt="컨설팅 비용과 독스헌트 마스터 플랜 가격 비교"
          width="693"
          height="454"
        />
      </section>

      <section className="refund-automation" id="refund-automation" aria-labelledby="refund-problem-title">
        <img className="refund-connector top" src={`${refundAssets}/connector-black-blue.svg`} alt="" width="1440" height="105" />
        <div className="refund-problem">
          <h2 id="refund-problem-title">
            매년 지원사업 사업계획서 쓰는데
            <br />
            시간을 쏟고 계신가요?
          </h2>
          <img src={`${refundAssets}/problem-flow.png`} alt="사업계획서 작업 흐름 자동화 그래픽" width="768" height="521" />
        </div>

        <div className="refund-plan-headline">
          <div className="refund-kicker">2026 지원사업 자동화/선정을 목표로 설계된 올인원 플랜</div>
          <h2>
            2026 사업계획서
            <span>전부 자동화</span>
            <br />
            올해 모든 기능
            <span>무제한!</span>
          </h2>
          <p>*일 최대 사용량 제한 있음 (매일 갱신)</p>
        </div>

        <div className="refund-demo-stack">
          <article className="refund-demo-card">
            <LazyDemoVideo src={`${refundAssets}/plan-generation.mp4`} title="사업계획서 초안 생성 데모" />
            <div>
              <h3>1. 사업계획서 3분 만에 생성</h3>
              <p>아이템 정보만 입력하면, AI가 사업계획서 초안을 자동으로 빠르게 만들어줍니다.</p>
            </div>
          </article>
          <article className="refund-demo-card">
            <LazyDemoVideo src={`${refundAssets}/form-autofill.mp4`} title="지원사업 양식 자동 완성 데모" />
            <div>
              <h3>2. 지원사업 양식 자동 완성</h3>
              <p>작성한 사업계획서를 기반으로, 지원사업 양식에 맞춰 내용을 자동으로 완성합니다.</p>
            </div>
          </article>
        </div>

        <a className="refund-button refund-button-outline-dark" href="#refund-pricing">
          플랜 자세히 보기 <Chevron />
        </a>
      </section>

      <section className="refund-dark refund-benefit" id="refund-event" aria-labelledby="refund-benefit-title">
        <img className="refund-connector" src={`${refundAssets}/connector-black.svg`} alt="" width="1440" height="105" />
        <div className="refund-pill">독스헌트 환급 이벤트</div>
        <h2 id="refund-benefit-title">
          2026 지원사업 합격하고,
          <br />
          최대 100% 환급까지
        </h2>
        <div className="refund-benefit-bar">
          <span>2026 지원사업</span>
          <strong>2,000만원 이상 선정 시</strong>
          <b>최대 100% 환급</b>
        </div>
        <a className="refund-button refund-button-outline-light" href="#refund-notices">
          참여 방법 확인하기 <Chevron />
        </a>
        <ul className="refund-benefit-notes">
          <li>본 환급 이벤트는 2026 마스터 플랜 구매자 중 2026년 정부지원사업 최종 합격자를 대상으로 합니다.</li>
          <li>
            환급 비율은 마케팅 미션 참여도에 따라 최대 100%(영상 인터뷰), 50%(블로그/SNS 리뷰), 20%(단순 합격 인증)로 차등 적용됩니다.
          </li>
          <li>모든 환급금은 본인이 실제 결제한 금액을 기준으로 산정되며, 내부 검토 및 최종 승인 절차를 거쳐 지급됩니다.</li>
          <li>사업계획서 심사가 없는 단순 융자나 보조금 사업 등 일부 사업은 대상에서 제외됩니다.</li>
        </ul>
      </section>

      <section className="refund-dark refund-interviews" aria-labelledby="refund-interviews-title">
        <div className="refund-pill">독스헌트 사업계획서 후기</div>
        <h2 id="refund-interviews-title">실제 지원사업 합격자 인터뷰</h2>
        <div className="refund-interview-grid">
          {interviews.map((interview) => (
            <article className="refund-interview-card" key={interview.id}>
              <iframe
                src={`https://www.youtube.com/embed/${interview.id}?rel=0&enablejsapi=1`}
                title={interview.title}
                loading="lazy"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
              />
              <div className="refund-interview-copy">
                <div>
                  <strong>{interview.name}</strong>
                  <span>{interview.company}</span>
                </div>
                <p>
                  <img src={`${refundAssets}/quote-open.svg`} alt="" width="22" height="25" />
                  {interview.quote}
                  <img src={`${refundAssets}/quote-close.svg`} alt="" width="22" height="25" />
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="refund-pricing" id="refund-pricing" aria-labelledby="refund-pricing-title">
        <div className="refund-price-alert">
          <Countdown compact endAt={earlyBirdEndAt} />
          <p>
            후에는
            <br />
            돌아오지 않는 가격
          </p>
        </div>
        <div className="refund-pricing-stage">
          <div className="refund-pill">-79% Off</div>
          <h2 id="refund-pricing-title">
            2026 지원사업에 도전한다면?
            <br />
            역대급 할인가로 만나보세요
          </h2>
          <img
            src={`${refundAssets}/pricing-receipt.svg`}
            alt="2026 지원사업 마스터 플랜 얼리버드 가격 390,000원"
            width="583"
            height="617"
          />
          <a className="refund-button refund-button-blue" href={appUrl}>
            최저가로 구매하기 <Chevron />
          </a>
          <p className="refund-caption">*결제일로부터 2026년 12월 31일까지 사용할 수 있는 플랜입니다.</p>
        </div>
        <div className="refund-final-offer">
          <h2>
            2026 사업계획서 작성
            <br />
            최저가로 시작할 수 있는 타이밍
          </h2>
          <img src={`${refundAssets}/earlybird-graphic.svg`} alt="2차 얼리버드 390,000원 가격 그래픽" width="607" height="273" />
          <p>*얼리버드 혜택은 2026년 12월 31일까지 적용됩니다.</p>
          <a className="refund-button refund-button-blue" href={appUrl}>
            최저가로 구매하기 <Chevron />
          </a>
        </div>
      </section>

      <section className="refund-countdown-strip final" aria-label="얼리버드 종료 안내">
        <p>2026 마스터 플랜 얼리버드 종료까지 ({earlyBirdEndLabel})</p>
        <Countdown endAt={earlyBirdEndAt} />
        <a className="refund-top-button" href="#top">
          맨 위로 <Chevron />
        </a>
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
          <a href="https://www.instagram.com/docshunt.ai/" target="_blank" rel="noreferrer">
            <img src={`${assets}/instagram-icon.png`} alt="" width="32" height="32" />
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

      <aside className="refund-bottom-bar" aria-label="얼리버드 고정 구매 안내">
        <a href={appUrl}>최저가로 시작하기</a>
        <div>
          <span>얼리버드 종료까지</span>
          <Countdown compact endAt={earlyBirdEndAt} />
        </div>
        <a href={appUrl}>최저가로 시작하기</a>
      </aside>
    </main>
  );
}

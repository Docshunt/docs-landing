"use client";

import { useEffect, useRef, useState } from "react";

import { MasterPlanPreview } from "@/components/site/templates/marketing/master-plan-preview";
import previewStyles from "./pricing-preview-page.module.css";
import { PricingPreviewSchedule, PricingPreviewFinalCta } from "./pricing-preview-sections";
import { APP_URL } from "@/seo/metadata";
import { BlogHeader, DocshuntFooter } from "@/components/docshunt-blog-shell";
import { getMasterPlanPhase } from "./master-plan-schedule";

type BillingCycle = "monthly" | "six-month";

type Plan = {
  name: "Free" | "Pro" | "Max";
  description: string;
  monthlyPrice: string;
  sixMonthMonthlyPrice?: string;
  sixMonthTotal?: string;
  discount?: string;
  features: string[];
  recommended?: boolean;
  badge?: string;
};

const pricingAppUrl = `${APP_URL}/d?pricing=true`;

const plans: Plan[] = [
  {
    name: "Free",
    description: "부담 없이 시작하기",
    monthlyPrice: "0원",
    sixMonthMonthlyPrice: "0원",
    features: ["기본 사업계획서 최초 2회", "AI 시각자료 자동 생성·배치 1회", "사업 아이템 1개 · 저장공간 500MB"],
  },
  {
    name: "Pro",
    description: "사업계획서 작성부터 완성까지",
    monthlyPrice: "149,000원",
    features: [
      "기본·지원사업 사업계획서 작성",
      "양식 직접 업로드 · 한글 내보내기",
      "AI 문서 수정 · 근거자료 찾기",
      "AI 시각자료 생성·배치·수정",
      "사업 아이템 5개 · 저장공간 5GB",
    ],
  },
  {
    name: "Max",
    recommended: true,
    badge: "지원사업 합격률 제일 높은",
    description: "여러 지원사업을 집중 준비하기",
    monthlyPrice: "190,000원",
    features: ["Pro의 모든 기능", "Pro의 2배 사용량", "맞춤 양식 신청 월 3건 · 우선 검토", "사업 아이템 15개 · 저장공간 20GB"],
  },
];

function PhaseCountdown({ end }: { end: string }) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const update = () => setNow(Date.now());
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);
  const remaining = now === null ? null : Math.max(0, Math.ceil((Date.parse(end) - now) / 1000));
  const display =
    remaining === null
      ? "--일 --:--:--"
      : `${Math.floor(remaining / 86400)}일 ${[Math.floor(remaining / 3600) % 24, Math.floor(remaining / 60) % 60, remaining % 60].map((value) => String(value).padStart(2, "0")).join(":")}`;
  return (
    <div className="pricing2026-discount-countdown">
      <span className="pricing2026-discount-clock" role="timer" aria-live="off">
        {display}
      </span>
    </div>
  );
}

function DiscountBanner({ discount, end, stage }: { discount: number; end: string; stage: string }) {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry) setShowSticky(!entry.isIntersecting && entry.boundingClientRect.bottom <= 0);
    });
    observer.observe(banner);
    return () => observer.disconnect();
  }, []);

  const content = (
    <div className="pricing2026-discount-inner">
      <strong className="pricing2026-discount-copy">
        {stage} 최대 <em>{discount}%</em> 할인
      </strong>
      <div className={previewStyles.countdown}>
        <span>종료까지</span>
        <PhaseCountdown end={end} />
      </div>
    </div>
  );

  return (
    <>
      <div className="pricing2026-discount-banner" ref={bannerRef}>
        {content}
      </div>
      {showSticky && (
        <div className="pricing2026-discount-banner pricing2026-discount-banner-sticky" aria-hidden="true">
          {content}
        </div>
      )}
    </>
  );
}

function AnimatedPrice({ price }: { price: string }) {
  const digits = price
    .replace(/[^0-9]/g, "")
    .padStart(6, "0")
    .split("");
  return (
    <strong className="pricing2026-animated-price" aria-hidden="true">
      {digits.map((digit, index) => (
        <span className="pricing2026-price-place" key={index}>
          <span className={`pricing2026-price-digit ${index === 0 && digit === "0" ? "is-leading-zero" : ""}`}>
            <span className="pricing2026-price-reel" style={{ transform: `translateY(-${Number(digit) * 10}%)` }}>
              {Array.from({ length: 10 }, (_, number) => (
                <span key={number}>{number}</span>
              ))}
            </span>
          </span>
          {index === 2 ? <span className="pricing2026-price-comma">,</span> : null}
        </span>
      ))}
      원
    </strong>
  );
}

function PriceCard({ plan, billingCycle }: { plan: Plan; billingCycle: BillingCycle }) {
  const masterPlan = billingCycle === "six-month";
  const price = masterPlan ? (plan.sixMonthMonthlyPrice ?? plan.monthlyPrice) : plan.monthlyPrice;

  return (
    <article className={`pricing2026-card ${plan.recommended ? "is-recommended" : ""}`}>
      {plan.badge ? <span className={`pricing2026-recommended ${plan.name === "Max" ? "is-max" : ""}`}>{plan.badge}</span> : null}
      <div className="pricing2026-card-head">
        <h2>{plan.name}</h2>
        <p>{plan.description}</p>
      </div>
      <div className="pricing2026-price-offer">
        {masterPlan && plan.name !== "Free" ? (
          <>
            <b>{plan.discount}</b>
            <del>{plan.monthlyPrice}</del>
          </>
        ) : null}
      </div>
      <div
        className="pricing2026-price"
        aria-label={plan.name === "Free" ? "무료" : `${plan.name} ${price} ${masterPlan ? "월 환산" : "월 이용료"}`}
      >
        {plan.name === "Free" ? <strong>무료</strong> : <AnimatedPrice price={price} />}
        {plan.name !== "Free" ? <span>{masterPlan ? "/월 환산" : "/월"}</span> : null}
      </div>
      <div className="pricing2026-price-detail" style={masterPlan ? { minHeight: 36 } : undefined}>
        {plan.name !== "Free" ? (
          <span>{masterPlan ? <>6개월마다 {plan.sixMonthTotal} 결제 · 최초 결제가로 갱신</> : `매월 ${plan.monthlyPrice} 결제`}</span>
        ) : null}
      </div>
      <div className="pricing2026-card-action">
        <a
          className="pricing2026-card-cta is-upgrade"
          href={plan.name === "Free" ? APP_URL : `${pricingAppUrl}&pricingCycle=${masterPlan ? "SIX_MONTH" : "MONTHLY"}`}
        >
          {plan.name} 시작하기
        </a>
      </div>
      <ul className="pricing2026-feature-list">
        {plan.features.map((feature) => (
          <li key={feature}>
            <span aria-hidden="true">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function PricingPreviewClient({ initialNow }: { initialNow: number }) {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("six-month");
  const masterPlan = billingCycle === "six-month";
  const [now, setNow] = useState(initialNow);
  useEffect(() => {
    const startedAt = performance.now();
    const timer = window.setInterval(() => setNow(initialNow + performance.now() - startedAt), 1000);
    return () => window.clearInterval(timer);
  }, [initialNow]);
  const phase = getMasterPlanPhase(now);
  const displayedPlans = plans.map((plan) => {
    if (plan.name === "Free") return plan;
    const total = plan.name === "Pro" ? phase.pro : phase.max;
    const monthly = plan.name === "Pro" ? 149000 : 190000;
    return {
      ...plan,
      sixMonthTotal: `${total.toLocaleString("ko-KR")}원`,
      sixMonthMonthlyPrice: `${Math.round(total / 6).toLocaleString("ko-KR")}원`,
      discount: `${(100 * (1 - total / (monthly * 6))).toFixed(1).replace(/\.0$/, "")} % 할인`.replace(" %", "%"),
    };
  });
  const maxDiscount = Math.floor(100 * (1 - phase.max / (190000 * 6)));

  return (
    <div className={`pricing-page pricing2026-page ${previewStyles.page} ${masterPlan ? "is-master-plan" : "is-monthly"}`}>
      <BlogHeader />
      <main className="pricing2026-main">
        {phase.end && <DiscountBanner discount={maxDiscount} end={phase.end} stage={phase.name} />}
        <section className="pricing2026-hero" id="pricing-plans" aria-label="결제 주기 선택">
          <div className="pricing2026-billing" aria-label="결제 주기">
            <button
              className={billingCycle === "six-month" ? "is-active" : ""}
              type="button"
              aria-pressed={billingCycle === "six-month"}
              onClick={() => setBillingCycle("six-month")}
            >
              반년 · 마스터플랜
            </button>
            <button
              className={billingCycle === "monthly" ? "is-active" : ""}
              type="button"
              aria-pressed={billingCycle === "monthly"}
              onClick={() => setBillingCycle("monthly")}
            >
              월간
            </button>
          </div>
        </section>

        <section className="pricing2026-plans" aria-label="독스헌트 플랜">
          <div className="pricing2026-plan-grid">
            {displayedPlans.map((plan) => (
              <PriceCard billingCycle={billingCycle} key={plan.name} plan={plan} />
            ))}
          </div>
        </section>

        <MasterPlanPreview phaseName={phase.name} offers={displayedPlans.filter((plan) => plan.sixMonthTotal)}>
          <PricingPreviewSchedule activePhase={phase.name} />
        </MasterPlanPreview>
        <PricingPreviewFinalCta />
      </main>
      <DocshuntFooter />
    </div>
  );
}

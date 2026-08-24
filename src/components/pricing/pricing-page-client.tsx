"use client";

import { useEffect, useState } from "react";

import { BlogHeader, DocshuntFooter } from "@/components/docshunt-blog-shell";
import { APP_URL } from "@/seo/metadata";

type BillingCycle = "monthly" | "annual";

type Plan = {
  name: "Free" | "Basic" | "Pro" | "Max";
  description: string;
  monthlyPrice: string;
  annualMonthlyPrice: string;
  annualTotal?: string;
  discount?: string;
  usageDescription: string;
  storage: string;
  features: string[];
  recommended?: boolean;
  refundEligible?: boolean;
};

const refundApplicationUrl = "https://tally.so/r/XxkVYj";

const plans: Plan[] = [
  {
    name: "Free",
    description: "지원사업 준비를 가볍게 시작해보세요",
    monthlyPrice: "0원",
    annualMonthlyPrice: "0원",
    usageDescription: "체험 사용",
    storage: "저장공간 500MB",
    features: ["체험 사용", "지원사업 추천", "사업계획서 생성", "AI 메모리", "저장공간 500MB"],
  },
  {
    name: "Basic",
    description: "초안 작성과 자료 정리를 빠르게",
    monthlyPrice: "89,000원",
    annualMonthlyPrice: "57,500원",
    annualTotal: "연 690,000원",
    discount: "연간 35.4% 할인",
    usageDescription: "매일 기본 사용량",
    storage: "저장공간 1GB",
    features: [
      "매일 기본 사용량",
      "Free의 모든 기능",
      "한글(hwpx) 내보내기",
      "양식 직접 업로드",
      "근거자료 탐색",
      "에디터 AI 수정",
      "저장공간 1GB",
    ],
  },
  {
    name: "Pro",
    description: "사업계획서 완성도를 끌어올리는 주력 플랜",
    monthlyPrice: "129,000원",
    annualMonthlyPrice: "65,000원",
    annualTotal: "연 780,000원",
    discount: "연간 49.6% 할인",
    usageDescription: "Basic보다 2배 더 많은 사용량",
    storage: "저장공간 5GB",
    features: ["Basic보다 2배 더 많은 사용량", "Basic의 모든 기능", "시각자료 생성", "고성능 AI 모델 사용", "합격 시 환급", "저장공간 5GB"],
    recommended: true,
    refundEligible: true,
  },
  {
    name: "Max",
    description: "매달 여러 지원사업을 준비한다면",
    monthlyPrice: "190,000원",
    annualMonthlyPrice: "82,500원",
    annualTotal: "연 990,000원",
    discount: "연간 56.6% 할인",
    usageDescription: "Pro보다 5배 더 많은 사용량",
    storage: "저장공간 20GB",
    features: ["Pro보다 5배 더 많은 사용량", "Pro의 모든 기능", "맞춤 양식 신청", "저장공간 20GB"],
    refundEligible: true,
  },
];

const featureRows = [
  ["지원사업 추천", "O", "O", "O", "O"],
  ["사업계획서 생성", "O", "O", "O", "O"],
  ["AI 메모리", "O", "O", "O", "O"],
  ["한글(hwpx) 내보내기", "-", "O", "O", "O"],
  ["양식 직접 업로드", "-", "O", "O", "O"],
  ["근거자료 탐색", "-", "O", "O", "O"],
  ["에디터 AI 수정", "-", "O", "O", "O"],
  ["시각자료 첨부", "-", "O", "O", "O"],
  ["시각자료 생성", "-", "-", "O", "O"],
  ["고성능 AI 모델 사용", "-", "-", "O", "O"],
  ["맞춤 양식 신청", "-", "-", "-", "O"],
  ["합격 시 환급", "-", "-", "연간 결제 시", "연간 결제 시"],
];

function PriceCard({
  plan,
  billingCycle,
  onOpenRefundDetails,
}: {
  plan: Plan;
  billingCycle: BillingCycle;
  onOpenRefundDetails: () => void;
}) {
  const annual = billingCycle === "annual";
  const price = annual ? plan.annualMonthlyPrice : plan.monthlyPrice;
  const buttonLabel = plan.name === "Free" ? "무료로 시작하기" : `${plan.name} 시작하기`;

  return (
    <article className={`pricing2026-card ${plan.recommended ? "is-recommended" : ""}`}>
      {plan.recommended ? <span className="pricing2026-recommended">가장 많이 선택</span> : null}
      <div className="pricing2026-card-head">
        <h2>{plan.name}</h2>
        <p>{plan.description}</p>
      </div>
      <div className="pricing2026-price" aria-label={`${plan.name} ${price} 월 이용료`}>
        <strong>{price}</strong>
        <span>/월</span>
      </div>
      <div className="pricing2026-price-detail">
        {plan.name !== "Free" ? (
          <>
            {annual && plan.annualTotal ? <span>{plan.annualTotal}</span> : <span>월 단위 결제</span>}
            {annual && plan.discount ? <b>{plan.discount}</b> : null}
          </>
        ) : null}
      </div>
      <div className="pricing2026-refund-slot">
        {annual && plan.refundEligible ? (
          <button className="pricing2026-refund-eligible" type="button" onClick={onOpenRefundDetails}>
            지원사업 합격 시 최대 50% 환급
            <span aria-hidden="true">→</span>
          </button>
        ) : null}
      </div>
      <a className="pricing2026-card-cta" href={APP_URL}>
        {buttonLabel}
      </a>
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

function RefundCriteriaModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="pricing2026-refund-modal" role="presentation" onMouseDown={onClose}>
      <section
        aria-labelledby="pricing-refund-modal-title"
        aria-modal="true"
        className="pricing2026-refund-modal-panel"
        role="dialog"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="pricing2026-refund-modal-heading">
          <div>
            <p>REFUND</p>
            <h2 id="pricing-refund-modal-title">지원사업 합격 환급 기준</h2>
          </div>
          <button aria-label="환급 기준 닫기" type="button" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="pricing2026-refund-modal-body">
          <h3>참여 조건</h3>
          <p className="pricing2026-refund-modal-intro">
            독스헌트 지원사업 합격 환급은 중앙정부 또는 중앙정부 산하기관·전문기관이 주관하는 지원사업의 최종 선정 기업을 대상으로 합니다.
          </p>
          <ul>
            <li>창업·사업화·R&amp;D·수출 등 기업 성장을 위한 지원사업</li>
            <li>신청 기업 기준으로 확정된 정부지원금이 1,000만 원 이상인 사업</li>
            <li>최종 선정 또는 협약 체결 사실을 확인할 수 있는 사업</li>
            <li>해당 공고의 신청 마감일 전부터 최종 합격 발표일까지 유효한 독스헌트 연간 Pro 또는 Max 구독 고객</li>
          </ul>

          <h3>환급 비율</h3>
          <p className="pricing2026-refund-modal-intro">인증 방식 하나를 선택해 신청하세요. 환급 유형마다 필요한 제출물이 다릅니다.</p>
          <div className="pricing2026-refund-criteria" aria-label="환급 인증 방식">
            <article className="pricing2026-refund-criteria-card">
              <div className="pricing2026-refund-criteria-card-heading">
                <span>10%</span>
                <h4>일반 합격 인증</h4>
              </div>
              <p>최종 합격을 확인할 수 있는 안내문 또는 선정 결과 화면을 제출하고, 독스헌트로 준비한 경험을 짧게 남겨주세요.</p>
              <ul>
                <li>최종 합격 증빙</li>
                <li>독스헌트 합격 후기</li>
              </ul>
            </article>

            <article className="pricing2026-refund-criteria-card">
              <div className="pricing2026-refund-criteria-card-heading">
                <span>30%</span>
                <h4>블로그 후기 인증</h4>
              </div>
              <p>합격 증빙과 함께 독스헌트 사용 경험, 지원사업 준비 과정을 담은 공개 블로그 후기를 작성해 URL을 제출해 주세요.</p>
              <ul>
                <li>최종 합격 증빙</li>
                <li>공개 블로그 후기 URL</li>
              </ul>
            </article>

            <article className="pricing2026-refund-criteria-card is-featured">
              <div className="pricing2026-refund-criteria-card-heading">
                <span>50%</span>
                <h4>인터뷰 인증</h4>
              </div>
              <p>합격 경험과 독스헌트 사용 과정을 인터뷰로 들려주세요.</p>
              <ul>
                <li>최종 합격 증빙</li>
                <li>인터뷰 가능 시간 제출</li>
                <li>인터뷰 자료 제출 및 활용 동의</li>
              </ul>
              <a
                className="pricing2026-refund-video-example"
                href="https://www.youtube.com/watch?v=GmIQijv2EFw"
                rel="noreferrer"
                target="_blank"
              >
                <img alt="독스헌트 지원사업 합격자 인터뷰 영상 미리보기" src="https://i.ytimg.com/vi/GmIQijv2EFw/hqdefault.jpg" />
                <span>
                  <b>합격자 인터뷰 예시</b>
                  <em>영상 보기 →</em>
                </span>
              </a>
            </article>
          </div>

          <h3>환급 산정 기준</h3>
          <ul>
            <li>최종 합격 환급금은 본인이 실제 결제한 금액을 기준으로 산정합니다.</li>
            <li>제세공과금 22% 공제 후 지급됩니다.</li>
            <li>월간 요금제, 무료 체험·쿠폰·프로모션 크레딧, 이미 환불된 금액과 합격 발표 이후 결제한 구독은 대상에서 제외됩니다.</li>
          </ul>

          <h3>환급 대상에서 제외되는 경우</h3>
          <ul>
            <li>지자체·대학·민간기업이 단독으로 운영하는 지원사업</li>
            <li>대출, 보증, 융자, 세제 혜택, 단순 할인 혜택</li>
            <li>교육·행사·입주·멘토링만 제공하는 비금전성 프로그램</li>
            <li>상금형 경진대회, 공모전, 채용 지원금</li>
            <li>기업당 확정 지원금이 1,000만 원 미만인 사업</li>
            <li>최종 선정 또는 협약 사실을 증빙할 수 없는 경우</li>
          </ul>

          <h3>신청 및 검토</h3>
          <ul>
            <li>최종 합격 발표일 또는 협약일로부터 30일 이내에 신청해야 합니다.</li>
            <li>제출한 증빙 서류와 인증 항목은 내부 검토 후 최종 승인 여부를 개별 안내합니다.</li>
            <li>서류의 진위 여부가 불분명하거나 인증 항목이 기준에 미달하면 환급이 거절되거나 보완을 요청드릴 수 있습니다.</li>
          </ul>

          <a href={refundApplicationUrl} rel="noreferrer" target="_blank">
            합격 인증 및 환급 신청하기
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export function PricingPageClient() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("annual");
  const [isRefundModalOpen, setIsRefundModalOpen] = useState(false);

  return (
    <div className="pricing-page pricing2026-page">
      <BlogHeader />
      <main className="pricing2026-main">
        <section className="pricing2026-hero" aria-labelledby="pricing-title">
          <p className="pricing2026-eyebrow">DOCSHUNT PRICING</p>
          <h1 id="pricing-title">내 사업에 맞는 플랜을 선택하세요</h1>
          <p className="pricing2026-intro">공고 탐색부터 사업계획서 완성까지, 필요한 만큼 독스헌트를 이용하세요.</p>

          <div className="pricing2026-billing" aria-label="결제 주기">
            <button
              className={billingCycle === "monthly" ? "is-active" : ""}
              type="button"
              aria-pressed={billingCycle === "monthly"}
              onClick={() => setBillingCycle("monthly")}
            >
              월간
            </button>
            <button
              className={billingCycle === "annual" ? "is-active" : ""}
              type="button"
              aria-pressed={billingCycle === "annual"}
              onClick={() => setBillingCycle("annual")}
            >
              연간
              <span>최대 56.6% 할인</span>
            </button>
          </div>
        </section>

        <section className="pricing2026-plans" aria-label="독스헌트 플랜">
          <div className="pricing2026-plan-grid">
            {plans.map((plan) => (
              <PriceCard billingCycle={billingCycle} key={plan.name} onOpenRefundDetails={() => setIsRefundModalOpen(true)} plan={plan} />
            ))}
          </div>
        </section>

        <section className="pricing2026-compare-section" aria-labelledby="pricing-compare-title">
          <div className="pricing2026-section-heading">
            <p>FEATURES</p>
            <h2 id="pricing-compare-title">플랜별 기능을 비교해보세요</h2>
          </div>
          <div className="pricing2026-compare-scroll" tabIndex={0}>
            <table className="pricing2026-compare-table">
              <thead>
                <tr>
                  <th scope="col">기능</th>
                  {plans.map((plan) => (
                    <th scope="col" key={plan.name}>
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="pricing2026-usage-row">
                  <th scope="row">크레딧</th>
                  {plans.map((plan) => (
                    <td key={plan.name}>{plan.usageDescription}</td>
                  ))}
                </tr>
                <tr className="pricing2026-usage-row">
                  <th scope="row">제공 저장공간</th>
                  {plans.map((plan) => (
                    <td key={plan.name}>{plan.storage.replace("저장공간 ", "")}</td>
                  ))}
                </tr>
                {featureRows.map(([feature, ...availability]) => (
                  <tr key={feature}>
                    <th scope="row">{feature}</th>
                    {availability.map((value, index) => (
                      <td className={value !== "-" ? "is-included" : ""} key={`${feature}-${plans[index]?.name ?? index}`}>
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="pricing2026-refund-section" id="refund" aria-labelledby="pricing-refund-title">
          <div className="pricing2026-refund-inner">
            <div className="pricing2026-refund-copy">
              <p>REFUND</p>
              <h2 id="pricing-refund-title">
                지원사업에 합격하면,
                <br />
                연간 구독료 최대 50% 환급
              </h2>
            </div>

            <div className="pricing2026-refund-action">
              <div className="pricing2026-refund-tiers" aria-label="환급 비율">
                <div>
                  <strong>10%</strong>
                  <span>일반 합격 인증</span>
                </div>
                <div>
                  <strong>30%</strong>
                  <span>블로그 후기 인증</span>
                </div>
                <div>
                  <strong>50%</strong>
                  <span>인터뷰 인증</span>
                </div>
              </div>
              <div className="pricing2026-refund-links">
                <a href={refundApplicationUrl} rel="noreferrer" target="_blank">
                  합격 인증 및 환급 신청하기
                  <span aria-hidden="true">→</span>
                </a>
                <button type="button" onClick={() => setIsRefundModalOpen(true)}>
                  환급 기준 보기
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      {isRefundModalOpen ? <RefundCriteriaModal onClose={() => setIsRefundModalOpen(false)} /> : null}
      <DocshuntFooter />
    </div>
  );
}

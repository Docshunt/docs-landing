"use client";

import styles from "./pricing-preview-sections.module.css";

const stages = [
  { stage: "1차 얼리버드", period: "~ 2026.12.31", pro: "390,000원", max: "490,000원" },
  { stage: "2차 시즌 특별가", period: "2027.01.01 ~ 02.15", pro: "490,000원", max: "590,000원" },
  { stage: "3차 시즌 가격", period: "2027.02.16 이후", pro: "590,000원", max: "690,000원" },
];

export function PricingPreviewSchedule({ activePhase }: { activePhase?: string }) {
  return (
    <section className={styles.schedule} aria-label="마스터플랜 단계별 가격">
      <div className={styles.inner}>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">판매 단계</th>
                <th scope="col">판매 기간</th>
                <th scope="col">Pro</th>
                <th scope="col">Max</th>
              </tr>
            </thead>
            <tbody>
              {stages.map((item) => (
                <tr key={item.stage} className={item.stage === activePhase ? styles.activeStage : undefined}>
                  <th scope="row">
                    {item.stage}
                    {item.stage === activePhase && <span className={styles.activeBadge}>진행 중</span>}
                  </th>
                  <td>{item.period}</td>
                  <td>{item.pro}</td>
                  <td>{item.max}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          className={styles.scheduleCta}
          type="button"
          onClick={() => document.getElementById("pricing-plans")?.scrollIntoView({ behavior: "smooth", block: "start" })}
        >
          플랜 선택하기
        </button>
      </div>
    </section>
  );
}

export function PricingPreviewFinalCta() {
  return (
    <section className={`${styles.section} ${styles.faq}`} aria-labelledby="preview-final-title">
      <div className={styles.inner}>
        <div className={styles.final}>
          <h2 id="preview-final-title">
            2027 지원사업,
            <br />
            마스터플랜 하나로 끝내세요
          </h2>
          <a href="#pricing-plans">
            플랜 선택하기 <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </section>
  );
}

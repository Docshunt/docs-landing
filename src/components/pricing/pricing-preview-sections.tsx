"use client";

import styles from "./pricing-preview-sections.module.css";

import { getMasterPlanPeriod, masterPlanPhases } from "./master-plan-schedule";

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
              {masterPlanPhases.map((item) => (
                <tr key={item.name} className={item.name === activePhase ? styles.activeStage : undefined}>
                  <th scope="row">
                    {item.name}
                    {item.name === activePhase && <span className={styles.activeBadge}>진행 중</span>}
                  </th>
                  <td>{getMasterPlanPeriod(item)}</td>
                  <td>{item.pro.toLocaleString("ko-KR")}원</td>
                  <td>{item.max.toLocaleString("ko-KR")}원</td>
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

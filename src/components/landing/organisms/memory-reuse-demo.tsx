"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import styles from "./memory-reuse-demo.module.css";

const facts = [
  { label: "아이템", value: "재고 관리 서비스", tone: "purple" },
  { label: "고객", value: "1인 소상공인", tone: "mint" },
  { label: "문제", value: "재고·발주 누락", tone: "amber" },
] as const;
const programs = ["창업 지원사업", "소상공인 지원사업"];
const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribeMotion(callback: () => void) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
function getMotion() {
  return window.matchMedia(motionQuery).matches;
}
function FactValue({ index }: { index: 0 | 1 | 2 }) {
  const fact = facts[index];
  return (
    <span className={styles.value} data-tone={fact.tone}>
      {fact.value}
    </span>
  );
}

export function MemoryReuseDemo() {
  const root = useRef<HTMLDivElement>(null);
  const [program, setProgram] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribeMotion, getMotion, () => false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry?.isIntersecting ?? false), { threshold: 0.2 });
    if (root.current) observer.observe(root.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!visible || hovered || focused || reducedMotion) return;
    const timer = window.setInterval(() => setProgram((current) => 1 - current), 5200);
    return () => window.clearInterval(timer);
  }, [visible, hovered, focused, reducedMotion]);

  return (
    <div
      ref={root}
      className={styles.root}
      data-program={program}
      tabIndex={0}
      role="group"
      aria-label="같은 사업 정보를 서로 다른 지원사업 양식에 활용하는 예시"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <header className={styles.copy}>
        <h2 id="draft-refine-title">
          다음 지원사업엔,
          <br />
          처음부터 쓰지 마세요
        </h2>
        <p>
          아이템·고객·핵심 정보를 사업 메모리에 모아두고,
          <br />
          다른 공고의 사업계획서를 작성할 때 재활용하세요.
        </p>
      </header>
      <div className={styles.scene}>
        <aside className={styles.memory} aria-label="이미 알려준 내 사업 정보">
          <div className={styles.memoryHeader}>
            <span>사업 메모리</span>
            <small>✓ 저장됨</small>
          </div>
          <h3>이미 알려준 내 사업 정보</h3>
          <dl className={styles.facts}>
            {facts.map((fact, index) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>
                  <FactValue index={index as 0 | 1 | 2} />
                </dd>
              </div>
            ))}
          </dl>
          <p className={styles.memoryNote}>다시 입력할 필요 없이</p>
        </aside>
        <div className={styles.connector} aria-hidden="true">
          <span className={styles.connectorText}>그대로 활용</span>
          <span className={styles.arrow}>→</span>
          <span key={program} className={styles.pulse} />
        </div>
        <div className={styles.destination}>
          <div className={styles.program} key={`program-${program}`}>
            <span className={styles.programIcon} aria-hidden="true">
              {program === 0 ? "A" : "B"}
            </span>
            <strong>{programs[program]}</strong>
            <span className={styles.programNote}>작성 양식</span>
          </div>
          <div className={styles.paper} key={program}>
            <div className={styles.paperHeader}>
              <strong>사업계획서</strong>
              <span>{program === 0 ? "사업 소개" : "사업 개요"}</span>
            </div>
            {program === 0 ? (
              <div className={styles.sections}>
                <div>
                  <h4>01. 고객의 문제</h4>
                  <p>
                    <FactValue index={1} />의 <FactValue index={2} />
                  </p>
                </div>
                <div>
                  <h4>02. 해결 방안</h4>
                  <p>
                    <FactValue index={0} />로 해결합니다.
                  </p>
                </div>
              </div>
            ) : (
              <dl className={styles.table}>
                {facts.map((fact, index) => (
                  <div key={fact.label}>
                    <dt>{["사업 내용", "목표 고객", "해결 과제"][index]}</dt>
                    <dd>
                      <FactValue index={index as 0 | 1 | 2} />
                    </dd>
                  </div>
                ))}
              </dl>
            )}
            <div className={styles.applied}>✓ 내 사업 정보가 반영됐어요</div>
          </div>
        </div>
      </div>
      <p className={styles.finish}>
        사업 설명은 그대로, <strong>양식만 새롭게.</strong>
      </p>
    </div>
  );
}

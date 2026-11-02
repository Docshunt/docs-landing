"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { getMasterPlanPhase, masterPlanPhases } from "@/components/pricing/master-plan-schedule";
import styles from "./landing-promotion-banner.module.css";

function formatRemainingTime(end: string, now: number | null) {
  if (now === null) return "--일 --:--:--";

  const seconds = Math.max(0, Math.ceil((Date.parse(end) - now) / 1000));
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainder = seconds % 60;
  return `${days}일 ${[hours, minutes, remainder].map((value) => String(value).padStart(2, "0")).join(":")}`;
}

export function LandingPromotionBanner() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setNow(Date.now());
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const phase = now === null ? masterPlanPhases[0] : getMasterPlanPhase(now);
  if (!phase) return null;

  const discount = Math.floor((1 - phase.max / (190000 * 6)) * 100);

  return (
    <div className={styles.banner}>
      <Link className={styles.link} href="/pricing">
        <span className={styles.copy}>
          마스터플랜 {phase.name} 최대 <strong>{discount}%</strong> 할인
        </span>
        <span className={styles.countdown}>
          <span className={styles.label}>종료까지</span>
          <span className={styles.clock} role="timer" aria-live="off">
            {formatRemainingTime(phase.end, now)}
          </span>
        </span>
        <span className={styles.cta}>
          혜택 보기 <span aria-hidden="true">→</span>
        </span>
      </Link>
    </div>
  );
}

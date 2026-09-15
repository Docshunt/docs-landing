"use client";

import type { StartHandler } from "../data";
import { LandingMain } from "../design-system/molecules";
import { ReviewedFaqSection } from "../organisms/reviewed-landing-content";
import styles from "./draft-landing-updates.module.css";
import {
  DraftFinalCtaSection,
  DraftHeroSection,
  DraftProofSection,
  DraftRefineSection,
  DraftSecuritySection,
  DraftStorySection,
  DraftWorkflowSection,
} from "../organisms/landing-draft-sections";

export function DraftLandingTemplate({ onStart, selectedUpdates = false }: { onStart: StartHandler; selectedUpdates?: boolean }) {
  return (
    <LandingMain className={`draft-landing-main${selectedUpdates ? ` ${styles.main}` : ""}`} aria-label="독스헌트 새 랜딩 시안">
      <DraftHeroSection onStart={onStart} selectedUpdates={selectedUpdates} />
      <DraftStorySection selectedUpdates={selectedUpdates} />
      <DraftProofSection marquee={selectedUpdates} />
      {!selectedUpdates && <DraftRefineSection />}
      <DraftWorkflowSection selectedUpdates={selectedUpdates} />
      {!selectedUpdates && <DraftSecuritySection selectedUpdates={selectedUpdates} />}
      {selectedUpdates && <ReviewedFaqSection />}
      <DraftFinalCtaSection onStart={onStart} selectedUpdates={selectedUpdates} />
    </LandingMain>
  );
}

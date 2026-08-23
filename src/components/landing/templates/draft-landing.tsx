"use client";

import type { StartHandler } from "../landing-data";
import { LandingBox } from "../design-system/atoms";
import {
  DraftFinalCtaSection,
  DraftHeroSection,
  DraftProofSection,
  DraftRefineSection,
  DraftSecuritySection,
  DraftStorySection,
  DraftWorkflowSection,
} from "../organisms/landing-draft-sections";

export function DraftLandingTemplate({ onStart }: { onStart: StartHandler }) {
  return (
    <LandingBox as="main" className="draft-landing-main" aria-label="독스헌트 새 랜딩 시안">
      <DraftHeroSection onStart={onStart} />
      <DraftStorySection />
      <DraftProofSection />
      <DraftRefineSection />
      <DraftWorkflowSection />
      <DraftSecuritySection />
      <DraftFinalCtaSection onStart={onStart} />
    </LandingBox>
  );
}

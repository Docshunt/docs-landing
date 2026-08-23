"use client";

import {
  LegacyFinalCtaSection,
  LegacyHeroSection,
  LegacyInterviewSection,
  LegacyProblemGraphic,
  LegacyQuestionSection,
  LegacySecuritySection,
  LegacyToolsSection,
} from "../organisms/landing-legacy-sections";
import type { StartHandler } from "../landing-data";
import { LandingBox } from "../design-system/atoms";

export function LegacyLandingTemplate({ onStart }: { onStart: StartHandler }) {
  return (
    <LandingBox as="main">
      <LegacyHeroSection onStart={onStart} />
      <LegacyQuestionSection onStart={onStart} />
      <LegacyToolsSection />
      <LegacyInterviewSection />
      <LegacySecuritySection />
      <LegacyProblemGraphic />
      <LegacyFinalCtaSection onStart={onStart} />
    </LandingBox>
  );
}

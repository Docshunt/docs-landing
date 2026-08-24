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
import type { StartHandler } from "../data";
import { LandingMain } from "../design-system/molecules";

export function LegacyLandingTemplate({ onStart }: { onStart: StartHandler }) {
  return (
    <LandingMain>
      <LegacyHeroSection onStart={onStart} />
      <LegacyQuestionSection onStart={onStart} />
      <LegacyToolsSection />
      <LegacyInterviewSection />
      <LegacySecuritySection />
      <LegacyProblemGraphic />
      <LegacyFinalCtaSection onStart={onStart} />
    </LandingMain>
  );
}

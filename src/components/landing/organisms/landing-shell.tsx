import type { ReactNode } from "react";

import { LandingBox } from "../design-system/atoms";

type LandingShellProps = {
  children: ReactNode;
  draftLanding: boolean;
};

export function LandingShell({ children, draftLanding }: LandingShellProps) {
  return (
    <LandingBox className={`page landing-page ${draftLanding ? "draft-landing-page" : ""}`} id="top">
      {children}
    </LandingBox>
  );
}

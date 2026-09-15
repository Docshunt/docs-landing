import type { StartHandler } from "../data";
import { ReviewedLandingContent } from "../organisms/reviewed-landing-content";

export function ReviewedLandingTemplate({ onStart }: { onStart: StartHandler }) {
  return <ReviewedLandingContent onStart={onStart} />;
}

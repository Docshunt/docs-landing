import type { Metadata } from "next";

import { PricingPageClient } from "./pricing-page-client";

export const metadata: Metadata = {
  title: "요금제 | 독스헌트",
  description: "내 사업의 지원사업 준비 방식에 맞는 독스헌트 플랜을 선택하세요.",
  alternates: {
    canonical: "https://docshunt.ai/pricing",
  },
};

export default function PricingPage() {
  return <PricingPageClient />;
}

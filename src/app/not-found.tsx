import type { Metadata } from "next";

export { default } from "@/components/site/pages/not-found-page";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다 | 독스헌트",
  description: "요청하신 독스헌트 페이지가 없거나 주소가 변경되었습니다. 블로그와 서비스 안내를 확인하려면 독스헌트 홈으로 이동해 주세요.",
  robots: {
    index: false,
    follow: true,
  },
};

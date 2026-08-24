import type { Metadata } from "next";

export { default } from "@/components/site/pages/not-found-page";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다 | 독스헌트",
  robots: {
    index: false,
    follow: true,
  },
};

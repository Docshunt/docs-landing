import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다 | 독스헌트",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="legal-document">
      <header className="legal-title">
        <h1>페이지를 찾을 수 없습니다</h1>
        <p>요청하신 페이지가 없거나 주소가 변경되었습니다.</p>
      </header>
      <p>
        <Link href="/">독스헌트 홈으로 돌아가기</Link>
      </p>
    </main>
  );
}

import Link from "next/link";

export function NotFoundTemplate() {
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

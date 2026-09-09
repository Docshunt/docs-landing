import Link from "next/link";

import { BlogPageShell } from "@/components/site/layout/blog-page-shell";

export function SupportProgramErrorTemplate() {
  return (
    <BlogPageShell mainClassName="support-programs-main" pageClassName="support-programs-page">
      <section className="support-program-error">
        <h1>공고를 불러오지 못했습니다</h1>
        <p>잠시 후 다시 확인해 주세요.</p>
        <Link href="/support-programs">다시 시도하기</Link>
      </section>
    </BlogPageShell>
  );
}

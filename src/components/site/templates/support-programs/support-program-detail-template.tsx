import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { BlogPageShell } from "@/components/site/layout/blog-page-shell";
import { breadcrumbJsonLd, webPageJsonLd } from "@/seo/metadata";
import {
  type SupportProgram,
  safePostingUrl,
  supportProgramDescription,
  supportProgramId,
  supportProgramPath,
} from "@/server/support-programs";

export function SupportProgramDetailTemplate({ program }: { program: SupportProgram }) {
  const path = supportProgramPath(supportProgramId(program));
  const description = supportProgramDescription(program);
  const postingUrl = safePostingUrl(program.postingUrl);
  const supportContent = program.supportContent.length ? program.supportContent : [program.announcementSummary?.markdown].filter(Boolean);

  return (
    <BlogPageShell mainClassName="support-program-detail-main" pageClassName="support-programs-page">
      <JsonLd data={webPageJsonLd({ name: program.title, description, path })} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "홈", path: "/" },
          { name: "지원사업 공고", path: "/support-programs" },
          { name: program.title, path },
        ])}
      />
      <article className="support-program-detail">
        <Link className="support-program-back" href="/support-programs">
          ← 지원사업 공고 목록
        </Link>
        {program.source ? <p className="support-programs-eyebrow">{program.source}</p> : null}
        <h1>{program.title}</h1>
        <p className="support-program-summary">{description}</p>
        <dl className="support-program-facts">
          {program.organizingAgency ? (
            <div>
              <dt>주관기관</dt>
              <dd>{program.organizingAgency}</dd>
            </div>
          ) : null}
          {program.deadline ? (
            <div>
              <dt>마감일</dt>
              <dd>{program.deadline}</dd>
            </div>
          ) : null}
          {program.supportAmount ? (
            <div>
              <dt>지원금</dt>
              <dd>{program.supportAmount}</dd>
            </div>
          ) : null}
          {program.region ? (
            <div>
              <dt>지역</dt>
              <dd>{program.region}</dd>
            </div>
          ) : null}
        </dl>
        {supportContent.length ? (
          <section className="support-program-content">
            <h2>지원 내용</h2>
            {supportContent.map((content, index) => (
              <p key={`${index}-${content}`}>{content}</p>
            ))}
          </section>
        ) : null}
        {postingUrl ? (
          <a className="support-program-original" href={postingUrl} target="_blank" rel="noreferrer">
            원문 공고 보기
          </a>
        ) : null}
      </article>
    </BlogPageShell>
  );
}

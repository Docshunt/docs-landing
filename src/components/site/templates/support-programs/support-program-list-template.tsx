import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { BlogPageShell } from "@/components/site/layout/blog-page-shell";
import { SUPPORT_PROGRAMS_DESCRIPTION, SUPPORT_PROGRAMS_TITLE, absoluteUrl, webPageJsonLd } from "@/seo/metadata";
import { type SupportProgram, supportProgramId, supportProgramPath } from "@/server/support-programs";

export function SupportProgramListTemplate({ programs }: { programs: SupportProgram[] }) {
  return (
    <BlogPageShell mainClassName="support-programs-main" pageClassName="support-programs-page">
      <JsonLd
        data={webPageJsonLd({ name: SUPPORT_PROGRAMS_TITLE, description: SUPPORT_PROGRAMS_DESCRIPTION, path: "/support-programs" })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: programs.map((program, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: program.title,
            url: absoluteUrl(supportProgramPath(supportProgramId(program))),
          })),
        }}
      />
      <header className="support-programs-hero">
        <p className="support-programs-eyebrow">정부지원사업 · 창업지원사업</p>
        <h1>지원사업 공고</h1>
        <p>{SUPPORT_PROGRAMS_DESCRIPTION}</p>
        <a className="support-programs-rss" href="/rss.xml">
          RSS로 구독하기
        </a>
      </header>
      {programs.length ? (
        <section className="support-program-grid" aria-label="최신 지원사업 공고">
          {programs.map((program) => (
            <article className="support-program-card" key={supportProgramId(program)}>
              {program.source ? <span className="support-program-source">{program.source}</span> : null}
              <h2>
                <Link href={supportProgramPath(supportProgramId(program))}>{program.title}</Link>
              </h2>
              <dl>
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
                {program.region ? (
                  <div>
                    <dt>지역</dt>
                    <dd>{program.region}</dd>
                  </div>
                ) : null}
              </dl>
              <Link className="support-program-card-link" href={supportProgramPath(supportProgramId(program))}>
                공고 자세히 보기
              </Link>
            </article>
          ))}
        </section>
      ) : (
        <p className="support-program-empty">현재 표시할 수 있는 지원사업 공고가 없습니다.</p>
      )}
    </BlogPageShell>
  );
}

import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { BlogPageShell } from "@/components/site/layout/blog-page-shell";
import { APP_URL, breadcrumbJsonLd, webPageJsonLd } from "@/seo/metadata";
import { isSupportProgramClosed } from "@/seo/support-programs-xml";
import {
  type SupportProgram,
  formatSupportProgramDeadline,
  safePostingUrl,
  supportProgramDescription,
  supportProgramId,
  supportProgramPath,
} from "@/server/support-programs";

type SummaryBlock = { kind: "heading"; text: string } | { kind: "list"; items: string[] } | { kind: "text"; text: string };

// 공고 요약은 "## 제목"과 "- 항목"만 쓰는 짧은 마크다운이다. HTML로 넣지 않고 글자로만 그린다.
function summaryBlocks(markdown: string | null | undefined): SummaryBlock[] {
  const blocks: SummaryBlock[] = [];
  for (const rawLine of (markdown ?? "").split("\n")) {
    const line = rawLine.trim().replace(/\*\*(.+?)\*\*/g, "$1");
    if (!line) continue;
    const heading = line.match(/^#{1,6}\s+(.+)$/);
    const item = line.match(/^(?:[-*]|\d+\.)\s+(.+)$/);
    const last = blocks.at(-1);
    if (heading) blocks.push({ kind: "heading", text: heading[1] ?? "" });
    else if (item && last?.kind === "list") last.items.push(item[1] ?? "");
    else if (item) blocks.push({ kind: "list", items: [item[1] ?? ""] });
    else blocks.push({ kind: "text", text: line });
  }
  return blocks;
}

export function SupportProgramDetailTemplate({ program }: { program: SupportProgram }) {
  const path = supportProgramPath(supportProgramId(program));
  const description = supportProgramDescription(program);
  const postingUrl = safePostingUrl(program.postingUrl);
  const supportContent = program.supportContent;
  const deadline = formatSupportProgramDeadline(program);
  const closed = isSupportProgramClosed(program, new Date());
  const conditions = program.conditions ?? [];
  const attachmentNames = program.attachmentNames ?? [];
  const summary = summaryBlocks(program.announcementSummary?.markdown);

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
          {deadline ? (
            <div>
              <dt>마감일</dt>
              <dd>
                {deadline}
                {closed ? <span className="support-program-closed">접수 마감</span> : null}
              </dd>
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
        {conditions.length ? (
          <section className="support-program-content">
            <h2>신청 자격</h2>
            <dl className="support-program-facts support-program-conditions">
              {conditions.map((condition) => (
                <div key={`${condition.label}-${condition.value}`}>
                  <dt>{condition.label}</dt>
                  <dd>{condition.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}
        {summary.length ? (
          <section className="support-program-content support-program-outline">
            <h2>공고 요약</h2>
            {summary.map((block, index) =>
              block.kind === "heading" ? (
                <h3 key={`${index}-${block.text}`}>{block.text}</h3>
              ) : block.kind === "list" ? (
                <ul key={`${index}-${block.items[0]}`}>
                  {block.items.map((item, itemIndex) => (
                    <li key={`${itemIndex}-${item}`}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p key={`${index}-${block.text}`}>{block.text}</p>
              ),
            )}
          </section>
        ) : null}
        {attachmentNames.length ? (
          <section className="support-program-content">
            <h2>공고 첨부 서류</h2>
            <ul className="support-program-attachments">
              {attachmentNames.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
            <p className="support-program-note">첨부 서류는 원문 공고에서 내려받을 수 있습니다.</p>
          </section>
        ) : null}
        <p className="support-program-note">
          독스헌트가 공고문을 요약한 내용입니다. 신청 전에 원문 공고에서 자격과 마감 시간을 꼭 다시 확인하세요.
        </p>
        {postingUrl ? (
          <a className="support-program-original" href={postingUrl} target="_blank" rel="noreferrer">
            원문 공고 보기
          </a>
        ) : null}
        <section className="support-program-cta" aria-label="독스헌트 시작하기">
          <p>이 공고에 낼 사업계획서, 공고 양식에 맞춘 초안부터 만들어 보세요.</p>
          <a href={APP_URL}>독스헌트 무료로 시작하기</a>
        </section>
      </article>
    </BlogPageShell>
  );
}

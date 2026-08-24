import { BlogPageShell } from "@/components/site/layout/blog-page-shell";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { BLOG_POSTS } from "@/data/docshunt-blogs";
import { ABOUT_DESCRIPTION, ABOUT_TITLE, BLOG_AUTHOR_NAME, authorProfileJsonLd, buildPageMetadata, breadcrumbJsonLd } from "@/seo/metadata";

const history = [
  {
    date: "2024",
    title: "독스헌트AI 출시와 초기 이용자 확보",
    description:
      "숭실대학교 공식 자료는 사페레아우데가 생성형 AI 기반 독스헌트AI를 출시하고, 출시 3개월 만에 약 2,000명의 이용자를 모집해 서비스를 고도화한 사례를 소개했습니다.",
    sources: [
      {
        label: "숭실대학교 2025 SSU:TING STAR",
        url: "https://iphak.ssu.ac.kr/upload/SSU%281%29_24062517157.pdf",
      },
    ],
  },
  {
    date: "2025.03",
    title: "신한카드 Startup TechBlaze 최종 3팀 선정",
    description: "사페레아우데는 신한카드와 서울창조경제혁신센터가 진행한 생성형 AI 스타트업 공모전의 최종 선정 3개 팀에 포함됐습니다.",
    sources: [
      {
        label: "숭실대학교 창업지원단 선정 소식",
        url: "https://startup.ssu.ac.kr/board/archive/3613?boardEnName=archive&contentId=3460",
      },
      {
        label: "신한카드 Startup TechBlaze 공모전 안내",
        url: "https://www.shinhancard.com/pconts/company/html/promotion/press/1234323_3999.html",
      },
    ],
  },
  {
    date: "2025.10",
    title: "미래혁신기술박람회 FIX 2025 참가",
    description: "사페레아우데는 FIX 2025에서 창업자의 아이디어를 문서로 전환하는 AI 문서 자동화 솔루션 독스헌트를 소개했습니다.",
    sources: [
      {
        label: "독스헌트 공식 FIX 2025 참가 안내",
        url: "https://kr.linkedin.com/posts/docshunt_fix2025-%EC%97%91%EC%8A%A4%EC%BD%94-activity-7384499184374059009-2R8m",
      },
    ],
  },
  {
    date: "2026.01",
    title: "CES 2026 공식 참가",
    description: "CES 공식 전시기업 페이지에 SAPERE AUDE Inc.가 AI, Education Tech, Enterprise, Startups 분야 참가 기업으로 등록됐습니다.",
    sources: [
      {
        label: "CES 2026 공식 전시기업 페이지",
        url: "https://exhibitors.ces.tech/8_0/exhibitor/exhibitor-details.cfm?exhid=001Pp00000o3FygIAE",
      },
      {
        label: "한국일보 CES 2026 서울통합관 보도",
        url: "https://www.hankookilbo.com/news/article/A2026010609220002797",
      },
    ],
  },
  {
    date: "2026",
    title: "중소벤처기업부 ‘모두의 창업’ AI 솔루션 공급기업",
    description: "모두의 창업 공식 플랫폼은 독스헌트를 사업계획서 작성을 지원하는 AI 솔루션으로 소개하고 있습니다.",
    sources: [
      {
        label: "모두의 창업 독스헌트 AI 솔루션",
        url: "https://www.modoo.or.kr/ai-solution/organization/835",
      },
    ],
  },
  {
    date: "2026",
    title: "숭실대학교 캠퍼스타운 스타트업 인턴십 참여기업",
    description: "숭실대학교 창업지원단의 2026 스타트업 인턴십 참여기업 명단에 주식회사 사페레아우데가 포함됐습니다.",
    sources: [
      {
        label: "숭실대학교 창업지원단 참여기업 안내",
        url: "https://startup.ssu.ac.kr/board/notice/3897?boardEnName=notice",
      },
    ],
  },
] as const;

export const metadata = buildPageMetadata({
  title: ABOUT_TITLE,
  description: ABOUT_DESCRIPTION,
  path: "/about",
});

export function AboutPageTemplate() {
  return (
    <BlogPageShell mainClassName="about-main" pageClassName="about-page">
      <JsonLd data={authorProfileJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "홈", path: "/" },
          { name: "작성자 소개", path: "/about" },
        ])}
      />
      <article className="about-article">
        <header id="editorial-policy" className="about-profile">
          <p className="about-kicker">DocsHunt Blog</p>
          <h1>{BLOG_AUTHOR_NAME}</h1>
          <p className="about-role">창업자가 복잡한 공고를 이해하고, 설득력 있는 사업계획서를 쓸 수 있도록 돕는 콘텐츠를 만듭니다.</p>
          <div className="about-profile-meta" aria-label="작성자 정보">
            <span>독스헌트 공식 콘텐츠팀</span>
            <span>정부지원사업 · 사업계획서</span>
          </div>
        </header>

        <section className="about-bio" aria-labelledby="bio-title">
          <h2 id="bio-title">안녕하세요, 독스헌트 마케팅팀입니다.</h2>
          <p>
            예비창업자와 초기 창업자가 지원사업을 준비하며 반복해서 마주치는 질문을 정리합니다. 공고를 어디서 찾아야 하는지, 평가자가 무엇을
            확인하는지, 아이디어를 어떤 문장으로 설명해야 하는지를 실제 작성 순서에 맞춰 풀어냅니다.
          </p>
          <p>
            일정과 자격처럼 바뀔 수 있는 정보는 주관기관의 공식 공고를 우선 확인합니다. 확인한 날짜와 출처는 글 안에 함께 남기고, 공식
            정보와 독스헌트의 작성 팁이 섞이지 않도록 구분합니다.
          </p>
          <a className="about-contact" href="mailto:yes-reply@docshunt.ai">
            콘텐츠 문의 · 정정 제보
          </a>
        </section>

        <section className="about-company-intro" aria-labelledby="company-title">
          <h2 id="company-title">독스헌트에 대해</h2>
          <p>
            독스헌트는 주식회사 사페레아우데가 운영하는 사업계획서 AI입니다. 창업자와 실무자가 반복적인 문서 작업보다 아이디어 검증과 실행에
            집중할 수 있도록 지원사업 공고 탐색과 사업계획서 작성을 돕습니다.
          </p>
        </section>

        <section className="about-posts" aria-labelledby="about-posts-title">
          <h2 id="about-posts-title">최근 작성한 글</h2>
          <ul>
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <li key={post.slug}>
                <Link href={`/blog_detail/${post.slug}`}>
                  <span>{post.title}</span>
                  <time>{post.date}</time>
                </Link>
              </li>
            ))}
          </ul>
          <Link className="about-all-posts" href="/blog_list">
            모든 글 보기
          </Link>
        </section>

        <details className="about-history">
          <summary>독스헌트의 공개 이력과 출처</summary>
          <div>
            {history.map((item) => (
              <article key={`${item.date}-${item.title}`}>
                <time>{item.date}</time>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ul>
                    {item.sources.map((source) => (
                      <li key={source.url}>
                        <a href={source.url} target="_blank" rel="noopener noreferrer">
                          {source.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </details>
      </article>
    </BlogPageShell>
  );
}

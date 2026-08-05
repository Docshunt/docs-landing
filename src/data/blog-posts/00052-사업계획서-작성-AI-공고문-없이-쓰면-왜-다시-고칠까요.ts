import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const MSS_INTEGRATED_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1064197&cbIdx=310&parentSeq=1064197";
const MSS_CITY_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1069194&cbIdx=310&parentSeq=1069194";

export const post52 = {
  page: 1,
  index: 1,
  slug: "business-plan-writing-ai-public-notice-first",
  sourceUrl: "https://docshunt.ai/blog_detail/business-plan-writing-ai-public-notice-first",
  title: "사업계획서 작성 AI, 공고문 없이 쓰면 왜 다시 고칠까요?",
  titleLines: ["사업계획서 작성 AI,", "공고문 없이 쓰면 왜 다시 고칠까요?"],
  description:
    "사업계획서 작성 AI에 아이템만 설명하고 바로 초안을 만들면 공고 목적·지원 대상·사업 기간을 AI가 추측하게 됩니다. 공고문에서 먼저 뽑아야 할 5가지와 재작업을 줄이는 입력 순서를 설명합니다.",
  seo: {
    mainKeyword: "사업계획서 작성 AI",
    supportKeywords: ["지원사업 공고문", "사업계획서 초안", "AI 사업계획서 작성"],
    searchIntent: "AI로 지원사업 사업계획서를 쓰기 전에 공고문을 왜 넣어야 하며 어떤 항목을 먼저 정리해야 하는지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.05",
  modifiedDate: "2026.08.05",
  verification: {
    date: "2026.08.05",
    note: "2026년 창업지원사업 통합공고와 개별 창업기업 모집공고를 대조해 지원 목적, 대상, 업력, 지역, 제출서류와 기간이 사업별로 달라질 수 있음을 확인했습니다. 실제 신청 시에는 해당 공고의 최신 원문과 첨부파일을 최종 기준으로 삼아야 합니다.",
    sources: [
      { label: "중소벤처기업부, 2026년도 중앙부처 및 지자체 창업지원사업 통합공고", url: MSS_INTEGRATED_NOTICE_URL },
      { label: "중소벤처기업부, 2026년 창업도시 조성 프로젝트 창업기업 모집 통합공고", url: MSS_CITY_NOTICE_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00052-business-plan-writing-ai-public-notice-first-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00052-business-plan-writing-ai-public-notice-first-hero.jpg",
  paragraphs: [
    "사업계획서 작성 AI에 공고문을 주지 않고 아이템만 설명하면, AI는 지원 목적과 평가 기준을 추측해 빈칸을 채울 수밖에 없습니다. 문장은 빨리 완성되지만 제출 양식과 맞지 않아 다시 쓰는 일이 생깁니다.",
    "공고문에서 사업 목적, 지원 대상과 제외 조건, 제출 양식, 사업 기간과 예산, 평가 기준을 먼저 뽑아 입력해야 합니다. 그다음 기존 사업 자료를 연결하면 AI가 고쳐야 할 범위도 줄어듭니다.",
    "아직 지원할 공고를 정하지 않았다면 고객 문제, 해결 방법, 성과, 팀 역량 같은 변하지 않는 사실만 정리해두세요. 제출용 원고는 공고를 고른 뒤 만드는 편이 효율적입니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>사업계획서 작성 AI</strong>에 아이템만 설명하고 바로 초안을 만들면, AI는 공고의 목적과 지원 대상을 알 수 없습니다. 빠르게 완성된 문장도 제출하려는 사업과 방향이 다르면 결국 다시 고쳐야 합니다.</p>
  <p>실제로 2026년 창업지원사업 통합공고에는 111개 기관의 508개 사업이 포함됐습니다. 사업화, 기술개발, 보육, 인력, 글로벌 진출처럼 목적이 제각각이어서, 아이템 설명만으로 모든 사업의 요구사항을 맞출 수는 없습니다.</p>

  <h2>공고문이 없으면 AI가 중요한 조건을 추측합니다</h2>
  <p>“반려동물 건강관리 앱으로 지원사업 사업계획서를 써줘”라고 요청하면 AI는 그럴듯한 문제 정의와 실행계획을 만들 수 있습니다. 하지만 어떤 고객을 우선해야 하는지, 사업 기간이 몇 개월인지, 개발과 판로 중 무엇을 더 강조해야 하는지는 알 수 없습니다.</p>
  <p>예를 들어 2026년 창업도시 조성 프로젝트 공고는 대구·광주·대전·울산을 대상으로 하고, 세부 사업과 트랙에 따라 신청 가능한 업력이 달라집니다. 제출서류도 사업신청서, 사업계획서, 증빙자료로 정해져 있습니다. 이런 조건을 입력하지 않으면 AI가 만든 초안은 해당 공고의 답이 되기 어렵습니다.</p>

  <h2>초안을 만들기 전에 공고문에서 5가지를 뽑으세요</h2>
  <ol>
    <li><strong>사업 목적</strong>: 이 사업이 창업기업에게 기대하는 변화가 무엇인지 적습니다.</li>
    <li><strong>지원 대상과 제외 조건</strong>: 업력, 지역, 업종, 중복수혜 제한을 확인합니다.</li>
    <li><strong>제출 양식</strong>: 필수 항목, 분량, 첨부서류와 파일 형식을 적습니다.</li>
    <li><strong>사업 기간과 예산</strong>: 기간 안에 끝낼 수 있는 실행계획과 비용 범위를 확인합니다.</li>
    <li><strong>평가 기준</strong>: 시장성, 기술성, 팀 역량처럼 실제로 점수를 받는 항목을 찾습니다.</li>
  </ol>
  <p>다섯 항목을 한 페이지로 정리한 뒤 AI에 제공하면, “좋은 사업계획서”가 아니라 “이 공고에 답하는 사업계획서”를 만들기 쉬워집니다.</p>

  <h2>입력 순서만 바꿔도 재작업이 줄어듭니다</h2>
  <div class="dh-note">
    <p><strong>1. 공고 기준을 먼저 입력합니다.</strong><br>사업 목적, 대상, 기간, 제출 항목, 평가 기준을 넣습니다.</p>
    <p><strong>2. 확인된 사업 자료를 붙입니다.</strong><br>고객 인터뷰, 매출, 테스트 결과, 견적, 팀 경력을 제공합니다.</p>
    <p><strong>3. 빈칸을 표시하게 합니다.</strong><br>근거가 없는 부분은 만들어내지 말고 질문이나 '확인 필요'로 남기도록 요청합니다.</p>
    <p><strong>4. 항목별로 작성합니다.</strong><br>전체 원고를 한 번에 만들기보다 문제 정의, 실현 가능성, 성장 전략 순으로 검토합니다.</p>
  </div>

  <h2>공고를 고르기 전에는 재사용할 기준 원고부터 만드세요</h2>
  <p>아직 지원할 사업을 고르지 않았다면 AI로 제출용 문장을 완성하려 하지 않아도 됩니다. 고객 문제, 해결 방법, 현재 성과, 팀 역량처럼 공고가 바뀌어도 유지되는 사실을 먼저 모아두세요.</p>
  <p>공고를 고른 뒤 그 기준 원고에서 필요한 내용만 꺼내고, 사업 목적과 평가 항목에 맞춰 순서를 바꾸면 됩니다. 어떤 항목을 앞세우고 어떤 근거를 보완할지는 공고가 정해진 뒤에야 판단할 수 있습니다.</p>

  <div class="dh-cta">
    <p>독스헌트에서는 공고를 선택한 뒤 요약된 조건을 확인하고, 기존 사업 정보를 바탕으로 항목별 초안을 이어서 작성할 수 있습니다.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=business-plan-writing-ai-public-notice-first&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 공고부터 확인하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${MSS_INTEGRATED_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년도 중앙부처 및 지자체 창업지원사업 통합공고</a></li>
      <li><a href="${MSS_CITY_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 창업도시 조성 프로젝트 창업기업 모집 통합공고</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

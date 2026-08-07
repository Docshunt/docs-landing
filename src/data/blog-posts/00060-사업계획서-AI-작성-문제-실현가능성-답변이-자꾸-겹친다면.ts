import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const MSS_PRE_STARTUP_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1065953&cbIdx=310&parentSeq=1065953";
const OPENAI_TRUTH_URL = "https://help.openai.com/en/articles/8313428-does-chatgpt-tell-the-truth";
const NIST_GENAI_URL = "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf";

export const post60 = {
  page: 1,
  index: 1,
  slug: "business-plan-ai-overlapping-answers",
  sourceUrl: "https://docshunt.ai/blog_detail/business-plan-ai-overlapping-answers",
  title: "사업계획서 AI 작성, 문제·실현가능성 답변이 자꾸 겹친다면",
  titleLines: ["사업계획서 AI 작성,", "답변이 자꾸 겹친다면"],
  description:
    "사업계획서 AI 작성 결과에서 문제 인식·실현 가능성·성장 전략의 답변이 반복되는 이유와, 같은 근거를 항목별 역할에 맞게 나누는 편집법을 설명합니다.",
  seo: {
    mainKeyword: "사업계획서 AI 작성",
    supportKeywords: ["AI 사업계획서", "사업계획서 항목", "사업계획서 실현 가능성"],
    searchIntent: "AI로 사업계획서를 쓸 때 문제 인식과 실현 가능성 등 항목별 답변이 반복되는 원인과 수정 방법을 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.07",
  modifiedDate: "2026.08.07",
  verification: {
    date: "2026.08.07",
    note: "Search Console에서 사업계획서 AI·사업계획서 작성 AI 검색 수요를 확인했습니다. 2026년 예비창업패키지 수정 공고의 문제인식·실현가능성·성장전략·팀 구성 평가지표를 기준으로 항목별 역할을 구분했고, 생성형 AI의 사실성 한계는 OpenAI와 NIST 공식 자료로 확인했습니다.",
    sources: [
      { label: "중소벤처기업부, 2026년도 예비창업패키지 예비창업자 모집 수정 공고", url: MSS_PRE_STARTUP_URL },
      { label: "OpenAI Help Center, Does ChatGPT tell the truth?", url: OPENAI_TRUTH_URL },
      {
        label: "NIST, Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile",
        url: NIST_GENAI_URL,
      },
    ],
  },
  image: "/docshunt-assets/blog-covers/00060-business-plan-ai-overlapping-answers-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00060-business-plan-ai-overlapping-answers-hero.jpg",
  paragraphs: [
    "사업계획서 AI 작성 결과에서 여러 항목의 답이 겹친다면, 사업 정보가 부족해서라기보다 각 항목에 맡길 역할을 정하지 않은 경우가 많습니다. 같은 고객 인터뷰와 제품 설명을 모든 칸에 넣으면 문장은 달라도 내용은 반복됩니다.",
    "2026년 예비창업패키지 수정 공고는 문제인식, 실현가능성, 성장전략, 팀 구성의 평가 초점을 서로 다르게 안내합니다. 문제인식은 왜 필요한지, 실현가능성은 어떻게 해결하고 검증할지, 성장전략은 어떻게 시장에 진입할지, 팀 구성은 누가 실행할지에 답해야 합니다.",
    "AI에는 전체 문서를 한 번에 완성하라고 하기보다 항목별 한 문장 답, 사용할 근거, 다른 항목으로 넘길 내용을 먼저 정리해주는 편이 좋습니다. 마지막에는 반복 문장뿐 아니라 숫자와 출처가 실제 자료와 맞는지도 확인해야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>사업계획서 AI 작성</strong> 결과에서 문제 인식과 실현 가능성의 답이 자꾸 겹친다면, 먼저 프롬프트보다 항목의 역할을 확인해야 합니다. 같은 고객 인터뷰와 제품 설명을 모든 칸에 넣으면 표현만 달라지고 내용은 반복됩니다.</p>
  <p>해결 방법은 자료를 더 길게 넣는 것이 아닙니다. <strong class="dh-emphasis">각 항목이 어떤 판단에 답해야 하는지 한 문장으로 정한 뒤, 근거를 나눠 배치하는 것</strong>입니다.</p>

  <h2>사업계획서 항목은 같은 회사를 다른 질문으로 봅니다</h2>
  <p>2026년 예비창업패키지 수정 공고의 평가지표는 문제인식, 실현가능성, 성장전략, 팀 구성을 구분합니다. 공고는 문제인식에서 개발 동기와 해결 필요성을, 실현가능성에서 개발·개선 방법과 경쟁력 확보 방안을 보도록 안내합니다. 성장전략은 시장진입과 자금조달, 팀 구성은 대표자와 인력의 역량을 다룹니다.</p>
  <div class="dh-note">
    <p><strong>문제인식</strong><br>누가 어떤 상황에서 왜 불편한가?</p>
    <p><strong>실현가능성</strong><br>그 문제를 어떤 방식으로 줄이고 무엇으로 검증할 것인가?</p>
    <p><strong>성장전략</strong><br>검증된 해결책을 어떤 고객과 채널로 확장할 것인가?</p>
    <p><strong>팀 구성</strong><br>왜 이 팀이 계획을 실행할 수 있는가?</p>
  </div>
  <p>네 항목 모두 같은 사업을 설명하지만, 요구하는 결론은 다릅니다. 첫 문장부터 같은 회사 소개로 시작하면 뒤 문단도 쉽게 겹칩니다.</p>

  <h2>같은 인터뷰도 항목마다 쓰임이 달라야 합니다</h2>
  <p>가상의 반품관리 서비스를 예로 들어보겠습니다. 온라인 판매자 8명을 인터뷰했고, 이 중 6명이 반품 사유를 엑셀에 다시 옮겨 적었다는 사실을 확인했다고 가정하겠습니다.</p>
  <ul>
    <li><strong>문제인식:</strong> 반복 입력이 언제 생기고 어떤 누락을 만드는지 설명합니다.</li>
    <li><strong>실현가능성:</strong> 주문 정보와 반품 사유를 자동 연결하는 시제품으로 입력 횟수와 누락 건수를 어떻게 비교할지 씁니다.</li>
    <li><strong>성장전략:</strong> 첫 고객군을 어떤 판매자로 좁히고, 어떤 채널에서 유료 전환을 확인할지 적습니다.</li>
    <li><strong>팀 구성:</strong> 이 업무를 이해하거나 연동 기능을 구현할 경험이 누구에게 있는지 보여줍니다.</li>
  </ul>
  <p>인터뷰 숫자는 문제인식과 실현가능성에 모두 등장할 수 있습니다. 다만 앞에서는 문제의 존재를 뒷받침하고, 뒤에서는 다음 검증의 기준값으로 쓰여야 합니다. 같은 문단을 두 번 붙여 넣는 것과는 다릅니다.</p>

  <h2>AI에 전체 원고보다 항목별 편집표를 먼저 요청하세요</h2>
  <p>AI가 문서를 한 번에 만들게 하면 앞에서 사용한 문맥을 뒤 항목에도 재사용하기 쉽습니다. 작성 전에 아래 세 칸을 항목마다 정리하면 반복을 줄일 수 있습니다.</p>
  <ol>
    <li><strong>이 항목의 한 문장 답:</strong> 평가자가 이 칸에서 내려야 할 판단을 씁니다.</li>
    <li><strong>사용할 근거:</strong> 인터뷰, 테스트, 견적, 매출, 경력 중 직접 연결되는 자료만 고릅니다.</li>
    <li><strong>다른 항목으로 넘길 내용:</strong> 시장진입, 기술 구현, 팀 경력처럼 여기서 길게 설명하지 않을 내용을 표시합니다.</li>
  </ol>
  <div class="dh-note">
    <p><strong>요청 예시</strong><br>문제인식 항목만 작성하되 고객의 반복 업무와 현재 대안에 답해주세요. 제품 기능, 판매 채널, 팀 경력은 한 문장 이상 설명하지 말고 각각 실현가능성·성장전략·팀 구성으로 넘길 내용을 별도로 표시해주세요.</p>
  </div>
  <p>이렇게 항목별 경계를 먼저 세우면 AI가 만든 문장을 비교하기도 쉬워집니다. 각 답변의 첫 문장만 모아 읽었을 때 서로 다른 질문에 답하는지 확인해보세요.</p>

  <h2>반복을 지운 뒤에는 사실을 다시 확인해야 합니다</h2>
  <p>문장의 반복을 정리한 뒤에는 사실 확인이 별도로 필요합니다. OpenAI는 언어 모델이 틀린 사실이나 존재하지 않는 인용을 제시할 수 있다고 안내하고, NIST도 생성형 AI의 그럴듯하지만 잘못된 출력을 위험 요소로 다룹니다.</p>
  <p>최종 편집에서는 시장 수치, 고객 수, 일정, 제품 성능, 출처 URL을 원자료와 대조하세요. 확인하지 못한 내용은 단정문으로 다듬지 말고 가정 또는 확인할 과제로 남겨야 합니다.</p>
  <ul>
    <li>같은 문장이 두 항목에 반복되는가?</li>
    <li>같은 근거가 서로 다른 판단에 쓰였는가?</li>
    <li>숫자와 출처를 원문에서 확인했는가?</li>
    <li>빈칸을 AI가 임의로 채운 부분은 없는가?</li>
  </ul>

  <div class="dh-cta">
    <p>공고의 질문을 먼저 나누고, 저장한 사업 자료에서 항목별 근거를 골라 사업계획서 초안을 정리해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=business-plan-ai-overlapping-answers&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 항목별 초안 만들기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${MSS_PRE_STARTUP_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년도 예비창업패키지 예비창업자 모집 수정 공고</a></li>
      <li><a href="${OPENAI_TRUTH_URL}" target="_blank" rel="noopener noreferrer">OpenAI Help Center, Does ChatGPT tell the truth?</a></li>
      <li><a href="${NIST_GENAI_URL}" target="_blank" rel="noopener noreferrer">NIST, Generative Artificial Intelligence Profile</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

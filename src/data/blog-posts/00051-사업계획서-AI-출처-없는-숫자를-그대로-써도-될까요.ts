import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const OPENAI_TRUTH_URL = "https://help.openai.com/en/articles/8313428-does-chatgpt-tell-the-truth";
const NIST_GENAI_URL = "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf";

export const post51 = {
  page: 1,
  index: 1,
  slug: "business-plan-ai-source-number-verification",
  sourceUrl: "https://docshunt.ai/blog_detail/business-plan-ai-source-number-verification",
  title: "사업계획서 AI, 출처 없는 숫자를 그대로 써도 될까요?",
  titleLines: ["사업계획서 AI,", "출처 없는 숫자를 그대로 써도 될까요?"],
  description:
    "사업계획서 AI가 제시한 시장 규모와 성장률은 원문을 열어 확인하기 전까지 초안일 뿐입니다. 출처·발행일·조사 대상·산정 기준을 빠르게 검증하고 근거 문장으로 바꾸는 방법을 정리했습니다.",
  seo: {
    mainKeyword: "사업계획서 AI",
    supportKeywords: ["AI 사업계획서", "사업계획서 출처", "사업계획서 숫자 검증"],
    searchIntent: "AI가 사업계획서에 넣어준 통계와 출처를 믿어도 되는지, 제출 전 어떻게 검증해야 하는지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.05",
  modifiedDate: "2026.08.05",
  verification: {
    date: "2026.08.05",
    note: "생성형 AI는 사실과 다른 수치나 존재하지 않는 출처를 제시할 수 있다는 OpenAI와 NIST의 공식 안내를 확인했습니다. 본문의 예시는 검증 절차를 설명하기 위한 가상 사례입니다.",
    sources: [
      { label: "OpenAI Help Center, Does ChatGPT tell the truth?", url: OPENAI_TRUTH_URL },
      { label: "NIST, Generative Artificial Intelligence Profile", url: NIST_GENAI_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00051-business-plan-ai-source-number-verification-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00051-business-plan-ai-source-number-verification-hero.jpg",
  paragraphs: [
    "사업계획서 AI가 알려준 숫자는 원문을 직접 확인하기 전까지 근거가 아니라 초안으로 봐야 합니다. 문장이 자연스럽고 출처 이름까지 붙어 있어도 실제 보고서에 같은 수치가 있는지는 별개의 문제입니다.",
    "제출 전에는 출처 링크, 발행일, 조사 대상, 수치의 기준을 확인해야 합니다. 네 가지 중 하나라도 찾을 수 없다면 숫자를 빼거나 확인 가능한 자료로 바꾸는 편이 안전합니다.",
    "AI에는 숫자를 만들어 달라고 하기보다 내가 제공한 자료에서 필요한 수치를 찾고 출처 위치를 정리하게 맡기세요. 최종 확인은 원문을 연 사람이 해야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>사업계획서 AI</strong>가 알려준 시장 규모나 성장률은 원문을 직접 확인하기 전까지 근거가 아니라 초안입니다. 보고서 이름과 링크까지 그럴듯하게 붙어 있어도, 실제 자료에 같은 숫자가 있는지는 별개의 문제입니다.</p>
  <p>이런 오류는 공식 안내에도 나와 있습니다. OpenAI는 언어 모델이 틀린 사실뿐 아니라 존재하지 않는 연구와 출처를 만들어낼 수 있다고 설명합니다. NIST도 생성형 AI가 잘못된 내용이나 인용을 확신에 찬 문장으로 제시할 수 있다고 경고합니다.</p>

  <h2>숫자가 자연스러워 보여서 더 놓치기 쉽습니다</h2>
  <p>아래 숫자는 검증 방법을 설명하기 위해 만든 예시입니다. AI가 “국내 반려동물 시장은 2025년 8조 원이며 매년 15% 성장한다”고 썼다고 해보겠습니다. 숫자도 구체적이고 문장도 자연스러워 그대로 쓰고 싶어집니다.</p>
  <p>하지만 원문을 열어보니 해외 시장을 원화로 바꾼 수치일 수도 있고, 전체 반려 산업이 아니라 사료 시장만 조사한 자료일 수도 있습니다. 발행연도나 전망 기간이 다른 숫자 두 개가 한 문장에 섞였을 가능성도 있습니다.</p>

  <h2>제출 전에는 네 가지만 확인하세요</h2>
  <ol>
    <li><strong>출처</strong>: 기관명만 보지 말고 원문 링크가 실제로 열리는지 확인합니다.</li>
    <li><strong>발행일</strong>: 오래된 실적을 현재 시장 규모처럼 쓰고 있지 않은지 확인합니다.</li>
    <li><strong>조사 대상</strong>: 국내인지 해외인지, 기업인지 소비자인지, 표본이 누구인지 봅니다.</li>
    <li><strong>산정 기준</strong>: 매출, 거래액, 이용자 수처럼 무엇을 합산한 숫자인지 확인합니다.</li>
  </ol>
  <p>네 가지 중 하나라도 원문에서 찾지 못했다면 그 숫자는 잠시 빼두는 편이 낫습니다. 출처를 설명할 수 없는 숫자 하나가 문서 전체의 신뢰를 깎을 수 있기 때문입니다.</p>

  <h2>근거가 약하면 숫자를 더 만드는 대신 범위를 줄이세요</h2>
  <p>시장 전체 통계가 없다고 해서 억지로 큰 숫자를 채울 필요는 없습니다. 정부 통계처럼 확인 가능한 공개 자료, 자사 매출과 상담 건수 같은 내부 자료, 산식이 드러나는 추정치 순으로 정리하면 됩니다.</p>
  <div class="dh-note">
    <p><strong>공개 자료</strong><br>보고서 이름, 발행기관, 발행연도와 원문 링크를 함께 남깁니다.</p>
    <p><strong>자사 자료</strong><br>기간과 집계 기준을 적습니다. 예: “2026년 1~6월 유료 고객 84명”.</p>
    <p><strong>추정치</strong><br>사실처럼 단정하지 말고 계산식을 보여줍니다. 예: “대상 매장 2,000곳 × 월 이용료 10만 원”.</p>
  </div>

  <h2>AI에는 숫자 생성보다 검증표를 맡겨보세요</h2>
  <p>AI에게 “시장 규모를 찾아줘”라고만 묻기보다, 사용할 자료를 먼저 제공하고 아래 항목으로 정리해 달라고 요청해보세요.</p>
  <ul>
    <li>주장에 사용할 숫자</li>
    <li>원문 URL과 발행일</li>
    <li>숫자가 나온 표·페이지·문단</li>
    <li>조사 대상과 단위</li>
    <li>확인되지 않은 부분</li>
  </ul>
  <p>표가 완성돼도 링크는 직접 열어봐야 합니다. <strong class="dh-emphasis">AI가 확인할 자료를 추려줄 수는 있지만, 출처가 맞는지 최종 판단하는 일은 작성자의 몫입니다.</strong></p>

  <div class="dh-cta">
    <p>확인한 출처와 기존 사업 자료를 바탕으로 초안을 만들고, 아직 근거가 부족한 문장을 차례로 정리해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=business-plan-ai-source-number-verification&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트로 사업계획서 시작하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${OPENAI_TRUTH_URL}" target="_blank" rel="noopener noreferrer">OpenAI Help Center, Does ChatGPT tell the truth?</a></li>
      <li><a href="${NIST_GENAI_URL}" target="_blank" rel="noopener noreferrer">NIST, Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

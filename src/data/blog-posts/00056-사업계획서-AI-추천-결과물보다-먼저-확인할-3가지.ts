import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const OPENAI_TRUTH_URL = "https://help.openai.com/en/articles/8313428-does-chatgpt-tell-the-truth";
const NIST_GENAI_URL = "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf";
const K_STARTUP_URL = "https://www.k-startup.go.kr/";

export const post56 = {
  page: 1,
  index: 1,
  slug: "business-plan-ai-recommendation-checklist",
  sourceUrl: "https://docshunt.ai/blog_detail/business-plan-ai-recommendation-checklist",
  title: "사업계획서 AI 추천, 결과물보다 먼저 확인할 3가지",
  description:
    "사업계획서 AI 추천을 찾을 때는 문장이 아니라 공고문 반영, 근거 검증, 반복 제출 관리가 되는지 먼저 봐야 합니다. 제출 전 비교 기준을 정리했습니다.",
  seo: {
    mainKeyword: "사업계획서 AI 추천",
    supportKeywords: ["사업계획서 작성 AI 추천", "AI 사업계획서", "계획서 작성 AI"],
    searchIntent: "사업계획서 작성을 도와줄 AI 도구를 고를 때 무엇을 기준으로 비교해야 하는지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.06",
  modifiedDate: "2026.08.06",
  verification: {
    date: "2026.08.06",
    note: "Search Console에서 사업계획서 AI 추천·사업계획서 작성 AI 추천·AI 사업계획서 검색 수요를 확인했습니다. 생성형 AI의 사실성 한계는 OpenAI와 NIST 공식 안내를 기준으로 검증했습니다.",
    sources: [
      { label: "OpenAI Help Center, Does ChatGPT tell the truth?", url: OPENAI_TRUTH_URL },
      {
        label: "NIST, Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile",
        url: NIST_GENAI_URL,
      },
      { label: "K-Startup 창업지원포털", url: K_STARTUP_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00056-business-plan-ai-recommendation-checklist-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00056-business-plan-ai-recommendation-checklist-hero.jpg",
  paragraphs: [
    "사업계획서 AI 추천을 찾을 때는 결과 문장이 얼마나 매끄러운지보다 공고문과 양식을 제대로 읽고 쓰는지 먼저 봐야 합니다. 지원사업 문서는 예쁜 초안보다 공고 조건과 제출 항목에 맞는 근거가 중요합니다.",
    "두 번째 기준은 출처와 가정을 분리해주는지입니다. OpenAI와 NIST는 생성형 AI가 사실과 다른 내용이나 존재하지 않는 인용을 제시할 수 있다고 안내합니다. 그래서 시장 숫자, 지원 조건, 고객 반응은 원문 확인이 가능한 형태로 남아야 합니다.",
    "세 번째 기준은 한 번 쓴 정보를 다음 지원사업에 다시 쓸 수 있는지입니다. 팀 소개, 고객 문제, 검증 기록을 지원사업마다 새로 작성하면 시간도 오래 걸리고 문서마다 핵심 내용이 달라질 수 있습니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>사업계획서 AI 추천</strong>을 검색할 때 가장 먼저 볼 것은 결과 문장의 매끄러움이 아닙니다. 지원사업 사업계획서는 공고문, 양식, 증빙서류, 평가항목이 함께 움직이는 문서입니다.</p>
  <p>AI가 그럴듯한 문단을 빨리 써줘도 공고가 요구한 조건을 놓치면 창업자가 제출 직전에 다시 고쳐야 합니다. 추천 도구를 비교할 때는 “잘 써주나요?”보다 “공고와 근거를 어떻게 붙잡나요?”를 먼저 물어보는 편이 안전합니다.</p>

  <h2>첫째, 공고문과 양식을 읽고 쓰는지 확인하세요</h2>
  <p>K-Startup 등 공식 창업지원포털의 공고를 보면, 같은 주제의 사업계획서라도 공고별 신청 자격, 제출서류, 평가 방향이 각기 다릅니다.</p>
  <p>AI 도구가 일반적인 사업계획서 목차만 내놓는다면 초안은 빠를 수 있습니다. 하지만 공고문에 있는 사업 기간, 지원 대상, 제외 요건, 제출서류를 반영하지 못하면 제출 직전에 다시 구조를 바꿔야 합니다.</p>
  <div class="dh-note">
    <p><strong>확인 질문</strong><br>공고문 PDF나 신청 양식을 넣었을 때, 항목별로 어떤 답변이 필요한지 분해해주나요?</p>
    <p><strong>주의할 신호</strong><br>모든 지원사업에 같은 목차와 같은 표현을 반복해서 제안한다면 공고 적합성 검토가 약할 수 있습니다.</p>
  </div>

  <h2>둘째, 출처와 가정을 분리해주는지 보세요</h2>
  <p>OpenAI는 언어 모델이 틀린 사실이나 존재하지 않는 연구·출처를 제시할 수 있다고 안내합니다. NIST도 생성형 AI가 잘못된 내용과 인용을 확신에 찬 문장으로 만들 수 있다고 설명합니다.</p>
  <p>그래서 사업계획서 AI가 시장 규모, 성장률, 고객 수요를 제안할 때는 문장보다 출처 표시와 근거 정보가 중요합니다. 숫자 옆에 원문 URL, 발행일, 조사 대상, 산정 기준이 남아야 합니다.</p>
  <p>가상 예시로 “국내 시장은 3년 안에 두 배로 성장합니다”라는 문장이 나왔다면, 바로 쓰지 말고 아래처럼 나눠야 합니다.</p>
  <ol>
    <li>확인된 사실: 원문 자료에서 직접 확인한 수치</li>
    <li>작성자의 해석: 우리 고객군과 연결한 판단</li>
    <li>가정: 아직 검증하지 못해 계산식으로만 둔 부분</li>
  </ol>
  <p>이 구분이 없으면 AI가 만든 숫자가 창업자의 검증 결과처럼 읽힐 수 있습니다.</p>

  <h2>셋째, 한 번 쓴 정보를 다시 쓸 수 있는지 비교하세요</h2>
  <p>지원사업을 여러 개 준비하는 팀은 같은 내용을 계속 다시 씁니다. 팀 경험, 고객 문제, 제품 설명, 인터뷰 기록, 매출 근거가 대표적입니다.</p>
  <p>일반 AI 채팅에 매번 처음부터 설명하면 속도는 빨라져도 문서마다 표현과 숫자가 조금씩 달라질 수 있습니다. 반대로 핵심 정보를 저장하고 공고별 양식에 맞춰 다시 꺼내 쓰는 도구라면 반복 제출에서 차이가 납니다.</p>
  <div class="dh-note">
    <p><strong>좋은 재사용</strong><br>고객 문제와 검증 기록은 유지하되, 공고 목적과 평가항목에 맞춰 앞뒤 순서를 바꿉니다.</p>
    <p><strong>위험한 재사용</strong><br>지난 공고의 목표, 예산, 일정, 제출서류 이름까지 그대로 복사합니다.</p>
  </div>

  <h2>추천 기준은 문장 품질보다 제출 가능성입니다</h2>
  <p>AI가 문장을 자연스럽게 만들어주는지는 기본 조건입니다. 실제 비교에서는 공고문 반영, 근거 확인, 정보 재사용까지 함께 봐야 합니다.</p>
  <p><strong class="dh-emphasis">사업계획서 AI 추천을 찾고 있다면 결과물 한 장만 보지 말고, 그 결과물이 어떤 공고와 어떤 근거에서 나왔는지 추적할 수 있는지 확인하세요.</strong></p>

  <div class="dh-cta">
    <p>공고문과 팀 정보를 바탕으로 초안을 만들고, 부족한 근거를 다시 묻는 방식으로 사업계획서를 준비해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=business-plan-ai-recommendation-checklist&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트로 사업계획서 시작하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${OPENAI_TRUTH_URL}" target="_blank" rel="noopener noreferrer">OpenAI Help Center, Does ChatGPT tell the truth?</a></li>
      <li><a href="${NIST_GENAI_URL}" target="_blank" rel="noopener noreferrer">NIST, Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile</a></li>
      <li><a href="${K_STARTUP_URL}" target="_blank" rel="noopener noreferrer">K-Startup 창업지원포털</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

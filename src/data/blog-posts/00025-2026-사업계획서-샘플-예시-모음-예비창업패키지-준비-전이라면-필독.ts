import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const PRE_STARTUP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";
const K_STARTUP_URL = "https://www.k-startup.go.kr/";
const TABLE_OF_CONTENTS_PATH = "/blog_detail/1755658221110x981594766116126700";
const SIMILARITY_GUIDE_PATH = "/blog_detail/business-plan-ai-plagiarism-similarity-check";

export const post25 = {
  page: 3,
  index: 5,
  slug: "2026-4",
  sourceUrl: "https://docshunt.ai/blog_detail/2026-4",
  title: "예비창업패키지 사업계획서 샘플, 문장을 따라 쓰면 왜 위험할까요?",
  description:
    "예비창업패키지 사업계획서 샘플은 목차와 근거 배치를 볼 때 쓸모가 있습니다. 2026년 공고문의 표절·유사성 검토 규정을 바탕으로 샘플에서 가져올 것과 가져오면 안 되는 것, 내 자료로 바꾸는 순서를 정리했습니다.",
  seo: {
    mainKeyword: "예비창업패키지 사업계획서 샘플",
    supportKeywords: ["사업계획서 샘플", "사업계획서 유사성 검토", "예비창업패키지 양식"],
    searchIntent:
      "예비창업패키지 사업계획서 샘플이나 합격 예시를 참고할 때 어디까지 따라 써도 되는지, 내 사업계획서로 바꾸는 방법을 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2025.10.28",
  modifiedDate: "2026.11.20",
  verification: {
    date: "2026.11.20",
    note: "표절·도용 제재, 공동 작성 사업계획서 제재, 유사·중복성 상시 검토, 대필 처벌 안내는 2026년 예비창업패키지 수정 공고(2차, 제2026-207호) 첨부 공고문에서 확인했습니다. 2026년 접수는 3월 26일에 끝났으며, 다음 공고의 양식은 새 공고 첨부 파일을 확인해야 합니다. 본문의 샘플 문장과 바꾼 문장은 설명을 위한 가상 예시입니다.",
    sources: [
      { label: "중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)", url: PRE_STARTUP_NOTICE_URL },
      { label: "K-Startup 창업지원포털", url: K_STARTUP_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00025-pre-startup-package-business-plan-sample-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00025-pre-startup-package-business-plan-sample-hero.jpg",
  paragraphs: [
    "예비창업패키지 사업계획서 샘플을 찾는 이유는 대개 빈 양식 앞에서 무엇부터 써야 할지 몰라서입니다. 샘플은 목차 순서, 표 구성, 근거를 놓는 위치를 볼 때 쓸모가 있습니다.",
    "문장을 따라 쓰는 것은 다른 문제입니다. 2026년 예비창업패키지 공고문은 표절·도용한 사업계획서를 평가에서 빼고, 유사·중복성 검토를 창업진흥원이 수행하는 창업지원사업 전체 사업계획서를 대상으로 상시 진행한다고 적었습니다.",
    "샘플에서는 구조만 가져오고, 고객, 숫자, 일정, 팀 소개는 내 기록으로 새로 써야 합니다. 샘플의 시장 숫자를 출처 확인 없이 옮기는 것도 피하세요.",
    "양식은 매년 공고에 첨부된 파일을 새로 받아 쓰세요. 지난해 샘플의 목차가 올해 양식과 다를 수 있습니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>예비창업패키지 사업계획서 샘플은 빈 양식 앞에서 막혔을 때 길잡이가 됩니다.</strong> 문제는 샘플을 열어 둔 채로 쓰다 보면 구조만이 아니라 문장까지 따라가게 된다는 점입니다. 샘플의 문장이 매끄러울수록 내 아이템에 맞게 바꾸기보다 단어만 갈아 끼우게 됩니다.</p>
  <p>그 결과가 왜 위험한지는 공고문에 적혀 있습니다. 아래 내용은 <a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년 예비창업패키지 수정 공고</a>를 기준으로 했고, 이 공고의 접수는 2026년 3월 26일에 끝났습니다.</p>

  <h2>2026년 공고문이 사업계획서 유사성에 대해 적은 것</h2>
  <table>
    <thead>
      <tr>
        <th>공고문 내용</th>
        <th>샘플을 쓸 때의 의미</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>제출서류를 허위 기재, 위조·변조·표절, 도용한 경우 평가대상에서 제외될 수 있고, 참여제한과 지원금 환수 조치가 있을 수 있음</td>
        <td>샘플 문장을 그대로 옮기면 표절·도용 판단의 대상이 될 수 있습니다.</td>
      </tr>
      <tr>
        <td>합의해서 함께 쓴 동일·유사 사업계획서로 선정돼도 공동 작성자 모두 모방·표절로 보고 제재할 수 있음</td>
        <td>지인이나 같은 교육 과정에서 받은 사업계획서를 나눠 쓰는 것도 안전하지 않습니다.</td>
      </tr>
      <tr>
        <td>동일·유사 여부는 이번 공고 신청서만이 아니라 창업진흥원이 수행하는 모든 창업지원사업에 제출된 사업계획서를 대상으로 판단</td>
        <td>예전에 다른 사업에 제출된 사업계획서가 샘플로 돌고 있다면, 그것과도 비교될 수 있습니다.</td>
      </tr>
      <tr>
        <td>요건검토와 사업계획서 유사·중복성 검토는 창업진흥원과 주관기관이 상시 진행하며, 선정·협약 이후에도 확인되면 탈락 처리</td>
        <td>서류평가를 통과해도 검토가 끝난 것이 아닙니다.</td>
      </tr>
    </tbody>
  </table>
  <p>공고문은 사업계획서를 다른 사람이 대신 써서 내면 작성자와 신청자 모두 처벌받을 수 있다고도 적었습니다. 샘플을 바탕으로 대신 써 주겠다는 제안을 받았다면 이 조항부터 떠올리세요.</p>

  <h2>샘플에서 가져올 것과 가져오면 안 되는 것</h2>
  <table>
    <thead>
      <tr>
        <th>가져와도 되는 것</th>
        <th>내 기록으로 새로 써야 하는 것</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>문항마다 어떤 순서로 설명하는지(문제 → 근거 → 해결 방법)</td>
        <td>문제를 설명하는 문장과 고객 묘사</td>
      </tr>
      <tr>
        <td>숫자 옆에 출처와 기준 연도를 적는 방식</td>
        <td>시장 규모, 설문 결과, 인터뷰 숫자</td>
      </tr>
      <tr>
        <td>일정표·사업비 표의 칸 구성</td>
        <td>일정, 금액, 담당자</td>
      </tr>
      <tr>
        <td>팀 소개에서 경력을 맡을 일과 연결하는 방식</td>
        <td>팀원 경력과 역할</td>
      </tr>
    </tbody>
  </table>
  <p>샘플의 시장 숫자는 특히 조심하세요. 출처가 없거나 몇 년 전 자료일 수 있어, 원래 조사 기관의 자료를 직접 찾아 확인한 뒤에만 쓰는 편이 안전합니다.</p>

  <h2>샘플 문장을 내 문장으로 바꾸는 예 (가상 예시)</h2>
  <div class="dh-note">
    <p><strong>샘플에 있던 문장</strong><br>1인 가구 증가로 간편식 시장이 빠르게 성장하고 있으며, 소비자들은 건강한 식사에 대한 니즈가 높아지고 있습니다.</p>
    <p><strong>단어만 바꾼 문장</strong><br>1인 가구 증가로 반려동물 시장이 빠르게 성장하고 있으며, 소비자들은 건강한 사료에 대한 니즈가 높아지고 있습니다.</p>
    <p><strong>내 기록으로 다시 쓴 문장</strong><br>2025년 9월 동네 동물병원 2곳 대기실에서 보호자 15명에게 물었을 때, 9명이 처방식 사료를 매번 병원에서만 살 수 있어 불편하다고 답했습니다.</p>
  </div>
  <p>두 번째 문장은 구조와 표현이 샘플과 거의 같고, 근거도 없습니다. 세 번째 문장은 짧은 조사지만 누구에게 언제 무엇을 확인했는지가 보이고, 다른 사람의 사업계획서와 겹치기도 어렵습니다.</p>

  <h2>샘플을 볼 때의 순서</h2>
  <ol>
    <li><strong>올해 공고 양식부터 받기:</strong> <a href="${K_STARTUP_URL}" target="_blank" rel="noopener noreferrer">K-Startup</a>의 해당 연도 공고에 첨부된 사업계획서 양식을 먼저 엽니다. 2026년 공고는 사업계획서를 공고 별첨 양식으로 내게 했습니다.</li>
    <li><strong>샘플은 목차 대조용으로만 보기:</strong> 샘플의 목차가 올해 양식과 같은지 확인하고, 다르면 올해 양식을 따릅니다. 목차별로 무엇을 써야 하는지는 <a href="${TABLE_OF_CONTENTS_PATH}">사업계획서 목차 작성 글</a>에 정리했습니다.</li>
    <li><strong>샘플을 닫고 쓰기:</strong> 문항마다 내 고객 기록과 숫자를 먼저 적고, 샘플은 다 쓴 뒤에 구조 비교용으로만 다시 엽니다.</li>
    <li><strong>제출 전 겹치는 문장 찾기:</strong> 샘플이나 AI가 만든 문장과 표현이 지나치게 비슷한 곳이 없는지 확인합니다. AI 문장과 유사성 문제는 <a href="${SIMILARITY_GUIDE_PATH}">사업계획서 표절 글</a>에서 따로 다뤘습니다.</li>
  </ol>

  <div class="dh-cta">
    <p>샘플 대신 내 답변에서 시작하고 싶다면, 독스헌트에 공고와 양식을 고른 뒤 질문에 답해 보세요. 답변을 바탕으로 문항 구조에 맞춘 초안을 만들고, 근거가 부족한 곳은 직접 보완하면 됩니다.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=pre-startup-package-business-plan-sample&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트로 내 초안 만들기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)</a></li>
      <li><a href="${K_STARTUP_URL}" target="_blank" rel="noopener noreferrer">K-Startup 창업지원포털</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

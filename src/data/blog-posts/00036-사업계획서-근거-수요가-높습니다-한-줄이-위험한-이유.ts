import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const ANNOUNCEMENT_URL = "https://mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1069575&cbIdx=310";
const TEMPLATE_URL =
  "https://mss.go.kr/common/board/Download.do?bcIdx=1069575&cbIdx=310&streFileNm=abc09db3-d842-4865-b25c-b740054b154f.pdf";

export const post36 = {
  page: 1,
  index: 1,
  slug: "business-plan-missing-evidence",
  sourceUrl: "https://docshunt.ai/blog_detail/business-plan-missing-evidence",
  title: "사업계획서 근거, ‘수요가 높습니다’ 한 줄이 위험한 이유",
  description:
    "사업계획서에 ‘수요가 높습니다’라고 썼다면 무엇으로 확인했는지도 함께 보여줘야 합니다. 인터뷰, 문의, 사용 기록 중 주장에 맞는 근거를 고르고 과장 없이 문장으로 옮기는 방법을 정리했습니다.",
  date: "2026.07.31",
  modifiedDate: "2026.07.31",
  verification: {
    date: "2026.07.31",
    note: "2026년 지역 첨단제조 스타트업 스케일업 사업의 공식 사업계획서 양식에서 문제의 배경을 뒷받침할 근거와 목표시장·고객 분석을 요구하는 구조를 확인했습니다. 세부 양식은 공고마다 다를 수 있습니다.",
    sources: [
      {
        label: "중소벤처기업부, 2026년 지역 첨단제조 스타트업 스케일업 창업기업 모집공고",
        url: ANNOUNCEMENT_URL,
      },
      {
        label: "중소벤처기업부, 2026년 사업계획서 양식",
        url: TEMPLATE_URL,
      },
    ],
  },
  image: "/docshunt-assets/blog-covers/00036-business-plan-missing-evidence-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00036-business-plan-missing-evidence-hero.jpg",
  paragraphs: [
    "사업계획서에 수요가 높다고 적었다면 그 판단의 근거도 함께 보여줘야 합니다. 강한 표현보다 중요한 것은 누구에게서 무엇을 확인했는지입니다.",
    "시장 보고서는 산업의 크기를 설명하지만 특정 고객의 구매 의사까지 증명하지는 않습니다. 인터뷰, 문의, 결제, 사용 기록처럼 주장에 맞는 자료를 골라야 합니다.",
    "확인한 고객이 적다면 그 범위까지만 적는 편이 낫습니다. 작은 근거를 시장 전체의 반응처럼 확대하면 오히려 다음 질문에 답하기 어려워집니다.",
    "제출 전에는 높다, 많다, 충분하다, 검증됐다는 표현을 찾아보고 대상과 시점, 행동, 결과가 붙어 있는지 확인해야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p>사업계획서에서 자주 보이는 문장이 있습니다. <strong>“해당 시장의 수요가 높아 빠른 성장이 예상됩니다.”</strong></p>
  <p>문제는 이 문장 다음에 바로 질문이 생긴다는 점입니다. <strong>그 수요를 무엇으로 확인했나요?</strong> 답할 자료가 없다면 문장을 힘주어 쓸수록 빈틈이 더 잘 보입니다.</p>
  <p>2026년 중소벤처기업부의 한 공식 <a href="${TEMPLATE_URL}" target="_blank" rel="noopener noreferrer">사업계획서 양식</a>도 문제의 배경을 뒷받침할 근거와 목표시장·고객 분석을 요구합니다. 모든 지원사업이 같은 양식을 쓰는 것은 아니지만, 주장을 뒷받침할 자료를 함께 제시해야 한다는 점은 분명합니다.</p>

  <h2>먼저, 주장과 근거를 한 쌍으로 놓으세요</h2>
  <p>주장은 내가 내린 판단이고, 근거는 그 판단에 이르게 한 기록입니다. 두 가지를 한 문장 안에서 구분하면 과장도 줄어듭니다.</p>

  <div class="dh-note">
    <strong>아래는 설명을 위한 가상의 예시입니다.</strong>
    <p><strong>주장:</strong> 식당 점주는 식자재 폐기를 줄이는 데 어려움을 겪고 있습니다.</p>
    <p><strong>근거:</strong> 식당 점주 6명을 인터뷰했고, 그중 4명이 폐기 수량을 수기로 기록한다고 답했습니다.</p>
    <p><strong>아직 모르는 것:</strong> 이 문제가 실제 구매로 이어질 만큼 큰지는 확인하지 못했습니다.</p>
  </div>

  <p>인터뷰 6건으로 시장 전체를 증명할 수는 없지만, 누구의 어떤 문제를 확인했고 다음 검증 목표가 무엇인지는 보여줄 수 있습니다. 이 차이를 솔직하게 적는 편이 막연한 확신보다 낫습니다.</p>

  <h2>큰 시장 자료가 고객 반응을 대신하지는 못합니다</h2>
  <p>산업 보고서와 통계는 시장의 규모와 변화 방향을 설명할 때 유용합니다. 하지만 “우리 제품을 고객이 살 것인가”라는 질문에는 다른 자료가 필요합니다.</p>
  <ul>
    <li><strong>고객이 불편을 겪는가:</strong> 인터뷰 기록, 반복되는 문의, 현재 업무 화면</li>
    <li><strong>해결책에 관심이 있는가:</strong> 데모 신청, 상담 요청, 대기 명단 등록</li>
    <li><strong>돈을 낼 의사가 있는가:</strong> 견적 요청, 사전 주문, 실제 결제</li>
    <li><strong>계속 사용하는가:</strong> 재방문, 반복 사용, 이탈 사유</li>
  </ul>
  <p>문의 한 건을 구매 의사로, 설문 응답을 반복 사용으로 바꾸어 쓰면 안 됩니다. 내가 주장하는 내용과 바로 연결되는 자료를 골라야 합니다.</p>

  <h2>근거가 작다면 확인한 범위부터 적으세요</h2>
  <p>초기 사업은 자료가 많지 않은 경우가 흔합니다. 이때 숫자를 크게 보이게 만드는 것보다, 지금 확인한 범위와 다음 검증 계획을 나누어 쓰는 편이 안전합니다.</p>

  <div class="dh-note">
    <strong>아래는 설명을 위한 가상의 문장입니다.</strong>
    <p><strong>수정 전:</strong> 소상공인의 재고관리 수요가 높아 빠른 확산이 가능합니다.</p>
    <p><strong>수정 후:</strong> 현재 확인한 근거는 식당 점주 인터뷰 6건과 데모 요청 3건입니다. 이 단계에서는 시장 전체 수요보다 폐기 수량을 수기로 적는 매장의 반복 업무를 먼저 검증하겠습니다.</p>
  </div>

  <p>수정 후 문장은 시장성이 입증됐다고 말하지 않습니다. 대신 지금까지 확인한 사실과 아직 남은 과제를 구분합니다. 자료가 더 쌓이면 숫자와 문장도 그때 업데이트하면 됩니다.</p>

  <h2>제출 전에는 이 네 단어를 검색해보세요</h2>
  <p>원고에서 <strong>높다, 많다, 충분하다, 검증됐다</strong>를 찾아보세요. 그리고 각 표현 옆에 아래 네 가지가 있는지 확인합니다.</p>
  <ol>
    <li><strong>대상:</strong> 누구에게 확인했는가?</li>
    <li><strong>시점:</strong> 언제 확인했는가?</li>
    <li><strong>행동:</strong> 인터뷰, 문의, 결제 중 무엇을 했는가?</li>
    <li><strong>결과:</strong> 몇 명이 어떻게 반응했는가?</li>
  </ol>
  <p>이 네 가지가 명확히 드러나지 않는다면 표현의 수위를 낮추거나 근거를 더 찾아야 합니다. 사업계획서 근거는 숫자를 많이 넣는 일이 아니라, 문장과 자료가 같은 내용을 말하게 만드는 일입니다.</p>

  <div class="dh-cta">
    <p>근거가 필요한 문장과 다음에 확인할 내용을 정리하고 싶다면, 독스헌트에서 기존 사업계획서를 바탕으로 다음 초안을 작성해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=business-plan-missing-evidence&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 근거 정리하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${ANNOUNCEMENT_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 지역 첨단제조 스타트업 스케일업 창업기업 모집공고</a></li>
      <li><a href="${TEMPLATE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 사업계획서 양식</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

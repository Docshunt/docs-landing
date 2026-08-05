import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const GOV_PROTOTYPE_URL = "https://www.gov.uk/service-manual/design/making-prototypes";
const TESTING_URL = "https://www.strategyzer.com/library/ways-to-test-your-value-proposition-and-business-model";
const FORM_URL = "https://mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1069575&cbIdx=310";

export const post61 = {
  page: 1,
  index: 1,
  slug: "business-plan-mvp-evidence",
  sourceUrl: "https://docshunt.ai/blog_detail/business-plan-mvp-evidence",
  title: "사업계획서 MVP, 화면만 있으면 검증됐다고 볼 수 있을까요?",
  titleLines: ["사업계획서 MVP,", "화면만 있으면 검증일까요?"],
  description:
    "사업계획서에 MVP 화면을 넣는 것과 고객 검증을 끝내는 것은 다른 일입니다. 가장 위험한 가설과 대상 고객을 정하고, ‘좋아요’ 같은 반응보다 신청·결제·재사용 같은 행동을 기록해 결과와 다음 결정을 네 줄로 정리하는 방법을 설명합니다.",
  author: "독스헌트 마케팅팀",
  date: "2026.08.05",
  modifiedDate: "2026.08.05",
  verification: {
    date: "2026.08.05",
    note: "프로토타입의 목적과 사용자 테스트 방법은 GOV.UK 서비스 매뉴얼 및 Strategyzer의 실험 안내를 참고했습니다. MVP 수준과 검증 강도는 사업 유형에 따라 달라질 수 있습니다.",
    sources: [
      { label: "GOV.UK 서비스 매뉴얼, 프로토타입 만들기", url: GOV_PROTOTYPE_URL },
      { label: "Strategyzer, 가치제안과 비즈니스모델을 테스트하는 방법", url: TESTING_URL },
      { label: "중소벤처기업부, 2026년 창업중심대학 도약기 창업기업 모집공고 및 사업계획서 양식", url: FORM_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00061-business-plan-mvp-evidence-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00061-business-plan-mvp-evidence-hero.jpg",
  paragraphs: [
    "MVP 화면이 있다는 사실은 아이디어를 보여줄 수 있다는 뜻이지 고객 검증이 끝났다는 뜻은 아닙니다.",
    "검증 결과에는 무엇을 확인하려 했는지, 누구에게 보여줬는지, 실제로 어떤 행동이 나왔는지, 그 결과 무엇을 바꿀지가 필요합니다.",
    "좋다는 반응보다 회원가입, 반복 사용, 결제, 업무 완료처럼 비용이 드는 행동이 더 강한 근거가 될 수 있습니다.",
    "MVP는 기능 수를 줄인 제품이 아니라 가장 위험한 가정을 적은 비용으로 확인하기 위한 도구여야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>화면이 있다는 것과 시장 검증이 끝났다는 것은 다른 말입니다.</strong> MVP 화면은 고객에게 아이디어를 보여주고 반응을 확인할 도구입니다. 실제로 누구에게 보여줬고 어떤 행동이 나왔는지가 있어야 검증 결과가 됩니다.</p>
  <p>“MVP 개발 완료”만 적으면 만든 사실은 보이지만 무엇을 배웠는지는 보이지 않습니다.</p>

  <h2>MVP를 만들기 전에 질문부터 정하세요</h2>
  <p>모든 기능을 조금씩 만드는 대신 사업에서 가장 불확실한 가정 하나를 고르세요.</p>
  <ul>
    <li>고객이 이 문제를 자주 겪는가</li>
    <li>현재 방식보다 새 해결책을 선택할 것인가</li>
    <li>실제로 돈을 낼 것인가</li>
    <li>반복해서 사용할 것인가</li>
  </ul>
  <p><a href="${GOV_PROTOTYPE_URL}" target="_blank" rel="noopener noreferrer">GOV.UK 서비스 매뉴얼</a>도 프로토타입을 여러 설계를 빠르게 탐색하고 사용자와 시험하는 수단으로 설명합니다. 완성품처럼 보이는 것이 목적이 아니라 올바른 서비스를 만들고 있는지 확인하는 것이 목적입니다.</p>

  <h2>‘좋아요’보다 행동을 기록하세요</h2>
  <p>지인에게 화면을 보여주면 대부분 좋은 말을 해줍니다. 그러나 칭찬과 구매는 다릅니다. 테스트에 실제 비용이나 노력이 들어가는 행동을 설계하면 근거가 강해집니다.</p>
  <div class="dh-note">
    <strong>반응을 행동으로 바꾸는 예</strong>
    <ul>
      <li>관심 있다 → 대기 명단에 연락처를 남긴다</li>
      <li>써보고 싶다 → 다음 주 테스트 시간을 예약한다</li>
      <li>돈 낼 수 있다 → 유료 파일럿 계약이나 예약금을 제안한다</li>
      <li>편리하다 → 정해진 업무를 끝까지 수행하고 다시 사용한다</li>
    </ul>
  </div>
  <p><a href="${TESTING_URL}" target="_blank" rel="noopener noreferrer">Strategyzer의 테스트 안내</a>도 의견만 묻지 말고 고객이 실제로 행동하도록 해야 말보다 더 신뢰할 만한 데이터를 얻을 수 있다는 취지로 설명합니다.</p>

  <h2>검증 결과는 네 줄이면 정리할 수 있습니다</h2>
  <ol>
    <li><strong>가설:</strong> 무엇이 사실인지 확인하려 했는가</li>
    <li><strong>대상:</strong> 어떤 조건의 고객 몇 명에게 시험했는가</li>
    <li><strong>결과:</strong> 사전에 정한 행동 지표가 어떻게 나왔는가</li>
    <li><strong>결정:</strong> 유지, 수정, 중단 중 무엇을 선택했는가</li>
  </ol>
  <p>“외식업 점주 10명이 재고 알림 화면을 사용하면 7명 이상이 일주일 안에 두 번 이상 다시 확인할 것으로 예상했다. 실제로 4명만 재사용해 알림 시점과 입력 과정을 다시 설계하기로 했다.” 실패처럼 보여도 다음 결정이 분명한 검증입니다.</p>

  <h2>화면 수보다 위험한 가정을 먼저 줄이세요</h2>
  <p>기능이 20개인 시제품보다 고객이 가장 자주 하는 업무 하나를 끝까지 시험할 수 있는 화면이 낫습니다. 기술 가능성이 가장 불확실하면 작은 기능 실험을, 구매 의향이 불확실하면 랜딩페이지나 유료 파일럿을 먼저 할 수 있습니다.</p>
  <p><a href="${FORM_URL}" target="_blank" rel="noopener noreferrer">정부 지원사업 양식</a>에서 실현 가능성과 시장 진입 계획을 설명할 때도 “만들었다”에서 끝내지 말고 “누구에게 시험해 무엇을 확인했고 다음에 무엇을 바꾼다”까지 연결하세요.</p>

  <div class="dh-cta">
    <p>MVP 기능 목록보다 먼저 검증할 가설과 고객 행동 지표를 정해 사업계획서에 연결해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=business-plan-mvp-evidence&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 검증계획 정리하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${GOV_PROTOTYPE_URL}" target="_blank" rel="noopener noreferrer">GOV.UK 서비스 매뉴얼, 프로토타입 만들기</a></li>
      <li><a href="${TESTING_URL}" target="_blank" rel="noopener noreferrer">Strategyzer, 가치제안과 비즈니스모델을 테스트하는 방법</a></li>
      <li><a href="${FORM_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 창업중심대학 도약기 창업기업 모집공고 및 사업계획서 양식</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

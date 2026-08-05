import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const SBA_URL = "https://www.sba.gov/counseling/plan-your-business/#business-plan";
const BREAK_EVEN_URL = "https://www.sba.gov/counseling/plan-your-business/#breakeven-point";
const FORM_URL = "https://mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1069575&cbIdx=310";

export const post47 = {
  page: 1,
  index: 1,
  slug: "business-plan-revenue-model",
  sourceUrl: "https://docshunt.ai/blog_detail/business-plan-revenue-model",
  title: "사업계획서 수익모델, '구독료' 한 줄로 충분할까요?",
  titleLines: ["사업계획서 수익모델,", "‘구독료’만 적어도 될까요?"],
  description:
    "사업계획서 수익모델에 ‘월 구독료’만 적으면 누가 왜 돈을 내고 다음 달에도 계속 결제할지가 보이지 않습니다. 사용자와 결제자를 구분하고, 과금 기준·가격·결제 시점·유지 이유를 다섯 문장으로 정리한 뒤 매출계획과 숫자를 맞추는 방법을 설명합니다.",
  author: "독스헌트 마케팅팀",
  date: "2026.08.05",
  modifiedDate: "2026.08.05",
  verification: {
    date: "2026.08.05",
    note: "수익원과 재무계획 구성은 SBA 공식 사업계획서·손익분기점 안내와 정부 지원사업 양식을 참고했습니다. 본문 가격과 수치는 가상 예시입니다.",
    sources: [
      { label: "미국 중소기업청(SBA), 사업계획서 수익원·재무계획 안내", url: SBA_URL },
      { label: "미국 중소기업청(SBA), 손익분기점 안내", url: BREAK_EVEN_URL },
      { label: "중소벤처기업부, 2026년 창업중심대학 도약기 창업기업 모집공고 및 사업계획서 양식", url: FORM_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00047-business-plan-revenue-model-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00047-business-plan-revenue-model-hero.jpg",
  paragraphs: [
    "구독료는 결제 방식일 뿐 수익모델 전체를 설명하지 못합니다.",
    "누가 돈을 내고, 무엇을 기준으로 얼마를 내며, 언제 결제하고, 왜 계속 유지하는지까지 적어야 합니다.",
    "고객 수와 가격뿐 아니라 판매비용, 변동비, 이탈률을 함께 계산해야 매출과 수익을 구분할 수 있습니다.",
    "아직 결제가 없다면 희망 가격을 확정값처럼 쓰기보다 어떤 실험으로 확인할지 제시하는 편이 낫습니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>“월 구독료로 수익을 냅니다”는 결제 방식만 말한 문장입니다.</strong> 누가 돈을 내고, 무엇을 기준으로 얼마를 내며, 왜 다음 달에도 계속 낼지가 보여야 수익모델이 됩니다.</p>
  <p>사용자와 결제자가 다른 사업이라면 이 구분부터 해야 합니다. 직원이 쓰는 서비스라도 회사 대표나 구매부서가 계약할 수 있고, 무료 사용자가 많아도 광고주가 돈을 낼 수 있습니다.</p>

  <h2>수익모델을 다섯 문장으로 적어보세요</h2>
  <ol>
    <li><strong>결제자:</strong> 실제로 비용을 승인하는 사람이나 조직</li>
    <li><strong>과금 기준:</strong> 계정, 지점, 거래, 사용량, 성과 중 무엇에 돈을 받는가</li>
    <li><strong>가격:</strong> 얼마를 받고 왜 그 가격이 가능한가</li>
    <li><strong>결제 시점:</strong> 선불, 월별, 건별, 성공 후 중 언제인가</li>
    <li><strong>유지 이유:</strong> 고객이 반복해서 돈을 낼 만큼 계속 얻는 가치는 무엇인가</li>
  </ol>

  <h2>월 10만 원의 근거가 있어야 합니다</h2>
  <p>경쟁 제품 가격을 따라 정했는지, 고객 인터뷰에서 지불 의향을 확인했는지, 절감되는 비용의 일부를 가격으로 잡았는지 설명하세요. 가격은 숫자 하나가 아니라 고객이 얻는 가치와 회사가 부담하는 비용 사이의 결정입니다.</p>
  <div class="dh-note">
    <strong>가상 B2B 구독 서비스 예시</strong>
    <p>지점당 월 10만 원 × 유료 지점 100곳 = 월 매출 1,000만 원</p>
    <p>여기에 서버 사용료, 고객지원, 결제 수수료, 영업비와 매달 이탈하는 고객을 빼야 실제 수익 가능성이 보입니다.</p>
  </div>

  <h2>구독이 항상 정답은 아닙니다</h2>
  <p>고객이 1년에 한두 번만 쓰는 서비스라면 월 구독이 부담일 수 있습니다. 사용량이 크게 다른 고객에게 동일 요금을 받으면 한쪽은 비싸고 다른 쪽은 원가를 감당하기 어려울 수 있습니다.</p>
  <ul>
    <li>반복 사용이 잦다면 월·연 구독</li>
    <li>거래가 발생할 때 가치가 생긴다면 건별 수수료</li>
    <li>고객 규모가 크게 다르면 계정·지점·사용량 기준</li>
    <li>초기 구축이 크다면 도입비와 유지비 분리</li>
  </ul>
  <p>여러 수익원을 쓸 수도 있지만 처음부터 가능한 방식을 모두 나열하지 마세요. 첫 고객에게 실제로 시험할 주 수익모델과 이후 확장할 모델을 구분하는 편이 읽기 쉽습니다.</p>

  <h2>매출표와 같은 숫자를 써야 합니다</h2>
  <p><a href="${SBA_URL}" target="_blank" rel="noopener noreferrer">미국 중소기업청(SBA)의 사업계획서 안내</a>는 수익원에서 회사가 실제로 어떻게 돈을 버는지 설명하라고 안내합니다. 사업계획서에서는 이 설명과 마케팅·판매 전략, 재무 전망의 숫자가 서로 맞아야 합니다. <a href="${BREAK_EVEN_URL}" target="_blank" rel="noopener noreferrer">손익분기점</a>도 가격과 변동비, 고정비를 함께 계산해야 합니다.</p>
  <p><a href="${FORM_URL}" target="_blank" rel="noopener noreferrer">정부 지원사업 양식</a>에서 수익모델은 시장 진입과 매출 계획에서 다시 등장합니다. 앞에서는 지점당 월 10만 원이라고 쓰고 뒤에서는 회사당 연 500만 원으로 계산하지 않았는지 확인하세요.</p>

  <div class="dh-cta">
    <p>결제자·과금 기준·가격·결제 시점·유지 이유를 한 흐름으로 연결해 수익모델을 구체화해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=business-plan-revenue-model&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 수익모델 정리하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${SBA_URL}" target="_blank" rel="noopener noreferrer">미국 중소기업청(SBA), 사업계획서 수익원·재무계획 안내</a></li>
      <li><a href="${BREAK_EVEN_URL}" target="_blank" rel="noopener noreferrer">미국 중소기업청(SBA), 손익분기점 안내</a></li>
      <li><a href="${FORM_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 창업중심대학 도약기 창업기업 모집공고 및 사업계획서 양식</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

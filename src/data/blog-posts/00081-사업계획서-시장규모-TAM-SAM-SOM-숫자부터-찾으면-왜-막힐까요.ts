import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const K_STARTUP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?cbIdx=310&bcIdx=1066726&parentSeq=1066726";
const K_STARTUP_PDF_URL =
  "https://www.mss.go.kr/common/board/Download.do?bcIdx=1066726&cbIdx=310&streFileNm=ce39c536-db04-47b9-a23d-59fdc8650e97.pdf";
const PRE_STARTUP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";

export const post81 = {
  page: 1,
  index: 1,
  slug: "business-plan-market-size-tam-sam-som",
  sourceUrl: "https://docshunt.ai/blog_detail/business-plan-market-size-tam-sam-som",
  title: "사업계획서 시장규모, TAM·SAM·SOM 숫자부터 찾으면 왜 막힐까요?",
  titleLines: ["사업계획서 시장규모,", "TAM·SAM·SOM", "숫자부터 찾지 마세요"],
  titleLineBreaks: "always",
  description:
    "사업계획서 시장규모는 큰 통계 하나가 아니라 고객 수·가격·기간·도달 범위를 같은 기준으로 계산해야 합니다. TAM·SAM·SOM을 출처와 가정으로 나누는 순서를 가상 예시와 함께 정리했습니다.",
  seo: {
    mainKeyword: "사업계획서 시장규모",
    supportKeywords: ["TAM SAM SOM", "사업계획서 작성법", "목표시장 분석"],
    searchIntent: "사업계획서 시장규모를 근거와 계산식으로 나누어 작성하는 방법을 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.13",
  modifiedDate: "2026.08.13",
  verification: {
    date: "2026.08.13",
    note: "중소벤처기업부의 올해의 K-스타트업 2026 통합공고에서 문제인식의 목표시장 분석과 성장전략의 사업화 전략을 확인했고, 2026년 예비창업패키지 수정 공고에서 시장진입 전략이 평가항목에 포함된 점을 대조했습니다. 본문의 TAM·SAM·SOM 정의와 수치는 작성 구조를 설명하기 위한 편집상 가상 예시이며 공식 산식이 아닙니다.",
    sources: [
      { label: "중소벤처기업부, 올해의 K-스타트업 2026 부처 통합 창업경진대회 공고", url: K_STARTUP_NOTICE_URL },
      { label: "중소벤처기업부, 올해의 K-스타트업 2026 통합공고 PDF", url: K_STARTUP_PDF_URL },
      { label: "중소벤처기업부, 2026년 예비창업패키지 예비창업자 수정 모집공고", url: PRE_STARTUP_NOTICE_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00081-business-plan-market-size-tam-sam-som-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00081-business-plan-market-size-tam-sam-som-hero.jpg",
  paragraphs: [
    "사업계획서 시장규모를 쓸 때 TAM·SAM·SOM 숫자부터 검색하면 서로 기준이 다른 통계를 한 표에 섞기 쉽습니다. 고객, 가격, 지역, 기간과 실제 도달 범위를 먼저 정해야 계산이 이어집니다.",
    "올해의 K-스타트업 2026 통합공고는 문제인식에서 목표시장 분석을, 성장전략에서 사업화 추진 전략을 평가한다고 안내합니다. 큰 시장을 보여주는 데 그치지 않고 내 고객과 진입 경로를 연결해야 합니다.",
    "가상 예시에서는 대상 사업체 3,000곳, 월 이용료 5만 원, 12개월을 곱한 TAM이 18억 원입니다. 초기 지역·업종 600곳의 SAM은 3억 6,000만 원, 1년 안에 영업 가능한 30곳의 SOM은 1,800만 원입니다.",
    "숫자마다 출처·확인일·대상·단위·계산식을 남기고, 외부 자료에서 확인한 값과 창업자의 가정을 분리해야 수정과 검증이 가능합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>사업계획서 시장규모는 큰 통계 하나를 찾는 일보다 고객 수·가격·기간·도달 범위를 같은 기준으로 맞추는 일이 먼저입니다.</strong> TAM·SAM·SOM이라는 이름부터 붙이면 서로 다른 연도와 대상을 다룬 숫자가 한 표에 섞이기 쉽습니다.</p>
  <p>먼저 “누가 얼마를 내고, 어디에 있으며, 언제까지 몇 곳에 도달할 수 있는가”를 적어보세요. 그다음 각 범위에 맞는 근거와 계산식을 붙이면 시장 규모와 시장진입 전략이 자연스럽게 이어집니다.</p>

  <h2>공식 평가지표는 큰 숫자보다 목표시장과 실행의 연결을 봅니다</h2>
  <p><a href="${K_STARTUP_PDF_URL}" target="_blank" rel="noopener noreferrer">올해의 K-스타트업 2026 통합공고 PDF</a>는 문제인식에서 목표시장 분석을, 성장전략에서 사업화 추진 성과와 전략을 평가한다고 안내합니다. <a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년 예비창업패키지 수정 공고</a>도 성장전략의 주요 내용으로 시장진입 전략을 제시합니다.</p>
  <p>두 공고 모두 특정한 TAM·SAM·SOM 산식을 의무로 정한 것은 아닙니다. 이 글에서는 계산 범위를 구분하기 위한 실무 도구로 세 용어를 사용합니다.</p>
  <ul>
    <li><strong>TAM:</strong> 같은 문제와 가격 조건을 가정했을 때 전체 잠재 고객이 만드는 범위</li>
    <li><strong>SAM:</strong> 제품 조건, 지역, 업종과 유통 방식으로 실제 제공할 수 있는 범위</li>
    <li><strong>SOM:</strong> 정해진 기간 안에 현재 인력과 채널로 확보할 수 있다고 설명할 수 있는 범위</li>
  </ul>

  <h2>고객 한 명의 계산 단위부터 고정하세요</h2>
  <p>시장 보고서의 총액과 내 매출 단위가 다르면 숫자를 비교할 수 없습니다. 월 구독 서비스라면 고객 수 × 월 이용료 × 12개월처럼 한 가지 단위로 맞추세요. 거래 수수료 사업이라면 고객 수가 아니라 연간 거래 건수와 건당 수익이 계산 단위가 될 수 있습니다.</p>
  <div class="dh-note">
    <p><strong>계산 전에 적을 다섯 가지</strong><br>고객의 정의, 과금 단위, 기준 지역, 기준 기간, 중복 고객 처리 방식</p>
  </div>
  <p>“국내 소상공인 전체”처럼 넓은 집단을 그대로 고객 수로 쓰면 실제 구매 주체가 아닌 업종까지 포함될 수 있습니다. 제품을 쓰는 사람, 결제하는 사람, 계약하는 사업체가 같은지도 확인해야 합니다.</p>

  <h2>TAM·SAM·SOM을 같은 산식으로 내려보세요</h2>
  <p>아래 숫자는 계산 방식을 보여주기 위한 가상 예시입니다. 실제 사업계획서에서는 정부 통계, 협회 자료, 직접 조사와 영업 기록으로 바꿔야 합니다.</p>
  <table>
    <thead>
      <tr>
        <th>범위</th>
        <th>가상 조건</th>
        <th>계산 결과</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>TAM</strong></td>
        <td>대상 사업체 3,000곳 × 월 5만 원 × 12개월</td>
        <td>18억 원</td>
      </tr>
      <tr>
        <td><strong>SAM</strong></td>
        <td>초기 지역·업종 600곳 × 월 5만 원 × 12개월</td>
        <td>3억 6,000만 원</td>
      </tr>
      <tr>
        <td><strong>SOM</strong></td>
        <td>1년 안에 영업 가능한 30곳 × 월 5만 원 × 12개월</td>
        <td>1,800만 원</td>
      </tr>
    </tbody>
  </table>
  <p>SOM의 30곳은 희망 점유율이 아니라 영업 인력, 한 달에 보낼 수 있는 제안 수, 상담 전환, 도입 기간을 근거로 설명해야 합니다. 아직 기록이 없다면 확정 수치처럼 쓰지 말고 가정과 검증 계획을 함께 표시하세요.</p>

  <h2>출처와 가정을 한 표에서 분리하세요</h2>
  <p>숫자가 맞더라도 기준 연도나 조사 대상이 다르면 계산이 무너질 수 있습니다. 각 값 옆에 다음 정보를 남겨두면 나중에 숫자를 바꿔도 전체 표를 다시 검증할 수 있습니다.</p>
  <ol>
    <li>원문 기관과 URL, 발행일, 확인일을 적습니다.</li>
    <li>통계의 모집단과 제외 대상을 확인합니다.</li>
    <li>원문에서 확인한 값과 작성자가 정한 가격·전환율을 구분합니다.</li>
    <li>월·연 단위와 원·달러 단위를 하나로 맞춥니다.</li>
    <li>SOM은 영업 기록이나 고객 인터뷰로 다시 계산합니다.</li>
  </ol>
  <p><strong class="dh-emphasis">사업계획서 시장규모의 설득력은 숫자의 크기가 아니라 고객에서 매출까지 계산이 끊기지 않는 데서 나옵니다.</strong></p>

  <div class="dh-cta">
    <p>고객 수와 가격의 근거를 정리했다면 독스헌트에서 문제인식, 목표시장과 시장진입 전략의 숫자가 서로 맞는지 점검해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=business-plan-market-size-tam-sam-som&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 시장규모 정리하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${K_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 올해의 K-스타트업 2026 부처 통합 창업경진대회 공고</a></li>
      <li><a href="${K_STARTUP_PDF_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 올해의 K-스타트업 2026 통합공고 PDF</a></li>
      <li><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 예비창업자 수정 모집공고</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

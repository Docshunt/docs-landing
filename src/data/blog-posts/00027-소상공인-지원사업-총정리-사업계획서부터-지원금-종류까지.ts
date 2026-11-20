import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const SEMAS_FUND_URL = "https://www.semas.or.kr/web/SUP01/SUP0103/SUP010301.kmdc";
const SEMAS_VOUCHER_URL = "https://www.semas.or.kr/web/SUP01/SUP0103/SUP010303.kmdc";
const SEMAS_LOCAL_TRACK_URL = "https://www.semas.or.kr/web/SUP01/SUP0122/SUP012201.kmdc";
const POLICY_FUND_SITE_URL = "https://ols.semas.or.kr/";
const SBIZ24_URL = "https://www.sbiz24.kr/";
const SMINFO_URL = "https://sminfo.mss.go.kr/";
const BIZINFO_URL = "https://www.bizinfo.go.kr/web/index.do";

export const post27 = {
  page: 3,
  index: 7,
  slug: "1759293063517x574903222143811600",
  sourceUrl: "https://docshunt.ai/blog_detail/1759293063517x574903222143811600",
  title: "소상공인 지원사업, 정책자금은 갚아야 하는 돈이라는 걸 알고 계셨나요?",
  description:
    "소상공인 지원사업에는 갚아야 하는 정책자금 융자와 갚지 않는 바우처·사업화자금이 섞여 있습니다. 소상공인시장진흥공단 안내를 기준으로 자금 종류, 신청 순서, 확인서와 사업계획서 준비를 정리했습니다.",
  seo: {
    mainKeyword: "소상공인 지원사업",
    supportKeywords: ["소상공인 정책자금", "소상공인 지원금 종류", "소상공인 사업계획서"],
    searchIntent: "소상공인이 받을 수 있는 지원의 종류와 신청 순서를 구분하고 필요한 서류와 사업계획서를 준비하고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2025.10.01",
  modifiedDate: "2026.11.20",
  verification: {
    date: "2026.11.20",
    note: "소상공인 기준, 제외업종, 2026년 정책자금 종류와 융자 절차, 2026년 4분기 금리는 소상공인시장진흥공단 정책자금 안내에서, 경영안정 바우처와 모두의 창업 로컬 트랙 내용은 공단의 사업 안내 페이지에서, 확인서 유효기간은 중소기업현황정보시스템에서 2026년 11월 20일에 확인했습니다. 금리는 분기마다 바뀌고 자금별 접수는 예산이 소진되면 마감되니 신청 전에 다시 확인하세요.",
    sources: [
      { label: "소상공인시장진흥공단, 소상공인정책자금 안내", url: SEMAS_FUND_URL },
      { label: "소상공인시장진흥공단, 소상공인 경영안정 바우처", url: SEMAS_VOUCHER_URL },
      { label: "소상공인시장진흥공단, 모두의 창업: 로컬 트랙", url: SEMAS_LOCAL_TRACK_URL },
      { label: "소상공인24 지원사업 통합 플랫폼", url: SBIZ24_URL },
      { label: "중소기업현황정보시스템, 중소기업(소상공인)확인서", url: SMINFO_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00027-small-business-support-loan-vs-grant-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00027-small-business-support-loan-vs-grant-hero.jpg",
  paragraphs: [
    "소상공인 지원사업이라는 말 안에는 성격이 다른 돈이 섞여 있습니다. 소상공인시장진흥공단의 정책자금은 금리를 붙여 갚는 융자이고, 경영안정 바우처나 창업 지원사업의 사업화자금은 갚지 않는 대신 쓸 수 있는 곳이 정해져 있습니다.",
    "공단 정책자금은 상시근로자 5인 미만(제조업·건설업·운수업·광업은 10인 미만) 소상공인이 대상이며, 유흥·향락, 전문업종, 금융·보험·부동산업 등은 제외됩니다. 신청은 소상공인정책자금 사이트에서 온라인으로 하고, 자금별로 예산이 소진되면 마감됩니다.",
    "대리대출은 공단 확인서 → 보증기관 보증서 → 은행 대출 순서로, 직접대출은 공단 신청 → 현장실사 → 약정 순서로 진행됩니다. 직접대출 심사에서는 사업성, 시장성, 경영능력, 신용도를 봅니다.",
    "사업계획서에는 돈을 어디에 얼마 쓰고 어떻게 갚을지, 또는 지원금으로 무엇을 바꿀지를 숫자로 적어야 합니다. 공고는 소상공인24와 기업마당에서 함께 확인하세요.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>소상공인 지원사업이라는 말 안에는 갚아야 하는 돈과 갚지 않는 돈이 섞여 있습니다.</strong> 소상공인시장진흥공단의 정책자금은 금리를 붙여 상환하는 융자이고, 경영안정 바우처나 창업 지원사업의 사업화자금은 갚지 않는 대신 쓸 수 있는 곳과 방법이 정해져 있습니다. 둘을 같은 "지원금"으로 계산하면 자금 계획이 처음부터 어긋납니다.</p>
  <p>아래 내용은 2026년 11월 20일에 공단과 중소벤처기업부 누리집에서 확인한 것입니다. 금리와 접수 상황은 자주 바뀌니 신청 직전에 원문을 다시 보세요.</p>

  <h2>먼저 내가 소상공인에 해당하는지 확인하세요</h2>
  <p><a href="${SEMAS_FUND_URL}" target="_blank" rel="noopener noreferrer">공단의 2026년 정책자금 안내</a>는 「소상공인기본법」상 소상공인을 상시근로자 5인 미만 업체로, 제조업·건설업·운수업·광업은 10인 미만 업체로 봅니다. 유흥·향락 업종, 전문업종, 금융업, 보험업, 부동산업 등은 정책자금 대상에서 빠집니다.</p>
  <p>소상공인임을 증명하는 중소기업(소상공인)확인서는 <a href="${SMINFO_URL}" target="_blank" rel="noopener noreferrer">중소기업현황정보시스템</a>에서 발급합니다. 현재 안내된 확인서 유효기간은 2026년 4월 1일부터 2027년 3월 31일까지입니다. 이 시스템은 세금 신고를 수정했거나 기한 후 신고한 기업에 별도 자료 제출 절차를 안내하고 있으니, 해당한다면 신청 마감 전에 여유를 두고 발급받으세요.</p>

  <h2>소상공인 지원은 크게 세 갈래입니다</h2>
  <table>
    <thead>
      <tr>
        <th>구분</th>
        <th>돈의 성격</th>
        <th>공단 안내에서 확인한 예</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>정책자금</strong></td>
        <td>상환하는 융자</td>
        <td>업력과 관계없는 일반경영안정자금, 제조 소공인을 위한 소공인특화자금, 청년고용연계자금, 고금리 대출을 바꾸는 대환대출 등</td>
      </tr>
      <tr>
        <td><strong>경영안정 바우처</strong></td>
        <td>정해진 고정비에 쓰는 지원</td>
        <td>2025년 매출이 0원 초과 1.04억 원 미만인 영업 중 소상공인이 대상이며, 공과금·4대보험료·차량연료비 등에 사용</td>
      </tr>
      <tr>
        <td><strong>창업·성장 지원사업</strong></td>
        <td>평가를 거쳐 받는 사업화자금·교육</td>
        <td>지역 기반 예비창업자를 위한 모두의 창업 로컬 트랙(권역 오디션 통과 시 사업화자금 최대 3천만 원) 등</td>
      </tr>
    </tbody>
  </table>
  <p><a href="${SEMAS_VOUCHER_URL}" target="_blank" rel="noopener noreferrer">경영안정 바우처</a> 안내 페이지는 지원 규모를 230만 명으로 적고 있지만 1인당 금액과 접수 기간은 이 페이지에 없습니다. 신청 가능 여부는 소상공인24에서 확인하세요. <a href="${SEMAS_LOCAL_TRACK_URL}" target="_blank" rel="noopener noreferrer">모두의 창업 로컬 트랙</a>은 이미 가게를 운영 중인 소상공인이 아니라 지역을 기반으로 창업하려는 예비창업자가 대상입니다.</p>

  <h2>정책자금은 이 순서로 진행됩니다</h2>
  <p>정책자금은 대출 방식에 따라 거치는 기관이 다릅니다.</p>
  <ul>
    <li><strong>대리대출(보증서부):</strong> 공단에 확인서를 온라인으로 신청 → 보증기관에서 신용·사업성 평가 후 보증서 발급 → 은행에 방문해 대출 실행</li>
    <li><strong>대리대출(신용·담보부):</strong> 공단 확인서 신청 → 은행에서 신용·담보 평가 후 대출</li>
    <li><strong>직접대출:</strong> 공단에 온라인 신청 → 공단 현장실사로 사업성, 시장성, 경영능력, 신용도 평가 → 약정 후 대출</li>
  </ul>
  <p>신청은 <a href="${POLICY_FUND_SITE_URL}" target="_blank" rel="noopener noreferrer">소상공인정책자금 사이트</a>에서 합니다. 공단은 자금별로 접수 순서대로 처리하고 예산이 소진되면 마감한다고 안내합니다. 금리도 분기마다 바뀝니다. 예를 들어 2026년 10월 6일부터 적용된 4분기 금리는 일반경영안정자금이 연 4.72%(기준금리 4.12% + 가산금리 0.6%p)였습니다.</p>

  <h2>사업계획서에는 돈의 성격에 맞는 숫자를 적으세요</h2>
  <p>융자를 신청할 때와 지원사업에 지원할 때 사업계획서가 답해야 하는 질문이 다릅니다. 융자라면 "이 돈으로 무엇을 하고, 늘어난 매출로 어떻게 갚는가"를, 지원사업이라면 "공고의 목적에 맞춰 무엇을 바꾸고 어떤 결과를 내는가"를 보여줘야 합니다.</p>
  <p>아래는 문장을 고치는 방법을 보여주기 위한 가상 예시입니다.</p>
  <div class="dh-note">
    <p><strong>고치기 전</strong><br>매출 증대를 위해 설비를 도입하고자 운영자금이 필요합니다.</p>
    <p><strong>고친 후</strong><br>하루 최대 생산량이 120개인 반죽기를 200개급으로 바꾸는 데 1,500만 원이 필요합니다. 최근 6개월 동안 주문을 받지 못한 날이 월평균 8일이었고, 생산량이 늘면 월 매출이 약 300만 원 늘어날 것으로 봅니다. 상환은 늘어난 매출에서 매달 갚는 계획입니다.</p>
  </div>
  <p>고친 문장에는 자금 용도, 금액, 지금의 문제를 보여주는 기록, 기대 효과의 계산 근거가 함께 들어 있습니다. 직접대출 심사가 보는 사업성·시장성·경영능력도 이런 숫자에서 판단할 수 있습니다. 설비를 사는 돈인지 재료비나 인건비 같은 운영비인지도 구분해서 적으세요.</p>

  <h2>공고는 소상공인24와 기업마당에서 함께 보세요</h2>
  <ul>
    <li><a href="${SBIZ24_URL}" target="_blank" rel="noopener noreferrer">소상공인24</a>: 공단이 운영하는 통합 플랫폼으로, 공단·지방정부·유관기관의 소상공인 지원사업 공고를 조회하고 온라인으로 신청할 수 있습니다. 공단은 지원사업 신청 과정에서 수수료를 요구하지 않는다고 밝히고 있습니다.</li>
    <li><a href="${BIZINFO_URL}" target="_blank" rel="noopener noreferrer">기업마당</a>: 여러 부처와 지자체의 중소기업 지원사업 공고를 분야별·지역별로 모아 보여줍니다. 지자체의 소상공인 이자 지원 공고도 이곳에 함께 올라옵니다.</li>
  </ul>
  <p>지역 사업은 공고 기관마다 사업장 소재지와 업력 기준이 다르니, 공고문의 지원 대상 문단부터 읽고 내 사업자등록증의 주소와 개업일을 대조해 보세요.</p>

  <div class="dh-cta">
    <p>지원사업 공고를 골랐다면 독스헌트에 공고문과 양식을 올려 평가 기준에 맞춘 사업계획서 초안을 만들어 보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=small-business-support-programs&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트로 사업계획서 준비하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${SEMAS_FUND_URL}" target="_blank" rel="noopener noreferrer">소상공인시장진흥공단, 소상공인정책자금 안내</a></li>
      <li><a href="${SEMAS_VOUCHER_URL}" target="_blank" rel="noopener noreferrer">소상공인시장진흥공단, 소상공인 경영안정 바우처</a></li>
      <li><a href="${SEMAS_LOCAL_TRACK_URL}" target="_blank" rel="noopener noreferrer">소상공인시장진흥공단, 모두의 창업: 로컬 트랙</a></li>
      <li><a href="${SBIZ24_URL}" target="_blank" rel="noopener noreferrer">소상공인24 지원사업 통합 플랫폼</a></li>
      <li><a href="${SMINFO_URL}" target="_blank" rel="noopener noreferrer">중소기업현황정보시스템, 중소기업(소상공인)확인서</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

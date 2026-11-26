import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const NTS_ACT_URL = "https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B5%AD%EC%84%B8%EC%A7%95%EC%88%98%EB%B2%95";
const NTS_DECREE_URL = "https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EA%B5%AD%EC%84%B8%EC%A7%95%EC%88%98%EB%B2%95%EC%8B%9C%ED%96%89%EB%A0%B9";
const LOCAL_DECREE_URL =
  "https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%A7%80%EB%B0%A9%EC%84%B8%EC%A7%95%EC%88%98%EB%B2%95%EC%8B%9C%ED%96%89%EB%A0%B9";
const GOV24_NATIONAL_URL = "https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000011";
const GOV24_LOCAL_URL = "https://plus.gov.kr/search/searchdtl?srvcId=13100000056&typeSn=01";
const GOV24_INSURANCE_URL = "https://plus.gov.kr/search/searchdtl?srvcId=PG4CADM6001&typeSn=01";
const EARLY_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1065015&cbIdx=310";
const PRE_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";

export const post112 = {
  page: 1,
  index: 1,
  slug: "national-local-tax-payment-certificate",
  sourceUrl: "https://docshunt.ai/blog_detail/national-local-tax-payment-certificate",
  title: "국세 지방세 완납증명서 발급, 법인이면 몇 장을 떼야 할까",
  titleLines: ["국세 지방세", "완납증명서 발급,", "법인이면 몇 장을 떼야 할까"],
  titleLineBreaks: "always",
  description:
    "국세 지방세 완납증명서의 정식 이름과 발급처, 30일 유효기간, 법인과 대표자 명의를 나눠 준비하는 방법을 정리했습니다. 창업지원사업 신청 전에 체납 때문에 제외되지 않도록 확인할 순서도 담았습니다.",
  seo: {
    mainKeyword: "국세 지방세 완납증명서",
    supportKeywords: ["납세증명서 유효기간", "지방세 납세증명서 인터넷 발급", "정부지원사업 체납"],
    searchIntent: "지원사업에 낼 국세·지방세 완납증명서를 어디서 어떤 명의로 몇 장 떼야 하는지, 유효기간과 체납 제외 기준을 알고 싶다",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.11.26",
  modifiedDate: "2026.11.26",
  verification: {
    date: "2026.11.26",
    note: "납세증명서의 뜻, 발급 관할, 30일 유효기간은 국세징수법·같은 법 시행령과 지방세징수법 시행령에서, 발급 방법·수수료·대리 발급은 정부24 민원 안내에서, 4대 사회보험료 완납증명서는 정부24 안내에서 2026년 11월 26일 확인했습니다. 체납자 신청 제외와 예외, 법인·대표자 기준은 2026년 초기창업패키지(일반형) 공고 제2026-38호와 예비창업패키지 수정 공고 제2026-207호에서 확인했습니다. 두 모집은 끝났으며 다음 공고에서 문구가 바뀔 수 있습니다. 법인 기준 네 장은 이 기준을 바탕으로 한 준비 예시입니다.",
    sources: [
      { label: "국가법령정보센터, 국세징수법 제107조·제108조", url: NTS_ACT_URL },
      { label: "국가법령정보센터, 국세징수법 시행령 제93조·제95조·제96조", url: NTS_DECREE_URL },
      { label: "국가법령정보센터, 지방세징수법 시행령 제6조·제7조", url: LOCAL_DECREE_URL },
      { label: "정부24, 납세증명서 발급(국세)", url: GOV24_NATIONAL_URL },
      { label: "정부24, 지방세 납세증명서 발급", url: GOV24_LOCAL_URL },
      { label: "정부24, 4대 사회보험료 완납증명서 발급", url: GOV24_INSURANCE_URL },
      { label: "중소벤처기업부, 2026년 초기창업패키지(일반형) 모집공고 제2026-38호", url: EARLY_NOTICE_URL },
      { label: "중소벤처기업부, 2026년 예비창업패키지 수정 모집공고 제2026-207호", url: PRE_NOTICE_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00112-national-local-tax-payment-certificate-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00112-national-local-tax-payment-certificate-hero.jpg",
  paragraphs: [
    "흔히 국세 지방세 완납증명서라고 부르는 서류의 정식 이름은 납세증명서입니다. 국세는 홈택스나 세무서에서, 지방세는 정부24나 주민센터에서 따로 발급받고, 둘 다 수수료가 없으며 유효기간은 보통 발급일부터 30일입니다.",
    "2026년 초기창업패키지 공고는 법인이 신청하면 법인과 대표자 모두 체납 등 제외 사유가 없어야 한다고 적었습니다. 그래서 법인은 법인 명의와 대표자 개인 명의로 국세·지방세를 하나씩, 모두 네 장을 기준으로 준비하는 편이 안전합니다.",
    "국세나 지방세를 체납 중이면 신청 제외 대상이지만, 강제징수·체납처분 유예를 받았거나 변제 후 증빙할 수 있으면 예외로 봤습니다. 판단 기준일은 신청·접수 마감일입니다.",
    "공공마이데이터나 행정정보 공동이용에 동의하면 기관이 체납 여부를 직접 확인할 수 있어 종이 증명서를 따로 내지 않아도 되는 경우가 있습니다. 공고와 주관기관 안내가 요구하는 서류가 우선입니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p>흔히 '국세 지방세 완납증명서'라고 부르는 서류의 정식 이름은 <strong>납세증명서</strong>입니다. 국세와 지방세는 따로 떼야 하고, 둘 다 수수료 없이 바로 나오며, 유효기간은 보통 <strong>발급일부터 30일</strong>입니다.</p>
  <p>법인 대표라면 장수가 하나 더 걸립니다. <a href="${EARLY_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년 초기창업패키지 공고</a>는 "법인인 기업의 경우, 법인과 대표자 모두" 제외 사유가 없어야 한다고 적었습니다. 증빙을 요구받았을 때 법인 것만 내면 대표자 쪽 확인이 비어 있게 됩니다.</p>

  <h2>신청자 유형별로 준비할 장수</h2>
  <p>아래 표는 공고나 주관기관이 납세증명서를 직접 내라고 할 때를 기준으로 한 준비 예시입니다. 실제 제출 목록은 공고 별첨과 선정 뒤 안내가 정합니다.</p>
  <table>
    <thead>
      <tr>
        <th>신청자</th>
        <th>국세</th>
        <th>지방세</th>
        <th>합계</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>예비창업자(사업자 없음)</td>
        <td>본인 1장</td>
        <td>본인 1장</td>
        <td>2장</td>
      </tr>
      <tr>
        <td>개인사업자</td>
        <td>대표자 1장</td>
        <td>대표자 1장</td>
        <td>2장</td>
      </tr>
      <tr>
        <td>법인</td>
        <td>법인 1장 + 대표자 1장</td>
        <td>법인 1장 + 대표자 1장</td>
        <td>4장</td>
      </tr>
      <tr>
        <td>공동·각자대표 법인</td>
        <td>법인 + 대표자마다 1장</td>
        <td>법인 + 대표자마다 1장</td>
        <td>대표 2명이면 6장</td>
      </tr>
    </tbody>
  </table>
  <p>개인사업자는 사업자와 대표자가 같은 사람이라 개인 명의 한 장이 사업 쪽 세금까지 포함합니다. 공동대표를 따로 셈한 이유는 같은 공고가 "대표자 전원이 신청자격에 해당하고, 신청 제외 대상에 해당하지 아니하여야" 한다고 적었기 때문입니다.</p>

  <h2>국세는 홈택스, 지방세는 정부24에서</h2>
  <ul>
    <li><strong>국세 납세증명서:</strong> 인터넷(홈택스), 모바일, 세무서 방문, 무인발급기, 민원우편으로 신청합니다. <a href="${GOV24_NATIONAL_URL}" target="_blank" rel="noopener noreferrer">정부24 안내</a> 기준 수수료는 없고 일반용은 즉시(근무시간 내 3시간) 처리됩니다.</li>
    <li><strong>지방세 납세증명서:</strong> 인터넷, 시·군·구나 읍·면·동 방문, 무인발급기, 우편, 팩스로 신청합니다. <a href="${GOV24_LOCAL_URL}" target="_blank" rel="noopener noreferrer">정부24 지방세 납세증명서 발급</a> 화면에서 바로 뗄 수 있고 수수료는 없습니다.</li>
  </ul>
  <p>지방세는 주소지 한 곳 것만 나오는지 묻는 경우가 많습니다. <a href="${LOCAL_DECREE_URL}" target="_blank" rel="noopener noreferrer">지방세징수법 시행령 제6조</a>는 발급할 때 <strong>다른 지방자치단체의 체납액까지 확인</strong>하도록 정했습니다. 예전 주소지에 남은 자동차세가 있으면 여기서 걸립니다.</p>
  <p>국세 쪽은 <a href="${NTS_DECREE_URL}" target="_blank" rel="noopener noreferrer">국세징수법 시행령 제95조</a>에 따라 개인은 주소지나 사업장, 법인은 본점 관할 세무서가 발급 관서이지만, 홈택스로 신청하면 관할을 따로 고를 일은 거의 없습니다.</p>
  <p>대신 떼 줄 사람을 정해 두었다면 주의하세요. 두 안내 모두 <strong>온라인은 대리 신청이 안 된다</strong>고 적었습니다. 직원이나 세무대리인이 창구에서 떼려면 위임장과 대리인 신분증, 위임인 신분증(법인은 인감증명서·사용인감계·대표자 신분증 중 하나)이 필요합니다.</p>

  <h2>30일 유효기간에서 거꾸로 날짜 잡기</h2>
  <p><a href="${NTS_DECREE_URL}" target="_blank" rel="noopener noreferrer">국세징수법 시행령 제96조</a>와 <a href="${LOCAL_DECREE_URL}" target="_blank" rel="noopener noreferrer">지방세징수법 시행령 제7조</a>는 유효기간을 발급일부터 30일로 정했습니다. 다만 발급 당시 고지된 세금이 있으면 그 납부기한까지로 짧아질 수 있고, 이때는 증명서에 줄어든 기간과 사유가 적힙니다.</p>
  <p>그래서 미리 떼 두는 것보다 언제 낼지를 먼저 확인하는 편이 낫습니다.</p>
  <ol>
    <li>공고에서 체납 여부를 따지는 기준일을 찾습니다. 2026년 초기창업패키지와 예비창업패키지는 <strong>신청·접수 마감일</strong>이 기준이었습니다.</li>
    <li>제출 시점을 확인합니다. 신청할 때 내는지, 서류평가 통과 뒤나 협약 때 요청받는지에 따라 발급일이 달라집니다.</li>
    <li>제출일 기준 30일 안에 들어오도록 뗍니다. 부가세·종합소득세·자동차세처럼 고지나 납부기한이 가까운 달이면 유효기간이 줄었는지 증명서 문구를 봅니다.</li>
  </ol>

  <h2>체납이 있으면 신청 자체가 막힙니다</h2>
  <p>2026년 초기창업패키지와 <a href="${PRE_NOTICE_URL}" target="_blank" rel="noopener noreferrer">예비창업패키지 공고</a>는 둘 다 "국세 또는 지방세 체납 중인 자"를 신청 제외 대상에 넣었습니다. 서류를 늦게 내서가 아니라 자격에서 빠지는 문제입니다. 공고가 예외로 든 경우는 두 가지였습니다.</p>
  <ul>
    <li>국세징수법 제105조에 따라 강제징수 유예를, 지방세징수법 제105조에 따라 체납처분 유예를 받은 경우</li>
    <li>국세·지방세 등의 특수채무를 변제한 뒤 증빙할 수 있는 경우</li>
  </ul>
  <p>밀린 세금이 적은 금액이라도 마감일 전에 내고 다시 증명서를 떼 보는 것이 가장 확실합니다. 바로 내기 어렵다면 공고 마감보다 먼저 세무서나 지자체에 유예 신청을 할 수 있는지 물어보세요. 유예 승인 여부는 기관이 판단하므로 신청했다는 사실만으로는 예외가 되지 않습니다.</p>
  <p>참고로 <a href="${NTS_ACT_URL}" target="_blank" rel="noopener noreferrer">국세징수법 제107조</a>가 납세증명서 제출을 의무로 정한 경우는 국가·지자체 등에서 대금을 받을 때, 외국인 체류 허가, 해외이주 신고입니다. 지원사업에서 요구하는 근거는 이 조항보다 각 공고의 신청 자격입니다.</p>

  <h2>떼지 않아도 되는 경우: 공공마이데이터 동의</h2>
  <p><a href="${NTS_DECREE_URL}" target="_blank" rel="noopener noreferrer">국세징수법 시행령 제93조</a>는 기관이 국세청에 조회하거나 납세자 동의를 받아 행정정보 공동이용으로 체납 여부를 확인하면 납세증명서를 받은 것으로 볼 수 있다고 정했습니다. 2026년 두 창업패키지 공고도 '공공마이데이터'에 동의하면 일부 서류를 따로 발급하지 않아도 자동으로 제출된다고 안내했습니다.</p>
  <p>다만 공고는 수집 과정에서 오류가 날 수 있고, 필요하면 관련 서류를 다시 요청할 수 있다고도 적었습니다. 동의했더라도 발급 경로는 알아 두고, 요청 문자를 받으면 그날 바로 뗄 수 있게 해 두세요.</p>

  <h2>자주 묻는 질문</h2>
  <p><strong>4대보험 완납증명서도 같은 서류인가요?</strong><br />아닙니다. 건강보험·연금보험·고용보험·산재보험료 완납 여부는 국민건강보험공단이 발급하는 <a href="${GOV24_INSURANCE_URL}" target="_blank" rel="noopener noreferrer">4대 사회보험료 완납증명서</a>로 따로 확인합니다. 개인은 건강보험·연금보험만 조회되고, 사업장은 네 보험이 모두 조회됩니다. 공고가 요구할 때만 준비하면 됩니다.</p>
  <p><strong>사업자등록 전 예비창업자도 뗄 수 있나요?</strong><br />네. 두 정부24 안내 모두 본인이 신청할 때 신분증만 요구하고 사업자등록 여부를 묻지 않습니다. 사업자가 없으면 개인 명의로 발급됩니다.</p>
  <p><strong>발급은 되는데 체납이 있으면 어떻게 나오나요?</strong><br />납세증명서는 발급일 현재 유예액 등을 빼고 다른 체납액이 없다는 사실을 증명하는 문서입니다. 체납이 있으면 '체납액이 없다'는 증명을 받을 수 없으니, 발급이 막히면 홈택스와 정부24에서 체납 내역부터 확인하세요.</p>

  <div class="dh-cta">
    <p>서류 일정을 잡았다면 남은 일은 사업계획서입니다. 독스헌트에 공고와 사업 내용을 넣으면 공고 양식에 맞춘 초안을 먼저 만들어 볼 수 있습니다.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=national-local-tax-payment-certificate&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 초안 만들기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${NTS_ACT_URL}" target="_blank" rel="noopener noreferrer">국가법령정보센터, 국세징수법 제107조·제108조 (2026.11.26 확인)</a></li>
      <li><a href="${NTS_DECREE_URL}" target="_blank" rel="noopener noreferrer">국가법령정보센터, 국세징수법 시행령 제93조·제95조·제96조 (2026.11.26 확인)</a></li>
      <li><a href="${LOCAL_DECREE_URL}" target="_blank" rel="noopener noreferrer">국가법령정보센터, 지방세징수법 시행령 제6조·제7조 (2026.11.26 확인)</a></li>
      <li><a href="${GOV24_NATIONAL_URL}" target="_blank" rel="noopener noreferrer">정부24, 납세증명서 발급(국세) (2026.11.26 확인)</a></li>
      <li><a href="${GOV24_LOCAL_URL}" target="_blank" rel="noopener noreferrer">정부24, 지방세 납세증명서 발급 (2026.11.26 확인)</a></li>
      <li><a href="${GOV24_INSURANCE_URL}" target="_blank" rel="noopener noreferrer">정부24, 4대 사회보험료 완납증명서 발급 (2026.11.26 확인)</a></li>
      <li><a href="${EARLY_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 초기창업패키지(일반형) 모집공고 제2026-38호 (2026.11.26 확인)</a></li>
      <li><a href="${PRE_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 수정 모집공고 제2026-207호 (2026.11.26 확인)</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

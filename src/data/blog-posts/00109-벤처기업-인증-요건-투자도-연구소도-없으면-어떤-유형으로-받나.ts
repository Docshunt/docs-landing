import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const VENTURE_TYPE_URL = "https://www.smes.go.kr/venturein/institution/requireGuide";
const VENTURE_PROCESS_URL = "https://www.smes.go.kr/venturein/institution/processGuide";
const VENTURE_PREFER_URL = "https://www.smes.go.kr/venturein/institution/preferGuide";
const VENTURE_NOTICE_URL = "https://www.smes.go.kr/venturein/board/viewNotiBoard?menuId=4060000&bbsSvcDvsnCd=&bbsSn=6087";
const VENTURE_ACT_URL =
  "https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EB%B2%A4%EC%B2%98%EA%B8%B0%EC%97%85%EC%9C%A1%EC%84%B1%EC%97%90%EA%B4%80%ED%95%9C%ED%8A%B9%EB%B3%84%EB%B2%95";
const VENTURE_DECREE_URL =
  "https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EB%B2%A4%EC%B2%98%EA%B8%B0%EC%97%85%EC%9C%A1%EC%84%B1%EC%97%90%EA%B4%80%ED%95%9C%ED%8A%B9%EB%B3%84%EB%B2%95%EC%8B%9C%ED%96%89%EB%A0%B9";
const VENTURE_RULE_URL =
  "https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EB%B2%A4%EC%B2%98%EA%B8%B0%EC%97%85%ED%99%95%EC%9D%B8%EC%9A%94%EB%A0%B9";

export const post109 = {
  page: 1,
  index: 1,
  slug: "venture-company-certification-requirements",
  sourceUrl: "https://docshunt.ai/blog_detail/venture-company-certification-requirements",
  title: "벤처기업 인증 요건, 투자도 연구소도 없으면 어떤 유형으로 받나",
  titleLines: ["벤처기업 인증 요건,", "투자도 연구소도 없으면", "어떤 유형으로 받나"],
  titleLineBreaks: "always",
  description:
    "벤처기업 인증 요건을 네 가지 유형으로 나눠 정리했습니다. 투자 유치나 기업부설연구소가 없는 초기 창업자는 혁신성장유형, 사업자등록 전이면 예비벤처유형으로 사업계획서 평가를 받습니다. 수수료·기간·재확인 시기까지 담았습니다.",
  seo: {
    mainKeyword: "벤처기업 인증 요건",
    supportKeywords: ["벤처기업확인서", "예비벤처기업", "벤처기업 확인 유효기간"],
    searchIntent:
      "예비창업자나 창업 3년 이내 대표가 벤처기업 인증(확인)을 받을 수 있는 요건과 유형, 수수료·기간, 유효기간과 재확인 시기를 알고 싶다",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.11.24",
  modifiedDate: "2026.11.24",
  verification: {
    date: "2026.11.24",
    note: "벤처기업의 요건(중소기업, 투자·연구개발·혁신성장 평가 중 하나)은 「벤처기업육성에 관한 특별법」 제2조의2, 투자금액 5천만 원·자본금 대비 10%와 연구개발비 5천만 원·매출 대비 5% 기준은 같은 법 시행령 제2조의3, 확인서 유효기간 3년은 시행령 제18조의4, 이의신청 30일은 법 제25조의5로 2026년 11월 24일 국가법령정보센터에서 확인했습니다. 유형별 신청 대상·전문평가기관·제출서류·수수료와 결과 안내기간, 확인 절차, 우대지원제도는 같은 날 벤처확인종합관리시스템의 유형별 안내·확인절차·우대지원제도 페이지에서 확인했습니다. 재확인을 만료 6개월 전부터 신청할 수 있게 바뀐 내용은 2026년 9월 28일 벤처기업확인기관 공지와 「벤처기업확인요령」(중소벤처기업부고시 제2026-68호, 2026.8.20 시행) 제19조로 확인했습니다. 수수료와 세제 혜택은 바뀔 수 있으므로 신청 전 벤처확인종합관리시스템과 관할 세무서에서 다시 확인해야 합니다.",
    sources: [
      { label: "벤처확인종합관리시스템, 유형별 안내", url: VENTURE_TYPE_URL },
      { label: "벤처확인종합관리시스템, 확인절차", url: VENTURE_PROCESS_URL },
      { label: "벤처확인종합관리시스템, 우대지원제도", url: VENTURE_PREFER_URL },
      { label: "벤처기업확인기관, 벤처기업확인서 유효기간 산정기준 변경 안내", url: VENTURE_NOTICE_URL },
      { label: "국가법령정보센터, 벤처기업육성에 관한 특별법", url: VENTURE_ACT_URL },
      { label: "국가법령정보센터, 벤처기업육성에 관한 특별법 시행령", url: VENTURE_DECREE_URL },
      { label: "국가법령정보센터, 벤처기업확인요령", url: VENTURE_RULE_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00109-venture-company-certification-requirements-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00109-venture-company-certification-requirements-hero.jpg",
  paragraphs: [
    "벤처기업 인증은 법에서 '벤처기업 확인'이라고 부르며, 중소기업이면서 벤처투자유형, 연구개발유형, 혁신성장유형 중 하나의 요건을 갖추면 받을 수 있습니다. 사업자등록 전이라면 예비벤처유형이 있습니다.",
    "투자도 기업부설연구소도 없는 창업 초기 기업은 대부분 혁신성장유형으로 신청합니다. 이 유형은 정해진 금액 기준이 없고, 온라인으로 작성한 사업계획서와 현장 실사로 기술의 혁신성과 사업의 성장성을 평가받습니다.",
    "벤처투자유형은 적격 투자기관에서 받은 투자가 5천만 원 이상이고 자본금 중 투자금액 비율이 10% 이상이어야 합니다. 연구개발유형은 기업부설연구소나 연구개발전담부서가 있고 직전 4개 분기 연구개발비가 5천만 원 이상이어야 하며, 창업 3년 미만이면 매출 대비 연구개발비 비율은 보지 않습니다.",
    "신규 확인 수수료의 기업 부담금은 벤처투자유형 17만 5천 원, 연구개발유형과 예비벤처유형 34만 5천 원, 혁신성장유형 45만 5천 원입니다(부가세 포함). 결과는 수수료 납부일부터 벤처투자유형 30일, 나머지 유형 45일 안에 안내됩니다.",
    "확인서 유효기간은 3년입니다. 2026년 8월 개정으로 만료 6개월 전부터 재확인을 신청할 수 있고, 만료일 전에 재확인이 끝나야 유효기간이 공백 없이 이어집니다.",
    "벤처확인종합관리시스템은 창업 후 3년 이내 벤처확인을 받은 기업의 소득세·법인세 감면, 기술보증 한도 확대, 스톡옵션 부여 범위 확대 등을 우대 제도로 안내합니다. 세제 적용 여부는 관할 세무서에 확인해야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p>벤처기업 인증은 법에서 <strong>'벤처기업 확인'</strong>이라고 부릅니다. 중소기업이면서 투자, 연구개발, 혁신성장 평가 중 <strong>한 가지 요건만</strong> 갖추면 받을 수 있고, 사업자등록 전이라면 예비벤처유형이 따로 있습니다(<a href="${VENTURE_ACT_URL}" target="_blank" rel="noopener noreferrer">「벤처기업육성에 관한 특별법」 제2조의2</a>).</p>
  <p>투자를 받은 적도, 기업부설연구소도 없는 창업 초기 기업이라면 길은 <strong>혁신성장유형</strong>입니다. 이 유형에는 금액 기준이 없는 대신, 온라인으로 쓰는 사업계획서와 현장 실사로 평가를 받습니다. 그래서 요건을 맞추는 일보다 평가에 낼 사업계획서를 준비하는 일이 더 큽니다.</p>

  <div class="dh-note">
    <p><strong>기준 시점:</strong> 2026년 11월 24일 <a href="${VENTURE_TYPE_URL}" target="_blank" rel="noopener noreferrer">벤처확인종합관리시스템</a>과 국가법령정보센터의 법령·고시 기준입니다. 수수료와 절차는 바뀔 수 있으니 신청 직전에 다시 확인하세요.</p>
  </div>

  <h2>네 가지 유형 중 우리 회사가 갈 수 있는 길</h2>
  <p>아래 표의 위에서부터 차례로 해당하는지 보면 됩니다. 어느 유형이든 「중소기업기본법」상 중소기업이어야 하고, 일반 유흥 주점업처럼 법령이 정한 제외 업종은 신청할 수 없습니다(<a href="${VENTURE_ACT_URL}" target="_blank" rel="noopener noreferrer">같은 법 제3조</a>).</p>
  <table>
    <thead>
      <tr>
        <th>지금 상황</th>
        <th>맞는 유형</th>
        <th>평가 방식</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>VC·액셀러레이터·개인투자조합 등에서 5천만 원 이상 투자를 받았다</td>
        <td>벤처투자유형</td>
        <td>요건 검증(서류)</td>
      </tr>
      <tr>
        <td>기업부설연구소나 연구개발전담부서가 있고 연구개발비를 쓰고 있다</td>
        <td>연구개발유형</td>
        <td>요건 검증 + 성장성 평가(현장 실사)</td>
      </tr>
      <tr>
        <td>투자도 연구소도 없지만 사업자등록은 했다</td>
        <td>혁신성장유형</td>
        <td>기술 혁신성·사업 성장성 평가(현장 실사)</td>
      </tr>
      <tr>
        <td>아직 법인 설립이나 사업자등록 전이다</td>
        <td>예비벤처유형</td>
        <td>기술 혁신성·사업 성장성 평가</td>
      </tr>
    </tbody>
  </table>
  <p>어느 유형인지 헷갈리면 벤처확인종합관리시스템의 '나에게 맞는 벤처유형' 메뉴에서 몇 가지 질문에 답해 추천을 받을 수 있습니다.</p>

  <h2>벤처투자유형: 5천만 원과 자본금 10%를 함께 넘어야 합니다</h2>
  <p>투자를 받았다고 모두 인정되지는 않습니다. 시행령은 적격 투자기관의 투자금액 합계가 <strong>5천만 원 이상</strong>이면서, 기업 자본금 중 그 투자금액이 차지하는 비율이 <strong>10% 이상</strong>일 것을 요구합니다(<a href="${VENTURE_DECREE_URL}" target="_blank" rel="noopener noreferrer">시행령 제2조의3</a>). 적격 투자기관에는 벤처투자회사, 벤처투자조합, 창업기획자(액셀러레이터), 개인투자조합, 전문개인투자자, 기술보증기금, 신용보증기금 등이 들어갑니다. 지인이 개인 자격으로 넣은 돈은 해당하지 않습니다.</p>
  <p>아래는 계산 방식을 보여 주려고 만든 가상 사례입니다.</p>
  <ul>
    <li><strong>자본금 3억 원, 액셀러레이터 투자 5천만 원:</strong> 5천만 원 ÷ 3억 원 = 약 16.7%. 두 기준을 모두 넘습니다.</li>
    <li><strong>자본금 6억 원, 같은 투자 5천만 원:</strong> 약 8.3%로 10%에 못 미칩니다. 투자금액이 같아도 자본금이 크면 이 유형으로는 어렵습니다.</li>
  </ul>
  <p>신청할 때는 투자계약서, 입금 내역, 주주명부와 함께 <strong>투자 유치 사항이 등기된 법인등기부등본</strong>을 냅니다. SAFE나 조건부지분전환계약으로 받은 투자도 인정되지만 추가 증빙 서류가 필수입니다(<a href="${VENTURE_TYPE_URL}" target="_blank" rel="noopener noreferrer">유형별 안내</a>).</p>

  <h2>연구개발유형: 창업 3년 미만이면 매출 대비 비율은 보지 않습니다</h2>
  <p>연구개발유형은 먼저 <strong>기업부설연구소, 연구개발전담부서, 기업부설창작연구소, 기업창작전담부서</strong> 중 하나를 인정받아 두어야 합니다. 그다음 확인을 요청한 날이 속한 분기의 직전 4개 분기 동안 연구개발비가 <strong>5천만 원 이상</strong>이어야 하고, 같은 기간 매출 대비 연구개발비 비율이 업종별 기준(5% 이상)을 넘어야 합니다.</p>
  <p>다만 법은 <strong>창업 후 3년이 지나지 않은 기업에는 매출 대비 비율 기준을 적용하지 않습니다</strong>(<a href="${VENTURE_ACT_URL}" target="_blank" rel="noopener noreferrer">법 제2조의2 제1항 제2호 나목</a>). 매출이 거의 없는 초기 기업도 연구개발비 5천만 원과 연구조직 요건을 갖추면 이 유형을 노릴 수 있다는 뜻입니다. 여기에 신용보증기금이나 중진공이 사업의 성장성을 평가합니다. 창업 시점을 어떻게 세는지는 <a href="/blog_detail/startup-business-age-criteria">창업 업력 기준 글</a>을 참고하세요.</p>

  <h2>혁신성장·예비벤처유형: 결국 사업계획서로 평가받습니다</h2>
  <p>두 유형은 금액 요건이 없고, 벤처기업확인기관이 <strong>기술의 혁신성과 사업의 성장성</strong>을 평가합니다. 혁신성장유형은 기술보증기금, 나이스평가정보, 한국평가데이터 등 여러 전문평가기관 중 한 곳이 업종과 지역에 맞춰 자동 배정되고, 예비벤처유형은 기술보증기금이 평가합니다.</p>
  <p>공통으로 내는 핵심 서류는 시스템에서 직접 쓰는 <strong>사업계획서</strong>입니다. 혁신성장유형은 여기에 사업자등록증, 재무제표, 부가가치세 과세표준증명원, 4대보험 가입자 명부 등을 더하고, 예비벤처유형은 사업계획서 외에 대표자 관련 증빙, 창업경진대회 입상이나 예비창업자 지원사업 선정 실적, 창업교육 수료 확인서 같은 추가 서류를 낼 수 있습니다.</p>
  <p>평가 기준이 기술의 우수성, 제품·서비스의 경쟁력, 시장의 크기와 전망이라는 점은 시행령에도 적혀 있습니다(<a href="${VENTURE_DECREE_URL}" target="_blank" rel="noopener noreferrer">시행령 제2조의3 제11항</a>). 정부지원사업 사업계획서에서 쓰는 문제 정의, 해결 방법, 시장 규모, 성장 전략이 그대로 쓰인다는 뜻이니, 이미 써 둔 지원사업 계획서가 있다면 출발점으로 삼을 만합니다.</p>
  <p>예비벤처유형으로 확인을 받은 뒤 창업해 <strong>1년 안에 혁신성장유형으로 재확인</strong>을 신청하면 수수료가 따로 낮게 책정되어 있습니다(아래 표).</p>

  <h2>수수료와 결과가 나오기까지 걸리는 기간</h2>
  <p>수수료는 정부지원금을 뺀 기업 부담금만 냅니다. 서류가 갖춰지면 문자로 납부 안내가 오고, <strong>납부한 날부터</strong> 결과 안내기간을 셉니다(<a href="${VENTURE_PROCESS_URL}" target="_blank" rel="noopener noreferrer">확인절차</a>).</p>
  <table>
    <thead>
      <tr>
        <th>유형</th>
        <th>신규 기업 부담금(부가세 포함)</th>
        <th>결과 안내기간</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>벤처투자유형</td>
        <td>175,000원</td>
        <td>30일 이내</td>
      </tr>
      <tr>
        <td>연구개발유형</td>
        <td>345,000원</td>
        <td>45일 이내</td>
      </tr>
      <tr>
        <td>혁신성장유형</td>
        <td>455,000원(이노비즈 연계 290,000원)</td>
        <td>45일 이내</td>
      </tr>
      <tr>
        <td>예비벤처유형</td>
        <td>345,000원</td>
        <td>45일 이내</td>
      </tr>
      <tr>
        <td>예비벤처 → 1년 안에 혁신성장 재확인</td>
        <td>280,000원</td>
        <td>45일 이내</td>
      </tr>
    </tbody>
  </table>
  <p>벤처투자유형과 연구개발유형은 서류 검토에서 요건을 못 채우면 수수료를 돌려받습니다. 결과에 동의하지 않으면 통지를 받은 날부터 <strong>30일 안에</strong> 이의신청을 할 수 있습니다(<a href="${VENTURE_ACT_URL}" target="_blank" rel="noopener noreferrer">법 제25조의5</a>).</p>

  <h2>유효기간 3년, 재확인은 만료 6개월 전부터</h2>
  <p>벤처기업확인서의 유효기간은 확인일부터 <strong>3년</strong>입니다(<a href="${VENTURE_DECREE_URL}" target="_blank" rel="noopener noreferrer">시행령 제18조의4</a>). 연장하려면 신규 확인과 같은 신청·평가 절차를 다시 거칩니다.</p>
  <p>재확인 시기는 2026년 8월 20일 「벤처기업확인요령」 개정으로 바뀌었습니다. 예전에는 만료 2개월 전부터 만료 후 1개월 사이에 신청했지만, 지금은 <strong>만료 6개월 전부터</strong> 신청할 수 있습니다. 그리고 <strong>만료일 전에 재확인 심의가 끝나야</strong> 새 유효기간이 기존 만료일 다음 날부터 공백 없이 이어집니다(<a href="${VENTURE_NOTICE_URL}" target="_blank" rel="noopener noreferrer">벤처기업확인기관 공지</a>). 고시는 만료 전에 확인을 받으려면 <strong>만료 140일 전까지</strong> 요청하라고 정해 두었습니다(<a href="${VENTURE_RULE_URL}" target="_blank" rel="noopener noreferrer">벤처기업확인요령 제19조</a>). 평가에 최대 45일이 걸리니 달력에 만료 6개월 전 날짜를 적어 두는 편이 안전합니다.</p>

  <h2>확인을 받으면 달라지는 것</h2>
  <p><a href="${VENTURE_PREFER_URL}" target="_blank" rel="noopener noreferrer">벤처확인종합관리시스템의 우대지원제도 안내</a>에서 초기 창업자와 관련이 큰 항목은 이렇습니다.</p>
  <ul>
    <li><strong>세제:</strong> 창업 후 3년 이내에 벤처확인을 받은 창업벤처중소기업은 소득세·법인세를 최대 5년간 50% 감면받을 수 있다고 안내합니다(조세특례제한법 제6조). 다른 감면과 중복되는지, 업종 요건에 맞는지는 관할 세무서나 세무 대리인에게 확인해야 합니다.</li>
    <li><strong>보증:</strong> 기술보증 한도가 50억 원(이행보증·전자상거래담보보증은 70억 원)으로 넓어집니다.</li>
    <li><strong>인력:</strong> 스톡옵션을 발행주식 총수의 50%까지, 외부 전문가에게도 줄 수 있습니다. 기업부설연구소 연구전담요원 인정 기준도 2명 이상으로 완화됩니다.</li>
    <li><strong>특허:</strong> 벤처확인 업종과 관련된 특허·실용신안 출원은 우선 심사를 신청할 수 있습니다.</li>
  </ul>
  <p>업력 3년이 세제 혜택의 기준이 되는 만큼, 혁신성장유형을 생각하고 있다면 창업 3년을 넘기기 전에 신청 시기를 잡아 두세요.</p>

  <div class="dh-cta">
    <p>혁신성장·예비벤처유형의 평가는 사업계획서가 좌우합니다. 독스헌트에 기업 정보와 기술 설명을 넣으면 기술 혁신성과 시장 전망이 드러나도록 사업계획서 초안을 정리할 수 있습니다.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=venture-company-certification-requirements&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 사업계획서 준비하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${VENTURE_TYPE_URL}" target="_blank" rel="noopener noreferrer">벤처확인종합관리시스템, 유형별 안내 (2026.11.24 확인)</a></li>
      <li><a href="${VENTURE_PROCESS_URL}" target="_blank" rel="noopener noreferrer">벤처확인종합관리시스템, 확인절차 (2026.11.24 확인)</a></li>
      <li><a href="${VENTURE_PREFER_URL}" target="_blank" rel="noopener noreferrer">벤처확인종합관리시스템, 우대지원제도 (2026.11.24 확인)</a></li>
      <li><a href="${VENTURE_NOTICE_URL}" target="_blank" rel="noopener noreferrer">벤처기업확인기관, 벤처기업확인서 유효기간 산정기준 변경 안내 (2026.9.28 공지, 2026.11.24 확인)</a></li>
      <li><a href="${VENTURE_ACT_URL}" target="_blank" rel="noopener noreferrer">국가법령정보센터, 벤처기업육성에 관한 특별법 제2조의2·제3조·제25조의5 (2026.11.24 확인)</a></li>
      <li><a href="${VENTURE_DECREE_URL}" target="_blank" rel="noopener noreferrer">국가법령정보센터, 벤처기업육성에 관한 특별법 시행령 제2조의3·제18조의4 (2026.11.24 확인)</a></li>
      <li><a href="${VENTURE_RULE_URL}" target="_blank" rel="noopener noreferrer">국가법령정보센터, 벤처기업확인요령 제19조 (2026.11.24 확인)</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const NTS_ONLINE_SELLER_URL = "https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2483&cntntsId=7804";
const NTS_CODE_REFORM_URL = "https://nts.go.kr/nts/na/ntt/selectNttInfo.do?mi=2207&nttSn=38012";
const STARTUP_DECREE_URL =
  "https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%A4%91%EC%86%8C%EA%B8%B0%EC%97%85%EC%B0%BD%EC%97%85%EC%A7%80%EC%9B%90%EB%B2%95%EC%8B%9C%ED%96%89%EB%A0%B9";
const VAT_DECREE_URL =
  "https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EB%B6%80%EA%B0%80%EA%B0%80%EC%B9%98%EC%84%B8%EB%B2%95%EC%8B%9C%ED%96%89%EB%A0%B9";
const PRE_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";

export const post113 = {
  page: 1,
  index: 1,
  slug: "business-registration-industry-code",
  sourceUrl: "https://docshunt.ai/blog_detail/business-registration-industry-code",
  title: "사업자등록 업종코드 6자리와 지원사업이 보는 5자리 산업분류",
  titleLines: ["사업자등록 업종코드", "6자리와 지원사업이 보는", "5자리 산업분류"],
  titleLineBreaks: "always",
  description:
    "사업자등록 업종코드를 홈택스에서 찾는 방법과, 정부지원사업이 국세청 6자리 코드 대신 한국표준산업분류 5자리로 업종을 보는 이유를 정리했습니다. 제외 업종 확인과 업종 추가 정정신고 순서도 담았습니다.",
  seo: {
    mainKeyword: "사업자등록 업종코드",
    supportKeywords: ["업종코드 조회", "업종 추가 정정신고", "창업지원 제외 업종"],
    searchIntent: "사업자등록 때 업종코드를 어디서 조회해 어떻게 고르고, 정부지원사업이 업종을 어떤 기준으로 판단하는지 알고 싶다",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.11.26",
  modifiedDate: "2026.11.26",
  verification: {
    date: "2026.11.26",
    note: "업종코드 예시와 신설 시점은 국세청 온라인 판매자 세무 안내에서, 업종코드와 한국표준산업분류의 대응 관계와 연계표는 국세청 업종분류코드 개편 공지에서, 창업 제외 업종과 같은 종류 사업의 판단 기준은 중소기업창업 지원법 시행령 제2조·제4조에서, 업종 변경 시 정정신고와 재발급 기한은 부가가치세법 시행령 제14조에서 2026년 11월 26일 확인했습니다. 지원 제외 업종 코드와 부동산임대업 예외는 2026년 예비창업패키지 수정 공고 제2026-207호 기준이며, 이 모집은 끝났고 다음 공고에서 문구가 바뀔 수 있습니다. 쇼핑몰 창업자 사례는 설명을 위한 가정입니다.",
    sources: [
      { label: "국세청, 온라인 판매자(SNS마켓) 세무 안내", url: NTS_ONLINE_SELLER_URL },
      { label: "국세청, 업종분류코드 개편 안내", url: NTS_CODE_REFORM_URL },
      { label: "국가법령정보센터, 중소기업창업 지원법 시행령 제2조·제4조", url: STARTUP_DECREE_URL },
      { label: "국가법령정보센터, 부가가치세법 시행령 제14조", url: VAT_DECREE_URL },
      { label: "중소벤처기업부, 2026년 예비창업패키지 수정 모집공고 제2026-207호", url: PRE_NOTICE_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00113-business-registration-industry-code-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00113-business-registration-industry-code-hero.jpg",
  paragraphs: [
    "사업자등록 업종코드는 국세청이 세금 신고에 쓰는 6자리 번호입니다. 정부 창업지원사업 공고는 업종을 이 번호가 아니라 한국표준산업분류 세세분류 5자리로 적기 때문에, 신청 전에는 내 6자리 코드가 어느 5자리 분류에 해당하는지 확인해야 합니다.",
    "국세청은 2019년 업종코드를 한국표준산업분류와 대응되도록 개편했고, 홈택스 기준·단순경비율(업종코드) 조회 화면에서 업종명이나 숫자로 코드를 찾고 표준산업분류 연계표를 볼 수 있게 했습니다.",
    "중소기업창업 지원법 시행령 제4조가 창업에서 제외하는 업종은 일반유흥주점업, 무도유흥주점업, 카지노 운영업, 기타 사행시설 관리 및 운영업입니다. 2026년 예비창업패키지 공고는 이 업종을 운영하거나 운영하려는 사람을 신청 제외 대상으로 두었습니다.",
    "사업을 시작한 뒤 업종이 바뀌거나 늘면 부가가치세법 시행령 제14조에 따라 사업자등록 정정신고를 하고, 세무서는 신고일부터 2일 이내에 사업자등록증을 고쳐 다시 발급합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p>사업자등록 업종코드는 국세청이 세금 신고에 쓰는 <strong>6자리 번호</strong>입니다. 그런데 정부 창업지원사업 공고는 업종을 이 번호로 적지 않습니다. 제외 업종도, 같은 업종인지 다른 업종인지도 <strong>한국표준산업분류 세세분류 5자리</strong>로 판단합니다.</p>
  <p>그래서 사업자등록 화면에서 코드를 고를 때 한 번, 공고를 읽을 때 한 번, 두 번호를 맞춰 봐야 합니다. 이 글은 6자리 코드를 찾는 법, 5자리 분류로 옮겨 보는 법, 지원사업에서 업종이 걸리는 지점을 순서대로 정리했습니다.</p>

  <h2>두 번호는 무엇이 다른가</h2>
  <table>
    <thead>
      <tr>
        <th>구분</th>
        <th>국세청 업종코드</th>
        <th>한국표준산업분류 세세분류</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>자릿수</td>
        <td>6자리 (예: 525101)</td>
        <td>5자리 (예: 56211)</td>
      </tr>
      <tr>
        <td>만드는 곳</td>
        <td>국세청</td>
        <td>국가데이터처 작성·고시</td>
      </tr>
      <tr>
        <td>쓰이는 곳</td>
        <td>사업자등록, 부가세·종합소득세 신고, 경비율</td>
        <td>창업지원 제외 업종, 동종·이종 업종 판단</td>
      </tr>
      <tr>
        <td>사업자등록증 표기</td>
        <td colspan="2">번호가 아니라 업태·종목이 글자로 적힘</td>
      </tr>
    </tbody>
  </table>
  <p>두 번호가 따로 노는 것은 아닙니다. <a href="${NTS_CODE_REFORM_URL}" target="_blank" rel="noopener noreferrer">국세청 업종분류코드 개편 안내</a>를 보면 국세청은 2019년에 업종코드를 한국표준산업분류와 대응되도록 나누고 합쳐 979개에서 1,585개로 늘렸고, 개편 전·후 업종코드와 표준산업분류의 연계표를 함께 내놓았습니다. 같은 공지에서 전산상 업종코드가 바뀌어도 사업자등록증의 업태·종목 표기는 그대로라고 설명합니다. 등록증만 봐서는 내 코드가 몇 번인지 알 수 없다는 뜻입니다.</p>

  <h2>홈택스에서 내 업종코드 찾기</h2>
  <ol>
    <li>홈택스의 <strong>기준·단순경비율(업종코드) 조회</strong> 화면을 엽니다. 위 국세청 공지는 '조회/발급 → 기타조회' 아래에서 이 화면을 안내했습니다.</li>
    <li>판매할 물건이나 서비스의 핵심 단어로 검색합니다. 업종명 일부나 숫자 일부로도 찾을 수 있습니다.</li>
    <li>결과에서 코드 옆의 <strong>적용범위</strong>와 예시를 읽고 내 사업과 맞는지 봅니다. 이름이 비슷한 코드끼리 적용범위가 갈리는 경우가 많습니다.</li>
    <li>고른 코드가 어느 표준산업분류에 대응하는지 연계표로 확인하고, 그 5자리 번호를 메모해 둡니다. 지원사업 공고를 읽을 때 이 번호를 씁니다.</li>
  </ol>
  <p>적용범위가 왜 중요한지는 온라인 판매 코드에서 잘 보입니다. <a href="${NTS_ONLINE_SELLER_URL}" target="_blank" rel="noopener noreferrer">국세청 온라인 판매자 세무 안내</a>는 같은 통신판매업 안에서도 코드를 이렇게 나눕니다.</p>
  <ul>
    <li><strong>525101 전자상거래 소매업:</strong> 온라인 통신망으로 상품을 소매합니다. 오픈마켓 판매자가 여기에 들어가고, SNS 채널 판매는 빠집니다.</li>
    <li><strong>525104 SNS 마켓:</strong> 블로그·카페 등 SNS 채널로 물건을 팔거나 구매를 알선·중개합니다. 2019년 9월 1일 이후 신규·정정 등록부터 적용됐습니다.</li>
    <li><strong>525103 전자상거래 소매중개업:</strong> 다른 판매자가 온라인에서 팔 수 있게 중개합니다. 오픈마켓 운영 사업자가 예시이고, 오픈마켓 판매자는 제외됩니다.</li>
  </ul>

  <h2>예시: 스마트스토어와 인스타그램을 같이 한다면</h2>
  <p>아래는 설명을 위한 가정입니다. 국내 제조사에서 반려동물 용품을 사들여 오픈마켓 스토어에서 되팔고, 인스타그램 공동구매도 가끔 열 계획인 예비창업자가 있다고 해 봅시다.</p>
  <ul>
    <li>사들인 상품을 온라인으로 되파는 매출이 대부분이라면 주된 업종은 <strong>525101 전자상거래 소매업</strong> 쪽이 적용범위에 맞습니다.</li>
    <li>인스타그램 판매가 계속 반복된다면 <strong>525104 SNS 마켓</strong>을 함께 등록할지 검토합니다. 국세청 안내는 SNS 판매가 일회성이 아니라 계속·반복되면 사업자등록 대상이라고 적었습니다.</li>
    <li>상품을 직접 만들어 판다면 이야기가 달라집니다. 판매 경로가 온라인이어도 제조 활동이 중심이면 제조업 쪽 코드가 맞을 수 있으니, 판매 코드부터 고르지 말고 만드는 제품의 적용범위를 먼저 찾아보세요.</li>
  </ul>
  <p>이렇게 정한 코드는 사업계획서의 아이템 설명과도 맞아야 합니다. 2026년 예비창업패키지 공고는 선정자가 <strong>선정된 창업아이템 관련 업종으로</strong> 협약종료일 2개월 전까지 사업자등록을 하도록 했습니다. 계획서에는 'AI 기반 반려동물 맞춤 플랫폼'이라고 쓰고 등록은 소매업으로만 해 두면 이 연결이 약해 보일 수 있습니다. 플랫폼 개발이 정말 사업의 중심이라면 그에 맞는 코드를 함께 찾아보는 편이 낫습니다.</p>

  <h2>지원사업에서 업종이 걸리는 세 곳</h2>
  <p><strong>1. 창업 제외 업종.</strong> <a href="${STARTUP_DECREE_URL}" target="_blank" rel="noopener noreferrer">중소기업창업 지원법 시행령 제4조</a>는 창업에서 제외하는 업종을 한국표준산업분류에 따라 정했습니다. <a href="${PRE_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년 예비창업패키지 공고</a> 붙임 1은 이를 코드와 함께 적었습니다.</p>
  <table>
    <thead>
      <tr>
        <th>제외 업종</th>
        <th>세세분류 코드</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>일반유흥주점업</td>
        <td>56211</td>
      </tr>
      <tr>
        <td>무도유흥주점업</td>
        <td>56212</td>
      </tr>
      <tr>
        <td>카지노 운영업</td>
        <td>91242</td>
      </tr>
      <tr>
        <td>기타 사행시설 관리 및 운영업</td>
        <td>91249</td>
      </tr>
    </tbody>
  </table>
  <p>시행령은 다섯 번째로 '중소벤처기업부령으로 정하는 업종'을 남겨 두었지만, 2026년 11월 26일 확인한 같은 법 시행규칙 조문에는 따로 정한 업종이 없었습니다. 공고는 이 업종을 이미 운영하는 사람뿐 아니라 <strong>운영하려는 사람</strong>도 신청 제외 대상으로 둡니다. 다만 개별 사업은 공고마다 제외 업종을 더 둘 수 있으니 해당 공고의 신청 제외 대상 항목을 같이 읽어야 합니다.</p>
  <p><strong>2. 같은 업종으로 다시 창업하는 경우.</strong> 시행령 제2조는 폐업 뒤 같은 종류의 사업을 다시 시작하는 것 등을 창업에서 빼고, 같은 종류인지를 세세분류 기준으로 판단하도록 했습니다. 2026년 예비창업패키지 공고도 폐업 이력이 있는 사람이 같은 업종으로 창업하려면 폐업일부터 3년(부도·파산은 2년)이 지나야 한다고 적고, 세세분류가 같으면 동종, 다르면 이종으로 봤습니다. 업력 계산까지 이어지는 내용은 <a href="/blog_detail/startup-business-age-criteria">창업 업력 기준 글</a>에 따로 정리했습니다.</p>
  <p><strong>3. 부동산임대업만 하고 있는 경우.</strong> 예비창업패키지는 사업자가 없는 예비창업자를 위한 사업이지만, 2026년 공고는 '자격 예외 요건'으로 이미 사업자가 있는 경우 하나를 두었습니다. 2026년 1월 22일 기준 직원 없이 <strong>부동산임대업만</strong> 하는 개인사업자는, 협약 종료 2개월 전까지 다른 업종 법인으로 창업할 수 있으면 신청할 수 있었습니다. 사업자등록증에 부동산임대업 외 다른 업종이 함께 올라가 있으면 이 예외를 쓸 수 없었습니다. 임대 사업자에 다른 업종을 '혹시 몰라' 추가해 두는 일이 여기서 문제가 됩니다.</p>

  <h2>업종을 추가하거나 바꾸는 순서</h2>
  <p><a href="${VAT_DECREE_URL}" target="_blank" rel="noopener noreferrer">부가가치세법 시행령 제14조</a>는 사업의 종류가 바뀌면 지체 없이 <strong>사업자등록 정정신고</strong>를 하도록 정했습니다. 관할 세무서나 원하는 세무서에 내도 되고, 국세정보통신망(홈택스)으로도 낼 수 있습니다. 세무서는 신고일부터 <strong>2일 이내</strong>에 등록증을 고쳐 다시 발급합니다.</p>
  <ol>
    <li>추가할 업종의 6자리 코드를 위 방법으로 찾고, 대응하는 5자리 분류가 앞으로 낼 공고의 제외 업종이나 동종 업종 조건에 걸리지 않는지 봅니다.</li>
    <li>정정신고 때 사업자등록증을 첨부합니다. 허가·등록이 필요한 업종이면 그 서류도 함께 요구될 수 있습니다.</li>
    <li>다시 발급된 등록증의 업태·종목이 사업계획서 아이템 설명과 맞는지 확인합니다.</li>
    <li>지원사업 신청 직전이라면 정정이 끝난 날짜를 기록해 둡니다. 공고의 판단 기준일보다 늦게 고치면 그 공고에서는 바뀐 업종으로 인정받기 어려울 수 있으니, 기준일을 공고에서 먼저 확인하세요.</li>
  </ol>

  <h2>자주 묻는 질문</h2>
  <p><strong>예비창업자는 업종코드를 미리 정해야 하나요?</strong><br />사업자등록을 하기 전에는 업종코드가 없습니다. 다만 예비창업패키지처럼 선정 뒤 정해진 기한 안에 아이템 관련 업종으로 사업자등록을 해야 하는 사업이 있으니, 아이템이 정해지면 어떤 코드로 등록할지 미리 찾아 두면 좋습니다. 등록 시점은 <a href="/blog_detail/pre-startup-package-business-registration-deadline">예비창업패키지 사업자등록 글</a>에서 다뤘습니다.</p>
  <p><strong>업종코드를 잘못 골랐으면 불이익이 있나요?</strong><br />실제 사업과 다르면 정정신고로 바로잡습니다. 업종코드는 경비율과 연결되므로 세금 신고 결과가 달라질 수 있습니다. 내 사업에 어느 코드가 맞는지 애매하면 국세상담센터(126)나 세무사에게 적용범위를 확인받는 편이 안전합니다.</p>
  <p><strong>업종을 여러 개 등록해도 되나요?</strong><br />실제로 하는 사업이라면 여러 업종을 함께 등록할 수 있습니다. 다만 위 부동산임대업 예외처럼 등록된 업종 수가 신청 자격에 영향을 주는 공고가 있으니, 하지 않는 사업을 미리 올려 두는 것은 피하세요.</p>

  <div class="dh-cta">
    <p>업종을 정리했다면 사업계획서의 아이템 설명도 같은 말로 맞춰 둘 차례입니다. 독스헌트에 공고와 사업 내용을 넣으면 공고 양식에 맞춘 초안을 먼저 만들어 볼 수 있습니다.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=business-registration-industry-code&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 초안 만들기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${NTS_ONLINE_SELLER_URL}" target="_blank" rel="noopener noreferrer">국세청, 온라인 판매자(SNS마켓) 세무 안내 (2026.11.26 확인)</a></li>
      <li><a href="${NTS_CODE_REFORM_URL}" target="_blank" rel="noopener noreferrer">국세청, 업종분류코드 개편 안내 (2026.11.26 확인)</a></li>
      <li><a href="${STARTUP_DECREE_URL}" target="_blank" rel="noopener noreferrer">국가법령정보센터, 중소기업창업 지원법 시행령 제2조·제4조 (2026.11.26 확인)</a></li>
      <li><a href="${VAT_DECREE_URL}" target="_blank" rel="noopener noreferrer">국가법령정보센터, 부가가치세법 시행령 제14조 (2026.11.26 확인)</a></li>
      <li><a href="${PRE_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 수정 모집공고 제2026-207호 (2026.11.26 확인)</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

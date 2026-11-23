import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const KSTARTUP_ONGOING_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do";
const BIZINFO_LIST_URL = "https://www.bizinfo.go.kr/web/lay1/bbs/S1T122C128/AS/74/list.do";
const BIZINFO_HOME_URL = "https://www.bizinfo.go.kr/web/index.do";
const SBIZ24_URL = "https://www.sbiz24.kr/";
const INTEGRATED_NOTICE_PRESS_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1064201&cbIdx=86&parentSeq=1064201";
const GYEONGGI_WOMEN_BI_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=179839";
const TIPS_NOTICE_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=176076";
const KSTARTUP_READING_POST = "/blog_detail/k-startup-application-guide";

export const post02 = {
  page: 1,
  index: 2,
  slug: "1780626861627x947397884088036900",
  sourceUrl: "https://docshunt.ai/blog_detail/1780626861627x947397884088036900",
  title: "정부지원사업 공고 어디서 찾나요? 사이트마다 올라오는 공고가 다릅니다",
  titleLines: ["정부지원사업 공고", "어디서 찾나요?", "사이트마다 올라오는", "공고가 다릅니다"],
  titleLineBreaks: "always",
  description:
    "정부지원사업 공고는 K-Startup, 기업마당, 소상공인24에 나뉘어 올라옵니다. 예비창업자와 3년 이내 대표가 사이트별로 무엇을 보고, 업력·지역·업종 필터로 거르고, 새 공고 알림을 받는 방법을 정리했습니다.",
  seo: {
    mainKeyword: "정부지원사업 공고",
    supportKeywords: ["정부지원사업 사이트", "지원사업 공고 찾기", "기업마당 지원사업 공고", "소상공인24 공고"],
    searchIntent:
      "예비창업자나 창업 초기 대표가 정부지원사업 공고를 어느 사이트에서 찾아야 하는지, 내 조건에 맞는 공고만 거르고 새 공고 알림을 받는 방법을 알고 싶다",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.06.05",
  modifiedDate: "2026.11.23",
  verification: {
    date: "2026.11.23",
    note: "K-Startup 사업공고의 상세검색 항목(주관부처·주관기관·지원분야·지역·대상·연령·창업업력), 정렬, 스크랩·RSS·뉴스레터, 기업마당 지원사업 공고의 분야·지역 필터와 공고 건수, 정책정보 이메일 신청 항목, 소상공인24의 공고 구분과 관심정보 설정 안내는 2026년 11월 23일 각 사이트 화면에서 확인했습니다. 공고 건수는 확인한 날의 수치이며 매일 바뀝니다. 통합공고 규모와 세부 공고가 각 기관 누리집에서 따로 나온다는 내용은 중소벤처기업부 2025년 12월 19일 보도자료로 확인했습니다. 지역 요건 예시와 전국 공고 예시는 같은 날 K-Startup에 게시된 경기도여성창업보육센터 입주 공고와 팁스(TIPS) 창업기업 지원계획 공고 상세 화면으로 확인했습니다. 조건별 필터 예시는 이해를 돕기 위한 가상의 예시입니다.",
    sources: [
      { label: "K-Startup, 사업공고 모집중 목록", url: KSTARTUP_ONGOING_URL },
      { label: "기업마당, 지원사업 공고 목록", url: BIZINFO_LIST_URL },
      { label: "기업마당, 메인 화면(정책고객 메일링)", url: BIZINFO_HOME_URL },
      { label: "소상공인24, 소상공인 지원사업 통합 플랫폼", url: SBIZ24_URL },
      { label: "중소벤처기업부, 2026년 중앙부처 및 지자체 창업지원사업 통합공고 보도자료", url: INTEGRATED_NOTICE_PRESS_URL },
      { label: "K-Startup, 2026년 팁스(TIPS) 창업기업 지원계획 수정 공고", url: TIPS_NOTICE_URL },
      { label: "K-Startup, 2027년 상반기 경기도여성창업보육센터 입주기업 모집 공고", url: GYEONGGI_WOMEN_BI_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00002-government-grant-notice-portals-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00002-government-grant-notice-portals-hero.jpg",
  paragraphs: [
    "정부지원사업 공고는 한 사이트에 다 모여 있지 않습니다. 창업 지원은 K-Startup, 중소기업 지원 전반은 기업마당, 소상공인 지원은 소상공인24에 주로 올라옵니다.",
    "중소벤처기업부는 2026년 창업지원사업 통합공고에서 111개 기관의 508개 사업을 묶어 발표했지만, 세부 공고는 부처와 지자체 누리집에서 따로 낸다고 밝혔습니다.",
    "K-Startup은 상세검색에서 창업업력(예비창업자, 1년미만부터 10년미만까지), 지역, 대상, 연령, 지원분야로 거를 수 있습니다.",
    "기업마당은 분야(금융·기술·인력·수출·내수·창업·경영)와 지역으로 거르고, 중앙부처와 지자체 공고를 나눠 볼 수 있습니다. 창업 분야만 보면 정책자금이나 인력 지원 공고를 놓칩니다.",
    "소상공인24는 소상공인시장진흥공단, 지방정부, 유관기관 공고를 나눠 보여 주고 로그인 후 관심정보를 설정할 수 있습니다.",
    "알림은 K-Startup 뉴스레터, 기업마당 정책정보 이메일, 소상공인24 관심정보 설정으로 받을 수 있습니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>정부지원사업 공고</strong>는 한 사이트에 다 모여 있지 않습니다. 창업 지원은 <strong>K-Startup</strong>, 중소기업 지원 전반은 <strong>기업마당</strong>, 소상공인 지원은 <strong>소상공인24</strong>에 주로 올라옵니다. 예비창업자나 창업 3년 이내 대표라면 이 세 곳을 각각 다른 목적으로 열어 두는 편이 빠릅니다.</p>
  <p>한 곳만 보면 안 되는 이유가 있습니다. 중소벤처기업부는 2026년 창업지원사업 통합공고에 111개 기관의 508개 사업을 담았지만, 세부 사업 공고는 해당 부처와 지자체 누리집에서 따로 실시한다고 밝혔습니다(<a href="${INTEGRATED_NOTICE_PRESS_URL}" target="_blank" rel="noopener noreferrer">중기부 보도자료, 2025.12.19</a>). 지자체 사업만 420개였습니다. 내 지역 공고가 K-Startup에 없다고 해서 공고가 없는 게 아닙니다.</p>

  <h2>세 사이트에는 서로 다른 공고가 올라옵니다</h2>
  <table>
    <thead>
      <tr>
        <th>사이트</th>
        <th>주로 올라오는 공고</th>
        <th>거르는 기준</th>
        <th>새 공고 받는 법</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="${KSTARTUP_ONGOING_URL}" target="_blank" rel="noopener noreferrer">K-Startup</a><br />(창업진흥원)</td>
        <td>예비창업자·창업기업 대상 사업화, 공간·보육, 멘토링·교육, 행사 공고</td>
        <td>지원분야, 지역, 대상, 연령, <strong>창업업력</strong></td>
        <td>뉴스레터(이메일), RSS 피드, 공고 스크랩</td>
      </tr>
      <tr>
        <td><a href="${BIZINFO_LIST_URL}" target="_blank" rel="noopener noreferrer">기업마당</a></td>
        <td>중앙부처·지자체의 중소기업 지원사업 전반(금융, 기술, 인력, 수출, 내수, 창업, 경영)</td>
        <td>분야, 지역, 중앙부처·지자체 구분</td>
        <td>정책정보 이메일, 기업마당 앱</td>
      </tr>
      <tr>
        <td><a href="${SBIZ24_URL}" target="_blank" rel="noopener noreferrer">소상공인24</a><br />(소상공인시장진흥공단)</td>
        <td>소진공·지방정부·유관기관의 소상공인 지원사업, 정책자금·대출상품</td>
        <td>공고 기관 구분(소진공, 지방정부, 유관기관)</td>
        <td>로그인 후 마이페이지에서 관심정보 설정</td>
      </tr>
    </tbody>
  </table>
  <p>표의 기능은 2026년 11월 23일 각 사이트 화면에서 확인한 것입니다. 기술 창업이든 동네 가게 창업이든 K-Startup과 기업마당은 같이 보고, 음식점·소매처럼 소상공인으로 시작한다면 소상공인24를 하나 더 보면 됩니다.</p>

  <h2>K-Startup은 창업업력으로 먼저 거릅니다</h2>
  <p><a href="${KSTARTUP_ONGOING_URL}" target="_blank" rel="noopener noreferrer">K-Startup 사업공고 → 모집중</a> 화면에서 '상세검색'을 열면 일곱 가지 조건을 겹쳐 고를 수 있습니다.</p>
  <ul>
    <li><strong>창업업력:</strong> 예비창업자, 1년미만, 2년미만, 3년미만, 5년미만, 7년미만, 10년미만</li>
    <li><strong>지역:</strong> 전국과 시·도별</li>
    <li><strong>대상:</strong> 청소년, 대학생, 일반인, 대학, 연구기관, 일반기업, 1인 창조기업</li>
    <li><strong>연령:</strong> 만 20세 미만, 만 20세 이상~39세 이하, 만 39세 이하, 만 40세 이상</li>
    <li><strong>지원분야:</strong> 사업화, 기술개발(R&amp;D), 시설·공간·보육, 멘토링·컨설팅·교육, 글로벌, 인력, 융자·보증, 행사·네트워크 등</li>
    <li>주관부처, 주관기관</li>
  </ul>
  <p>목록 위에는 '중앙부처·지자체·공공기관'과 '민간기관·교육기관' 탭이 따로 있습니다. 대학 창업보육센터나 민간 액셀러레이터 공고는 두 번째 탭에 있으니 둘 다 눌러 보세요. 정렬은 '공고마감순'으로 바꾸면 이번 주에 닫히는 공고부터 보입니다.</p>
  <p>주의할 점은 창업업력 필터가 운영기관이 입력한 요약 태그라는 것입니다. 태그에 '예비창업자'가 있어도 본문에서 특정 사업 협약자로만 좁히는 공고가 있었습니다. 목록에서 고른 뒤에는 공고 본문의 신청대상과 제외대상을 꼭 읽어야 합니다. 읽는 순서는 <a href="${KSTARTUP_READING_POST}">K-Startup 사업공고 읽는 순서 글</a>에 따로 정리했습니다.</p>

  <h2>기업마당은 '창업' 분야만 보면 놓칩니다</h2>
  <p><a href="${BIZINFO_LIST_URL}" target="_blank" rel="noopener noreferrer">기업마당 → 정책정보 → 지원사업 공고</a>는 분야를 금융, 기술, 인력, 수출, 내수, 창업, 경영, 기타로 나눕니다. 2026년 11월 23일에 진행 중인 공고는 1,292건이었고, 그중 '창업' 분야는 61건이었습니다.</p>
  <p>창업 3년 이내 대표에게 필요한 공고는 창업 분야 밖에도 많습니다. 정책자금과 보증은 대개 '금융', 채용 지원은 '인력', 판로·전시회는 '내수'와 '수출'로 분류됩니다. 처음에는 분야를 고르지 말고 <strong>지역</strong>만 내 사업장 소재지로 고른 뒤 '마감일순'으로 훑어보세요. 시·도 공고는 제목 앞에 [경기], [부산]처럼 지역이 붙어 있어 구분하기 쉽습니다.</p>
  <p>'전체 / 중앙부처 / 지자체' 버튼으로 지자체 공고만 따로 볼 수도 있습니다. 통합공고에서 본 것처럼 지자체 사업은 수가 많고 경쟁 범위가 좁아서, 지역 요건만 맞으면 먼저 볼 가치가 있습니다.</p>

  <h2>소상공인으로 시작한다면 소상공인24를 따로 봅니다</h2>
  <p><a href="${SBIZ24_URL}" target="_blank" rel="noopener noreferrer">소상공인24</a>는 소상공인시장진흥공단이 운영하는 소상공인 지원사업 통합 플랫폼입니다. 공고를 '소진공', '지방정부', '유관기관'으로 나눠 조회하고, 소진공과 지방정부 공고는 이 사이트에서 바로 온라인 신청까지 할 수 있습니다. 정책자금·대출상품 조회도 같은 곳에 있습니다.</p>
  <p>지원사업 신청과 관심정보 설정은 로그인 후 마이페이지에서 합니다. 직원이 적은 음식점, 미용실, 온라인 쇼핑몰처럼 소상공인으로 사업을 시작했다면 K-Startup보다 이쪽 공고가 더 많이 맞을 수 있습니다. 정책자금을 알아보고 있다면 <a href="/blog_detail/1759293063517x574903222143811600">소상공인 지원사업 글</a>에서 지원금과 융자의 차이를 먼저 확인하세요.</p>

  <h2>내 조건 네 가지를 필터로 옮기는 법</h2>
  <p>필터를 고르기 전에 아래 네 가지를 한 줄씩 적어 두면 사이트를 옮겨 다녀도 같은 기준으로 거를 수 있습니다.</p>
  <ol>
    <li><strong>예비인지 기창업인지:</strong> 본인 명의 사업자등록증이나 법인 대표 등기가 있는지.</li>
    <li><strong>업력:</strong> 개인사업자는 사업자등록증의 개업일, 법인은 설립등기일부터 셉니다. 계산법은 <a href="/blog_detail/startup-business-age-criteria">창업 업력 기준 글</a>을 참고하세요.</li>
    <li><strong>지역:</strong> 예비창업자는 주소지, 기창업자는 사업장(본점) 소재지로 보는 공고가 있습니다. 2027년 상반기 <a href="${GYEONGGI_WOMEN_BI_URL}" target="_blank" rel="noopener noreferrer">경기도여성창업보육센터 입주 공고</a>도 예비창업자는 경기도 내 주소, 기창업자는 경기도 내 주된 사무소를 요건으로 적었습니다.</li>
    <li><strong>업종:</strong> K-Startup 공고의 제외대상에 자주 나오는 「중소기업창업 지원법 시행령」 제4조(창업에서 제외되는 업종)에 내 업종이 해당하지 않는지.</li>
  </ol>
  <p>가상의 예시로 두 사람을 필터에 옮겨 보면 이렇습니다.</p>
  <table>
    <thead>
      <tr>
        <th>상황</th>
        <th>K-Startup</th>
        <th>기업마당</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>대전 거주, 사업자 없음, 반려동물 앱 준비(가상의 예시)</td>
        <td>창업업력 '예비창업자', 지역 '전국'+'대전광역시'</td>
        <td>지역 '대전', 분야 '창업'과 '기술'</td>
      </tr>
      <tr>
        <td>경기 소재 개인사업자, 개업 2년 2개월, 식품 제조(가상의 예시)</td>
        <td>창업업력 '3년미만', 지역 '전국'+'경기도', 지원분야 '사업화'</td>
        <td>지역 '경기', 분야 '금융'·'내수'·'창업'</td>
      </tr>
    </tbody>
  </table>
  <p>지역은 '전국'을 같이 골라야 합니다. 창업진흥원의 <a href="${TIPS_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년 팁스(TIPS) 창업기업 지원계획</a>처럼 전국 단위 공고는 지역이 '전국'으로 등록되어 있어서 내 시·도만 고르면 빠집니다.</p>

  <h2>새 공고 알림은 사이트마다 따로 겁니다</h2>
  <ul>
    <li><strong>K-Startup:</strong> 사업공고 화면의 'RSS 피드'와 하단의 뉴스레터 구독 신청으로 사업공고와 창업뉴스를 이메일로 받을 수 있습니다. 목록의 공고마다 '스크랩' 버튼도 있습니다.</li>
    <li><strong>기업마당:</strong> 메인 화면의 '정책고객 메일링'에서 업체명, 이름, 이메일을 넣어 정책정보 이메일을 신청합니다. 사업자등록번호를 넣으면 기업 특성에 맞는 정책정보를 수시로 보내 준다고 안내되어 있습니다(<a href="${BIZINFO_HOME_URL}" target="_blank" rel="noopener noreferrer">기업마당</a>). 모바일 앱도 있습니다.</li>
    <li><strong>소상공인24:</strong> 로그인 후 마이페이지에서 관심정보를 설정합니다.</li>
  </ul>
  <p>알림을 걸어도 매일 열어 볼 필요는 없습니다. 일주일에 한 번, 같은 요일에 세 사이트를 '마감순'으로 훑고 맞는 공고만 표에 옮기는 정도면 충분합니다. 큰 사업은 연말에 나오는 창업지원사업 통합공고로 한 해 일정을 미리 볼 수 있습니다. 2026년 통합공고는 2025년 12월 19일에 나왔고 K-Startup '사업소개' 메뉴에서 볼 수 있습니다.</p>

  <h2>공고를 골랐다면 바로 적어 둘 것</h2>
  <p>찾은 공고마다 마감 일시(시각까지), 접수 방식(K-Startup, 운영기관 사이트, 이메일), 제출서류 중 발급에 시간이 걸리는 것, 첨부 공고문의 평가 항목을 한 줄씩 적어 두세요. 같은 주에 마감이 겹칠 때 무엇을 먼저 준비할지 이 메모로 정할 수 있습니다.</p>

  <div class="dh-cta">
    <p>신청할 공고를 골랐다면 다음은 사업계획서입니다. 독스헌트에 기업 정보와 공고문을 넣으면 그 공고의 신청 자격과 평가 항목에 맞춰 사업계획서 초안을 정리할 수 있습니다.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=1780626861627x947397884088036900&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 사업계획서 준비하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${KSTARTUP_ONGOING_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 사업공고 모집중 목록 (2026.11.23 확인)</a></li>
      <li><a href="${BIZINFO_LIST_URL}" target="_blank" rel="noopener noreferrer">기업마당, 지원사업 공고 목록 (2026.11.23 확인)</a></li>
      <li><a href="${BIZINFO_HOME_URL}" target="_blank" rel="noopener noreferrer">기업마당, 메인 화면(정책고객 메일링) (2026.11.23 확인)</a></li>
      <li><a href="${SBIZ24_URL}" target="_blank" rel="noopener noreferrer">소상공인24, 소상공인 지원사업 통합 플랫폼 (2026.11.23 확인)</a></li>
      <li><a href="${INTEGRATED_NOTICE_PRESS_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 정부·지자체 2026년 창업지원에 3조 4,645억원 투입 (2025.12.19, 2026.11.23 확인)</a></li>
      <li><a href="${TIPS_NOTICE_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 2026년 팁스(TIPS) 창업기업 지원계획 수정 공고 (2026.11.23 확인)</a></li>
      <li><a href="${GYEONGGI_WOMEN_BI_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 2027년 상반기 경기도여성창업보육센터 입주기업 모집 공고 (2026.11.23 확인)</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

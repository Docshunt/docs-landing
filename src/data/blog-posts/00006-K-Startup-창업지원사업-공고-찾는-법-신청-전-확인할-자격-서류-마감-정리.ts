import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const KSTARTUP_ONGOING_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do";
const SVC_SEOUL_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=178802";
const SONGPA_ICT_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=179824";
const GYEONGGI_WOMEN_BI_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=179839";
const INCHEON_ONE_PERSON_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=179748";
const KONGJU_BI_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=179819";
const EARLY_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1065015&cbIdx=310";
const PORTALS_POST = "/blog_detail/1780626861627x947397884088036900";

export const post06 = {
  page: 1,
  index: 6,
  slug: "k-startup-application-guide",
  sourceUrl: "https://docshunt.ai/blog_detail/k-startup-application-guide",
  title: "K-Startup 사업공고, 위쪽 요약 칸만 보고 신청해도 될까",
  titleLines: ["K-Startup 사업공고,", "위쪽 요약 칸만 보고", "신청해도 될까"],
  titleLineBreaks: "always",
  description:
    "K-Startup 사업공고 상세 페이지의 요약 칸은 운영기관이 고른 태그라 본문 신청대상과 다를 때가 있습니다. 지원분야부터 제외대상, 제출서류, 접수 방식, 첨부 공고문까지 읽는 순서를 실제 공고로 정리했습니다.",
  seo: {
    mainKeyword: "K-Startup 사업공고",
    supportKeywords: ["K-Startup 공고 보는 법", "창업지원사업 공고 신청대상", "K-Startup 접수"],
    searchIntent:
      "K-Startup에서 찾은 사업공고 상세 페이지를 열었을 때 어떤 칸을 어떤 순서로 읽어야 내가 신청할 수 있는지, 무엇을 준비해 어디로 접수하는지 판단할 수 있는지 알고 싶다",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.05.08",
  modifiedDate: "2026.11.23",
  verification: {
    date: "2026.11.23",
    note: "상세 페이지의 칸 구성과 순서, 각 공고의 요약 태그·신청대상·제외대상·제출서류·접수 방식은 2026년 11월 23일 K-Startup에 게시된 다섯 건의 공고 상세 화면에서 확인했습니다. 첨부 공고문은 열어보지 않았습니다. 공고는 마감 후 모집마감 목록으로 옮겨지고 내용이 수정될 수 있습니다. K-Startup 직접 접수의 실명인증·기업인증, 마감 시각, 제출완료 절차는 접수가 끝난 2026년 초기창업패키지(일반형) 모집공고 첨부 공고문 기준입니다. 메모 예시는 이해를 돕기 위한 가상의 예시입니다.",
    sources: [
      { label: "K-Startup, 사업공고 모집중 목록", url: KSTARTUP_ONGOING_URL },
      { label: "K-Startup, 2026 SVC Seoul 멤버십(확장형) 모집공고", url: SVC_SEOUL_URL },
      { label: "K-Startup, 2027년 송파ICT청년창업지원센터 입주 모집 공고", url: SONGPA_ICT_URL },
      { label: "K-Startup, 2027년 상반기 경기도여성창업보육센터 입주기업 모집 공고", url: GYEONGGI_WOMEN_BI_URL },
      { label: "K-Startup, 2027년 1인 창조기업 지원센터 상반기 신규 입주기업 1차 모집 공고(인천테크노파크)", url: INCHEON_ONE_PERSON_URL },
      { label: "K-Startup, 2026년 5차 국립공주대학교 창업보육센터 입주기업 모집 2차 연장공고", url: KONGJU_BI_URL },
      { label: "중소벤처기업부, 2026년 초기창업패키지(일반형) 창업기업 모집공고", url: EARLY_NOTICE_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00006-k-startup-notice-reading-order-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00006-k-startup-notice-reading-order-hero.jpg",
  paragraphs: [
    "K-Startup 사업공고 상세 페이지 맨 위의 요약 칸(지원분야, 대상연령, 지역, 접수기간, 대상, 창업업력)은 운영기관이 고른 태그입니다. 본문 신청대상과 다를 수 있어 거르는 용도로만 씁니다.",
    "2026 SVC Seoul 멤버십(확장형) 공고는 창업업력 태그에 예비창업자가 있었지만, 본문은 2026년 예비창업패키지·재도전성공패키지 협약자인 예비창업자만 받았습니다.",
    "요약 칸 다음에는 신청대상과 바로 아래 제외대상을 같이 읽습니다. 직장 건강보험 가입자, 다른 공공 창업공간 입주 중인 사람처럼 대상에는 맞아도 제외되는 조건이 여기에 있습니다.",
    "제출서류에서는 발급일 조건부터 표시합니다. 3개월 이내 발급, 특정 월 이후 발급처럼 기한이 붙은 서류가 있습니다.",
    "접수 바로가기는 K-Startup 사업신청으로 가기도 하고, 운영기관 사이트, 구글 폼, 이메일로 가기도 합니다. 마감 시각도 공고마다 다릅니다.",
    "상세 페이지는 요약본입니다. 평가 방법과 세부 요건은 첨부 공고문을 최종 기준으로 확인합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>K-Startup 사업공고</strong> 상세 페이지 맨 위의 요약 칸만 보고 신청 여부를 정하면 틀릴 수 있습니다. 지원분야, 지역, 창업업력 같은 칸은 운영기관이 정해진 보기 중에서 고른 태그이고, 실제 자격은 그 아래 본문의 <strong>신청대상과 제외대상</strong>, 그리고 첨부 공고문이 정합니다.</p>
  <p>2026년 11월 23일 K-Startup에 올라온 <a href="${SVC_SEOUL_URL}" target="_blank" rel="noopener noreferrer">2026 SVC Seoul 멤버십(확장형) 공고</a>가 그런 예입니다. 창업업력 칸에는 '예비창업자, 7년미만, 10년미만'이 적혀 있었지만, 본문은 예비창업자 중에서도 <strong>2026년 예비창업패키지나 재도전성공패키지에 협약한 사람만</strong> 신청할 수 있다고 적었습니다. 아래에서는 상세 페이지를 위에서 아래로 어떤 순서로 읽고 무엇을 메모할지 정리했습니다. 어느 사이트에서 공고를 찾는지는 <a href="${PORTALS_POST}">정부지원사업 공고 찾는 곳 글</a>에 따로 정리했습니다.</p>

  <h2>상세 페이지의 구성</h2>
  <p>K-Startup 공고 상세 페이지는 공고마다 내용은 달라도 칸의 순서는 같습니다.</p>
  <ol>
    <li><strong>요약 칸:</strong> 지원분야, 대상연령, 기관구분, 담당부서, 지역, 접수기간, 주관기관명, 대상, 창업업력, 연락처</li>
    <li><strong>신청방법 및 대상:</strong> 신청기간(시각까지), 신청방법과 '접수 바로가기', 신청대상, 제외대상</li>
    <li><strong>제출서류</strong></li>
    <li><strong>선정절차 및 평가방법</strong></li>
    <li><strong>모집개요와 지원내용:</strong> 모집 규모, 기간, 비용, 지원 항목</li>
    <li><strong>문의처와 첨부파일:</strong> 공고문, 신청서 양식</li>
  </ol>
  <p>읽는 순서도 대체로 이 순서를 따르되, 2번에서 신청대상과 제외대상을 한 묶음으로 읽는 것이 핵심입니다.</p>

  <h2>요약 칸으로는 '아닌 공고'만 거릅니다</h2>
  <p>요약 칸은 빨리 탈락시키는 데 씁니다. 지역이 내 시·도도 '전국'도 아니거나, 대상연령이 맞지 않거나, 지원분야가 지금 필요 없는 것(예: 공간이 필요 없는데 '시설·공간·보육')이면 닫으면 됩니다.</p>
  <p>반대로 요약 칸이 맞는다고 신청할 수 있는 건 아닙니다. 같은 날 확인한 공고에서 요약과 본문이 이렇게 달랐습니다.</p>
  <table>
    <thead>
      <tr>
        <th>공고</th>
        <th>요약 칸</th>
        <th>본문에서 더 좁혀진 조건</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="${SVC_SEOUL_URL}" target="_blank" rel="noopener noreferrer">SVC Seoul 멤버십(확장형)</a></td>
        <td>창업업력: 예비창업자, 7년미만, 10년미만</td>
        <td>예비창업자는 2026년 예비창업패키지·재도전성공패키지 협약자만. 10년은 신산업창업 분야 기업만.</td>
      </tr>
      <tr>
        <td><a href="${SONGPA_ICT_URL}" target="_blank" rel="noopener noreferrer">송파ICT청년창업지원센터</a></td>
        <td>창업업력: 예비창업자~3년미만, 대상연령: 만 20~39세</td>
        <td>공고일 기준 만 39세 이하. 기창업자는 입주 후 1개월 안에 사업장 이전, 예비창업자는 입주 후 3개월 안에 센터를 사업장으로 등록.</td>
      </tr>
      <tr>
        <td><a href="${KONGJU_BI_URL}" target="_blank" rel="noopener noreferrer">국립공주대학교 창업보육센터</a></td>
        <td>창업업력: 예비창업자, 7년미만</td>
        <td>기창업자는 기술집약형 업종, 입주 확정 시 3개월 안에 본점 이전.</td>
      </tr>
    </tbody>
  </table>
  <p>요약 칸이 본문보다 좁은 경우도 있습니다. <a href="${GYEONGGI_WOMEN_BI_URL}" target="_blank" rel="noopener noreferrer">경기도여성창업보육센터 공고</a>는 창업업력 칸에 '3년미만'만 있었지만 본문 신청대상에는 경기도에 주소를 둔 여성 예비창업자도 들어 있었습니다. 그래서 목록 필터에서 '예비창업자'만 골랐다면 이 공고는 보이지 않았을 가능성이 큽니다.</p>

  <h2>신청대상 바로 아래의 제외대상</h2>
  <p>신청대상을 읽고 "나도 되네" 싶을 때 바로 아래 제외대상을 이어서 읽어야 합니다. 대상에는 맞아도 여기서 빠지는 경우가 많습니다.</p>
  <ul>
    <li><strong>직장 건강보험 가입자:</strong> <a href="${INCHEON_ONE_PERSON_URL}" target="_blank" rel="noopener noreferrer">인천 1인 창조기업 지원센터 공고</a>는 건강보험자격득실확인서상 직장가입자를 제외했습니다. 회사를 다니며 창업을 준비하는 사람은 여기서 걸립니다.</li>
    <li><strong>다른 공공 지원을 받는 중:</strong> 송파 공고는 공고일 현재 다른 지자체나 공공기관에서 사무공간 같은 유사 창업지원을 받고 있으면 제외하되, 입주 전에 끝나거나 중도 포기하면 신청할 수 있게 했습니다.</li>
    <li><strong>업종과 체납:</strong> 「중소기업창업 지원법 시행령」 제4조의 창업 제외 업종, 채무불이행·국세·지방세 체납 규제는 여러 공고에 공통으로 들어 있었습니다.</li>
  </ul>
  <p>신청대상은 "누가 되는지", 제외대상은 "되는 사람 중 누가 빠지는지"입니다. 두 칸을 같은 메모에 적어 두세요.</p>

  <h2>제출서류는 발급 조건부터 표시합니다</h2>
  <p>서류 목록을 볼 때는 이름보다 괄호 안의 조건을 먼저 봅니다.</p>
  <ul>
    <li>송파 공고: 4대보험 가입자명부는 3개월 안에 발급한 것, 부가가치세 과세표준증명은 '2025.1~2026.3분기'분, 사업자등록증은 PDF로. 모든 서류를 '기업명_대표자명' zip 파일 하나로 압축해 올립니다.</li>
    <li>인천 공고: 4대보험 가입자명부와 건강보험자격득실확인서는 2026년 11월 이후 발급분. 예비창업자는 사업자등록증 대신 사실증명원.</li>
    <li>공주대 공고: 발표자료는 지정 양식이고, 양식은 K-Startup이 아니라 산학협력단 홈페이지에서 내려받으라고 안내했습니다.</li>
  </ul>
  <p>'기창업자에 한함', '해당시'가 붙은 서류는 내 상황에 맞는지 표시하고, 발급 기간이 정해진 서류는 접수 일주일 안쪽에 떼는 식으로 일정을 잡습니다.</p>

  <h2>'접수 바로가기'가 어디로 가는지 확인합니다</h2>
  <p>K-Startup에 올라온 공고라고 모두 K-Startup에서 접수하지는 않습니다. 같은 날 본 공고의 접수 방식은 네 가지였습니다.</p>
  <table>
    <thead>
      <tr>
        <th>접수 방식</th>
        <th>예</th>
        <th>마감</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>K-Startup 사업신청</td>
        <td>SVC Seoul 멤버십(확장형)</td>
        <td>2026.12.11 17:00</td>
      </tr>
      <tr>
        <td>운영기관이 만든 온라인 폼</td>
        <td>송파ICT청년창업지원센터</td>
        <td>2026.12.13 23:00</td>
      </tr>
      <tr>
        <td>이메일</td>
        <td>인천 1인 창조기업 지원센터, 공주대 창업보육센터</td>
        <td>2026.12.04 18:00 / 2026.12.08 18:00</td>
      </tr>
      <tr>
        <td>운영기관 홈페이지</td>
        <td>경기도여성창업보육센터</td>
        <td>2026.12.04 15:00</td>
      </tr>
    </tbody>
  </table>
  <p>마감 시각이 15시부터 23시까지 제각각입니다. '접수기간' 칸의 날짜 옆 시각까지 메모하세요.</p>
  <p>K-Startup에서 직접 접수하는 큰 사업은 준비가 더 필요합니다. <a href="${EARLY_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년 초기창업패키지(일반형) 공고</a>는 K-Startup 회원가입과 실명인증, 기업인증(개인사업자는 공동·금융인증서, SCI기업실명인증, 국세청 사업자 확인 중 하나)을 요구했고, 마감일에는 접속이 몰리니 2~3일 전에 신청하라고 권했습니다. 접수는 16시 정각에 끝났고 '제출완료' 버튼을 눌러야 접수가 끝났습니다. 임시저장 상태와의 차이는 <a href="/blog_detail/k-startup-business-plan-submission-complete">K-Startup 사업계획서 제출 글</a>에 정리해 두었습니다.</p>

  <h2>평가 방법은 첨부 공고문에서 읽습니다</h2>
  <p>상세 페이지의 '선정절차 및 평가방법'은 짧습니다. 송파 공고는 "서면심사, 대면심사" 한 줄이었고, SVC Seoul은 요건검토 뒤 가입 안내라고만 적었습니다. 페이지 하단에도 "자세한 내용은 첨부파일 참조"라는 문구가 붙어 있습니다.</p>
  <p>그래서 마지막으로 첨부파일 목록에서 '공고문'이 들어간 파일을 열어 평가 항목, 가점, 일정을 확인합니다. 같은 목록의 신청서·사업계획서 양식도 이때 내려받습니다. K-Startup은 상세 페이지 정보가 해당 기관의 요청으로 제공된다고 밝히고 있어서, 페이지와 공고문이 다르면 공고문과 운영기관 안내를 따르는 편이 안전합니다.</p>

  <h2>공고 하나당 메모 한 장</h2>
  <p>위 순서대로 읽으면서 아래 칸을 채우면, 신청할지 말지와 무엇부터 준비할지가 한 장에 남습니다. 오른쪽은 가상의 예시입니다.</p>
  <table>
    <thead>
      <tr>
        <th>항목</th>
        <th>채우는 내용(가상의 예시)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>신청대상 충족 근거</td>
        <td>개업일 2025.3.10, 공고일 기준 업력 1년 8개월</td>
      </tr>
      <tr>
        <td>제외대상 점검</td>
        <td>직장가입자 아님, 다른 공공 공간 입주 이력 없음</td>
      </tr>
      <tr>
        <td>기한 붙은 서류</td>
        <td>4대보험 가입자명부(3개월 이내), 납세증명서</td>
      </tr>
      <tr>
        <td>접수 방식과 마감</td>
        <td>운영기관 폼, 12월 13일 23:00</td>
      </tr>
      <tr>
        <td>첨부 공고문의 평가 항목</td>
        <td>서면 후 대면, 발표자료 지정 양식</td>
      </tr>
    </tbody>
  </table>
  <p>업력 계산이 애매하면 <a href="/blog_detail/startup-business-age-criteria">창업 업력 기준 글</a>에서 개업일 기준과 법인 전환 사례를 먼저 확인하세요.</p>

  <div class="dh-cta">
    <p>공고문을 다 읽었다면 남은 일은 그 공고의 양식과 평가 항목에 맞춘 사업계획서입니다. 독스헌트에 공고문을 넣으면 신청대상과 평가 항목에 맞춰 사업계획서 초안을 정리할 수 있습니다.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=k-startup-application-guide&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 사업계획서 준비하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${KSTARTUP_ONGOING_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 사업공고 모집중 목록 (2026.11.23 확인)</a></li>
      <li><a href="${SVC_SEOUL_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 2026 SVC Seoul 멤버십(확장형) 모집공고 (2026.11.23 확인)</a></li>
      <li><a href="${SONGPA_ICT_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 2027년 송파ICT청년창업지원센터 입주 모집 공고 (2026.11.23 확인)</a></li>
      <li><a href="${GYEONGGI_WOMEN_BI_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 2027년 상반기 경기도여성창업보육센터 입주기업 모집 공고 (2026.11.23 확인)</a></li>
      <li><a href="${INCHEON_ONE_PERSON_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 2027년 1인 창조기업 지원센터 상반기 신규 입주기업 1차 모집 공고(인천테크노파크) (2026.11.23 확인)</a></li>
      <li><a href="${KONGJU_BI_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 2026년 5차 국립공주대학교 창업보육센터 입주기업 모집 2차 연장공고 (2026.11.23 확인)</a></li>
      <li><a href="${EARLY_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 초기창업패키지(일반형) 창업기업 모집공고 (2026.11.23 확인)</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

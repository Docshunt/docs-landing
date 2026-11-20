import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const BUDGET_BRIEFING_URL = "https://www.korea.kr/briefing/policyBriefingView.do?newsId=156775671";
const PRE_STARTUP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";
const EARLY_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1065015&cbIdx=310";
const LEAP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1065016&cbIdx=310&parentSeq=1065016";
const YOUTH_ACADEMY_URL = "https://www.kosmes.or.kr/nsh/SH/SBI/SHSBI035M0.do";
const K_STARTUP_URL = "https://www.k-startup.go.kr/web";
const BIZINFO_URL = "https://www.bizinfo.go.kr/web/index.do";
const SMALL_BUSINESS_POST_URL = "/blog_detail/1759293063517x574903222143811600";

export const post31 = {
  page: 4,
  index: 1,
  slug: "1755666879059x990557590876586000",
  sourceUrl: "https://docshunt.ai/blog_detail/1755666879059x990557590876586000",
  title: "정부 지원사업 종류, 671개 사업 중 내 창업 단계에 맞는 것은 따로 있습니다",
  description:
    "정부 지원사업은 이름보다 창업 단계와 업력으로 먼저 나뉩니다. 2026년 예비·초기·도약 창업패키지와 청년창업사관학교 조건, 보조금과 융자의 차이, 공고 찾는 곳을 공식 공고로 확인해 정리했습니다.",
  seo: {
    mainKeyword: "정부 지원사업 종류",
    supportKeywords: ["창업 지원사업", "예비창업자 지원사업", "정부 지원사업 공고"],
    searchIntent: "창업을 처음 준비하는 사람이 정부 지원사업 종류를 단계별로 구분하고 어디서 공고를 찾을지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2025.08.20",
  modifiedDate: "2026.11.20",
  verification: {
    date: "2026.11.20",
    note: "부처별 중소기업 지원사업 규모와 2027년 '모두의 창업' 일원화 계획은 2026년 8월 27일 중소벤처기업부 브리핑에서, 2026년 예비창업패키지(제2026-207호), 초기창업패키지(제2026-38호), 창업도약패키지(제2026-39호) 조건은 중소벤처기업부 공고 첨부 공고문에서, 청년창업사관학교 조건은 중소벤처기업진흥공단 안내에서 확인했습니다. 세 창업패키지의 2026년 접수는 끝났고 청년창업사관학교도 2026년 선발 규모가 안내된 지난 모집이며, 2027년 공고는 아직 발표되지 않았습니다.",
    sources: [
      { label: "대한민국 정책브리핑, 중소벤처기업부 재정운용전략협의회 안건 사전 브리핑", url: BUDGET_BRIEFING_URL },
      { label: "중소벤처기업부, 2026년 예비창업패키지 예비창업자 수정 모집공고(2차)", url: PRE_STARTUP_NOTICE_URL },
      { label: "중소벤처기업부, 2026년 초기창업패키지(일반형) 창업기업 모집공고", url: EARLY_NOTICE_URL },
      { label: "중소벤처기업부, 2026년 창업도약패키지(일반형) 창업기업 모집공고", url: LEAP_NOTICE_URL },
      { label: "중소벤처기업진흥공단, 청년창업사관학교", url: YOUTH_ACADEMY_URL },
      { label: "K-Startup 창업지원포털", url: K_STARTUP_URL },
      { label: "기업마당", url: BIZINFO_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00031-government-support-program-types-by-stage-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00031-government-support-program-types-by-stage-hero.jpg",
  paragraphs: [
    "중소벤처기업부는 2026년 8월 브리핑에서 22개 부처가 올해 기준 671개, 31조 원 규모의 중소기업 지원사업을 운영한다고 밝혔습니다. 이름부터 훑으면 끝이 없으니 내 창업 단계와 업력으로 먼저 범위를 좁혀야 합니다.",
    "2026년 기준으로 예비창업패키지는 사업자 등록 전 예비창업자, 초기창업패키지는 창업 3년 이내, 창업도약패키지는 3년 초과 7년 이내 기업, 청년창업사관학교는 만 39세 이하이면서 창업 3년 이내인 대표자를 대상으로 했습니다. 모두 2026년의 지난 모집입니다.",
    "같은 지원사업이라도 돈의 성격이 다릅니다. 예비창업패키지는 자기부담 없이 정부지원사업비로 진행했고, 청년창업사관학교 정부지원금은 총사업비의 70% 이내였습니다. 소상공인 정책자금처럼 갚아야 하는 융자도 있습니다.",
    "2027년 정부 예산안은 예비창업패키지, 도전 K-스타트업 등을 '모두의 창업'으로 일원화할 계획을 담았지만 국회 심의 전의 계획입니다. 공고는 K-Startup과 기업마당에서 확인하세요.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <div class="dh-note">
    <p><strong>지난 공고 안내</strong><br>이 글의 표에 있는 2026년 예비창업패키지, 초기창업패키지, 창업도약패키지 모집은 모두 접수가 끝났고, 청년창업사관학교도 2026년 선발 규모(950명)가 안내된 지난 모집입니다. 2027년 공고 일정과 조건은 아직 발표되지 않았으니, 새 공고가 나오면 <a href="${K_STARTUP_URL}" target="_blank" rel="noopener noreferrer">K-Startup</a>에서 다시 확인하세요.</p>
  </div>

  <p><strong>정부 지원사업 종류는 이름보다 창업 단계와 업력으로 먼저 나뉩니다.</strong> 중소벤처기업부는 <a href="${BUDGET_BRIEFING_URL}" target="_blank" rel="noopener noreferrer">2026년 8월 27일 브리핑</a>에서 22개 부처가 올해 기준 671개, 31조 원 규모의 중소기업 지원사업을 운영한다고 밝혔습니다. 사업 이름을 하나씩 훑기보다 "나는 사업자 등록 전인가, 창업 몇 년 차인가"부터 정하면 볼 공고가 크게 줄어듭니다.</p>

  <h2>창업 단계별로 보는 대표 사업 (2026년 공고 기준)</h2>
  <p>아래 표는 2026년 공고문과 운영기관 안내에서 확인한 내용입니다. 모두 지난 공고이며 2027년 조건은 달라질 수 있습니다.</p>
  <table>
    <thead>
      <tr>
        <th>사업</th>
        <th>대상</th>
        <th>규모와 지원</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">예비창업패키지</a></strong></td>
        <td>사업자 등록 전 예비창업자(기술창업)</td>
        <td>300명 내외, 사업화 자금 평균 4천만 원. 1단계 2천만 원 지원 후 중간평가로 50% 내외에 추가 지원</td>
      </tr>
      <tr>
        <td><strong><a href="${EARLY_NOTICE_URL}" target="_blank" rel="noopener noreferrer">초기창업패키지</a>(일반형)</strong></td>
        <td>창업 후 3년 이내 기업</td>
        <td>400개사 내외, 최대 1억 원(평균 5천만 원)</td>
      </tr>
      <tr>
        <td><strong><a href="${LEAP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">창업도약패키지</a>(일반형)</strong></td>
        <td>창업 후 3년 초과 7년 이내 기업(신산업 분야는 10년 이내)</td>
        <td>300개사 내외, 최대 2억 원(평균 1.2억 원 내외)</td>
      </tr>
      <tr>
        <td><strong><a href="${YOUTH_ACADEMY_URL}" target="_blank" rel="noopener noreferrer">청년창업사관학교</a></strong></td>
        <td>만 39세 이하이면서 창업 3년 이내 기업의 대표자</td>
        <td>2026년 950명, 정부지원금 최대 1억 원(총사업비의 70% 이내), 창업 공간·코칭·기술지원</td>
      </tr>
    </tbody>
  </table>
  <p>세 창업패키지는 모두 문제인식, 실현가능성, 성장전략, 팀(기업) 구성의 네 항목으로 평가했습니다. 사업 이름은 달라도 사업계획서가 답해야 하는 질문의 뼈대는 비슷하다는 뜻입니다.</p>

  <h2>2027년에는 예비창업 사업이 '모두의 창업'으로 합쳐질 수 있습니다</h2>
  <p>같은 브리핑에서 중소벤처기업부는 2027년 정부 예산안 기준으로 도전 K-스타트업, 예비창업패키지 등 여러 예비창업 사업을 모두의 창업 지원사업으로 일원화할 계획이라고 밝혔습니다. 이는 국회 심의 전의 예산안 기준 계획이며 확정된 변경이 아닙니다. 2027년 공고가 나오기 전까지는 예비창업패키지라는 이름이 그대로 쓰일지, 조건이 어떻게 바뀔지 단정할 수 없습니다.</p>

  <h2>받는 돈의 성격부터 구분하세요</h2>
  <ul>
    <li><strong>사업화 자금(보조금):</strong> 갚지 않지만 쓸 수 있는 비목이 정해져 있습니다. 2026년 예비창업패키지는 재료비, 외주용역비, 기계장치, 지식재산권 취득비, 인건비, 광고선전비 등으로 집행했고 자기부담사업비 없이 정부지원사업비 100%로 운영했습니다.</li>
    <li><strong>자부담이 있는 지원:</strong> 청년창업사관학교 정부지원금은 총사업비의 70% 이내였습니다. 나머지는 창업자가 마련해야 합니다.</li>
    <li><strong>융자:</strong> 소상공인 정책자금처럼 금리를 붙여 갚는 돈입니다. 차이는 <a href="${SMALL_BUSINESS_POST_URL}">소상공인 지원사업 글</a>에서 따로 정리했습니다.</li>
  </ul>

  <h2>공고는 두 곳에서 확인하세요</h2>
  <ul>
    <li><a href="${K_STARTUP_URL}" target="_blank" rel="noopener noreferrer">K-Startup</a>: 창업 지원사업 공고와 온라인 신청 창구입니다. 청년창업사관학교도 K-Startup으로 신청하도록 안내되어 있습니다.</li>
    <li><a href="${BIZINFO_URL}" target="_blank" rel="noopener noreferrer">기업마당</a>: 여러 부처와 지자체의 중소기업 지원사업 공고를 분야별·지역별로 모아 보여줍니다. 2026년 11월 20일 첫 화면 기준으로 신청 가능한 지원사업은 1,371건이었습니다.</li>
  </ul>

  <h2>공고가 뜨기 전에 정리할 네 가지</h2>
  <ol>
    <li><strong>업력 기준일:</strong> 개인사업자는 사업자등록증의 개업연월일, 법인은 법인설립등기일을 확인하세요. 2026년 초기창업패키지 공고는 모집공고일을 기준으로 업력을 셌습니다.</li>
    <li><strong>나이와 신분 조건:</strong> 청년 대상 사업은 만 나이 기준일을 공고에서 확인하고, 재직 중이라면 겸직 제한이 있는지도 봅니다.</li>
    <li><strong>신청 제외 사유와 중복:</strong> 2026년 예비창업패키지 공고는 국세·지방세 체납자 등을 신청 제외 대상으로 두었고, 요건검토 단계에서 사업계획서의 유사·중복성도 검토했습니다. 체납 여부와 같은 아이템으로 받은 다른 지원 이력을 미리 정리해 두세요.</li>
    <li><strong>근거 자료:</strong> 고객 인터뷰, 시제품 사진, 견적서처럼 문제인식과 실현가능성을 뒷받침할 기록을 모아 둡니다.</li>
  </ol>

  <div class="dh-cta">
    <p>내 단계에 맞는 공고를 골랐다면 독스헌트에서 공고를 선택하거나 공고문과 양식을 올려, 평가항목에 맞춘 사업계획서 초안을 만들어 보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=government-support-program-types&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트로 사업계획서 시작하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${BUDGET_BRIEFING_URL}" target="_blank" rel="noopener noreferrer">대한민국 정책브리핑, 중소벤처기업부 재정운용전략협의회 안건 사전 브리핑(2026.08.27)</a></li>
      <li><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 예비창업자 수정 모집공고(2차)</a></li>
      <li><a href="${EARLY_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 초기창업패키지(일반형) 창업기업 모집공고</a></li>
      <li><a href="${LEAP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 창업도약패키지(일반형) 창업기업 모집공고</a></li>
      <li><a href="${YOUTH_ACADEMY_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업진흥공단, 청년창업사관학교</a></li>
      <li><a href="${K_STARTUP_URL}" target="_blank" rel="noopener noreferrer">K-Startup 창업지원포털</a></li>
      <li><a href="${BIZINFO_URL}" target="_blank" rel="noopener noreferrer">기업마당</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

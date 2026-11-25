import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const SMINFO_HOME_URL = "https://sminfo.mss.go.kr/";
const SOLE_GUIDE_URL = "https://sminfo.mss.go.kr/er/er/EER009R0.do";
const CORP_GUIDE_URL = "https://sminfo.mss.go.kr/er/er/EER009R2.do";
const SUBMIT_GUIDE_URL = "https://sminfo.mss.go.kr/er/er/EER003R2.do";
const NOTICE_URL = "https://sminfo.mss.go.kr/cm/cs/CCS001R0.do";
const FAQ_URL = "https://sminfo.mss.go.kr/cm/cs/CCS002R0.do";
const SCOPE_URL = "https://sminfo.mss.go.kr/sc/si/SSI015R0.do";
const RULE_URL =
  "https://www.law.go.kr/%ED%96%89%EC%A0%95%EA%B7%9C%EC%B9%99/%EC%A4%91%EC%86%8C%EA%B8%B0%EC%97%85%EB%B2%94%EC%9C%84%EB%B0%8F%ED%99%95%EC%9D%B8%EC%97%90%EA%B4%80%ED%95%9C%EA%B7%9C%EC%A0%95";

export const post110 = {
  page: 1,
  index: 1,
  slug: "sme-confirmation-certificate",
  sourceUrl: "https://docshunt.ai/blog_detail/sme-confirmation-certificate",
  title: "중소기업확인서 발급 방법, 갓 창업해 재무제표가 없다면",
  titleLines: ["중소기업확인서 발급 방법,", "갓 창업해", "재무제표가 없다면"],
  titleLineBreaks: "always",
  description:
    "중소기업확인서 발급 방법을 창업 초기 기업 기준으로 정리했습니다. 올해나 작년에 창업했다면 재무제표 없이 신청서만으로 발급받을 수 있습니다. 개인·법인별 제출서류, 유효기간, 막히는 화면과 해결 순서를 담았습니다.",
  seo: {
    mainKeyword: "중소기업확인서 발급",
    supportKeywords: ["소상공인확인서", "중소기업확인서 유효기간", "개인사업자 중소기업확인서"],
    searchIntent:
      "창업 초기 개인사업자나 신규 법인 대표가 지원사업에 낼 중소기업확인서를 어디서 어떤 서류로 발급받고 언제까지 쓸 수 있는지 알고 싶다",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.11.25",
  modifiedDate: "2026.11.25",
  verification: {
    date: "2026.11.25",
    note: "기업 유형별 제출서류와 발급 절차, 신청 시기, 진행 상태 안내는 2026년 11월 25일 중소기업현황정보시스템의 첫 화면 유형 안내, 발급절차 안내(개인·법인), 온라인 자료제출, 공지사항(239번, 240번), 자주하는질문(111·112·113·115·116번)에서 확인했습니다. 제출서류 생략 근거, 확인서 구분, 유효기간, 수정 발급 사유는 같은 날 국가법령정보센터의 「중소기업 범위 및 확인에 관한 규정」(중소벤처기업부고시 제2026-43호, 2026.6.16 시행) 제3조부터 제6조까지로 확인했습니다. 제출 대상 연도는 해마다 바뀌므로 신청하는 날 시스템의 유형 안내를 다시 확인해야 합니다.",
    sources: [
      { label: "중소기업현황정보시스템, 유형별 제출서류 안내", url: SMINFO_HOME_URL },
      { label: "중소기업현황정보시스템, 발급절차 안내(개인사업자)", url: SOLE_GUIDE_URL },
      { label: "중소기업현황정보시스템, 발급절차 안내(법인사업자)", url: CORP_GUIDE_URL },
      { label: "중소기업현황정보시스템, 온라인 자료제출", url: SUBMIT_GUIDE_URL },
      { label: "중소기업현황정보시스템, 공지사항", url: NOTICE_URL },
      { label: "중소기업현황정보시스템, 자주하는질문", url: FAQ_URL },
      { label: "중소기업현황정보시스템, 중소기업기준", url: SCOPE_URL },
      { label: "국가법령정보센터, 중소기업 범위 및 확인에 관한 규정", url: RULE_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00110-sme-confirmation-certificate-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00110-sme-confirmation-certificate-hero.jpg",
  paragraphs: [
    "중소기업확인서는 중소기업현황정보시스템(sminfo.mss.go.kr)에서 발급받습니다. 올해나 작년에 창업한 기업은 원칙적으로 재무제표를 내지 않고 회원가입과 신청서 작성만으로 발급을 신청할 수 있습니다.",
    "창업한 지 더 지났다면 장부 종류와 직원 급여 신고 여부에 따라 낼 서류가 달라집니다. 온라인으로 서류를 내는 기업은 자료제출을 먼저 끝내고 신청서를 써야 하며, 순서를 바꾸면 자료제출 확인요청 오류가 납니다. 오프라인 제출 대상은 신청서를 먼저 냅니다.",
    "올해 창업한 기업의 확인서는 창업한 날부터 해당 사업연도가 끝나고 3개월이 되는 날까지 유효합니다. 12월 결산이라면 다음 해 3월 31일까지입니다.",
    "소상공인 유예검토 상태가 나오면 과거규모 확인절차를 더 거쳐야 하고, 관계기업이 있거나 합병·분할한 기업은 오프라인으로 자료를 냅니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p>중소기업확인서는 <a href="${SMINFO_HOME_URL}" target="_blank" rel="noopener noreferrer">중소기업현황정보시스템(SMINFO)</a>에서 발급받습니다. <strong>올해나 작년에 창업했다면 재무제표를 내지 않아도 됩니다.</strong> 회원가입을 하고 신청서만 작성하면 되는데, 관계기업이 있거나 합병·분할한 기업 등은 예외입니다.</p>
  <p>첫 지원사업 마감을 앞두고 막히는 일은 보통 그다음에 생깁니다. 필요 없는 세무 자료를 찾느라 시간을 쓰거나, 자료가 도착하기 전에 신청서를 먼저 내서 오류가 나거나, 예전에 받아 둔 확인서의 유효기간이 끝나 있는 경우입니다. 우리 회사가 낼 서류부터 골라 보겠습니다.</p>

  <h2>창업 연도와 장부로 고르는 제출서류</h2>
  <p>아래는 2026년 11월 25일 <a href="${SMINFO_HOME_URL}" target="_blank" rel="noopener noreferrer">시스템 첫 화면의 유형 안내</a>를 초기 창업기업에 맞춰 다시 묶은 표입니다. 연도는 2026년에 신청할 때 기준이고, 관계기업이 없고 합병·분할도 하지 않은 기업을 전제로 합니다.</p>
  <table>
    <thead>
      <tr>
        <th>우리 회사</th>
        <th>낼 자료</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2025년·2026년에 창업한 개인사업자 또는 설립한 법인</td>
        <td>없음(신청서만 작성)</td>
      </tr>
      <tr>
        <td>최근 3년 내내 간편장부 대상, 원천세 신고 없음</td>
        <td>없음(신청서만 작성)</td>
      </tr>
      <tr>
        <td>최근 3년 내내 간편장부 대상, 직원 원천세 신고 있음</td>
        <td>최근 1년 원천세 신고자료</td>
      </tr>
      <tr>
        <td>재무제표가 있는 개인사업자·법인, 원천세 신고 없음</td>
        <td>재무제표 등 재무자료</td>
      </tr>
      <tr>
        <td>재무제표도 있고 직원 원천세 신고도 있음</td>
        <td>재무자료와 최근 1년 원천세 신고자료</td>
      </tr>
    </tbody>
  </table>
  <p>창업한 날은 개인이면 사업자등록증명의 <strong>사업자등록일</strong>, 법인이면 등기부등본의 <strong>회사성립연월일</strong>로 봅니다. 대표자 혼자 일하거나 일용직·프리랜서만 쓰는 회사는 위 표에서 '원천세 신고 없음' 쪽을 고르라고 안내합니다. 간편장부 기업이라도 <a href="${FAQ_URL}" target="_blank" rel="noopener noreferrer">최근 3개년 안에 복식부기 대상이 된 적이 있으면</a> 간편장부 유형에서 빠집니다(자주하는질문 111번, 113번).</p>
  <p>재무자료는 개인이면 종합소득세 신고자료(재무제표 포함)와 부가가치세 자료, 법인이면 법인세 신고자료입니다(공지 240번). 최근 3개년치가 원칙이지만, 창업한 지 3년이 안 된 개인사업자는 설립 연도를 뺀 자료가 있는지로 판단합니다. 2024년에 창업했다면 2025년 재무제표를 보는 식입니다. 서류를 생략할 수 있는 근거는 <a href="${RULE_URL}" target="_blank" rel="noopener noreferrer">「중소기업 범위 및 확인에 관한 규정」</a> 제5조 제4항입니다.</p>

  <h2>온라인으로 서류를 내야 한다면 순서를 지키세요</h2>
  <p>아래는 온라인으로 자료를 낼 수 있는 기업의 순서입니다. 수정 신고 등으로 오프라인 제출을 해야 하는 기업은 반대로 <strong>신청서를 먼저 낸 뒤</strong> 자료를 보냅니다.</p>
  <ol>
    <li><strong>온라인 자료제출:</strong> 국세청에 등록된 인증서로 로그인해 보냅니다. PDF·엑셀·이미지 파일은 올릴 수 없고, 세무대리인에게 전송을 부탁할 수도 있습니다.</li>
    <li><strong>회원가입과 기업정보 입력:</strong> 기업정보를 등록해야 확인서 신청으로 넘어갑니다.</li>
    <li><strong>제출자료 조회:</strong> 자료를 보내고 최소 1시간 뒤에 '자료제출 완료'인지 확인합니다.</li>
    <li><strong>신청서 작성·제출:</strong> 완료를 확인한 다음에 씁니다.</li>
    <li><strong>진행상황 확인과 출력:</strong> 발급이 끝나면 '확인서 출력/수정'에서 뽑습니다.</li>
  </ol>
  <p>3번을 건너뛰면 <strong>'자료제출 확인요청'</strong> 오류가 납니다. <a href="${NOTICE_URL}" target="_blank" rel="noopener noreferrer">시스템 공지(239번, 240번)</a>는 빠진 자료가 있거나 자료제출이 끝나기 전에 신청서를 낸 경우라고 설명합니다. 자료제출 완료를 확인한 뒤 신청서를 다시 제출하면 됩니다.</p>
  <p>자료제출이 필요 없는 창업기업은 1번과 3번이 빠지고, 회원가입 → 신청서 작성 → 진행상황 확인 → 발급으로 줄어듭니다.</p>

  <h2>마감 전날 막히기 쉬운 네 가지</h2>
  <ul>
    <li><strong>맥을 쓴다:</strong> <a href="${SUBMIT_GUIDE_URL}" target="_blank" rel="noopener noreferrer">온라인 자료제출 안내</a>는 맥과 윈도우 7 등을 이용제한 운영체제로 적었습니다. PC에서 어려우면 모바일로 접속해 제출할 수 있습니다.</li>
    <li><strong>어제 세금 신고를 고쳤다:</strong> 수정 신고나 기한 후 신고 자료는 온라인으로 낼 수 없습니다. 신청서를 먼저 온라인으로 제출한 뒤 관할 지방중소벤처기업청에 우편으로 자료를 내야 하고, <a href="${SOLE_GUIDE_URL}" target="_blank" rel="noopener noreferrer">오프라인 발급은 수일이 걸린다</a>고 안내합니다.</li>
    <li><strong>다른 회사 지분이 얽혀 있다:</strong> 지분으로 지배·종속 관계에 있는 관계기업이 있으면 신청서를 먼저 낸 뒤 자료를 오프라인으로 제출합니다.</li>
    <li><strong>'소상공인 유예검토'가 떴다:</strong> 과거자료 제출, 필수사항 입력, 자료 반영 클릭까지 세 단계를 더 거칩니다. 세 단계를 마쳐도 발급되지 않으면 관할 지방중소벤처기업청에 문의합니다.</li>
  </ul>
  <p>온라인 발급이 몇 시간 만에 끝난다는 공식 약속은 안내 페이지에서 찾지 못했습니다. 자료 조회에 걸리는 1시간과 오프라인으로 넘어갈 가능성을 생각하면, 공고를 고른 날 바로 신청해 두는 편이 안전합니다.</p>

  <h2>확인서 유효기간은 창업 연도에 따라 다릅니다</h2>
  <p>유효기간은 발급받은 날부터 1년이 아닙니다. <a href="${RULE_URL}" target="_blank" rel="noopener noreferrer">규정 제3조와 제6조</a>에 따라 사업연도를 기준으로 정해집니다. 12월에 결산하는 회사라면 이렇게 됩니다.</p>
  <table>
    <thead>
      <tr>
        <th>창업 시점</th>
        <th>2026년에 받은 확인서의 유효기간</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2026년 9월 1일(올해 창업)</td>
        <td>2026년 9월 1일 ~ 2027년 3월 31일</td>
      </tr>
      <tr>
        <td>2025년(작년 창업)</td>
        <td>2026년 4월 1일 ~ 2027년 3월 31일</td>
      </tr>
      <tr>
        <td>2024년 이전</td>
        <td>2026년 4월 1일 ~ 2027년 3월 31일</td>
      </tr>
    </tbody>
  </table>
  <p>올해 11월에 창업해 바로 받은 확인서도 2027년 3월 31일이면 끝납니다. 봄에 지원사업을 낼 계획이라면 접수 마감일이 3월인지 4월인지부터 보세요. 4월 이후라면 새로 받아야 합니다.</p>
  <p>갱신은 직전 사업연도가 끝나고 3개월이 지난 뒤부터 신청하는 것이 원칙입니다. 다만 종합소득세를 아직 신고하지 않은 <a href="${SOLE_GUIDE_URL}" target="_blank" rel="noopener noreferrer">개인기업은 대체자료로 3월 1일부터</a>, <a href="${CORP_GUIDE_URL}" target="_blank" rel="noopener noreferrer">법인은 직전 사업연도 법인세 전자신고를 마친 때부터</a> 발급받을 수 있습니다.</p>

  <h2>받은 뒤 이름이나 주소가 바뀌었다면</h2>
  <p>기업명, 대표자, 주소, 용도가 바뀌었을 때는 새로 신청하지 않고 '확인서 출력/수정'에서 고칩니다. 바뀐 사업자등록증을 팩스나 시스템이 안내한 이메일로 보내야 하고, 용도만 바꿀 때는 보내지 않아도 됩니다(<a href="${FAQ_URL}" target="_blank" rel="noopener noreferrer">자주하는질문 116번</a>). 접수 서류끼리 주소가 다르지 않도록 사업장을 옮긴 직후에 처리해 두세요.</p>

  <h2>자주 묻는 질문</h2>
  <p><strong>소상공인확인서는 따로 신청하나요?</strong><br />같은 시스템에서 같은 절차로 받습니다. 규정 제4조는 중기업, 소기업, 소상공인을 구분해 중소기업 확인서를 발급하도록 정했습니다. 공고가 소상공인확인서를 요구하면 발급된 확인서의 기업 구분이 소상공인인지 보세요. 업종별 직원 수 기준은 <a href="/blog_detail/startup-loan-conditions">창업자금 대출 조건 글</a>에 적어 두었습니다.</p>
  <p><strong>예비창업자도 받을 수 있나요?</strong><br />신청 서류에 사업자등록증명이 들어 있어 사업자등록을 한 뒤에 신청할 수 있다고 보는 것이 맞습니다. 예비창업자 대상 공고라면 이 서류를 요구하는지부터 확인하세요.</p>
  <p><strong>사업자가 두 개면 확인서도 두 장인가요?</strong><br /><a href="${SCOPE_URL}" target="_blank" rel="noopener noreferrer">중소기업 기준</a>은 개인사업자를 사업자등록 단위로, 법인을 사업장이 아닌 법인 전체로 판단합니다. 개인사업자라면 지원사업에 신청하는 사업자번호로 받은 확인서인지 확인하세요.</p>
  <p><strong>창업기업확인서와 같은 서류인가요?</strong><br />다릅니다. 중소기업확인서는 기업 규모를, 창업기업확인서는 창업기업에 해당하는지를 확인합니다. 뒤의 서류는 <a href="/blog_detail/startup-business-age-criteria">창업 업력 기준 글</a>에서 다뤘습니다.</p>

  <div class="dh-cta">
    <p>확인서를 신청해 두었다면 남은 시간은 사업계획서에 쓰면 됩니다. 독스헌트에 공고와 기업 정보를 넣으면 양식에 맞춘 사업계획서 초안을 만들 수 있습니다.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=sme-confirmation-certificate&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 초안 만들기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${SMINFO_HOME_URL}" target="_blank" rel="noopener noreferrer">중소기업현황정보시스템, 유형별 제출서류 안내 (2026.11.25 확인)</a></li>
      <li><a href="${SOLE_GUIDE_URL}" target="_blank" rel="noopener noreferrer">중소기업현황정보시스템, 발급절차 안내(개인사업자) (2026.11.25 확인)</a></li>
      <li><a href="${CORP_GUIDE_URL}" target="_blank" rel="noopener noreferrer">중소기업현황정보시스템, 발급절차 안내(법인사업자) (2026.11.25 확인)</a></li>
      <li><a href="${SUBMIT_GUIDE_URL}" target="_blank" rel="noopener noreferrer">중소기업현황정보시스템, 온라인 자료제출 (2026.11.25 확인)</a></li>
      <li><a href="${NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소기업현황정보시스템, 공지사항 239번·240번 (2026.11.25 확인)</a></li>
      <li><a href="${FAQ_URL}" target="_blank" rel="noopener noreferrer">중소기업현황정보시스템, 자주하는질문 111·112·113·115·116번 (2026.11.25 확인)</a></li>
      <li><a href="${SCOPE_URL}" target="_blank" rel="noopener noreferrer">중소기업현황정보시스템, 중소기업기준 (2026.11.25 확인)</a></li>
      <li><a href="${RULE_URL}" target="_blank" rel="noopener noreferrer">국가법령정보센터, 중소기업 범위 및 확인에 관한 규정 (2026.11.25 확인)</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

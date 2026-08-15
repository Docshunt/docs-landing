import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const PRE_STARTUP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";
const PRE_STARTUP_PDF_URL =
  "https://www.mss.go.kr/common/board/Download.do?bcIdx=1066579&cbIdx=310&streFileNm=236d517e-fc4d-4607-8ba0-6b2557afeb62.pdf";

export const post86 = {
  page: 1,
  index: 1,
  slug: "pre-startup-package-business-registration-deadline",
  sourceUrl: "https://docshunt.ai/blog_detail/pre-startup-package-business-registration-deadline",
  title: "예비창업패키지 사업자등록, 선정되면 바로 해야 할까요?",
  titleLines: ["예비창업패키지", "사업자등록은", "언제까지 할까요?"],
  titleLineBreaks: "always",
  description:
    "2026년 예비창업패키지 사업자등록은 선정 아이템 관련 업종으로 협약종료일 2개월 전까지 마쳐야 했습니다. 신청 기준일과 등록·유지 의무를 구분해 설명합니다.",
  seo: {
    mainKeyword: "예비창업패키지 사업자등록",
    supportKeywords: ["예비창업패키지 선정 후", "예비창업자 사업자등록", "예비창업패키지 협약기간"],
    searchIntent: "예비창업패키지 신청 기준일과 선정 뒤 사업자등록 및 사업 유지 의무의 시점을 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.15",
  modifiedDate: "2026.08.15",
  verification: {
    date: "2026.08.15",
    note: "중소벤처기업부의 2026년 예비창업패키지 예비창업자 수정 모집공고(2차)를 확인했습니다. 2026년 1월 22일 신청자격 기준일, 1월 23일 이후 등록 허용, 선정 아이템 관련 업종으로 협약종료일 2개월 전까지 창업해야 하는 의무, 협약종료 뒤 1년 이상 사업 유지 조건을 근거로 작성했습니다. 실제 등록 시점은 새 공고와 주관기관 안내를 다시 확인해야 합니다.",
    sources: [
      { label: "중소벤처기업부, 2026년 예비창업패키지 예비창업자 수정 모집공고(2차)", url: PRE_STARTUP_NOTICE_URL },
      { label: "중소벤처기업부, 2026년 예비창업패키지 수정 모집공고 PDF", url: PRE_STARTUP_PDF_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00086-pre-startup-package-business-registration-deadline-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00086-pre-startup-package-business-registration-deadline-hero.jpg",
  paragraphs: [
    "2026년 예비창업패키지 선정자가 선정 직후 바로 사업자등록을 마쳐야 한다고 공고한 것은 아닙니다. 선정 아이템 관련 업종으로 협약종료일 2개월 전까지 창업과 사업자등록을 이행해야 했습니다.",
    "신청자격 기준일과 선정 뒤 창업 기한은 서로 다릅니다. 2026년 공고는 1월 22일을 기준일로 삼았고 1월 23일 이후 사업자등록이나 법인등기를 마친 사람도 신청할 수 있다고 안내했습니다.",
    "사업자등록으로 의무가 끝나지도 않습니다. 정당한 사유가 없다면 협약종료일부터 1년 이상 창업기업을 유지해야 했습니다.",
    "업종, 법인 설립 여부와 등록 시점은 세무·허가·사업비 집행에도 영향을 줄 수 있습니다. 새 공고와 주관기관 일정을 확인한 뒤 거꾸로 계산해 준비하세요.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>2026년 예비창업패키지 선정자가 선정 직후 바로 사업자등록을 마쳐야 한다고 공고한 것은 아닙니다.</strong> 선정된 창업아이템 관련 업종으로 협약종료일 2개월 전까지 창업과 사업자등록을 이행해야 했습니다.</p>
  <p>“마지막 날에 등록해도 된다”는 뜻은 아닙니다. 그날에 맞춰 등록 계획을 세워서는 곤란합니다. 업종 선택, 인허가, 법인 설립과 사업비 집행 일정을 함께 거꾸로 계산해야 합니다.</p>

  <h2>신청 기준일과 선정 뒤 등록 기한은 따로 봐야 합니다</h2>
  <p><a href="${PRE_STARTUP_PDF_URL}" target="_blank" rel="noopener noreferrer">2026년 예비창업패키지 수정 모집공고 PDF</a>는 신청자격의 기준일을 2026년 1월 22일로 정했습니다. 그날 신청자 명의의 사업자등록증이 없고 법인의 법률상 대표권을 갖고 있지 않은 사람이 기본 대상이었습니다.</p>
  <p>또 2026년 1월 23일 이후 사업자등록이나 법인등기를 마친 경우에는 신청할 수 있다고 안내했습니다. 신청 기준일 뒤에 사업자를 냈다는 사실만으로 바로 신청 대상에서 빠지는 구조는 아니었습니다.</p>
  <table>
    <thead>
      <tr>
        <th>구분</th>
        <th>2026년 공고의 기준</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>신청자격 기준일</strong></td>
        <td>2026년 1월 22일</td>
      </tr>
      <tr>
        <td><strong>기준일 이후 등록</strong></td>
        <td>1월 23일 이후 등록·등기 완료자는 신청 가능</td>
      </tr>
      <tr>
        <td><strong>선정 뒤 창업 의무</strong></td>
        <td>협약종료일 2개월 전까지</td>
      </tr>
    </tbody>
  </table>

  <h2>선정 아이템과 실제 등록 업종을 맞추세요</h2>
  <p>공고는 선정자가 <strong>선정된 창업아이템 관련 업종</strong>으로 사업자등록을 이행하도록 안내했습니다. 기한을 맞췄더라도 사업계획서와 다른 업종을 임의로 넣으면 공고 의무를 충족했다고 보기 어렵습니다.</p>
  <p>사업계획서의 제품·서비스와 수익 방식이 실제 등록 업종과 이어지는지 살펴보세요. 허가나 신고가 필요한 업종이라면 사업자등록증 발급만으로 영업 준비가 끝나지 않을 수 있으므로 별도 절차도 확인해야 합니다.</p>
  <div class="dh-note">
    <p><strong>등록 전 확인</strong><br>선정 아이템, 예정 업종, 개인·법인 형태, 필요한 인허가, 주관기관 일정</p>
  </div>

  <h2>협약종료일부터 1년 이상 유지 의무도 있었습니다</h2>
  <p>사업자등록 기한만 넘기지 않으면 모든 의무가 끝나는 것은 아닙니다. 2026년 공고는 대표자 사망이나 법인전환 같은 정당한 사유를 제외하고 협약종료일부터 1년 이상 창업기업을 유지하도록 안내했습니다.</p>
  <p>정당한 사유 없이 유지 의무를 이행하지 않으면 중소벤처기업부와 전문기관의 창업지원사업 참여제한 등 제재가 있을 수 있다고 적었습니다. 폐업이나 대표자 변경을 검토한다면 먼저 공고와 협약서, 주관기관 안내를 확인해야 합니다.</p>

  <h2>부동산임대업 예외 신청자는 법인 창업 조건을 따로 봐야 합니다</h2>
  <p>2026년 공고에는 직원을 고용하지 않고 부동산임대업만 영위하는 개인사업자 대표에 대한 예외가 있었습니다. 이 예외로 신청한 선정자는 협약종료일 2개월 전까지 이종업종 제품·서비스를 영위하는 <strong>법인사업자</strong>로 창업해야 했습니다.</p>
  <p>일반 신청자의 등록 의무와 같은 방식으로 읽으면 법인 설립 조건을 놓칠 수 있습니다. 예외 자격으로 신청했는지와 어떤 서류로 확인받았는지부터 살펴보세요.</p>

  <h2>등록 예정일을 협약 종료일에서 거꾸로 계산하세요</h2>
  <ol>
    <li>선정 안내에서 실제 협약 시작일과 종료일을 확인합니다.</li>
    <li>종료일 2개월 전의 의무 기한을 달력에 표시합니다.</li>
    <li>개인사업자와 법인 중 사업계획에 맞는 형태를 검토합니다.</li>
    <li>업종 코드, 인허가와 계좌 개설에 필요한 시간을 확인합니다.</li>
    <li>등록 뒤 협약종료일부터 1년 이상 유지할 운영비와 계획을 점검합니다.</li>
  </ol>
  <p>2026년 공고의 협약기간은 시작일부터 8개월 이내였고 2026년 6월부터 2027년 1월까지로 예정됐습니다. 실제 선정자의 날짜는 협약서와 주관기관 안내가 우선입니다.</p>

  <h2>다음 모집은 새 기준일과 의무 기한을 보세요</h2>
  <p>이 글은 종료된 2026년 예비창업패키지 수정 모집공고를 기준으로 작성했습니다. 다음 공고는 신청자격 기준일, 협약기간과 창업 기한이 달라질 수 있습니다. <a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">최신 공식 공고</a>와 개별 협약 안내를 최종 기준으로 삼으세요.</p>
  <p><strong class="dh-emphasis">신청할 때 보는 기준일, 선정 뒤 등록해야 하는 기한, 등록 뒤 유지해야 하는 기간을 따로 적어두면 날짜를 섞는 실수를 줄일 수 있습니다.</strong></p>

  <div class="dh-cta">
    <p>등록할 업종과 시점을 정했다면 독스헌트에서 제품 개발, 고객 검증과 사업비 일정이 협약기간 안에 이어지는지 점검해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=pre-startup-package-business-registration-deadline&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 협약 일정 정리하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 예비창업자 수정 모집공고(2차)</a></li>
      <li><a href="${PRE_STARTUP_PDF_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 수정 모집공고 PDF</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

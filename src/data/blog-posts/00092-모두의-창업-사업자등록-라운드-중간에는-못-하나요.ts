import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const FIRST_COHORT_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066642&cbIdx=310&parentSeq=1066642";
const FIRST_COHORT_PDF_URL =
  "https://www.mss.go.kr/common/board/Download.do?bcIdx=1066642&cbIdx=310&streFileNm=b1db7f65-7bee-461b-861a-168c81873553.pdf";
const FIRST_COHORT_FAQ_URL = "https://ec.jnu.ac.kr/bbs/ec/237/835571/download.do";
const SECOND_COHORT_STATUS_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1069596&cbIdx=87";

export const post92 = {
  page: 1,
  index: 1,
  slug: "modoo-startup-business-registration-during-round",
  sourceUrl: "https://docshunt.ai/blog_detail/modoo-startup-business-registration-during-round",
  title: "모두의 창업 사업자등록, 라운드 중간에는 못 하나요?",
  titleLines: ["라운드 중", "사업자등록,", "가능합니다"],
  titleLineBreaks: "always",
  description:
    "모두의 창업 사업자등록은 2026년 1기 일반·기술트랙 FAQ에서 라운드 진행 중에도 허용됐습니다. 다만 창업자 유형, 업종 조건, 운영기관 통보와 이후 사업화자금 요건은 따로 봐야 합니다.",
  seo: {
    mainKeyword: "모두의 창업 사업자등록",
    supportKeywords: ["모두의 창업 라운드 사업자등록", "모두의 창업 예비창업자", "모두의 창업 협약 사업자등록"],
    searchIntent: "모두의 창업 라운드 진행 중 사업자등록 가능 여부와 운영기관 통보 시점을 확인하고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.16",
  modifiedDate: "2026.08.16",
  verification: {
    date: "2026.08.16",
    note: "2026년 모두의 창업 1기 통합 모집공고와 일반·기술트랙 FAQ를 확인했습니다. FAQ Q32의 라운드 중 사업자등록 허용, 예비창업자의 신규 사업자등록, 기존 창업자의 이종업종 사업자등록, 등록 예정 전과 등록 결과 후 운영기관 통보 요청을 기준으로 작성했습니다. Q33의 3라운드 차년도 사업화자금 관련 사업자등록 필요성은 별도 요건으로 구분했습니다. 2기 모집은 보안 강화와 신뢰 회복 뒤 시작한다는 새 안내가 있으므로 이후 모집은 새 공고가 우선합니다.",
    sources: [
      { label: "중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고", url: FIRST_COHORT_NOTICE_URL },
      { label: "중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고 PDF", url: FIRST_COHORT_PDF_URL },
      { label: "모두의 창업 일반·기술트랙 FAQ", url: FIRST_COHORT_FAQ_URL },
      { label: "중소벤처기업부, 모두의 창업 프로젝트 2기 모집 관련 안내", url: SECOND_COHORT_STATUS_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00092-modoo-startup-business-registration-during-round-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00092-modoo-startup-business-registration-during-round-hero.jpg",
  paragraphs: [
    "2026년 모두의 창업 1기 일반·기술트랙 FAQ는 라운드가 진행되는 중에도 사업자등록이 가능하다고 안내했습니다.",
    "다만 누구나 같은 방식으로 등록하면 되는 것은 아닙니다. 예비창업자는 신규 사업자등록, 기존 창업자는 기존 사업과 다른 이종업종 사업자등록이라는 조건을 구분해야 했습니다.",
    "등록 전에는 사업자등록 예정일과 내용을 운영기관에 알려야 했습니다. 등록이 끝난 뒤에도 결과를 다시 전달해야 했습니다. 라운드 중 등록이 허용된다는 말은 운영기관 확인 없이 진행해도 된다는 뜻이 아닙니다.",
    "3라운드 차년도 사업화자금 단계에서는 사업자등록 요건이 따로 연결됩니다. 라운드 중 등록 가능 여부와 뒤 라운드 지원 요건을 섞지 마세요. 다음 모집에서는 새 공고와 운영기관 안내를 기준으로 확인해야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>2026년 모두의 창업 1기 일반·기술트랙 FAQ는 라운드가 진행되는 중에도 사업자등록이 가능하다고 안내했습니다.</strong> 예비창업자는 신규 사업자등록을, 기존 창업자는 기존 사업과 다른 이종업종 사업자등록을 하는 경우로 구분했습니다.</p>
  <p>그래서 답은 “가능하다”입니다. 다만 “아무 때나 조용히 등록해도 된다”는 뜻은 아닙니다. 사업자등록을 하기로 정했다면 등록 예정 사실을 먼저 운영기관에 알려야 했습니다. 등록이 끝난 뒤에도 결과를 다시 전달해야 했습니다.</p>

  <h2>라운드 중 사업자등록은 허용됐습니다</h2>
  <p><a href="${FIRST_COHORT_FAQ_URL}" target="_blank" rel="noopener noreferrer">2026년 모두의 창업 일반·기술트랙 FAQ</a> Q32는 라운드 진행 중 사업자등록이 가능한지 묻는 질문에 가능하다고 답했습니다.</p>
  <p>이 안내는 “라운드가 끝날 때까지 무조건 미등록 상태를 유지해야 한다”는 불안을 줄여줍니다. 고객 계약, 인허가 준비, 세금계산서 발행, 계좌 개설처럼 실제 사업 준비 때문에 등록이 필요한 경우가 있을 수 있기 때문입니다.</p>
  <div class="dh-note">
    <p><strong>핵심 구분</strong><br>라운드 중 등록 가능 여부와 3라운드 이후 사업화자금 요건은 같은 질문이 아닙니다.</p>
  </div>

  <h2>예비창업자와 기존 창업자의 조건이 달랐습니다</h2>
  <p>FAQ는 신청자의 현재 상태에 따라 등록 방식을 나눠 설명했습니다. 예비창업자는 신규 사업자등록을 하는 경우, 기존 창업자는 기존 사업과 다른 <strong>이종업종</strong>으로 사업자등록을 하는 경우를 말했습니다.</p>
  <table>
    <thead>
      <tr>
        <th>신청자 상태</th>
        <th>FAQ에서 구분한 등록 방향</th>
        <th>확인할 점</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>예비창업자</strong></td>
        <td>신규 사업자등록</td>
        <td>등록하려는 업종과 아이디어가 실제 수행 계획과 이어지는지 확인합니다.</td>
      </tr>
      <tr>
        <td><strong>기존 창업자</strong></td>
        <td>이종업종 사업자등록</td>
        <td>기존 사업과 다른 업종인지, 운영기관이 요구하는 확인 방식이 있는지 봅니다.</td>
      </tr>
    </tbody>
  </table>
  <p>기존 창업자가 단순히 같은 사업의 업태나 항목을 조금 바꾸는 상황까지 FAQ의 “이종업종”으로 볼 수 있는지는 운영기관 확인이 필요합니다. 업종 해석이 애매하면 등록 전에 문의하는 편이 안전합니다.</p>

  <h2>등록 전과 등록 후, 두 번 알려야 했습니다</h2>
  <p>Q32에서 놓치기 쉬운 부분은 통보 순서입니다. 사업자등록이 허용된다는 답변 뒤에, 등록 예정일 전에 운영기관에 알리고 등록 결과도 안내해 달라는 취지의 요청이 붙어 있습니다.</p>
  <ol>
    <li>사업자등록이 필요한 이유를 정리합니다.</li>
    <li>예정 등록일, 개인·법인 형태, 업종과 아이템 관계를 적습니다.</li>
    <li>등록 전에 운영기관에 사실관계를 전달합니다.</li>
    <li>운영기관 안내에 따라 등록을 진행합니다.</li>
    <li>등록증이 나온 뒤 결과를 다시 공유합니다.</li>
  </ol>
  <p>문의할 때는 “등록해도 되나요?”만 보내기보다 자신의 트랙, 현재 라운드, 예비창업자 또는 기존 창업자 여부, 등록하려는 업종을 같이 적어야 답을 받기 쉽습니다.</p>

  <h2>3라운드 사업화자금 요건과 섞으면 안 됩니다</h2>
  <p>FAQ Q33은 3라운드의 차년도 사업화자금 단계에서 사업자등록이 필요하다는 점을 별도로 안내했습니다. 이 내용은 라운드 중 사업자등록이 가능한지와는 다른 질문입니다.</p>
  <p>예비창업자와 이종업종 창업자는 사업화자금 단계에서 요구되는 등록 시점이 다르게 안내됐습니다. 다만 실제 적용 시점은 선정 단계, 협약 안내와 새 공고에 따라 확인해야 하므로 이 글에서는 FAQ의 큰 구분만 짚습니다.</p>
  <p>정리하면, 라운드 중 등록은 허용될 수 있습니다. 하지만 뒤 라운드에서 사업화자금을 받기 위한 등록 요건을 이미 충족했다는 뜻은 아닙니다.</p>

  <h2>2026년 1기 기준 글입니다</h2>
  <p>이 글은 <a href="${FIRST_COHORT_PDF_URL}" target="_blank" rel="noopener noreferrer">2026년 모두의 창업 프로젝트 1기 통합 모집공고</a>와 일반·기술트랙 FAQ를 기준으로 작성했습니다. 중소벤처기업부는 <a href="${SECOND_COHORT_STATUS_URL}" target="_blank" rel="noopener noreferrer">2기 모집 관련 안내</a>에서 플랫폼 보안 강화와 신뢰 회복 뒤 2기 모집을 시작할 예정이라고 설명했습니다.</p>
  <p>따라서 이후 모집에서는 1기 FAQ보다 새 공고와 선정 뒤 운영기관 안내가 우선입니다. 등록 가능 여부, 업종 구분, 통보 방식과 사업화자금 요건이 바뀔 수 있습니다.</p>
  <p><strong class="dh-emphasis">사업자등록을 서두르기 전에 “지금 등록 가능한가”와 “다음 단계 지원 요건을 충족하는가”를 따로 적어보세요. 두 질문을 섞으면 운영기관에 물어야 할 핵심이 흐려집니다.</strong></p>

  <div class="dh-cta">
    <p>등록 시점과 업종을 정해야 한다면 독스헌트에서 현재 라운드, 사업화 단계와 남은 실행 과업을 먼저 정리해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=modoo-startup-business-registration-during-round&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 등록 전 과업 점검하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${FIRST_COHORT_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고</a></li>
      <li><a href="${FIRST_COHORT_PDF_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고 PDF</a></li>
      <li><a href="${FIRST_COHORT_FAQ_URL}" target="_blank" rel="noopener noreferrer">모두의 창업 일반·기술트랙 FAQ</a></li>
      <li><a href="${SECOND_COHORT_STATUS_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 모두의 창업 프로젝트 2기 모집 관련 안내</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

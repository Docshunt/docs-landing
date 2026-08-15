import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const FIRST_COHORT_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066642&cbIdx=310&parentSeq=1066642";
const FIRST_COHORT_PDF_URL =
  "https://www.mss.go.kr/common/board/Download.do?bcIdx=1066642&cbIdx=310&streFileNm=b1db7f65-7bee-461b-861a-168c81873553.pdf";
const FIRST_COHORT_FAQ_URL = "https://ec.jnu.ac.kr/bbs/ec/237/835571/download.do";
const SECOND_COHORT_STATUS_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1069596&cbIdx=87";

export const post88 = {
  page: 1,
  index: 1,
  slug: "modoo-startup-withdrawal-track-difference",
  sourceUrl: "https://docshunt.ai/blog_detail/modoo-startup-withdrawal-track-difference",
  title: "모두의 창업 중도포기, 모든 트랙에서 불이익이 없을까요?",
  titleLines: ["중도포기,", "트랙마다 조건이", "다릅니다"],
  titleLineBreaks: "always",
  description:
    "2026년 모두의 창업 중도포기 안내에서 일반·기술트랙 FAQ는 별도 패널티가 없다고 설명했습니다. 로컬트랙 공고에는 1라운드 뒤 정당한 사유 없는 포기에 향후 참여 제한 가능성이 적혀 있었습니다.",
  seo: {
    mainKeyword: "모두의 창업 중도포기",
    supportKeywords: ["모두의 창업 포기 불이익", "모두의 창업 일반 기술 트랙", "모두의 창업 로컬 트랙"],
    searchIntent: "모두의 창업에서 중도포기할 때 일반·기술트랙과 로컬트랙의 조건과 불이익이 같은지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.15",
  modifiedDate: "2026.08.15",
  verification: {
    date: "2026.08.15",
    note: "2026년 모두의 창업 1기 통합 모집공고와 일반·기술트랙 FAQ를 대조했습니다. 일반·기술트랙 FAQ의 중도포기 별도 패널티가 없다는 안내와 사전 통보 요청, 로컬트랙 1라운드 진출 뒤 정당한 사유 없는 사업수행 포기에 향후 참여 제한 가능성이 있다는 공고문을 구분했습니다. 2기에서는 새 공고와 트랙별 안내를 다시 확인해야 합니다.",
    sources: [
      { label: "중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고", url: FIRST_COHORT_NOTICE_URL },
      { label: "중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고 PDF", url: FIRST_COHORT_PDF_URL },
      { label: "모두의 창업 일반·기술트랙 FAQ", url: FIRST_COHORT_FAQ_URL },
      { label: "중소벤처기업부, 모두의 창업 프로젝트 2기 모집 관련 안내", url: SECOND_COHORT_STATUS_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00088-modoo-startup-withdrawal-track-difference-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00088-modoo-startup-withdrawal-track-difference-hero.jpg",
  paragraphs: [
    "2026년 모두의 창업 1기에서 중도포기 안내는 트랙마다 같지 않았습니다. 일반·기술트랙 FAQ는 별도 패널티가 없다고 안내했습니다. 로컬트랙 공고에는 참여 제한 가능성이 적혀 있었습니다.",
    "일반·기술트랙 FAQ는 포기 사유와 의사를 사전에 운영기관에 전달해 달라고 했습니다. 아무 연락 없이 프로그램 참여를 멈춰도 된다는 뜻은 아닙니다.",
    "로컬트랙은 1라운드 600명 진출 뒤 정당한 사유 없이 사업수행을 포기하면 향후 사업 참여가 제한될 수 있다고 공고했습니다.",
    "중도포기를 검토한다면 자신의 트랙, 현재 라운드, 협약 여부, 지원금 수령 상태를 먼저 확인하고 운영기관에 사실관계를 전달하세요. 다음 모집에서는 새 공고가 최종 기준입니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>2026년 모두의 창업 1기에서 중도포기 안내는 트랙마다 같지 않았습니다.</strong> 일반·기술트랙 FAQ는 별도 패널티가 없다고 안내했습니다. 로컬트랙 공고에는 특정 단계 뒤 정당한 사유 없이 포기할 경우 향후 참여가 제한될 수 있다는 내용이 있었습니다.</p>
  <p>“모두의 창업은 중간에 그만둬도 아무 불이익이 없다”거나 반대로 “포기하면 무조건 참여제한을 받는다”고 하나로 단정하면 두 규정을 모두 놓칩니다.</p>

  <h2>일반·기술트랙 FAQ는 별도 패널티가 없다고 안내했습니다</h2>
  <p><a href="${FIRST_COHORT_FAQ_URL}" target="_blank" rel="noopener noreferrer">2026년 모두의 창업 일반·기술트랙 FAQ</a>는 도전과 실패를 지원하는 프로젝트 취지를 고려해 중도포기에 별도 패널티가 없다고 설명했습니다.</p>
  <p>포기 사유와 의사를 사전에 운영기관에 전달해 달라고도 안내했습니다. 연락 없이 교육, 멘토링이나 평가에 나오지 않아도 된다는 뜻은 아닙니다.</p>

  <h2>로컬트랙은 1라운드 뒤 조건이 달랐습니다</h2>
  <p><a href="${FIRST_COHORT_PDF_URL}" target="_blank" rel="noopener noreferrer">2026년 모두의 창업 1기 통합 모집공고 PDF</a>의 로컬트랙 유의사항은 <strong>1라운드 600명 진출 뒤 정당한 사유 없이 사업수행을 포기하면 향후 사업 참여가 제한될 수 있다</strong>고 안내했습니다.</p>
  <table>
    <thead>
      <tr>
        <th>구분</th>
        <th>1기 공식 안내</th>
        <th>먼저 할 일</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>일반·기술트랙</strong></td>
        <td>FAQ상 별도 패널티 없음, 사전 통보 요청</td>
        <td>포기 사유와 의사를 운영기관에 전달</td>
      </tr>
      <tr>
        <td><strong>로컬트랙</strong></td>
        <td>1라운드 진출 뒤 정당한 사유 없는 포기에 참여제한 가능성</td>
        <td>현재 단계와 정당한 사유 인정 절차 확인</td>
      </tr>
    </tbody>
  </table>
  <p>로컬트랙 규정에는 “제한될 수 있다”고 적혀 있습니다. 모든 포기에 같은 제재가 자동 확정되는 것은 아닙니다. 그렇다고 운영기관 확인 없이 스스로 불이익이 없다고 판단해서도 안 됩니다.</p>

  <h2>포기 전에는 현재 단계부터 보세요</h2>
  <p>같은 트랙이라도 신청만 한 상태와 라운드에 진출해 지원을 받은 상태는 다릅니다. 협약을 체결했거나 활동자금과 사업화자금을 받았다면 공고 외에 협약서와 집행 안내도 함께 봐야 합니다.</p>
  <ol>
    <li>신청한 트랙과 운영기관을 확인합니다.</li>
    <li>현재 라운드와 선정 통보일을 확인합니다.</li>
    <li>협약 체결, 활동자금·사업화자금 수령 여부를 적습니다.</li>
    <li>참여가 어려워진 사유와 발생 시점을 적습니다.</li>
    <li>운영기관에 포기 절차와 제출할 서류를 확인합니다.</li>
  </ol>
  <div class="dh-note">
    <p><strong>문의할 때 함께 적을 내용</strong><br>트랙, 라운드, 운영기관, 협약 여부, 받은 지원, 포기 사유와 희망 종료일</p>
  </div>

  <h2>지원금을 받았다면 사용 내역과 남은 절차도 확인하세요</h2>
  <p>중도포기 자체의 패널티와 이미 받은 자금의 정산은 별개의 문제입니다. 지원금을 지급 목적에 맞게 사용했는지, 남은 금액과 제출할 보고가 있는지는 운영기관의 협약·집행 안내에 따라 별도로 확인해야 합니다.</p>
  <p>환수나 정산 조건을 추측해 임의로 추가 결제하거나 반환하지 마세요. 운영기관에 현재 사용 내역을 전달하고 공식 절차를 확인하는 편이 안전합니다.</p>

  <h2>다음 모집은 트랙별 유의사항이 기준입니다</h2>
  <p>이 글은 2026년 모두의 창업 1기 공고와 일반·기술트랙 FAQ를 대조한 내용입니다. 중소벤처기업부는 플랫폼 보안 강화 뒤 2기 모집을 시작할 예정이라고 안내했습니다.</p>
  <p>2기에서는 트랙 구성, 라운드와 중도포기 조건이 달라질 수 있습니다. <a href="${SECOND_COHORT_STATUS_URL}" target="_blank" rel="noopener noreferrer">2기 모집 관련 공식 안내</a>를 확인하세요. 새 공고와 선정 뒤 받은 운영기관 안내가 최종 기준입니다.</p>
  <p><strong class="dh-emphasis">중도포기 여부를 결정하기 전에 자신의 트랙과 현재 단계를 확인한 뒤 운영기관에 사실관계를 전달하세요.</strong></p>

  <div class="dh-cta">
    <p>계속 참여할지 판단하려면 남은 일정과 검증 목표를 먼저 나눠보세요. 독스헌트에서 현재 근거와 다음 과업을 다시 정리할 수 있습니다.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=modoo-startup-withdrawal-track-difference&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 남은 과업 점검하기</a>
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

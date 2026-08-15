import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const FIRST_COHORT_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066642&cbIdx=310&parentSeq=1066642";
const FIRST_COHORT_PDF_URL =
  "https://mss.go.kr/common/board/Download.do?bcIdx=1066642&cbIdx=310&streFileNm=b1db7f65-7bee-461b-861a-168c81873553.pdf";
const FIRST_COHORT_FAQ_URL = "https://ec.jnu.ac.kr/bbs/ec/237/835571/download.do";
const SECOND_COHORT_STATUS_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1069596&cbIdx=87";

export const post83 = {
  page: 1,
  index: 1,
  slug: "modoo-startup-one-line-idea-privacy",
  sourceUrl: "https://docshunt.ai/blog_detail/modoo-startup-one-line-idea-privacy",
  title: "모두의 창업 한 줄 아이디어, 비공개로 제출해도 될까요?",
  titleLines: ["모두의 창업 한 줄,", "비공개로 내도 될까요?"],
  titleLineBreaks: "always",
  description:
    "2026년 모두의 창업 한 줄 아이디어 공개 여부는 1기 FAQ에서 신청자가 선택할 수 있었습니다. 공개 범위와 선정 이후 동의 절차, 공개 전 확인할 사항을 함께 살폈습니다.",
  seo: {
    mainKeyword: "모두의 창업 한 줄 아이디어",
    supportKeywords: ["모두의 창업 아이디어 공개", "모두의 창업 신청", "아이디어 비공개"],
    searchIntent: "모두의 창업 신청 때 한 줄 아이디어 공개 여부를 선택할 수 있는지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.13",
  modifiedDate: "2026.08.13",
  verification: {
    date: "2026.08.13",
    note: "2026년 모두의 창업 1기 통합 모집공고와 일반·기술트랙 FAQ를 확인했습니다. 1기 FAQ에서는 도전자가 한 줄 아이디어의 공개·비공개를 선택합니다. 한 줄 외 세부 내용은 비공개입니다. 선정 이후 아이디어 발전 과정 공개는 도전자 동의를 전제로 합니다. 핵심·원천기술은 제외합니다. 이 내용은 1기 기준입니다. 다음 모집에서는 새 공고와 FAQ를 다시 확인해야 합니다.",
    sources: [
      { label: "중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고", url: FIRST_COHORT_NOTICE_URL },
      { label: "중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고 PDF", url: FIRST_COHORT_PDF_URL },
      { label: "모두의 창업 일반·기술트랙 FAQ", url: FIRST_COHORT_FAQ_URL },
      { label: "중소벤처기업부, 모두의 창업 프로젝트 2기 모집 관련 안내", url: SECOND_COHORT_STATUS_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00083-modoo-startup-one-line-idea-privacy-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00083-modoo-startup-one-line-idea-privacy-hero.jpg",
  paragraphs: [
    "2026년 모두의 창업 1기 일반·기술트랙에서는 한 줄 아이디어를 비공개로 제출할 수 있었습니다. 신청서에서 공개 여부를 확인한 뒤 직접 선택하는 방식이었습니다.",
    "공개 여부를 선택할 수 있었던 것은 한 줄 아이디어였습니다. 신청서에 적은 세부 내용은 비공개라고 FAQ가 안내했습니다.",
    "선정 이후 아이디어 발전 과정을 플랫폼에 소개하는 절차는 별도 동의를 전제로 했습니다. 핵심·원천기술은 공개 대상에서 제외한다고 안내했습니다.",
    "공개를 선택한다면 고객 문제와 가치만 간결하게 설명해야 합니다. 구현 방식·미공개 데이터·권리화 전 핵심 기술까지 한 줄에 넣지 않는 편이 안전합니다. 다음 모집에서는 새 공고와 FAQ를 최종 기준으로 확인해야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>2026년 모두의 창업 1기 일반·기술트랙에서는 한 줄 아이디어를 비공개로 제출할 수 있었습니다.</strong> 신청서에서 공개·비공개 여부를 확인한 뒤 도전자가 직접 선택하는 방식이었습니다.</p>
  <p>한 줄을 비공개로 선택한다고 신청서의 다른 항목을 비워도 된다는 뜻은 아닙니다. 공개 범위와 평가를 위해 작성하는 범위를 따로 봐야 합니다.</p>

  <h2>공개 선택 대상은 한 줄 아이디어였습니다</h2>
  <p><a href="${FIRST_COHORT_FAQ_URL}" target="_blank" rel="noopener noreferrer">모두의 창업 1기 일반·기술트랙 FAQ</a>는 도전자가 작성한 한 줄 아이디어만 공개 희망 선택에 따라 공개 여부가 결정된다고 안내합니다. 한 줄 외에 신청서에 작성한 아이디어 세부 내용은 비공개라고 설명합니다.</p>
  <table>
    <thead>
      <tr>
        <th>내용</th>
        <th>1기 FAQ의 안내</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>한 줄 아이디어</strong></td>
        <td>신청자가 공개·비공개 선택</td>
      </tr>
      <tr>
        <td><strong>신청서 세부 내용</strong></td>
        <td>비공개</td>
      </tr>
      <tr>
        <td><strong>선정 뒤 발전 과정</strong></td>
        <td>도전자 동의 후 공개 가능</td>
      </tr>
    </tbody>
  </table>
  <p>공개된 한 줄에는 플랫폼의 ‘좋아요’를 통해 반응을 확인하는 기능이 안내돼 있었습니다. 반응을 얻는 장점과 아이디어를 밖에 알리는 부담을 함께 보고 선택해야 합니다.</p>

  <h2>선정 뒤 공개는 신청 때 선택과 다른 절차입니다</h2>
  <p>같은 FAQ는 선정 이후 도전자의 동의를 받아 아이디어 발전 과정을 플랫폼에 공개할 수 있다고 설명합니다. 이때 아이템의 핵심·원천기술은 제외한다고 안내했습니다.</p>
  <p>신청 화면의 한 줄 공개 선택과 선정 뒤 홍보·성장 과정 공개 동의는 같은 결정이 아닙니다. 나중에 별도 동의 화면이나 안내를 받으면 공개 범위, 사용 기간과 매체를 다시 확인해야 합니다.</p>

  <h2>공개를 선택한다면 핵심 구현 방식은 덜어내세요</h2>
  <p>한 줄 아이디어는 고객이 겪는 문제와 제공하려는 가치를 알아볼 수 있을 정도면 됩니다. 아직 권리화하지 않은 구현 방식이나 재현 가능한 세부 기술까지 넣을 필요는 없습니다.</p>
  <div class="dh-note">
    <p><strong>공개 문장에 남길 내용</strong><br>누구의 어떤 문제를 어떤 가치로 줄이려는지</p>
    <p><strong>공개 전 다시 볼 내용</strong><br>핵심 알고리즘, 제조 조건, 미공개 데이터, 거래처 정보, 공동 창작자의 기여</p>
  </div>
  <p><a href="${FIRST_COHORT_PDF_URL}" target="_blank" rel="noopener noreferrer">1기 통합 모집공고 PDF</a>는 공개된 아이디어와 특허·디자인 출원 시점에 관한 주의사항도 안내합니다. 공고에는 공개 후 특허·실용신안 12개월, 디자인 6개월과 관련된 안내가 있습니다. 실제 권리 확보 가능성은 공개 내용과 출원 상황에 따라 달라질 수 있습니다. 중요한 기술이라면 공개 전에 전문가에게 확인하는 편이 안전합니다.</p>

  <h2>비공개를 선택해도 이 네 가지는 확인하세요</h2>
  <ol>
    <li>제출 직전 공개·비공개 선택값이 원하는 상태인지 확인합니다.</li>
    <li>한 줄과 세부 답변에 타인의 아이디어나 권리를 침해하는 내용이 없는지 봅니다.</li>
    <li>이전 팀원이나 공동 창작자의 기여가 있다면 권리 관계를 정리합니다.</li>
    <li>접수 결과와 최종 제출 상태를 플랫폼에서 확인합니다.</li>
  </ol>
  <p>비공개는 심사자가 내용을 보지 못한다는 뜻이 아닙니다. 평가에 필요한 세부 답변은 사실대로 작성하되, 공개 선택의 대상과 제출 범위를 구분해야 합니다.</p>

  <h2>다음 모집에서는 공개 설정을 다시 확인하세요</h2>
  <p>이 글은 2026년 모두의 창업 1기 FAQ를 기준으로 작성했습니다. 중소벤처기업부는 보안 강화를 거쳐 2기 모집을 시작할 예정이라고 안내했으므로, 다음 모집에서는 <a href="${SECOND_COHORT_STATUS_URL}" target="_blank" rel="noopener noreferrer">최신 공식 안내</a>와 실제 신청 화면의 공개 설정을 다시 확인해야 합니다.</p>
  <p><strong class="dh-emphasis">한 줄 아이디어의 공개 여부는 선택할 수 있었습니다. 제출 전에 선택값과 공개 문장을 직접 확인하는 과정은 신청자의 몫입니다.</strong></p>

  <div class="dh-cta">
    <p>공개할 한 줄과 심사용 세부 설명을 나눠 정리했다면, 독스헌트에서 고객 문제와 해결 방향이 한 흐름으로 이어지는지 점검해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=modoo-startup-one-line-idea-privacy&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 아이디어 정리하기</a>
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

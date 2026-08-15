import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const FIRST_COHORT_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066642&cbIdx=310&parentSeq=1066642";
const FIRST_COHORT_PDF_URL =
  "https://www.mss.go.kr/common/board/Download.do?bcIdx=1066642&cbIdx=310&streFileNm=b1db7f65-7bee-461b-861a-168c81873553.pdf";
const FIRST_COHORT_FAQ_URL = "https://ec.jnu.ac.kr/bbs/ec/237/835571/download.do";
const SECOND_COHORT_STATUS_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1069596&cbIdx=87";

export const post87 = {
  page: 1,
  index: 1,
  slug: "modoo-startup-activity-fund-eligible-expenses",
  sourceUrl: "https://docshunt.ai/blog_detail/modoo-startup-activity-fund-eligible-expenses",
  title: "모두의 창업 창업활동자금, 기차표와 재료비에 써도 될까요?",
  titleLines: ["창업활동자금,", "기차표·재료비", "써도 될까요?"],
  titleLineBreaks: "always",
  description:
    "2026년 모두의 창업 창업활동자금 사용처는 1기 일반·기술트랙 FAQ에 안내됐습니다. 대중교통 출장비와 재료비 등 허용 예시, 제한 업종과 활동보고서를 함께 살폈습니다.",
  seo: {
    mainKeyword: "모두의 창업 창업활동자금",
    supportKeywords: ["모두의 창업 활동자금 사용처", "모두의 창업 200만원", "모두의 창업 활동보고서"],
    searchIntent: "모두의 창업 일반·기술트랙 창업활동자금의 허용 사용처와 제한, 사용 뒤 보고 의무를 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.15",
  modifiedDate: "2026.08.15",
  verification: {
    date: "2026.08.15",
    note: "2026년 모두의 창업 1기 통합 모집공고와 일반·기술트랙 FAQ를 확인했습니다. 1기 일반·기술트랙 아이디어 선정자의 창업활동자금 200만원, 대중교통 출장비와 재료비 등 허용 예시, 제한 업종, 창업활동보고서 제출과 1라운드 평가 활용 안내를 근거로 작성했습니다. 2기에서는 새 공고와 사용 지침을 다시 확인해야 합니다.",
    sources: [
      { label: "중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고", url: FIRST_COHORT_NOTICE_URL },
      { label: "중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고 PDF", url: FIRST_COHORT_PDF_URL },
      { label: "모두의 창업 일반·기술트랙 FAQ", url: FIRST_COHORT_FAQ_URL },
      { label: "중소벤처기업부, 모두의 창업 프로젝트 2기 모집 관련 안내", url: SECOND_COHORT_STATUS_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00087-modoo-startup-activity-fund-eligible-expenses-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00087-modoo-startup-activity-fund-eligible-expenses-hero.jpg",
  paragraphs: [
    "2026년 모두의 창업 1기 일반·기술트랙 FAQ는 창업활동자금을 기차 등 대중교통 출장비와 창업 준비 재료비 등에 사용할 수 있다고 안내했습니다.",
    "항목 이름만 맞는다고 자동으로 인정되지는 않습니다. 아이디어를 실제 비즈니스로 구현하고 검증하는 활동과 연결돼야 합니다.",
    "온라인전자상거래 PG업종, 클린카드 제한 업종, 어린이집과 유치원, 환금성 업종 등 프로젝트 취지에 어긋나는 업종에서는 사용이 제한됐습니다.",
    "사용한 뒤에는 간략한 창업활동보고서를 내야 했고 자금을 계획적으로 썼는지는 1라운드 평가요소로 활용될 예정이었습니다. 2기에서는 새 공고와 집행 안내를 다시 확인해야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>2026년 모두의 창업 1기 일반·기술트랙 FAQ는 창업활동자금을 기차 등 대중교통 출장비와 창업 준비 재료비 등에 사용할 수 있다고 안내했습니다.</strong> 항목 이름만 맞는다고 자동으로 인정되지는 않습니다. 아이디어를 구현하고 검증하는 활동과 연결돼야 합니다.</p>
  <p>사용한 뒤에는 간략한 창업활동보고서도 제출해야 했습니다. 구매 내역만 남겨서는 부족합니다. 어떤 가설을 확인하려고 썼고 결과가 어땠는지 함께 설명할 수 있어야 합니다.</p>

  <h2>1기 일반·기술트랙의 초기 활동자금은 200만원이었습니다</h2>
  <p><a href="${FIRST_COHORT_PDF_URL}" target="_blank" rel="noopener noreferrer">2026년 모두의 창업 1기 통합 모집공고 PDF</a>는 일반·기술트랙 아이디어 선정자 4,000명에게 초기 창업활동자금 200만원을 지원하는 구조를 안내했습니다.</p>
  <p>창업활동자금은 뒤 라운드의 시제품 제작비나 차년도 사업화자금과 다른 항목입니다. 처음 선정됐다고 사업화자금 1억원을 바로 받는 구조가 아니었고 초기 아이디어를 구체화하고 검증하는 단계에 쓰였습니다.</p>

  <h2>대중교통비와 재료비는 허용 예시로 안내됐습니다</h2>
  <p><a href="${FIRST_COHORT_FAQ_URL}" target="_blank" rel="noopener noreferrer">모두의 창업 일반·기술트랙 FAQ</a>는 아이디어를 실제 비즈니스로 구현하고 검증하는 활동에 드는 비용을 지원한다고 설명했습니다. 창업 준비 활동을 위한 기차 등 대중교통 출장비와 필요한 재료비가 사용 예시로 제시됐습니다.</p>
  <table>
    <thead>
      <tr>
        <th>비용 예시</th>
        <th>활동과의 연결</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>기차·대중교통비</strong></td>
        <td>고객 인터뷰, 현장 조사나 검증 일정과 이어지는가?</td>
      </tr>
      <tr>
        <td><strong>재료비</strong></td>
        <td>시제품, 사용성 확인이나 아이디어 구현에 필요한가?</td>
      </tr>
      <tr>
        <td><strong>그 밖의 비용</strong></td>
        <td>운영기관의 집행 안내에서 허용 여부와 증빙 방식을 확인했는가?</td>
      </tr>
    </tbody>
  </table>
  <p>FAQ에 예시가 있다고 해서 모든 교통비와 구매가 조건 없이 인정되지는 않습니다. 개인 일정이나 아이디어와 무관한 구매가 섞이지 않도록 활동 목적과 결과를 구분해야 합니다.</p>

  <h2>결제 전에는 제한 업종도 확인하세요</h2>
  <p>같은 FAQ는 온라인전자상거래 PG업종, 클린카드 적용 제한 업종, 어린이집과 유치원, 환금성 업종 등 프로젝트 취지에 어긋나는 업종에서의 사용을 제한한다고 안내했습니다.</p>
  <p>클린카드 제한 업종에는 유흥, 위생, 레저, 사행과 기타 제한 범주가 포함됐습니다. 결제가 됐다고 해서 사용까지 적정한 것은 아닙니다. 업종 분류가 모호하면 결제 전에 운영기관의 안내를 확인하는 편이 안전합니다.</p>
  <div class="dh-note">
    <p><strong>결제 전 확인</strong><br>활동 목적, 아이디어와의 연관성, 판매처 업종, 운영기관의 허용 기준</p>
  </div>

  <h2>활동보고서는 지출 목록보다 검증 흐름이 보여야 합니다</h2>
  <p>1기 FAQ는 활동자금 사용 뒤 간략한 창업활동보고서를 제출하도록 안내했습니다. 자금을 얼마나 알차고 계획적으로 사용했는지는 1라운드 평가요소로 활용될 예정이라고도 설명했습니다.</p>
  <p>보고서를 준비할 때는 지출 건마다 아래 네 항목을 연결해두면 활동의 흐름을 확인하기 쉽습니다. 공식 서식은 아니며 기록을 정리하기 위한 실무 점검 순서입니다.</p>
  <ol>
    <li>확인하려던 고객 문제나 가설을 적습니다.</li>
    <li>어떤 활동을 위해 비용이 필요했는지 기록합니다.</li>
    <li>활동 뒤 확인한 결과와 남은 문제를 적습니다.</li>
    <li>다음 라운드에서 무엇을 바꿀지 연결합니다.</li>
  </ol>
  <p>영수증이나 결제 내역만 모아두고 활동 기록을 나중에 떠올리면 결과를 설명하기 어렵습니다. 운영기관이 요구하는 증빙 방식에 맞춰 결제 시점부터 자료를 함께 정리하세요.</p>

  <h2>2기는 새 공고와 사용 지침이 기준입니다</h2>
  <p>이 글은 2026년 1기 일반·기술트랙의 공고와 FAQ를 기준으로 작성했습니다. 중소벤처기업부는 플랫폼 보안 강화 뒤 2기 모집을 시작할 예정이라고 안내했습니다. 새 모집에서는 금액, 대상, 허용 사용처와 보고 양식이 달라질 수 있습니다.</p>
  <p><a href="${SECOND_COHORT_STATUS_URL}" target="_blank" rel="noopener noreferrer">2기 모집 관련 공식 안내</a>를 확인하세요. 새 공고와 선정 뒤 받은 운영기관의 집행 지침이 최종 기준입니다.</p>
  <p><strong class="dh-emphasis">쓸 수 있는 비용인지 묻기 전에 어떤 아이디어를 어떻게 검증하려는 지출인지 한 문장으로 설명해보세요.</strong></p>

  <div class="dh-cta">
    <p>활동 목적과 예상 결과를 정했다면 독스헌트에서 고객 문제, 검증 방법과 다음 실행이 서로 맞물리는지 점검해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=modoo-startup-activity-fund-eligible-expenses&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 검증계획 정리하기</a>
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

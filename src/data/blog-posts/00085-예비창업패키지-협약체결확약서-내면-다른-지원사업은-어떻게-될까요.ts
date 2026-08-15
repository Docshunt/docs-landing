import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const PRE_STARTUP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";
const PRE_STARTUP_PDF_URL =
  "https://www.mss.go.kr/common/board/Download.do?bcIdx=1066579&cbIdx=310&streFileNm=236d517e-fc4d-4607-8ba0-6b2557afeb62.pdf";

export const post85 = {
  page: 1,
  index: 1,
  slug: "pre-startup-package-agreement-commitment-other-programs",
  sourceUrl: "https://docshunt.ai/blog_detail/pre-startup-package-agreement-commitment-other-programs",
  title: "예비창업패키지 협약체결확약서, 내면 다른 지원사업은 어떻게 될까요?",
  titleLines: ["예비창업패키지", "협약체결확약서,", "제출 전에 확인하세요"],
  titleLineBreaks: "always",
  description:
    "2026년 예비창업패키지 협약체결확약서를 제출하면 창업진흥원이 수행하는 다른 창업사업화 지원사업의 선정 절차에서 제외될 수 있습니다. 제출 기한과 결정 전에 볼 항목을 짚었습니다.",
  seo: {
    mainKeyword: "예비창업패키지 협약체결확약서",
    supportKeywords: ["예비창업패키지 중복선정", "창업지원사업 중복수행", "협약체결확약서 제출기한"],
    searchIntent: "예비창업패키지 확약서 제출 기한과 제출 뒤 다른 지원사업 선정 절차에 생기는 변화를 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.15",
  modifiedDate: "2026.08.15",
  verification: {
    date: "2026.08.15",
    note: "중소벤처기업부의 2026년 예비창업패키지 예비창업자 수정 모집공고(2차)를 확인했습니다. 1단계 선정 통보 뒤 확약서 제출 기한, 기한을 넘겼을 때의 선정 취소 가능성, 다른 창업진흥원 사업의 선정 절차 제외, 최초 확약 사업 1개만 수행할 수 있다는 규정을 근거로 작성했습니다. 다음 모집에서는 새 공고와 선정 안내문을 다시 확인해야 합니다.",
    sources: [
      { label: "중소벤처기업부, 2026년 예비창업패키지 예비창업자 수정 모집공고(2차)", url: PRE_STARTUP_NOTICE_URL },
      { label: "중소벤처기업부, 2026년 예비창업패키지 수정 모집공고 PDF", url: PRE_STARTUP_PDF_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00085-pre-startup-package-agreement-commitment-other-programs-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00085-pre-startup-package-agreement-commitment-other-programs-hero.jpg",
  paragraphs: [
    "2026년 예비창업패키지에서 협약체결확약서를 제출하면 창업진흥원이 수행하는 다른 창업사업화 지원사업과 창업성공패키지의 선정 절차에서 제외될 수 있었습니다.",
    "확약서는 선정 결과를 받았다는 단순한 회신과 다릅니다. 중복으로 선정된 사업이 있다면 실제로 수행할 한 사업을 고르는 단계에 가깝습니다.",
    "1단계 선정 통보를 받았다면 요청일 다음 영업일부터 3일 이내, 마지막 날 17시까지 제출해야 했습니다. 기한을 넘기면 선정이 취소되고 차순위자에게 기회가 넘어갈 수 있었습니다.",
    "제출 전에는 다른 사업의 현재 단계, 지원 내용, 협약기간과 반드시 끝내야 하는 과업을 한 표에 나란히 적어보세요. 다음 모집에서는 새 공고와 개별 선정 안내를 최종 기준으로 확인해야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>2026년 예비창업패키지에서 협약체결확약서를 제출하면 창업진흥원이 수행하는 다른 창업사업화 지원사업과 창업성공패키지의 선정 절차에서 제외될 수 있었습니다.</strong> 이미 다른 대상 사업에 확약서를 냈다면 최초로 확약한 한 사업만 협약을 체결하고 수행할 수 있었습니다.</p>
  <p>확약서는 선정 결과를 받았다는 단순 회신과 다릅니다. 여러 지원사업의 절차가 진행 중이라면 실제로 수행할 하나를 고르는 단계에 가깝습니다.</p>

  <h2>제출 기한은 선정 통보일만 보고 계산하면 안 됩니다</h2>
  <p><a href="${PRE_STARTUP_PDF_URL}" target="_blank" rel="noopener noreferrer">2026년 예비창업패키지 수정 모집공고 PDF</a>는 1단계 선정 통보를 받은 예비창업자가 확약서 제출 요청일의 <strong>다음 영업일부터 3일 이내</strong>에 서류를 내도록 안내했습니다. 마지막 날 마감 시각은 17시였고 토요일과 공휴일은 계산에서 제외했습니다.</p>
  <p>안내 문자를 받은 날부터 사흘을 세면 실제 기한과 어긋날 수 있습니다. 문자나 이메일에 적힌 요청일, 영업일 계산, 마지막 날 시각을 각각 확인해야 합니다.</p>
  <div class="dh-note">
    <p><strong>기한 안에 제출</strong><br>협약 준비 절차로 넘어갑니다.</p>
    <p><strong>기한 안에 미제출</strong><br>선정이 취소되고 차순위자에게 참여 기회가 주어질 수 있습니다.</p>
  </div>

  <h2>확약서 제출 뒤 다른 선정 절차가 멈출 수 있습니다</h2>
  <p>같은 공고는 확약서를 제출하면 그 전에 신청한 창업진흥원 수행 타 창업사업화 지원사업과 창업성공패키지의 선정 절차에서 제외된다고 안내했습니다. 확약서 제출 전까지 진행한 서류평가나 발표평가 단계도 포함됩니다.</p>
  <p>공고에는 초기창업패키지, 초격차 스타트업 프로젝트, 창업중심대학, 재도전성공패키지와 청년창업사관학교 등이 관련 사업으로 제시돼 있습니다. 모든 정부지원사업에 같은 규칙이 적용된다고 보면 안 됩니다. 내가 함께 신청한 사업이 공고의 대상 범위에 들어가는지 원문에서 대조해야 합니다.</p>

  <h2>다른 사업에도 확약했다면 제출 순서부터 보세요</h2>
  <p>이미 다른 대상 사업에 협약체결확약서를 제출해 협약을 앞두고 있다면, 2026년 공고에서는 <strong>최초로 확약서를 제출한 한 개 사업만</strong> 협약을 체결하고 수행할 수 있었습니다.</p>
  <table>
    <thead>
      <tr>
        <th>확인할 상황</th>
        <th>제출 전 볼 내용</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>다른 사업도 평가 중</strong></td>
        <td>확약서 제출 뒤 해당 선정 절차가 제외 대상인지 확인합니다.</td>
      </tr>
      <tr>
        <td><strong>다른 사업에 이미 확약</strong></td>
        <td>최초 확약 일시와 실제 수행 가능한 사업을 확인합니다.</td>
      </tr>
      <tr>
        <td><strong>사업 범위가 모호함</strong></td>
        <td>두 공고의 중복 수행 조항과 주관기관 안내를 함께 확인합니다.</td>
      </tr>
    </tbody>
  </table>

  <h2>지원금과 함께 완수 조건도 비교하세요</h2>
  <p>선택할 때는 지원 금액 외에도 협약기간, 의무 프로그램, 사업자등록 시점, 사업비 집행 방식과 최종 산출물을 함께 봐야 합니다. 현재 팀이 정해진 기간에 실제로 끝낼 수 있는지도 중요합니다.</p>
  <ol>
    <li>진행 중인 지원사업 이름과 현재 평가 단계를 적습니다.</li>
    <li>각 사업의 확약서 제출 기한과 협약기간을 확인합니다.</li>
    <li>선정 절차 제외와 중복 수행 제한 문구를 원문에서 찾습니다.</li>
    <li>사업비보다 먼저 반드시 참여할 교육·멘토링·평가 일정을 비교합니다.</li>
    <li>그래도 판단이 서지 않으면 제출 전에 해당 주관기관에 같은 사실관계를 전달해 확인합니다.</li>
  </ol>
  <p>문의에는 “둘 다 해도 되나요?”라는 질문만 쓰기보다 다른 사업명, 현재 단계, 확약서 제출 여부와 제출 시각을 함께 적어야 정확한 답을 받기 쉽습니다.</p>

  <h2>다음 모집은 새 공고와 선정 안내가 기준입니다</h2>
  <p>이 글은 종료된 2026년 예비창업패키지 수정 모집공고를 설명합니다. 다음 모집에서는 대상 사업의 범위, 제출 기한과 확약 방식이 달라질 수 있습니다. <a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">공식 사업공고</a>와 선정 통보 때 받은 안내를 최종 기준으로 삼으세요.</p>
  <p><strong class="dh-emphasis">협약체결확약서는 단순 확인으로 끝나지 않습니다. 실제로 수행할 사업을 정하는 단계가 될 수 있으니 제출 버튼을 누르기 전에 다른 지원사업의 현재 상태부터 확인하세요.</strong></p>

  <div class="dh-cta">
    <p>선택한 사업이 정해졌다면 독스헌트에서 협약기간 안에 끝낼 과업, 비용과 검증 일정을 나란히 정리해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=pre-startup-package-agreement-commitment-other-programs&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 실행계획 정리하기</a>
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

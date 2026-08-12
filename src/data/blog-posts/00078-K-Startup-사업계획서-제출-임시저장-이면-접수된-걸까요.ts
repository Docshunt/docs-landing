import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const PRE_STARTUP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";
const PRE_STARTUP_PDF_URL =
  "https://www.mss.go.kr/common/board/Download.do?bcIdx=1066579&cbIdx=310&streFileNm=236d517e-fc4d-4607-8ba0-6b2557afeb62.pdf";
const K_STARTUP_URL = "https://www.k-startup.go.kr";

export const post78 = {
  page: 1,
  index: 1,
  slug: "k-startup-business-plan-submission-complete",
  sourceUrl: "https://docshunt.ai/blog_detail/k-startup-business-plan-submission-complete",
  title: "K-Startup 사업계획서 제출, ‘임시저장’이면 접수된 걸까요?",
  titleLines: ["K-Startup", "사업계획서 제출,", "접수된 걸까요?"],
  titleLineBreaks: "always",
  description:
    "K-Startup 사업계획서 제출은 임시저장만으로 끝나지 않습니다. 2026년 예비창업패키지 공고를 바탕으로 ‘제출완료’ 버튼, 마감 시각, 제출 뒤 접수 상태를 확인하는 순서를 정리했습니다.",
  seo: {
    mainKeyword: "K-Startup 사업계획서 제출",
    supportKeywords: ["K-Startup 제출완료", "사업계획서 임시저장", "창업지원사업 접수"],
    searchIntent: "K-Startup에서 사업계획서를 임시저장한 상태와 최종 제출한 상태를 구분하고 마감 전에 접수 여부를 확인하는 법을 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.12",
  modifiedDate: "2026.08.12",
  verification: {
    date: "2026.08.12",
    note: "중소벤처기업부의 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)와 첨부 PDF에서 K-Startup 온라인 신청, ‘제출완료’ 버튼을 통한 최종 제출, 마감 시각 이후 신규 신청 제한, 접수 이후 제출 내용의 수정·삭제 제한을 확인했습니다. 화면 명칭과 절차는 사업별로 달라질 수 있으므로 실제 신청 공고와 K-Startup 화면을 최종 기준으로 삼아야 합니다.",
    sources: [
      { label: "중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)", url: PRE_STARTUP_NOTICE_URL },
      { label: "중소벤처기업부, 2026년 예비창업패키지 모집공고 PDF", url: PRE_STARTUP_PDF_URL },
      { label: "K-Startup 창업지원포털", url: K_STARTUP_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00078-k-startup-business-plan-submission-complete-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00078-k-startup-business-plan-submission-complete-hero.jpg",
  paragraphs: [
    "K-Startup에서 사업계획서를 임시저장했다면 최종 접수까지 끝났다고 볼 수 없습니다. 지원하려는 공고의 신청 화면에서 ‘제출완료’ 단계와 최종 상태를 따로 확인해야 합니다.",
    "2026년 예비창업패키지 공고는 ‘제출완료’ 버튼을 클릭해야 최종 제출된다고 안내했습니다. 마감 시각인 2026년 3월 26일 18시 이후에는 신규 신청을 할 수 없었습니다.",
    "최종 제출 전에 첨부파일이 열리는지, 선택한 주관기관과 신청 분야가 맞는지, 상태 표시가 바뀌었는지 한 번씩 확인하세요.",
    "다른 사업에는 화면 이름과 수정 가능 조건이 다를 수 있으므로 해당 공고와 실제 K-Startup 신청 화면을 최종 기준으로 삼아야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>K-Startup에서 사업계획서를 임시저장한 것만으로는 최종 접수를 확인할 수 없습니다.</strong> 지원 공고의 신청 화면에서 ‘제출완료’ 단계까지 진행하고 제출 상태가 바뀌었는지 확인해야 합니다.</p>
  <p>2026년 예비창업패키지 공고는 <strong>‘제출완료’ 버튼을 클릭해야 최종 제출된다</strong>고 안내했습니다. 이 글은 해당 공고를 예시로 임시저장과 최종 제출 사이에서 확인할 항목을 정리합니다.</p>

  <h2>임시저장은 작성 중인 내용을 보관하는 단계입니다</h2>
  <p>신청서를 오래 작성하다 보면 중간 저장이 필요합니다. 하지만 저장된 화면을 다시 열 수 있다는 사실과 접수가 끝났다는 사실은 다릅니다.</p>
  <div class="dh-note">
    <p><strong>임시저장 뒤</strong><br>작성 항목과 첨부파일을 다시 확인합니다.</p>
    <p><strong>최종 제출 뒤</strong><br>신청 목록에서 제출 상태를 확인합니다.</p>
  </div>
  <p>창을 닫기 전에 “저장했습니다”라는 안내만 보고 끝내지 마세요. 최종 제출 버튼이 남아 있다면 아직 할 일이 있는지 공고의 신청 절차를 다시 읽어야 합니다.</p>

  <h2>‘제출완료’를 누르기 전에 네 가지를 확인하세요</h2>
  <ol>
    <li><strong>지원 공고:</strong> 이름이 비슷한 다른 공고를 열지 않았는지 확인합니다.</li>
    <li><strong>신청 정보:</strong> 주관기관, 신청 분야, 대표자 정보가 의도한 선택과 같은지 봅니다.</li>
    <li><strong>첨부파일:</strong> 최신 파일인지, 열었을 때 글자와 표가 정상인지 확인합니다.</li>
    <li><strong>필수 항목:</strong> 화면에 빠진 답변이나 동의 항목이 없는지 처음부터 훑습니다.</li>
  </ol>
  <p>파일 이름이 같아도 내용이 이전 버전일 수 있습니다. 제출용 폴더에서 파일을 직접 열어 첫 장과 마지막 장, 표가 많은 페이지를 확인한 뒤 첨부하세요.</p>

  <h2>마감 시각은 파일을 올리기 시작하는 시간이 아닙니다</h2>
  <p><a href="${PRE_STARTUP_PDF_URL}" target="_blank" rel="noopener noreferrer">2026년 예비창업패키지 모집공고 PDF</a>의 신청 기간은 2026년 3월 6일부터 3월 26일 18시까지였습니다. 18시 이후에는 신규 신청이 불가능하다고 안내했습니다.</p>
  <p>마감 직전에는 로그인, 본인인증, 파일 업로드, 필수 항목 수정에 시간이 걸릴 수 있습니다. 마감 시각을 최종 버튼을 누르기 시작하는 시간으로 잡지 말고 제출 상태를 다시 열어볼 시간까지 남겨두세요.</p>
  <table>
    <thead>
      <tr>
        <th>시점</th>
        <th>할 일</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>제출 전날</strong></td>
        <td>필수 항목과 첨부파일을 끝까지 입력해봅니다.</td>
      </tr>
      <tr>
        <td><strong>제출 직전</strong></td>
        <td>선택 정보와 파일 버전을 마지막으로 확인합니다.</td>
      </tr>
      <tr>
        <td><strong>제출 직후</strong></td>
        <td>신청 목록의 상태와 첨부 내용을 다시 확인합니다.</td>
      </tr>
    </tbody>
  </table>

  <h2>최종 제출 뒤에는 수정 가능 조건을 공고에서 확인하세요</h2>
  <p>같은 공고는 2026년 3월 26일 18시 접수 이후 사업계획서 등 모든 내용을 수정하거나 삭제할 수 없다고 안내했습니다. 따라서 제출한 다음에 고치면 된다고 전제해서는 안 됩니다.</p>
  <p>다만 수정 가능 여부와 방법은 사업별 공고와 시스템 상태에 따라 다를 수 있습니다. 오류를 발견했다면 임의로 중복 신청하지 말고 공고에 적힌 문의처와 <a href="${K_STARTUP_URL}" target="_blank" rel="noopener noreferrer">K-Startup</a> 신청 화면의 안내를 먼저 확인하세요.</p>

  <h2>제출 확인 화면을 다시 열어보세요</h2>
  <ul>
    <li>신청 목록에서 대상 공고의 상태가 최종 제출로 표시되는가?</li>
    <li>내가 선택한 주관기관과 신청 분야가 맞는가?</li>
    <li>첨부한 파일의 이름과 내용이 최종본과 같은가?</li>
    <li>완료 화면이나 신청 이력을 필요할 때 다시 확인할 수 있는가?</li>
  </ul>
  <p>화면을 캡처해두는 일도 도움이 되지만 캡처 자체가 접수를 대신하지는 않습니다. 실제 신청 목록과 공고의 최종 제출 조건을 기준으로 확인하세요.</p>
  <p><strong class="dh-emphasis">임시저장을 마쳤다면 ‘제출완료’ 버튼과 신청 목록의 상태를 한 번 더 확인하세요.</strong></p>

  <div class="dh-cta">
    <p>K-Startup에 올릴 최종 파일을 준비하고 있다면, 공고 질문과 근거가 빠짐없이 연결됐는지 독스헌트에서 먼저 점검해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=k-startup-business-plan-submission-complete&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 제출 전 점검하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)</a></li>
      <li><a href="${PRE_STARTUP_PDF_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 모집공고 PDF</a></li>
      <li><a href="${K_STARTUP_URL}" target="_blank" rel="noopener noreferrer">K-Startup 창업지원포털</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const PRE_STARTUP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";
const PRE_STARTUP_PDF_URL =
  "https://www.mss.go.kr/common/board/Download.do?bcIdx=1066579&cbIdx=310&streFileNm=236d517e-fc4d-4607-8ba0-6b2557afeb62.pdf";
const K_STARTUP_URL = "https://www.k-startup.go.kr";

export const post82 = {
  page: 1,
  index: 1,
  slug: "pre-startup-package-bonus-evidence-submission",
  sourceUrl: "https://docshunt.ai/blog_detail/pre-startup-package-bonus-evidence-submission",
  title: "예비창업패키지 가점 증빙, 선정된 뒤 내도 될까요?",
  titleLines: ["예비창업패키지 가점,", "증빙은 언제 낼까요?"],
  titleLineBreaks: "always",
  description:
    "2026년 예비창업패키지 가점 증빙은 사업 신청 때 제출해야 하며, 빠뜨리면 가점으로 인정되지 않습니다. 자격 증빙과 가점 증빙의 제출 시점이 어떻게 다른지 정리했습니다.",
  seo: {
    mainKeyword: "예비창업패키지 가점",
    supportKeywords: ["예비창업패키지 증빙서류", "사업계획서 제출서류", "K-Startup 가점"],
    searchIntent: "예비창업패키지 가점 증빙을 언제 어떤 방식으로 제출해야 인정되는지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.13",
  modifiedDate: "2026.08.13",
  verification: {
    date: "2026.08.13",
    note: "중소벤처기업부의 2026년 예비창업패키지 예비창업자 수정 모집공고와 첨부 PDF를 확인했습니다. 공고는 가점 증빙을 사업 신청 시 제출하고 미제출하면 가점으로 인정하지 않는다고 안내합니다. 반면 예비창업자 여부를 확인하는 일부 자격 서류는 서류평가 통과자에게 별도 요청할 수 있어 제출 시점이 다릅니다.",
    sources: [
      { label: "중소벤처기업부, 2026년 예비창업패키지 예비창업자 수정 모집공고", url: PRE_STARTUP_NOTICE_URL },
      { label: "중소벤처기업부, 2026년 예비창업패키지 예비창업자 수정 모집공고 PDF", url: PRE_STARTUP_PDF_URL },
      { label: "K-Startup 누리집", url: K_STARTUP_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00082-pre-startup-package-bonus-evidence-submission-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00082-pre-startup-package-bonus-evidence-submission-hero.jpg",
  paragraphs: [
    "2026년 예비창업패키지 가점 증빙은 선정된 뒤 보완하는 서류가 아닙니다. 공고는 사업 신청 때 제출해야 하며, 미제출하면 가점으로 인정하지 않는다고 안내합니다.",
    "예비창업자 여부를 확인하는 일부 자격 서류는 서류평가 통과자에게 별도 요청할 수 있습니다. 이 절차를 가점 증빙에도 적용된다고 생각하면 제출 시기를 놓칠 수 있습니다.",
    "가점 항목마다 제출 방법이 다릅니다. 첨부파일이 필요한 항목, 사업계획서 내용으로 확인하는 항목, 창업진흥원이 직접 확인하는 항목을 최신 공고의 증빙서류 안내에서 나눠 봐야 합니다.",
    "제출 전에는 가점 항목명, 인정 기간, 발급기관, 신청자 이름, 파일 상태와 K-Startup 최종 접수 화면을 함께 확인하세요.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>2026년 예비창업패키지 가점 증빙은 사업 신청 때 제출해야 합니다.</strong> 공고는 가점 증빙을 빠뜨리면 가점으로 인정하지 않는다고 안내합니다. 선정된 뒤 내거나 서류평가 통과 후 보완할 수 있다고 생각하면 제출 시기를 놓칠 수 있습니다.</p>
  <p>헷갈리는 이유는 신청자격을 확인하는 서류와 가점 증빙의 제출 시점이 다를 수 있기 때문입니다. 두 묶음을 따로 관리해야 합니다.</p>

  <h2>가점 증빙은 신청할 때 제출하는 서류입니다</h2>
  <p><a href="${PRE_STARTUP_PDF_URL}" target="_blank" rel="noopener noreferrer">2026년 예비창업패키지 수정 모집공고 PDF</a>는 가점 증빙서류를 사업 신청 시 제출하며, 미제출하면 가점으로 인정하지 않는다고 명시합니다. 공고에서 정한 가점 합계의 상한은 3점입니다.</p>
  <p>해당 공고에는 인공지능 관련 대학원 졸업, 최근 2년 이내 중앙정부 주관 전국 규모 창업경진대회 수상, 기후테크 분야 등 여러 확인 항목이 제시돼 있습니다. 다만 모든 항목에 같은 파일을 내는 것은 아닙니다.</p>
  <ul>
    <li>증빙 파일을 첨부해야 하는 항목</li>
    <li>사업계획서 기재 내용으로 확인하는 항목</li>
    <li>창업진흥원이 보유 정보로 확인해 별도 제출이 필요 없는 항목</li>
  </ul>
  <p>내가 해당한다고 판단한 뒤 임의의 증명서를 붙이지 말고, 공고의 별첨 증빙서류 목록에서 항목별 제출 방법을 확인해야 합니다.</p>

  <h2>자격 증빙의 ‘추후 제출’과 혼동하지 마세요</h2>
  <p>같은 공고는 서류평가 통과자를 대상으로 예비창업자 해당 여부를 확인할 수 있는 서류를 별도로 요청할 수 있다고 안내합니다. 사실증명, 사업자등록증명, 폐업사실증명, 등기사항전부증명서 등이 여기에 포함될 수 있습니다.</p>
  <table>
    <thead>
      <tr>
        <th>구분</th>
        <th>확인 목적</th>
        <th>제출 시점</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>가점 증빙</strong></td>
        <td>공고의 가점 대상인지 확인</td>
        <td>사업 신청 시</td>
      </tr>
      <tr>
        <td><strong>신청자격 증빙</strong></td>
        <td>예비창업자와 제외 사유 확인</td>
        <td>공고와 별도 안내에 따름</td>
      </tr>
      <tr>
        <td><strong>사업계획서</strong></td>
        <td>아이템과 역량 평가</td>
        <td>온라인 신청 시</td>
      </tr>
    </tbody>
  </table>
  <p>“증빙은 나중에 낸다”는 말을 들었다면 어떤 증빙을 뜻하는지 먼저 확인하세요. 신청자격 서류의 후속 안내가 가점 파일의 보완 기회를 뜻하지는 않습니다.</p>

  <h2>가점 항목은 문구보다 인정 조건을 보세요</h2>
  <p>수상 이력이 있다고 모두 같은 가점이 되는 것은 아닙니다. 주관 기관, 대회 규모, 훈격, 수상일과 인정 기간이 공고 조건에 맞아야 합니다. 졸업이나 분야 관련 항목도 공고가 정한 확인 방식이 우선입니다.</p>
  <div class="dh-note">
    <p><strong>예시</strong><br>수상증명서에 대회명과 훈격은 있지만 수상일이 보이지 않는다면, 인정 기간을 확인하기 어려울 수 있습니다. 별첨이 요구하는 정보가 한 문서에 모두 있는지 확인하세요.</p>
  </div>
  <p>스캔본의 글자가 흐리거나 이름이 신청자 정보와 다르면 판독이 어려울 수 있습니다. 개명이나 영문명처럼 설명이 필요한 경우에는 공고와 K-Startup 안내에서 허용하는 증빙 방식을 확인해야 합니다.</p>

  <h2>K-Startup 최종 접수 전에 파일을 다시 열어보세요</h2>
  <ol>
    <li><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">최신 공고</a>의 가점 표와 증빙서류 별첨을 함께 엽니다.</li>
    <li>해당 항목, 인정 기간, 점수와 최대 합계를 기록합니다.</li>
    <li>파일 첨부·사업계획서 확인·기관 확인 중 제출 방식을 표시합니다.</li>
    <li>증빙에 신청자 이름, 발급기관, 날짜와 필요한 사실이 보이는지 확인합니다.</li>
    <li><a href="${K_STARTUP_URL}" target="_blank" rel="noopener noreferrer">K-Startup</a>에서 첨부 상태와 제출완료 여부를 확인합니다.</li>
  </ol>
  <p><strong class="dh-emphasis">예비창업패키지 가점은 해당 사실만으로 생기지 않습니다. 공고가 정한 시점과 방식으로 확인돼야 합니다.</strong></p>

  <div class="dh-cta">
    <p>가점 증빙과 신청자격 서류를 나눠 정리했다면, 독스헌트에서 최신 공고의 사업계획서 문항과 제출 준비 사항을 함께 점검해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=pre-startup-package-bonus-evidence-submission&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 제출 준비하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 예비창업자 수정 모집공고</a></li>
      <li><a href="${PRE_STARTUP_PDF_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 예비창업자 수정 모집공고 PDF</a></li>
      <li><a href="${K_STARTUP_URL}" target="_blank" rel="noopener noreferrer">K-Startup 누리집</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

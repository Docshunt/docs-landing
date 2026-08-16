import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const PRE_STARTUP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";
const PRE_STARTUP_PDF_URL =
  "https://www.mss.go.kr/common/board/Download.do?bcIdx=1066579&cbIdx=310&streFileNm=236d517e-fc4d-4607-8ba0-6b2557afeb62.pdf";

export const post90 = {
  page: 1,
  index: 1,
  slug: "pre-startup-package-review-objection-six-days",
  sourceUrl: "https://docshunt.ai/blog_detail/pre-startup-package-review-objection-six-days",
  title: "예비창업패키지 이의신청, 주말은 빼고 6일일까요?",
  titleLines: ["예비창업패키지", "이의신청 6일,", "주말도 셀까요?"],
  titleLineBreaks: "always",
  description:
    "2026년 예비창업패키지 이의신청 기간은 결과통보일 다음 날부터 6일 이내였고 토요일·공휴일을 포함했습니다. 횟수와 제출처까지 함께 확인하세요.",
  seo: {
    mainKeyword: "예비창업패키지 이의신청",
    supportKeywords: ["예비창업패키지 이의제기", "예비창업패키지 평가결과", "예비창업패키지 이의신청 기간"],
    searchIntent: "평가결과 통보 뒤 이의신청 6일의 계산법·횟수·제출처를 확인한다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.16",
  modifiedDate: "2026.08.16",
  verification: {
    date: "2026.08.16",
    note: "중소벤처기업부의 2026년 예비창업패키지 예비창업자 수정 모집공고(2차)를 확인했습니다. 평가 단계별 결과에 대한 이의신청은 결과통보일 다음 날부터 6일 이내, 토요일 및 공휴일 포함, 1회에 한해 평가를 운영한 주관기관에 신청 가능하다는 문구를 기준으로 작성했습니다. 실제 제출 마감 시각과 방식은 개별 통보문과 주관기관 안내를 최종 기준으로 확인해야 합니다.",
    sources: [
      { label: "중소벤처기업부, 2026년 예비창업패키지 예비창업자 수정 모집공고(2차)", url: PRE_STARTUP_NOTICE_URL },
      { label: "중소벤처기업부, 2026년 예비창업패키지 수정 모집공고 PDF", url: PRE_STARTUP_PDF_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00090-pre-startup-package-review-objection-six-days-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00090-pre-startup-package-review-objection-six-days-hero.jpg",
  paragraphs: [
    "2026년 예비창업패키지 이의신청 6일은 주말을 빼고 세는 6영업일로 보면 안 됩니다. 공고는 평가 단계별 결과에 대한 이의신청을 결과통보일 다음 날부터 6일 이내로 안내했고 토요일 및 공휴일을 포함한다고 적었습니다.",
    "이의신청은 1회에 한해 가능했고 평가를 운영한 주관기관에 신청할 수 있었습니다. 결과가 아쉽다고 여러 기관에 반복 제출하거나 같은 단계에서 여러 번 보완 제출할 수 있다고 해석하면 위험합니다.",
    "달력 예시는 계산 방식을 이해하기 위한 가정일 뿐 실제 마감일 확정이 아닙니다. 통보문에 제출 시각, 시스템, 이메일 주소나 서식이 적혀 있다면 그 안내가 우선입니다.",
    "제출 전에는 통보일, 다음 날부터의 6일, 주말·공휴일 포함 여부, 제출처, 이의 사유와 근거자료를 한 번에 확인하세요. 이의신청은 재평가나 결과 변경을 보장하지 않습니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>2026년 예비창업패키지 이의신청 6일은 주말을 빼고 세는 6영업일로 보면 안 됩니다.</strong> 공고는 평가 단계별 결과에 대한 이의신청을 결과통보일 다음 날부터 6일 이내로 안내했고, 토요일 및 공휴일을 포함한다고 적었습니다.</p>
  <p>결과를 받은 뒤 “주말 지나고 월요일에 정리하면 되겠지”라고 생각하면 기한을 놓칠 수 있습니다. 먼저 달력의 날짜를 표시하고, 그다음 이의 사유와 근거를 정리해야 합니다.</p>

  <h2>공고의 기준은 결과통보일 다음 날부터 6일 이내입니다</h2>
  <p><a href="${PRE_STARTUP_PDF_URL}" target="_blank" rel="noopener noreferrer">2026년 예비창업패키지 수정 모집공고 PDF</a>는 평가 단계별 결과에 대한 이의신청을 <strong>결과통보일 다음 날로부터 6일 이내</strong>에 할 수 있다고 안내했습니다. 같은 문장에 토요일 및 공휴일 포함이라는 조건도 함께 적혀 있습니다.</p>
  <p>따라서 “6일”을 영업일 기준으로 넉넉하게 해석하면 안 됩니다. 결과 통보를 받은 날짜, 통보문에 적힌 마감일, 주관기관의 접수 방법을 함께 확인하세요.</p>
  <table>
    <thead>
      <tr>
        <th>확인 항목</th>
        <th>2026년 공고 기준</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>기산점</strong></td>
        <td>결과통보일 다음 날부터</td>
      </tr>
      <tr>
        <td><strong>기간</strong></td>
        <td>6일 이내</td>
      </tr>
      <tr>
        <td><strong>주말·공휴일</strong></td>
        <td>토요일 및 공휴일 포함</td>
      </tr>
      <tr>
        <td><strong>횟수</strong></td>
        <td>1회에 한함</td>
      </tr>
      <tr>
        <td><strong>제출처</strong></td>
        <td>평가를 운영한 주관기관</td>
      </tr>
    </tbody>
  </table>

  <h2>예시: 월요일에 통보받았다면 어떻게 표시할까요?</h2>
  <p>아래는 계산 방식을 설명하기 위한 <strong>가상의 예시</strong>입니다. 실제 마감일을 확정하는 안내가 아닙니다.</p>
  <p>예를 들어 월요일에 결과를 통보받았다면, 다음 날인 화요일부터 날짜를 세기 시작한다고 이해할 수 있습니다. 이때 중간에 토요일이나 공휴일이 들어가도 단순히 빼지 않습니다. 통보문에 별도 마감 시각이 있다면 그 시각까지 제출해야 합니다.</p>
  <div class="dh-note">
    <p><strong>예시를 그대로 제출 기한으로 쓰지 마세요</strong><br>통보일, 접수 마감 시각, 제출 채널, 서식은 주관기관 안내문에서 다시 확인해야 합니다.</p>
  </div>

  <h2>이의신청은 한 번만 가능하다고 봐야 합니다</h2>
  <p>같은 공고는 이의신청을 1회에 한해 평가를 운영한 주관기관에 신청할 수 있다고 안내했습니다. 여러 번 나눠서 보완하거나, 결과가 마음에 들지 않는다는 이유만으로 반복 제출할 수 있다고 생각하면 안 됩니다.</p>
  <p>한 번 제출할 때 사실관계와 근거를 같이 정리해야 합니다. 평가 점수가 낮다는 불만만 쓰기보다, 어떤 통보 내용에 대해 어떤 절차상 확인이 필요한지 좁혀야 합니다.</p>

  <h2>제출처는 평가를 운영한 주관기관입니다</h2>
  <p>예비창업패키지는 주관기관별로 평가가 운영됩니다. 공고의 이의신청 제출처도 평가를 운영한 주관기관으로 적혀 있습니다. 중소벤처기업부, 창업진흥원, 다른 주관기관에 동시에 보내는 방식으로 해결하려고 하기보다 내 평가를 운영한 기관의 안내를 먼저 확인하세요.</p>
  <p>통보 문자나 이메일에는 접수 담당자, 접수 시스템, 이메일 주소, 제출 서식이 따로 적혀 있을 수 있습니다. 공고의 기본 규정과 개별 통보문이 함께 있을 때는 실제 접수 방식까지 맞춰야 합니다.</p>

  <h2>제출 전에는 이 순서로 점검하세요</h2>
  <ol>
    <li>결과통보일과 통보를 받은 채널을 적습니다.</li>
    <li>다음 날부터 6일을 달력에 표시하고 토요일·공휴일을 임의로 빼지 않습니다.</li>
    <li>통보문에 적힌 마감 시각과 제출 채널을 확인합니다.</li>
    <li>평가를 운영한 주관기관 이름과 담당 연락처를 확인합니다.</li>
    <li>이의 사유를 한 문장으로 좁히고, 그 근거자료를 파일명까지 정리합니다.</li>
    <li>제출 뒤 접수 확인 메일, 화면 캡처나 접수번호를 보관합니다.</li>
  </ol>
  <p>이 목록은 독스헌트의 실무 점검 가이드입니다. 공식 서식을 대신하지 않습니다. 주관기관이 별도 양식을 요구하면 그 양식을 우선으로 사용해야 합니다.</p>

  <h2>이의신청이 재평가나 결과 변경을 보장하지는 않습니다</h2>
  <p>이의신청은 평가 결과에 대해 정해진 절차 안에서 확인을 요청하는 과정입니다. 제출했다고 해서 발표평가를 다시 보거나 결과가 바뀐다고 약속된 것은 아닙니다.</p>
  <p>그래서 내용은 감정 표현보다 확인 요청에 가까워야 합니다. 통보받은 평가 단계, 문제로 보는 지점, 확인받고 싶은 절차나 사실, 첨부 근거를 짧게 연결하세요.</p>

  <h2>다음 모집에서는 새 공고와 통보문을 다시 보세요</h2>
  <p>이 글은 종료된 2026년 예비창업패키지 예비창업자 수정 모집공고(2차)를 기준으로 작성했습니다. 다음 모집에서는 이의신청 기간, 횟수, 제출처나 접수 방식이 달라질 수 있습니다. <a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">공식 사업공고</a>와 개별 평가결과 통보문을 최종 기준으로 삼으세요.</p>
  <p><strong class="dh-emphasis">결과를 받은 날에는 먼저 기한을 계산하고, 그다음 한 번의 제출에 들어갈 근거를 고르세요. 이 순서를 바꾸면 자료를 정리하는 동안 접수 기간이 지나갈 수 있습니다.</strong></p>

  <div class="dh-cta">
    <p>이의신청 여부와 별개로 다음 지원사업을 준비해야 한다면 독스헌트에서 평가 통보, 보완할 근거와 다음 제출 일정을 한 화면에 정리해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=pre-startup-package-review-objection-six-days&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 다음 제출 준비하기</a>
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

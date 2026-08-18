import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const PRE_STARTUP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";
const PRE_STARTUP_PDF_URL =
  "https://www.mss.go.kr/common/board/Download.do?bcIdx=1066579&cbIdx=310&streFileNm=236d517e-fc4d-4607-8ba0-6b2557afeb62.pdf";

export const post89 = {
  page: 1,
  index: 1,
  slug: "pre-startup-package-presentation-applicant-attendance",
  sourceUrl: "https://docshunt.ai/blog_detail/pre-startup-package-presentation-applicant-attendance",
  title: "예비창업패키지 발표평가, 팀원만 보내도 될까요?",
  titleLines: ["발표평가,", "팀원만 보내도", "될까요?"],
  titleLineBreaks: "always",
  description:
    "2026년 예비창업패키지 발표평가는 신청자 참석이 원칙이었습니다. 팀원 대리 참석 가능 여부, 불참 시 영향, 인큐베이팅 참여 원칙을 공고 기준으로 정리했습니다.",
  seo: {
    mainKeyword: "예비창업패키지 발표평가",
    supportKeywords: ["예비창업패키지 발표평가 참석", "예비창업패키지 대표자 발표", "예비창업패키지 평가 불참"],
    searchIntent: "예비창업패키지 발표평가에 신청자 본인이 참석해야 하는지와 팀원 대리 참석 가능 여부를 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.16",
  modifiedDate: "2026.08.16",
  verification: {
    date: "2026.08.16",
    note: "중소벤처기업부의 2026년 예비창업패키지 예비창업자 수정 모집공고(2차)를 확인했습니다. 전 평가과정 신청자 직접 참여와 불참 시 선정대상 제외, 사전 인큐베이팅의 신청자 참석·현장 참석 원칙, 발표평가의 신청자 참석 원칙과 대면평가 원칙 및 온라인 변경 가능성, 평가항목을 근거로 작성했습니다. 다음 모집에서는 새 공고와 주관기관 안내를 다시 확인해야 합니다.",
    sources: [
      { label: "중소벤처기업부, 2026년 예비창업패키지 예비창업자 수정 모집공고(2차)", url: PRE_STARTUP_NOTICE_URL },
      { label: "중소벤처기업부, 2026년 예비창업패키지 수정 모집공고 PDF", url: PRE_STARTUP_PDF_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00089-pre-startup-package-presentation-applicant-attendance-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00089-pre-startup-package-presentation-applicant-attendance-hero.jpg",
  paragraphs: [
    "2026년 예비창업패키지 발표평가에 팀원만 대신 보내는 방식은 공고 기준으로 안전하지 않습니다. 공고는 전 평가과정에 예비창업자, 즉 신청자가 직접 참여해야 하고 불참하면 선정대상에서 제외된다고 안내했습니다.",
    "발표평가도 신청자 참석이 원칙이었습니다. 팀원의 역량은 평가 대상에 포함되지만, 그 말이 신청자 대신 팀원이 발표해도 된다는 뜻은 아닙니다.",
    "사전 인큐베이팅도 신청자 참석이 원칙이고 집체교육과 멘토링은 현장 참석을 원칙으로 했습니다. 대내외 여건에 따라 발표평가가 온라인으로 바뀔 수 있다는 문구는 참여 의무를 없애는 예외가 아닙니다.",
    "공식 규정은 참석 의무까지입니다. 실무적으로는 평가 일정이 겹치거나 건강상 문제가 생기면 주관기관에 즉시 사실관계와 증빙 가능 여부를 문의하고, 발표자료에는 대표자와 팀원의 역할을 구분해 준비하세요.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>2026년 예비창업패키지 발표평가에 팀원만 대신 보내는 방식은 공고 기준으로 안전하지 않습니다.</strong> 공고는 전 평가과정에 예비창업자, 즉 신청자가 직접 참여해야 하고 불참하면 선정대상에서 제외된다고 안내했습니다.</p>
  <p>팀원의 기술 역량이 중요하다는 말과 팀원이 대표자를 대신해 평가에 참석해도 된다는 말은 다릅니다. 발표평가를 앞두고 일정이 겹쳤다면 먼저 신청자 본인의 참석 가능 여부부터 확정해야 합니다.</p>

  <h2>공식 규정: 전 평가과정은 신청자 직접 참여가 원칙입니다</h2>
  <p><a href="${PRE_STARTUP_PDF_URL}" target="_blank" rel="noopener noreferrer">2026년 예비창업패키지 수정 모집공고 PDF</a>는 평가 중 유의사항에서 전 평가과정에 예비창업자(신청자)가 직접 참여해야 한다고 안내했습니다. 불참 시에는 선정대상에서 제외된다고 적었습니다.</p>
  <p>따라서 “발표 날에 개발팀원이 더 잘 설명하니 팀원만 보내자”는 판단은 공고 문구와 맞지 않습니다. 팀원이 함께 배석하거나 질의응답을 보조할 수 있는지는 주관기관 운영 방식에 따라 달라질 수 있지만, 신청자 본인의 참여 의무를 대체한다고 보기는 어렵습니다.</p>
  <div class="dh-note">
    <p><strong>공고에서 확인한 기준</strong><br>평가 전 과정은 신청자 직접 참여, 불참 시 선정대상 제외</p>
  </div>

  <h2>발표평가는 신청자 참석이 원칙이고 대면평가가 기본입니다</h2>
  <p>같은 공고는 발표평가를 제품·서비스에 대한 심층평가로 설명했습니다. 발표와 질의응답을 통해 제품·서비스 개발 동기, 시장진입 전략, 성과 창출 계획, 창업기업 대표자와 팀원의 역량 등을 종합적으로 평가한다고 안내했습니다.</p>
  <table>
    <thead>
      <tr>
        <th>공식 평가 내용</th>
        <th>준비할 답변</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>개발 동기</strong></td>
        <td>왜 이 문제를 풀어야 하는지, 어떤 고객 근거가 있는지 설명합니다.</td>
      </tr>
      <tr>
        <td><strong>시장진입·성과 전략</strong></td>
        <td>초기 고객, 판매 경로, 자금조달과 성과 창출 계획을 연결합니다.</td>
      </tr>
      <tr>
        <td><strong>대표자·팀 역량</strong></td>
        <td>신청자가 맡을 의사결정과 팀원이 맡을 실행 역할을 구분합니다.</td>
      </tr>
    </tbody>
  </table>
  <p>공고상 평가방법은 대면평가가 원칙이었습니다. 다만 대내외 여건에 따라 온라인 평가로 변경할 수 있다고 했습니다. 온라인으로 바뀔 수 있다는 문구는 “신청자 대신 팀원이 참석해도 된다”는 예외가 아니라 평가 방식 변경 가능성으로 읽어야 합니다.</p>

  <h2>인큐베이팅도 신청자 참석과 현장 참석이 원칙이었습니다</h2>
  <p>서류평가를 통과하면 발표평가 전에 사전 인큐베이팅을 거칩니다. 2026년 공고는 사업모델(BM) 구체화 교육과 멘토링을 통해 사업계획을 보완하고 신청자 역량을 검증한다고 설명했습니다.</p>
  <p>이 단계도 신청자 참석이 원칙이었고, 집체교육과 멘토링은 현장 참석을 원칙으로 했습니다. 서류평가 면제자도 인큐베이팅에 참여해야 하며 신청자 본인 참여가 원칙이라고 별도로 안내했습니다.</p>
  <p>현장 참석 원칙에 예외가 생길 수 있는지, 질병이나 불가피한 일정 충돌을 어떻게 처리하는지는 공고만으로 임의 판단하지 않는 편이 좋습니다. 주관기관의 개별 안내가 실제 운영 기준이 됩니다.</p>

  <h2>실무 조언: 참석 문제가 생기면 이렇게 확인하세요</h2>
  <p>아래 내용은 공고에 적힌 공식 규정이 아니라, 발표평가를 준비할 때의 실무 점검 순서입니다. 불참 허용 여부나 대체 절차를 보장하지 않습니다.</p>
  <ol>
    <li>신청자 본인의 인큐베이팅·발표평가 일정과 장소를 먼저 확인합니다.</li>
    <li>참석이 어려운 사유가 생기면 주관기관에 즉시 연락하고 증빙 가능 여부를 확인합니다.</li>
    <li>“팀원이 대신 발표 가능한가요?”보다 신청자 참석 불가 사유, 발생 시점, 참석 가능한 대안 시간을 함께 전달합니다.</li>
    <li>팀원이 함께 참여할 수 있다면 어떤 질문을 팀원이 답해도 되는지 운영 안내를 확인합니다.</li>
    <li>발표자료에는 대표자 의사결정, 개발 담당, 영업 담당처럼 역할과 책임을 나눠 적습니다.</li>
  </ol>
  <p>평가위원이 실제로 무엇을 물을지는 단정할 수 없습니다. 다만 공고의 평가지표를 보면 신청자와 팀원의 역량을 모두 봅니다. 대표자가 답해야 할 사업 판단과 팀원이 보완할 기술 설명을 나눠 연습해두는 편이 현실적입니다.</p>

  <h2>팀원이 중요해도 대표자 발표 준비를 빼면 안 됩니다</h2>
  <p>팀 구성이 강점이라면 발표에서 숨길 이유가 없습니다. 개발 리드, 영업 담당, 운영 담당이 어떤 경험을 갖고 있고 이번 사업에서 무엇을 맡을지 보여주는 것은 평가항목과도 맞습니다.</p>
  <p>다만 팀원 소개가 대표자의 빈자리를 메우는 방식이 되어서는 곤란합니다. 신청자는 왜 이 아이템을 선택했는지, 어떤 시장에 먼저 들어갈지, 사업기간 안에 무엇을 완료할지 직접 설명할 준비가 되어 있어야 합니다.</p>

  <h2>다음 모집은 새 공고와 주관기관 안내가 기준입니다</h2>
  <p>이 글은 종료된 2026년 예비창업패키지 수정 모집공고를 기준으로 작성했습니다. 다음 모집에서는 평가 운영 방식, 현장 참석 기준과 온라인 전환 조건이 달라질 수 있습니다. <a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">공식 사업공고</a>와 주관기관의 개별 평가 안내를 최종 기준으로 확인하세요.</p>
  <p><strong class="dh-emphasis">발표평가의 핵심은 “누가 말을 잘하느냐”보다 신청자가 사업을 직접 이해하고 수행할 준비가 되어 있는지 보여주는 데 있습니다.</strong></p>

  <div class="dh-cta">
    <p>발표자료를 만들기 전에 대표자 답변과 팀원 보완 답변을 나눠보세요. 독스헌트에서 개발 동기, 시장진입 전략, 성과 계획과 팀 역량을 한 흐름으로 정리할 수 있습니다.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=pre-startup-package-presentation-applicant-attendance&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 발표 흐름 점검하기</a>
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

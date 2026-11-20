import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const PRE_STARTUP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";
const YOUTH_ACADEMY_URL = "https://www.kosmes.or.kr/nsh/SH/SBI/SHSBI035M0.do";
const BUDGET_BRIEFING_URL = "https://www.korea.kr/briefing/policyBriefingView.do?newsId=156775671";

export const post14 = {
  page: 2,
  index: 4,
  slug: "200-1",
  sourceUrl: "https://docshunt.ai/blog_detail/200-1",
  title: "예비창업패키지 사업계획서, '개발하겠습니다'만 있으면 어디서 점수가 빠질까요?",
  description:
    "예비창업패키지 사업계획서는 문제인식·실현가능성·성장전략·팀 구성으로 평가됩니다. 2026년 공고 평가표를 기준으로 계획 문장을 실행 근거로 바꾸는 방법과 청년창업사관학교 준비 시 확인할 점을 정리했습니다.",
  seo: {
    mainKeyword: "예비창업패키지 사업계획서",
    supportKeywords: ["예비창업패키지 평가항목", "청년창업사관학교 사업계획서", "사업계획서 실현가능성"],
    searchIntent: "예비창업패키지 사업계획서에서 평가항목별로 무엇을 근거로 써야 하는지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.02.04",
  modifiedDate: "2026.11.20",
  verification: {
    date: "2026.11.20",
    note: "평가항목, 70점 기준, 선정 규모와 평균 지원금은 2026년 예비창업패키지 수정 공고(2차, 제2026-207호) 첨부 공고문에서 확인했습니다. 2026년 접수(3월 6일~3월 26일)는 끝난 지난 공고입니다. 2027년 예비창업 사업을 모두의 창업으로 일원화하는 내용은 정부 예산안 단계의 계획이라 확정이 아닙니다. 본문의 문장 예시는 설명을 위한 가상 예시입니다.",
    sources: [
      { label: "중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)", url: PRE_STARTUP_NOTICE_URL },
      { label: "중소벤처기업진흥공단, 청년창업사관학교 안내", url: YOUTH_ACADEMY_URL },
      { label: "정책브리핑, 중소벤처기업부 재정운용전략 사전 브리핑", url: BUDGET_BRIEFING_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00014-business-plan-evidence-strategy-list.png",
  heroImage: "/docshunt-assets/blog-covers/00014-business-plan-evidence-strategy-hero.png",
  paragraphs: [
    "예비창업패키지 사업계획서에서 '앱을 개발하겠습니다'는 계획일 뿐 근거가 아닙니다. 2026년 공고는 문제인식, 실현가능성, 성장전략, 팀 구성 네 항목으로 서류와 발표를 평가했습니다.",
    "실현가능성 항목은 문제를 해결하기 위한 개발 방법과 경쟁력 확보 방안을 봅니다. 이미 만든 화면, 테스트 기록, 고객 반응처럼 확인할 수 있는 자료를 계획 옆에 붙여야 합니다.",
    "2026년 공고는 서류평가와 발표평가 각 단계에서 70점 미만이면 선정 대상에서 제외한다고 밝혔습니다. 한 항목만 길게 쓰기보다 네 항목이 같은 고객과 숫자를 말하는지 먼저 맞추세요.",
    "2027년에는 예비창업패키지를 모두의 창업으로 일원화하는 계획이 정부 예산안에 담겼습니다. 아직 확정이 아니므로 새 공고의 평가표를 다시 확인해야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>예비창업패키지 사업계획서에서 "앱을 개발하겠습니다"는 계획일 뿐, 심사위원이 확인할 수 있는 근거가 아닙니다.</strong> 같은 계획이라도 이미 만든 화면, 직접 받은 고객 반응, 숫자의 출처가 옆에 있어야 실현가능성 항목에서 설명이 됩니다.</p>
  <p>아래 내용은 <a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년 예비창업패키지 수정 공고</a>를 기준으로 했습니다. 2026년 접수는 3월 26일에 끝났으니, 다음 모집에서는 새 공고의 평가표를 먼저 확인하세요.</p>

  <h2>2026년 예비창업패키지는 네 가지 항목으로 평가했습니다</h2>
  <p>공고문의 서류·발표 평가지표는 아래 네 항목입니다. 사업계획서 양식의 목차도 같은 순서로 짜여 있습니다.</p>
  <table>
    <thead>
      <tr>
        <th>평가항목</th>
        <th>공고문이 보는 내용</th>
        <th>사업계획서에 붙일 근거</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>문제인식</strong></td>
        <td>창업아이템을 개발하게 된 동기, 해결방안(필요성)</td>
        <td>고객이 지금 어떻게 불편을 해결하고 있는지에 대한 인터뷰·관찰 기록</td>
      </tr>
      <tr>
        <td><strong>실현가능성</strong></td>
        <td>문제를 해결하기 위한 개발(개선) 방법, 경쟁력 확보 방안</td>
        <td>시제품·화면 캡처, 테스트 결과, 개발 일정과 담당자</td>
      </tr>
      <tr>
        <td><strong>성장전략</strong></td>
        <td>사업화를 위한 시장진입 전략, 자금조달 방안</td>
        <td>첫 고객을 만날 경로, 가격, 사업비 사용 계획</td>
      </tr>
      <tr>
        <td><strong>팀(기업) 구성</strong></td>
        <td>대표자와 고용(예정) 인력이 가진 기술역량과 노하우</td>
        <td>각 사람이 맡을 일과 그 일을 해본 경력</td>
      </tr>
    </tbody>
  </table>
  <p>공고문은 서류평가와 발표평가 각 단계에서 <strong>70점 미만이면 선정 대상에서 제외</strong>한다고 적었습니다. 2026년 선정 규모는 300명 내외, 사업화 자금은 평균 4천만 원이었습니다.</p>

  <h2>"개발하겠습니다"를 근거 문장으로 바꿔보세요</h2>
  <p>실현가능성 항목에서 가장 흔한 문장은 앞으로 할 일만 적은 문장입니다. 아래는 설명을 위해 만든 가상 예시입니다.</p>
  <div class="dh-note">
    <p><strong>고치기 전</strong><br>소상공인 예약 관리 앱을 개발하여 시장에 출시하겠습니다.</p>
    <p><strong>고친 뒤 (가상 예시)</strong><br>노코드 도구로 예약 접수 화면을 만들어 미용실 5곳에 2주간 써보게 했고, 4곳이 전화 예약 대신 링크를 손님에게 보냈습니다. 협약 기간에는 이 화면을 앱으로 옮기고 결제 기능을 붙입니다.</p>
  </div>
  <p>두 번째 문장은 규모가 작아도 누가, 무엇을, 얼마 동안 써봤는지가 보입니다. 숫자가 작다고 숨길 필요는 없습니다. 아직 테스트를 하지 못했다면 "언제까지 몇 명에게 무엇을 확인할지"를 검증 계획으로 적는 편이 막연한 출시 약속보다 낫습니다.</p>

  <h2>네 항목이 서로 같은 숫자를 말하는지 확인하세요</h2>
  <p>항목별로 따로 쓰다 보면 문제인식에서는 "20대 직장인"이던 고객이 성장전략에서는 "전 연령"으로 바뀌는 경우가 생깁니다. 제출 전에는 아래 세 가지를 한 번에 대조해 보세요.</p>
  <ol>
    <li>문제인식의 고객과 성장전략의 첫 판매 대상이 같은 사람인가요?</li>
    <li>실현가능성의 개발 일정과 사업비 사용 계획의 시기가 맞나요?</li>
    <li>팀 구성에 적은 사람이 실제로 일정표의 일을 맡고 있나요?</li>
  </ol>

  <h2>청년창업사관학교를 함께 준비한다면</h2>
  <p>청년창업사관학교는 중소벤처기업진흥공단이 운영하며, 모집 대상과 평가 방식이 예비창업패키지와 다릅니다. 같은 사업계획서를 그대로 내기보다 <a href="${YOUTH_ACADEMY_URL}" target="_blank" rel="noopener noreferrer">공식 안내</a>와 해당 연도 공고문의 양식을 확인하고, 위에서 정리한 근거 자료를 그 양식의 문항에 맞춰 다시 배치하세요.</p>

  <h2>2027년 공고는 아직 확정이 아닙니다</h2>
  <p>중소벤처기업부는 <a href="${BUDGET_BRIEFING_URL}" target="_blank" rel="noopener noreferrer">2027년 정부 예산안 브리핑</a>에서 예비창업패키지, 도전! K-스타트업 등 여러 예비창업 사업을 '모두의 창업'으로 일원화할 계획이라고 밝혔습니다. 국회 심의 전 계획이므로 사업 이름, 평가항목, 지원 금액은 새 공고가 나온 뒤 다시 확인해야 합니다. 다만 고객 기록과 시제품 같은 근거는 어떤 양식으로 바뀌어도 그대로 쓸 수 있습니다.</p>

  <div class="dh-cta">
    <p>평가항목별 근거를 모았다면 독스헌트에서 공고 양식에 맞춰 초안을 만들고, 항목끼리 숫자가 어긋나지 않는지 점검해 보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=pre-startup-package-business-plan&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트로 사업계획서 초안 만들기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)</a></li>
      <li><a href="${YOUTH_ACADEMY_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업진흥공단, 청년창업사관학교 안내</a></li>
      <li><a href="${BUDGET_BRIEFING_URL}" target="_blank" rel="noopener noreferrer">정책브리핑, 중소벤처기업부 재정운용전략 사전 브리핑</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

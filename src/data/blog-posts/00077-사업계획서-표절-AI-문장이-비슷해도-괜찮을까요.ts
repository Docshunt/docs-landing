import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const PRE_STARTUP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";
const PRE_STARTUP_PDF_URL =
  "https://www.mss.go.kr/common/board/Download.do?bcIdx=1066579&cbIdx=310&streFileNm=236d517e-fc4d-4607-8ba0-6b2557afeb62.pdf";

export const post77 = {
  page: 1,
  index: 1,
  slug: "business-plan-ai-plagiarism-similarity-check",
  sourceUrl: "https://docshunt.ai/blog_detail/business-plan-ai-plagiarism-similarity-check",
  title: "사업계획서 표절, AI 문장이 비슷해도 괜찮을까요?",
  titleLines: ["사업계획서 표절,", "AI 문장이", "비슷하다면"],
  titleLineBreaks: "always",
  description:
    "사업계획서 표절이 걱정될 만큼 AI 문장이 다른 원고와 닮았다면 표현만 바꾸지 마세요. 주장·수치·사례의 출처를 확인하고 2026년 예비창업패키지 공고의 표절·대필 규정에 맞춰 고치는 순서를 정리했습니다.",
  seo: {
    mainKeyword: "사업계획서 표절",
    supportKeywords: ["AI 사업계획서", "사업계획서 유사도", "사업계획서 대필"],
    searchIntent: "AI로 작성한 사업계획서가 다른 원고와 비슷할 때 표절·대필 규정을 어떻게 확인하고 자기 근거로 고칠지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.12",
  modifiedDate: "2026.08.12",
  verification: {
    date: "2026.08.12",
    note: "중소벤처기업부의 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)와 첨부 PDF에서 제3자 대필에 관한 형사처벌 가능성, 타인의 사업계획서 모방·표절·도용에 관한 참여 제한과 지원금 환수, 동일·유사 사업계획서 공동 작성에 관한 제재 안내를 확인했습니다. 해당 내용은 2026년 예비창업패키지 공고를 설명한 것이며 실제 제출 전에는 지원하려는 사업의 최신 공고를 다시 확인해야 합니다.",
    sources: [
      { label: "중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)", url: PRE_STARTUP_NOTICE_URL },
      { label: "중소벤처기업부, 2026년 예비창업패키지 모집공고 PDF", url: PRE_STARTUP_PDF_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00077-business-plan-ai-plagiarism-similarity-check-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00077-business-plan-ai-plagiarism-similarity-check-hero.jpg",
  paragraphs: [
    "AI가 만든 문장과 다른 사업계획서의 표현이 비슷하다면 그대로 제출하지 마세요. 문장을 바꾸는 데 그치지 말고 주장, 수치, 사례가 내 사업의 근거에서 나왔는지 확인해야 합니다.",
    "2026년 예비창업패키지 공고는 제3자 대필의 형사처벌 가능성과 타인의 사업계획서 모방·표절·도용에 따른 참여 제한·지원금 환수를 안내했습니다. 공동으로 만든 동일하거나 유사한 사업계획서도 표절로 판단될 수 있다고 적었습니다.",
    "업종에서 자주 쓰는 표현이 겹치는 것과 다른 원고의 논리·수치·사례를 가져오는 일은 같지 않습니다. 유사한 문장을 발견했다면 출처를 확인하고 자신의 고객 관찰과 실행 기록으로 다시 써야 합니다.",
    "AI 결과물은 초안으로만 사용하고 제출본에는 각 문장을 뒷받침하는 원자료와 작성 과정을 남겨두세요.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>AI가 만든 사업계획서 문장이 다른 원고와 비슷하다면 그대로 제출하지 마세요.</strong> 표현 몇 개만 바꾸기보다 주장·수치·사례가 어디에서 왔는지 먼저 확인해야 합니다.</p>
  <p>2026년 예비창업패키지 공고는 제3자 대필의 형사처벌 가능성과 타인의 사업계획서 모방·표절·도용에 따른 참여 제한·지원금 환수를 안내했습니다. AI 사용 여부와 별개로 <strong>제출 내용의 근거와 책임은 신청자에게 남습니다.</strong></p>

  <h2>비슷한 표현보다 근거가 겹치는지 먼저 보세요</h2>
  <p>“시장 규모가 빠르게 성장하고 있습니다”처럼 흔한 문장은 여러 원고에서 나타날 수 있습니다. 더 주의해서 볼 부분은 문장 뒤에 붙은 숫자, 고객 사례, 문제를 설명하는 순서까지 겹치는 경우입니다.</p>
  <table>
    <thead>
      <tr>
        <th>발견한 겹침</th>
        <th>확인할 질문</th>
        <th>고치는 방향</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>흔한 업계 표현</strong></td>
        <td>내 고객과 상황이 드러나는가?</td>
        <td>관찰한 행동과 조건을 덧붙입니다.</td>
      </tr>
      <tr>
        <td><strong>같은 통계와 수치</strong></td>
        <td>원출처와 기준 연도를 확인했는가?</td>
        <td>원자료를 직접 읽고 출처를 표시합니다.</td>
      </tr>
      <tr>
        <td><strong>같은 사례와 전개</strong></td>
        <td>내가 직접 확인한 사실인가?</td>
        <td>내 인터뷰·테스트·판매 기록으로 다시 씁니다.</td>
      </tr>
      <tr>
        <td><strong>문단 전체의 유사성</strong></td>
        <td>참고 원고의 구조를 따라간 것은 아닌가?</td>
        <td>빈 문서에서 질문별 근거를 새로 배열합니다.</td>
      </tr>
    </tbody>
  </table>

  <h2>공동 작성한 유사 원고도 안전하다고 단정할 수 없습니다</h2>
  <p><a href="${PRE_STARTUP_PDF_URL}" target="_blank" rel="noopener noreferrer">2026년 예비창업패키지 모집공고 PDF</a>는 타인의 사업계획서를 모방·표절·도용한 경우 참여 제한과 지원금 환수 등의 제재가 있을 수 있다고 안내합니다. 다른 사람과 함께 동일하거나 유사한 사업계획서를 작성한 경우에도 표절로 판단될 수 있다고 적었습니다.</p>
  <p>같은 컨설턴트나 AI 프롬프트를 썼다는 이유만으로 결과가 자동으로 안전해지지는 않습니다. 팀마다 고객, 문제, 실행 단계와 보유 근거가 다르다면 제출 문서에도 그 차이가 보여야 합니다.</p>

  <h2>AI에게 ‘다르게 써줘’라고만 요청하지 마세요</h2>
  <p>표절이 걱정될 때 문장 치환부터 하면 원래 어디에서 가져온 주장인지 더 찾기 어려워집니다. 다음 순서로 원고를 되짚어보세요.</p>
  <ol>
    <li>AI 초안에서 숫자, 인용, 사례, 고유한 표현에 표시합니다.</li>
    <li>각 항목의 원출처나 내부 기록을 찾습니다.</li>
    <li>출처를 찾지 못한 주장은 삭제하거나 검증 가능한 범위로 낮춥니다.</li>
    <li>고객 인터뷰, 테스트 결과, 거래 기록처럼 내가 확인한 근거를 넣습니다.</li>
    <li>기존 원고를 보지 않고 확보한 근거만으로 빈 문서에 다시 작성합니다.</li>
  </ol>
  <p>예를 들어 “소상공인은 재고 관리에 어려움을 겪는다”는 문장만 두지 말고 누구를 언제 몇 명 만났으며 어떤 행동이 반복됐는지 적어야 내 사업의 문제 정의가 됩니다.</p>

  <h2>참고자료와 작성 기록을 제출 전까지 남겨두세요</h2>
  <ul>
    <li>통계와 보고서의 원문 URL, 발행 기관, 기준 연도</li>
    <li>인터뷰 일자와 익명화한 메모</li>
    <li>실험 조건, 표본, 결과를 확인할 수 있는 원자료</li>
    <li>AI에 제공한 공개 자료와 사람이 수정한 버전 기록</li>
  </ul>
  <p>이 기록이 있어야 질문을 받았을 때 무엇을 직접 확인했고 무엇을 외부 자료에서 가져왔는지 설명할 수 있습니다.</p>

  <h2>지원사업마다 최신 공고의 제재 조항을 다시 읽으세요</h2>
  <p>여기서 확인한 내용은 <a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년 예비창업패키지 수정 공고</a>에 담긴 기준입니다. 다른 지원사업은 제출 양식, 유사도 검토 범위, 제재 절차가 다를 수 있습니다. 표절·대필·중복 수혜 관련 조항을 최신 공고에서 따로 확인하세요.</p>
  <p><strong class="dh-emphasis">AI 문장을 그대로 두지 말고 내 사업에서 나온 근거로 다시 채워 넣으세요.</strong></p>

  <div class="dh-cta">
    <p>출처를 확인한 고객 기록과 실험 결과를 준비했다면, 질문별로 근거를 나눠 독스헌트에서 사업계획서 초안을 정리해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=business-plan-ai-plagiarism-similarity-check&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 내 근거로 초안 쓰기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)</a></li>
      <li><a href="${PRE_STARTUP_PDF_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 모집공고 PDF</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

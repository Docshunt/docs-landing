import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const LEAN_STARTUP_PRINCIPLES_URL = "https://theleanstartup.com/principles";
const VIBE_CODING_POST_URL = "https://x.com/karpathy/status/1886192184808149383";
const PRE_STARTUP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";

export const post11 = {
  page: 2,
  index: 1,
  slug: "1772689301598x438718639419162600",
  sourceUrl: "https://docshunt.ai/blog_detail/1772689301598x438718639419162600",
  title: "MVP 검증 계획, 바이브 코딩으로 빨리 만들면 린 스타트업일까요?",
  description:
    "MVP를 빨리 만드는 것과 검증하는 것은 다른 일입니다. 에릭 리스의 린 스타트업 원칙을 바탕으로, 예비창업자가 사업계획서에 넣을 MVP 검증 계획을 가설·지표·판단 기준으로 쓰는 법을 정리했습니다.",
  seo: {
    mainKeyword: "MVP 검증 계획",
    supportKeywords: ["린 스타트업 MVP", "바이브 코딩", "사업계획서 실현가능성"],
    searchIntent: "AI로 MVP를 빠르게 만든 뒤 사업계획서에 검증 계획을 어떻게 적어야 하는지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.03.05",
  modifiedDate: "2026.11.20",
  verification: {
    date: "2026.11.20",
    note: "린 스타트업의 만들기-측정-학습, 검증된 학습, MVP, 피벗 개념은 에릭 리스의 린 스타트업 공식 사이트 원칙 페이지에서 확인했습니다. '바이브 코딩'이라는 말은 안드레이 카파시가 2025년 2월 X에 올린 글에서 처음 쓰였습니다. 예비창업패키지의 1단계 지원 내용과 평가항목은 2026년 수정 공고(제2026-207호) 첨부 공고문에서 확인했으며, 2026년 접수는 끝났습니다. 본문의 가설 문장과 숫자는 설명을 위한 가상 예시입니다.",
    sources: [
      { label: "The Lean Startup, Principles (에릭 리스)", url: LEAN_STARTUP_PRINCIPLES_URL },
      { label: "안드레이 카파시, X 게시물 (2025.2.2)", url: VIBE_CODING_POST_URL },
      { label: "중소벤처기업부, 2026년 예비창업패키지 예비창업자 수정 모집공고(2차)", url: PRE_STARTUP_NOTICE_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00011-바이브-코딩은-린-스타트업이-아닙니다-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00011-바이브-코딩은-린-스타트업이-아닙니다-hero.jpg",
  paragraphs: [
    "AI 코딩 도구로 하루 만에 서비스를 만들 수 있게 되면서 '일단 만들고 반응 없으면 버리면 된다'는 생각이 흔해졌습니다. 하지만 무엇을 확인하려고 만들었는지 정하지 않았다면 반응이 없을 때 배울 것도 남지 않습니다.",
    "에릭 리스의 린 스타트업은 스타트업의 진척을 '검증된 학습'으로 잰다고 설명합니다. MVP는 빨리 만든 제품이 아니라 배우기 시작하기 위한 첫 버전이고, 만들기-측정-학습을 거쳐 방향을 유지할지 바꿀지 판단합니다.",
    "2026년 예비창업패키지는 1단계에서 시장조사와 MVP 제작 등에 2천만 원을 지원하고, 중간 시점에 진척도를 평가했습니다. 사업계획서의 MVP 계획은 '무엇을 만들지'보다 '무엇을 확인할지'가 보여야 합니다.",
    "MVP를 만들기 전에 가설 한 문장, 측정할 숫자 하나, 유지와 수정을 가를 기준 하나를 먼저 적어보세요. 이 세 줄이 사업계획서의 실현가능성 항목에 그대로 들어갑니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>MVP를 빨리 만드는 것과 MVP로 무언가를 검증하는 것은 다른 일입니다.</strong> AI 코딩 도구로 하루 만에 화면을 띄울 수 있게 되면서 "일단 만들어 보고 반응이 없으면 버리면 되지"라는 말을 자주 듣습니다. 그런데 무엇을 확인하려고 만들었는지 적어두지 않았다면, 반응이 없을 때 남는 것은 버려진 코드뿐입니다.</p>
  <p>이 글은 사업계획서에 MVP 검증 계획을 적어야 하는 예비창업자를 위해, 린 스타트업 원문이 실제로 말하는 내용과 그것을 계획서 문장으로 옮기는 방법을 정리했습니다.</p>

  <h2>'바이브 코딩'과 린 스타트업은 출발점이 다릅니다</h2>
  <p>'바이브 코딩'은 AI에게 말로 지시하고 코드는 거의 들여다보지 않은 채 결과물을 만드는 방식을 가리킵니다. 이 말은 안드레이 카파시가 <a href="${VIBE_CODING_POST_URL}" target="_blank" rel="noopener noreferrer">2025년 2월 X에 올린 글</a>에서 처음 썼습니다. 만드는 속도를 크게 줄여주는 방식이지만, 무엇을 배울지는 정해주지 않습니다.</p>
  <p>린 스타트업은 반대로 배울 것에서 출발합니다. 에릭 리스의 <a href="${LEAN_STARTUP_PRINCIPLES_URL}" target="_blank" rel="noopener noreferrer">린 스타트업 원칙</a>은 스타트업의 진척 단위를 '검증된 학습(validated learning)'이라고 설명합니다. 핵심 고리는 만들기-측정-학습(Build-Measure-Learn)이고, 측정 결과를 보고 방향을 유지할지 바꿀지(피벗) 판단합니다. 같은 페이지는 MVP를 배우는 과정을 가능한 한 빨리 시작하기 위한 첫 버전으로 설명합니다.</p>
  <p>그러니 빨리 만드는 것 자체는 문제가 아닙니다. 다만 측정과 학습 단계가 빠진 채 만들기만 반복하면, 린 스타트업이 아니라 그냥 빠른 제작입니다.</p>

  <h2>정부지원사업도 MVP 이후의 '진척'을 봅니다</h2>
  <p><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년 예비창업패키지 수정 공고</a>는 사업화 자금을 두 단계로 나눴습니다. 1단계에서는 BM 구체화를 위한 시장조사와 최소기능제품(MVP) 제작 등에 2천만 원을 지원하고, 협약 중간 시점에 1단계 사업계획의 진척도와 향후 추진계획을 평가해 50% 내외를 골라 추가 지원했습니다. 2026년 접수는 3월 26일에 끝났고, 다음 공고의 구조는 새 공고문에서 다시 확인해야 합니다.</p>
  <p>평가항목 가운데 실현가능성은 "문제점을 해결하기 위한 개발(개선) 방법, 경쟁력 확보 방안"을 봅니다. MVP를 만들겠다는 계획만 있으면 개발 방법은 설명되지만, 그 MVP로 무엇을 확인하고 결과에 따라 무엇을 바꿀지는 비어 있습니다. 중간 평가에서 진척도를 설명하려면 처음부터 확인할 숫자가 정해져 있어야 합니다.</p>

  <h2>MVP 검증 계획은 세 줄이면 시작할 수 있습니다</h2>
  <p>코드를 짜기 전에 아래 세 줄을 먼저 적어보세요. 사업계획서의 실현가능성 항목에 그대로 옮길 수 있는 형태입니다.</p>
  <table>
    <thead>
      <tr>
        <th>적을 것</th>
        <th>질문</th>
        <th>빠지면 생기는 일</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>가설</strong></td>
        <td>누가 어떤 상황에서 무엇을 할 것이라고 예상하나요?</td>
        <td>반응이 없을 때 제품 문제인지 고객 선정 문제인지 구분할 수 없습니다.</td>
      </tr>
      <tr>
        <td><strong>측정 지표</strong></td>
        <td>그 행동을 어떤 숫자 하나로 확인하나요?</td>
        <td>방문자 수처럼 쉽게 늘어나는 숫자만 보고 성공으로 착각합니다.</td>
      </tr>
      <tr>
        <td><strong>판단 기준</strong></td>
        <td>숫자가 얼마 이상이면 유지하고, 얼마 미만이면 무엇을 바꾸나요?</td>
        <td>결과를 본 뒤에 기준을 정하게 되어 어떤 결과든 성공처럼 읽힙니다.</td>
      </tr>
    </tbody>
  </table>

  <h2>가상 예시로 고쳐보면</h2>
  <p>아래는 설명을 위해 만든 가상 예시입니다. 숫자는 실제 조사 결과가 아닙니다.</p>
  <div class="dh-note">
    <p><strong>고치기 전</strong><br>AI 코딩 도구로 동네 필라테스 강사용 수업 예약 앱 MVP를 2주 안에 만들어 출시하겠습니다.</p>
    <p><strong>고친 뒤 (가상 예시)</strong><br>가설: 1인 필라테스 강사는 카카오톡으로 받던 예약을 링크 하나로 받을 수 있다면 회원에게 그 링크를 보낼 것이다.<br>측정: 2주 동안 강사 10명에게 예약 링크를 주고, 회원에게 링크를 실제로 보낸 강사 수를 셉니다.<br>판단: 5명 이상이면 결제 기능을 붙이고, 그보다 적으면 강사 3명을 인터뷰해 링크를 보내지 않은 이유부터 확인합니다.</p>
  </div>
  <p>고친 문장은 앱의 규모가 작아도 무엇을 배우려는지가 보입니다. 결과가 기준에 못 미쳐도 "왜 안 보냈는가"라는 다음 질문이 남기 때문에, 그 기록 자체가 다음 계획서의 문제인식 근거가 됩니다.</p>

  <h2>이런 경우에는 빠른 제작이 먼저여도 됩니다</h2>
  <p>고객이 화면을 직접 보기 전에는 반응을 말해주기 어려운 제품이라면, 가설을 적은 직후 바로 만들어 보여주는 편이 빠를 수 있습니다. 이때도 순서만 바뀔 뿐 측정 지표와 판단 기준은 만들기 전에 정해두세요. 기준을 나중에 정하면 결과를 유리하게 해석하기 쉽습니다.</p>

  <div class="dh-cta">
    <p>가설·지표·판단 기준을 적었다면 독스헌트에서 공고 양식에 맞춰 실현가능성 항목 초안으로 옮기고, 문제인식과 일정이 같은 내용을 말하는지 확인해 보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=lean-startup-mvp-validation-plan&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트로 검증 계획 정리하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${LEAN_STARTUP_PRINCIPLES_URL}" target="_blank" rel="noopener noreferrer">The Lean Startup, Principles (에릭 리스)</a></li>
      <li><a href="${VIBE_CODING_POST_URL}" target="_blank" rel="noopener noreferrer">안드레이 카파시, X 게시물 (2025.2.2)</a></li>
      <li><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 예비창업자 수정 모집공고(2차)</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const PRE_STARTUP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";
const MOM_TEST_URL = "https://www.momtestbook.com/";

export const post13 = {
  page: 2,
  index: 3,
  slug: "1770964843114x761947782936002600",
  sourceUrl: "https://docshunt.ai/blog_detail/1770964843114x761947782936002600",
  title: "사업계획서 문제인식, '배달비가 비싸서'로 시작하면 무엇이 빠질까요?",
  description:
    "사업계획서 문제인식에 '비용이 부담된다' 같은 현상만 쓰면 누가 왜 불편한지가 빠집니다. 예비창업자가 현상 문장을 고객 기록과 고통의 이름이 담긴 문제 정의로 고치는 순서를 가상 예시와 함께 정리했습니다.",
  seo: {
    mainKeyword: "사업계획서 문제인식",
    supportKeywords: ["사업계획서 문제 정의", "고객 인터뷰", "예비창업패키지 평가항목"],
    searchIntent: "사업계획서 문제인식 항목에 짐작이 아닌 근거 있는 문제 정의를 쓰는 방법을 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.02.13",
  modifiedDate: "2026.11.20",
  verification: {
    date: "2026.11.20",
    note: "문제인식 평가항목의 내용은 2026년 예비창업패키지 수정 공고(2차, 제2026-207호) 첨부 공고문에서 확인했습니다. 2026년 접수는 끝난 지난 공고입니다. 『The Mom Test』의 소개는 저자 공식 사이트를 기준으로 했습니다. 본문의 배달비 문장과 인터뷰 내용은 설명을 위한 가상 예시이며 실제 조사 결과가 아닙니다.",
    sources: [
      { label: "중소벤처기업부, 2026년 예비창업패키지 예비창업자 수정 모집공고(2차)", url: PRE_STARTUP_NOTICE_URL },
      { label: "Rob Fitzpatrick, The Mom Test 공식 사이트", url: MOM_TEST_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00013-business-plan-problem-definition-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00013-business-plan-problem-definition-hero.jpg",
  paragraphs: [
    "사업계획서 문제인식에 '배달비가 비싸서 고객이 이탈합니다'라고 쓰면 현상은 보이지만 누가, 언제, 왜 불편한지는 빠집니다. 같은 현상이라도 원인이 돈인지, 손해 보는 느낌인지, 시간인지에 따라 해결책이 달라집니다.",
    "2026년 예비창업패키지 공고는 문제인식 항목에서 창업아이템을 개발하게 된 동기와 해결방안(필요성)을 본다고 적었습니다. 동기를 설명하려면 창업자가 직접 확인한 고객 기록이 필요합니다.",
    "현상 문장을 고치려면 고객 한 명을 정하고, 그 사람이 최근 겪은 장면을 묻고, 불편에 정확한 이름을 붙이는 순서로 다시 써보세요. 고객의 의견보다 지난 행동을 물어야 짐작이 덜 섞입니다.",
    "AI 도구는 정리한 내용을 문장으로 옮기는 데 도움이 되지만, 현장에서 확인한 문제 자체는 창업자가 채워야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>사업계획서 문제인식에 "배달비가 비싸서 고객이 이탈하고 있습니다"라고 쓰면, 현상은 보이지만 누가 언제 왜 불편한지는 빠집니다.</strong> 같은 현상이라도 원인이 돈 자체인지, 손해 보는 느낌인지, 기다리는 시간인지에 따라 해결책이 완전히 달라집니다.</p>
  <p>문제인식 항목이 짐작으로 채워지면 그 아래 솔루션도 짐작 위에 서게 됩니다. 이 글은 현상 문장을 근거 있는 문제 정의로 고치는 순서를 예비창업자 기준으로 정리했습니다.</p>

  <h2>문제인식 항목은 '동기'와 '필요성'을 묻습니다</h2>
  <p><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년 예비창업패키지 수정 공고</a>는 서류·발표 평가지표의 첫 항목인 문제인식에서 "창업아이템을 개발하게 된 동기(문제인식), 해결방안(필요성)"을 본다고 적었습니다. 2026년 접수는 3월 26일에 끝났으니, 다음 모집에서는 새 공고문의 평가표를 다시 확인하세요.</p>
  <p>동기를 설명한다는 것은 "이 문제가 있을 것 같다"가 아니라 "이 문제를 이렇게 확인했다"를 보여주는 일입니다. 시장 통계만으로는 그 사람이 왜 불편한지까지 말해주지 않습니다.</p>

  <h2>현상과 문제는 어떻게 다를까요</h2>
  <table>
    <thead>
      <tr>
        <th>구분</th>
        <th>현상 문장</th>
        <th>문제 정의에 필요한 것</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>누가</strong></td>
        <td>고객들이</td>
        <td>어떤 상황의 어떤 사람인지 (예: 혼자 사는 직장인이 평일 저녁에)</td>
      </tr>
      <tr>
        <td><strong>무엇이</strong></td>
        <td>배달비가 비싸서</td>
        <td>불편의 정확한 이름 (돈, 손해 보는 느낌, 시간, 불안 중 무엇인지)</td>
      </tr>
      <tr>
        <td><strong>어떻게 알았나</strong></td>
        <td>(없음)</td>
        <td>인터뷰, 관찰, 주문 기록처럼 창업자가 직접 확인한 근거</td>
      </tr>
      <tr>
        <td><strong>지금은 어떻게 하나</strong></td>
        <td>이탈하고 있습니다</td>
        <td>고객이 현재 쓰는 대안과 그 대안의 한계</td>
      </tr>
    </tbody>
  </table>

  <h2>가상 예시로 고쳐보면</h2>
  <p>아래는 설명을 위해 만든 가상 예시입니다. 인터뷰 인원과 내용은 실제 조사 결과가 아닙니다.</p>
  <div class="dh-note">
    <p><strong>고치기 전</strong><br>배달비가 비싸서 고객들이 배달 앱을 이탈하고 있습니다.</p>
    <p><strong>고친 뒤 (가상 예시)</strong><br>혼자 사는 20~30대 직장인 12명에게 지난주 마지막 배달 주문을 물었더니, 9명이 1만 원 안팎의 1인분을 주문하려다 배달비 때문에 메뉴를 바꾸거나 주문을 취소한 적이 있다고 답했습니다. 이들은 배달비 금액보다 "음식값에 비해 배달비 비중이 크다"는 데서 손해 보는 느낌을 받았고, 지금은 최소주문금액을 맞추려고 먹지 않을 메뉴를 더 담고 있었습니다.</p>
  </div>
  <p>고친 문장에는 고객의 범위, 확인 방법, 불편의 이름(손해 보는 느낌), 지금의 대안(메뉴를 더 담기)이 모두 들어 있습니다. 이렇게 쓰면 솔루션도 "배달비를 낮춘다"가 아니라 "1인분 주문에서 배달비 비중을 줄인다"처럼 좁혀집니다.</p>

  <h2>짐작을 덜어내는 질문 순서</h2>
  <p>고객에게 "이런 서비스가 있으면 쓰시겠어요?"라고 물으면 예의상 긍정적으로 답하기 쉽습니다. 롭 피츠패트릭의 『<a href="${MOM_TEST_URL}" target="_blank" rel="noopener noreferrer">The Mom Test</a>』는 상대가 솔직하지 않을 때도 고객 대화에서 편향된 피드백을 피하는 법을 다룬 책입니다. 같은 문제의식으로, 인터뷰에서는 아래 순서로 물어보세요.</p>
  <ol>
    <li><strong>최근 장면:</strong> "마지막으로 이 일을 했을 때 어떻게 하셨어요?"</li>
    <li><strong>현재 대안:</strong> "그때 불편을 줄이려고 무엇을 하셨나요?"</li>
    <li><strong>들인 비용:</strong> "그 대안에 돈이나 시간을 얼마나 쓰셨어요?"</li>
    <li><strong>감정의 이름:</strong> "그때 가장 걸렸던 게 돈이었나요, 시간이었나요, 다른 것이었나요?"</li>
  </ol>
  <p>답을 받으면 의견("쓸 것 같아요")과 행동("지난주에 주문을 취소했어요")을 나눠 적으세요. 계획서에는 행동을 근거로 씁니다.</p>

  <h2>AI가 대신 채울 수 없는 부분</h2>
  <p>AI 도구는 인터뷰 메모를 평가항목 순서에 맞는 문장으로 정리하는 데 도움이 됩니다. 하지만 어떤 고객이 어떤 장면에서 불편했는지는 창업자가 현장에서 확인해야 채울 수 있습니다. 인터뷰를 아직 못 했다면, 확정된 문제처럼 쓰기보다 "누구를 몇 명 만나 무엇을 확인할지"를 검증 계획으로 적는 편이 정직합니다.</p>

  <div class="dh-cta">
    <p>고객 인터뷰 메모가 있다면 독스헌트에 올려 공고의 문제인식 항목에 맞는 초안으로 정리하고, 솔루션 항목과 같은 고객을 말하는지 확인해 보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=business-plan-problem-definition&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트로 문제인식 초안 만들기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 예비창업자 수정 모집공고(2차)</a></li>
      <li><a href="${MOM_TEST_URL}" target="_blank" rel="noopener noreferrer">Rob Fitzpatrick, The Mom Test 공식 사이트</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

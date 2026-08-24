import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const MODOO_STARTUP_URL = "https://www.modoo.or.kr/";
const DOCSHUNT_SOLUTION_URL = "https://www.modoo.or.kr/ai-solution/organization/835";

export const post99 = {
  page: 1,
  index: 1,
  slug: "modoo-startup-selection-minimum-criteria",
  sourceUrl: "https://docshunt.ai/blog_detail/modoo-startup-selection-minimum-criteria",
  title: "모두의 창업, 선정을 위한 최소 기준",
  titleLines: ["모두의 창업,", "선정을 위한 최소 기준"],
  titleLineBreaks: "always",
  description:
    "모두의 창업에 아이디어만 가지고 도전할 수 있어도 심사 기준은 달라지지 않습니다. 문제·고객·실행·검증이 보이는 사업계획서의 최소 기준을 정리했습니다.",
  seo: {
    mainKeyword: "모두의 창업",
    supportKeywords: ["모두의 창업 선정 기준", "사업계획서 실행 계획", "아이디어 검증", "고객 문제"],
    searchIntent: "모두의 창업에 도전할 아이디어를 심사자가 판단할 수 있는 사업계획서로 바꾸는 기준을 알고 싶다",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.24",
  modifiedDate: "2026.08.24",
  verification: {
    date: "2026.08.24",
    note: "본문은 사용자가 제공한 8장 카드뉴스에서 사진 영역을 추출하고, 제목·본문·밑줄·정렬을 웹 본문으로 재현했습니다. 프로그램과 독스헌트 공급기업 정보는 모두의 창업 공식 홈페이지에서 확인했으며, 카드뉴스에 없는 일정·자격·선정 수치는 덧붙이지 않았습니다.",
    sources: [
      { label: "모두의 창업 공식 홈페이지", url: MODOO_STARTUP_URL },
      { label: "모두의 창업 AI 솔루션 공급기업 - 독스헌트", url: DOCSHUNT_SOLUTION_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00099-modoo-startup-selection-criteria-card-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00099-modoo-startup-selection-criteria-card-hero.jpg",
  paragraphs: [
    "아이디어만 가지고 모두의 창업에 도전할 수 있지만, 도전할 수 있다는 것과 선발된다는 것은 다른 문제입니다.",
    "심사위원은 누구의 문제인지, 왜 필요한지, 어떻게 해결할지, 신청자가 실행할 수 있는지를 확인합니다.",
    "신청서에는 문제·고객·실행·검증이 보여야 아이디어가 판단 가능한 계획이 됩니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <h2>1. 아이디어만 가지고 도전하세요!</h2>
  <p>라고 모두의 창업 홍보 영상에선 말합니다.</p>
  <p><strong><u>다만, 도전할 수 있다는 것과<br>선발된다는 것은 다른 문제입니다.</u></strong></p>
  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00099-modoo-startup-challenge-video-still.jpg" alt="모두의 창업 홍보 영상에서 아이디어로 도전하자고 말하는 장면">
  </figure>

  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00099-modoo-startup-judge-review.jpg" alt="발표 자료와 신청서를 검토하는 심사 현장 이미지">
  </figure>
  <h2>2. 도전할 수 있을 뿐,<br>심사 기준은 같다</h2>
  <p>심사위원은 여전히 물을 수밖에 없습니다.</p>
  <p>누구의 문제인가.<br>왜 필요한가.<br>어떻게 해결할 수 있는가.</p>
  <p><strong><u>당신이 실행할 수 있는가.</u></strong></p>

  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00099-modoo-startup-problem-evidence.jpg" alt="문제와 근거를 카드로 정리하는 작업 이미지">
  </figure>
  <h2>3. 기발한 아이디어만으로는<br>심사위원을 설득할 수 없습니다.</h2>
  <p>창의적인 아이디어는 출발점일 뿐,</p>
  <p>심사에서 설득력을 얻으려면<br>한 줄의 새로움보다<br><strong><u>문제에 대한 근거와<br>실행 방법이 함께 보여야 합니다.</u></strong></p>

  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00099-modoo-startup-application-review-room.jpg" alt="사업계획서를 검토하는 발표 평가 현장 이미지">
  </figure>
  <h2>4. 신청서에는 이 다섯 가지가<br>보여야 합니다.</h2>
  <div class="dh-card-columns">
    <p>누가 문제를 겪는가.<br>왜 지금 해결해야 하는가.<br>무엇을 바꿀 것인가.<br>어떻게 시작할 것인가.<br>무엇을 확인할 것인가.</p>
    <p><strong><u>이 질문에 답할수록<br>아이디어는 계획과 근거가 됩니다.</u></strong></p>
  </div>

  <h2>5. 아이디어와 계획서는 다릅니다.</h2>
  <div class="dh-card-columns">
    <div>
      <p>“청년을 위한 커뮤니티를 만들겠습니다.”</p>
      <p>이건 아이디어입니다.</p>
      <p>“취업 준비생이 반복해서 겪는<br>정보 탐색 문제를 발견했고,<br>3개월 동안 실제 사용자와 함께<br>첫 서비스를 검증하겠습니다.”</p>
    </div>
    <p><strong><u>이제 심사자가 판단할 수 있는<br>계획이 됩니다.</u></strong></p>
  </div>
  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00099-modoo-startup-service-plan.jpg" alt="첫 서비스와 실행 계획을 설계하는 이미지">
  </figure>

  <h2>6. 모두의 창업에서 필요한 건<br>완성된 사업이 아닙니다.</h2>
  <p>아이디어를 구체화하여 가설을 세우고,<br>고객 반응을 확인하고,<br>MVP를 만들고,<br>다음 단계로 발전시킬 계획입니다.</p>
  <p><strong><u>무엇을 검증할지, 어떻게 실행할지가 보여야 합니다.</u></strong></p>
  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00099-modoo-startup-mvp-validation.jpg" alt="MVP 시제품을 확인하며 검증 계획을 논의하는 이미지">
  </figure>

  <div style="text-align:center">
    <p>왜 필요한지 설명되고,<br>누가 원하는지 보이고,<br>어떻게 실행할지 적혀 있고,<br>검증 계획이 적혀 있는.</p>
    <h2>그런 사업계획서를<br>독스헌트와 함께 만들어보세요.</h2>
    <p><strong><u>사업계획서는 독스헌트.</u></strong></p>
  </div>
  <div class="dh-cta">
    <p>문제·고객·실행·검증이 보이는 사업계획서를 독스헌트와 함께 준비하세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=modoo-startup-selection-minimum-criteria&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 사업계획서 준비하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${MODOO_STARTUP_URL}" target="_blank" rel="noopener noreferrer">모두의 창업 공식 홈페이지</a></li>
      <li><a href="${DOCSHUNT_SOLUTION_URL}" target="_blank" rel="noopener noreferrer">모두의 창업 AI 솔루션 공급기업 - 독스헌트</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

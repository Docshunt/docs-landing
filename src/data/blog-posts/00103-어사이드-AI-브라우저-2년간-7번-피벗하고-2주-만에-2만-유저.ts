import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const DEV_KOREA_TALK_URL = "https://dev-korea.com/talks/7-pivots-to-build-something-people-want";
const EO_INTERVIEW_URL = "https://www.eomag.io/article/aside-chanhee-lee";
const YC_ASIDE_URL = "https://www.ycombinator.com/companies/aside";
const ASIDE_URL = "https://aside.com/";
const YOUTUBE_TALK_URL = "https://www.youtube.com/watch?v=Cy1xjHaoqGI";

export const post103 = {
  page: 1,
  index: 1,
  slug: "aside-ai-browser-seven-pivots",
  sourceUrl: "https://docshunt.ai/blog_detail/aside-ai-browser-seven-pivots",
  title: "어사이드 AI 브라우저, 2년간 7번 피벗하고 2주 만에 2만 유저",
  titleLines: ["2년간 7번 피벗", "2주 만에 2만 유저"],
  titleLineBreaks: "always",
  description:
    "어사이드 AI 브라우저는 처음부터 브라우저를 만든 팀이 아니었습니다. 2년간 7번 방향을 바꾸고, 먼저 팔아본 뒤 5개월 동안 제품을 만든 과정을 카드뉴스 순서 그대로 옮겼습니다.",
  seo: {
    mainKeyword: "어사이드 AI 브라우저",
    supportKeywords: ["7번 피벗", "2주 만에 2만 유저", "제품 검증", "초기 창업"],
    searchIntent:
      "어사이드 AI 브라우저가 여러 번의 피벗을 거쳐 2주 만에 2만 유저를 모은 과정을 통해 초기 제품 검증과 방향 전환의 기준을 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.09.01",
  modifiedDate: "2026.09.01",
  verification: {
    date: "2026.09.01",
    note: "본문은 사용자가 제공한 Aside AI 브라우저 카드뉴스 9장의 문구와 순서를 그대로 옮겼습니다. 2년간 7번 피벗, 2주 만에 2만 유저, 약 5개월 개발과 AI 브라우저의 제품 방향은 Dev Korea 발표 소개, EO 인터뷰, Y Combinator와 Aside 공식 자료를 대조했습니다. 한 해 매출 6만 원, 이틀 만에 100만 원 선판매, 조회수 300만 회는 카드뉴스와 발표 원문의 서술 범위를 넘어 독립적인 성과 수치로 확대하지 않았습니다.",
    sources: [
      { label: "Dev Korea, 7 pivots to build something people want", url: DEV_KOREA_TALK_URL },
      { label: "EO Magazine, 어사이드 이찬희 대표 인터뷰", url: EO_INTERVIEW_URL },
      { label: "Y Combinator, Aside company profile", url: YC_ASIDE_URL },
      { label: "Aside 공식 홈페이지", url: ASIDE_URL },
      { label: "사용자 제공 발표 영상", url: YOUTUBE_TALK_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00103-aside-ai-browser-seven-pivots-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00103-aside-ai-browser-seven-pivots-hero.jpg",
  paragraphs: [
    "어사이드 팀은 처음부터 브라우저를 만들었던 게 아니었습니다. 팀은 2년간 여러 제품을 만들고 여러 번 방향을 바꿨습니다.",
    "만들기 전에 먼저 팔아보기로 했습니다. 제품부터 만들지 않고, 먼저 결제할 사람을 찾았습니다.",
    "기술 영업팀을 위한 AI를 만들며 서비스 연동의 한계를 겪은 뒤, 브라우저 자체가 AI의 작업 공간이 될 수 있다는 생각에서 AI 브라우저가 시작됐습니다.",
    "팀은 약 5개월 동안 알리지도 않고 만들기만 했습니다. 직접 써보고, 막히면 고치고, 다시 써보고 또 만들었습니다.",
    "그렇게 브라우저 안에서 일하는 AI 어사이드가 탄생했습니다. 어사이드는 앞으로 어떻게 될까요?",
  ],
  contentHtml: `<div class="dh-seo-post">
  <h2>어사이드 팀은 처음부터<br>브라우저를 만들었던 게 아니었습니다</h2>
  <p>팀은 2년간 여러 제품을 만들고<br>여러 번 방향을 바꿨습니다.</p>
  <p>문제는 기술이 아니었습니다.</p>
  <p>만든 제품을 사용자에게 제대로 건네지도 않고,<br>다음 아이디어로 넘어갔습니다.</p>
  <p><strong><u>한 해 매출은 단, 6만 원.</u></strong></p>
  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00103-aside-team-closeup.jpg" alt="어사이드 팀원이 사무실에서 작업하는 모습">
  </figure>

  <hr>

  <h2>그래서 만들기 전에<br>먼저 팔아보기로 했습니다</h2>
  <p>“영어 미팅 실시간 자막·번역 도구를<br>2주 안에 만들어드릴게요.<br>지금 5만 원만 내주세요.”</p>
  <p>제품부터 만들지 않고,<br>먼저 결제할 사람을 찾았습니다.</p>
  <p><strong><u>이틀 만에<br>100만 원어치가 선판매됐습니다.</u></strong></p>
  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00103-aside-first-product-team.jpg" alt="어사이드 팀이 초기 제품을 함께 만드는 모습">
  </figure>

  <hr>

  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00103-aside-caret-early-product.jpg" alt="어사이드 팀의 초기 영어 미팅 제품 화면">
  </figure>
  <h2>팀이 겪은 영어 미팅의<br>불편함에서 시작한 제품</h2>
  <p>화려한 기능보다 먼저,<br>누군가 지금 이 문제를 당장 해결하기 위해<br>돈을 낸다는 걸 확인했습니다.</p>
  <p><strong><u>처음 얻은 의미 있는 트랙션이었습니다.</u></strong></p>

  <hr>

  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00103-aside-sales-assistant-post.jpg" alt="기술 영업팀을 위한 어사이드 초기 제품 소개 화면">
  </figure>
  <h2>그 다음에는<br>기술 영업팀을 위한 AI를 만들었습니다</h2>
  <p>미팅 중 기술 질문이 나오면<br>문서·Slack·지난 통화에서<br>답을 찾아주는 제품이었습니다.</p>
  <p>하지만 잘못된 답을 제공했을 때의 리스크가 너무 컸고<br>고객마다 정보와 답을 쌓고 있는 곳이<br>너무 달랐습니다.</p>

  <hr>

  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00103-aside-integration-problem-team.jpg" alt="어사이드 팀이 사무실에서 제품을 논의하는 모습">
  </figure>
  <h2>문제는 AI가 아니라,<br>연결할 수 없는 환경이었습니다</h2>
  <p>Notion, GitHub,<br>스프레드시트,<br>사내 도구까지.</p>
  <p>서비스마다 연동을 붙일수록<br>제품은 느려졌고,<br>고객의 업무는 계속 흩어져 있었습니다.</p>
  <p>“모든 서비스와 연동해야 할까?”</p>

  <hr>

  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00103-aside-launch-post.jpg" alt="AI 브라우저 어사이드 출시를 알리는 게시물">
  </figure>
  <h2>“어차피 모든 일은<br>브라우저에서 일어나는데”</h2>
  <p>메일도,<br>문서도,<br>대시보드도 브라우저 안에 있습니다.</p>
  <p>서비스를 하나씩 연결하는 대신,<br>브라우저 자체가 AI의 작업 공간이 될 수 있지 않을까.</p>
  <p>그렇게 AI 브라우저가 시작됐습니다.</p>

  <hr>

  <h2>설명보다 제품을 먼저 만들었습니다</h2>
  <p>자본금도 다 떨어져가던 상황,<br>AI 브라우저를 만들겠다는 얘기를<br>투자자도 주변 사람들도 허무맹랑한 소리로만 여겼습니다.</p>
  <p>팀은 약 5개월 동안 알리지도 않고 만들기만 했습니다.</p>
  <p>직접 써보고,<br>막히면 고치고,<br>다시 써보고<br>또 만들었습니다.</p>
  <p><strong><u>본인들이 가장 많이 쓰는<br>제품이 되었습니다</u></strong></p>
  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00103-aside-five-month-build.jpg" alt="어사이드 팀이 제품을 만드는 사무실 풍경">
  </figure>

  <hr>

  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00103-aside-browser-homepage.jpg" alt="AI 브라우저 어사이드 공식 홈페이지 화면">
  </figure>
  <h2>그렇게 브라우저 안에서 일하는<br>AI 어사이드가 탄생했습니다</h2>
  <p>2주 만에 2만 명이 쓰고,<br>조회수는 300만 회를 넘겼습니다.</p>
  <p>하지만 승부는 지금부터입니다.</p>
  <p>구글 같은 빅테크가 비슷한 브라우저 AI를 만든다면,<br>사람들은 왜 계속 어사이드를 써야 할까요?</p>
  <p>누구보다도 실제 일을 가장 정확하게 끝내는 경험.<br>그걸 계속 증명할 수 있을까요?</p>
  <p>어사이드는 앞으로 어떻게 될까요?</p>

  <div class="dh-cta">
    <p>아이디어를 만들기 전에 먼저 문제를 확인하고, 사업계획서의 흐름을 독스헌트와 함께 정리해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=aside-ai-browser-seven-pivots&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 사업계획서 준비하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${DEV_KOREA_TALK_URL}" target="_blank" rel="noopener noreferrer">Dev Korea, 7 pivots to build something people want</a></li>
      <li><a href="${EO_INTERVIEW_URL}" target="_blank" rel="noopener noreferrer">EO Magazine, 어사이드 이찬희 대표 인터뷰</a></li>
      <li><a href="${YC_ASIDE_URL}" target="_blank" rel="noopener noreferrer">Y Combinator, Aside company profile</a></li>
      <li><a href="${ASIDE_URL}" target="_blank" rel="noopener noreferrer">Aside 공식 홈페이지</a></li>
      <li><a href="${YOUTUBE_TALK_URL}" target="_blank" rel="noopener noreferrer">사용자 제공 발표 영상</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

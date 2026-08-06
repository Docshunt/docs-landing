import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const K_STARTUP_URL = "https://www.k-startup.go.kr/";
const KISED_PRESTARTUP_URL = "https://www.kised.or.kr/menu.es?mid=a10205010000";
const KISED_INITIAL_STARTUP_URL = "https://www.kised.or.kr/menu.es?mid=a10205020000";

export const post57 = {
  page: 1,
  index: 1,
  slug: "business-plan-table-of-contents-evidence-map",
  sourceUrl: "https://docshunt.ai/blog_detail/business-plan-table-of-contents-evidence-map",
  title: "사업계획서 목차, 평가항목을 그대로 베끼면 왜 흐름이 끊길까요?",
  description:
    "사업계획서 목차는 평가항목을 복사하는 일이 아니라 고객 문제, 검증 근거, 실행 계획을 읽히는 순서로 배치하는 일입니다. 제출 전 근거 지도 만드는 법을 정리했습니다.",
  seo: {
    mainKeyword: "사업계획서 목차",
    supportKeywords: ["사업 계획서 목차", "사업계획서 작성법", "예창패 사업계획서 예시"],
    searchIntent: "사업계획서 목차를 어떻게 잡아야 평가항목과 실제 근거가 연결되는지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.06",
  modifiedDate: "2026.08.06",
  verification: {
    date: "2026.08.06",
    note: "Search Console에서 사업계획서 목차·사업 계획서 목차·사업계획서 작성법 검색 수요를 확인했습니다. 예비창업패키지와 초기창업패키지의 제출서류·K-Startup 신청 안내는 창업진흥원 공식 사업안내를 기준으로 확인했습니다.",
    sources: [
      { label: "K-Startup 창업지원포털", url: K_STARTUP_URL },
      { label: "창업진흥원, 예비창업패키지 사업안내", url: KISED_PRESTARTUP_URL },
      { label: "창업진흥원, 초기창업패키지 사업안내", url: KISED_INITIAL_STARTUP_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00057-business-plan-table-of-contents-evidence-map-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00057-business-plan-table-of-contents-evidence-map-hero.jpg",
  paragraphs: [
    "공고 양식이 정한 사업계획서 대목차는 유지해야 합니다. 다만 평가항목 이름만 나열하면 글의 흐름이 끊기기 쉽습니다. 평가항목은 심사자가 확인할 기준이고, 목차는 그 기준에 답하는 근거를 읽히는 순서입니다.",
    "창업진흥원의 예비창업패키지·초기창업패키지 사업안내는 K-Startup 온라인 신청과 사업계획서·증빙서류 제출 절차를 안내합니다. 목차에는 주장만 놓는 것이 아니라 그 주장을 확인할 자료가 어느 페이지에 있는지도 함께 보여야 합니다.",
    "제출 전에는 고객, 상황, 현재 대안, 검증 근거, 해결 방식, 다음 실행을 한 장의 근거 지도로 정리해보세요. 어느 칸이 비어 있는지 보면 목차에서 보강해야 할 부분이 보입니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>사업계획서 목차</strong>를 만들 때 공고 양식의 필수 대목차는 그대로 두어야 합니다. 다만 평가항목 이름만 옮겨 적는 데서 끝나면 독자는 사업이 어떤 문제에서 출발해 어떤 실행으로 이어지는지 따라가기 어렵습니다.</p>
  <p>평가항목은 심사자가 확인할 기준입니다. 목차는 그 기준에 답하는 근거를 읽히는 순서입니다. 둘은 같아 보이지만 역할이 다릅니다.</p>

  <h2>필수 대목차만 적으면 항목은 채워도 이야기가 끊깁니다</h2>
  <p>정부지원사업 양식에서 흔히 보는 대목차만 적으면 이렇게 됩니다.</p>
  <div class="dh-note">
    <p>1. 문제 인식<br>2. 실현 가능성<br>3. 성장 전략<br>4. 팀 역량</p>
  </div>
  <p>공고가 정한 항목을 빠뜨리지 않는 장점은 있습니다. 다만 각 장이 서로 어떻게 이어지는지는 아직 보이지 않습니다. 고객 문제가 왜 생겼고, 그 문제를 확인한 근거가 무엇이며, 제품과 수익모델이 왜 그 문제의 답인지가 따로 놀 수 있습니다.</p>
  <p>사업계획서 작성법에서 더 중요한 질문은 “무엇을 넣을까?”가 아니라 “어떤 순서로 읽히면 근거가 자연스럽게 쌓일까?”입니다.</p>

  <h2>먼저 근거 지도를 만드세요</h2>
  <p>창업진흥원의 예비창업패키지·초기창업패키지 사업안내는 K-Startup 온라인 신청과 사업계획서·증빙서류 제출 절차를 안내합니다. 사업계획서는 혼자 있는 글이 아니라 증빙자료와 함께 읽히는 문서입니다.</p>
  <p>목차를 잡기 전에 아래 여섯 칸을 채워보세요. 빈칸이 있으면 그 부분은 목차에서 크게 쓰기보다 먼저 근거를 보강해야 합니다.</p>
  <ol>
    <li><strong>고객</strong>: 누구의 문제인가?</li>
    <li><strong>상황</strong>: 그 문제가 언제 반복되는가?</li>
    <li><strong>현재 대안</strong>: 고객은 지금 무엇으로 버티는가?</li>
    <li><strong>검증 근거</strong>: 인터뷰, 테스트, 주문, 문의 중 무엇이 남아 있는가?</li>
    <li><strong>해결 방식</strong>: 제품이나 서비스가 어떤 행동을 바꾸는가?</li>
    <li><strong>다음 실행</strong>: 이번 지원으로 어느 단계까지 확인할 것인가?</li>
  </ol>

  <h2>목차는 근거가 쌓이는 순서로 바꿔보세요</h2>
  <p>공고 양식이 정한 대목차가 있다면 그대로 유지해야 합니다. 대신 각 대목차 안의 소제목과 본문을 독자가 근거를 따라갈 수 있는 흐름으로 구성합니다.</p>
  <div class="dh-note">
    <p><strong>대목차만 적은 구성</strong><br>문제 인식 → 실현 가능성 → 성장 전략 → 팀 역량</p>
    <p><strong>근거 흐름을 보강한 구성</strong><br>문제 인식: 반복되는 고객 문제와 기존 대안의 한계<br>실현 가능성: 검증 근거와 해결 방식<br>성장 전략: 지원금으로 검증할 다음 단계<br>팀 역량: 이 문제를 실행할 근거</p>
  </div>
  <p>두 번째 구성은 공식 대목차를 바꾼 것이 아닙니다. 각 대목차 안에서 소제목과 본문을 연결해 심사자가 실제 근거를 따라갈 수 있게 만든 흐름입니다.</p>

  <h2>예시를 찾을 때는 형식보다 근거 위치를 보세요</h2>
  <p>예창패 사업계획서 예시나 샘플을 볼 때도 목차 이름만 따라 쓰면 비슷한 문서가 됩니다. 대신 좋은 예시에서 “주장 옆에 어떤 근거가 붙어 있는지”를 보세요.</p>
  <p>고객 문제를 말한 다음 바로 인터뷰 문장이나 사용 기록이 나오는지, 시장 숫자 다음에 우리 고객군과 연결한 계산이 있는지, 팀 역량 다음에 실제 수행한 프로젝트가 있는지 확인하는 방식입니다.</p>
  <p><strong class="dh-emphasis">사업계획서 목차는 제목 목록이 아니라 근거의 동선입니다.</strong> 제목을 멋지게 바꾸기 전에 각 장에서 심사자가 확인할 자료가 무엇인지 먼저 적어두세요.</p>

  <div class="dh-cta">
    <p>공고문과 기존 사업 자료를 함께 놓고, 비어 있는 근거와 다시 써야 할 목차를 차례로 정리해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=business-plan-table-of-contents-evidence-map&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트로 목차 정리하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${K_STARTUP_URL}" target="_blank" rel="noopener noreferrer">K-Startup 창업지원포털</a></li>
      <li><a href="${KISED_PRESTARTUP_URL}" target="_blank" rel="noopener noreferrer">창업진흥원, 예비창업패키지 사업안내</a></li>
      <li><a href="${KISED_INITIAL_STARTUP_URL}" target="_blank" rel="noopener noreferrer">창업진흥원, 초기창업패키지 사업안내</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

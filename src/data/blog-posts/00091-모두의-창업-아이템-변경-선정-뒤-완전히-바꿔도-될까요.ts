import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const FIRST_COHORT_FAQ_URL = "https://ec.jnu.ac.kr/bbs/ec/237/835571/download.do";
const SECOND_COHORT_STATUS_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1069596&cbIdx=87";

export const post91 = {
  page: 1,
  index: 1,
  slug: "modoo-startup-item-change-after-selection",
  sourceUrl: "https://docshunt.ai/blog_detail/modoo-startup-item-change-after-selection",
  title: "모두의 창업 아이템 변경, 선정 뒤 완전히 바꿔도 될까요?",
  titleLines: ["선정 뒤", "아이템을 완전히", "바꿔도 될까요?"],
  titleLineBreaks: "always",
  description:
    "2026년 모두의 창업 아이템 변경 FAQ는 선정 뒤 전혀 다른 아이템 교체가 불가하다고 안내했습니다. 구체화와 교체를 나눠 점검했습니다.",
  seo: {
    mainKeyword: "모두의 창업 아이템 변경",
    supportKeywords: ["모두의 창업 선정 후 변경", "모두의 창업 아이디어 변경", "모두의 창업 멘토링"],
    searchIntent: "모두의 창업 선정 뒤 아이템을 보완할 수 있는지, 전혀 다른 아이템으로 교체할 수 있는지 확인하고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.16",
  modifiedDate: "2026.08.16",
  verification: {
    date: "2026.08.16",
    note: "2026년 모두의 창업 1기 일반·기술트랙 FAQ의 Q29, Q30을 기준으로 작성했습니다. Q30의 전혀 다른 아이템 변경 불가 안내와 Q29의 멘토링을 통한 아이디어 구체화·개발 가능 안내를 구분했습니다. FAQ는 허용되는 보완과 금지되는 교체의 세부 경계선을 정의하지 않았으므로, 고객·문제·핵심가치 비교표는 독스헌트의 실무 점검 기준으로 표시했습니다. 2기에는 새 공고와 운영기관 안내를 다시 확인해야 합니다.",
    sources: [
      { label: "모두의 창업 일반·기술트랙 FAQ", url: FIRST_COHORT_FAQ_URL },
      { label: "중소벤처기업부, 모두의 창업 프로젝트 2기 모집 관련 안내", url: SECOND_COHORT_STATUS_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00091-modoo-startup-item-change-after-selection-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00091-modoo-startup-item-change-after-selection-hero.jpg",
  paragraphs: [
    "2026년 모두의 창업 1기 일반·기술트랙 FAQ는 선정 뒤 전혀 다른 아이템으로 변경할 수 없다고 안내했습니다. 선정은 제출한 창업 아이디어를 기준으로 이루어졌습니다. 전혀 다른 아이템으로 바꾸면 형평성 문제가 생길 수 있기 때문입니다.",
    "다만 같은 FAQ는 멘토링을 통해 아이디어를 더 구체화하고 발전시킬 수 있다고 설명했습니다. 처음 낸 아이디어의 고객, 문제, 핵심가치가 유지되는 보완과 아예 다른 사업으로 바꾸는 교체는 나눠 봐야 합니다.",
    "FAQ는 허용되는 보완과 금지되는 교체의 정확한 경계선을 세부적으로 정의하지 않았습니다. 고객, 해결 문제, 핵심가치, 수익 구조가 함께 바뀐다면 운영기관에 먼저 변경 가능성을 확인해야 합니다.",
    "이 글은 2026년 모두의 창업 1기 일반·기술트랙 FAQ를 기준으로 작성했습니다. 2기에는 새 공고와 운영기관 안내가 최종 기준입니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>2026년 모두의 창업 1기 일반·기술트랙 FAQ는 선정 뒤 전혀 다른 아이템으로 변경할 수 없다고 안내했습니다.</strong> 선정은 제출한 창업 아이디어를 기준으로 이루어졌습니다. 선정 뒤 전혀 다른 아이템으로 바꾸면 지원의 형평성 문제가 생길 수 있기 때문입니다.</p>
  <p>다만 “전혀 다른 아이템으로 교체”와 “기존 아이디어를 구체화”는 같은 말이 아닙니다. 같은 FAQ는 멘토링을 통해 아이디어를 더 구체화하고 발전시킬 수 있다고 설명했습니다.</p>

  <h2>FAQ Q30의 답은 전혀 다른 아이템 변경 불가입니다</h2>
  <p><a href="${FIRST_COHORT_FAQ_URL}" target="_blank" rel="noopener noreferrer">모두의 창업 일반·기술트랙 FAQ</a> Q30은 선정 뒤 전혀 다른 아이템으로 변경할 수 없다고 안내했습니다. 이유도 함께 적혀 있습니다. 선정 과정이 제출한 창업 아이디어를 기준으로 이루어졌습니다. 완전히 다른 아이템으로 바꾸면 형평성과 지원의 공정성 문제가 생길 수 있다는 취지입니다.</p>
  <p>따라서 선정 뒤 “처음에는 반려동물 돌봄 앱을 냈지만, 이제는 외식 프랜차이즈 자동화 장비를 하겠다”처럼 고객, 문제, 제품과 실행 방식이 모두 달라지는 방향은 공식 FAQ의 금지 범위에 가깝게 봐야 합니다.</p>

  <h2>Q29는 아이디어 구체화와 발전 가능성을 열어둡니다</h2>
  <p>같은 FAQ Q29는 멘토링을 통해 창업 아이디어를 더 구체화하고 개발할 수 있다고 안내했습니다. 선정 당시 문장이 거칠었거나 검증 과정에서 기능의 우선순위가 바뀌는 정도까지 모두 금지한다는 뜻은 아닙니다.</p>
  <p>예를 들어 “동네 카페 재고 폐기를 줄이는 서비스”로 선정된 뒤 멘토링을 거쳐 첫 고객을 베이커리형 카페로 좁힐 수 있습니다. 첫 기능을 재고 예측보다 마감 할인 알림에 집중하는 식의 보완도 아이디어를 구체화하는 과정으로 설명할 여지가 있습니다.</p>
  <p>반대로 같은 창업자가 하더라도 “카페 재고 문제”를 버리고 “청소년 영어 학습 앱”으로 이동한다면 제출한 아이디어의 고객과 문제가 바뀝니다. 이 경우는 단순 보완이라고 보기 어렵습니다.</p>

  <h2>경계선은 FAQ에 세부 정의가 없습니다</h2>
  <p>FAQ는 어디까지가 허용되는 구체화이고 어디부터가 금지되는 교체인지 세부 기준표를 제공하지 않습니다. 아래 표는 공식 규정이 아니라 독스헌트의 실무 점검 기준입니다. 변경이 큰지 판단하기 위한 초안으로만 사용하세요. 실제 변경 전에는 운영기관에 확인해야 합니다.</p>
  <table>
    <thead>
      <tr>
        <th>점검 항목</th>
        <th>구체화에 가까운 변화</th>
        <th>교체에 가까운 변화</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>고객</strong></td>
        <td>같은 고객군 안에서 더 좁힘</td>
        <td>전혀 다른 산업·사용자군으로 이동</td>
      </tr>
      <tr>
        <td><strong>문제</strong></td>
        <td>기존 문제의 원인이나 상황을 더 구체화</td>
        <td>처음 제출한 문제를 버리고 새 문제를 선택</td>
      </tr>
      <tr>
        <td><strong>핵심가치</strong></td>
        <td>같은 효용을 더 빠르거나 싸게 제공</td>
        <td>고객에게 주는 핵심 효용 자체가 달라짐</td>
      </tr>
      <tr>
        <td><strong>제품·기능</strong></td>
        <td>MVP 범위와 우선순위를 조정</td>
        <td>서비스 유형과 제공 방식이 함께 바뀜</td>
      </tr>
      <tr>
        <td><strong>수익 구조</strong></td>
        <td>가격제나 판매 채널을 시험적으로 조정</td>
        <td>비즈니스 모델이 다른 업종 수준으로 이동</td>
      </tr>
    </tbody>
  </table>
  <p>한두 항목이 좁아지는 정도라면 멘토링을 통한 구체화로 설명할 수 있습니다. 여러 항목이 동시에 새 방향으로 바뀐다면 선정 당시 제출한 아이디어와의 연결이 약해집니다.</p>

  <h2>운영기관에 물을 때는 바뀐 부분만 보내지 마세요</h2>
  <p>“아이템을 조금 바꾸려고 합니다”라고만 문의하면 운영기관도 판단하기 어렵습니다. 처음 제출한 아이디어와 바뀐 아이디어를 나란히 적어야 변경의 폭을 확인할 수 있습니다.</p>
  <ol>
    <li>선정 당시 제출한 아이디어명과 한 줄 설명을 적습니다.</li>
    <li>현재 바꾸려는 고객, 문제, 제품, 수익 구조를 적습니다.</li>
    <li>왜 바꾸려는지 멘토링, 고객 인터뷰, 시장 조사 등 근거를 붙입니다.</li>
    <li>바뀌어도 유지되는 핵심가치가 무엇인지 표시합니다.</li>
    <li>이 변경이 가능한지, 별도 승인이나 보고가 필요한지 운영기관에 확인합니다.</li>
  </ol>
  <div class="dh-note">
    <p><strong>문의 문장 예시</strong><br>“선정 당시 아이디어는 A 고객의 B 문제를 해결하는 서비스였습니다. 멘토링과 고객 인터뷰 뒤 같은 고객의 B 문제 안에서 첫 기능을 C로 좁히려 합니다. 이 변경이 아이디어 구체화 범위에 해당하는지, 별도 제출 서류가 필요한지 확인 부탁드립니다.”</p>
  </div>

  <h2>2기는 새 공고와 운영기관 안내가 기준입니다</h2>
  <p>이 글은 2026년 모두의 창업 1기 일반·기술트랙 FAQ를 기준으로 작성했습니다. 중소벤처기업부는 플랫폼 보안과 신뢰성 강화 작업 뒤 2기 모집을 시작할 예정이라고 안내했습니다.</p>
  <p>따라서 1기 FAQ의 문장을 2기 규정으로 자동 적용하면 안 됩니다. <a href="${SECOND_COHORT_STATUS_URL}" target="_blank" rel="noopener noreferrer">2기 모집 관련 공식 안내</a>와 새 공고, 선정 뒤 받은 운영기관 안내를 다시 확인해야 합니다.</p>
  <p><strong class="dh-emphasis">아이템 변경이 필요하다면 “전혀 다른 아이템인가, 같은 문제를 더 구체화한 것인가”를 먼저 나눠 적어보세요.</strong> 그다음 운영기관에 확인하는 순서가 안전합니다.</p>

  <div class="dh-cta">
    <p>아이템을 바꾸기 전에 독스헌트에서 기존 사업계획서와 새 방향을 나란히 정리해보세요. 고객, 문제, 핵심가치가 유지되는지 먼저 확인할 수 있습니다.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=modoo-startup-item-change-after-selection&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 변경 범위 점검하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${FIRST_COHORT_FAQ_URL}" target="_blank" rel="noopener noreferrer">모두의 창업 일반·기술트랙 FAQ</a></li>
      <li><a href="${SECOND_COHORT_STATUS_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 모두의 창업 프로젝트 2기 모집 관련 안내</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

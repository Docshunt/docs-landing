import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const MODOO_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066642&cbIdx=310&parentSeq=1066642";
const MODOO_GUIDELINES_URL = "https://www.k-startup.go.kr/user/board/webRFRR_view_reference.do?page=1&viewCount=18&id=175865&schM=view";

export const post70 = {
  page: 1,
  index: 1,
  slug: "modoo-startup-evaluation-track-difference",
  sourceUrl: "https://docshunt.ai/blog_detail/modoo-startup-evaluation-track-difference",
  title: "모두의 창업 평가항목, 일반·기술과 로컬은 같은 기준일까요?",
  titleLines: ["모두의 창업 평가항목,", "트랙마다 같을까요?"],
  description:
    "모두의 창업 평가항목은 트랙별로 다릅니다. 2026년 1기 기준 일반·기술은 기존 대안 대비 차별성·효과성을, 로컬은 지역 자원 활용과 지역적 가치를 중심으로 살폈습니다. 같은 아이디어의 근거를 어떻게 달리 준비할지 설명합니다.",
  seo: {
    mainKeyword: "모두의 창업 평가항목",
    supportKeywords: ["모두의 창업 프로젝트", "일반 기술 트랙", "로컬 트랙"],
    searchIntent: "모두의 창업 1기 일반·기술과 로컬 트랙의 아이디어 심사 기준이 어떻게 다른지 확인하고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.09",
  modifiedDate: "2026.08.09",
  verification: {
    date: "2026.08.09",
    note: "중소벤처기업부의 2026년 1기 통합 모집공고와 2026년 6월 23일 개정 세부관리기준을 확인했습니다. 1기 모집은 종료됐으며 차기 모집의 평가 표현과 절차는 새 공고가 최종 기준입니다.",
    sources: [
      { label: "중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고", url: MODOO_NOTICE_URL },
      { label: "K-Startup, 모두의 창업 프로젝트 세부관리기준(2026.6.23. 개정)", url: MODOO_GUIDELINES_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00070-modoo-startup-evaluation-track-difference-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00070-modoo-startup-evaluation-track-difference-hero.jpg",
  paragraphs: [
    "모두의 창업 평가항목은 2026년 1기 기준으로 두 트랙이 같은 표현을 쓰지 않았습니다. 일반·기술은 아이디어의 차별성과 효과성, 로컬은 창의성과 지역적 가치를 종합 평가한다고 안내했습니다.",
    "따라서 같은 아이디어라도 일반·기술에서는 기존 대안과 효과를, 로컬에서는 지역 자원과 지역 안에서 생기는 변화를 더 분명히 보여줘야 합니다.",
    "1기 모집이 종료된 상태이므로 차기 모집에 도전할 때는 새 공고 원문에서 평가항목과 세부 문구가 달라졌는지 대조해야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>같은 기준이라고 보기 어렵습니다.</strong> <a href="${MODOO_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년 모두의 창업 프로젝트 1기 통합 모집공고</a>는 일반·기술 트랙의 아이디어 심사에서 <strong>차별성·효과성</strong>을, 로컬 트랙에서는 <strong>창의성·지역적 가치</strong>를 종합 평가한다고 안내했습니다.</p>
  <p>두 트랙 모두 좋은 아이디어를 찾지만, 신청서에서 먼저 증명해야 할 지점은 다릅니다. 트랙의 정의를 확인하지 않은 채 같은 설명을 붙여 넣으면 아이디어와 평가 문구가 어긋날 수 있습니다.</p>

  <h2>일반·기술은 기존 대안과 효과를 묻습니다</h2>
  <p>일반·기술 트랙의 1기 아이디어 심사는 도전신청서를 바탕으로 차별성과 효과성 등을 종합 평가하는 구조였습니다. 여기서는 새 기술을 썼다는 사실보다, 그 기술이 누구의 어떤 불편을 기존 방식보다 얼마나 줄이는지가 더 중요합니다.</p>
  <ul>
    <li><strong>기존 대안:</strong> 고객이 지금 쓰는 제품, 수작업, 포기 방식</li>
    <li><strong>차별성:</strong> 기능을 나열하기보다 대안과 비교했을 때 달라지는 사용 과정</li>
    <li><strong>효과성:</strong> 시간, 비용, 오류, 접근성 중 무엇을 확인할지</li>
  </ul>
  <p>효과를 아직 측정하지 않았다면 예상 수치를 사실처럼 쓰지 말고, 다음 라운드에서 어떤 테스트로 확인할지 나누어 적는 편이 안전합니다.</p>

  <h2>로컬은 지역 자원과 지역 안의 변화를 함께 봅니다</h2>
  <p>로컬 트랙의 1기 아이디어 심사는 창의성과 지역적 가치 등을 종합 평가한다고 적혀 있습니다. 단순히 “지역에서 시작한다”는 위치 정보만으로는 지역적 가치가 설명되지 않습니다.</p>
  <p>어떤 지역 자원, 생활 문제, 상권 관계, 생산자 네트워크를 활용하는지 구체적으로 적어야 합니다. 다른 지역으로 장소만 바꿔도 같은 사업이라면 왜 이 지역에서 시작해야 하는지 한 번 더 확인해볼 필요가 있습니다.</p>

  <h2>같은 아이디어도 근거의 중심이 달라집니다</h2>
  <p>아래는 차이를 설명하기 위한 가상 예시입니다. “동네 식품점의 마감 재고를 예약 판매로 연결하는 서비스”를 두 트랙에서 바라본다고 가정해보겠습니다.</p>
  <div class="dh-note">
    <p><strong>일반·기술 관점</strong><br>점주가 전화와 메신저로 재고를 알리던 과정을 자동화하고, 예약 취소와 폐기량이 줄어드는지 시험합니다.</p>
    <p><strong>로컬 관점</strong><br>특정 전통시장 점포와 지역 소비자를 연결하고, 시장의 영업시간·상품 구성·공동 배송망을 활용해 지역 안에서 반복 구매가 생기는지 확인합니다.</p>
  </div>
  <p>서비스는 같아도 첫 문단에 놓을 근거가 달라집니다. 일반·기술에서는 대안 대비 작동 방식과 효과가 중심이고, 로컬에서는 지역 자원을 쓰는 이유와 지역에 남는 변화가 중심입니다.</p>

  <h2>평가항목은 라운드가 바뀌면 다시 확인해야 합니다</h2>
  <p>1기 공고에서는 최초 아이디어 심사 이후 멘토링 참여 과정, 활동 결과물, 공개 IR 등을 단계별로 검증하는 후속 절차가 이어졌습니다. 첫 신청서의 아이디어 문장만 잘 썼다고 이후 평가까지 같은 방식으로 통과한다는 뜻은 아닙니다.</p>
  <p><a href="${MODOO_GUIDELINES_URL}" target="_blank" rel="noopener noreferrer">2026년 6월 23일 개정 세부관리기준</a>도 세부 선정평가 방식은 별도의 평가계획이나 가이드를 따르도록 두고 있습니다. 실제 참여자는 운영기관과 해당 라운드의 최신 안내를 함께 확인해야 합니다.</p>

  <h2>신청 전에는 이 순서로 대조하세요</h2>
  <ol>
    <li>내 아이디어가 일반·기술과 로컬 중 어느 트랙의 정의에 맞는지 확인합니다.</li>
    <li>공고의 평가 표현을 그대로 옮겨 적지 말고, 각 표현을 뒷받침할 기록을 찾습니다.</li>
    <li>확인한 사실과 앞으로 검증할 계획을 문장 안에서 구분합니다.</li>
    <li>다음 모집에서는 트랙명, 자격, 평가 문구, 일정이 바뀌었는지 새 공고를 다시 봅니다.</li>
  </ol>
  <p><strong class="dh-emphasis">트랙 선택은 곧 어떤 근거를 앞세울지 정하는 일입니다.</strong></p>

  <div class="dh-cta">
    <p>아이디어 설명 옆에 차별성·효과성 또는 창의성·지역적 가치를 입증할 기록을 붙여보고, 비어 있는 근거부터 보완해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=modoo-startup-evaluation-track-difference&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 아이디어 근거 정리하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${MODOO_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고</a></li>
      <li><a href="${MODOO_GUIDELINES_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 모두의 창업 프로젝트 세부관리기준(2026.6.23. 개정)</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

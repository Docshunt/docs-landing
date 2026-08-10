import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const MSS_PRE_STARTUP_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";
const KISED_INSTITUTIONS_URL = "https://www.kised.or.kr/prePubDetail/index.es?mid=a10103020000&prePubId=26";
const K_STARTUP_NOTICE_URL = "https://www.k-startup.go.kr/user/board/webNOTICE_MATR_list_notice_matr.do";

export const post64 = {
  page: 1,
  index: 1,
  slug: "pre-startup-package-review-reading-checklist",
  sourceUrl: "https://docshunt.ai/blog_detail/pre-startup-package-review-reading-checklist",
  title: "예비창업패키지 후기, 합격 문장보다 먼저 확인할 4가지",
  titleLines: ["예비창업패키지 후기,", "합격 문장보다 먼저 확인할 4가지"],
  description:
    "예비창업패키지 후기를 볼 때는 합격 문장을 베끼기보다 작성 연도, 신청 분야·주관기관, 평가 단계, 근거의 재현 가능성을 먼저 확인해야 합니다. 2026년 2차 수정 공고 기준으로 후기 읽는 법을 정리했습니다.",
  seo: {
    mainKeyword: "예비창업패키지 후기",
    supportKeywords: ["예비창업패키지 합격 후기", "예창패 후기", "예비창업패키지 평가"],
    searchIntent: "예비창업패키지 후기를 읽을 때 어떤 정보를 현재 공고와 대조해야 하며 그대로 따라 하면 안 되는 부분이 무엇인지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.08",
  modifiedDate: "2026.08.08",
  verification: {
    date: "2026.08.08",
    note: "Search Console에서 예비창업패키지 후기 검색 수요를 확인했습니다. 중소벤처기업부의 2026년 예비창업패키지 2차 수정 공고에서 신청 분야와 주관기관 선택, 서류평가·인큐베이팅·발표평가 절차, 단계별 평가항목을 다시 확인했습니다. 특정 후기를 일반적인 합격 공식으로 단정하지 않았습니다.",
    sources: [
      { label: "중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)", url: MSS_PRE_STARTUP_URL },
      { label: "창업진흥원, 2026년 예비창업패키지 주관기관 정보", url: KISED_INSTITUTIONS_URL },
      { label: "K-Startup 사업공고", url: K_STARTUP_NOTICE_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00064-pre-startup-package-review-reading-checklist-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00064-pre-startup-package-review-reading-checklist-hero.jpg",
  paragraphs: [
    "예비창업패키지 후기는 합격자의 준비 과정을 이해하는 참고자료입니다. 다만 작성 연도, 신청 분야와 주관기관, 통과한 평가 단계가 다르면 같은 문장과 준비법을 그대로 적용하기 어렵습니다.",
    "후기를 읽을 때는 어떤 공고를 기준으로 썼는지, 서류·인큐베이팅·발표 중 어느 단계의 경험인지, 결과를 뒷받침한 자료가 무엇인지 확인하세요. 합격 문장보다 그 문장을 만들 수 있었던 고객 인터뷰와 테스트 기록이 더 중요합니다.",
    "2026년 예비창업패키지 모집은 종료됐습니다. 다음 모집에서는 새 공고의 평가항목별로 필요한 근거 목록을 만든 뒤, 같은 연도·분야·평가 단계의 후기를 골라 읽으세요.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>예비창업패키지 후기</strong>는 합격자가 무엇을 준비했는지 살펴보는 참고자료입니다. 하지만 후기 속 문장을 그대로 가져온다고 같은 결과가 나오는 것은 아닙니다. 작성 연도, 신청 분야와 주관기관, 통과한 평가 단계가 다르면 요구받은 답도 달라집니다.</p>
  <p>후기를 찾았다면 표현을 저장하기 전에 <strong class="dh-emphasis">공고·신청 단위·평가 단계·근거</strong> 네 가지를 먼저 확인하세요. 그래야 다른 사람의 경험에서 지금 내게 필요한 준비만 골라낼 수 있습니다.</p>

  <h2>후기는 합격 공식을 증명하지 않습니다</h2>
  <p>한 사람의 후기는 그 사람의 아이템, 당시 공고, 선택한 주관기관, 보유한 경험이 만난 결과입니다. “첫 문장을 이렇게 썼다”거나 “MVP가 있어야 한다”는 조언만 떼어 읽으면 어떤 평가 질문에 답하려던 것인지 놓치기 쉽습니다.</p>
  <p>반대로 후기가 유용해지는 지점은 분명합니다. 준비 순서, 예상보다 오래 걸린 검증, 발표에서 받은 질문처럼 공고문만으로 알기 어려운 과정을 볼 수 있습니다. 문장보다 <strong>판단한 이유와 확인한 자료</strong>를 읽어야 하는 이유입니다.</p>

  <h2>1. 어느 연도 공고를 기준으로 쓴 후기인지 보세요</h2>
  <p>예비창업패키지의 선정 규모, 신청 분야, 제출 방식과 사업비 구조는 해마다 같다고 가정할 수 없습니다. 2026년 2차 수정 공고는 총 300명 내외를 선정하고, 일반분야와 특화분야를 나눠 운영한다고 안내했습니다. 사업화 자금도 1단계와 중간평가 이후 2단계로 구분됐습니다.</p>
  <p>이 내용은 2026년 모집에 대한 사실이지 다음 공고의 확정 조건은 아닙니다. 오래된 후기에 나온 금액이나 마감일을 현재 조건처럼 옮기지 말고, 후기의 연도와 지금 보는 공식 공고의 공고번호부터 대조하세요.</p>
  <div class="dh-note">
    <p><strong>후기에서 기록할 것</strong><br>지원 연도, 모집 유형, 공고명, 당시 준비 기간</p>
    <p><strong>공고에서 다시 볼 것</strong><br>신청 자격, 선정 규모, 제출서류, 사업기간, 사업비 구조</p>
  </div>

  <h2>2. 분야와 주관기관이 같은 경험인지 확인하세요</h2>
  <p>2026년 공고에서는 신청자가 희망 주관기관 한 곳을 선택했고 접수 마감 후에는 바꿀 수 없었습니다. 선택한 기관이 평가 안내, 사업비 관리, 창업프로그램을 맡았습니다. 주관기관별 선정 규모는 신청·접수 결과 등에 따라 달라질 수 있다고도 안내됐습니다.</p>
  <p>따라서 특정 기관에서 받은 멘토링이나 발표 질문을 전국 공통 절차처럼 받아들이면 안 됩니다. 후기 작성자가 지원한 분야와 기관을 밝히지 않았다면, 그 경험의 적용 범위도 확인하기 어렵습니다.</p>
  <ul>
    <li><strong>분야:</strong> 일반분야인지 특화분야인지 확인합니다.</li>
    <li><strong>주관기관:</strong> 어떤 기관의 평가와 프로그램을 경험했는지 봅니다.</li>
    <li><strong>아이템 적합성:</strong> 후기 작성자와 내 아이템의 산업·고객이 얼마나 다른지 구분합니다.</li>
  </ul>

  <h2>3. 서류 통과와 최종 선정을 같은 후기로 읽지 마세요</h2>
  <p>2026년 예비창업패키지는 요건검토, 서류평가, 인큐베이팅, 발표평가를 거쳐 1단계 지원대상자를 정했습니다. 공고는 서류평가와 발표평가에서 각각 70점 미만이면 선정 대상에서 제외된다고 안내했습니다.</p>
  <p>서류에서 좋은 평가를 받은 자료와 발표 질의응답에서 필요한 준비는 다를 수 있습니다. 후기에 “합격했다”라고만 적혀 있다면 어느 단계의 결과인지 먼저 확인하세요. 서류 통과 경험을 최종 선정 사례로 확대해서 읽으면 준비 우선순위가 어긋납니다.</p>
  <ol>
    <li><strong>서류평가:</strong> 사업계획서가 문제인식, 실현가능성, 성장전략, 팀 구성에 답하는지 봅니다.</li>
    <li><strong>인큐베이팅:</strong> 사업모델을 구체화하고 멘토링에 참여하는 과정입니다.</li>
    <li><strong>발표평가:</strong> 발표와 질의응답으로 제품·서비스를 더 깊게 확인합니다.</li>
  </ol>

  <h2>4. 합격 문장보다 재현할 수 있는 근거를 찾으세요</h2>
  <p>후기 속 문장은 작성자의 고객 인터뷰, 경력, 테스트 결과에서 나왔을 가능성이 큽니다. 그 문장만 가져오면 내 사업에는 없는 근거를 암시하거나, 실제 고객과 맞지 않는 설명을 하게 됩니다.</p>
  <p>예를 들어 후기에 “고객 30명을 인터뷰해 결제 의사를 확인했다”는 내용이 있다면 숫자를 따라 쓸 일이 아닙니다. 내 고객을 어떤 기준으로 만나고 무엇을 질문할지 참고한 뒤, 실제 결과를 직접 기록해야 합니다. 인터뷰 수가 적더라도 대상, 질문, 관찰 결과가 확인되는 자료가 내 근거입니다.</p>
  <p>후기를 읽으며 아래 세 칸으로 나눠 메모하면 표현을 베끼는 일을 줄일 수 있습니다.</p>
  <ul>
    <li><strong>그 사람이 확인한 사실:</strong> 인터뷰, 실험, 매출, 업무 경험</li>
    <li><strong>내가 적용할 준비법:</strong> 대상 선정, 질문 순서, 자료 정리 방식</li>
    <li><strong>내가 새로 확인할 내용:</strong> 현재 공고 조건과 내 사업의 실제 수치</li>
  </ul>

  <h2>다음 모집에서는 후기보다 새 공고를 먼저 여세요</h2>
  <p>이 글에서 확인한 2026년 예비창업패키지 모집은 이미 종료됐습니다. 다음 모집을 준비할 때는 K-Startup의 최신 공고와 첨부파일을 먼저 읽고, 그 조건과 가까운 후기만 골라보세요.</p>
  <p>새 공고의 평가항목을 기준으로 고객 인터뷰와 실행 자료를 분류하세요. 그다음 같은 분야와 평가 단계의 후기에서 빠진 준비가 없는지 비교하면, 다른 사람의 표현에 기대지 않고도 내 사업의 사실관계를 지킬 수 있습니다.</p>

  <div class="dh-cta">
    <p>흩어진 고객 인터뷰와 실행 자료를 사업계획서 항목별 초안으로 옮겨보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=pre-startup-package-review-reading-checklist&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 사업계획서 준비하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${MSS_PRE_STARTUP_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)</a></li>
      <li><a href="${KISED_INSTITUTIONS_URL}" target="_blank" rel="noopener noreferrer">창업진흥원, 2026년 예비창업패키지 주관기관 정보</a></li>
      <li><a href="${K_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">K-Startup 사업공고</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

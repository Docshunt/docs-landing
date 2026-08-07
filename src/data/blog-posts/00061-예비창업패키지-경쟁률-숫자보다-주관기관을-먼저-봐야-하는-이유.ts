import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const MSS_PRE_STARTUP_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1065953&cbIdx=310&parentSeq=1065953";
const KISED_INSTITUTIONS_URL = "https://www.kised.or.kr/prePubDetail/index.es?mid=a10103020000&prePubId=26";
const K_STARTUP_NOTICE_URL = "https://www.k-startup.go.kr/user/board/webNOTICE_MATR_list_notice_matr.do";

export const post61 = {
  page: 1,
  index: 1,
  slug: "pre-startup-package-competition-managing-institution",
  sourceUrl: "https://docshunt.ai/blog_detail/pre-startup-package-competition-managing-institution",
  title: "예비창업패키지 경쟁률, 숫자보다 주관기관을 먼저 봐야 하는 이유",
  titleLines: ["예비창업패키지 경쟁률,", "주관기관을 먼저 보세요"],
  description:
    "예비창업패키지 경쟁률은 전국 선발 규모 하나로 판단하기 어렵습니다. 2026년 수정 공고를 기준으로 주관기관 선택, 2배수 서류평가, 70점 기준을 함께 읽는 법을 정리했습니다.",
  seo: {
    mainKeyword: "예비창업패키지 경쟁률",
    supportKeywords: ["예창패 경쟁률", "예비창업패키지 주관기관", "2026 예비창업패키지"],
    searchIntent: "예비창업패키지의 실제 경쟁 구조와 주관기관 선택이 평가에 어떤 영향을 주는지 공식 공고 기준으로 확인하고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.07",
  modifiedDate: "2026.08.07",
  verification: {
    date: "2026.08.07",
    note: "Search Console에서 예창패 경쟁률·예비창업패키지 2026 경쟁률 검색 수요를 확인했습니다. 2026년 수정 공고 원문에서 약 300명 선발, 주관기관 1곳 선택, 서류평가 2배수 내외, 평가 단계별 70점 기준을 확인했습니다. 공고에 없는 전국 단일 경쟁률은 추정하지 않았습니다.",
    sources: [
      { label: "중소벤처기업부, 2026년도 예비창업패키지 예비창업자 모집 수정 공고", url: MSS_PRE_STARTUP_URL },
      { label: "창업진흥원, 2026년 예비창업패키지 주관기관 정보", url: KISED_INSTITUTIONS_URL },
      { label: "K-Startup 사업공고", url: K_STARTUP_NOTICE_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00061-pre-startup-package-competition-managing-institution-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00061-pre-startup-package-competition-managing-institution-hero.jpg",
  paragraphs: [
    "예비창업패키지 경쟁률은 공식 지원자 수와 같은 기준의 선발 인원이 함께 공개돼야 계산할 수 있습니다. 2026년 수정 공고는 총 300명 내외를 안내하지만, 공고문 자체에는 전국 단일 경쟁률이 적혀 있지 않습니다.",
    "신청자는 희망 주관기관 한 곳을 선택해야 하고 접수 마감 후 바꿀 수 없습니다. 선택한 기관이 평가 안내, 사업비 관리, 창업프로그램을 맡으며 주관기관별 선정 규모는 신청 결과에 따라 달라질 수 있습니다.",
    "낮아 보이는 경쟁률만 찾기보다 아이템과 기관 프로그램의 적합성, 실제 참여 가능성, 평가 단계의 통과 기준을 함께 봐야 합니다. 이 글에서 다룬 2026년 3월 접수 공고는 종료됐으므로 차기·추가 모집은 최신 공식 공고를 다시 확인해야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>예비창업패키지 경쟁률</strong>은 공식 지원자 수와 같은 기준의 선발 인원이 함께 공개돼야 계산할 수 있습니다. 2026년 수정 공고는 총 300명 내외의 선정 규모를 안내하지만, 공고문 자체에 전국 단일 경쟁률을 제시하지는 않습니다.</p>
  <p>숫자 하나를 찾기보다 먼저 봐야 할 것은 <strong class="dh-emphasis">어느 주관기관에 신청하고, 어떤 평가 단계를 통과해야 하는가</strong>입니다.</p>

  <h2>전국 선발 인원 300명만으로는 경쟁률을 알 수 없습니다</h2>
  <p>중소벤처기업부의 2026년도 예비창업패키지 예비창업자 모집 수정 공고는 일반분야 110명, 특화분야 190명 내외로 총 300명 내외를 선정한다고 안내했습니다. 동시에 주관기관별 선정 규모는 신청·접수 결과 등에 따라 달라질 수 있다고 적었습니다.</p>
  <p>선정 규모만으로는 경쟁률을 알 수 없습니다. 같은 범위의 최종 유효 지원자 수가 있어야 계산할 수 있고, 중도 포기나 요건 미충족 신청을 포함했는지에 따라서도 숫자가 달라집니다. 공식 결과 발표 전의 추정치는 전국 경쟁률로 단정하지 않는 편이 안전합니다.</p>

  <h2>신청자는 주관기관 한 곳을 선택해야 합니다</h2>
  <p>2026년 수정 공고에 따르면 신청자는 희망하는 주관기관 한 곳을 선택해야 하며, 접수 마감 후에는 바꿀 수 없습니다. 선택한 기관에서 평가 결과와 일정을 안내하고, 선정 뒤에는 사업비 관리와 창업프로그램을 제공합니다.</p>
  <p>따라서 예비창업패키지는 전국의 모든 신청자가 하나의 줄에서 점수만 비교하는 구조로 보기 어렵습니다. 신청 단계부터 분야와 주관기관이 나뉘고, 기관별 프로그램과 선정 규모도 함께 작동합니다.</p>
  <div class="dh-note">
    <p><strong>먼저 볼 것</strong><br>내 아이템과 주관기관의 특화 분야·보육 프로그램이 맞는가?</p>
    <p><strong>함께 볼 것</strong><br>멘토링, 인큐베이팅, 발표평가 일정에 실제로 참여할 수 있는가?</p>
    <p><strong>피할 것</strong><br>출처가 불분명한 지원율 캡처만 보고 기관을 정하는 것</p>
  </div>

  <h2>서류평가는 최종 규모의 2배수 내외를 가립니다</h2>
  <p>2026년 공고의 평가 절차는 요건검토, 서류평가, 인큐베이팅, 발표평가 순으로 이어집니다. 서류평가에서는 최종 선정 규모의 2배수 내외를 다음 단계 대상으로 정합니다.</p>
  <p>또한 공고는 주관기관별 선정 규모와 관계없이 서류평가와 발표평가에서 각각 70점 미만이면 선정 대상에서 제외된다고 안내합니다. 특정 기관의 신청자가 적어 보여도 기본 평가 기준을 넘지 못하면 자동으로 선발되는 구조가 아닙니다.</p>
  <ol>
    <li><strong>요건검토:</strong> 신청 자격과 제출서류를 확인합니다.</li>
    <li><strong>서류평가:</strong> 사업계획서를 평가해 2배수 내외를 정합니다.</li>
    <li><strong>인큐베이팅:</strong> 서류 통과자가 BM 구체화와 멘토링에 참여합니다.</li>
    <li><strong>발표평가:</strong> 발표와 질의응답으로 아이템을 심층 평가합니다.</li>
  </ol>

  <h2>주관기관은 낮은 경쟁률보다 세 가지로 비교하세요</h2>
  <p>창업진흥원은 2026년 예비창업패키지 주관기관 정보를 공개하고 있습니다. 목록을 볼 때는 기관 이름이나 위치만 확인하지 말고 아래 순서로 비교해보세요.</p>
  <ul>
    <li><strong>분야 적합성:</strong> 내 아이템의 산업과 고객을 이해할 멘토·프로그램이 있는지 봅니다.</li>
    <li><strong>실행 적합성:</strong> 사업기간 안에 필요한 MVP, 시장검증, 투자 준비를 지원하는지 확인합니다.</li>
    <li><strong>참여 가능성:</strong> 필수 일정과 운영 지역, 대면 프로그램에 현실적으로 참여할 수 있는지 따집니다.</li>
  </ul>
  <p>기관을 골랐다면 사업계획서와 K-Startup 신청 화면의 주관기관이 같은지도 확인해야 합니다. 2026년 공고는 두 정보가 다를 경우 K-Startup 시스템 접수 기준으로 평가한다고 안내했습니다.</p>

  <h2>다음 공고에서는 분모와 분자를 함께 확인하세요</h2>
  <p>이 글에서 다룬 공고는 2026년 3월 6일부터 3월 24일 16시까지 접수한 모집으로, 신청과 평가 일정이 종료됐습니다. 차기 모집이나 추가 공고를 준비한다면 K-Startup의 최신 공고와 첨부파일을 기준으로 선정 규모, 주관기관, 평가 절차가 달라졌는지 다시 확인해야 합니다.</p>
  <p>공식 결과에서 경쟁률을 확인할 때는 모집분야, 주관기관, 지원자 집계 기준, 선발 단계를 같은 범위로 맞추세요. 전국과 특정 기관, 전체와 특정 분야, 접수자와 요건검토 통과자를 섞어 계산한 수치는 지원 판단에 쓰기 어렵습니다.</p>

  <div class="dh-cta">
    <p>경쟁률만 비교하기 전에 최신 공고의 분야·주관기관·평가항목을 정리하고, 내 사업의 근거를 항목별로 연결해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=pre-startup-package-competition-managing-institution&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 지원사업 준비하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${MSS_PRE_STARTUP_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년도 예비창업패키지 예비창업자 모집 수정 공고</a></li>
      <li><a href="${KISED_INSTITUTIONS_URL}" target="_blank" rel="noopener noreferrer">창업진흥원, 2026년 예비창업패키지 주관기관 정보</a></li>
      <li><a href="${K_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">K-Startup 사업공고</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

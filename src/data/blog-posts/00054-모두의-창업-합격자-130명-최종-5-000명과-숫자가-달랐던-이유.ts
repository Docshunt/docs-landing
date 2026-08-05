import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const MSS_FAST_SCREENING_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1068081&cbIdx=86";
const MSS_FINAL_SELECTION_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1068890&cbIdx=86";

export const post54 = {
  page: 1,
  index: 1,
  slug: "modoo-startup-fast-screening-final-selection",
  sourceUrl: "https://docshunt.ai/blog_detail/modoo-startup-fast-screening-final-selection",
  title: "모두의 창업 합격자 130명? 최종 5,000명과 숫자가 달랐던 이유",
  titleLines: ["모두의 창업 합격자 130명?", "최종 5,000명과 숫자가 달랐던 이유"],
  description:
    "모두의 창업 합격자 발표에서 130명과 5,000명이라는 숫자가 함께 보이는 이유는 신속심사 첫 발표와 1기 최종 발표의 단계가 달랐기 때문입니다. 발표일·심사 방식·트랙별 인원을 공식 자료로 정리했습니다.",
  seo: {
    mainKeyword: "모두의 창업",
    supportKeywords: ["모두의 창업 합격자", "신속심사", "최종 선정 5000명"],
    searchIntent: "모두의 창업 합격자가 130명인지 5,000명인지, 두 발표가 어떻게 다른지 정확히 확인하고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.05",
  modifiedDate: "2026.08.05",
  verification: {
    date: "2026.08.05",
    note: "중소벤처기업부의 2026년 5월 11일 신속심사 첫 발표와 6월 9일 1기 최종 선발 발표를 대조했습니다. 본문은 두 발표의 기준일과 단계 차이를 설명하며, 개별 선정 여부는 공식 플랫폼의 본인 결과를 기준으로 확인해야 합니다.",
    sources: [
      { label: "중소벤처기업부, 신속심사 첫 합격자 130명 발표", url: MSS_FAST_SCREENING_URL },
      { label: "중소벤처기업부, 모두의 창업 1기 5,000명 최종 선발", url: MSS_FINAL_SELECTION_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00054-modoo-startup-fast-screening-final-selection-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00054-modoo-startup-fast-screening-final-selection-hero.jpg",
  paragraphs: [
    "모두의 창업 합격자 130명과 최종 5,000명은 서로 충돌하는 숫자가 아닙니다. 130명은 신청자가 몰린 기관에서 신속심사로 먼저 발표한 인원이고, 5,000명은 전체 평가를 마친 뒤 발표한 1기 최종 선발 인원입니다.",
    "중소벤처기업부는 2026년 5월 11일 기준 38개 기관에서 일반·기술 102명, 로컬 28명 등 130명을 먼저 발표했습니다. 이어 6월 9일 일반·기술 4,000명과 로컬 1,000명, 총 5,000명을 최종 선발했다고 밝혔습니다.",
    "결과 발표를 확인할 때는 인원만 비교하지 말고 보도자료의 등록일과 첫 문장에서 신속심사인지 최종 선발인지 확인해야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>모두의 창업</strong> 합격자 130명과 최종 5,000명은 서로 충돌하는 숫자가 아닙니다. 130명은 신청자가 집중된 기관에서 신속심사로 먼저 발표한 인원이고, 5,000명은 전체 평가를 마친 뒤 발표한 1기 최종 선발 인원입니다.</p>
  <p>혼란은 두 자료 모두 합격자를 다루지만 발표 범위가 달랐기 때문에 생겼습니다. 날짜와 보도자료의 첫 문장을 같이 보면 어느 단계의 결과인지 구분할 수 있습니다.</p>

  <h2>5월 11일의 130명은 신속심사 첫 발표였습니다</h2>
  <p>중소벤처기업부는 신청자가 많이 몰린 기관의 결과가 늦어지는 일을 줄이기 위해 신속심사를 도입했습니다. 기관별 신청 현황과 지역 균형을 고려해 49개 기관을 신속심사 대상으로 정했고, 2026년 5월 11일 오전 9시 기준 38개 기관에서 130명을 먼저 발표했습니다.</p>
  <ul>
    <li>일반·기술 분야 102명</li>
    <li>로컬 분야 28명</li>
    <li>합계 130명</li>
  </ul>
  <p>즉 130명은 1기 전체 최종 인원이 아니라, 일부 기관의 심사를 앞당겨 공개한 첫 결과였습니다.</p>

  <h2>6월 9일에는 1기 최종 5,000명이 발표됐습니다</h2>
  <p>중소벤처기업부는 약 6만 3천 명의 지원자를 평가한 뒤 2026년 6월 9일 1기 최종 선발 결과를 발표했습니다.</p>
  <ul>
    <li>일반·기술 트랙 4,000명</li>
    <li>로컬 트랙 1,000명</li>
    <li>합계 5,000명</li>
  </ul>

  <h2>보도자료 제목보다 첫 문장을 확인하세요</h2>
  <p>5월 보도자료의 첫 문장은 신속심사를 통해 첫 합격자 130명을 선정했다고 밝힙니다. 6월 보도자료의 첫 문장에는 1기 5,000명을 최종 선발했다고 적혀 있습니다. 같은 ‘합격자’라는 표현보다 <strong class="dh-emphasis">‘첫 발표’와 ‘최종 선발’이라는 단계</strong>를 확인해야 합니다.</p>
  <p>커뮤니티 글이나 캡처 화면에는 발표 제목과 날짜가 잘릴 수 있습니다. 개인의 선정 여부는 기사 속 인원보다 모두의 창업 플랫폼에서 안내된 본인 결과를 기준으로 확인하세요.</p>

  <div class="dh-cta">
    <p>다음 지원사업을 찾을 때는 지난 결과 발표와 현재 모집 중인 공고를 구분해서 확인해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=modoo-startup-fast-screening-final-selection&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 지원사업 확인하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${MSS_FAST_SCREENING_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 뜨거운 ‘모두의 창업’ 열기, 신속 심사 첫 합격자 명단 발표</a></li>
      <li><a href="${MSS_FINAL_SELECTION_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 「모두의 창업 프로젝트」 5천명의 시작, 모두의 내일이 되다!</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

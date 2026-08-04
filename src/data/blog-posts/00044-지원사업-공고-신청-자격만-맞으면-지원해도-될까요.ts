import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const K_STARTUP_NOTICE_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do";
const BIZINFO_NOTICE_URL = "https://www.bizinfo.go.kr/see/seea/selectSEEA100.do";

export const post44 = {
  page: 1,
  index: 1,
  slug: "support-program-notice-eligibility-fit",
  sourceUrl: "https://docshunt.ai/blog_detail/support-program-notice-eligibility-fit",
  title: "지원사업 공고, 신청 자격만 맞으면 지원해도 될까요?",
  titleLines: ["지원사업 공고,", "신청 자격만 맞으면 지원해도 될까요?"],
  description:
    "지원사업 공고의 업력·지역·업종 조건을 충족해도 지금 우리 회사에 맞는 사업인지는 따로 확인해야 합니다. 공고 목적, 지원 범위, 사업 기간과 보유 자료를 비교해 지원 여부를 정하는 방법을 설명합니다.",
  author: "독스헌트 마케팅팀",
  date: "2026.08.04",
  modifiedDate: "2026.08.04",
  verification: {
    date: "2026.08.04",
    note: "지원 대상과 지원 내용, 신청 기간은 공고마다 다르므로 K-Startup과 기업마당의 최신 개별 공고를 최종 기준으로 확인해야 합니다.",
    sources: [
      {
        label: "K-Startup, 창업지원사업 공고",
        url: K_STARTUP_NOTICE_URL,
      },
      {
        label: "기업마당, 지원사업 공고",
        url: BIZINFO_NOTICE_URL,
      },
    ],
  },
  image: "/docshunt-assets/blog-covers/00044-support-program-notice-eligibility-fit-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00044-support-program-notice-eligibility-fit-hero.jpg",
  paragraphs: [
    "지원사업 공고의 업력, 지역, 업종 조건을 충족하면 신청은 할 수 있습니다. 하지만 자격이 맞는다는 사실만으로 지금 우리 회사에 적합한 공고라고 보기는 어렵습니다.",
    "신청 자격은 접수 가능 여부를 가르는 기준이고, 공고 적합성은 사업 기간과 예산 안에서 공고가 원하는 결과를 만들 수 있는지 판단하는 과정입니다.",
    "먼저 자격을 확인한 뒤 공고 목적과 회사의 현재 단계를 연결하고, 지원 범위와 기간 안에서 실행할 수 있는지 순서대로 살펴보세요.",
    "비교 결과에 따라 지금 지원할 공고, 자료를 보완한 뒤 지원할 공고, 이번에는 넘길 공고로 나누면 원고를 쓰기 전에 준비 시간을 배분할 수 있습니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>지원사업 공고</strong>에서 업력, 지역, 업종 조건이 모두 맞으면 신청은 할 수 있습니다. 하지만 자격을 충족했다는 사실만으로 지금 우리 회사에 맞는 공고라고 보기는 어렵습니다.</p>
  <p>신청 자격은 접수할 수 있는지를 가르는 기준입니다. 그다음에는 사업 기간과 예산 안에서 공고가 원하는 결과를 만들 수 있는지 따로 확인해야 합니다. 이 과정을 건너뛰면 사업계획서를 다 쓰고 나서야 우리 회사의 준비 단계와 맞지 않는다는 것을 깨닫게 됩니다.</p>

  <h2>신청 자격과 공고 적합성은 다른 질문입니다</h2>
  <p>신청 자격은 비교적 분명합니다. 사업자등록일, 소재지, 업종, 제외 조건을 공고문과 증빙서류로 대조하면 됩니다.</p>
  <p>공고 적합성은 조금 다릅니다. 이번 사업이 요구하는 목표가 우리 회사의 다음 단계와 맞는지, 필요한 자료를 이미 확보했는지, 정해진 기간에 결과를 낼 수 있는지까지 봐야 합니다.</p>
  <p>예를 들어 해외 실증을 지원하는 공고에 신청 자격은 맞지만, 아직 국내 고객 인터뷰만 진행한 팀이라고 해보겠습니다. 지원 자체가 불가능하다는 뜻은 아닙니다. 다만 실증 국가, 현지 협력사, 검증할 지표를 사업 기간 안에 준비할 수 있는지 먼저 따져봐야 합니다.</p>

  <h2>공고를 읽을 때는 이 순서로 확인하세요</h2>
  <p><a href="${K_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">K-Startup</a>과 <a href="${BIZINFO_NOTICE_URL}" target="_blank" rel="noopener noreferrer">기업마당</a>에서 관심 공고를 찾았다면 신청 버튼을 누르기 전에 아래 순서대로 확인해보세요.</p>
  <ol>
    <li><strong>자격부터 확인합니다.</strong> 사업자등록일, 소재지, 업종, 매출 단계가 지원 대상과 제외 조건에 맞는지 증빙서류로 확인합니다.</li>
    <li><strong>공고 목적과 현재 단계를 연결합니다.</strong> 공고가 해결하려는 문제와 우리 회사가 다음으로 검증할 고객, 기술, 판매 채널이 이어지는지 살펴봅니다.</li>
    <li><strong>지원 범위와 기간을 계산합니다.</strong> 필요한 비용과 견적, 회사 부담금, 사업 기간 안에 끝낼 실행 단위를 적어봅니다.</li>
  </ol>
  <p>각 단계 옆에는 희망이나 계획이 아니라 지금 확인할 수 있는 자료를 하나씩 붙여보세요. 구체적인 수치나 증빙 없이 “앞으로 준비하겠다”는 계획만 남는다면, 사업계획서를 쓰기 전에 근거부터 보완해야 합니다.</p>

  <h2>지원 여부는 이렇게 정리해보세요</h2>
  <div class="dh-note">
    <p><strong>지금 지원합니다.</strong><br />자격이 맞고, 공고 목적과 현재 준비 단계가 이어지며, 사업 기간에 만들 결과를 설명할 수 있습니다.</p>
    <p><strong>자료를 보완한 뒤 지원합니다.</strong><br />자격은 맞지만 고객 자료, 협력사, 견적처럼 원고에 넣을 근거가 부족합니다.</p>
    <p><strong>이번 공고는 넘깁니다.</strong><br />공고가 원하는 결과와 우리 회사의 다음 단계가 다르거나, 필요한 비용이 지원 범위와 맞지 않습니다.</p>
  </div>
  <p>보류한다고 사업이 부족한 것은 아닙니다. 지금 시점에 맞지 않는 공고일 뿐입니다. 모든 공고에 원고를 쓰기보다 준비할 이유가 분명한 공고부터 선택하면 사업계획서에 쓸 내용도 훨씬 구체적으로 정리됩니다.</p>

  <h2>원고를 열기 전에 한 문장으로 답해보세요</h2>
  <p><strong>“이 지원사업을 통해 지금 우리 회사가 다음으로 확인할 것은 무엇인가?”</strong></p>
  <p>고객 반응, 기술 성능, 판매 채널처럼 구체적인 답이 나오면 공고와 사업계획서가 이어질 가능성이 큽니다. 답이 “지원금을 받는 것”에서 멈춘다면 공고의 목적과 회사의 다음 단계를 한 번 더 비교해보는 편이 좋습니다.</p>

  <div class="dh-cta">
    <p>기업 조건과 공고 요구사항을 나란히 비교하고 싶다면, 독스헌트에서 지금 단계에 맞는 지원사업부터 확인해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=support-program-notice-eligibility-fit&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 맞는 공고 찾기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${K_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 창업지원사업 공고</a></li>
      <li><a href="${BIZINFO_NOTICE_URL}" target="_blank" rel="noopener noreferrer">기업마당, 지원사업 공고</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

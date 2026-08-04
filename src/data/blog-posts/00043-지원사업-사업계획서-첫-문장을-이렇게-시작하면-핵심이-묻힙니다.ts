import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const K_STARTUP_NOTICE_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do";
const BIZINFO_NOTICE_URL = "https://www.bizinfo.go.kr/see/seea/selectSEEA100.do";

export const post43 = {
  page: 1,
  index: 1,
  slug: "support-program-business-plan-first-sentence",
  sourceUrl: "https://docshunt.ai/blog_detail/support-program-business-plan-first-sentence",
  title: "지원사업 사업계획서, 첫 문장을 이렇게 시작하면 핵심이 묻힙니다",
  titleLines: ["지원사업 사업계획서,", "첫 문장을 이렇게 시작하면 핵심이 묻힙니다"],
  description:
    "지원사업 사업계획서를 제품 소개부터 시작하면 공고에서 요구한 목적과 결과가 뒤로 밀릴 수 있습니다. 사업 목적·지원 대상·평가 항목을 먼저 읽고 첫 문단의 순서를 바꾸는 방법을 문장 예시로 보여드립니다.",
  author: "독스헌트 마케팅팀",
  date: "2026.08.04",
  modifiedDate: "2026.08.04",
  verification: {
    date: "2026.08.04",
    note: "지원 대상과 지원 내용, 신청 기간 등은 공고마다 다르므로 K-Startup과 기업마당의 최신 개별 공고를 최종 기준으로 확인해야 합니다.",
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
  image: "/docshunt-assets/blog-covers/00043-support-program-business-plan-first-sentence-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00043-support-program-business-plan-first-sentence-hero.jpg",
  paragraphs: [
    "지원사업 사업계획서를 ‘당사는 AI 기반 플랫폼을 개발하고 있습니다’로 시작하면 제품은 보이지만 왜 이 지원사업에 신청했는지는 바로 드러나지 않습니다.",
    "첫 문장 하나로 평가 결과가 정해지는 것은 아닙니다. 다만 제품 설명이 길어지면 공고에서 요구한 사업 목적과 기간 안에 만들 결과가 뒤로 밀릴 수 있습니다.",
    "공고문에서 사업 목적, 지원 대상, 평가 항목, 기간과 예산을 먼저 옮겨 적고 원고가 각각의 질문에 답하는지 확인하세요.",
    "첫 문단에는 이번 사업에서 해결할 문제, 적용할 대상, 사업 기간에 확인할 결과를 먼저 적고 제품 기능은 그 결과를 만드는 데 필요한 만큼만 설명하는 편이 낫습니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>지원사업 사업계획서</strong> 첫 문장을 “당사는 AI 기반 플랫폼을 개발하고 있습니다”로 시작했다고 해보겠습니다. 무엇을 만드는지는 알겠지만, 왜 이 지원사업에 신청했는지는 아직 보이지 않습니다.</p>
  <p>첫 문장 하나로 평가 결과가 정해지는 것은 아닙니다. 다만 제품 소개가 길어지면 공고에서 요구한 사업 목적과 사업 기간 안에 만들 결과가 뒤로 밀릴 수 있습니다. <strong>잘 읽히는 사업계획서는 제품 기능보다 공고에서 요구하는 답을 먼저 보여줍니다.</strong></p>

  <h2>제품 소개부터 시작하면 무엇이 빠질까요?</h2>
  <p>예를 들어 소상공인의 예약과 고객 관리를 돕는 서비스라도 지원사업에 따라 앞에 놓을 내용은 달라집니다. 기술개발이 목적이라면 현재 기술 수준과 이번에 검증할 목표가 먼저 나와야 합니다. 판로 개척이 목적이라면 어느 채널에서 누구에게 판매할지부터 보여줘야 합니다.</p>
  <p>제품 기능은 그 뒤에 붙이면 됩니다. 이번 사업에서 만들 결과를 먼저 적고, 그 결과에 필요한 기능만 설명하면 소개도 짧아지고 신청 이유도 분명해집니다.</p>

  <h2>사업계획서를 쓰기 전에 공고문 핵심 4가지를 정리하세요</h2>
  <p><a href="${K_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">K-Startup</a>과 <a href="${BIZINFO_NOTICE_URL}" target="_blank" rel="noopener noreferrer">기업마당</a>에 올라온 공고는 지원 대상과 내용, 기간이 서로 다릅니다. 아래 네 가지는 요약문만 보지 말고 지원하려는 개별 공고문에서 직접 확인해야 합니다.</p>
  <table>
    <thead>
      <tr><th>공고에서 확인할 내용</th><th>사업계획서가 답해야 할 질문</th></tr>
    </thead>
    <tbody>
      <tr><td>사업 목적</td><td>우리 사업으로 어떤 결과를 만들 수 있는가?</td></tr>
      <tr><td>지원 대상</td><td>우리 기업이 신청 대상에 해당하는 근거는 무엇인가?</td></tr>
      <tr><td>평가 항목</td><td>평가에서 확인하는 내용을 어떤 자료로 보여줄 것인가?</td></tr>
      <tr><td>기간과 예산</td><td>주어진 기간과 예산으로 무엇을 완료할 것인가?</td></tr>
    </tbody>
  </table>
  <p>원고 첫 문단과 이 네 가지를 나란히 놓고 읽어보세요. 시장성을 보는 공고인데 기술 원리만 길거나, 기술 검증 사업인데 고객 반응만 적혀 있다면 내용 자체가 틀린 것은 아닙니다. 다만 공고가 보는 기준과 설명 순서가 어긋난 상태입니다.</p>

  <h2>첫 문단의 순서를 바꾸면 신청 이유가 보입니다</h2>
  <p>아래 문장은 이해를 돕기 위한 가상의 예시입니다. 실제 원고에는 지원하려는 공고의 목적과 기업이 확인한 자료를 넣어야 합니다.</p>
  <div class="dh-note">
    <p><strong>수정 전</strong><br />당사는 소상공인을 위한 AI 고객관리 플랫폼을 개발하고 있습니다.</p>
    <p><strong>수정 후</strong><br />이번 사업에서는 전화와 메신저로 예약을 관리하는 지역 미용실 5곳에 서비스를 적용합니다. 이미 개발한 예약 관리 기능을 먼저 사용하게 하고, 사업 기간에는 재방문 알림 기능을 추가해 예약 누락과 재방문율의 변화를 확인하겠습니다.</p>
  </div>
  <p>수정 전에는 제품 종류만 보입니다. 수정 후에는 적용 대상, 현재 준비된 기능, 사업이 끝날 때 확인할 결과가 이어집니다. 다음 페이지에서 기능을 설명할 때도 왜 그 기능이 필요한지 이해하기 쉬워집니다.</p>

  <h2>마지막으로 두 질문에 답해보세요</h2>
  <ol>
    <li><strong>왜 다른 공고가 아니라 이 지원사업에 신청했는가?</strong></li>
    <li><strong>사업 기간이 끝났을 때 무엇을 확인하거나 완성할 것인가?</strong></li>
  </ol>
  <p>첫 문단만 읽고도 두 질문의 답을 찾을 수 있어야 합니다. 답이 없다면 표현을 매끄럽게 고치기 전에 빠진 내용부터 채우세요.</p>

  <div class="dh-cta">
    <p>공고문과 기존 원고를 함께 보면서 첫 문단에 빠진 사업 목적과 결과를 찾고 싶다면, 독스헌트에서 다음 사업계획서를 준비해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=support-program-business-plan-first-sentence&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 첫 문단 정리하기</a>
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

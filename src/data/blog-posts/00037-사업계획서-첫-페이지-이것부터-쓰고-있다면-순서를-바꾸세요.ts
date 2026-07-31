import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const ANNOUNCEMENT_URL = "https://mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1069575&cbIdx=310";
const TEMPLATE_URL =
  "https://mss.go.kr/common/board/Download.do?bcIdx=1069575&cbIdx=310&streFileNm=abc09db3-d842-4865-b25c-b740054b154f.pdf";

export const post37 = {
  page: 1,
  index: 1,
  slug: "business-plan-first-page",
  sourceUrl: "https://docshunt.ai/blog_detail/business-plan-first-page",
  title: "사업계획서 첫 페이지, 이것부터 쓰고 있다면 순서를 바꾸세요",
  description:
    "사업계획서 첫 페이지를 회사 연혁과 기술 소개로 시작하면 고객과 해결할 문제가 뒤로 밀릴 수 있습니다. 고객의 반복 행동과 현재 확인한 근거가 첫 문단에 보이도록 순서를 바꾸는 방법을 전후 문장으로 설명합니다.",
  date: "2026.07.31",
  modifiedDate: "2026.07.31",
  verification: {
    date: "2026.07.31",
    note: "2026년 지역 첨단제조 스타트업 스케일업 사업의 공식 사업계획서 양식에서 요약 2페이지 안에 창업아이템 개요, 고객에게 제공할 혜택, 기간 내 목표와 산출물을 작성하도록 한 구조를 확인했습니다. 세부 양식은 공고마다 다를 수 있습니다.",
    sources: [
      {
        label: "중소벤처기업부, 2026년 지역 첨단제조 스타트업 스케일업 창업기업 모집공고",
        url: ANNOUNCEMENT_URL,
      },
      {
        label: "중소벤처기업부, 2026년 사업계획서 양식",
        url: TEMPLATE_URL,
      },
    ],
  },
  image: "/docshunt-assets/blog-covers/00037-business-plan-first-page-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00037-business-plan-first-page-hero.jpg",
  paragraphs: [
    "사업계획서 첫 페이지를 회사 연혁과 기술 설명으로 시작하면 정작 누구의 어떤 문제를 해결하는 사업인지 뒤로 밀릴 수 있습니다.",
    "첫 문단에는 고객, 반복해서 겪는 문제, 해결 방법, 현재 확인한 근거가 먼저 보여야 합니다. 회사 소개는 이 내용을 이해한 뒤에 나와도 늦지 않습니다.",
    "기존 첫 페이지를 버릴 필요는 없습니다. 회사와 기술 소개를 뒤로 옮기고 고객이 겪는 장면을 앞으로 가져오는 것만으로도 읽는 순서를 바꿀 수 있습니다.",
    "제출 전에는 첫 장만 따로 읽어보고 고객이 누구인지, 무엇이 불편한지, 지금 어디까지 확인했는지를 답할 수 있는지 점검해야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>“당사는 다년간 축적한 노하우와 자체 기술력을 바탕으로 혁신적인 플랫폼을 제공합니다.”</strong></p>
  <p>사업계획서 첫 페이지에서 자주 만나는 문장입니다. 틀린 말은 아니지만, 이 문장만으로는 누구의 어떤 문제를 해결하는 사업인지 알기 어렵습니다.</p>
  <p>첫 장에서 회사와 기술부터 길게 설명하면 고객과 문제가 뒤로 밀립니다. 회사 소개를 없앨 필요는 없습니다. <strong>독자가 이해하기 쉬운 순서로 앞뒤를 바꾸면 됩니다.</strong></p>

  <h2>첫 페이지에서는 네 가지부터 보여주세요</h2>
  <p>2026년 중소벤처기업부의 한 공식 <a href="${TEMPLATE_URL}" target="_blank" rel="noopener noreferrer">사업계획서 양식</a>은 요약 2페이지 안에 창업아이템 개요, 고객에게 제공할 혜택, 사업 기간의 목표와 산출물을 작성하도록 구성되어 있습니다. 모든 공고가 같은 양식을 쓰는 것은 아니지만, 첫 부분에서 사업의 핵심을 빠르게 설명해야 한다는 점은 참고할 수 있습니다.</p>
  <ol>
    <li><strong>고객:</strong> 누가 이 문제를 겪는가?</li>
    <li><strong>문제:</strong> 어떤 행동을 반복하며 무엇이 불편한가?</li>
    <li><strong>해결 방법:</strong> 지금의 방식을 어떻게 바꾸는가?</li>
    <li><strong>현재 단계:</strong> 무엇을 확인했고 다음에 무엇을 검증할 것인가?</li>
  </ol>
  <p>네 가지가 먼저 나오면 뒤에 이어지는 제품 기능과 팀 소개도 왜 필요한지 이해하기 쉬워집니다.</p>

  <h2>왜 회사 소개부터 쓰게 될까요?</h2>
  <p>창업자가 가장 익숙하게 설명할 수 있는 내용은 회사와 제품입니다. 그래서 첫 문장부터 보유 기술과 기능을 적기 쉽습니다. 하지만 읽는 사람은 아직 그 기술이 왜 필요한지 모릅니다.</p>

  <div class="dh-note">
    <strong>아래는 설명을 위한 가상의 예시입니다.</strong>
    <p><strong>수정 전:</strong> 당사는 AI 기반 자동화 플랫폼으로 온라인 판매자의 업무 효율을 높이고 새로운 고객 경험을 제공합니다.</p>
    <p><strong>수정 후:</strong> 여러 판매 채널을 쓰는 1인 판매자는 반품 사유를 엑셀로 다시 옮겨 적습니다. 저희는 주문 데이터를 모아 이 반복 정리 과정을 줄이는 도구를 만들고 있으며, 현재 판매자 5곳과 분류 항목을 확인하고 있습니다.</p>
  </div>

  <p>수정 후 문장은 화려하지 않지만 고객, 문제, 해결 방법, 현재 단계가 보입니다. 그다음 문단에서 자동 분류 기술과 팀 경험을 설명하면 앞 문장과 자연스럽게 연결됩니다.</p>

  <h2>기술 설명은 고객 행동과 연결하세요</h2>
  <p>기술 이름만 적으면 기능 소개로 끝나기 쉽습니다. 고객의 기존 행동이 어떻게 달라지는지까지 적어야 해결 방법으로 읽힙니다.</p>
  <ul>
    <li><strong>기존 행동:</strong> 판매자가 채널별 반품 사유를 엑셀로 옮겨 적습니다.</li>
    <li><strong>제품이 하는 일:</strong> 여러 채널의 주문 데이터를 한곳에 모아 사유를 분류합니다.</li>
    <li><strong>달라지는 결과:</strong> 반복 입력을 줄이고 자주 발생하는 반품 원인을 확인할 수 있습니다.</li>
  </ul>
  <p>“AI를 적용했다”는 사실보다 어떤 반복 업무가 줄어드는지 먼저 보여주면 기술의 역할도 더 분명해집니다.</p>

  <h2>마지막으로 첫 장만 따로 읽어보세요</h2>
  <p>전체 원고를 다듬고 나면 첫 페이지만 따로 떼어 아래 질문에 답해보세요.</p>
  <div class="dh-note">
    <ul>
      <li>누가 고객인지 한 문장으로 말할 수 있는가?</li>
      <li>고객이 반복해서 겪는 문제가 장면처럼 보이는가?</li>
      <li>현재 확인한 사실과 앞으로 검증할 내용이 구분되어 있는가?</li>
      <li>회사 소개와 기술 설명이 앞의 문제를 해결하는 데 연결되는가?</li>
    </ul>
  </div>
  <p>답이 바로 나오지 않는다면 내용을 더 보태기 전에 순서부터 바꿔보세요. 공고가 제공한 양식과 작성 안내가 있다면 그 구조를 우선 따라야 합니다. 그 안에서도 고객과 문제를 앞에 두는 원칙은 유지할 수 있습니다.</p>

  <div class="dh-cta">
    <p>첫 페이지에서 고객, 문제, 해결 방법이 바로 보이는지 확인하고 싶다면, 독스헌트에서 기존 사업계획서를 바탕으로 다음 초안을 작성해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=business-plan-first-page&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 첫 페이지 다듬기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${ANNOUNCEMENT_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 지역 첨단제조 스타트업 스케일업 창업기업 모집공고</a></li>
      <li><a href="${TEMPLATE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 사업계획서 양식</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

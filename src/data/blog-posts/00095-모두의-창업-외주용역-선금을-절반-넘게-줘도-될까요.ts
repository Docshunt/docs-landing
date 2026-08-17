import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const MANAGEMENT_CRITERIA_URL = "https://www.k-startup.go.kr/afile/fileDownload/79cLn";
const MANAGEMENT_CRITERIA_NOTICE_URL =
  "https://www.k-startup.go.kr/user/board/webRFRR_view_reference.do?id=175865&page=1&schM=view&viewCount=18";
const SECOND_COHORT_STATUS_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1069596&cbIdx=87";

export const post95 = {
  page: 1,
  index: 1,
  slug: "modoo-startup-outsourcing-advance-payment-limit",
  sourceUrl: "https://docshunt.ai/blog_detail/modoo-startup-outsourcing-advance-payment-limit",
  title: "모두의 창업 외주용역, 선금을 절반 넘게 줘도 될까요?",
  titleLines: ["외주용역 선금,", "절반 넘게", "줘도 될까요?"],
  titleLineBreaks: "always",
  description: "모두의 창업 외주용역은 선금 50% 한도와 2천만원 초과 사전심의를 함께 봐야 합니다. 2026.6.23. 개정 기준으로 정리했습니다.",
  seo: {
    mainKeyword: "모두의 창업 외주용역",
    supportKeywords: ["모두의 창업 선금", "모두의 창업 사업비", "모두의 창업 외주계약"],
    searchIntent: "외주계약 선금 한도와 2천만원 초과 거래의 사전심의 조건을 확인",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.17",
  modifiedDate: "2026.08.17",
  verification: {
    date: "2026.08.17",
    note: "모두의 창업 프로젝트 세부관리기준 2026.6.23. 개정본을 기준으로 작성했습니다. 일반·기술트랙 외주용역비의 선금 합계 50% 이하, 부가가치세 포함 2천만원 초과 단일 건 또는 동일 거래업체 누적 거래의 지역허브기관 사업운영위원회 사전심의, 로컬트랙 일반용역비의 선금 50% 초과 불가를 확인했습니다. 업체 요구 선금이 큰 경우 지급 구조와 심의 필요성을 먼저 확인하라는 부분은 독스헌트의 실행 권고입니다. 이후 기수 또는 새 공고·운영기관 안내가 나오면 그 안내가 우선합니다.",
    sources: [
      { label: "모두의 창업 프로젝트 세부관리기준(2026.6.23. 개정)", url: MANAGEMENT_CRITERIA_URL },
      { label: "창업진흥원, 모두의 창업 프로젝트 세부관리기준 개정본 안내", url: MANAGEMENT_CRITERIA_NOTICE_URL },
      { label: "중소벤처기업부, 모두의 창업 프로젝트 2기 모집 관련 안내", url: SECOND_COHORT_STATUS_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00095-modoo-startup-outsourcing-advance-payment-limit-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00095-modoo-startup-outsourcing-advance-payment-limit-hero.jpg",
  paragraphs: [
    "모두의 창업 외주용역 선금을 전체 용역비의 절반 넘게 지급하는 방식은 피해야 합니다. 2026년 6월 23일 개정된 모두의 창업 프로젝트 세부관리기준은 일반·기술트랙 외주용역비의 선금 합계를 전체 용역비의 50% 이하로 두고 있습니다.",
    "일반·기술트랙에서 단일 건 또는 동일 거래업체 누적 외주용역 거래가 부가가치세를 포함해 2천만원을 초과하면 지역허브기관 사업운영위원회 사전심의가 필요합니다. 로컬트랙은 항목명이 일반용역비이고 완료 후 일시납이 원칙이지만 예외적으로 분할 지급하더라도 선금은 계약금액의 50%를 초과할 수 없습니다.",
    "따라서 계약서에 먼저 큰 착수금을 넣고 나중에 맞추려 하기보다 트랙, 거래업체 누적액, 부가세 포함 금액, 산출물, 사전심의 여부를 결제 전에 정리해야 합니다. 이 글은 2026.6.23. 개정 기준이며 이후 기수나 새 공고·운영기관 안내가 나오면 그 기준이 우선합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>모두의 창업 외주용역 선금을 전체 용역비의 절반 넘게 주는 구조는 안 됩니다.</strong> 2026년 6월 23일 개정된 세부관리기준은 일반·기술트랙 외주용역비의 선금 합계를 전체 용역비의 50% 이하로 두고 있습니다. 업체가 “착수금 70%를 받아야 시작한다”고 말하더라도, 그 조건을 그대로 계약하고 사업비로 집행하면 기준과 맞지 않을 수 있습니다.</p>
  <p>한 가지를 더 봐야 합니다. 일반·기술트랙에서 단일 건 또는 동일 거래업체와의 누적 외주용역 거래가 부가가치세를 포함해 2천만원을 초과하면 지역허브기관 사업운영위원회 사전심의가 필요합니다.</p>

  <h2>일반·기술트랙은 외주용역비, 로컬트랙은 일반용역비로 봅니다</h2>
  <p><a href="${MANAGEMENT_CRITERIA_URL}" target="_blank" rel="noopener noreferrer">모두의 창업 프로젝트 세부관리기준(2026.6.23. 개정)</a>은 트랙별로 항목 이름을 다르게 씁니다. 일반·기술트랙에서는 시제품 제작, 시장조사, 연구개발 등을 사업자등록 업체와 계약해 집행하는 비용을 외주용역비로 봅니다. 로컬트랙에서는 일반용역비 항목에서 완료 후 일시납이 원칙이라고 설명합니다.</p>
  <p>선금 한도는 두 트랙 모두에서 50%를 넘기면 안 된다는 방향으로 읽힙니다. 다만 2천만원 초과 사전심의 문구는 일반·기술트랙 외주용역 거래에 대해 확인된 기준입니다. 로컬트랙 계약까지 같은 방식으로 단정하지 말고 항목명과 심의 필요성을 운영기관에 별도로 확인해야 합니다.</p>

  <h2>선금 50% 한도는 한 번 지급액만 보는 문제가 아닙니다</h2>
  <p>기준은 “선금 합계”를 봅니다. 계약금 30%, 중간 착수금 25%, 잔금 45%처럼 이름을 나눠도 앞의 두 지급이 실제 산출물 완료 전 선금 성격이라면 합계가 55%가 됩니다. 숫자 이름보다 지급 시점, 검수 여부, 산출물 완료 여부를 같이 봐야 합니다.</p>
  <table>
    <thead>
      <tr>
        <th>계약 구조</th>
        <th>점검 결과</th>
        <th>결제 전 조정</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>계약금 50% + 완료 후 잔금 50%</strong></td>
        <td>선금 한도 안에 들어올 수 있습니다.</td>
        <td>완료 산출물과 검수 기준을 계약서에 적습니다.</td>
      </tr>
      <tr>
        <td><strong>계약금 30% + 착수 30% + 잔금 40%</strong></td>
        <td>선금 합계가 60%가 될 수 있습니다.</td>
        <td>중간 지급을 검수 완료 뒤 지급으로 바꿀 수 있는지 봅니다.</td>
      </tr>
      <tr>
        <td><strong>부가세 포함 2천만원 초과 외주</strong></td>
        <td>일반·기술트랙은 사전심의 대상일 수 있습니다.</td>
        <td>단일 건과 동일 업체 누적액을 함께 계산합니다.</td>
      </tr>
    </tbody>
  </table>

  <h2>2천만원 초과 여부는 부가세 포함 금액과 누적 거래를 같이 봅니다</h2>
  <p>일반·기술트랙의 사전심의 기준은 단일 계약만 보는 문장이 아닙니다. 같은 거래업체와의 누적 외주용역 거래도 함께 봅니다. 1차 계약이 1,300만원이고 같은 업체와 2차 계약 900만원을 추가한다면 각각은 2천만원 이하처럼 보여도 누적 금액은 2천만원을 넘습니다.</p>
  <p>또 기준 금액은 부가가치세 포함입니다. 견적서의 공급가액만 보고 “2천만원 아래”라고 판단하면 실제 결제 총액과 어긋날 수 있습니다.</p>

  <h2>계약 전에 이 순서로 확인하세요</h2>
  <ol>
    <li>내 트랙이 일반·기술트랙인지, 로컬트랙인지 먼저 확인합니다.</li>
    <li>비용 항목명이 외주용역비인지 일반용역비인지 확인합니다.</li>
    <li>계약 상대가 사업자등록 업체인지 확인합니다.</li>
    <li>계약금, 착수금, 중도금 중 산출물 완료 전 지급되는 금액을 모두 더합니다.</li>
    <li>선금 합계가 전체 용역비 또는 계약금액의 50%를 넘지 않는지 계산합니다.</li>
    <li>일반·기술트랙 외주용역이라면 부가세 포함 단일 건과 동일 업체 누적액이 2천만원을 넘는지 봅니다.</li>
    <li>심의가 필요할 수 있으면 계약 체결과 결제 전에 운영기관에 사전심의 절차를 확인합니다.</li>
  </ol>
  <div class="dh-note">
    <p><strong>문의 문장 예시</strong><br>“일반·기술트랙 외주용역비로 A 업체와 부가세 포함 2,200만원 계약을 검토 중입니다. 선금은 50%로 두고 잔금은 산출물 검수 후 지급하려 합니다. 동일 업체 누적 거래와 사전심의 필요 여부, 제출해야 할 계약·견적 증빙을 확인 부탁드립니다.”</p>
  </div>

  <h2>확인된 사실과 독스헌트 권고를 나눠 보세요</h2>
  <p>공식 기준으로 확인된 사실은 선금 50% 한도, 일반·기술트랙 외주용역의 2천만원 초과 사전심의, 로컬트랙 일반용역비의 완료 후 일시납 원칙과 선금 50% 초과 불가입니다.</p>
  <p>반면 “업체가 큰 착수금을 요구하면 지급 구조를 다시 협의하고 운영기관에 먼저 묻자”는 문장은 독스헌트의 실행 권고입니다. 기준의 숫자를 실제 계약서에 맞추기 위한 체크 순서이지, 공식 문서에 적힌 별도 문구라고 보시면 안 됩니다.</p>

  <h2>이 글은 2026.6.23. 개정 기준입니다</h2>
  <p>이 글은 <a href="${MANAGEMENT_CRITERIA_NOTICE_URL}" target="_blank" rel="noopener noreferrer">창업진흥원이 안내한 모두의 창업 프로젝트 세부관리기준 개정본</a>과 2026년 6월 23일 개정된 문서를 기준으로 작성했습니다. 중소벤처기업부는 <a href="${SECOND_COHORT_STATUS_URL}" target="_blank" rel="noopener noreferrer">2기 모집 관련 안내</a>에서 보안 강화와 신뢰 회복 뒤 2기 모집을 시작할 예정이라고 설명했습니다.</p>
  <p>따라서 이후 기수, 새 공고, 협약 뒤 운영기관 안내가 나오면 그 기준이 우선입니다. 이 글의 숫자를 다음 기수에 자동 적용하지 말고, 계약 전 최신 공고와 운영기관 안내를 다시 확인하세요.</p>
  <p><strong class="dh-emphasis">선금 비율을 맞추는 일은 계약서 맨 마지막에 고치는 숫자가 아닙니다. 산출물, 검수, 지급 시점, 심의 여부를 같이 설계해야 사업비 집행이 흔들리지 않습니다.</strong></p>

  <div class="dh-cta">
    <p>외주 계약을 넣어야 한다면 독스헌트에서 과업, 산출물, 지급 시점과 사업비 항목을 먼저 정리해보세요. 계약서 문장과 사업계획서 실행계획이 어긋나는 부분을 줄일 수 있습니다.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=modoo-startup-outsourcing-advance-payment-limit&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 외주 과업 정리하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${MANAGEMENT_CRITERIA_URL}" target="_blank" rel="noopener noreferrer">모두의 창업 프로젝트 세부관리기준(2026.6.23. 개정)</a></li>
      <li><a href="${MANAGEMENT_CRITERIA_NOTICE_URL}" target="_blank" rel="noopener noreferrer">창업진흥원, 모두의 창업 프로젝트 세부관리기준 개정본 안내</a></li>
      <li><a href="${SECOND_COHORT_STATUS_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 모두의 창업 프로젝트 2기 모집 관련 안내</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

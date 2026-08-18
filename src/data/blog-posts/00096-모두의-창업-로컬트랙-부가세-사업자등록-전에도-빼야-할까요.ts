import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const MANAGEMENT_CRITERIA_URL = "https://www.k-startup.go.kr/afile/fileDownload/79cLn";
const MANAGEMENT_CRITERIA_NOTICE_URL =
  "https://www.k-startup.go.kr/user/board/webRFRR_view_reference.do?id=175865&page=1&schM=view&viewCount=18";
const SECOND_COHORT_STATUS_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1069596&cbIdx=87";

export const post96 = {
  page: 1,
  index: 1,
  slug: "modoo-startup-local-track-vat-before-registration",
  sourceUrl: "https://docshunt.ai/blog_detail/modoo-startup-local-track-vat-before-registration",
  title: "모두의 창업 로컬트랙 부가세, 사업자등록 전에도 빼야 할까요?",
  titleLines: ["로컬트랙 부가세,", "등록 전에는", "포함될까요?"],
  titleLineBreaks: "always",
  description:
    "모두의 창업 로컬트랙 부가세는 원칙적으로 사업비 집행이 어렵지만 미등록자 예외가 있습니다. 증빙 원칙과 등록 전후 확인 포인트를 정리했습니다.",
  seo: {
    mainKeyword: "모두의 창업 로컬트랙 부가세",
    supportKeywords: ["모두의 창업 사업비 부가세", "로컬트랙 사업화자금", "사업자등록 전 부가세"],
    searchIntent: "로컬트랙에서 부가세를 포함할 수 있는 미등록자 예외와 증빙 원칙을 확인",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.17",
  modifiedDate: "2026.08.17",
  verification: {
    date: "2026.08.17",
    note: "모두의 창업 프로젝트 세부관리기준 2026.6.23. 개정본을 기준으로 작성했습니다. 로컬트랙 사업화자금은 원칙적으로 부가세 10%를 사업비로 집행할 수 없고 사업자등록을 하지 않은 경우에는 예외적으로 부가세 포함 집행이 가능하다는 문구를 확인했습니다. 모든 지출 증빙은 사업비카드 카드매출전표 또는 세금계산서를 원칙으로 한다는 점과 양산비용 자부담 원칙도 함께 확인했습니다. 등록일 전후 계약의 적용 시점을 운영기관에 확인하라는 부분은 독스헌트의 실행 권고입니다. 이후 기수 또는 새 공고·운영기관 안내가 나오면 그 안내가 우선합니다.",
    sources: [
      { label: "모두의 창업 프로젝트 세부관리기준(2026.6.23. 개정)", url: MANAGEMENT_CRITERIA_URL },
      { label: "창업진흥원, 모두의 창업 프로젝트 세부관리기준 개정본 안내", url: MANAGEMENT_CRITERIA_NOTICE_URL },
      { label: "중소벤처기업부, 모두의 창업 프로젝트 2기 모집 관련 안내", url: SECOND_COHORT_STATUS_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00096-modoo-startup-local-track-vat-before-registration-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00096-modoo-startup-local-track-vat-before-registration-hero.jpg",
  paragraphs: [
    "모두의 창업 로컬트랙 사업화자금은 원칙적으로 부가세 10%를 사업비로 집행할 수 없습니다. 다만 2026년 6월 23일 개정된 세부관리기준은 로컬트랙 진출자가 사업자등록을 하지 않은 경우 예외적으로 부가세를 포함해 집행할 수 있다고 봅니다.",
    "이 예외는 로컬트랙 미등록 상태에 관한 문구입니다. 일반·기술트랙 기준이나 사업자등록을 마친 뒤의 모든 결제에 자동으로 넓혀 적용하면 안 됩니다. 로컬트랙 지출 증빙은 사업비카드 카드매출전표 또는 세금계산서가 원칙이라는 점도 같이 봐야 합니다.",
    "사업자등록 전후에 걸친 계약이라면 결제 전에 등록일, 결제일, 증빙 종류, 부가세 포함 가능 여부를 운영기관에 확인하는 편이 안전합니다. 이 글은 2026.6.23. 개정 기준이며 이후 기수나 새 공고·운영기관 안내가 나오면 그 기준이 우선합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>모두의 창업 로컬트랙 사업화자금은 원칙적으로 부가세 10%를 사업비로 집행할 수 없습니다.</strong> 다만 2026년 6월 23일 개정된 세부관리기준은 로컬트랙 진출자가 사업자등록을 하지 않은 경우 예외적으로 부가세를 포함해 집행할 수 있다고 봅니다. 그래서 답은 “미등록 상태라면 예외가 있지만, 등록 전후의 모든 결제를 같은 방식으로 처리하면 안 된다”입니다.</p>
  <p>이 글은 로컬트랙 부가세 기준을 다룹니다. 일반·기술트랙 사업비나 외주용역비 기준에 이 예외를 그대로 옮겨 적용한다는 뜻이 아닙니다.</p>

  <h2>로컬트랙 부가세는 원칙과 예외를 같이 읽어야 합니다</h2>
  <p><a href="${MANAGEMENT_CRITERIA_URL}" target="_blank" rel="noopener noreferrer">모두의 창업 프로젝트 세부관리기준(2026.6.23. 개정)</a>은 로컬트랙 사업화자금에서 부가세 10%를 사업비로 집행할 수 없다고 안내합니다. 지원금으로 결제할 금액을 잡을 때 공급가액과 부가세를 나눠 봐야 하는 이유입니다.</p>
  <p>같은 기준은 예외도 둡니다. 로컬트랙 진출자가 사업자등록을 하지 않은 경우에는 부가세를 포함해 집행할 수 있다는 문구입니다. 핵심은 “로컬트랙”과 “사업자등록을 하지 않은 경우”라는 두 조건입니다.</p>

  <h2>일반·기술트랙 기준으로 넓혀 해석하지 마세요</h2>
  <p>모두의 창업 안에서도 일반·기술트랙과 로컬트랙은 사업비 항목과 관리 문구가 다릅니다. 로컬트랙의 미등록자 부가세 예외를 보고 일반·기술트랙에서도 같은 방식으로 처리할 수 있다고 단정하면 안 됩니다.</p>
  <table>
    <thead>
      <tr>
        <th>상황</th>
        <th>공식 기준으로 확인된 내용</th>
        <th>결제 전 확인</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>로컬트랙, 미등록 상태</strong></td>
        <td>예외적으로 부가세 포함 집행 가능</td>
        <td>미등록 상태를 어떻게 증빙할지 확인합니다.</td>
      </tr>
      <tr>
        <td><strong>로컬트랙, 사업자등록 후</strong></td>
        <td>원칙적으로 부가세 집행 불가 기준을 봐야 함</td>
        <td>등록일 이후 결제의 부가세 처리 방식을 문의합니다.</td>
      </tr>
      <tr>
        <td><strong>일반·기술트랙</strong></td>
        <td>이 글의 로컬트랙 예외를 자동 적용할 수 없음</td>
        <td>해당 트랙의 사업비 항목과 운영기관 안내를 따로 확인합니다.</td>
      </tr>
    </tbody>
  </table>

  <h2>증빙은 카드매출전표 또는 세금계산서가 원칙입니다</h2>
  <p>로컬트랙의 모든 지출 증빙은 사업비카드의 카드매출전표 또는 세금계산서를 원칙으로 합니다. 부가세 포함 가능 여부만 보고 증빙 방식을 느슨하게 잡으면 나중에 집행 확인에서 설명이 어려워질 수 있습니다.</p>
  <p>예를 들어 미등록 상태에서 장비 시제품 테스트 비용을 결제해야 한다면, 먼저 그 지출이 로컬트랙 사업화자금으로 가능한 과업인지 봐야 합니다. 그다음 결제일 현재 사업자등록 상태, 카드매출전표 또는 세금계산서 발급 가능 여부, 부가세 포함 처리 가능 여부를 함께 확인해야 합니다.</p>

  <h2>양산 목적 비용은 별도 문제입니다</h2>
  <p>로컬트랙 사업화자금은 양산 목적으로 쓸 수 없고 양산비용은 자부담으로 처리해야 한다는 기준도 함께 확인됐습니다. 부가세 예외가 있다고 해서 대량 생산비까지 사업화자금으로 처리할 수 있다는 뜻은 아닙니다.</p>
  <p>따라서 지출을 나눌 때는 “부가세를 포함할 수 있나”보다 먼저 “이 지출이 사업화자금으로 가능한 성격인가”를 봐야 합니다. 시제품 검증, 테스트, 시장 반응 확인과 양산 판매용 제작은 같은 결제처럼 보여도 목적이 다릅니다.</p>

  <h2>사업자등록 전후 계약은 이렇게 점검하세요</h2>
  <ol>
    <li>내가 로컬트랙 진출자인지 먼저 확인합니다.</li>
    <li>결제일 기준 사업자등록 상태를 적습니다.</li>
    <li>계약일, 결제일, 세금계산서 또는 카드전표 발행일을 나눠 적습니다.</li>
    <li>공급가액과 부가세를 분리한 견적서를 확보합니다.</li>
    <li>미등록자 예외를 적용하려면 어떤 증빙이 필요한지 운영기관에 문의합니다.</li>
    <li>사업자등록 뒤 결제분은 부가세 제외 집행이 필요한지 확인합니다.</li>
    <li>지출 목적이 양산이 아니라 사업화 과업인지 다시 확인합니다.</li>
  </ol>
  <div class="dh-note">
    <p><strong>문의 문장 예시</strong><br>“로컬트랙 진출자이고 현재 사업자등록 전입니다. 견적 총액은 공급가액 100만원, 부가세 10만원입니다. 결제 예정일 전에 사업자등록을 할 가능성이 있어, 등록 전 결제와 등록 후 결제의 부가세 포함 가능 여부와 필요한 증빙을 확인 부탁드립니다.”</p>
  </div>

  <h2>확인된 사실과 독스헌트 권고를 나눠 보세요</h2>
  <p>공식 기준으로 확인된 사실은 로컬트랙 부가세 10% 사업비 집행 불가 원칙, 사업자등록을 하지 않은 경우의 예외, 카드매출전표 또는 세금계산서 원칙, 양산비용 자부담 기준입니다.</p>
  <p>반면 등록일 전후에 걸친 계약은 결제 전에 운영기관에 적용 시점과 증빙 방법을 묻자는 부분은 독스헌트의 실행 권고입니다. 공식 기준이 모든 경계 사례를 예시로 풀어주지는 않기 때문에, 결제 전에 내 상황을 문장으로 정리해 확인하는 절차가 필요합니다.</p>

  <h2>이 글은 2026.6.23. 개정 기준입니다</h2>
  <p>이 글은 <a href="${MANAGEMENT_CRITERIA_NOTICE_URL}" target="_blank" rel="noopener noreferrer">창업진흥원이 안내한 모두의 창업 프로젝트 세부관리기준 개정본</a>과 2026년 6월 23일 개정된 문서를 기준으로 작성했습니다. 중소벤처기업부는 <a href="${SECOND_COHORT_STATUS_URL}" target="_blank" rel="noopener noreferrer">2기 모집 관련 안내</a>에서 보안 강화와 신뢰 회복 뒤 2기 모집을 시작할 예정이라고 설명했습니다.</p>
  <p>따라서 이후 기수, 새 공고, 협약 뒤 운영기관 안내가 나오면 그 기준이 우선입니다. 이 글의 로컬트랙 예외를 다음 기수나 다른 트랙에 자동 적용하지 마세요.</p>
  <p><strong class="dh-emphasis">부가세는 작은 숫자처럼 보여도 여러 건이 쌓이면 사업비 계획이 달라집니다. 결제 전에 등록 상태, 증빙, 부가세 처리, 지출 목적을 한 줄씩 분리해두세요.</strong></p>

  <div class="dh-cta">
    <p>로컬트랙 사업비를 정리하고 있다면 독스헌트에서 과업별 비용, 증빙, 결제 시점과 사업자등록 일정을 함께 적어보세요. 부가세 처리처럼 놓치기 쉬운 항목을 제출 전 점검할 수 있습니다.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=modoo-startup-local-track-vat-before-registration&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 사업비 계획 점검하기</a>
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

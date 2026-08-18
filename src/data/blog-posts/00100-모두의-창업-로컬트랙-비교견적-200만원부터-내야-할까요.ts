import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const MANAGEMENT_CRITERIA_URL = "https://www.k-startup.go.kr/afile/fileDownload/79cLn";
const MANAGEMENT_CRITERIA_NOTICE_URL =
  "https://www.k-startup.go.kr/user/board/webRFRR_view_reference.do?id=175865&page=1&schM=view&viewCount=18";

export const post100 = {
  page: 1,
  index: 1,
  slug: "modoo-startup-local-track-comparison-quote-threshold",
  sourceUrl: "https://docshunt.ai/blog_detail/modoo-startup-local-track-comparison-quote-threshold",
  title: "모두의 창업 로컬트랙 비교견적, 200만원부터 내야 할까요?",
  titleLines: ["로컬 트랙 비교견적,", "200만 원부터", "왜 꼭 받아야 할까요?"],
  titleLineBreaks: "always",
  description:
    "모두의 창업 로컬트랙 비교견적은 200만원 이상 거래부터 필요합니다. 2천만원 초과 기준과 견적서 필수 기재사항까지 정리했습니다.",
  seo: {
    mainKeyword: "모두의 창업 로컬트랙 비교견적",
    supportKeywords: ["모두의 창업 200만원 견적", "로컬트랙 사업비 증빙", "2천만원 비교견적"],
    searchIntent: "로컬트랙 거래 금액별 비교견적 필요 여부와 견적서에 적을 내용을 확인",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.18",
  modifiedDate: "2026.08.18",
  verification: {
    date: "2026.08.18",
    note: "모두의 창업 프로젝트 세부관리기준 2026.6.23. 개정본의 로컬트랙 진출자 사업비 집행기준을 확인했습니다. 200만원 이상 거래의 비교견적서, 2천만원 초과 거래의 비교견적서 2부 이상, 직인과 품목·수량·단가 또는 위탁업무 내역 기재 기준을 근거로 작성했습니다. 로컬트랙 문구가 기준 금액의 부가가치세 포함 여부를 별도로 명시하지 않아 결제 전 운영기관에 확인하라는 부분은 독스헌트의 실행 권고입니다. 이후 개정본과 운영기관 안내가 우선합니다.",
    sources: [
      { label: "모두의 창업 프로젝트 세부관리기준(2026.6.23. 개정)", url: MANAGEMENT_CRITERIA_URL },
      { label: "창업진흥원, 모두의 창업 프로젝트 세부관리기준 개정본 안내", url: MANAGEMENT_CRITERIA_NOTICE_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00100-modoo-startup-local-track-comparison-quote-threshold-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00100-modoo-startup-local-track-comparison-quote-threshold-hero.jpg",
  paragraphs: [
    "모두의 창업 로컬트랙은 거래 금액이 정확히 200만원이어도 비교견적 대상입니다. 2026년 6월 23일 개정된 세부관리기준은 200만원 이상 거래 건에 비교견적서를 요구합니다. 기준이 ‘초과’가 아니라 ‘이상’이므로 200만원도 포함됩니다.",
    "2천만원을 초과하면 비교견적서 2부 이상이 필요합니다. 다만 로컬트랙 해당 문구는 기준 금액의 부가가치세 포함 여부를 따로 적지 않았습니다. 경계 금액의 거래라면 견적을 확정하기 전에 운영기관에 확인하는 편이 안전합니다.",
    "비교견적서에는 거래처 직인과 품목·수량·단가 또는 구체적인 위탁업무 내역이 들어가야 합니다. 금액만 적힌 한 줄 견적은 같은 조건을 비교했다는 근거가 약하므로 본견적과 비교견적의 사양, 수량, 과업 범위를 맞춰야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>모두의 창업 로컬트랙은 거래 금액이 정확히 200만원이어도 비교견적 대상입니다.</strong> 2026년 6월 23일 개정된 세부관리기준은 200만원 <em>이상</em> 거래 건에 비교견적서를 요구합니다. 기준이 “초과”가 아니어서 200만원도 포함됩니다.</p>
  <p>2천만원을 초과하면 비교견적서 2부 이상이 필요합니다. 다만 로컬트랙 해당 문구는 기준 금액의 부가가치세 포함 여부를 따로 적지 않았습니다. 경계 금액의 거래라면 견적을 확정하기 전에 운영기관에 확인하는 편이 안전합니다.</p>

  <h2>200만원은 비교견적을 준비해야 하는 금액입니다</h2>
  <p><a href="${MANAGEMENT_CRITERIA_URL}" target="_blank" rel="noopener noreferrer">모두의 창업 프로젝트 세부관리기준(2026.6.23. 개정)</a>의 로컬트랙 집행기준은 일반용역비 증빙으로 거래명세서 또는 본견적서와 비교견적서를 요구합니다. 이어서 비교견적서는 200만원 이상 거래 건에 한한다고 적었습니다.</p>
  <p>여기서 놓치기 쉬운 단어가 “이상”입니다. 199만원은 이 문구의 금액 기준에 닿지 않지만 200만원은 닿습니다. 결제금액을 200만원으로 잡았다면 본견적만 받아두고 진행하지 말고 비교 자료까지 준비해야 합니다.</p>

  <h2>2천만원을 초과하면 비교견적서 2부 이상이 필요합니다</h2>
  <table>
    <thead>
      <tr>
        <th>거래 금액</th>
        <th>공식 기준에서 확인된 내용</th>
        <th>결제 전 확인</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>200만원 미만</strong></td>
        <td>200만원 이상 비교견적 기준에는 해당하지 않음</td>
        <td>해당 비목의 다른 증빙은 그대로 준비합니다.</td>
      </tr>
      <tr>
        <td><strong>200만원 이상 2천만원 이하</strong></td>
        <td>비교견적서 필요</td>
        <td>비교견적서를 준비하고 운영기관 양식이 있는지 확인합니다.</td>
      </tr>
      <tr>
        <td><strong>2천만원 초과</strong></td>
        <td>비교견적서 2부 이상 필요</td>
        <td>기준 금액의 산정 방식과 운영기관 안내를 함께 확인합니다.</td>
      </tr>
    </tbody>
  </table>
  <p>2천만원 “이상”이 아니라 “초과”라는 점도 구분해야 합니다. 정확히 2천만원인 거래와 2천만원을 넘는 거래의 문구가 다릅니다. 또 로컬트랙 해당 문구에는 부가가치세를 기준 금액에 포함하는지 명시돼 있지 않습니다. 계약 직전 금액이라면 공급가액, 부가세, 총액을 나눠 운영기관에 문의하는 편이 안전합니다.</p>

  <h2>금액만 다른 견적서는 비교 근거가 되기 어렵습니다</h2>
  <p>관리기준은 비교견적서에 거래처 직인과 구체적인 구매물품 또는 위탁업무 내역을 적도록 합니다. 물품이라면 품목, 수량, 단가가 보여야 합니다. 용역이라면 무엇을 언제까지 만들어주는지 과업 범위가 드러나야 합니다.</p>
  <p>예를 들어 A 업체는 상세페이지 10개 제작, B 업체는 상세페이지 5개와 촬영 1회를 제시했다면 총액만 나란히 놓고 단순 비교하기 어렵습니다. 수량과 산출물이 다르기 때문입니다. 본견적과 비교견적의 사양을 먼저 맞춘 뒤 가격을 비교해야 선정 이유도 설명하기 쉬워집니다.</p>

  <h2>일반용역비만 보는 기준은 아닙니다</h2>
  <p>같은 개정본은 일반수용비, 임차료, 재료비, 무형자산 증빙에도 200만원 이상 비교견적 문구를 둡니다. 외주용역 계약에만 적용되는 숫자라고 생각하면 임차나 재료 구매, 지식재산권 비용에서 증빙을 빠뜨릴 수 있습니다.</p>
  <ul>
    <li><strong>일반수용비·임차료·재료비·무형자산:</strong> 같은 200만원 이상 비교견적 기준이 기재돼 있으므로 비목별 집행 전에 비교견적 필요 여부를 확인합니다.</li>
  </ul>
  <p>비교견적서만 준비하고 끝내지 말고 해당 비목의 나머지 집행 기준도 함께 확인하는 편이 안전합니다.</p>

  <h2>200만원 거래를 앞뒀다면 이 순서로 확인하세요</h2>
  <ol>
    <li>지출이 일반용역비, 일반수용비, 임차료, 재료비, 무형자산 중 어디에 해당하는지 정합니다.</li>
    <li>본견적의 품목, 수량, 단가 또는 과업 범위를 구체적으로 적습니다.</li>
    <li>같은 조건으로 비교할 수 있도록 비교견적을 요청합니다.</li>
    <li>거래처 직인이 있는지 확인합니다.</li>
    <li>2천만원을 초과한다면 비교견적서 2부 이상을 확보합니다.</li>
    <li>공급가액, 부가세, 총액을 나눠 기준 금액 산정 방식을 운영기관에 확인합니다.</li>
    <li>결제 전에 해당 비목의 나머지 집행 기준도 함께 점검합니다.</li>
  </ol>
  <div class="dh-note">
    <p><strong>문의 문장 예시</strong><br>“로컬트랙 재료비로 공급가액 190만원, 부가세 19만원, 총액 209만원인 거래를 검토 중입니다. 비교견적 기준 금액을 공급가액과 부가세 포함 총액 중 어느 금액으로 판단하는지, 필요한 비교견적서 부수와 양식을 확인 부탁드립니다.”</p>
  </div>

  <h2>공식 기준과 실행 권고를 나눠 보세요</h2>
  <p>공식 기준으로 확인된 내용은 200만원 이상 거래에 비교견적서가 필요하다는 점, 2천만원 초과 거래에는 2부 이상이 필요하다는 점, 견적서에 직인과 품목·수량·단가 또는 위탁업무 내역이 들어가야 한다는 점입니다.</p>
  <p>반면 경계 금액에서 부가세 포함 여부를 운영기관에 미리 묻는 것과 본견적·비교견적의 사양을 같은 수준으로 맞추는 것은 독스헌트의 실행 권고입니다. 공식 문구가 모든 거래 사례를 풀어주지는 않으므로 결제 전에 내 금액과 비목을 적어 확인하는 과정이 필요합니다.</p>

  <h2>이 글은 2026.6.23. 개정 기준입니다</h2>
  <p>이 글은 <a href="${MANAGEMENT_CRITERIA_NOTICE_URL}" target="_blank" rel="noopener noreferrer">창업진흥원이 공개한 모두의 창업 프로젝트 세부관리기준 개정본</a>을 기준으로 작성했습니다. 이후 개정본·새 기수 공고·협약서 또는 운영기관의 개별 안내가 나오면 그 내용이 우선합니다.</p>
  <p><strong class="dh-emphasis">견적은 결제 뒤에 맞추기 어렵습니다. 200만원에 닿는 거래라면 비목, 총액, 비교조건, 필요한 부수를 먼저 적고 증빙을 준비하세요.</strong></p>

  <div class="dh-cta">
    <p>로컬트랙 사업비 계획을 세우고 있다면 독스헌트에서 과업별 금액과 산출물, 본견적과 비교견적의 조건을 한 줄씩 연결해보세요. 결제 전에 빠진 자료를 찾기 쉬워집니다.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=modoo-startup-local-track-comparison-quote-threshold&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 사업비 증빙 점검하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${MANAGEMENT_CRITERIA_URL}" target="_blank" rel="noopener noreferrer">모두의 창업 프로젝트 세부관리기준(2026.6.23. 개정)</a></li>
      <li><a href="${MANAGEMENT_CRITERIA_NOTICE_URL}" target="_blank" rel="noopener noreferrer">창업진흥원, 모두의 창업 프로젝트 세부관리기준 개정본 안내</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const PRE_STARTUP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";
const KISED_URL = "https://www.kised.or.kr/";
const PRICING_URL = "https://docshunt.ai/pricing";

export const post24 = {
  page: 3,
  index: 4,
  slug: "80",
  sourceUrl: "https://docshunt.ai/blog_detail/80",
  title: "사업계획서 컨설팅 비용, AI 도구와 비교하기 전에 견적서에서 볼 것",
  description:
    "사업계획서 컨설팅 비용은 누가 문장을 쓰는지, 수정 횟수, 발표 코칭 포함 여부에 따라 달라집니다. 견적서와 AI 도구 요금을 같은 기준으로 비교하는 방법과 공고문이 경고한 성공보수 계약 유형을 정리했습니다.",
  seo: {
    mainKeyword: "사업계획서 컨설팅 비용",
    supportKeywords: ["사업계획서 컨설팅", "사업계획서 AI", "정부지원사업 브로커"],
    searchIntent: "사업계획서 컨설팅 견적과 AI 도구 비용을 어떤 기준으로 비교해야 하는지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2025.11.14",
  modifiedDate: "2026.11.20",
  verification: {
    date: "2026.11.20",
    note: "제3자 부당개입 유형과 '본인 신청 원칙'은 2026년 예비창업패키지 수정 공고(제2026-207호) 붙임 4 '제3자 부당개입 주의 안내문'에서 확인했습니다. 독스헌트 요금과 플랜별 기능은 2026년 11월 20일 기준 요금제 페이지 내용이며, 마스터플랜 가격은 기간별로 바뀝니다. 사업계획서 컨설팅 비용은 공개된 공식 기준이 없어 금액을 적지 않았고, 이전 글의 '비용 80% 절감' 표현은 근거가 없어 삭제했습니다.",
    sources: [
      { label: "중소벤처기업부, 2026년 예비창업패키지 수정 공고(2차) 붙임 4 제3자 부당개입 주의 안내문", url: PRE_STARTUP_NOTICE_URL },
      { label: "창업진흥원 누리집(제3자 부당개입 신고)", url: KISED_URL },
      { label: "독스헌트 요금제", url: PRICING_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00024-consulting-ai-comparison-list.png",
  heroImage: "/docshunt-assets/blog-covers/00024-consulting-ai-comparison-hero.png",
  paragraphs: [
    "사업계획서 컨설팅 비용은 공개된 표준 가격이 없고, 누가 문장을 쓰는지, 수정 횟수, 발표 코칭 포함 여부에 따라 달라집니다. 견적 금액보다 견적서에 적힌 작업 범위를 먼저 비교해야 합니다.",
    "2026년 예비창업패키지 공고는 사업계획을 과대포장해 서류를 써 주고 수수료를 요구하거나, 성공 조건부로 선지급금을 받은 뒤 돌려주지 않는 경우를 제3자 부당개입 유형으로 안내했습니다. 정부 지원사업은 본인 신청이 원칙입니다.",
    "AI 도구는 구독료로 초안 작성과 반복 수정을 맡기는 방식입니다. 플랜별 요금과 사용량은 독스헌트 요금제 페이지에서 확인할 수 있으며, 사실 확인과 전략 판단은 작성자가 해야 합니다.",
    "사업 방향 자체를 함께 고민할 사람이 필요하면 컨설팅이, 자료는 있는데 양식에 맞춰 빠르게 정리하고 여러 번 고쳐야 한다면 AI 도구가 맞습니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>사업계획서 컨설팅 견적을 받았다면, 금액보다 먼저 "누가 문장을 쓰는가"와 "몇 번까지 고쳐 주는가"를 확인하세요.</strong> 사업계획서 컨설팅 비용은 공개된 표준 가격이 없고, 같은 금액이라도 진단만 해 주는 곳과 초안을 대신 써 주는 곳의 작업량이 크게 다릅니다.</p>
  <p>그래서 이 글은 "AI가 컨설팅보다 몇 퍼센트 싸다"는 식의 비교를 하지 않습니다. 대신 컨설팅 견적서와 AI 도구 요금을 같은 기준으로 놓고 보는 방법, 그리고 정부 공고가 직접 경고한 계약 유형을 정리했습니다.</p>

  <h2>견적서에서 먼저 확인할 다섯 줄</h2>
  <p>컨설팅 견적을 비교할 때는 아래 항목이 견적서나 계약서에 적혀 있는지 보세요. 적혀 있지 않다면 물어보고 답을 문서로 받아 두는 편이 안전합니다.</p>
  <table>
    <thead>
      <tr>
        <th>확인할 것</th>
        <th>왜 중요한가</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>작업 방식</strong></td>
        <td>진단·피드백만 하는지, 문장을 고쳐 주는지, 초안을 새로 쓰는지에 따라 작업 시간이 다릅니다</td>
      </tr>
      <tr>
        <td><strong>수정 횟수와 기한</strong></td>
        <td>마감 직전 수정이 추가 비용인지 확인해야 합니다</td>
      </tr>
      <tr>
        <td><strong>공고 양식 반영</strong></td>
        <td>지원하는 공고의 양식과 분량에 맞춘 결과물을 주는지, 일반 사업계획서를 주는지 다릅니다</td>
      </tr>
      <tr>
        <td><strong>발표평가 코칭</strong></td>
        <td>서류 이후 발표 준비가 포함되는지 따로 확인하세요</td>
      </tr>
      <tr>
        <td><strong>성공보수 조건</strong></td>
        <td>선정 여부에 따라 돈을 더 받거나 돌려주는 조건이 있다면, 아래 공고 내용을 함께 읽어 보세요</td>
      </tr>
    </tbody>
  </table>

  <h2>공고문이 직접 경고한 계약 유형</h2>
  <p><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년 예비창업패키지 수정 공고</a>에는 '제3자 부당개입 주의 안내문'이 붙어 있습니다. 여기서 안내한 유형 가운데 사업계획서와 직접 관련된 것은 다음과 같습니다.</p>
  <ul>
    <li>재무제표 분식, 사업계획 과대포장 등 허위로 신청 서류를 작성해 주고 수수료를 요구하는 경우</li>
    <li>지원 자격이 안 되는 기업에 정부 지원을 받아 주겠다며 대가를 요구하는 경우</li>
    <li>성공 조건부 계약을 맺고 수수료를 먼저 받은 뒤, 실패해도 선지급금을 돌려주지 않는 경우</li>
  </ul>
  <p>안내문은 정부 지원사업은 <strong>본인 신청이 원칙</strong>이고, 제3자가 개입해 허위 서류로 신청하면 선정 이후에도 지원이 취소될 수 있다고 적었습니다. "선정 보장"을 내세우는 제안은 의심해 보고, 피해가 있으면 <a href="${KISED_URL}" target="_blank" rel="noopener noreferrer">창업진흥원 누리집</a>의 제3자 부당개입 신고 메뉴를 이용할 수 있습니다.</p>
  <p>정상적인 컨설팅도 많습니다. 다만 어떤 방식을 택하든 사업계획서에 들어가는 사실과 숫자는 신청자 본인이 설명할 수 있어야 합니다.</p>

  <h2>AI 도구 비용은 이렇게 계산합니다</h2>
  <p>AI 도구는 구독료를 내고 초안 작성과 반복 수정을 직접 하는 방식입니다. 2026년 11월 20일 기준 독스헌트 플랜별 제공 범위는 아래와 같습니다. 요금은 플랜과 결제 기간에 따라 달라지고 시기별로 바뀔 수 있으니 결제 전 <a href="${PRICING_URL}" target="_blank" rel="noopener noreferrer">독스헌트 요금제</a> 페이지에서 확인하세요.</p>
  <table>
    <thead>
      <tr>
        <th>플랜</th>
        <th>구분</th>
        <th>주요 제공 범위</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Free</strong></td>
        <td>무료</td>
        <td>기본 사업계획서 최초 2회, AI 시각자료 생성·배치 1회</td>
      </tr>
      <tr>
        <td><strong>Pro</strong></td>
        <td>유료(월 구독)</td>
        <td>지원사업 사업계획서 작성, 양식 직접 업로드·한글 내보내기, AI 문서 수정·근거자료 찾기</td>
      </tr>
      <tr>
        <td><strong>Max</strong></td>
        <td>유료(월 구독)</td>
        <td>Pro의 모든 기능과 2배 사용량, 맞춤 양식 신청 월 3건</td>
      </tr>
    </tbody>
  </table>
  <p>컨설팅 견적과 비교할 때는 "준비할 지원사업 수 × 준비 기간"으로 따져 보세요. 한 달 동안 공고 하나만 준비한다면 월 구독료 하나와 컨설팅 견적 하나를 비교하면 되고, 여러 공고를 이어서 준비한다면 공고마다 붙는 컨설팅 비용과 구독 기간을 비교해야 합니다.</p>

  <h2>컨설팅과 AI 도구가 맡는 일은 다릅니다</h2>
  <table>
    <thead>
      <tr>
        <th>구분</th>
        <th>사업계획서 컨설팅</th>
        <th>AI 도구</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>누가 쓰나</strong></td>
        <td>계약 범위에 따라 컨설턴트가 고치거나 씁니다</td>
        <td>작성자가 답하고 AI가 초안을 만듭니다</td>
      </tr>
      <tr>
        <td><strong>잘하는 일</strong></td>
        <td>사업 방향, 경쟁 구도, 발표 전략에 대한 사람의 판단</td>
        <td>양식에 맞춘 초안, 반복 수정, 여러 공고 재작성</td>
      </tr>
      <tr>
        <td><strong>수정</strong></td>
        <td>계약한 횟수와 일정 안에서</td>
        <td>플랜 사용량 안에서 직접</td>
      </tr>
      <tr>
        <td><strong>사실 확인</strong></td>
        <td colspan="2">어느 쪽이든 회사 정보, 숫자, 출처는 신청자가 최종 확인해야 합니다</td>
      </tr>
    </tbody>
  </table>

  <h2>어떤 상황에 무엇이 맞을까요</h2>
  <p><strong>컨설팅이 더 맞는 경우</strong></p>
  <ul>
    <li>사업 아이템이나 고객이 아직 정해지지 않아 방향부터 함께 고민할 사람이 필요할 때</li>
    <li>서류를 통과해 발표평가를 앞두고 있고, 질의응답 연습이 필요할 때</li>
  </ul>
  <p><strong>AI 도구가 더 맞는 경우</strong></p>
  <ul>
    <li>고객 인터뷰, 시제품, 매출 같은 자료는 있는데 양식에 맞춰 정리할 시간이 부족할 때</li>
    <li>여러 지원사업에 같은 사업 정보를 반복해서 써야 할 때</li>
    <li>문장을 여러 번 바꿔 보며 직접 고치고 싶을 때</li>
  </ul>
  <p>둘을 섞을 수도 있습니다. AI 도구로 양식에 맞춘 초안을 먼저 만들고, 컨설팅은 그 초안의 전략과 논리를 검토받는 데만 쓰면 컨설턴트가 빈 문서부터 시작하지 않아도 됩니다.</p>

  <div class="dh-cta">
    <p>컨설팅을 받기 전이라도, 독스헌트로 공고 양식에 맞춘 초안을 먼저 만들어 두면 검토받을 문서가 생깁니다.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=business-plan-consulting-cost&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트로 초안 먼저 만들기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 수정 공고(2차) 붙임 4 제3자 부당개입 주의 안내문</a></li>
      <li><a href="${KISED_URL}" target="_blank" rel="noopener noreferrer">창업진흥원 누리집(제3자 부당개입 신고)</a></li>
      <li><a href="${PRICING_URL}" target="_blank" rel="noopener noreferrer">독스헌트 요금제</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const EARLY_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1065015&cbIdx=310";
const LEAP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1065016&cbIdx=310&parentSeq=1065016";
const K_STARTUP_NOTICE_LIST_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do";
const BIZINFO_URL = "https://www.bizinfo.go.kr/";

export const post01 = {
  page: 1,
  index: 1,
  slug: "business-plan-reuse-support-program-guide",
  sourceUrl: "https://docshunt.ai/blog_detail/business-plan-reuse-support-program-guide",
  title: "예창패·청창사 끝난 뒤, 써둔 사업계획서를 다른 지원사업에 그대로 내도 될까요?",
  description:
    "예창패·청창사에 냈던 사업계획서는 다른 지원사업의 좋은 출발점이지만, 평가항목이 달라 그대로 내면 맞지 않는 부분이 생깁니다. 다시 쓸 부분과 고칠 부분을 나누는 순서를 2026년 창업패키지 공고 예시로 정리했습니다.",
  seo: {
    mainKeyword: "사업계획서 재활용",
    supportKeywords: ["지원사업 사업계획서", "예비창업패키지 이후 지원사업", "사업계획서 수정"],
    searchIntent: "이미 써둔 지원사업 사업계획서를 다른 공고에 어떻게 고쳐서 다시 쓸 수 있는지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.06.15",
  modifiedDate: "2026.11.20",
  verification: {
    date: "2026.11.20",
    note: "평가항목 비교는 2026년 초기창업패키지(일반형)와 창업도약패키지(일반형) 공고 첨부 공고문에서 확인했습니다. 두 공고의 접수는 끝났으며, 다른 지원사업의 양식과 평가 기준은 해당 공고문을 우선 확인해야 합니다.",
    sources: [
      { label: "중소벤처기업부, 2026년 초기창업패키지(일반형) 창업기업 모집공고", url: EARLY_NOTICE_URL },
      { label: "중소벤처기업부, 2026년 창업도약패키지(일반형) 창업기업 모집공고", url: LEAP_NOTICE_URL },
      { label: "K-Startup, 모집 중인 사업공고", url: K_STARTUP_NOTICE_LIST_URL },
      { label: "기업마당", url: BIZINFO_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00001-예창패-청창사-끝났다고-사업계획서-방치하시나요-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00001-예창패-청창사-끝났다고-사업계획서-방치하시나요-hero.jpg",
  paragraphs: [
    "예창패나 청창사에 냈던 사업계획서는 다른 지원사업을 준비할 때 좋은 출발점입니다. 고객 문제, 해결 방법, 팀 소개처럼 사업의 기본 내용은 공고가 바뀌어도 그대로 쓸 수 있습니다.",
    "다만 지원사업마다 평가항목이 다릅니다. 2026년 초기창업패키지는 실현가능성에서 사업기간 내 개발·구체화 계획을, 창업도약패키지는 목표시장 분석과 시장진입 현황을 봤습니다.",
    "그래서 다시 쓰기 전에 문장을 고정 내용, 공고별로 고칠 내용, 새로 확인할 숫자로 나눠두면 새 공고가 나왔을 때 고칠 곳만 빠르게 찾을 수 있습니다.",
    "새 공고는 K-Startup과 기업마당에서 찾을 수 있으며, 제출 전에는 반드시 그 공고의 첨부 양식과 평가표를 기준으로 맞춰야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>예창패나 청창사에 냈던 사업계획서는 다른 지원사업의 좋은 출발점이지만, 그대로 다시 내면 새 공고의 평가항목과 어긋나는 부분이 생깁니다.</strong> 고객 문제와 팀 소개는 재사용할 수 있어도, 심사위원이 찾는 근거는 공고마다 다르기 때문입니다.</p>

  <h2>같은 네 항목이어도 보는 내용이 다릅니다</h2>
  <p>2026년 <a href="${EARLY_NOTICE_URL}" target="_blank" rel="noopener noreferrer">초기창업패키지</a>와 <a href="${LEAP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">창업도약패키지</a> 공고는 둘 다 문제인식, 실현가능성, 성장전략, 팀(기업) 구성으로 평가했습니다. 항목 이름은 같지만 세부 내용은 달랐습니다.</p>
  <table>
    <thead>
      <tr>
        <th>평가항목</th>
        <th>초기창업패키지(일반형)</th>
        <th>창업도약패키지(일반형)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>문제인식</strong></td>
        <td>아이템의 개발 배경과 필요성</td>
        <td>아이템 개발 동기와 현황</td>
      </tr>
      <tr>
        <td><strong>실현가능성</strong></td>
        <td>사업기간 내 개발 또는 구체화 계획</td>
        <td>목표시장(고객) 분석, 시장진입 현황</td>
      </tr>
      <tr>
        <td><strong>성장전략</strong></td>
        <td>차별성, 수익모델, 자금조달 방안</td>
        <td>사업화 추진 전략과 자금 운용 계획</td>
      </tr>
      <tr>
        <td><strong>팀(기업) 구성</strong></td>
        <td>대표자와 인력의 기술 역량과 노하우</td>
        <td>기업 구성과 보유 역량, 보유 인프라 활용 계획</td>
      </tr>
    </tbody>
  </table>
  <p>초기 단계 공고는 "앞으로 무엇을 만들지"를, 도약 단계 공고는 "지금까지 시장에서 무엇을 했는지"를 더 묻습니다. 같은 사업계획서를 내도 채워야 할 근거가 달라지는 이유입니다.</p>

  <h2>문장을 세 덩어리로 나눠두세요</h2>
  <p>써둔 사업계획서를 열고 문단마다 아래 셋 중 어디에 속하는지 표시해 보세요.</p>
  <ul>
    <li><strong>그대로 쓸 내용:</strong> 고객이 겪는 문제, 해결 방법의 원리, 팀원의 경력처럼 공고와 상관없이 같은 사실</li>
    <li><strong>공고별로 고칠 내용:</strong> 사업비 사용 계획, 협약 기간 안의 일정, 지원사업 목적에 맞춘 성장 목표</li>
    <li><strong>다시 확인할 숫자:</strong> 매출, 고객 수, 시장 규모, 인터뷰 결과처럼 시간이 지나면 바뀌는 값</li>
  </ul>
  <p>세 번째 덩어리가 가장 자주 틀립니다. 반년 전에 쓴 "고객 인터뷰 10명"이 지금은 30명이 됐다면 그 차이가 바로 새 사업계획서의 근거가 됩니다.</p>

  <h2>새 공고가 나오면 이 순서로 맞추세요</h2>
  <ol>
    <li><a href="${K_STARTUP_NOTICE_LIST_URL}" target="_blank" rel="noopener noreferrer">K-Startup</a>이나 <a href="${BIZINFO_URL}" target="_blank" rel="noopener noreferrer">기업마당</a>에서 공고를 찾고, 신청 자격(업력, 지역, 업종)부터 확인합니다.</li>
    <li>공고문의 평가표를 옆에 두고, 항목마다 써둔 문단을 옮겨 붙입니다.</li>
    <li>평가표에는 있는데 옮길 문단이 없는 항목을 표시합니다. 그 부분만 새로 씁니다.</li>
    <li>사업비와 일정은 새 공고의 협약 기간과 지원 금액에 맞춰 다시 계산합니다.</li>
  </ol>

  <div class="dh-cta">
    <p>써둔 사업계획서와 새 공고문을 올리면 독스헌트가 새 양식의 문항 순서에 맞춰 초안을 다시 잡아줍니다. 숫자와 일정은 제출 전에 직접 확인하세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=business-plan-reuse-support-program-guide&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트로 사업계획서 다시 쓰기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${EARLY_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 초기창업패키지(일반형) 창업기업 모집공고</a></li>
      <li><a href="${LEAP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 창업도약패키지(일반형) 창업기업 모집공고</a></li>
      <li><a href="${K_STARTUP_NOTICE_LIST_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 모집 중인 사업공고</a></li>
      <li><a href="${BIZINFO_URL}" target="_blank" rel="noopener noreferrer">기업마당</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

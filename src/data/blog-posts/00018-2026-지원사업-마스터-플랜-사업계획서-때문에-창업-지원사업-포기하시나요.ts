import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const INTEGRATED_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1064201&cbIdx=86";
const PRE_STARTUP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";
const BUDGET_BRIEFING_URL = "https://www.korea.kr/briefing/policyBriefingView.do?newsId=156775671";
const K_STARTUP_URL = "https://www.k-startup.go.kr/";

export const post18 = {
  page: 2,
  index: 8,
  slug: "2026-2",
  sourceUrl: "https://docshunt.ai/blog_detail/2026-2",
  title: "창업지원사업 통합공고 508개, 예비창업패키지에 떨어지면 올해는 끝일까요?",
  description:
    "2026년 창업지원사업 통합공고에는 111개 기관의 508개 사업이 실렸습니다. 예비창업패키지에서 떨어진 뒤 유형별로 다음 사업을 찾는 법과, 같은 해 중복 수행 제한 때문에 먼저 확인할 조건을 정리했습니다.",
  seo: {
    mainKeyword: "창업지원사업 통합공고",
    supportKeywords: ["2026 창업지원사업", "예비창업패키지 탈락", "창업지원사업 종류"],
    searchIntent:
      "예비창업패키지 같은 대표 사업에서 떨어진 뒤, 같은 해에 신청할 수 있는 다른 창업지원사업을 찾고 제한 조건을 확인하고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2025.12.23",
  modifiedDate: "2026.11.20",
  verification: {
    date: "2026.11.20",
    note: "기관 수, 사업 수, 유형별 예산은 중소벤처기업부가 2025년 12월 19일 배포한 2026년 창업지원사업 통합공고 보도자료 첨부 파일에서 확인했습니다. 중복 수행 제한과 협약체결확약서 규정은 2026년 예비창업패키지 수정 공고(2차, 제2026-207호)에서 확인했습니다. 2027년 예비창업 사업 일원화는 정부 예산안 단계의 계획이라 확정이 아닙니다. 이전 글의 마스터 플랜 기능과 환급 비율 안내는 현재 조건과 달라 삭제했습니다.",
    sources: [
      { label: "중소벤처기업부, 정부·지자체 2026년 창업지원에 3조 4,645억원 투입(보도자료)", url: INTEGRATED_NOTICE_URL },
      { label: "중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)", url: PRE_STARTUP_NOTICE_URL },
      { label: "정책브리핑, 중소벤처기업부 재정운용전략 사전 브리핑", url: BUDGET_BRIEFING_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00018-startup-support-integrated-notice-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00018-startup-support-integrated-notice-hero.jpg",
  paragraphs: [
    "중소벤처기업부가 2025년 12월에 낸 2026년 창업지원사업 통합공고에는 15개 중앙부처와 96개 지자체, 모두 111개 기관의 508개 사업이 담겼습니다. 전체 예산은 3조 4,645억 원이었습니다.",
    "508개 중 사업화 유형이 181개, 시설·공간·보육이 158개였고, 지자체 사업이 420개였습니다. 예비창업패키지 한 곳에서 떨어져도 같은 해에 찾아볼 사업은 남아 있습니다.",
    "다만 2026년 예비창업패키지 공고는 같은 해 중앙정부·공공기관 창업사업화 지원사업을 수행 중인 사람의 신청을 막았고, 협약체결확약서를 낸 뒤에는 창업진흥원의 다른 사업화 지원사업 선정 절차에서 제외한다고 적었습니다.",
    "여러 사업에 내기 전에 사업 유형, 중복 제한, 확약서 순서를 먼저 확인하고, 고객 기록과 시제품 같은 핵심 근거는 공고마다 다시 쓰지 않도록 한곳에 모아 두세요.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>예비창업패키지 결과를 받고 "올해는 끝났다"고 생각하는 분이 많습니다.</strong> 그런데 <a href="${INTEGRATED_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년 창업지원사업 통합공고</a>에 실린 사업은 508개였습니다. 대표 사업 하나의 결과가 그해 기회 전체는 아니라는 뜻입니다. 다만 아무 사업에나 같은 사업계획서를 내면 같은 해 중복 제한에 걸릴 수 있어, 순서를 정하고 움직여야 합니다.</p>

  <h2>2026년 창업지원사업 통합공고에 담긴 숫자</h2>
  <p>중소벤처기업부는 2025년 12월 19일 통합공고를 내고 보도자료로 규모를 밝혔습니다. 아래는 그 보도자료에서 옮긴 숫자입니다.</p>
  <table>
    <thead>
      <tr>
        <th>구분</th>
        <th>2026년 통합공고</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>참여 기관</strong></td>
        <td>111개(중앙부처 15개, 지자체 96개)</td>
      </tr>
      <tr>
        <td><strong>사업 수</strong></td>
        <td>508개(중앙부처 88개, 지자체 420개)</td>
      </tr>
      <tr>
        <td><strong>전체 예산</strong></td>
        <td>3조 4,645억 원(전년 3조 2,940억 원)</td>
      </tr>
    </tbody>
  </table>
  <p>예산은 융자·보증이 1조 4,245억 원(41.1%)으로 가장 많았지만, 사업 수로 보면 이야기가 다릅니다.</p>
  <table>
    <thead>
      <tr>
        <th>사업 유형</th>
        <th>사업 수</th>
        <th>예산</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>사업화</td><td>181개</td><td>8,151억 원</td></tr>
      <tr><td>시설·공간·보육</td><td>158개</td><td>1,633억 원</td></tr>
      <tr><td>멘토링·컨설팅·교육</td><td>57개</td><td>362억 원</td></tr>
      <tr><td>행사·네트워크</td><td>49개</td><td>401억 원</td></tr>
      <tr><td>글로벌 진출</td><td>32개</td><td>1,195억 원</td></tr>
      <tr><td>융자·보증</td><td>17개</td><td>1조 4,245억 원</td></tr>
      <tr><td>기술개발(R&amp;D)</td><td>11개</td><td>8,648억 원</td></tr>
      <tr><td>인력</td><td>3개</td><td>10억 원</td></tr>
    </tbody>
  </table>
  <p>사업화 유형만 181개이고, 지자체가 추진하는 사업이 420개입니다. 예비창업패키지처럼 전국 단위로 이름이 알려진 사업 말고도 내 지역 지자체나 다른 부처의 사업화·보육 사업을 찾아볼 여지가 있습니다. 세부 공고는 각 부처와 지자체 누리집에서 따로 나오고, 통합공고 목록은 <a href="${K_STARTUP_URL}" target="_blank" rel="noopener noreferrer">K-Startup</a>에서 볼 수 있습니다.</p>

  <h2>여러 사업에 낼 때 먼저 확인할 제한</h2>
  <p>사업이 많다고 동시에 모두 수행할 수 있는 것은 아닙니다. <a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년 예비창업패키지 공고</a>에는 다음 조건이 있었습니다.</p>
  <ul>
    <li><strong>같은 해 사업화 지원사업 수행 중이면 신청 제외:</strong> 2026년 중앙정부·공공기관 창업사업화 지원사업을 수행 중인 사람은 신청할 수 없었습니다. 같은 연도 창업사업화 지원사업이 아니면 신청할 수 있다고 덧붙였습니다.</li>
    <li><strong>확약서를 내면 다른 사업 선정 절차에서 제외:</strong> 1단계 선정 뒤 협약체결확약서를 내면, 그 전에 신청한 창업진흥원의 다른 창업사업화 지원사업 선정 절차에서 제외된다고 적었습니다. 공고 기간이 겹쳐 두 사업에 모두 선정되면 처음 확약서를 낸 한 사업만 수행할 수 있었습니다.</li>
    <li><strong>이미 받은 사업 이력:</strong> 공고문 붙임에 적힌 사업에 선정돼 협약한 이력이 있으면 연도와 관계없이 신청할 수 없었습니다. 중도 포기도 포함됐습니다.</li>
  </ul>
  <p>그래서 "여러 곳에 내고 붙는 곳을 하자"보다 "어느 사업을 먼저 수행할지"를 미리 정해 두는 편이 안전합니다. 2026년 예비창업패키지는 확약서를 제출 요청일 다음 영업일부터 3일 안에 내야 했습니다. 고민할 시간이 짧으니 지원한 사업들의 결과 발표 일정을 미리 겹쳐 놓고 보세요.</p>

  <h2>떨어진 사업계획서에서 무엇을 가져갈까요</h2>
  <p>다음 사업에 낼 때 처음부터 다시 쓸 필요는 없지만, 그대로 내도 안 됩니다. 남길 것과 바꿀 것을 나눠 보세요.</p>
  <table>
    <thead>
      <tr>
        <th>그대로 가져갈 것</th>
        <th>공고마다 다시 맞출 것</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>고객 인터뷰 기록, 시제품 화면, 테스트 결과, 팀원 경력</td>
        <td>문항 순서와 이름, 분량, 사업비 사용 계획, 지원 기간에 맞춘 일정</td>
      </tr>
      <tr>
        <td>시장 숫자와 그 출처</td>
        <td>사업 목적(지역 정착, 글로벌 진출 등)에 맞춘 성과 목표</td>
      </tr>
    </tbody>
  </table>
  <p>떨어진 이유를 알 수 있다면 그 부분부터 고치세요. 사업마다 평가 기준이 달라서, 한 사업의 결과만으로 아이템 전체를 판단하기는 어렵습니다.</p>

  <h2>2027년에는 사업 이름이 바뀔 수 있습니다</h2>
  <p>중소벤처기업부는 <a href="${BUDGET_BRIEFING_URL}" target="_blank" rel="noopener noreferrer">2027년 정부 예산안 브리핑</a>에서 예비창업패키지, 도전! K-스타트업 등 예비창업 사업을 '모두의 창업'으로 일원화할 계획이라고 밝혔습니다. 국회 심의 전의 계획이라 확정은 아닙니다. 2027년 통합공고가 나오면 사업 이름과 중복 제한을 다시 확인하세요.</p>

  <div class="dh-cta">
    <p>독스헌트는 아이템·고객·핵심 근거를 사업 메모리에 모아 두고, K-Startup·기업마당 공고나 직접 올린 양식에 맞춰 새 초안을 만듭니다. 다음 공고를 고르면 거기서 시작해 보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=startup-support-integrated-notice&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트로 다음 공고 준비하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${INTEGRATED_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 정부·지자체 2026년 창업지원에 3조 4,645억원 투입(보도자료)</a></li>
      <li><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)</a></li>
      <li><a href="${BUDGET_BRIEFING_URL}" target="_blank" rel="noopener noreferrer">정책브리핑, 중소벤처기업부 재정운용전략 사전 브리핑</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

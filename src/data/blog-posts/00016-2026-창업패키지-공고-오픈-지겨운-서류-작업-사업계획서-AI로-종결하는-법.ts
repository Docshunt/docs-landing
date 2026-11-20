import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const EARLY_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1065015&cbIdx=310";
const LEAP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1065016&cbIdx=310&parentSeq=1065016";
const K_STARTUP_URL = "https://www.k-startup.go.kr/";

export const post16 = {
  page: 2,
  index: 6,
  slug: "2026ai",
  sourceUrl: "https://docshunt.ai/blog_detail/2026ai",
  title: "초기창업패키지 공고, 2026년 접수는 끝났는데 다음 공고 전에 무엇을 준비할까요?",
  description:
    "[지난 공고] 2026년 초기창업패키지·창업도약패키지(일반형) 접수는 2월 13일에 끝났습니다. 공고문에서 확인한 자격, 지원금, 평가항목을 정리하고 다음 공고 전에 미리 챙길 서류와 근거를 안내합니다.",
  seo: {
    mainKeyword: "초기창업패키지 공고",
    supportKeywords: ["창업도약패키지 공고", "초기창업패키지 지원금", "초기창업패키지 평가항목"],
    searchIntent: "초기창업패키지와 창업도약패키지의 지난 공고 조건을 확인하고 다음 모집을 미리 준비하고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.01.26",
  modifiedDate: "2026.11.20",
  verification: {
    date: "2026.11.20",
    note: "공고번호, 접수 기간, 지원 대상, 선정 규모, 사업화 자금, 평가항목은 중소벤처기업부의 2026년 초기창업패키지(일반형, 제2026-38호)와 창업도약패키지(일반형, 제2026-39호) 공고 첨부 공고문에서 확인했습니다. 두 공고의 접수는 2026년 2월 13일 16시에 끝난 지난 공고이며, 2027년 공고 일정과 조건은 아직 발표되지 않았습니다.",
    sources: [
      { label: "중소벤처기업부, 2026년 초기창업패키지(일반형) 창업기업 모집공고", url: EARLY_NOTICE_URL },
      { label: "중소벤처기업부, 2026년 창업도약패키지(일반형) 창업기업 모집공고", url: LEAP_NOTICE_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00016-early-leap-startup-package-past-notice-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00016-early-leap-startup-package-past-notice-hero.jpg",
  paragraphs: [
    "이 글은 지난 공고를 다룹니다. 2026년 초기창업패키지와 창업도약패키지(일반형)는 2026년 1월 23일부터 2월 13일 16시까지 접수했고 지금은 마감됐습니다.",
    "초기창업패키지 일반형은 창업 후 3년 이내 기업 400개사 내외를 뽑아 사업화 자금을 최대 1억 원, 평균 5천만 원 지원했습니다. 창업도약패키지 일반형은 창업 후 3년 초과 7년 이내 기업 300개사 내외에 최대 2억 원, 평균 1.2억 원 내외를 지원했습니다.",
    "두 사업 모두 문제인식, 실현가능성, 성장전략, 팀(기업) 구성으로 평가했고, 본점 소재지 권역의 주관기관 한 곳을 골라 신청해야 했습니다.",
    "다음 공고가 나오기 전에는 업력 기준일, 가점 증빙, 지난 1년의 매출·고객 기록을 미리 정리해 두면 접수 기간이 3주뿐이어도 사업계획서에 집중할 수 있습니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <div class="dh-note">
    <p><strong>지난 공고 안내</strong><br>이 글이 다루는 2026년 초기창업패키지·창업도약패키지(일반형) 접수는 2026년 2월 13일 16시에 끝났습니다. 2027년 공고 일정과 조건은 아직 발표되지 않았으니, 새 공고가 나오면 <a href="${K_STARTUP_URL}" target="_blank" rel="noopener noreferrer">K-Startup</a>에서 다시 확인하세요.</p>
  </div>

  <p><strong>초기창업패키지 공고는 1월 말에 올라와 3주 만에 접수가 끝났습니다.</strong> 공고를 보고 나서 사업계획서를 시작하면 업력 확인, 가점 증빙, 주관기관 선택까지 한꺼번에 처리해야 합니다. 지난 공고의 조건을 미리 알아두면 다음 모집에서 무엇을 먼저 챙길지 정할 수 있습니다.</p>

  <h2>2026년 초기·도약 창업패키지 공고 조건</h2>
  <p>아래 표는 중소벤처기업부가 2026년 1월 23일에 올린 <a href="${EARLY_NOTICE_URL}" target="_blank" rel="noopener noreferrer">초기창업패키지</a>와 <a href="${LEAP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">창업도약패키지</a> 일반형 공고문을 옮긴 것입니다.</p>
  <table>
    <thead>
      <tr>
        <th>구분</th>
        <th>초기창업패키지(일반형)</th>
        <th>창업도약패키지(일반형)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>공고번호</strong></td>
        <td>제2026-38호</td>
        <td>제2026-39호</td>
      </tr>
      <tr>
        <td><strong>접수 기간</strong></td>
        <td colspan="2">2026년 1월 23일 ~ 2월 13일 16시 (마감)</td>
      </tr>
      <tr>
        <td><strong>지원 대상</strong></td>
        <td>창업 후 3년 이내 기업</td>
        <td>창업 후 3년 초과 7년 이내 기업(신산업 분야는 10년 이내)</td>
      </tr>
      <tr>
        <td><strong>선정 규모</strong></td>
        <td>400개사 내외</td>
        <td>300개사 내외</td>
      </tr>
      <tr>
        <td><strong>사업화 자금</strong></td>
        <td>최대 1억 원, 평균 5천만 원</td>
        <td>최대 2억 원, 평균 1.2억 원 내외</td>
      </tr>
    </tbody>
  </table>
  <p>같은 해에 딥테크 특화형(초기 최대 1.5억 원, 도약 최대 3억 원)은 1월 6일에 따로 공고됐고, 투자연계형은 5월 별도 공고 예정이었습니다. 유형마다 대상과 금액이 다르니 내 회사가 어느 유형에 맞는지부터 확인해야 합니다.</p>

  <h2>평가항목은 네 가지로 같았습니다</h2>
  <p>두 공고 모두 서류와 발표를 <strong>문제인식, 실현가능성, 성장전략, 팀(기업) 구성</strong>으로 평가했습니다. 다만 세부 내용은 단계에 따라 다릅니다.</p>
  <ul>
    <li><strong>초기창업패키지:</strong> 아이템의 개발 배경과 필요성, 사업기간 내 개발·구체화 계획, 차별성·수익모델·자금조달 방안, 대표자와 인력의 역량</li>
    <li><strong>창업도약패키지:</strong> 아이템 개발 동기와 현황, 목표시장 분석과 시장진입 현황, 사업화 추진 전략과 자금 운용 계획, 기업 구성과 보유 인프라 활용 계획</li>
  </ul>
  <p>도약 단계는 이미 3년 넘게 사업을 해 온 기업이라 "현황"과 "시장진입 현황"을 묻습니다. 계획보다 지난 실적을 숫자로 보여줘야 한다는 뜻입니다.</p>

  <h2>다음 공고 전에 미리 정리할 네 가지</h2>
  <ol>
    <li><strong>업력 기준일:</strong> 2026년 초기창업패키지 공고는 모집공고일을 기준으로 개인사업자는 사업자등록증의 개업연월일, 법인은 법인등기부등본의 법인설립등기일로 업력을 셌습니다. 3년·7년 경계에 걸리면 초기와 도약 중 어느 쪽에 맞는지가 달라지니 미리 계산해 두세요.</li>
    <li><strong>주관기관 권역:</strong> 2026년 공고는 본점 소재지 권역의 주관기관 한 곳을 골라 신청해야 했고, 다른 권역에 내면 평가에서 빠질 수 있다고 적었습니다. 주관기관별 창업프로그램도 미리 비교해 두세요.</li>
    <li><strong>가점 증빙:</strong> 창업도약패키지 공고는 가점을 서류평가에만 반영하고, 신청할 때 낸 증빙만 인정한다고 밝혔습니다. 접수 기간에 발급이 늦어지는 서류는 미리 받아두는 편이 안전합니다.</li>
    <li><strong>지난 1년의 기록:</strong> 매출, 고객 수, 계약서, 사용자 반응을 월별로 모아두면 실현가능성과 성장전략 문항을 쓸 때 근거를 찾느라 시간을 쓰지 않습니다.</li>
  </ol>

  <h2>작년 사업계획서를 그대로 다시 내면 안 되는 이유</h2>
  <p>지난번에 쓴 사업계획서는 좋은 출발점이지만, 공고마다 문항 이름과 분량이 바뀌고 회사 상황도 1년 사이에 달라집니다. 숫자는 최신으로 바꾸고, 지난번 심사 의견이 있었다면 그 부분을 먼저 고친 뒤 새 양식의 문항 순서에 맞춰 다시 배치하세요.</p>

  <div class="dh-cta">
    <p>새 공고가 나오면 독스헌트에 공고문을 올려 문항과 평가항목을 정리하고, 미리 모아둔 기록으로 초안을 만들어 보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=early-startup-package-notice&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트로 다음 공고 준비하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${EARLY_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 초기창업패키지(일반형) 창업기업 모집공고</a></li>
      <li><a href="${LEAP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 창업도약패키지(일반형) 창업기업 모집공고</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

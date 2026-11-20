import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const PRE_STARTUP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";
const BUDGET_BRIEFING_URL = "https://www.korea.kr/briefing/policyBriefingView.do?newsId=156775671";
const K_STARTUP_URL = "https://www.k-startup.go.kr/";
const EVIDENCE_GUIDE_PATH = "/blog_detail/200-1";

export const post19 = {
  page: 2,
  index: 9,
  slug: "2026d6023",
  sourceUrl: "https://docshunt.ai/blog_detail/2026d6023",
  title: "예비창업패키지 준비, 공고가 나온 뒤 시작하면 마감까지 4주뿐입니다",
  description:
    "[지난 공고] 2026년 예비창업패키지는 2월 27일 공고, 3월 26일 접수 마감이었습니다. 시제품 화면, 고객 기록, 검증 계획처럼 4주 안에 만들기 어려운 것부터 챙기는 예비창업패키지 준비 순서를 공고문 기준으로 정리했습니다.",
  seo: {
    mainKeyword: "예비창업패키지 준비",
    supportKeywords: ["예비창업패키지 일정", "예비창업패키지 MVP", "예비창업패키지 공고"],
    searchIntent: "예비창업패키지 공고가 나오기 전에 무엇을 먼저 준비해야 접수 기간 안에 사업계획서를 낼 수 있는지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2025.12.18",
  modifiedDate: "2026.11.20",
  verification: {
    date: "2026.11.20",
    note: "공고일, 접수 기간, 평가 일정(안), 단계별 사업화 자금, 평가항목은 2026년 예비창업패키지 수정 공고(2차, 제2026-207호) 첨부 공고문에서 확인했습니다. 2026년 접수는 3월 26일에 끝난 지난 공고입니다. 2027년 예비창업 사업 일원화는 정부 예산안 단계의 계획이라 확정이 아닙니다. 본문의 준비 일정표는 가상 예시이며, 이전 글의 작성자 개인 합격 경험담과 근거 없는 평가 기준 설명은 확인할 수 없어 삭제했습니다.",
    sources: [
      { label: "중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)", url: PRE_STARTUP_NOTICE_URL },
      { label: "정책브리핑, 중소벤처기업부 재정운용전략 사전 브리핑", url: BUDGET_BRIEFING_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00019-pre-startup-package-preparation-timeline-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00019-pre-startup-package-preparation-timeline-hero.jpg",
  paragraphs: [
    "이 글은 지난 공고를 다룹니다. 2026년 예비창업패키지는 2월 27일에 공고됐고, 접수는 3월 6일부터 3월 26일 18시까지였습니다. 공고를 보고 시작했다면 마감까지 4주 남짓이었습니다.",
    "4주 안에 사업계획서는 쓸 수 있어도, 시제품 화면이나 고객 인터뷰 기록을 새로 만들기는 빠듯합니다. 공고문은 실현가능성 항목에서 개발(개선) 방법과 경쟁력 확보 방안을 봤습니다.",
    "2026년 예비창업패키지는 1단계에 시장조사와 MVP 제작 등 사업화 준비 자금 2천만 원을 지원하고, 협약 중간에 진척도를 평가해 50% 내외를 골라 추가로 지원했습니다. 사업계획서에 1단계에 무엇을 만들지 구체적으로 적어야 하는 이유입니다.",
    "2027년에는 예비창업 사업을 모두의 창업으로 일원화하는 계획이 정부 예산안에 담겼습니다. 사업 이름은 바뀔 수 있지만 고객 기록과 시제품 같은 근거는 그대로 쓸 수 있습니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <div class="dh-note">
    <p><strong>지난 공고 안내</strong><br>이 글이 다루는 2026년 예비창업패키지 접수는 2026년 3월 26일 18시에 끝났습니다. 2027년 공고 일정과 조건은 아직 발표되지 않았으니, 새 공고가 나오면 <a href="${K_STARTUP_URL}" target="_blank" rel="noopener noreferrer">K-Startup</a>에서 다시 확인하세요.</p>
  </div>

  <p><strong>2026년 예비창업패키지는 2월 27일에 공고됐고, 3월 26일 18시에 접수가 끝났습니다.</strong> 공고를 보고 준비를 시작했다면 사업계획서를 쓰고 낼 시간이 4주 남짓이었다는 뜻입니다. 글은 4주 안에 쓸 수 있습니다. 하지만 시제품 화면, 고객 인터뷰 기록, 테스트 결과처럼 사업계획서 옆에 붙일 근거는 4주 안에 새로 만들기 어렵습니다.</p>

  <h2>2026년 예비창업패키지 일정</h2>
  <p>아래는 <a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년 예비창업패키지 수정 공고</a>에 적힌 일정입니다. 평가 일정은 공고문에 "(안)"으로 표시됐고, 신청자 수 등에 따라 바뀔 수 있다고 적혀 있었습니다.</p>
  <table>
    <thead>
      <tr>
        <th>단계</th>
        <th>2026년 일정</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>공고</strong></td><td>2026년 2월 27일</td></tr>
      <tr><td><strong>접수</strong></td><td>3월 6일 ~ 3월 26일 18시(K-Startup 온라인)</td></tr>
      <tr><td><strong>요건검토</strong></td><td>3월 중</td></tr>
      <tr><td><strong>서류평가</strong></td><td>3월 말(최종 선정규모의 2배수 내외)</td></tr>
      <tr><td><strong>사전 인큐베이팅</strong></td><td>4월 중(서류평가 통과자 대상 BM 구체화·멘토링)</td></tr>
      <tr><td><strong>발표평가</strong></td><td>5월 중</td></tr>
      <tr><td><strong>1단계 선정</strong></td><td>5월 말</td></tr>
    </tbody>
  </table>
  <p>선정 규모는 300명 내외, 사업화 자금은 평균 4천만 원이었고, 서류평가와 발표평가 각 단계에서 70점 미만이면 선정 대상에서 제외됐습니다.</p>

  <h2>공고문은 왜 시제품 계획을 자세히 묻게 만들었을까요</h2>
  <p>2026년 공고는 사업화 자금을 두 단계로 나눠 지원했습니다. 1단계에서는 사업모델(BM) 구체화를 위한 시장조사와 최소기능제품(MVP) 제작 등 사업화 준비 자금 2천만 원을 지원했고, 협약 중간에 1단계 사업계획의 진척도와 향후 계획을 평가해 50% 내외를 골라 추가 지원했습니다.</p>
  <p>평가항목 가운데 실현가능성은 "문제점을 해결하기 위한 개발(개선) 방법, 경쟁력 확보 방안"을 봤습니다. 1단계에 무엇을 만들고 어떻게 확인할지가 구체적이어야, 선정 뒤 중간 평가에서도 진척도를 보여줄 수 있습니다. 평가항목별로 근거 문장을 쓰는 방법은 <a href="${EVIDENCE_GUIDE_PATH}">예비창업패키지 사업계획서 근거 문장 글</a>에서 따로 다뤘습니다.</p>

  <h2>공고 전에 만들어 둘 세 가지</h2>
  <ol>
    <li><strong>보여줄 수 있는 화면 하나:</strong> 완성된 제품이 아니어도 됩니다. 노코드 도구로 만든 신청 화면, 클릭되는 시안, 작동 영상처럼 "무엇을 만들려는지"를 캡처로 보여줄 수 있으면 실현가능성 문항이 계획만 적은 문장에서 벗어납니다.</li>
    <li><strong>날짜가 적힌 고객 기록:</strong> 누구를, 언제, 몇 명 만났고 무엇을 확인했는지 적은 인터뷰 메모나 설문 결과입니다. 숫자가 작아도 날짜와 대상이 분명하면 문제인식 문항의 근거가 됩니다.</li>
    <li><strong>1단계 검증 계획:</strong> 선정되면 1단계 자금으로 무엇을 만들고, 어떤 숫자로 진척을 확인할지 적은 표입니다. 아직 화면을 만들지 못했다면 이 계획이라도 구체적으로 써 두세요.</li>
  </ol>

  <h2>공고 8주 전부터 거꾸로 세운 준비표 (가상 예시)</h2>
  <p>아래 표는 공고가 전년과 비슷한 시기에 나온다고 가정한 가상 예시입니다. 실제 공고일은 해마다 다를 수 있습니다.</p>
  <table>
    <thead>
      <tr>
        <th>시점</th>
        <th>할 일</th>
        <th>남길 기록</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>공고 8~6주 전</td><td>고객 후보 10명 인터뷰</td><td>날짜·대상·질문·답을 적은 메모</td></tr>
      <tr><td>공고 6~3주 전</td><td>핵심 기능 하나만 담은 화면 제작, 3~5명에게 써보게 하기</td><td>화면 캡처, 사용 중 막힌 지점 메모</td></tr>
      <tr><td>공고 3주 전~공고</td><td>평가항목 네 개에 맞춰 내용 초안 작성, 자격 요건 확인</td><td>항목별 초안, 사업자등록 여부 확인</td></tr>
      <tr><td>공고 뒤 접수 기간</td><td>공고 양식에 옮기고 분량 조정, 가점 증빙 발급</td><td>제출 파일, 증빙 서류</td></tr>
    </tbody>
  </table>
  <p>2026년 공고는 사업자등록증이 없는 사람을 대상으로 했고, 자격 기준일은 2026년 1월 22일이었습니다. 화면을 만들며 사업자등록을 서두르기 전에 기준일을 먼저 확인하세요.</p>

  <h2>시제품을 미리 만들기 어려운 분야라면</h2>
  <p>바이오·의료, 소재, 하드웨어처럼 공고 전에 시제품을 만들기 어려운 분야도 있습니다. 이때 화면 하나를 억지로 만들 필요는 없습니다. 대신 실험 설계, 협력할 연구실이나 제조사와 나눈 대화 기록, 1단계 자금으로 확인할 항목과 기준을 표로 적어 두세요. 무엇을 아직 모르는지 솔직하게 적는 편이 막연한 출시 약속보다 설명하기 쉽습니다.</p>

  <h2>2027년 공고는 아직 확정이 아닙니다</h2>
  <p>중소벤처기업부는 <a href="${BUDGET_BRIEFING_URL}" target="_blank" rel="noopener noreferrer">2027년 정부 예산안 브리핑</a>에서 예비창업패키지, 도전! K-스타트업 등을 '모두의 창업'으로 일원화할 계획이라고 밝혔습니다. 국회 심의 전 계획이라 사업 이름, 일정, 지원 금액은 새 공고를 봐야 알 수 있습니다. 위의 세 가지 준비물은 어떤 공고에도 그대로 쓸 수 있습니다.</p>

  <div class="dh-cta">
    <p>고객 기록과 화면 캡처를 모았다면 독스헌트에서 평가항목에 맞춘 초안을 미리 만들어 두고, 공고가 나오면 그 양식에 맞춰 옮겨 보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=pre-startup-package-preparation&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트로 미리 초안 만들기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)</a></li>
      <li><a href="${BUDGET_BRIEFING_URL}" target="_blank" rel="noopener noreferrer">정책브리핑, 중소벤처기업부 재정운용전략 사전 브리핑</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

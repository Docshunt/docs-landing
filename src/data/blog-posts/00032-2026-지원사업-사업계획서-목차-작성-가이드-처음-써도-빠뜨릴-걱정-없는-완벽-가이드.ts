import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const PRE_STARTUP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";
const EARLY_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1065015&cbIdx=310";
const K_STARTUP_NOTICE_LIST_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do";

export const post32 = {
  page: 4,
  index: 2,
  slug: "1755658221110x981594766116126700",
  sourceUrl: "https://docshunt.ai/blog_detail/1755658221110x981594766116126700",
  title: "사업계획서 목차, 일반 템플릿 순서대로 쓰면 지원사업 양식과 왜 어긋날까요?",
  description:
    "정부지원사업 사업계획서 목차는 회사소개·시장·제품·마케팅·재무 순서의 일반 템플릿과 다릅니다. 2026년 창업패키지 공고의 문제인식·실현가능성·성장전략·팀 구성 순서에 맞춰 내용을 옮기는 방법을 정리했습니다.",
  seo: {
    mainKeyword: "사업계획서 목차",
    supportKeywords: ["정부지원사업 사업계획서 목차", "PSST 사업계획서", "사업계획서 양식"],
    searchIntent: "정부지원사업에 낼 사업계획서 목차를 어떻게 잡고 각 항목에 무엇을 써야 하는지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2025.08.20",
  modifiedDate: "2026.11.20",
  verification: {
    date: "2026.11.20",
    note: "평가항목과 세부 내용은 2026년 예비창업패키지 수정 공고(2차)와 2026년 초기창업패키지(일반형) 공고 첨부 공고문에서 확인했습니다. 두 공고의 접수는 모두 끝났습니다. 지원사업마다 양식과 목차가 다르므로 제출 전에는 해당 공고의 첨부 양식을 우선 적용해야 합니다. 본문의 문장 예시는 설명을 위한 가상 예시입니다.",
    sources: [
      { label: "중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)", url: PRE_STARTUP_NOTICE_URL },
      { label: "중소벤처기업부, 2026년 초기창업패키지(일반형) 창업기업 모집공고", url: EARLY_NOTICE_URL },
      { label: "K-Startup, 모집 중인 사업공고", url: K_STARTUP_NOTICE_LIST_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00032-2026-지원사업-사업계획서-목차-작성-가이드-처음-써도-빠뜨릴-걱정-없는-완벽-가이드-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00032-2026-지원사업-사업계획서-목차-작성-가이드-처음-써도-빠뜨릴-걱정-없는-완벽-가이드-hero.jpg",
  paragraphs: [
    "인터넷에서 받은 사업계획서 목차는 보통 회사 소개, 시장 분석, 제품, 마케팅, 재무 순서입니다. 투자 유치용 문서에는 맞지만 정부지원사업 양식과는 순서가 다릅니다.",
    "2026년 예비창업패키지와 초기창업패키지 공고는 문제인식, 실현가능성, 성장전략, 팀(기업) 구성 네 항목으로 평가했고, 사업계획서 양식도 이 순서를 따릅니다.",
    "이미 써둔 내용이 있다면 버리지 말고 네 항목에 옮겨 담으면 됩니다. 시장 분석은 문제인식과 성장전략으로, 제품 설명은 실현가능성으로, 재무 계획은 성장전략의 자금조달로 나뉩니다.",
    "옮긴 뒤에는 항목마다 공고문이 묻는 질문에 답했는지, 같은 고객과 숫자를 말하는지 확인하세요.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>인터넷에서 받은 사업계획서 목차는 대부분 회사 소개 → 시장 분석 → 제품 → 마케팅 → 재무 순서입니다.</strong> 투자자에게 보내는 문서라면 무리가 없지만, 정부지원사업에 낼 때는 공고가 정한 양식의 순서와 맞지 않습니다. 같은 내용을 써도 심사위원이 평가항목별로 찾아 읽기 어려워집니다.</p>

  <h2>창업패키지 사업계획서는 평가항목 순서로 목차를 잡습니다</h2>
  <p><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년 예비창업패키지 공고</a>와 <a href="${EARLY_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년 초기창업패키지 공고</a>는 모두 서류와 발표를 네 항목으로 평가했습니다. 흔히 영어 머리글자를 따서 PSST라고 부르는 구조입니다.</p>
  <table>
    <thead>
      <tr>
        <th>목차</th>
        <th>예비창업패키지 공고의 세부 내용</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>1. 문제인식</strong></td>
        <td>창업아이템을 개발하게 된 동기, 해결방안(필요성)</td>
      </tr>
      <tr>
        <td><strong>2. 실현가능성</strong></td>
        <td>문제를 해결하기 위한 개발(개선) 방법, 경쟁력 확보 방안</td>
      </tr>
      <tr>
        <td><strong>3. 성장전략</strong></td>
        <td>사업화를 위한 시장진입 전략, 자금조달 방안</td>
      </tr>
      <tr>
        <td><strong>4. 팀(기업) 구성</strong></td>
        <td>대표자와 고용(예정) 인력이 보유한 기술역량과 노하우</td>
      </tr>
    </tbody>
  </table>
  <p>모든 지원사업이 이 구조를 쓰지는 않습니다. 기관 공모, 지역 지원사업, R&amp;D 과제는 양식이 따로 있는 경우가 많으니 공고문 첨부파일의 양식을 먼저 열어보세요.</p>

  <h2>일반 템플릿에 써둔 내용은 이렇게 옮기세요</h2>
  <p>이미 일반 템플릿으로 써둔 내용이 있다면 처음부터 다시 쓸 필요는 없습니다. 각 덩어리를 평가항목에 나눠 담으면 됩니다.</p>
  <table>
    <thead>
      <tr>
        <th>일반 템플릿</th>
        <th>옮길 곳</th>
        <th>옮길 때 바꿀 점</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>회사 소개·비전</td>
        <td>팀(기업) 구성</td>
        <td>비전 문장보다 누가 어떤 일을 맡는지를 적습니다</td>
      </tr>
      <tr>
        <td>시장 분석</td>
        <td>문제인식, 성장전략</td>
        <td>고객의 불편은 문제인식으로, 시장 규모와 진입 순서는 성장전략으로 나눕니다</td>
      </tr>
      <tr>
        <td>제품·서비스 소개</td>
        <td>실현가능성</td>
        <td>기능 나열 대신 지금 어디까지 만들었고 협약 기간에 무엇을 만들지 적습니다</td>
      </tr>
      <tr>
        <td>마케팅·영업 전략</td>
        <td>성장전략</td>
        <td>첫 고객을 만날 경로와 가격을 구체적으로 씁니다</td>
      </tr>
      <tr>
        <td>재무 계획</td>
        <td>성장전략(자금조달·사업비)</td>
        <td>5년 손익표보다 지원금과 자부담을 어디에 쓸지가 먼저입니다</td>
      </tr>
    </tbody>
  </table>

  <h2>목차 제목만 맞추고 내용이 안 맞는 경우</h2>
  <p>양식의 제목은 그대로 두고 그 아래에 회사 소개를 길게 쓰는 경우가 많습니다. 아래는 설명을 위해 만든 가상 예시입니다.</p>
  <div class="dh-note">
    <p><strong>문제인식 항목에 쓴 문장 (고치기 전)</strong><br>저희 회사는 2025년에 설립되어 혁신적인 AI 기술로 교육 시장의 변화를 이끌고 있습니다.</p>
    <p><strong>고친 뒤 (가상 예시)</strong><br>중학생 학부모 20명을 인터뷰한 결과, 14명이 학원 숙제 진도를 아이에게 직접 물어봐야만 알 수 있다고 답했습니다. 이 확인 과정을 줄이는 것이 이 아이템의 출발점입니다.</p>
  </div>
  <p>앞 문장은 회사 소개라서 문제인식 항목이 묻는 "왜 이 아이템이 필요한가"에 답하지 않습니다. 뒤 문장은 누가 무엇 때문에 불편한지를 보여줍니다.</p>

  <h2>제출 전에 목차를 점검하는 세 가지 질문</h2>
  <ol>
    <li>각 항목의 첫 문단이 공고문 평가표의 세부 내용에 바로 답하나요?</li>
    <li>문제인식의 고객과 성장전략의 첫 고객이 같은 사람인가요?</li>
    <li>양식에 남아 있는 작성 안내 문구와 예시를 지웠나요? 지워야 하는지는 공고의 작성 유의사항을 따르세요.</li>
  </ol>

  <div class="dh-cta">
    <p>공고문과 양식을 올리면 독스헌트가 평가항목 순서로 목차를 잡고, 이미 써둔 내용을 항목별로 나눠 초안을 만듭니다.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=business-plan-table-of-contents&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트로 목차 정리하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)</a></li>
      <li><a href="${EARLY_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 초기창업패키지(일반형) 창업기업 모집공고</a></li>
      <li><a href="${K_STARTUP_NOTICE_LIST_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 모집 중인 사업공고</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

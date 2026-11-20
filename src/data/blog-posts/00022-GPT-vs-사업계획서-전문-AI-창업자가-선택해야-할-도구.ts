import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const PRE_STARTUP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";
const DOCSHUNT_URL = "https://docshunt.ai/";
const PRICING_URL = "https://docshunt.ai/pricing";

export const post22 = {
  page: 3,
  index: 2,
  slug: "gptvsai-2",
  sourceUrl: "https://docshunt.ai/blog_detail/gptvsai-2",
  title: "GPT 사업계획서, 공고문 없이 '써줘'만 입력하면 어디서 어긋날까요?",
  description:
    "GPT 사업계획서는 문장이 빨리 나오지만 공고 평가항목, 양식 문항, 숫자 출처는 직접 챙겨야 합니다. 범용 AI에 넣어야 할 자료와 지원사업 사업계획서 도구가 대신하는 부분을 나눠 비교했습니다.",
  seo: {
    mainKeyword: "GPT 사업계획서",
    supportKeywords: ["사업계획서 AI", "챗GPT 사업계획서 작성", "사업계획서 AI 비교"],
    searchIntent: "GPT로 지원사업 사업계획서를 쓸 때 무엇을 직접 넣어야 하고 전문 도구와 무엇이 다른지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2025.12.01",
  modifiedDate: "2026.11.20",
  verification: {
    date: "2026.11.20",
    note: "예비창업패키지 평가항목과 70점 기준은 2026년 예비창업패키지 수정 공고(제2026-207호) 첨부 공고문에서 확인했고, 2026년 접수는 3월 26일에 끝났습니다. 독스헌트 기능과 플랜별 제공 범위는 2026년 11월 20일 기준 독스헌트 홈페이지와 요금제 페이지에 적힌 내용입니다. 프롬프트와 문장 예시는 설명을 위한 가상 예시입니다.",
    sources: [
      { label: "중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)", url: PRE_STARTUP_NOTICE_URL },
      { label: "독스헌트 홈페이지", url: DOCSHUNT_URL },
      { label: "독스헌트 요금제", url: PRICING_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00022-GPT-vs-사업계획서-전문-AI-창업자가-선택해야-할-도구-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00022-GPT-vs-사업계획서-전문-AI-창업자가-선택해야-할-도구-hero.jpg",
  paragraphs: [
    "GPT에 '예비창업패키지 사업계획서 써줘'라고만 입력하면 그럴듯한 목차와 문장이 나옵니다. 하지만 올해 공고의 평가항목과 양식 문항을 대화에 넣지 않았다면, 그 답이 무엇을 기준으로 쓰였는지 확인하기 어렵습니다.",
    "2026년 예비창업패키지는 문제인식, 실현가능성, 성장전략, 팀(기업) 구성 네 항목으로 평가했고 단계마다 70점 미만이면 제외했습니다. GPT를 쓸 때는 이 평가표, 양식 문항, 고객 근거, 숫자 출처를 직접 넣어야 합니다.",
    "지원사업 사업계획서 도구는 공고와 양식을 먼저 읽고 필요한 질문을 하는 쪽에 초점을 둡니다. 독스헌트는 공고 선택이나 양식 업로드, AI 질문, 근거자료 찾기, 한글(HWPX) 내보내기를 제공합니다.",
    "어느 도구를 쓰든 숫자와 사실 확인은 작성자 몫입니다. 아이디어 정리나 문장 다듬기만 필요하다면 GPT로도 충분합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>GPT에 "예비창업패키지 사업계획서 써줘"라고만 입력하면, 그럴듯한 목차와 문장이 몇 초 만에 나옵니다.</strong> 문제는 그 답이 어느 해 공고의 어떤 양식을 기준으로 쓰였는지 확인하기 어렵다는 점입니다. 공고문과 양식을 대화에 넣지 않았다면, 모델은 내가 낼 서류의 문항 순서와 분량을 알 수 없습니다.</p>
  <p>GPT가 나쁜 도구라는 이야기가 아닙니다. GPT 같은 범용 AI는 내가 넣어 준 자료만큼 정확해지고, 지원사업 사업계획서 도구는 그 자료를 모으는 과정을 대신 묻는 쪽에 초점을 둡니다. 차이는 누가 공고를 읽고 무엇을 물어보느냐에 있습니다.</p>

  <h2>공고 평가표부터 대화에 넣어야 합니다</h2>
  <p><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년 예비창업패키지 수정 공고</a>는 서류와 발표를 문제인식, 실현가능성, 성장전략, 팀(기업) 구성 네 항목으로 평가했고, 단계마다 70점 미만이면 선정 대상에서 제외했습니다. GPT에 이 평가표를 주지 않으면, 답이 평가항목과 다른 순서로 나오거나 한 항목이 통째로 빠져도 알아차리기 어렵습니다.</p>
  <p>GPT로 지원사업 사업계획서를 쓸 때 직접 넣어야 하는 자료는 아래 다섯 가지입니다.</p>
  <table>
    <thead>
      <tr>
        <th>넣을 자료</th>
        <th>왜 필요한가</th>
        <th>빠지면 생기는 일</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>공고문과 평가항목</strong></td>
        <td>무엇을 기준으로 점수를 주는지 알려줍니다</td>
        <td>일반적인 사업계획서 목차로 답합니다</td>
      </tr>
      <tr>
        <td><strong>양식 문항과 분량</strong></td>
        <td>문항 이름, 순서, 쪽수 제한을 맞춥니다</td>
        <td>양식에 옮길 때 문단을 다시 나눠야 합니다</td>
      </tr>
      <tr>
        <td><strong>고객 근거</strong></td>
        <td>인터뷰, 관찰, 테스트 결과가 문제인식을 받칩니다</td>
        <td>"많은 사람이 불편을 겪고 있다" 같은 문장만 남습니다</td>
      </tr>
      <tr>
        <td><strong>숫자와 출처</strong></td>
        <td>시장규모, 가격, 목표 고객 수의 기준을 밝힙니다</td>
        <td>출처를 확인할 수 없는 숫자가 들어갈 수 있습니다</td>
      </tr>
      <tr>
        <td><strong>팀과 일정</strong></td>
        <td>누가 무엇을 언제 하는지 실현가능성을 보여줍니다</td>
        <td>담당자 없는 계획표가 나옵니다</td>
      </tr>
    </tbody>
  </table>

  <h2>같은 GPT라도 묻는 방식에 따라 결과가 달라집니다</h2>
  <p>아래는 설명을 위해 만든 <strong>가상 예시</strong>입니다.</p>
  <div class="dh-note">
    <p><strong>짧은 요청</strong><br>반려동물 산책 대행 앱으로 예비창업패키지 사업계획서 써줘.</p>
    <p><strong>자료를 붙인 요청 (가상 예시)</strong><br>첨부한 2026년 예비창업패키지 공고의 평가항목 네 가지 순서대로, 양식의 '문제인식' 문항만 1쪽 분량으로 써줘. 고객 근거는 내가 인터뷰한 1인 가구 보호자 10명의 답변(첨부)만 쓰고, 출처가 없는 숫자는 넣지 말고 [확인 필요]로 표시해줘.</p>
  </div>
  <p>두 번째 요청은 기준(공고), 범위(한 문항), 근거(인터뷰), 금지 사항(출처 없는 숫자)을 모두 정했습니다. 이렇게 쓰면 GPT로도 쓸 만한 초안이 나옵니다. 다만 문항이 열 개라면 이 작업을 문항마다 반복하고, 결과를 한글 양식에 직접 옮겨 붙여야 하는 경우가 많습니다.</p>

  <h2>GPT와 지원사업 사업계획서 도구 비교</h2>
  <p>오른쪽 열은 2026년 11월 기준 <a href="${DOCSHUNT_URL}" target="_blank" rel="noopener noreferrer">독스헌트 홈페이지</a>와 <a href="${PRICING_URL}" target="_blank" rel="noopener noreferrer">요금제 페이지</a>에 적힌 기능입니다.</p>
  <table>
    <thead>
      <tr>
        <th>작업</th>
        <th>GPT 같은 범용 AI</th>
        <th>독스헌트</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>공고 정보</strong></td>
        <td>공고문과 평가표를 직접 붙여 넣습니다</td>
        <td>K-Startup·기업마당 공고를 고르거나 공고문과 양식을 올립니다</td>
      </tr>
      <tr>
        <td><strong>부족한 정보 찾기</strong></td>
        <td>무엇이 빠졌는지 작성자가 판단합니다</td>
        <td>AI가 공고와 양식을 기준으로 필요한 질문을 합니다</td>
      </tr>
      <tr>
        <td><strong>양식 맞추기</strong></td>
        <td>결과를 양식에 옮기는 작업을 직접 합니다</td>
        <td>HWPX·HWP 양식에 맞춰 작성하고 한글(HWPX)로 내보냅니다(Pro 이상)</td>
      </tr>
      <tr>
        <td><strong>근거 자료</strong></td>
        <td>검색 기능으로 자료를 찾을 수 있지만, 수치와 출처는 직접 확인해 넣습니다</td>
        <td>시장·경쟁사 자료를 찾아 수치와 출처를 정리합니다(Pro 이상)</td>
      </tr>
      <tr>
        <td><strong>다음 지원사업</strong></td>
        <td>메모리를 켜지 않았다면 새 대화에서 사업 정보를 다시 설명합니다. 켰더라도 불러온 정보는 다시 확인합니다</td>
        <td>아이템과 사업 정보가 사업 메모리에 쌓여 다시 쓰입니다</td>
      </tr>
      <tr>
        <td><strong>사실 확인</strong></td>
        <td colspan="2">어느 쪽이든 숫자, 출처, 회사 정보는 작성자가 최종 확인해야 합니다</td>
      </tr>
    </tbody>
  </table>

  <h2>GPT만으로 충분한 경우</h2>
  <p>아래 상황이라면 전용 도구 없이 GPT로도 충분합니다.</p>
  <ul>
    <li>아이디어를 말로 풀어 보며 고객과 문제를 정리하는 단계</li>
    <li>이미 쓴 문장을 짧게 다듬거나 어색한 표현만 고치는 작업</li>
    <li>정해진 양식이 없는 내부 보고용 사업 소개서</li>
    <li>평가표와 양식을 직접 읽고 문항별로 요청을 나눌 시간이 있는 경우</li>
  </ul>
  <p>반대로 마감이 가깝고, 공고 양식이 정해져 있고, 여러 지원사업에 같은 사업 정보를 반복해서 써야 한다면 공고를 먼저 읽고 질문하는 도구를 써볼 만합니다. 문항마다 요청을 나누고 양식에 옮기는 일을 줄일 수 있기 때문입니다.</p>

  <div class="dh-cta">
    <p>준비 중인 공고가 있다면 독스헌트에서 공고를 고르고, AI 질문에 답하며 양식에 맞춘 초안을 만들어 보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=gpt-business-plan-comparison&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트로 공고 맞춤 초안 만들기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)</a></li>
      <li><a href="${DOCSHUNT_URL}" target="_blank" rel="noopener noreferrer">독스헌트 홈페이지</a></li>
      <li><a href="${PRICING_URL}" target="_blank" rel="noopener noreferrer">독스헌트 요금제</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

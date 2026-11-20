import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const EARLY_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1065015&cbIdx=310";
const PRE_STARTUP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";
const K_STARTUP_URL = "https://www.k-startup.go.kr/";

export const post15 = {
  page: 2,
  index: 5,
  slug: "1769491692159x279117165603586050",
  sourceUrl: "https://docshunt.ai/blog_detail/1769491692159x279117165603586050",
  title: "창업 사업계획서 양식, 검색해서 받은 파일로 쓰면 왜 다시 쓰게 될까요?",
  description:
    "창업 사업계획서 양식은 공고마다 첨부본이 따로 있고, 2026년 초기창업패키지는 다른 양식으로 내면 평가에서 제외했습니다. 예비·초기 창업자가 빈 양식을 채우기 전에 평가표와 근거를 맞춰두는 준비 순서를 정리했습니다.",
  seo: {
    mainKeyword: "창업 사업계획서 양식",
    supportKeywords: ["사업계획서 작성 전 준비", "초기창업패키지 평가항목", "예비창업패키지 사업계획서"],
    searchIntent: "창업 사업계획서 양식을 받기 전후로 무엇을 먼저 준비해야 하는지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.01.27",
  modifiedDate: "2026.11.20",
  verification: {
    date: "2026.11.20",
    note: "양식 규정(모집공고에 첨부된 양식 활용, 그 외 양식 제출 시 평가 제외)과 평가항목은 2026년 초기창업패키지(일반형) 공고(제2026-38호) 첨부 공고문에서, 예비창업패키지 평가항목은 2026년 수정 공고(제2026-207호) 첨부 공고문에서 확인했습니다. 두 공고 모두 2026년 접수가 끝난 지난 공고입니다. 본문의 준비표 예시는 설명을 위한 가상 예시입니다.",
    sources: [
      { label: "중소벤처기업부, 2026년 초기창업패키지(일반형) 창업기업 모집공고", url: EARLY_NOTICE_URL },
      { label: "중소벤처기업부, 2026년 예비창업패키지 예비창업자 수정 모집공고(2차)", url: PRE_STARTUP_NOTICE_URL },
      { label: "K-Startup 창업지원포털", url: K_STARTUP_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00015-startup-business-plan-form-prep-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00015-startup-business-plan-form-prep-hero.jpg",
  paragraphs: [
    "창업 사업계획서 양식을 검색해서 받은 파일로 먼저 쓰기 시작하면, 공고가 나온 뒤 목차와 문항을 다시 맞추느라 같은 내용을 두 번 쓰게 됩니다. 정부지원사업은 공고마다 첨부된 양식이 따로 있습니다.",
    "2026년 초기창업패키지 공고는 모집공고에 첨부된 사업계획서 양식을 쓰도록 했고, 그 외 양식으로 내면 평가대상에서 제외한다고 적었습니다. 예비창업패키지도 공고 첨부 양식으로 사업계획서를 받았습니다.",
    "양식보다 먼저 준비할 것은 평가표입니다. 2026년 예비·초기창업패키지는 모두 문제인식, 실현가능성, 성장전략, 팀(기업) 구성으로 평가했습니다. 항목마다 지금 가진 근거를 한 줄씩 적어보면 빈칸이 어디인지 보입니다.",
    "고객 한 명의 정의, 숫자의 출처, 지원금으로 할 일을 미리 정해두면 어떤 양식이 와도 옮겨 담기만 하면 됩니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>창업 사업계획서 양식을 검색해서 받은 파일로 먼저 쓰기 시작하면, 공고가 나온 뒤 같은 내용을 다시 쓰게 되기 쉽습니다.</strong> 정부지원사업은 공고마다 첨부된 양식이 따로 있고, 목차와 문항 순서도 그 양식을 따라야 하기 때문입니다.</p>
  <p>그렇다고 공고가 나올 때까지 기다릴 필요는 없습니다. 양식이 없어도 미리 해둘 수 있는 준비가 있습니다. 아래는 2026년 공고문을 기준으로 정리한 다섯 가지입니다. 2026년 예비·초기창업패키지 접수는 모두 끝났으니, 다음 모집에서는 새 공고문을 다시 확인하세요.</p>

  <h2>1. 양식은 공고에 첨부된 파일이 기준입니다</h2>
  <p><a href="${EARLY_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년 초기창업패키지 공고</a>는 제출서류에 사업계획서 1부를 [별첨 1] 양식으로 내도록 하면서 "모집공고에 첨부된 사업계획서 양식 활용(그 외 양식 제출 시 평가대상에서 제외)"이라고 적었습니다. <a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년 예비창업패키지 수정 공고</a>도 사업계획서를 [별첨 1] 양식으로 받았습니다.</p>
  <p>블로그나 카페에서 받은 '예비창업자 사업계획서 양식'은 지난 공고의 양식이거나 다른 사업의 양식일 수 있습니다. 내용을 미리 정리하는 메모장으로만 쓰고, 제출본은 반드시 <a href="${K_STARTUP_URL}" target="_blank" rel="noopener noreferrer">K-Startup</a>이나 주관 부처 공고문에 붙은 파일로 작성하세요.</p>

  <h2>2. 양식보다 평가표를 먼저 보세요</h2>
  <p>사업계획서는 서비스를 소개하는 설명서보다, 평가항목마다 근거를 대는 답안지에 가깝습니다. 2026년 두 공고의 서류·발표 평가지표는 같은 네 항목이었고, 세부 내용은 조금씩 달랐습니다.</p>
  <table>
    <thead>
      <tr>
        <th>평가항목</th>
        <th>초기창업패키지(2026)</th>
        <th>예비창업패키지(2026)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>문제인식</strong></td>
        <td>개발 배경 및 필요성</td>
        <td>개발 동기, 해결방안(필요성)</td>
      </tr>
      <tr>
        <td><strong>실현가능성</strong></td>
        <td>사업기간 내 개발 또는 구체화 계획</td>
        <td>개발(개선) 방법, 경쟁력 확보 방안</td>
      </tr>
      <tr>
        <td><strong>성장전략</strong></td>
        <td>차별성, 수익모델, 자금조달 방안</td>
        <td>시장진입 전략, 자금조달 방안</td>
      </tr>
      <tr>
        <td><strong>팀(기업) 구성</strong></td>
        <td colspan="2">대표자 및 고용(예정) 인력의 기술 역량과 노하우</td>
      </tr>
    </tbody>
  </table>
  <p>같은 '성장전략'이라도 초기창업패키지는 수익모델과 차별성을, 예비창업패키지는 시장진입 전략을 앞에 둡니다. 양식을 받기 전에 이 표부터 확인하면 어디에 힘을 줄지 정할 수 있습니다.</p>

  <h2>3. 아이디어보다 고객 한 명을 먼저 정하세요</h2>
  <p>문제인식 항목은 아이디어가 얼마나 좋은지보다 누가 어떤 불편을 겪는지를 묻습니다. "누구나 쓸 수 있는 서비스"라고 쓰면 어떤 고객을 먼저 만날지가 보이지 않습니다. 첫 고객을 한 문장으로 적어보세요. 예를 들어 "직원 없이 혼자 운영하는 동네 미용실 원장"처럼, 상황과 규모가 함께 들어가야 합니다. 현상 문장을 문제 정의로 고치는 방법은 <a href="/blog_detail/1770964843114x761947782936002600">사업계획서 문제인식 글</a>에 따로 정리했습니다.</p>

  <h2>4. 숫자는 정확도보다 출처와 계산식이 먼저입니다</h2>
  <p>시장 규모, 예상 매출, 사업비 사용 계획에는 숫자가 들어갑니다. 처음부터 정확한 숫자를 찾기보다, 숫자마다 어디서 가져왔는지와 어떻게 계산했는지를 옆에 적어두세요. 직접 정한 가정은 가정이라고 표시하면 됩니다. 시장 규모를 고객 수와 가격으로 나눠 계산하는 방법은 <a href="/blog_detail/business-plan-market-size-tam-sam-som">TAM·SAM·SOM 글</a>에서 가상 예시로 다뤘습니다.</p>

  <h2>5. 빈 양식을 처음부터 채우지 말고 준비표부터 만드세요</h2>
  <p>빈 문서 첫 줄부터 쓰기 시작하면 앞 항목에서 시간을 다 쓰고 뒤 항목은 급하게 채우게 됩니다. 평가항목 네 개를 세로로 놓고, 지금 가진 근거를 한 줄씩 적는 준비표를 먼저 만들어 보세요. 아래는 설명을 위한 가상 예시입니다.</p>
  <div class="dh-note">
    <p><strong>준비표 (가상 예시)</strong><br>
    문제인식: 1인 미용실 원장 8명 인터뷰 메모 있음 / 예약 누락 사례 수는 아직 없음<br>
    실현가능성: 노코드 예약 화면 시안 있음 / 개발 일정과 담당자 미정<br>
    성장전략: 첫 판매 경로(미용 재료 도매상 제휴) 아이디어만 있음 / 가격 근거 없음<br>
    팀 구성: 대표 디자인 경력 5년 / 개발 인력 채용 계획 필요</p>
  </div>
  <p>이렇게 적으면 "아직 없음"이 남은 칸이 이번 주에 할 일이 됩니다. 공고가 나오면 준비표의 내용을 첨부 양식 문항 순서대로 옮기기만 하면 됩니다. 양식 목차와 일반 템플릿 순서가 어떻게 어긋나는지는 <a href="/blog_detail/1755658221110x981594766116126700">사업계획서 목차 글</a>을 참고하세요.</p>

  <div class="dh-cta">
    <p>준비표를 만들었다면 독스헌트에서 K-Startup·기업마당 공고를 고르거나 공고문과 양식을 직접 올려, 문항 순서에 맞춘 초안으로 옮겨 보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=startup-business-plan-form-prep&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트로 양식 맞춤 초안 만들기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${EARLY_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 초기창업패키지(일반형) 창업기업 모집공고</a></li>
      <li><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 예비창업자 수정 모집공고(2차)</a></li>
      <li><a href="${K_STARTUP_URL}" target="_blank" rel="noopener noreferrer">K-Startup 창업지원포털</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

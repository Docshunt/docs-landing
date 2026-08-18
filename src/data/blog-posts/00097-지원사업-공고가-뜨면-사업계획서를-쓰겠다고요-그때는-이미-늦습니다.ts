import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const YC_ESSENTIAL_ADVICE_URL = "https://www.ycombinator.com/blog/ycs-essential-startup-advice/";
const YC_STARTUP_SCHOOL_URL = "https://www.ycombinator.com/blog/startup-school-week-1-recap-kevin-hale-and-eric-migicovsky/";
const K_STARTUP_HOME_URL = "https://www.k-startup.go.kr/web/main/index.do";
const K_STARTUP_NOTICE_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do";
const BIZINFO_URL = "https://www.bizinfo.go.kr/";
const IRIS_URL = "https://iris.go.kr/main.do";

export const post97 = {
  page: 1,
  index: 1,
  slug: "support-program-business-plan-before-notice",
  sourceUrl: "https://docshunt.ai/blog_detail/support-program-business-plan-before-notice",
  title: "지원사업 공고가 뜨면 사업계획서를 쓰겠다고요? 그때는 이미 늦습니다",
  titleLines: ["지원사업 공고가 뜨면", "사업계획서를 쓰겠다고요?", "그때는 이미 늦습니다"],
  titleLineBreaks: "always",
  description:
    "예비창업패키지와 창업지원사업 공고를 기다리며 작성을 미루고 있나요? 공고 전에 고객·시장·비용 근거를 남겨야 공고일에는 처음부터 다시 쓰지 않고 맞춰 고칠 수 있습니다.",
  seo: {
    mainKeyword: "지원사업",
    supportKeywords: ["사업계획서", "지원사업 공고", "예비창업패키지 사업계획서", "사업계획서 근거"],
    searchIntent: "지원사업 공고 전에 사업계획서와 고객 검증 근거를 준비하는 방법을 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.18",
  modifiedDate: "2026.08.18",
  verification: {
    date: "2026.08.18",
    note: "Y Combinator의 초기 창업 조언과 Startup School 고객 검증 자료를 검색해 원문 사례와 주장 범위를 확인했습니다. YC 자료는 초기 스타트업의 고객 검증 원칙이지 한국 정부지원사업의 평가 기준이 아닙니다. 한국 지원사업 공고를 찾는 경로는 K-Startup, 기업마당, IRIS 공식 페이지를 기준으로 확인했으며, 특정 공고의 마감일·자격·지원금 액수는 이 글에서 단정하지 않습니다. 작업 예시의 고객 수와 전환 수치는 설명을 위한 가상 수치입니다.",
    sources: [
      { label: "Y Combinator, YC’s Essential Startup Advice", url: YC_ESSENTIAL_ADVICE_URL },
      { label: "Y Combinator, Startup School Week 1 Recap", url: YC_STARTUP_SCHOOL_URL },
      { label: "창업진흥원, K-Startup 창업지원포털", url: K_STARTUP_HOME_URL },
      { label: "K-Startup, 사업공고", url: K_STARTUP_NOTICE_URL },
      { label: "기업마당", url: BIZINFO_URL },
      { label: "범부처통합연구지원시스템(IRIS)", url: IRIS_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00097-support-program-business-plan-before-notice-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00097-support-program-business-plan-before-notice-hero.jpg",
  paragraphs: [
    "지원사업 사업계획서는 공고가 뜬 날 처음 쓰기 시작하면 문장보다 근거를 만드는 시간이 부족해집니다. 공고 전에는 완성본이 아니라 고객 문제, 현재 대체재, 검증 결과, 시장·비용 가정을 한곳에 모은 근거 파일을 만들어야 합니다.",
    "Y Combinator는 초기 창업자에게 제품을 빨리 내놓고 고객과 대화하며, 처음에는 규모가 커지지 않는 수작업도 감수하라고 조언합니다. 이 원칙을 한국 지원사업의 평가 기준으로 옮길 수는 없지만, 공고 전에 고객 기록을 남겨야 한다는 준비 방식으로는 번역할 수 있습니다.",
    "K-Startup에서 지원사업 공고를 찾고 기업마당·IRIS까지 범위를 넓히더라도, 공고마다 목적·자격·제출서류·평가항목은 따로 확인해야 합니다. 공고가 뜬 뒤 새로 검증하기보다 기존 근거를 공고의 질문에 맞게 배치하는 것이 핵심입니다.",
    "작업 예시는 고객 인터뷰 12건, 사전 신청 23건처럼 가정한 숫자로 설명합니다. 실제 제출에는 창업자가 직접 확인한 기록과 공식 자료만 사용해야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>지원사업 사업계획서는 공고가 뜬 날 처음 쓰기 시작하면 문장보다 근거를 만드는 시간이 부족해집니다.</strong> 공고 전에는 완성된 사업계획서를 미리 외우듯 써두라는 뜻이 아닙니다. 고객 문제, 현재 대체재, 검증 결과, 시장과 비용 가정을 한곳에 모아두어야 공고가 나온 뒤에는 양식에 맞게 배치하고 부족한 부분만 보완할 수 있다는 뜻입니다.</p>
  <p>반대로 공고가 나온 뒤 처음으로 “누가 이 문제를 겪는가”, “고객은 지금 무엇으로 버티는가”, “지원금을 받아 무엇을 확인할 것인가”를 묻기 시작하면 며칠 안에 답을 만들어야 합니다. 그때 막히는 것은 글솜씨가 아니라 기록의 부재입니다.</p>

  <h2>공고가 뜬 날 가장 먼저 막히는 문장은 ‘시장 규모가 큽니다’입니다</h2>
  <p>지원사업 공고를 기다리던 대표님이 공고문과 사업계획서 양식을 한꺼번에 열었다고 가정해보겠습니다. 문제인식에는 “시장 규모가 크고 고객 수요가 높다”고 쓰고, 실현가능성에는 “AI 기술로 빠르게 개발할 수 있다”고 적습니다. 그런데 다음 질문에서 손이 멈춥니다.</p>
  <ul>
    <li>그 고객은 정확히 누구인가요?</li>
    <li>지금은 어떤 방식으로 문제를 해결하나요?</li>
    <li>그 방식에 얼마나 시간이나 비용을 쓰고 있나요?</li>
    <li>내 서비스에 관심을 보였다는 기록이 있나요?</li>
    <li>지원금을 받으면 어떤 가설을 언제까지 확인하나요?</li>
  </ul>
  <p>“시장이 크다”는 말이 틀렸다는 뜻은 아닙니다. 다만 시장 통계만으로는 내 고객과 내 실행계획이 연결되지 않습니다. 공고 전에 해야 할 일은 사업계획서 문장을 미리 완성하는 것이 아니라, 문장 뒤에 붙일 원본 기록을 쌓는 것입니다.</p>

  <h2>해외 원문이 말하는 것은 ‘지원금 심사 기준’이 아니라 검증의 순서입니다</h2>
  <p><a href="${YC_ESSENTIAL_ADVICE_URL}" target="_blank" rel="noopener noreferrer">Y Combinator의 초기 창업 조언</a>은 제품을 빨리 내놓고, 고객과 이야기하고, 처음에는 규모가 커지지 않는 방식으로 첫 고객을 돕는 접근을 소개합니다. 초기 단계에서 중요한 것은 완성된 시스템을 먼저 만드는 일이 아니라, 실제 고객이 무엇을 원하는지 확인하는 일이라는 설명입니다.</p>
  <p>같은 글은 Airbnb 초기 창업자들이 숙소 사진을 직접 찍어 등록 페이지를 개선했던 사례도 소개합니다. 이 작업은 고객 수가 늘어난 뒤에는 그대로 반복하기 어렵지만, 초기에는 숙소가 어떻게 보이는지 고객과 대화하며 배우는 데 도움이 됐습니다. 여기서 가져올 수 있는 것은 “한국 지원사업에서는 반드시 수작업 고객 확보를 해야 한다”는 결론이 아닙니다. <strong>돈을 받기 전에 고객의 문제와 반응을 직접 확인하고, 그 과정을 기록한다는</strong> 순서입니다.</p>
  <p><a href="${YC_STARTUP_SCHOOL_URL}" target="_blank" rel="noopener noreferrer">YC Startup School의 고객 검증 자료</a>도 첫 고객을 고를 때 문제의 빈도와 현재 발생하는 비용을 물어보는 방식을 설명합니다. 이 역시 미국 초기 스타트업 맥락의 조언입니다. 한국형 사업계획서에는 그대로 번역하지 말고, “고객이 자주 겪는 문제인가”, “현재 어떤 비용을 치르고 있는가”, “이 답을 확인할 기록이 있는가”라는 질문으로 바꿔 써야 합니다.</p>

  <h2>한국에서 가져올 것은 해외 제도가 아니라 ‘근거를 모으는 폴더’입니다</h2>
  <p><a href="${K_STARTUP_HOME_URL}" target="_blank" rel="noopener noreferrer">K-Startup 창업지원포털</a>은 창업지원사업 공고와 창업 정보를 확인하는 출발점입니다. <a href="${K_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">사업공고 화면</a>에서 공고를 찾더라도, 같은 지원사업이라는 이유만으로 자격·제출서류·평가항목이 같다고 볼 수는 없습니다. 최종 판단은 지원하려는 공고문과 첨부 양식을 기준으로 해야 합니다.</p>
  <p>중소기업·소상공인 관련 공고까지 넓혀보고 싶다면 <a href="${BIZINFO_URL}" target="_blank" rel="noopener noreferrer">기업마당</a>을 함께 확인할 수 있습니다. 기술개발 과제처럼 연구개발 접수가 필요한 경우에는 <a href="${IRIS_URL}" target="_blank" rel="noopener noreferrer">IRIS</a>의 과제 공고와 접수 조건을 별도로 봐야 합니다. 이 사이트들은 공고를 찾는 경로이지, 모든 사업계획서에 공통으로 적용되는 평가표가 아닙니다.</p>

  <div class="dh-note">
    <p><strong>검색 순서</strong><br>내 사업 단계와 필요한 지원을 먼저 적습니다. 그다음 <em>예비창업 + 사업화</em>, <em>초기창업 + 판로</em>, <em>기술개발 + R&amp;D</em>처럼 공고의 목적과 내 빈칸을 함께 검색합니다.</p>
  </div>

  <h2>공고 전에 만들어둘 근거 파일은 다섯 장이면 시작할 수 있습니다</h2>
  <p>아래는 모든 사업계획서에 반드시 들어가야 하는 공식 양식이 아닙니다. 다음 공고가 나왔을 때 같은 질문을 다시 처음부터 조사하지 않기 위한 작업 폴더의 구조입니다.</p>
  <table>
    <thead>
      <tr>
        <th>근거 파일</th>
        <th>남겨둘 원본</th>
        <th>나중에 바뀌는 문장</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>고객 문제</strong></td>
        <td>날짜, 고객군, 질문, 실제 답변, 반복된 표현</td>
        <td>누가 어떤 상황에서 문제를 겪는가</td>
      </tr>
      <tr>
        <td><strong>현재 대체재</strong></td>
        <td>고객이 쓰는 도구, 수작업 순서, 시간·비용, 불편한 지점</td>
        <td>왜 기존 방식만으로 충분하지 않은가</td>
      </tr>
      <tr>
        <td><strong>해결책 검증</strong></td>
        <td>랜딩페이지, 문의, 사전예약, MVP 사용 기록, 이탈 이유</td>
        <td>무엇을 만들었고 고객이 어떻게 반응했는가</td>
      </tr>
      <tr>
        <td><strong>시장·가격</strong></td>
        <td>대상 고객 수, 가격 가정, 경쟁사, 접근 채널, 확인일</td>
        <td>시장 규모가 내 매출 계획과 어떻게 이어지는가</td>
      </tr>
      <tr>
        <td><strong>실행·비용</strong></td>
        <td>견적서, 개발 범위, 일정, 검증 지표, 필요한 자원</td>
        <td>지원금으로 무엇을 하고 어떤 결과를 확인하는가</td>
      </tr>
    </tbody>
  </table>
  <p>고객 인터뷰 요약만 남기지 말고 원본을 함께 보관하세요. 나중에 사업계획서에는 한 문장만 들어가더라도, 그 문장을 다시 확인할 수 있어야 합니다. 인터뷰 날짜와 대상, 질문, 답변을 같은 파일에 적고, 고객 동의 없이 개인정보나 민감한 정보는 공개 문서에 옮기지 않습니다.</p>

  <h2>지원금 사용계획은 ‘비용 목록’이 아니라 검증 순서로 씁니다</h2>
  <p>가상의 예로 “개발비 1,000만 원, 마케팅비 500만 원, 인건비 1,500만 원”처럼 항목만 적으면 돈을 어디에 쓸지는 보이지만, 그 돈으로 무엇을 배우려는지는 보이지 않습니다. 지원금과 실행과 결과를 한 줄로 연결해보세요.</p>
  <ol>
    <li><strong>문제 확인:</strong> 목표 고객 10명과 인터뷰하고 반복되는 문제 표현을 3개로 정리합니다.</li>
    <li><strong>작은 해결책 테스트:</strong> 전체 플랫폼 대신 핵심 기능을 수작업으로 제공하고 사용 반응을 기록합니다.</li>
    <li><strong>유료 가능성 확인:</strong> 문의, 견적 요청, 사전예약, 결제 의향 중 무엇을 측정할지 정합니다.</li>
    <li><strong>다음 판단:</strong> 어떤 결과가 나오면 기능을 고치고, 어떤 결과면 가설을 바꿀지 미리 적습니다.</li>
  </ol>
  <p>이렇게 쓰면 지원금은 “마케팅에 쓴다”에서 멈추지 않고 “어떤 고객에게 어떤 방법으로 접근해 어떤 지표를 확인한다”로 바뀝니다. 숫자를 크게 만드는 것보다, 지출과 배움의 연결을 설명하는 편이 다음 계획을 고치기도 쉽습니다.</p>

  <h2>작업 예시: ‘수요가 높습니다’를 근거 문장으로 바꾸기</h2>
  <p>아래 숫자는 작성 구조를 보여주기 위한 <strong>가상 예시</strong>입니다. 실제 사업계획서에는 대표님이 직접 확인한 기록과 출처 있는 자료만 넣어야 합니다.</p>
  <div class="dh-note">
    <p><strong>처음 문장</strong><br>“1인 온라인 판매자는 비용 정리에 어려움을 겪고 있어 자동 정리 서비스의 수요가 높습니다.”</p>
  </div>
  <p>이 문장은 틀렸다고 단정하기는 어렵지만, 고객이 누구인지와 어려움을 겪는 순간이 넓게 뭉쳐 있습니다. 현재 무엇으로 해결하는지도, 실제 반응이 있었는지도 보이지 않습니다.</p>
  <p>공고 전에 다음과 같은 기록을 남겼다고 가정해보겠습니다.</p>
  <ul>
    <li>1인 온라인 판매자 12명에게 같은 문제를 질문했습니다.</li>
    <li>8명은 매입 영수증을 월말에 한꺼번에 정리한다고 답했습니다.</li>
    <li>5명은 세무사에게 보내기 전에 엑셀로 품목을 다시 분류한다고 답했습니다.</li>
    <li>유사 서비스 3개의 가격과 자동 분류 범위를 비교했습니다.</li>
    <li>간단한 랜딩페이지에서 사전 신청 23건과 상담 요청 6건을 확인했습니다.</li>
  </ul>
  <p>그러면 문장은 다음처럼 구체화할 수 있습니다.</p>
  <div class="dh-note">
    <p><strong>근거를 붙인 문장</strong><br>“가상 조사 결과, 1인 온라인 판매자 12명 중 8명은 매입 영수증을 월말에 한꺼번에 정리했고 5명은 세무사 전달 전에 엑셀로 품목을 다시 분류했습니다. 본 서비스는 영수증 업로드 뒤 판매 채널과 품목을 분류해 월말 정리 시간을 줄이는 것을 1차 목표로 합니다. 사전 신청 페이지에서는 23건의 신청과 6건의 상담 요청을 확인했습니다.”</p>
  </div>
  <p>고객 수, 답변 수, 신청 수가 있다고 해서 제품의 성공이나 지원사업 선정을 보장하는 것은 아닙니다. 하지만 “수요가 높다”라는 평가를 독자가 다시 확인할 수 있는 기록으로 바꾸는 데는 도움이 됩니다. 숫자를 쓸 때는 조사 대상, 날짜, 질문, 수집 방식과 함께 보관하세요.</p>

  <h2>공고가 뜬 날에는 사업계획서를 네 갈래로 나눠 보세요</h2>
  <p>새 공고를 발견했다고 기존 사업계획서를 전부 버릴 필요는 없습니다. 반대로 이전 문서를 그대로 제출할 수도 없습니다. 공고문에서 사업 목적, 평가항목, 제출서류, 지원금으로 달성할 목표를 확인한 뒤 아래처럼 나눠보세요.</p>
  <table>
    <thead>
      <tr>
        <th>구분</th>
        <th>예시</th>
        <th>확인할 질문</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>유지</strong></td>
        <td>고객 문제, 핵심 해결 방식, 팀의 실제 역할</td>
        <td>사업의 본질이 바뀌지 않았는가</td>
      </tr>
      <tr>
        <td><strong>공고에 맞게 조정</strong></td>
        <td>지원금 사용, 일정, 목표 지표, 사업화 방식</td>
        <td>이 공고의 기간과 목적에 맞는가</td>
      </tr>
      <tr>
        <td><strong>새로 확인</strong></td>
        <td>자격, 가점, 증빙, 기술·시장 근거</td>
        <td>이번 공고가 추가로 요구하는 자료가 있는가</td>
      </tr>
      <tr>
        <td><strong>삭제 또는 보류</strong></td>
        <td>근거 없는 시장 수치, 지난 공고의 일정, 맞지 않는 목표</td>
        <td>지금도 출처와 조건이 유효한가</td>
      </tr>
    </tbody>
  </table>
  <p>이 작업을 해두면 공고가 뜬 날 해야 할 일은 새 문서를 백지에서 쓰는 것이 아니라, 공고와 기존 근거 파일 사이의 빈칸을 찾는 일이 됩니다.</p>

  <h2>이 방법이 모든 지원사업에 똑같이 필요한 것은 아닙니다</h2>
  <p>이미 매출·계약·사용 로그·고객 문의가 충분히 정리되어 있고, 지원하려는 공고의 질문과 제출 자료에 맞게 바로 꺼내 쓸 수 있다면 준비 기간의 핵심은 새 인터뷰보다 문서 정리일 수 있습니다. 반대로 아직 고객을 한 번도 만나지 않았거나 시장·비용 숫자를 검색 결과로만 채우고 있다면, 공고를 찾는 것보다 먼저 작은 검증을 해보는 편이 낫습니다.</p>
  <p>또한 모든 지원사업의 자격과 평가 방식이 같지는 않습니다. 특정 공고의 최신 제출 방식과 지원 조건은 반드시 공식 공고문을 최종 기준으로 확인하세요. 이 글의 해외 사례와 근거 파일 구조는 준비 방법을 설명하기 위한 것이며, 선정 가능성을 보장하는 공식 기준이 아닙니다.</p>

  <h2>이번 주에 만들 것은 완성본이 아니라 다섯 가지 기록입니다</h2>
  <ol>
    <li>고객 3명에게 같은 문제를 물어보고 날짜와 답변을 남깁니다.</li>
    <li>현재 사업계획서에서 출처 없는 숫자에 표시를 합니다.</li>
    <li>경쟁사 3곳의 기능이 아니라 고객이 갈아탈 이유를 비교합니다.</li>
    <li>앞으로 3개월 안에 확인할 지표 하나를 정합니다.</li>
    <li>인터뷰, 견적, 화면, 공고, 계산 파일을 한 폴더에 모읍니다.</li>
  </ol>
  <p>이 다섯 가지는 사업계획서를 미리 완성하기 위한 숙제가 아닙니다. 공고가 뜬 뒤 “그럴 것 같습니다”라고 쓰지 않도록, 확인한 사실과 아직 모르는 것을 구분하는 장치입니다.</p>
  <p><strong class="dh-emphasis">지원사업 공고를 빨리 발견하는 것보다 먼저 필요한 것은, 공고가 나왔을 때 내 사업의 문장 옆에 붙일 근거가 이미 있는 상태입니다.</strong></p>

  <div class="dh-cta">
    <p>기존 사업계획서와 고객·시장·비용 자료가 흩어져 있다면 독스헌트에서 근거 파일을 정리하고, 다음 공고의 문항에 맞춰 어떤 내용을 유지·보완할지 점검해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=support-program-business-plan-before-notice&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 사업계획서 준비하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${YC_ESSENTIAL_ADVICE_URL}" target="_blank" rel="noopener noreferrer">Y Combinator, YC’s Essential Startup Advice</a></li>
      <li><a href="${YC_STARTUP_SCHOOL_URL}" target="_blank" rel="noopener noreferrer">Y Combinator, Startup School Week 1 Recap</a></li>
      <li><a href="${K_STARTUP_HOME_URL}" target="_blank" rel="noopener noreferrer">창업진흥원, K-Startup 창업지원포털</a></li>
      <li><a href="${K_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 사업공고</a></li>
      <li><a href="${BIZINFO_URL}" target="_blank" rel="noopener noreferrer">기업마당</a></li>
      <li><a href="${IRIS_URL}" target="_blank" rel="noopener noreferrer">범부처통합연구지원시스템(IRIS)</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

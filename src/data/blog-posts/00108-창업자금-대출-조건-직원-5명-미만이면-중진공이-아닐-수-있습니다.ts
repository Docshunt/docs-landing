import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const KOSMES_DETAIL_URL = "https://www.kosmes.or.kr/nsh/SH/SBI/SHSBI004M0.do";
const KOSMES_TARGET_URL = "https://www.kosmes.or.kr/nsh/SH/SBI/SHSBI002M0.do";
const KOSMES_PROCESS_URL = "https://www.kosmes.or.kr/nsh/SH/SBI/SHSBI003M0.do";
const KOSMES_NOTICE_URL = "https://www.kosmes.or.kr/nsh/SH/NTS/SHNTS001F0.do?seqNo=6107152";
const SEMAS_FUND_URL = "https://ols.semas.or.kr/ols/man/SMAN010M/page.do";
const SMALL_BIZ_ACT_URL = "https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%86%8C%EC%83%81%EA%B3%B5%EC%9D%B8%EA%B8%B0%EB%B3%B8%EB%B2%95";

export const post108 = {
  page: 1,
  index: 1,
  slug: "startup-loan-conditions",
  sourceUrl: "https://docshunt.ai/blog_detail/startup-loan-conditions",
  title: "창업자금 대출 조건, 직원 5명 미만이면 중진공이 아닐 수 있습니다",
  titleLines: ["창업자금 대출 조건,", "직원 5명 미만이면", "중진공이 아닐 수 있습니다"],
  titleLineBreaks: "always",
  description:
    "창업자금 대출 조건을 중진공 기준으로 정리했습니다. 업력 7년 미만이면 예비창업자도 신청할 수 있지만 직원 5명 미만 소상공인은 대부분 제외됩니다. 청년전용창업자금 한도·금리와 예외, 신청 순서까지 담았습니다.",
  seo: {
    mainKeyword: "창업자금 대출 조건",
    supportKeywords: ["청년전용창업자금", "중진공 창업기반지원자금", "정책자금 소상공인 제외"],
    searchIntent:
      "예비창업자나 창업 7년 이내 대표가 중진공 창업자금 대출을 받을 수 있는지, 청년전용창업자금 대상과 한도·금리, 소상공인이면 어디로 가야 하는지 알고 싶다",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.11.24",
  modifiedDate: "2026.11.24",
  verification: {
    date: "2026.11.24",
    note: "창업기반지원자금과 청년전용창업자금의 신청 대상, 대출 한도·기간·금리, 융자제한기업(소상공인 기준과 예외, 평가 탈락 후 6개월 제한), 신청 절차와 제출서류, 재심 제외 대상은 2026년 11월 24일 중소벤처기업진흥공단 누리집의 정책자금 안내 페이지(세부사업, 융자대상 및 제한기업, 융자절차)에서 확인했습니다. 이 안내는 2026년 10월 1일 공지된 「2026년도 중소기업 정책자금 융자계획 변경공고(제2026-574호)」 기준입니다. 정책자금 기준금리와 월별 신청 일정은 중진공 누리집 공지를 따르며, 2027년 융자계획은 새 공고가 나오면 다시 확인해야 합니다. 소상공인이 소기업 중 상시근로자 요건을 갖춘 자라는 정의는 같은 날 국가법령정보센터의 「소상공인기본법」 제2조로 확인했습니다. 개별 기업의 대상 여부는 중진공 지역본(지)부 또는 1811-3655(정책자금 안내콜센터)에 확인해야 합니다.",
    sources: [
      { label: "중소벤처기업진흥공단, 정책자금융자 세부사업(혁신창업사업화 자금)", url: KOSMES_DETAIL_URL },
      { label: "중소벤처기업진흥공단, 정책자금융자 융자대상 및 제한기업", url: KOSMES_TARGET_URL },
      { label: "중소벤처기업진흥공단, 정책자금융자 융자절차", url: KOSMES_PROCESS_URL },
      { label: "중소벤처기업진흥공단, 2026년 중소기업 정책자금 융자계획 공고 개정(4차)", url: KOSMES_NOTICE_URL },
      { label: "소상공인시장진흥공단, 소상공인정책자금", url: SEMAS_FUND_URL },
      { label: "국가법령정보센터, 소상공인기본법", url: SMALL_BIZ_ACT_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00108-startup-loan-conditions-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00108-startup-loan-conditions-hero.jpg",
  paragraphs: [
    "중진공 창업자금(창업기반지원자금)은 업력 7년 미만 창업자와 예비창업자가 신청할 수 있습니다. 대표가 만 39세 이하이고 업력 3년 미만이면 청년전용창업자금으로 최대 1억 원(제조업·중점지원분야는 2억 원), 2.5% 고정금리를 신청할 수 있습니다.",
    "다만 중진공 정책자금은 소상공인을 원칙적으로 융자 대상에서 제외합니다. 제조업·광업·건설업·운수업은 상시근로자 10명 미만, 그 밖의 업종은 5명 미만이 소상공인 기준이고, 법상으로는 매출 규모가 소기업이어야 한다는 전제가 붙습니다. 제조업, 혁신성장·초격차·신산업 분야 소상공인과 소셜벤처 등은 예외이고, 중점지원분야 소상공인은 청년전용창업자금을 신청할 수 있습니다.",
    "예외에 해당하지 않는 소상공인이라면 소상공인시장진흥공단의 소상공인정책자금을 확인해야 합니다.",
    "중진공 신청은 온라인 기업정보 입력, 정책우선도 평가, 융자신청서 제출, 기업평가, 융자 결정 순서로 진행됩니다. 청년전용창업자금은 발표·서면 평가위원회에서 지원 여부를 정하고, 재심 대상에서 빠집니다.",
    "기업평가에서 떨어지면 같은 해에는 원칙적으로 6개월이 지나야 다시 신청할 수 있으니 사업계획과 자금 사용 계획을 준비한 뒤 신청하는 편이 낫습니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p>중진공(중소벤처기업진흥공단) 창업자금은 <strong>업력 7년 미만이면 예비창업자도 신청할 수 있습니다.</strong> 대표가 만 39세 이하이고 업력 3년 미만이면 <strong>청년전용창업자금</strong>으로 최대 1억 원, 제조업이나 중점지원분야라면 2억 원까지 2.5% 고정금리로 빌릴 수 있습니다(<a href="${KOSMES_DETAIL_URL}" target="_blank" rel="noopener noreferrer">중진공 세부사업 안내</a>).</p>
  <p>그런데 업력보다 먼저 확인할 조건이 있습니다. 중진공 정책자금은 <strong>소상공인을 원칙적으로 융자 대상에서 뺍니다.</strong> 혼자 또는 직원 몇 명과 시작한 서비스업·유통업 창업자라면 이 기준에 해당할 가능성이 높으니, 한도와 금리를 보기 전에 내가 어느 기관 대상인지부터 가려야 합니다.</p>

  <div class="dh-note">
    <p><strong>기준 시점:</strong> 2026년 11월 24일 중진공 누리집 안내와 <a href="${KOSMES_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년도 중소기업 정책자금 융자계획 변경공고(제2026-574호, 2026.10.1)</a> 기준입니다. 2027년 조건은 새 융자계획 공고가 나오면 다시 확인하세요.</p>
  </div>

  <h2>1단계: 소상공인이면 중진공 대신 어디로 가나</h2>
  <p><a href="${KOSMES_TARGET_URL}" target="_blank" rel="noopener noreferrer">중진공의 융자제한기업 목록</a>에는 「소상공인기본법 시행령」에 따른 소상공인이 들어 있습니다. 법에서 소상공인은 먼저 매출 규모로 <strong>소기업</strong>에 해당하고, 그중 상시근로자 수 기준을 갖춘 기업입니다(<a href="${SMALL_BIZ_ACT_URL}" target="_blank" rel="noopener noreferrer">「소상공인기본법」 제2조</a>). 직원이 적어도 매출이 소기업 범위를 넘으면 소상공인이 아닙니다. 대부분의 초기 창업기업은 소기업에 들기 때문에 실제로 갈리는 건 아래 상시근로자 기준입니다.</p>
  <table>
    <thead>
      <tr>
        <th>업종</th>
        <th>소상공인 기준(상시근로자)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>광업, 제조업, 건설업, 운수업</td>
        <td>10명 미만</td>
      </tr>
      <tr>
        <td>그 밖의 업종(도소매, 음식, 서비스 등)</td>
        <td>5명 미만</td>
      </tr>
    </tbody>
  </table>
  <p>소상공인이어도 아래에 해당하면 중진공 정책자금을 신청할 수 있습니다.</p>
  <ul>
    <li>제조업, 또는 혁신성장·초격차·신산업 분야를 영위하는 소상공인</li>
    <li>(예비)사회적기업, 협동조합, 마을기업, 자활기업, 소셜벤처인 소상공인</li>
    <li>중점지원분야(혁신성장, 초격차·신산업, 지역주력산업, 뿌리산업, 소재·부품·장비)를 영위하는 소상공인은 <strong>청년전용창업자금</strong> 신청 가능</li>
  </ul>
  <p>어느 예외에도 들지 않는 소상공인이라면 창업자금은 <a href="${SEMAS_FUND_URL}" target="_blank" rel="noopener noreferrer">소상공인시장진흥공단 소상공인정책자금</a> 쪽을 봐야 합니다. 중점지원분야에 내 업종이 들어가는지는 중진공 안내 페이지의 '중점지원분야(참고1~4)' 첨부에서 업종 코드로 확인합니다.</p>

  <h2>2단계: 중진공 창업자금, 일반과 청년전용 차이</h2>
  <p>중진공의 창업자금 이름은 <strong>창업기반지원자금</strong>입니다. 「중소기업창업 지원법」상 창업자로서 업력 7년 미만이면 되고, 예비창업자도 포함됩니다. 신산업 창업 분야는 사업 개시일부터 10년 이내까지 봅니다. 업력은 사업개시일부터 <strong>융자신청서 제출일까지</strong> 셉니다.</p>
  <table>
    <thead>
      <tr>
        <th>구분</th>
        <th>창업기반지원자금(일반)</th>
        <th>청년전용창업자금</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>대상</td>
        <td>업력 7년 미만(예비창업자 포함)</td>
        <td>대표자 만 39세 이하, 업력 3년 미만</td>
      </tr>
      <tr>
        <td>한도</td>
        <td>연간 60억 원 이내(운전자금 연간 5억 원 이내)</td>
        <td>기업당 1억 원 이내(제조업·중점지원분야 2억 원 이내)</td>
      </tr>
      <tr>
        <td>금리</td>
        <td>정책자금 기준금리(변동) - 0.3%p</td>
        <td>2.5% 고정</td>
      </tr>
      <tr>
        <td>기간</td>
        <td>시설 10년, 운전 5년(거치 2년) 이내</td>
        <td>시설 10년, 운전 6년(거치 3년) 이내</td>
      </tr>
      <tr>
        <td>방식</td>
        <td>직접·대리대출, 성장공유형, 투자조건부</td>
        <td>직접대출, 평가위원회(발표·서면)로 결정</td>
      </tr>
    </tbody>
  </table>
  <p>청년창업사관학교·글로벌창업사관학교 참여 기업, 기보 청년창업기업보증 지원기업, 민간 VC 투자 유치 기업 중 해당 기관의 추천을 받은 기업은 청년전용창업자금을 업력 7년 미만까지 신청할 수 있습니다. 정책자금 기준금리는 분기마다 바뀌어 중진공 누리집에 공지됩니다.</p>

  <h2>두 창업자에게 적용해 보면</h2>
  <p>아래는 기준을 적용하는 방법을 보여 주려고 만든 가상 사례입니다.</p>
  <ul>
    <li><strong>만 31세, 개업 1년 6개월, 혼자 운영하는 온라인 쇼핑몰:</strong> 매출이 소기업 범위이고 도소매·서비스 업종에 직원 5명 미만이라 소상공인입니다. 중점지원분야에 해당하지 않으면 중진공 창업자금은 막히고, 소상공인정책자금을 찾아야 합니다.</li>
    <li><strong>만 35세, 개업 2년, 직원 3명인 식품 제조업:</strong> 소상공인이지만 제조업이라 예외입니다. 업력 3년 미만이니 청년전용창업자금으로 최대 2억 원을 신청할 수 있는 조건입니다. 실제 금액은 기업평가로 정해집니다.</li>
  </ul>

  <h2>3단계: 신청은 이 순서로 진행됩니다</h2>
  <p><a href="${KOSMES_PROCESS_URL}" target="_blank" rel="noopener noreferrer">중진공 융자절차</a>는 수시 접수가 아니라 정해진 모집기간에 온라인으로 받습니다.</p>
  <ol>
    <li><strong>온라인 기업정보 입력:</strong> 대표자 신분증, 사업자등록증·표준재무제표·원천세 신고자료(자동 제출), 정보 제공 동의서.</li>
    <li><strong>정책우선도 평가:</strong> 지역본(지)부 실태조사 예정량보다 신청이 많을 때 혁신성장분야, 첫 거래 기업, 고용창출 실적, 최근 3년 내 지식재산권, 성장잠재력 AI평가 등 9개 지표로 먼저 검토할 기업을 고릅니다.</li>
    <li><strong>융자신청서 제출:</strong> 신청 기회를 받은 날부터 한 달 안에 올려야 하고, 넘기면 기회가 사라집니다. 납세증명서, 4대보험 완납증명서, 고용보험 가입자명부 등이 필요합니다.</li>
    <li><strong>기업평가:</strong> 현장 방문 또는 비대면으로 기술성, 사업성, 미래성장성, 경영능력, <strong>사업계획 타당성</strong>을 봅니다.</li>
    <li><strong>융자 결정과 대출:</strong> 청년전용창업자금은 대출 뒤 1년간 사업계획 진행 상황에 대한 멘토링이 붙습니다.</li>
  </ol>
  <p>마감일에는 신청이 몰리니 17시 전에 신용정보 동의 단계까지 들어가고 18시 전에 제출을 끝내라고 안내합니다.</p>

  <h2>떨어지면 같은 해에는 6개월을 기다립니다</h2>
  <p>기업평가에서 탈락한 기업은 원칙적으로 6개월이 지나야 다시 신청할 수 있습니다. 신청 연도가 바뀌거나, 실질기업주 변경처럼 경영상 중대한 변동이 있으면(추가 1회) 예외인데, 세부 기준은 <a href="${KOSMES_TARGET_URL}" target="_blank" rel="noopener noreferrer">중진공 제한기업 안내</a>에서 확인하세요. 청년전용창업자금은 평가위원회에서 지원을 정하기 때문에 <strong>재심 대상에서도 빠집니다.</strong> 일반 자금처럼 한 번 더 다퉈 볼 길이 없다는 뜻입니다.</p>
  <p>그래서 첫 신청 전에 준비해 둘 것은 세 가지입니다.</p>
  <ul>
    <li>빌린 돈을 시설과 운전 중 어디에 얼마 쓸지 적은 자금 사용 계획. 대출 뒤 목적 외로 쓰면 조기 회수와 융자 제외 제재를 받습니다.</li>
    <li>매출이나 고객 반응처럼 사업성을 보여 줄 숫자. 업력이 짧으면 계약서, 사전 주문, 시제품 테스트 결과도 근거가 됩니다.</li>
    <li>세금 체납이나 연체 정보가 없는지 확인. 둘 다 융자제한 사유입니다.</li>
  </ul>

  <h2>자주 묻는 질문</h2>
  <p><strong>사업자등록 전인데 신청할 수 있나요?</strong><br />창업기반지원자금은 예비창업자를 포함하고, 청년전용창업자금도 '중소기업을 창업하는 자'를 대상에 넣었습니다. 다만 온라인 신청 단계에서 사업자등록증 등 서류를 요구하므로 준비 시점은 지역본(지)부에 확인하세요.</p>
  <p><strong>업력 계산은 언제를 기준으로 하나요?</strong><br />사업개시일부터 융자신청서 제출일까지입니다. 개업일을 어떻게 정하는지는 <a href="/blog_detail/startup-business-age-criteria">창업 업력 기준 글</a>에 정리했습니다.</p>
  <p><strong>부채가 많으면 안 되나요?</strong><br />업종별 융자제한 부채비율이 있지만 업력 7년 미만 기업은 이 기준의 적용 예외입니다.</p>

  <div class="dh-cta">
    <p>정책자금 평가도 결국 사업계획의 타당성을 봅니다. 독스헌트에 기업 정보와 자금 사용 계획을 넣으면 평가 항목에 맞춰 사업계획서 초안을 정리할 수 있습니다.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=startup-loan-conditions&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 사업계획서 준비하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${KOSMES_DETAIL_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업진흥공단, 정책자금융자 세부사업(혁신창업사업화 자금) (2026.11.24 확인)</a></li>
      <li><a href="${KOSMES_TARGET_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업진흥공단, 정책자금융자 융자대상 및 제한기업 (2026.11.24 확인)</a></li>
      <li><a href="${KOSMES_PROCESS_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업진흥공단, 정책자금융자 융자절차 (2026.11.24 확인)</a></li>
      <li><a href="${KOSMES_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업진흥공단, 2026년 중소기업 정책자금 융자계획 공고 개정(4차) (2026.10.1 공지, 2026.11.24 확인)</a></li>
      <li><a href="${SEMAS_FUND_URL}" target="_blank" rel="noopener noreferrer">소상공인시장진흥공단, 소상공인정책자금 (2026.11.24 확인)</a></li>
      <li><a href="${SMALL_BIZ_ACT_URL}" target="_blank" rel="noopener noreferrer">국가법령정보센터, 소상공인기본법 제2조 (2026.11.24 확인)</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

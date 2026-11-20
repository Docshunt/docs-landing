import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const ARKO_2027_URL = "https://www.arko.or.kr/content/6220";
const ARKO_REVIEW_URL = "https://www.arko.or.kr/content/6122";
const ARKO_BUDGET_URL = "https://www.arko.or.kr/content/6052";
const ARKO_APPLY_URL = "https://www.arko.or.kr/content/5428";
const NCAS_URL = "https://www.ncas.or.kr/";
const KAWF_URL = "https://www.kawf.kr/social/sub02.do";
const GOKAMS_URL = "https://www.gokams.or.kr/";

export const post28 = {
  page: 3,
  index: 8,
  slug: "1758606878997x345158186660528100",
  sourceUrl: "https://docshunt.ai/blog_detail/1758606878997x345158186660528100",
  title: "문화예술 지원사업 신청서, 양식 하나 잘못 고르면 심의 전에 빠집니다",
  description:
    "문화예술 지원사업은 기관마다 신청 창구와 양식, 예산 기준이 다릅니다. 한국문화예술위원회의 2027년 문예진흥기금 공모 일정과 결격사유, 예산 편성 기준, 예술활동준비금 조건을 공식 안내로 확인했습니다.",
  seo: {
    mainKeyword: "문화예술 지원사업",
    supportKeywords: ["문예진흥기금 공모", "예술지원금", "문화예술 사업계획서"],
    searchIntent: "문화예술 지원사업의 종류와 신청 일정을 확인하고 신청서와 예산표를 규정에 맞게 준비하고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2025.09.23",
  modifiedDate: "2026.11.20",
  verification: {
    date: "2026.11.20",
    note: "2027년 문예진흥기금 공모 일정, 지원신청 절차, 행정심의 결격사유, 중복·다중 선정 제한, 예산 편성 기준은 한국문화예술위원회의 공모 안내 페이지(최종 수정일 2026.10.8.)에서, 2026년 예술활동준비금 조건은 한국예술인복지재단 안내에서, 예술경영 컨설팅 분야는 예술경영지원센터 누리집에서 2026년 11월 20일에 확인했습니다. 2027년 공모 예산은 국회 심의에 따라 바뀔 수 있습니다.",
    sources: [
      { label: "한국문화예술위원회, 2027 문예진흥기금 공모 한눈에 보기", url: ARKO_2027_URL },
      { label: "한국문화예술위원회, 지원신청 방법 안내", url: ARKO_APPLY_URL },
      { label: "한국문화예술위원회, 심의 및 결과 발표 안내", url: ARKO_REVIEW_URL },
      { label: "한국문화예술위원회, 지원금 예산 편성", url: ARKO_BUDGET_URL },
      { label: "한국예술인복지재단, 예술활동준비금지원", url: KAWF_URL },
      { label: "예술경영지원센터", url: GOKAMS_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00028-arts-support-application-form-check-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00028-arts-support-application-form-check-hero.jpg",
  paragraphs: [
    "문화예술 지원사업은 내용을 평가받기 전에 행정심의를 먼저 거칩니다. 한국문화예술위원회는 다른 사업의 신청서 양식을 쓰거나, 필수 자료를 내지 않거나, 첨부파일이 깨진 경우를 결격사유로 안내합니다.",
    "2027년 문예진흥기금 정기공모는 대부분 2026년 11월 5일 15시에 접수가 끝났습니다. 아르코장편소설창작지원과 아르코문학펠로우십은 12월 7일 15시까지, 공연예술창작산실 대본공모는 2027년 1월 5일부터 28일까지 받을 예정입니다.",
    "예산표는 사업 목적에 맞고 집행 근거가 분명한 항목만 편성할 수 있습니다. 자산취득비와 단체 운영성 경비는 편성할 수 없고, 과세사업자는 부가세를 뺀 공급가액만 보조금으로 편성합니다.",
    "개인 예술인의 생활·창작 준비를 돕는 한국예술인복지재단 예술활동준비금은 2026년에 18,333명에게 1인 300만 원을 지원했고, 접수는 4월 17일에 끝났습니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <div class="dh-note">
    <p><strong>공모 일정 안내 (2026년 11월 20일 확인)</strong><br>2027년 문예진흥기금 정기공모는 대부분 2026년 11월 5일 15시에 접수가 끝났습니다. 아르코장편소설창작지원과 아르코문학펠로우십은 12월 7일 15시까지, 공연예술창작산실 대본공모는 2027년 1월 5일부터 1월 28일 15시까지 받을 예정입니다. 최신 일정은 <a href="${ARKO_2027_URL}" target="_blank" rel="noopener noreferrer">한국문화예술위원회 공모 안내</a>에서 확인하세요.</p>
  </div>

  <p><strong>문화예술 지원사업 신청서는 작품을 평가받기 전에 행정심의부터 통과해야 합니다.</strong> 한국문화예술위원회는 다른 사업의 지원신청서 양식을 쓰거나, 사업별 필수 자료를 내지 않거나, 첨부파일이 깨진 경우를 <a href="${ARKO_REVIEW_URL}" target="_blank" rel="noopener noreferrer">행정심의 결격사유</a>로 안내합니다. 기획이 좋아도 양식을 잘못 고르면 심사위원이 내용을 읽기 전에 빠질 수 있다는 뜻입니다.</p>
  <p>그래서 문화예술 지원사업은 어떤 기관이 무엇을 지원하는지, 어디로 내는지, 어떤 양식과 예산 기준을 쓰는지를 먼저 확인해야 합니다.</p>

  <h2>기관마다 지원하는 대상이 다릅니다</h2>
  <table>
    <thead>
      <tr>
        <th>기관</th>
        <th>무엇을 지원하나</th>
        <th>확인한 내용</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>한국문화예술위원회</strong></td>
        <td>문학, 시각예술, 다원예술, 공연예술, 국제교류 등 창작 프로젝트</td>
        <td>문예진흥기금 공모. <a href="${NCAS_URL}" target="_blank" rel="noopener noreferrer">국가문화예술지원시스템</a>으로만 온라인 접수(이메일·우편·방문 불가)</td>
      </tr>
      <tr>
        <td><strong>한국예술인복지재단</strong></td>
        <td>개인 예술인의 창작 준비와 생활</td>
        <td>[지난 공고] 2026년 예술활동준비금은 18,333명에게 1인 300만 원(격년제)을 지원했고, 접수는 2026년 3월 23일부터 4월 17일 17시까지였습니다.</td>
      </tr>
      <tr>
        <td><strong>예술경영지원센터</strong></td>
        <td>예술단체·예술기업의 경영 문제</td>
        <td>단체·법인 설립, 세무회계, 인사노무, 저작권 등 예술경영 컨설팅과 창업 컨설팅 안내</td>
      </tr>
    </tbody>
  </table>
  <p><a href="${KAWF_URL}" target="_blank" rel="noopener noreferrer">예술활동준비금</a>은 「예술인 복지법」에 따른 예술활동증명을 마치고, 소득인정액이 기준의 120% 이내인 예술인이 대상이었습니다. 프로젝트 지원금과 달리 사업계획서보다 자격 요건 확인이 중심이라, 신청 전에 예술활동증명 유효 여부부터 확인해야 합니다.</p>

  <h2>신청서가 심의 전에 빠지는 경우</h2>
  <p><a href="${ARKO_REVIEW_URL}" target="_blank" rel="noopener noreferrer">한국문화예술위원회의 심의 안내</a>가 결격사유로 적은 항목은 다음과 같습니다.</p>
  <ul>
    <li>국가문화예술지원시스템에서 다른 사업을 선택해 신청한 경우</li>
    <li>지원신청서나 사업별 필수 자료를 내지 않은 경우</li>
    <li>다른 사업의 지원신청서 양식을 사용한 경우</li>
    <li>지원신청서나 필수 자료 파일이 깨진 경우</li>
  </ul>
  <p><a href="${ARKO_APPLY_URL}" target="_blank" rel="noopener noreferrer">지원신청 방법 안내</a>에 따르면 마감 시각 이후에는 예외 없이 접수할 수 없고, 최종 제출 버튼을 누른 뒤에는 내용을 고칠 수 없습니다. 접수 기간에는 제출을 회수해 다시 고칠 수 있지만 마감일 15시 전에 끝내야 합니다. 마감일에는 접속이 느려질 수 있다고 기관이 직접 안내하고 있으니 하루 이상 일찍 제출해 두는 편이 안전합니다.</p>

  <h2>예산표에서 막히는 지점</h2>
  <p>예술 지원사업 신청서에서 가장 자주 손이 가는 곳은 예산표입니다. <a href="${ARKO_BUDGET_URL}" target="_blank" rel="noopener noreferrer">지원금 예산 편성 안내</a>는 다음 기준을 둡니다.</p>
  <ul>
    <li><strong>편성할 수 없는 항목:</strong> 사업 목적에 맞지 않고 집행 근거가 불분명한 예산(자산취득비, 단체 운영성 경비 등)</li>
    <li><strong>부가가치세:</strong> 과세사업자는 보조금으로 공급가액만 편성하고, 부가세는 자부담으로 처리</li>
    <li><strong>필수 편성:</strong> 정산보고서 검증수수료와 예술인고용보험 사업자부담금. 예술인이 대가를 받고 창작·실연·기술지원 노무를 제공하면 예술인고용보험료(월 평균 보수의 1.6%, 사업자와 예술인이 0.8%씩 부담)를 편성해야 합니다.</li>
  </ul>
  <p>예산표의 항목 이름이 사업계획서 본문의 활동과 맞지 않으면 심사위원은 돈이 어디에 쓰이는지 따라갈 수 없습니다. 본문에 "워크숍 3회"라고 썼다면 예산표에도 워크숍 대관료와 참여자 사례비가 같은 횟수로 들어가야 합니다.</p>

  <h2>같은 계획서를 여러 곳에 내기 전에</h2>
  <p>한국문화예술위원회는 동일하거나 비슷한 사업계획으로 다른 기관에서 보조금을 중복으로 받으면 교부결정을 취소하고 반환을 명령할 수 있다고 안내합니다. 중복 수급을 확인하려고 신청서를 기관끼리 공유할 수도 있습니다. 또 같은 개인이나 단체는 이미 선정된 다년사업을 포함해 2건까지만 지원받을 수 있습니다(문화예술연수단원지원과 후원사업은 건수에서 제외). 여러 공모에 내려면 사업마다 목적과 활동이 실제로 다른지부터 정리하세요.</p>

  <h2>사업 개요 문장은 이렇게 고쳐 보세요</h2>
  <p>아래는 문장 고치는 방법을 보여주기 위한 가상 예시입니다.</p>
  <div class="dh-note">
    <p><strong>고치기 전</strong><br>지역 주민의 문화 향유 기회를 확대하고 예술 생태계 활성화에 기여합니다.</p>
    <p><strong>고친 후</strong><br>공연장이 없는 ○○군 3개 면의 마을회관에서 2027년 5월부터 9월까지 낭독극 6회를 열고, 회당 주민 40명을 모읍니다. 지난해 같은 지역에서 연 시범 공연 2회의 관객 수와 설문 결과를 근거로 첨부합니다.</p>
  </div>
  <p>고친 문장에는 누구에게, 어디서, 언제, 몇 번, 어떤 근거로가 들어 있습니다. 결과가 나온 뒤에도 할 일이 있습니다. 위원회는 결과 발표 때 심의총평을 공개하고, 미선정 사유나 점수는 담당 사업팀에 문의하도록 안내합니다. 선정 커트라인과 심의 평균평점은 개별 요청 시 당사자에게 공개할 수 있다고 적고 있으니, 다음 신청 전에 문의해 보세요.</p>

  <div class="dh-cta">
    <p>공고문과 지정 양식을 받았다면 독스헌트에 올려 문항별 초안을 만들고, 본문 활동과 예산 항목이 서로 맞는지 점검해 보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=arts-support-programs&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트로 신청서 초안 만들기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${ARKO_2027_URL}" target="_blank" rel="noopener noreferrer">한국문화예술위원회, 2027 문예진흥기금 공모 한눈에 보기</a></li>
      <li><a href="${ARKO_APPLY_URL}" target="_blank" rel="noopener noreferrer">한국문화예술위원회, 지원신청 방법 안내</a></li>
      <li><a href="${ARKO_REVIEW_URL}" target="_blank" rel="noopener noreferrer">한국문화예술위원회, 심의 및 결과 발표 안내</a></li>
      <li><a href="${ARKO_BUDGET_URL}" target="_blank" rel="noopener noreferrer">한국문화예술위원회, 지원금 예산 편성</a></li>
      <li><a href="${KAWF_URL}" target="_blank" rel="noopener noreferrer">한국예술인복지재단, 예술활동준비금지원</a></li>
      <li><a href="${GOKAMS_URL}" target="_blank" rel="noopener noreferrer">예술경영지원센터</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

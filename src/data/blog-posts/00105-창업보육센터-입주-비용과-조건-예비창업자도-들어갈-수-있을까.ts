import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const STARTUP_ACT_URL =
  "https://www.law.go.kr/%EB%B2%95%EB%A0%B9/%EC%A4%91%EC%86%8C%EA%B8%B0%EC%97%85%EC%B0%BD%EC%97%85%EC%A7%80%EC%9B%90%EB%B2%95";
const KSTARTUP_ONGOING_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do";
const SEOUL_HUB_CHANGDONG_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=179813";
const INCHEON_ONE_PERSON_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=179748";
const GYEONGGI_WOMEN_BI_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=179839";
const SONGPA_ICT_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=179824";

export const post105 = {
  page: 1,
  index: 1,
  slug: "startup-incubator-move-in-cost-guide",
  sourceUrl: "https://docshunt.ai/blog_detail/startup-incubator-move-in-cost-guide",
  title: "창업보육센터 입주 비용과 조건, 예비창업자도 들어갈 수 있을까",
  titleLines: ["창업보육센터 입주", "비용과 조건,", "예비창업자도", "들어갈 수 있을까"],
  titleLineBreaks: "always",
  description:
    "창업보육센터 입주 비용은 월 3~6만 원대 공용석부터 면적당 요금까지 다양합니다. 예비창업자 입주 가능 여부, 입주 기간과 연장, 신청 전에 걸리는 중복 입주·이력 조건을 실제 공고로 정리했습니다.",
  seo: {
    mainKeyword: "창업보육센터 입주",
    supportKeywords: ["창업보육센터 입주 비용", "창업보육센터 비교", "창업보육센터 지원사업"],
    searchIntent:
      "창업보육센터에 들어가면 무엇을 받고 비용은 얼마인지, 예비창업자나 초기 창업자도 입주할 수 있는지, 신청 전에 어떤 조건에 걸리는지 알고 싶다",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.11.22",
  modifiedDate: "2026.11.23",
  verification: {
    date: "2026.11.23",
    note: "창업보육센터의 정의와 지정 요건, 입주자 사용료 감면 근거는 2026년 11월 23일 국가법령정보센터의 「중소기업창업 지원법」 제53조로 확인했습니다. 입주 대상, 이용료, 보증금, 입주 기간과 연장, 제외 대상, 사업장 이전 의무, 평가 방식은 2026년 11월 23일 K-Startup에 게시된 네 기관의 모집 공고 본문으로 다시 확인했습니다. 첨부 공고문은 열어보지 않았으므로 신청 전에는 첨부 공고문과 운영기관 안내를 최종 기준으로 확인해야 합니다. 입주 필요성 문장은 이해를 돕기 위한 가상의 예시입니다.",
    sources: [
      { label: "국가법령정보센터, 중소기업창업 지원법 제53조", url: STARTUP_ACT_URL },
      { label: "K-Startup, 2026년 하반기 서울창업허브 창동 입주기업 모집", url: SEOUL_HUB_CHANGDONG_URL },
      { label: "K-Startup, 2027년 1인 창조기업 지원센터 상반기 신규 입주기업 1차 모집 공고(인천테크노파크)", url: INCHEON_ONE_PERSON_URL },
      { label: "K-Startup, 2027년 상반기 경기도여성창업보육센터 입주기업 모집 공고", url: GYEONGGI_WOMEN_BI_URL },
      { label: "K-Startup, 2027년 송파ICT청년창업지원센터 입주 모집 공고", url: SONGPA_ICT_URL },
      { label: "K-Startup, 사업공고 모집중 목록", url: KSTARTUP_ONGOING_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00105-startup-incubator-move-in-cost-guide-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00105-startup-incubator-move-in-cost-guide-hero.jpg",
  paragraphs: [
    "창업보육센터는 창업기업에 사무 공간과 장비를 싸게 내주고 경영·기술 지원을 함께 하는 곳입니다. 중소벤처기업부가 지정하는 창업보육센터는 창업기업 10곳 이상이 쓸 수 있는 500제곱미터 이상의 공간과 전문인력 2명 이상을 갖춰야 합니다.",
    "입주 비용은 센터마다 다릅니다. 2026년 11월 공고 기준으로 공용석은 월 3만 3천 원에서 6만 원 사이였고, 서울창업허브 창동은 면적당 월 5,350원(VAT 별도)을 받았습니다.",
    "예비창업자도 들어갈 수 있는 센터가 많습니다. 다만 입주 뒤 1~3개월 안에 사업장을 센터 주소로 등록하라고 요구하는 곳이 있습니다.",
    "신청 전에는 다른 공공 창업공간에 지금 입주해 있는지, 예전에 입주한 이력이 있는지, 대표자가 직장 건강보험에 가입되어 있는지부터 확인해야 합니다.",
    "입주 기간은 보통 1년 계약에 평가를 거쳐 연장하는 방식이고, 공고에 따라 최대 3~4년까지 머물 수 있습니다.",
    "공고는 K-Startup 사업공고의 시설·공간·보육 분야에서 모아 볼 수 있습니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>창업보육센터 입주</strong> 비용은 생각보다 낮습니다. 2026년 11월 K-Startup에 올라온 공고를 보면 공용석은 <strong>월 3만 3천~6만 원</strong> 수준이었고, 예비창업자를 받는 센터도 여럿이었습니다. 대신 돈보다 먼저 걸리는 조건이 있습니다. 지금 다른 창업공간에 있는지, 예전에 입주한 적이 있는지, 대표가 회사에 다니고 있는지입니다.</p>
  <p>아래에서는 창업보육센터가 무엇을 주는 곳인지, 실제 공고 네 곳의 비용과 기간, 신청 전에 걸러야 할 조건, 공고를 찾는 곳까지 차례로 정리했습니다.</p>

  <h2>창업보육센터는 무엇을 주는 곳인가</h2>
  <p>「<a href="${STARTUP_ACT_URL}" target="_blank" rel="noopener noreferrer">중소기업창업 지원법</a>」 제53조는 창업보육센터를 창업기업에 시설과 장소를 제공하고 경영·기술 분야를 지원하는 사업장으로 정의합니다. 이 법에 따라 지정을 받으려면 다음을 갖춰야 합니다.</p>
  <ul>
    <li>창업기업 <strong>10곳 이상</strong>이 쓸 수 있는 <strong>500제곱미터 이상</strong>의 장소</li>
    <li>창업기업이 쓸 수 있는 시험기기·계측기기 같은 장비</li>
    <li>경영학 박사, 변호사 등 전문인력 <strong>2명 이상</strong></li>
  </ul>
  <p>같은 조항은 국가와 지방자치단체가 입주자의 국유·공유재산 사용료를 감면할 수 있다고 정합니다. 시세보다 낮은 이용료가 가능한 이유입니다. 실제로 받는 것은 센터마다 다릅니다. 이번에 본 공고들은 공간과 함께 교육·멘토링 프로그램을 내걸었고, 사업화 자금을 주는 곳은 드물었습니다.</p>
  <p>K-Startup의 공고 분류에서는 창업보육센터 외에 1인 창조기업 지원센터, 청년창업지원센터, 창업허브 같은 시설도 같은 '시설·공간·보육' 분야로 묶입니다. 이름은 달라도 신청 방식과 조건은 비슷합니다.</p>

  <h2>입주 비용과 기간, 공고 네 곳 비교</h2>
  <p>2026년 11월 23일 K-Startup에서 확인한 공고입니다. 접수가 끝난 뒤에도 비용과 조건이 어느 정도인지 가늠하는 기준으로 쓸 수 있도록 정리했습니다.</p>
  <table>
    <thead>
      <tr>
        <th>센터</th>
        <th>월 이용료</th>
        <th>입주 기간</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="${GYEONGGI_WOMEN_BI_URL}" target="_blank" rel="noopener noreferrer"><strong>경기도여성창업보육센터</strong></a><br>공용실(약 1평)</td>
        <td>33,000원(VAT 포함)<br>보증금 9만 원, 퇴소 때 반환</td>
        <td>1년, 평가로 최대 3년</td>
      </tr>
      <tr>
        <td><a href="${SONGPA_ICT_URL}" target="_blank" rel="noopener noreferrer"><strong>송파ICT청년창업지원센터</strong></a></td>
        <td>개방 사무실 1인 4만 원<br>개별 사무실 1인 6만 원</td>
        <td>12개월</td>
      </tr>
      <tr>
        <td><a href="${INCHEON_ONE_PERSON_URL}" target="_blank" rel="noopener noreferrer"><strong>인천 1인 창조기업 지원센터</strong></a></td>
        <td>공동형 55,000원</td>
        <td>매년 연장평가, 최대 36개월</td>
      </tr>
      <tr>
        <td><a href="${SEOUL_HUB_CHANGDONG_URL}" target="_blank" rel="noopener noreferrer"><strong>서울창업허브 창동</strong></a><br>6~10인실</td>
        <td>㎡당 5,350원(VAT 별도)<br>관리비 없음</td>
        <td>24개월, 연장평가로 최대 2년 더</td>
      </tr>
    </tbody>
  </table>
  <p>1~2인 팀이라면 공용석이나 개방형 좌석이 월 3~6만 원대입니다. 서울창업허브 창동처럼 방 단위로 내주는 곳은 면적에 따라 요금이 정해지고, 4대보험 가입자명부의 인원으로 방 크기를 배정한다고 적혀 있습니다. 6인실 이상이라 팀이 어느 정도 갖춰진 기업에 맞습니다.</p>

  <h2>예비창업자도 입주할 수 있나</h2>
  <p>네 곳 가운데 세 곳이 예비창업자를 받았습니다. 대신 입주 뒤 사업자를 내라는 조건이 붙습니다.</p>
  <table>
    <thead>
      <tr>
        <th>센터</th>
        <th>예비창업자</th>
        <th>창업기업</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>송파ICT청년창업지원센터</td>
        <td>가능. 입주 후 3개월 안에 센터 주소로 사업장 등록</td>
        <td>공고일 기준 창업 3년 이하, 입주 후 1개월 안에 사업장 이전. 만 39세 이하</td>
      </tr>
      <tr>
        <td>인천 1인 창조기업 지원센터</td>
        <td>가능(예비 1인 창조기업)</td>
        <td>창업 7년 이내 1인 창조기업</td>
      </tr>
      <tr>
        <td>경기도여성창업보육센터</td>
        <td>가능. 경기도에 주소를 둔 여성</td>
        <td>도내 창업 3년 이내 여성기업. 입주 후 주 사업장을 센터에 둠</td>
      </tr>
      <tr>
        <td>서울창업허브 창동</td>
        <td>공고 본문에 언급 없음</td>
        <td>창업 7년 이내(신산업 10년 이내)</td>
      </tr>
    </tbody>
  </table>
  <p>사업장 주소를 센터로 옮기는 조건은 생각보다 중요합니다. 지역 한정 지원사업은 사업장 소재지로 자격을 보기 때문에, 주소를 옮기면 신청할 수 있는 다른 공고가 달라질 수 있습니다. 입주를 결정하기 전에 지금 준비 중인 지원사업의 지역 조건과 맞는지 같이 확인하세요.</p>

  <h2>신청 전에 걸리는 조건 네 가지</h2>
  <p>입주 심사는 사업계획서를 읽기 전에 자격부터 거릅니다. 네 공고에서 공통으로 보이는 조건은 다음과 같습니다.</p>
  <ol>
    <li><strong>지금 다른 공공 창업공간에 입주해 있다.</strong> 서울창업허브 창동과 송파는 국가·지자체·공공기관의 사무공간 지원을 받는 중이면 신청할 수 없게 했습니다. 다만 새 입주일 전에 기존 지원이 끝나거나 중도 포기하면 신청할 수 있습니다. 서울창업허브 창동은 선정 뒤 서울시와 자치구의 다른 창업지원시설에 중복 입주할 수 없다고 적었습니다.</li>
    <li><strong>예전에 입주한 이력이 있다.</strong> 경기도여성창업보육센터는 다른 창업보육센터 입주 경력자를 제외했고, 서울창업허브 창동은 창업허브·서울AI허브 등 7대 거점시설 입주 이력이 있으면 받지 않았습니다. 대학 창업보육센터 이력도 해당하는지는 운영기관에 먼저 물어보세요.</li>
    <li><strong>대표가 직장 건강보험에 가입되어 있다.</strong> 인천 1인 창조기업 지원센터는 건강보험자격득실확인서상 직장가입자를 제외했습니다. 회사에 다니며 준비 중이라면 퇴사 시점과 함께 판단해야 합니다.</li>
    <li><strong>세금 체납이나 창업 제외 업종에 해당한다.</strong> 국세·지방세 체납, 금융기관 채무불이행, 유흥주점·사행업 같은 창업 제외 업종은 네 공고 대부분에서 제외 대상입니다.</li>
  </ol>

  <h2>평가에서 보는 것: 왜 이 센터인가</h2>
  <p>서류를 통과하면 대부분 발표나 면접이 있습니다. 경기도여성창업보육센터는 면접에서 사업 능력과 <strong>입주 적합성</strong>을 함께 보고, 송파는 입주기업 프로그램 참여를 필수로 하고 그 실적을 연장평가에 반영한다고 밝혔습니다.</p>
  <p>그래서 입주 신청서의 '입주 필요성'은 공간이 없다는 사정보다 센터에서 무엇을 하겠다는 계획으로 채우는 편이 낫습니다. 아래는 이해를 돕기 위한 가상의 예시입니다.</p>
  <blockquote>“지금은 대표와 개발자 2명이 카페와 자택을 오가며 일해 고객 인터뷰를 한 달에 세 번밖에 하지 못했습니다. 입주 후에는 센터 회의실에서 매주 고객 인터뷰를 하고, 센터의 지식재산권 멘토링을 받아 2027년 상반기까지 시제품 특허 출원을 마치겠습니다.”(가상의 예시)</blockquote>
  <p>팀 규모, 공간이 없어서 막힌 일, 입주 뒤 쓸 시설과 프로그램, 기한이 한 문단에 들어 있습니다. 공고에 적힌 센터 프로그램 이름을 그대로 가져오면 심사위원이 찾는 답과 바로 이어집니다.</p>

  <h2>입주 공고 찾는 곳과 준비 순서</h2>
  <p><a href="${KSTARTUP_ONGOING_URL}" target="_blank" rel="noopener noreferrer">K-Startup 사업공고</a>에서 지원분야를 '시설·공간·보육'으로 고르면 창업보육센터와 창업공간 공고를 한곳에서 볼 수 있습니다. 이번에 확인한 네 곳은 모두 2026년 11월에 접수를 시작했고, 그중 세 곳이 2027년 1월 입주분이었습니다. 다음 해 입주를 노린다면 가을부터 공고를 살펴보세요.</p>
  <ol>
    <li>지금 입주 중인 공간의 종료일, 과거 입주 이력, 4대보험 가입 상태를 적어 둡니다.</li>
    <li>공고의 신청 대상(예비·업력·나이·지역)과 제외 대상을 대조합니다.</li>
    <li>납세증명서, 4대보험 가입자명부처럼 발급 기간이 정해진 서류를 먼저 뗍니다. 송파는 4대보험 가입자명부를 3개월 안에 발급한 것으로 받습니다.</li>
    <li>입주신청서와 사업계획서를 공고 양식에 맞춰 씁니다. 서울창업허브 창동은 사업계획서나 IR 자료를 자유 양식으로 받았습니다.</li>
    <li>여러 곳에 붙을 경우를 대비해 우선순위를 정합니다. 중복 입주 제한이 있어 한 곳을 골라야 합니다.</li>
  </ol>

  <div class="dh-cta">
    <p>입주 공고마다 사업계획서 양식과 평가 항목이 다릅니다. 독스헌트에 공고문을 올리면 그 센터의 평가 방식과 프로그램에 맞춰 입주 필요성과 활용 계획 문단을 정리할 수 있습니다.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=startup-incubator-move-in-cost-guide&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 입주 사업계획서 쓰기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${STARTUP_ACT_URL}" target="_blank" rel="noopener noreferrer">국가법령정보센터, 중소기업창업 지원법 제53조 (2026.11.23 확인)</a></li>
      <li><a href="${SEOUL_HUB_CHANGDONG_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 2026년 하반기 서울창업허브 창동 입주기업 모집 (2026.11.23 확인)</a></li>
      <li><a href="${INCHEON_ONE_PERSON_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 2027년 1인 창조기업 지원센터 상반기 신규 입주기업 1차 모집 공고, 인천테크노파크 (2026.11.23 확인)</a></li>
      <li><a href="${GYEONGGI_WOMEN_BI_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 2027년 상반기 경기도여성창업보육센터 입주기업 모집 공고 (2026.11.23 확인)</a></li>
      <li><a href="${SONGPA_ICT_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 2027년 송파ICT청년창업지원센터 입주 모집 공고 (2026.11.23 확인)</a></li>
      <li><a href="${KSTARTUP_ONGOING_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 사업공고 모집중 목록 (2026.11.23 확인)</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

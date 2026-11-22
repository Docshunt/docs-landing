import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const KSTARTUP_ONGOING_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do";
const SEOUL_HUB_CHANGDONG_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=179813";
const INCHEON_ONE_PERSON_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=179748";
const GYEONGGI_WOMEN_BI_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=179839";
const SONGPA_ICT_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=179824";

export const post105 = {
  page: 1,
  index: 1,
  slug: "startup-incubator-move-in-december-2026",
  sourceUrl: "https://docshunt.ai/blog_detail/startup-incubator-move-in-december-2026",
  title: "창업보육센터 입주 신청, 사업계획서보다 먼저 걸리는 건 제외 대상입니다",
  titleLines: ["창업보육센터 입주 신청,", "사업계획서보다 먼저 걸리는 건", "제외 대상입니다"],
  description:
    "12월 초까지 마감하는 창업보육센터 입주 공고 4곳의 마감일, 이용료, 제외 대상, 제출 서류를 K-Startup 공식 공고 기준으로 비교했습니다. 사업계획서를 고치기 전에 신청 자격부터 걸러보세요.",
  seo: {
    mainKeyword: "창업보육센터 입주",
    supportKeywords: ["창업보육센터 입주 신청", "입주기업 모집 공고", "창업공간 지원"],
    searchIntent:
      "12월에 마감하는 창업보육센터·창업공간 입주 공고의 자격, 제외 대상, 제출 서류와 마감일을 비교하고 신청 전에 탈락 사유를 걸러내고 싶다",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.11.22",
  modifiedDate: "2026.11.22",
  verification: {
    date: "2026.11.22",
    note: "마감일, 모집 규모, 입주 기간, 이용료, 신청 대상, 제외 대상, 제출 서류, 평가 방식은 2026년 11월 22일 K-Startup에 게시된 각 기관의 모집 공고 본문으로 확인했습니다. 첨부 공고문(HWP·PDF)은 열어보지 않았으므로 신청 전에는 첨부 공고문과 운영기관 안내를 최종 기준으로 확인해야 합니다. 입주 필요성 문장은 이해를 돕기 위한 가상의 예시입니다.",
    sources: [
      { label: "K-Startup, 2026년 하반기 서울창업허브 창동 입주기업 모집", url: SEOUL_HUB_CHANGDONG_URL },
      { label: "K-Startup, 2027년 1인 창조기업 지원센터 상반기 신규 입주기업 1차 모집 공고(인천테크노파크)", url: INCHEON_ONE_PERSON_URL },
      { label: "K-Startup, 2027년 상반기 경기도여성창업보육센터 입주기업 모집 공고", url: GYEONGGI_WOMEN_BI_URL },
      { label: "K-Startup, 2027년 송파ICT청년창업지원센터 입주 모집 공고", url: SONGPA_ICT_URL },
      { label: "K-Startup, 사업공고 모집중 목록", url: KSTARTUP_ONGOING_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00105-startup-incubator-move-in-december-2026-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00105-startup-incubator-move-in-december-2026-hero.jpg",
  paragraphs: [
    "12월 초까지 마감하는 창업보육센터·창업공간 입주 공고가 K-Startup에 몰려 있습니다. 가장 빠른 서울창업허브 창동은 11월 30일 17시에 접수를 마감합니다.",
    "입주 공고는 사업계획서를 보기 전에 신청 자격과 제외 대상을 먼저 거릅니다. 지금 다른 공공 창업공간을 지원받고 있는지, 과거에 입주한 이력이 있는지, 대표자가 직장 건강보험에 가입되어 있는지부터 공고와 대조해야 합니다.",
    "서울창업허브 창동과 송파ICT청년창업지원센터는 공공기관의 사무공간 지원을 받는 중이면 신청할 수 없다고 밝혔습니다. 다만 입주 개시일 전에 지원 기간이 끝나거나 중도 포기한 경우는 신청할 수 있습니다.",
    "경기도여성창업보육센터는 다른 창업보육센터 입주 경력자를, 인천 1인 창조기업 지원센터는 건강보험자격득실확인서상 직장가입자를 제외 대상으로 적었습니다.",
    "제출 서류에서는 국세·지방세 납세증명서, 4대보험 가입자명부, 부가가치세 과세표준증명처럼 발급 시점과 기간이 정해진 서류를 먼저 챙기는 편이 안전합니다.",
    "입주 사업계획서에는 왜 공간이 필요한지보다 이 센터에서 무엇을 하고 어떤 프로그램에 참여할지를 적어야 입주 적합성 평가에 답할 수 있습니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p>12월 첫 주까지 마감하는 <strong>창업보육센터 입주</strong> 공고가 K-Startup에 몰려 있습니다. 가장 빠른 <a href="${SEOUL_HUB_CHANGDONG_URL}" target="_blank" rel="noopener noreferrer">서울창업허브 창동</a>은 <strong>11월 30일(월) 17시</strong>에 접수를 마감합니다.</p>
  <p>입주 신청을 준비할 때 사업계획서부터 다듬는 분이 많습니다. 그런데 공고를 나란히 놓고 보면 심사위원이 계획서를 읽기 전에 걸러지는 조건이 따로 있습니다. 지금 다른 창업공간을 지원받고 있는지, 예전에 입주한 적이 있는지, 대표자가 직장 건강보험에 가입되어 있는지입니다.</p>

  <div class="dh-note"><p><strong>확인 기준</strong><br>아래 내용은 2026년 11월 22일 K-Startup에 게시된 각 기관의 공고 본문을 기준으로 정리했습니다. 공고마다 일정은 운영기관 사정으로 바뀔 수 있다고 적혀 있으니, 신청 전에는 첨부 공고문과 운영기관 안내를 최종 기준으로 확인하세요.</p></div>

  <h2>12월 초까지 마감하는 입주 공고 4곳</h2>
  <p>K-Startup 모집중 목록에서 시설·공간·보육 분야 공고 가운데 신청 대상이 넓고 마감이 가까운 네 곳을 골랐습니다.</p>
  <table>
    <thead>
      <tr>
        <th>공고</th>
        <th>마감</th>
        <th>신청 대상</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="${SEOUL_HUB_CHANGDONG_URL}" target="_blank" rel="noopener noreferrer"><strong>서울창업허브 창동</strong></a><br>4개사 내외</td>
        <td>11.30(월) 17:00<br>온라인 접수</td>
        <td>창업 7년 이내(신산업 분야 10년 이내)</td>
      </tr>
      <tr>
        <td><a href="${INCHEON_ONE_PERSON_URL}" target="_blank" rel="noopener noreferrer"><strong>인천 1인 창조기업 지원센터</strong></a><br>10개사 내외</td>
        <td>12.4(금) 18:00<br>이메일 접수</td>
        <td>예비창업자, 창업 7년 이내 1인 창조기업</td>
      </tr>
      <tr>
        <td><a href="${GYEONGGI_WOMEN_BI_URL}" target="_blank" rel="noopener noreferrer"><strong>경기도여성창업보육센터</strong></a><br>4개사(공용실)</td>
        <td>12.4(금) 15:00<br>온라인 접수</td>
        <td>경기도 거주 여성 예비창업자, 도내 창업 3년 이내 여성기업</td>
      </tr>
      <tr>
        <td><a href="${SONGPA_ICT_URL}" target="_blank" rel="noopener noreferrer"><strong>송파ICT청년창업지원센터</strong></a><br>ICT·AI·빅데이터 등</td>
        <td>12.13(일) 23:00<br>온라인 접수</td>
        <td>만 39세 이하, 예비창업자 또는 창업 3년 이하</td>
      </tr>
    </tbody>
  </table>
  <p>입주 기간과 이용료도 곳마다 다릅니다.</p>
  <table>
    <thead>
      <tr>
        <th>공고</th>
        <th>입주 기간</th>
        <th>월 이용료</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>서울창업허브 창동</td>
        <td>2026.12.14부터 24개월(예정)</td>
        <td>㎡당 5,350원(VAT 별도)</td>
      </tr>
      <tr>
        <td>인천 1인 창조기업 지원센터</td>
        <td>2027년 1년, 매년 연장평가</td>
        <td>공동형 55,000원</td>
      </tr>
      <tr>
        <td>경기도여성창업보육센터</td>
        <td>2027년 1년, 평가로 최대 3년</td>
        <td>33,000원, 보증금 9만 원</td>
      </tr>
      <tr>
        <td>송파ICT청년창업지원센터</td>
        <td>2027년 1월부터 12개월</td>
        <td>1인당 개별 6만 원, 개방 4만 원</td>
      </tr>
    </tbody>
  </table>
  <p>경기도여성창업보육센터는 마감 시각이 <strong>15시</strong>라 같은 날 18시에 닫는 인천보다 세 시간 이릅니다. 두 곳을 함께 낸다면 경기 쪽 서류부터 마무리하세요.</p>

  <h2>사업계획서보다 먼저 확인할 제외 대상</h2>
  <p>네 공고의 제외 대상은 문구가 조금씩 다르지만 크게 네 가지로 묶입니다. 하나라도 해당하면 계획서가 좋아도 신청 자체가 어렵습니다. <a href="${GYEONGGI_WOMEN_BI_URL}" target="_blank" rel="noopener noreferrer">경기도여성창업보육센터 공고</a>는 결격 사유가 확인되면 합격이 취소될 수 있다고도 적었습니다.</p>

  <h3>1. 지금 다른 공공 창업공간을 지원받고 있다</h3>
  <p><a href="${SEOUL_HUB_CHANGDONG_URL}" target="_blank" rel="noopener noreferrer">서울창업허브 창동</a>과 <a href="${SONGPA_ICT_URL}" target="_blank" rel="noopener noreferrer">송파ICT청년창업지원센터</a>는 국가·지자체·공공기관의 사무공간 지원을 받고 있는 경우를 제외했습니다. 두 곳 모두 입주 개시일 전에 지원 기간이 끝나거나 중도 포기했다면 신청할 수 있다고 덧붙였습니다. 지금 다른 센터에 있다면 그곳의 종료일이 새 입주 개시일보다 앞서는지부터 확인하세요.</p>
  <p>서울창업허브 창동은 최종 선정 뒤에도 서울창업허브와 서울시·자치구의 다른 창업지원시설에 중복 입주할 수 없다고 밝혔습니다. 본점과 지점이 모두 포함됩니다.</p>

  <h3>2. 예전에 입주한 이력이 있다</h3>
  <p>서울창업허브 창동은 창업허브 공덕·M+·창동·성수, 핀테크랩, 서울AI허브, 바이오허브 등 7대 거점시설에 입주한 이력이 있으면 신청할 수 없고, 서울 캠퍼스타운 이력도 유의하라고 적었습니다. 경기도여성창업보육센터는 다른 창업보육센터 입주 경력자를 제외 대상으로 두었습니다. 대학 창업보육센터에 잠깐 있었던 기록도 해당하는지 운영기관에 먼저 물어보는 편이 안전합니다.</p>

  <h3>3. 대표자가 직장 건강보험에 가입되어 있다</h3>
  <p><a href="${INCHEON_ONE_PERSON_URL}" target="_blank" rel="noopener noreferrer">인천 1인 창조기업 지원센터</a>는 건강보험자격득실확인서상 직장가입자를 제외 대상으로 적었습니다. 회사에 다니면서 창업을 준비하는 예비창업자라면 이 공고는 퇴사 시점과 함께 판단해야 합니다.</p>

  <h3>4. 체납·채무불이행, 제외 업종에 해당한다</h3>
  <p>서울창업허브 창동과 송파ICT청년창업지원센터는 국세·지방세 체납이나 금융기관 채무불이행으로 규제 중인 경우를 제외했고, 세 곳이 「중소기업창업지원법 시행령」 제4조의 창업 제외 업종을 명시했습니다. 송파는 소음·진동·폐수·악취가 나는 업종도 받지 않습니다.</p>
  <p>입주 뒤의 의무도 미리 봐둘 만합니다. 송파는 기창업자에게 입주 후 1개월 안에 사업장을 센터로 옮기고, 예비창업자에게는 3개월 안에 센터 주소로 사업장을 등록하라고 요구합니다. 경기도여성창업보육센터도 입주 후 주 사업장을 센터에 두어야 합니다.</p>

  <h2>제출 서류는 발급 날짜가 걸리는 것부터</h2>
  <p>입주신청서와 사업계획서는 밤을 새워서라도 쓸 수 있지만, 발급 기간이 정해진 서류는 마감 날 손을 쓰기 어렵습니다.</p>
  <ul>
    <li><strong>납세증명서:</strong> 서울창업허브 창동과 송파는 국세·지방세 납세증명서를 각각 요구합니다.</li>
    <li><strong>4대보험 가입자명부:</strong> 송파는 3개월 내 발급분, 인천은 2026년 11월 이후 발급한 건강보험자격득실확인서를 함께 내야 합니다. 서울창업허브 창동은 이 명부를 기준으로 입주 공간 크기를 배정합니다.</li>
    <li><strong>부가가치세 과세표준증명:</strong> 송파는 기창업자에게 2025년 1분기부터 2026년 3분기까지의 증명을 요구합니다.</li>
    <li><strong>파일 형식:</strong> 송파는 모든 서류를 '기업명_대표자명' zip 파일 하나로 묶어 올리고, 사업자등록증은 반드시 PDF로 내라고 안내합니다. 주민등록등본은 주민등록번호 뒷자리와 과거 주소 변동을 표기하지 않은 것이어야 합니다.</li>
  </ul>
  <p>사업계획서 양식도 다릅니다. 서울창업허브 창동은 사업계획서나 IR 자료를 자유 양식으로 받고, 나머지 세 곳은 각 기관이 내려받게 한 입주신청서·사업계획서 양식을 씁니다.</p>

  <h2>입주 사업계획서에서 고칠 문장 하나</h2>
  <p>입주 심사는 사업 아이템만 보지 않습니다. 경기도여성창업보육센터는 2차 면접에서 사업능력과 <strong>입주 적합성</strong>을 종합 평가하고, 송파는 입주기업 프로그램 참여가 필수이며 참여 실적을 연장평가에 반영한다고 밝혔습니다. 서울창업허브 창동은 발표평가 고득점자에게 공간을 우선 배정하고, 뉴미디어·창조산업 분야에는 서면평가 가점 3점을 줍니다.</p>
  <p>그래서 입주 필요성 문단은 '공간이 필요하다'가 아니라 '이 센터에서 무엇을 하겠다'로 써야 합니다. 아래는 이해를 돕기 위한 가상의 예시입니다.</p>
  <blockquote><strong>고치기 전</strong><br>“사무 공간이 없어 업무에 어려움이 있어 입주를 신청합니다.”</blockquote>
  <blockquote><strong>고친 뒤(가상의 예시)</strong><br>“현재 대표와 개발자 2명이 카페와 자택을 오가며 일해 고객 인터뷰를 한 달에 3회밖에 진행하지 못했습니다. 입주 후에는 센터 회의실에서 매주 고객 인터뷰를 진행하고, 지식재산권·투자유치 멘토링을 통해 2027년 상반기까지 시제품 특허 출원을 마치겠습니다.”</blockquote>
  <p>고친 문장에는 지금 팀 규모, 공간이 없어 막힌 일, 입주 뒤 쓸 시설과 프로그램, 기한이 들어 있습니다. 센터가 제공한다고 공고에 적은 프로그램 이름을 그대로 가져와 연결하면 입주 적합성 질문에 직접 답하게 됩니다.</p>

  <h2>입주 공고가 맞지 않는 경우</h2>
  <p>당장 필요한 것이 사업화 자금이라면 입주 공고는 우선순위가 아닐 수 있습니다. 네 공고 모두 공간과 교육·멘토링이 중심이고, 경기도여성창업보육센터가 시제품 제작·홍보마케팅 사업화지원금을 언급했지만 금액은 본문에 적지 않았습니다. 또 서울창업허브 창동처럼 선정 기업이 4개사 안팎인 곳은 경쟁이 좁을 수 있으니, 조건이 맞는 공고 두세 곳을 함께 준비하는 편이 현실적입니다.</p>
  <p>다만 여러 곳에 동시에 붙으면 중복 입주 제한에 걸릴 수 있습니다. 어느 센터를 우선할지 미리 정해두고, 선정 통보가 오면 다른 곳은 빠르게 포기 의사를 밝히세요.</p>

  <div class="dh-cta">
    <p>제외 대상을 확인했다면 이제 입주 사업계획서입니다. 공고문을 올리면 평가 방식과 센터 프로그램에 맞춰 입주 필요성과 활용 계획 문단을 정리할 수 있습니다.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=startup-incubator-move-in-december-2026&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 입주 사업계획서 쓰기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${SEOUL_HUB_CHANGDONG_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 2026년 하반기 서울창업허브 창동 입주기업 모집 (2026.11.22 확인)</a></li>
      <li><a href="${INCHEON_ONE_PERSON_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 2027년 1인 창조기업 지원센터 상반기 신규 입주기업 1차 모집 공고, 인천테크노파크 (2026.11.22 확인)</a></li>
      <li><a href="${GYEONGGI_WOMEN_BI_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 2027년 상반기 경기도여성창업보육센터 입주기업 모집 공고 (2026.11.22 확인)</a></li>
      <li><a href="${SONGPA_ICT_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 2027년 송파ICT청년창업지원센터 입주 모집 공고 (2026.11.22 확인)</a></li>
      <li><a href="${KSTARTUP_ONGOING_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 사업공고 모집중 목록 (2026.11.22 확인)</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const NEXTONE_14_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=179818";
const EARLY_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1065015&cbIdx=310";
const PRE_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";
const SEOUL_HUB_CHANGDONG_URL = "https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do?schM=view&pbancSn=179813";

export const post106 = {
  page: 1,
  index: 1,
  slug: "startup-ir-deck-structure",
  sourceUrl: "https://docshunt.ai/blog_detail/startup-ir-deck-structure",
  title: "IR 자료 구조, 심사위원이 찾는 순서대로 20쪽 짜는 법",
  titleLines: ["IR 자료 구조,", "심사위원이 찾는 순서대로", "20쪽 짜는 법"],
  titleLineBreaks: "always",
  description:
    "IR 자료 구조는 회사 소개 순서가 아니라 심사 기준에 답하는 순서로 짜야 합니다. 정부 창업지원사업과 산업은행 넥스트원 공고가 요구한 필수 항목을 비교하고 20쪽 장표 배치 예시를 정리했습니다.",
  seo: {
    mainKeyword: "IR 자료 구조",
    supportKeywords: ["IR 자료 잘 쓰는 법", "IR 자료 목차", "스타트업 IR 자료"],
    searchIntent:
      "지원사업이나 액셀러레이팅 프로그램에 낼 IR 자료를 몇 쪽으로 어떤 순서로 만들어야 하는지, 심사에서 어떤 항목을 반드시 넣어야 하는지 알고 싶다",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.11.23",
  modifiedDate: "2026.11.23",
  verification: {
    date: "2026.11.23",
    note: "IR 자료 필수 기재사항 여섯 가지, 평가기준 세 가지, 20쪽 내외 PDF 제출과 구술심사 발표자료 사용은 2026년 11월 23일 K-Startup에 게시된 KDB NextONE 14기 공고 본문과 첨부 모집공고문으로 확인했습니다. 문제인식·실현가능성·성장전략·팀 구성 평가항목과 발표평가 시간은 2026년 초기창업패키지(일반형) 모집공고와 2026년 예비창업패키지 수정 공고(2차)의 첨부 공고문에서, 자유 양식 IR 자료 접수는 서울창업허브 창동 입주기업 모집 공고 본문에서 확인했습니다. 20쪽 장표 배치와 문장 예시는 공고 항목을 바탕으로 한 편집부의 예시입니다.",
    sources: [
      { label: "K-Startup, 2027년 상반기 KDB NextONE 14기 스타트업 모집(첨부 모집공고문 포함)", url: NEXTONE_14_URL },
      { label: "중소벤처기업부, 2026년 초기창업패키지(일반형) 창업기업 모집공고", url: EARLY_NOTICE_URL },
      { label: "중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)", url: PRE_NOTICE_URL },
      { label: "K-Startup, 2026년 하반기 서울창업허브 창동 입주기업 모집", url: SEOUL_HUB_CHANGDONG_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00106-startup-ir-deck-structure-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00106-startup-ir-deck-structure-hero.jpg",
  paragraphs: [
    "IR 자료는 회사를 소개하는 순서가 아니라 심사위원이 채점하는 순서대로 짜야 합니다. 공공 창업지원 프로그램은 공고에 평가 항목과 필수 기재사항을 미리 적어 둡니다.",
    "산업은행의 KDB 넥스트원 14기 공고는 IR 자료를 20쪽 내외 PDF로 받고, 기업 비전·창업팀, 문제인식·솔루션·제품, 핵심기술·BM의 경쟁력, 경쟁사와 대체제, 시장 규모와 진출 전략, 수익모델과 로드맵 여섯 가지를 반드시 넣으라고 했습니다.",
    "예비·초기창업패키지는 문제인식, 실현가능성, 성장전략, 팀 구성 네 항목으로 서류와 발표를 평가합니다. 초기창업패키지 발표평가는 발표 15~20분과 질의응답을 합쳐 30분 이내였습니다.",
    "20쪽이라면 문제와 고객 4쪽, 솔루션과 실현 방법 5쪽, 시장과 경쟁 4쪽, 수익모델과 로드맵 4쪽, 팀 2쪽, 요청 사항 1쪽 정도로 나누면 평가 항목마다 답할 자리가 생깁니다.",
    "가장 자주 비는 장표는 경쟁사와 대체제입니다. 경쟁사가 없다고 쓰기보다 고객이 지금 쓰는 대체 수단과 기존 서비스가 그 고객을 놓치는 이유를 적어야 합니다.",
    "넥스트원처럼 제출한 PDF를 그대로 발표자료로 쓰는 프로그램도 있으니, 읽는 문서와 넘기는 슬라이드 양쪽에서 통하도록 만들어야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>IR 자료 구조</strong>는 회사 소개 순서가 아니라 심사위원이 채점하는 순서를 따라야 합니다. 정부 창업지원사업이나 공공 액셀러레이팅 프로그램은 공고문에 평가 항목과 필수 기재사항을 미리 적어 둡니다. 그 항목마다 답이 있는 장표를 하나씩 배치하면 20쪽 안에서 빠뜨리는 것이 없습니다.</p>
  <p>아래에서는 실제 공고 세 곳이 IR 자료와 발표에 무엇을 요구했는지 비교하고, 그 요구를 20쪽에 나눠 담는 예시와 가장 자주 비는 장표를 채우는 방법을 정리했습니다.</p>

  <h2>공고가 정해 둔 IR 자료의 필수 항목</h2>
  <table>
    <thead>
      <tr>
        <th>프로그램</th>
        <th>제출 형식</th>
        <th>평가·필수 항목</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="${NEXTONE_14_URL}" target="_blank" rel="noopener noreferrer"><strong>KDB 넥스트원 14기</strong></a><br>산업은행</td>
        <td>IR 자료 20쪽 내외 PDF, 구술심사 발표자료로 그대로 사용</td>
        <td>필수 기재사항 6개: 기업 비전·창업팀 / 문제인식·솔루션·제품 / 핵심기술·BM의 경쟁력·구체성 / 경쟁사와 대체제 / 시장 규모와 진출 전략 / 수익모델과 로드맵</td>
      </tr>
      <tr>
        <td><a href="${EARLY_NOTICE_URL}" target="_blank" rel="noopener noreferrer"><strong>초기창업패키지</strong></a>(2026)</td>
        <td>공고 양식 사업계획서, 발표평가 30분 이내(발표 15~20분 + 질의응답)</td>
        <td>문제인식 / 실현가능성 / 성장전략 / 팀(기업) 구성</td>
      </tr>
      <tr>
        <td><a href="${PRE_NOTICE_URL}" target="_blank" rel="noopener noreferrer"><strong>예비창업패키지</strong></a>(2026)</td>
        <td>공고 양식 사업계획서, 발표평가</td>
        <td>문제인식 / 실현가능성 / 성장전략 / 팀(기업) 구성</td>
      </tr>
    </tbody>
  </table>
  <p>넥스트원은 평가기준을 대표이사·기업 역량, 비즈니스모델 경쟁력, 비즈니스모델 시장성 세 가지로 두었습니다. 예비·초기창업패키지의 네 항목과 이름은 달라도 묻는 것은 같습니다. 왜 이 문제인지, 정말 만들 수 있는지, 돈을 벌 수 있는지, 이 팀이 해낼 수 있는지입니다. <a href="${SEOUL_HUB_CHANGDONG_URL}" target="_blank" rel="noopener noreferrer">서울창업허브 창동 입주 공고</a>처럼 사업계획서 대신 IR 자료를 자유 양식으로 받는 곳도 있어서, 이 네 질문에 답하는 덱 하나를 만들어 두면 여러 공고에 고쳐 쓸 수 있습니다.</p>

  <h2>20쪽 배치 예시</h2>
  <p>아래는 공고의 항목을 20쪽에 나눠 본 편집부의 예시입니다. 쪽수는 사업 단계에 따라 조정하되, 각 평가 항목에 답하는 장표가 최소 한 장씩은 있어야 합니다.</p>
  <table>
    <thead>
      <tr>
        <th>쪽</th>
        <th>장표</th>
        <th>답하는 평가 항목</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>표지: 회사명과 한 줄 정의(누구의 어떤 문제를 어떻게 푸는지)</td>
        <td>-</td>
      </tr>
      <tr>
        <td>2~4</td>
        <td>문제와 고객: 누가, 얼마나 자주, 지금 어떻게 해결하고 있는지</td>
        <td>문제인식</td>
      </tr>
      <tr>
        <td>5~7</td>
        <td>솔루션과 제품: 화면이나 시제품 사진, 핵심 기능 세 가지</td>
        <td>문제인식, 실현가능성</td>
      </tr>
      <tr>
        <td>8~9</td>
        <td>실현 방법: 핵심 기술, 개발 현황, 사업 기간 안의 일정</td>
        <td>실현가능성</td>
      </tr>
      <tr>
        <td>10~11</td>
        <td>경쟁사와 대체제: 고객이 지금 쓰는 방법과 우리가 이기는 지점</td>
        <td>실현가능성(경쟁력)</td>
      </tr>
      <tr>
        <td>12~13</td>
        <td>시장 규모와 첫 고객: 처음 공략할 고객 수와 근거</td>
        <td>성장전략</td>
      </tr>
      <tr>
        <td>14~15</td>
        <td>수익모델: 누가 얼마를 왜 내는지, 지금까지의 매출·계약·검증 지표</td>
        <td>성장전략</td>
      </tr>
      <tr>
        <td>16~17</td>
        <td>로드맵과 자금 계획: 1년 안의 마일스톤, 필요한 돈과 쓰는 곳</td>
        <td>성장전략</td>
      </tr>
      <tr>
        <td>18~19</td>
        <td>팀: 대표와 핵심 인력이 이 문제를 풀 수 있는 이유, 채용 계획</td>
        <td>팀 구성</td>
      </tr>
      <tr>
        <td>20</td>
        <td>요청과 연락처: 이 프로그램에서 받고 싶은 것</td>
        <td>-</td>
      </tr>
    </tbody>
  </table>
  <p>시장 규모 장표는 큰 숫자보다 첫 고객을 세는 방식이 중요합니다. 자세한 계산법은 <a href="/blog_detail/business-plan-market-size-tam-sam-som">사업계획서 시장규모 글</a>에, 팀 장표를 역할 중심으로 쓰는 방법은 <a href="/blog_detail/business-plan-team-role-evidence">사업계획서 팀 구성 글</a>에 정리해 두었습니다.</p>

  <h2>가장 자주 비는 장표: 경쟁사와 대체제</h2>
  <p>넥스트원 공고는 '경쟁사와 대체제'를 필수 항목으로 따로 적었습니다. "직접적인 경쟁사는 없다"는 한 줄로는 공고가 따로 요구한 이 항목에 답했다고 보기 어렵습니다. 경쟁사가 없어도 고객은 어떤 식으로든 그 문제를 지금 처리하고 있기 때문입니다.</p>
  <p>이 장표에는 세 가지가 들어가면 됩니다.</p>
  <ul>
    <li><strong>고객이 지금 쓰는 대체 수단:</strong> 엑셀, 전화, 외주, 아무것도 안 함까지 포함합니다.</li>
    <li><strong>비슷한 서비스가 이 고객을 놓치는 이유:</strong> 가격, 규모, 기능, 지역처럼 확인할 수 있는 이유를 씁니다.</li>
    <li><strong>우리 쪽 근거:</strong> 시범 고객 수, 인터뷰 결과, 줄어든 시간처럼 숫자로 보여줄 수 있는 것을 넣습니다.</li>
  </ul>
  <p>예를 들어 B2B 부품 견적 서비스라면 이렇게 쓸 수 있습니다(가상의 예시): “중소 제조사 구매 담당자는 지금 엑셀 견적표와 전화로 단가를 비교합니다. 같은 기능을 일부 제공하는 B2B 구매 플랫폼 두 곳은 대기업 계약 중심이라 월 거래액 1억 원 미만 고객을 받지 않습니다. 저희는 이 구간 고객 30곳과 시범 계약을 맺었습니다.” 비교표 한 장에 고객, 대체 수단, 기존 서비스, 우리를 나란히 놓으면 발표 때도 한눈에 읽힙니다.</p>

  <h2>읽는 문서와 넘기는 슬라이드, 둘 다 통하게</h2>
  <p>넥스트원 공고는 서류로 낸 IR PDF를 구술심사 발표자료로 그대로 쓴다고 밝혔습니다. 서류 심사위원이 혼자 읽어도 이해되고, 대표가 넘기며 말할 때도 군더더기가 없어야 한다는 뜻입니다.</p>
  <ul>
    <li><strong>장표 제목을 문장으로:</strong> '시장 분석' 대신 '첫해 목표 고객은 수도권 중소 제조사 1,200곳'처럼 결론을 제목에 씁니다. 읽는 사람은 제목만 넘겨도 줄거리를 따라갈 수 있습니다.</li>
    <li><strong>한 장에 메시지 하나:</strong> 발표 15~20분이면 장표 하나에 1분 남짓입니다. 한 장에 두 가지를 말하려 하면 시간이 모자랍니다.</li>
    <li><strong>숫자는 출처와 함께:</strong> 시장 규모나 고객 수에는 작은 글씨로 출처를 답니다.</li>
    <li><strong>질의응답용 부록:</strong> 20쪽 뒤에 상세 재무, 기술 설명, 고객 인터뷰 원문을 부록으로 두면 질문이 나왔을 때 바로 펼칠 수 있습니다. 쪽수 제한이 부록까지 포함하는지는 공고를 확인하세요.</li>
  </ul>

  <h2>지금 IR 자료를 받는 공고: KDB 넥스트원 14기</h2>
  <p><a href="${NEXTONE_14_URL}" target="_blank" rel="noopener noreferrer">KDB 넥스트원 14기</a>는 <strong>2026년 12월 18일(금) 18시</strong>까지 넥스트원 온라인플랫폼에서 신청을 받습니다. 공고 마감일 기준 설립등기 7년 이내 <strong>법인만</strong> 지원할 수 있고 개인사업자는 신청할 수 없습니다. 부산 6기·광주 2기·대구 1기·전북 1기와 중복지원할 수 없고, IBK창공이나 신보 Start-up NEST와 같은 기간에 선정되면 하나를 골라야 합니다. 선발 규모는 15개사 내외, 운영기간은 2027년 2~6월입니다. 자격과 제출 서류는 첨부 공고문을 최종 기준으로 확인하세요.</p>

  <div class="dh-cta">
    <p>공고문과 지금 쓰고 있는 사업계획서를 독스헌트에 올리면, 공고가 요구한 평가 항목과 필수 기재사항이 빠짐없이 들어갔는지 확인하고 IR 장표 순서로 정리할 수 있습니다.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=startup-ir-deck-structure&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 IR 자료 점검하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${NEXTONE_14_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 2027년 상반기 KDB NextONE 14기 스타트업 모집(첨부 모집공고문 포함) (2026.11.23 확인)</a></li>
      <li><a href="${EARLY_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 초기창업패키지(일반형) 창업기업 모집공고 (2026.11.23 확인)</a></li>
      <li><a href="${PRE_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차) (2026.11.23 확인)</a></li>
      <li><a href="${SEOUL_HUB_CHANGDONG_URL}" target="_blank" rel="noopener noreferrer">K-Startup, 2026년 하반기 서울창업허브 창동 입주기업 모집 (2026.11.23 확인)</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

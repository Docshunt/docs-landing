import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const EARLY_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1065015&cbIdx=310";
const PRE_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";
const HOMETAX_URL = "https://www.hometax.go.kr";
const IROS_URL = "https://www.iros.go.kr";

export const post07 = {
  page: 1,
  index: 7,
  slug: "startup-support-application-documents-checklist",
  sourceUrl: "https://docshunt.ai/blog_detail/startup-support-application-documents-checklist",
  title: "창업지원사업 제출서류, 신청 때 내는 것과 서류평가 뒤에 내는 것",
  titleLines: ["창업지원사업 제출서류,", "신청 때 내는 것과", "서류평가 뒤에 내는 것"],
  titleLineBreaks: "always",
  description:
    "창업지원사업 제출서류는 신청 때 내는 사업계획서·신분 확인 서류와 서류평가 통과 뒤 요구되는 창업기업확인서·총사업자등록내역·폐업사실증명으로 나뉩니다. 2026년 예비·초기창업패키지 공고 기준으로 준비 시기와 기준일을 정리했습니다.",
  seo: {
    mainKeyword: "창업지원사업 제출서류",
    supportKeywords: ["창업기업확인서 발급 기간", "총사업자등록내역", "예비창업패키지 증빙서류", "초기창업패키지 제출서류"],
    searchIntent:
      "예비창업패키지·초기창업패키지 같은 창업지원사업에 신청할 때 어떤 서류를 언제 내야 하는지, 서류평가 통과 뒤 추가로 요구되는 증빙과 발급에 걸리는 시간을 미리 알고 싶다",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.05.07",
  modifiedDate: "2026.11.23",
  verification: {
    date: "2026.11.23",
    note: "신청 시 제출서류, 공공마이데이터 자동 제출, 파일 용량 제한, 가점 증빙 제출 시점, 서류평가 통과자 대상 증빙서류(창업기업확인서, 사실증명(총사업자등록내역), 사업자등록증명, 폐업사실증명, 등기사항전부증명서), 창업기업확인서 발급 기간(약 3주), 기준일, 협약체결확약서 제출 기한은 2026년 초기창업패키지(일반형) 모집공고와 2026년 예비창업패키지 수정 공고(2차)의 첨부 공고문에서 2026년 11월 23일에 확인했습니다. 두 공고는 접수가 끝난 지난 공고이며, 다음 공고의 서류 목록은 해당 공고문과 [별첨] 증빙서류 제출 목록으로 다시 확인해야 합니다. 국세청 홈택스와 대법원 인터넷등기소는 발급 창구 안내용 링크입니다.",
    sources: [
      { label: "중소벤처기업부, 2026년 초기창업패키지(일반형) 창업기업 모집공고", url: EARLY_NOTICE_URL },
      { label: "중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)", url: PRE_NOTICE_URL },
      { label: "국세청 홈택스", url: HOMETAX_URL },
      { label: "대법원 인터넷등기소", url: IROS_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00007-startup-documents-two-stage-checklist-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00007-startup-documents-two-stage-checklist-hero.jpg",
  paragraphs: [
    "창업지원사업 제출서류는 두 번에 나눠 냅니다. 신청할 때는 사업신청서, 사업계획서, 신분 확인 서류 정도를 내고, 창업기업인지 예비창업자인지 증명하는 서류는 서류평가를 통과한 뒤에 따로 요구받습니다.",
    "2026년 초기창업패키지는 신청 때 사업신청서(온라인 입력), 사업계획서(파일 첨부, 30MB), 신분 확인 서류와 사업자등록증명을 받았고, 뒤의 두 가지는 공공마이데이터에 동의하면 자동으로 제출됐습니다.",
    "서류평가 통과자에게는 창업기업확인서, 사실증명(총사업자등록내역), 사업자등록증명, 폐업사실증명, 등기사항전부증명서 등을 요구했습니다. 창업기업확인서는 발급에 약 3주가 걸린다고 공고에 적혀 있었습니다.",
    "가점 증빙은 사업마다 다릅니다. 2026년 예비창업패키지는 가점 증빙을 신청 때 내야 했고 내지 않으면 가점을 인정하지 않았습니다. 초기창업패키지의 가점 항목은 창업진흥원 확인이나 사업계획서 내용으로 확인해 따로 낼 서류가 없었습니다.",
    "기준일도 서류마다 다릅니다. 예비창업패키지의 사업자 보유 기준일은 2026년 1월 22일, 초기창업패키지의 업력은 모집공고일인 1월 23일 기준이었습니다.",
    "최종 선정 뒤에는 협약체결확약서를 요청일 다음 영업일부터 3일 안에 내야 했고, 기한을 넘기면 선정이 취소됐습니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p>창업지원사업 제출서류는 <strong>두 번에 나눠 냅니다.</strong> 신청할 때는 사업신청서, 사업계획서, 신분 확인 서류 정도만 내고, 내가 창업기업인지 예비창업자인지를 증명하는 서류는 <strong>서류평가를 통과한 뒤에</strong> 따로 요구받습니다. 2026년 예비창업패키지와 초기창업패키지 공고가 모두 이 순서였습니다.</p>
  <p>문제는 두 번째 묶음입니다. 서류평가 결과가 나온 뒤에 요구되는데, 그중 창업기업확인서는 발급에 약 3주가 걸린다고 공고에 적혀 있었습니다. 결과를 보고 나서 신청하면 늦을 수 있으니, 아래 표로 지금 무엇을 미리 떼어 둘지 정해 두세요. 아래 내용은 모두 2026년 공고 기준이며 두 공고 모두 접수가 끝났습니다.</p>

  <h2>신청할 때 내는 서류</h2>
  <table>
    <thead>
      <tr>
        <th>서류</th>
        <th>예비창업패키지</th>
        <th>초기창업패키지(일반형)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>사업신청서</td>
        <td>K-Startup에서 온라인 입력</td>
        <td>K-Startup에서 온라인 입력</td>
      </tr>
      <tr>
        <td>사업계획서</td>
        <td>공고 첨부 양식으로 작성해 파일 첨부</td>
        <td>공고 첨부 양식으로 작성해 파일 첨부(용량 30MB)</td>
      </tr>
      <tr>
        <td>신분·사업자 확인</td>
        <td>필수 증빙과 가점 증빙을 파일로 첨부하거나 공공마이데이터 동의로 자동 제출(30MB)</td>
        <td>신분 확인 서류, 사업자등록증명. 공공마이데이터에 동의하면 자동 제출, 동의하지 않으면 파일 첨부</td>
      </tr>
      <tr>
        <td>공동·각자대표</td>
        <td>-</td>
        <td>대표자 신분증과 동의서(해당할 때)</td>
      </tr>
    </tbody>
  </table>
  <p>출처: <a href="${PRE_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년 예비창업패키지 수정 공고(2차)</a>, <a href="${EARLY_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년 초기창업패키지(일반형) 공고</a>의 '제출서류' 항목.</p>
  <p>두 공고 모두 <strong>공고에 첨부된 사업계획서 양식이 아니면 평가 대상에서 제외</strong>한다고 적었습니다. 작년 양식이나 다른 사업 양식에 내용을 옮겨 쓰지 말고, 공고 첨부파일을 새로 받아 시작하세요.</p>
  <p>K-Startup 가입 때 실명 확인이 안 되는 사람(개명인, 외국인 등)은 서울신용평가정보(SCI)에 사전 실명등록을 해야 하고, 초기창업패키지 공고는 여기에 <strong>최대 3일</strong>이 걸릴 수 있다고 안내했습니다. 서류보다 먼저 막히는 곳이 가입 단계일 수 있습니다.</p>

  <h2>가점 증빙은 사업마다 내는 시점이 다릅니다</h2>
  <p>같은 해 같은 기관의 공고인데도 가점 증빙을 다루는 방식이 달랐습니다.</p>
  <ul>
    <li><strong>예비창업패키지:</strong> 인공지능(융합혁신) 대학원 졸업, 최근 2년 이내 장관급 이상 창업경진대회 수상 같은 가점은 <strong>신청할 때 증빙을 함께 내야</strong> 했고, 내지 않으면 가점으로 인정하지 않았습니다. 무엇을 내야 하는지는 공고의 [별첨 2] 증빙서류 제출 목록에 따로 있었습니다.</li>
    <li><strong>초기창업패키지:</strong> CES 혁신상, 기후테크 분야 같은 가점 항목은 '제출 불필요'로, 창업진흥원이 확인하거나 사업계획서 내용으로 확인했습니다.</li>
  </ul>
  <p>그러니 "가점은 나중에 내면 된다"는 생각은 위험합니다. 공고의 가점 표에서 '비고(제출서류 등)' 칸을 먼저 읽고, 증빙이 필요하다고 적혀 있으면 수상증이나 졸업증명서를 신청 파일과 같은 폴더에 넣어 두세요.</p>

  <h2>서류평가를 통과하면 요구되는 서류</h2>
  <p>두 공고 모두 서류평가 통과자에게 자격을 증명하는 서류를 따로 받아 검토하고, 자격에 맞지 않으면 발표평가나 협약 대상에서 뺀다고 적었습니다. 공고에 이름이 나온 서류는 아래와 같습니다.</p>
  <table>
    <thead>
      <tr>
        <th>서류</th>
        <th>무엇을 확인하나</th>
        <th>요구한 사업</th>
        <th>발급 창구</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>창업기업확인서</td>
        <td>창업기업 해당 여부와 창업 기준 충족일</td>
        <td>초기창업패키지</td>
        <td>중소벤처기업부 창업기업 확인 시스템(제출처는 통과자에게 별도 안내)</td>
      </tr>
      <tr>
        <td>사실증명(총사업자등록내역)</td>
        <td>지금까지 본인 명의로 낸 사업자 전체 이력</td>
        <td>두 사업 모두</td>
        <td rowspan="3"><a href="${HOMETAX_URL}" target="_blank" rel="noopener noreferrer">국세청 홈택스</a> 또는 세무서</td>
      </tr>
      <tr>
        <td>사업자등록증명</td>
        <td>현재 사업자의 개업일과 업종</td>
        <td>두 사업 모두</td>
      </tr>
      <tr>
        <td>폐업사실증명</td>
        <td>예전 사업자의 폐업일</td>
        <td>두 사업 모두(해당할 때)</td>
      </tr>
      <tr>
        <td>등기사항전부증명서</td>
        <td>법인 설립등기일과 대표권 여부</td>
        <td>두 사업 모두(해당할 때)</td>
        <td><a href="${IROS_URL}" target="_blank" rel="noopener noreferrer">대법원 인터넷등기소</a></td>
      </tr>
    </tbody>
  </table>
  <p>서류 이름과 요구 대상은 <a href="${EARLY_NOTICE_URL}" target="_blank" rel="noopener noreferrer">초기창업패키지 공고</a>와 <a href="${PRE_NOTICE_URL}" target="_blank" rel="noopener noreferrer">예비창업패키지 공고</a>의 '평가 방법' 항목에 적힌 그대로입니다. 공고는 목록 끝에 '등'을 붙였으니 통과 후 안내문에서 추가 서류가 나올 수 있습니다. '무엇을 확인하나' 칸은 각 서류에 적히는 내용을 바탕으로 독스헌트가 정리한 설명입니다.</p>
  <p>예비창업자라면 총사업자등록내역을 신청 전에 한 번 떼어 보길 권합니다. 오래전에 냈다가 잊은 사업자가 남아 있으면, 그 자체로 예비창업자 자격이 흔들릴 수 있습니다. 서류평가를 통과한 뒤에 알게 되면 고칠 방법이 없습니다.</p>

  <h2>창업기업확인서는 약 3주, 결과 발표 전에 신청하세요</h2>
  <p>2026년 초기창업패키지 공고는 창업기업확인서 발급이 필요한 기업은 <strong>발급 기간(약 3주)</strong>을 고려해 미리 준비하라고 적었습니다(<a href="${EARLY_NOTICE_URL}" target="_blank" rel="noopener noreferrer">공고 '평가 및 선정 절차'</a>). 같은 공고의 일정표에서 접수는 2월 13일에 끝났고 요건검토와 선정평가는 4월까지로 잡혀 있었습니다.</p>
  <p>또 하나 볼 문구가 있습니다. 공고는 창업기업확인서 서식에 적힌 <strong>창업 기준 충족일이 모집공고일(1월 23일) 이전</strong>이어야 한다고 했습니다. 공고일 당일은 포함됩니다. 확인서를 받으면 이 날짜부터 보세요.</p>
  <p>권하는 순서는 이렇습니다. 신청서를 내는 날 창업기업확인서 신청도 같이 해 두면, 서류평가 결과가 나올 즈음 확인서가 손에 있을 가능성이 높습니다. 업력 계산이 애매한 경우(개인사업자에서 법인 전환, 사업자 여러 개)는 확인서 결과가 곧 자격 판단이 되니 더 서두르세요. 업력 계산법은 <a href="/blog_detail/startup-business-age-criteria">창업 업력 기준 글</a>에 따로 정리해 두었습니다.</p>

  <h2>서류마다 보는 기준일이 다릅니다</h2>
  <p>같은 공고 안에서도 항목마다 기준일이 달랐습니다. 서류를 뗄 때 이 날짜에 맞는 상태가 나오는지 확인하세요.</p>
  <table>
    <thead>
      <tr>
        <th>사업</th>
        <th>항목</th>
        <th>기준일</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>예비창업패키지</td>
        <td>본인 명의 사업자등록증·법인 대표권이 없을 것</td>
        <td>2026년 1월 22일(23일 이후 등록은 신청 가능)</td>
      </tr>
      <tr>
        <td>예비창업패키지</td>
        <td>개인사업자 폐업·법인 해산 이력이 없을 것</td>
        <td>공고일 기준 최근 1개월(2026년 1월 28일~2월 27일)</td>
      </tr>
      <tr>
        <td>초기창업패키지</td>
        <td>창업 3년 이내 업력</td>
        <td>모집공고일(2026년 1월 23일). 개업일 2023년 1월 23일~2026년 1월 22일</td>
      </tr>
      <tr>
        <td>초기창업패키지</td>
        <td>채무불이행 제외 대상의 예외(채무 변제 완료 등)</td>
        <td>접수 마감일</td>
      </tr>
    </tbody>
  </table>
  <p>출처: <a href="${PRE_NOTICE_URL}" target="_blank" rel="noopener noreferrer">예비창업패키지 공고 '신청자격'</a>, <a href="${EARLY_NOTICE_URL}" target="_blank" rel="noopener noreferrer">초기창업패키지 공고 '신청자격'과 '신청 제외 대상'</a>.</p>
  <p>예를 들어 채무를 갚고 있는 대표라면, 초기창업패키지 기준으로는 마감일까지 변제 완료 증빙이 가능해야 예외로 인정됐습니다. 공고일에 맞춰 준비하면 되는 서류와 마감일까지 상태를 바꿔야 하는 서류를 나눠 적어 두세요.</p>

  <h2>최종 선정 뒤에는 3일 안에 확약서</h2>
  <p>두 사업 모두 최종(1단계) 선정 통보를 받으면 <strong>협약체결확약서를 요청일 다음 영업일부터 3일 안에(마지막 날 17시까지)</strong> 내야 했고, 기한을 넘기면 선정이 취소되고 차순위자에게 기회가 넘어갔습니다. 확약서를 내면 그 전에 신청한 창업진흥원의 다른 창업사업화 지원사업 선정 절차에서는 빠집니다. 여러 사업에 동시에 냈다면 어느 사업을 할지 미리 정해 두세요.</p>

  <h2>공고가 나오면 이 순서로 챙기세요</h2>
  <ol>
    <li><strong>공고 당일:</strong> 사업계획서 양식과 [별첨] 증빙서류 제출 목록을 내려받고, 가점 표의 '비고' 칸에서 신청 때 낼 증빙을 표시합니다.</li>
    <li><strong>첫 주:</strong> 총사업자등록내역을 떼어 사업자 이력을 확인하고, 초기창업 사업이면 창업기업확인서를 신청합니다. K-Startup 가입과 실명인증도 이때 끝냅니다.</li>
    <li><strong>마감 2~3일 전:</strong> 두 공고가 권장한 대로 미리 제출합니다. 공공마이데이터 동의 여부를 정하고, 동의하지 않으면 해당 서류 파일을 첨부합니다.</li>
    <li><strong>마감 전:</strong> '제출완료' 버튼까지 눌렀는지 확인합니다. 마감 뒤에는 사업계획서를 포함한 모든 내용을 고칠 수 없었습니다. 접수 확인 방법은 <a href="/blog_detail/k-startup-business-plan-submission-complete">K-Startup 제출 완료 확인 글</a>을 참고하세요.</li>
    <li><strong>서류평가 통과 뒤:</strong> 안내문에 적힌 서류를 기한 안에 냅니다. 미리 떼어 둔 서류는 발급일 조건이 있는지 안내문에서 확인합니다.</li>
  </ol>

  <div class="dh-cta">
    <p>서류 목록을 정리했다면 남은 일은 사업계획서입니다. 독스헌트에 공고문과 기업 정보를 넣으면 공고 양식과 평가 항목에 맞춰 사업계획서 초안을 정리할 수 있습니다.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=startup-support-application-documents-checklist&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 사업계획서 준비하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${EARLY_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 초기창업패키지(일반형) 창업기업 모집공고 (2026.1.23, 2026.11.23 확인)</a></li>
      <li><a href="${PRE_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차) (2026.3.24, 2026.11.23 확인)</a></li>
      <li><a href="${HOMETAX_URL}" target="_blank" rel="noopener noreferrer">국세청 홈택스 (2026.11.23 확인)</a></li>
      <li><a href="${IROS_URL}" target="_blank" rel="noopener noreferrer">대법원 인터넷등기소 (2026.11.23 확인)</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

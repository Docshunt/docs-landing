import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const PRE_STARTUP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";
const BUDGET_BRIEFING_URL = "https://www.korea.kr/briefing/policyBriefingView.do?newsId=156775671";
const K_STARTUP_URL = "https://www.k-startup.go.kr/";
const COMPETITION_GUIDE_PATH = "/blog_detail/pre-startup-package-competition-managing-institution";
const BONUS_GUIDE_PATH = "/blog_detail/pre-startup-package-bonus-evidence-submission";

export const post21 = {
  page: 3,
  index: 1,
  slug: "2026qa-4",
  sourceUrl: "https://docshunt.ai/blog_detail/2026qa-4",
  title: "예비창업패키지 신청 자격, 1월에 사업자등록을 했다면 신청할 수 있었을까요?",
  description:
    "[지난 공고] 2026년 공고문으로 예비창업패키지 신청 자격 기준일, 폐업 이력, 분야별 선정 규모, 제출서류와 가점을 Q&A로 정리했습니다. 경쟁률은 공고문에 없어 다루지 않고, 다음 공고에서 먼저 볼 조건을 안내합니다.",
  seo: {
    mainKeyword: "예비창업패키지 신청 자격",
    supportKeywords: ["예비창업패키지 제출서류", "예비창업패키지 신청분야", "예비창업패키지 Q&A"],
    searchIntent: "사업자등록, 폐업 이력, 이전 수혜 이력이 있을 때 예비창업패키지에 신청할 수 있는지와 무엇을 내야 하는지 확인하고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2025.12.11",
  modifiedDate: "2026.11.20",
  verification: {
    date: "2026.11.20",
    note: "신청 자격 기준일, 폐업 이력 기준, 신청 제외 대상, 분야별 선정 규모, 제출서류, 가점, 서류평가 2배수 내외와 70점 기준은 2026년 예비창업패키지 수정 공고(2차, 제2026-207호) 첨부 공고문에서 확인했습니다. 2026년 접수(3월 6일~3월 26일)는 끝난 지난 공고입니다. 공고문에 경쟁률이 없어 경쟁률 숫자는 싣지 않았고, 이전 글의 평가 기준과 가산점 대상 목록은 공고문과 달라 삭제했습니다.",
    sources: [
      { label: "중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)", url: PRE_STARTUP_NOTICE_URL },
      { label: "정책브리핑, 중소벤처기업부 재정운용전략 사전 브리핑", url: BUDGET_BRIEFING_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00021-pre-startup-package-eligibility-qa-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00021-pre-startup-package-eligibility-qa-hero.jpg",
  paragraphs: [
    "이 글은 지난 공고를 다룹니다. 2026년 예비창업패키지는 2026년 1월 22일을 기준으로 본인 명의 사업자등록증이 없고 법인 대표권도 없는 사람을 대상으로 했습니다. 1월 23일 이후에 사업자등록이나 법인등기를 마쳤다면 신청할 수 있었습니다.",
    "공고일 기준 최근 1개월(1월 28일~2월 27일) 안에 폐업한 사람은 신청할 수 없었고, 그 전에 폐업했다면 다른 업종은 신청할 수 있었지만 같은 업종은 폐업 뒤 3년(부도·파산은 2년)이 지나야 했습니다.",
    "선정 규모는 300명 내외로 일반분야 110명, 여성 70명, 소셜벤처 70명, 사내벤처 50팀(별도 공고)이었습니다. 사업계획서는 공고 양식으로 첨부했고, 가점 증빙은 신청할 때 내야 인정됐습니다.",
    "공고문에는 경쟁률이 없습니다. 대신 서류평가에서 최종 선정규모의 2배수 내외를 발표평가 대상으로 고르고, 단계별 70점 미만은 제외한다는 기준이 적혀 있었습니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <div class="dh-note">
    <p><strong>지난 공고 안내</strong><br>이 글이 다루는 2026년 예비창업패키지 접수는 2026년 3월 26일 18시에 끝났습니다. 아래 기준일과 날짜는 2026년 공고 기준이며, 다음 공고에서는 바뀔 수 있습니다. 새 공고가 나오면 <a href="${K_STARTUP_URL}" target="_blank" rel="noopener noreferrer">K-Startup</a>에서 다시 확인하세요.</p>
  </div>

  <p><strong>2026년 예비창업패키지 신청 자격의 기준일은 공고일이 아니라 2026년 1월 22일이었습니다.</strong> 그래서 1월 23일 이후에 사업자등록을 한 사람은 2월 말 공고가 나왔을 때 사업자가 있어도 신청할 수 있었습니다. 반대로 1월 초에 등록했다면 예비창업자로 보지 않았습니다. 아래 질문은 모두 <a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년 예비창업패키지 수정 공고</a>의 문장을 기준으로 답했습니다.</p>

  <h2>Q1. 사업자등록이 있으면 신청할 수 없었나요?</h2>
  <p>공고문의 신청 자격은 "신청자 명의의 사업자등록증을 보유하고 있지 않으며, 법인의 법률상 대표권을 가지고 있지 않은 자(기준일 2026년 1월 22일)"였습니다.</p>
  <ul>
    <li>2026년 1월 23일 이후에 사업자등록이나 법인등기를 마쳤다면 신청할 수 있었습니다.</li>
    <li>법인등기부상 대표이사, 각자대표, 공동대표, 대표권 있는 사내이사는 신청할 수 없었습니다.</li>
    <li>부동산임대업만 하는 개인사업자 대표는 협약 종료 2개월 전까지 다른 업종의 법인을 세울 수 있으면 예외로 신청할 수 있었습니다.</li>
  </ul>
  <p>서류평가를 통과하면 총사업자등록내역, 폐업사실증명 같은 서류를 따로 받아 예비창업자인지 다시 확인한다고 적혀 있었습니다.</p>

  <h2>Q2. 예전에 사업을 하다 폐업했다면요?</h2>
  <table>
    <thead>
      <tr>
        <th>폐업 시점</th>
        <th>다른 업종으로 창업 예정</th>
        <th>같은 업종으로 창업 예정</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>공고일 기준 최근 1개월(2026.1.28~2.27)</td>
        <td colspan="2">신청 불가</td>
      </tr>
      <tr>
        <td>2026년 1월 28일 이전</td>
        <td>신청 가능</td>
        <td>폐업일로부터 3년(부도·파산은 2년)이 지나야 신청 가능</td>
      </tr>
    </tbody>
  </table>
  <p>같은 업종인지는 업종 분류의 세세분류가 같은지로 판단했습니다.</p>

  <h2>Q3. 어떤 분야로 신청할 수 있었고, 몇 명을 뽑았나요?</h2>
  <table>
    <thead>
      <tr>
        <th>분야</th>
        <th>대상</th>
        <th>선정 규모</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>일반</strong></td><td>정보·통신, 전기·전자, 기계·소재, 바이오·의료 등 전 기술 분야</td><td>110명</td></tr>
      <tr><td><strong>여성</strong></td><td>기술창업 아이디어를 가진 여성 예비창업자</td><td>70명</td></tr>
      <tr><td><strong>소셜벤처</strong></td><td>사회문제 해결과 수익을 함께 추구하는 소셜벤처 창업 예정자</td><td>70명</td></tr>
      <tr><td><strong>사내벤처</strong></td><td>대기업 등 민간과 함께 발굴한 분사 창업기업(별도 공고 예정)</td><td>50팀</td></tr>
    </tbody>
  </table>
  <p>소셜벤처 분야로 선정되면 창업 후 3개월이 속한 달의 말일까지 소셜벤처 판별기준을 충족해야 했고, 그러지 못하면 '실패'로 판정한다고 적혀 있었습니다. 분야를 고를 때 이 의무까지 함께 보세요.</p>

  <h2>Q4. 경쟁률은 얼마였나요?</h2>
  <p>공고문에는 경쟁률이 나오지 않습니다. 이 글은 공식 자료로 확인할 수 없는 경쟁률 숫자를 싣지 않았습니다. 공고문에서 확인할 수 있는 선발 기준은 두 가지입니다.</p>
  <ul>
    <li>서류평가에서 최종 선정규모의 <strong>2배수 내외</strong>를 발표평가 대상으로 정했습니다.</li>
    <li>서류평가와 발표평가 각 단계에서 <strong>70점 미만</strong>이면 주관기관별 선정 규모와 관계없이 제외했습니다.</li>
  </ul>
  <p>또 신청자는 주관기관 한 곳을 골라 신청했고, 주관기관별 선정 규모는 접수 결과에 따라 바뀔 수 있다고 적혀 있었습니다. 경쟁률보다 주관기관을 먼저 봐야 하는 이유는 <a href="${COMPETITION_GUIDE_PATH}">예비창업패키지 경쟁률 글</a>에서 따로 다뤘습니다.</p>

  <h2>Q5. 무엇을 내야 했나요?</h2>
  <ol>
    <li><strong>사업신청서:</strong> K-Startup에 온라인으로 입력</li>
    <li><strong>사업계획서:</strong> 공고 별첨 양식으로 작성해 파일 첨부(30MB 제한)</li>
    <li><strong>증빙서류(해당 시):</strong> 파일 첨부 또는 공공마이데이터 동의로 제출</li>
  </ol>
  <p>신청은 본인이 해야 했고, 타인이 신청하면 탈락 처리됐습니다. 마감 뒤에는 사업계획서를 고치거나 지울 수 없었습니다.</p>

  <h2>Q6. 가점은 어떤 경우에 받았나요?</h2>
  <p>서류평가 가점은 최대 3점이었습니다.</p>
  <ul>
    <li>공고문에 적힌 인공지능(융합혁신) 대학원 졸업생: 2점</li>
    <li>최근 2년 안에 중앙정부 주관 전국 규모 창업경진대회에서 장관급 이상 상을 받은 경우: 1점(여러 개여도 최대 1점)</li>
    <li>기후테크 분야 창업 예정자: 1점(사업계획서 내용으로 확인)</li>
  </ul>
  <p>가점 증빙은 신청할 때 내야 했고, 내지 않으면 가점으로 인정하지 않았습니다. 증빙 시점은 <a href="${BONUS_GUIDE_PATH}">예비창업패키지 가점 증빙 글</a>에 자세히 정리했습니다.</p>

  <h2>Q7. 신청할 수 없는 경우는 또 무엇이 있었나요?</h2>
  <ul>
    <li>공고문 붙임에 적힌 창업사업화 지원사업에 선정돼 협약한 이력이 있는 경우(중도 포기 포함). 다만 2019년 이후 예비창업패키지에서 '최우수' 성과평가를 받고 공고일 기준 만 39세 이하인 사람은 예외였습니다.</li>
    <li>2026년 중앙정부·공공기관 창업사업화 지원사업을 수행 중인 경우</li>
    <li>금융기관 채무불이행으로 규제 중이거나 국세·지방세 체납 중인 경우(법적 예외 요건을 갖추면 인정)</li>
    <li>창업지원사업 참여제한 제재 중인 경우</li>
  </ul>
  <p>전체 목록은 13가지였으니, 해당될 것 같은 항목이 있다면 공고문 원문을 직접 확인하세요.</p>

  <h2>Q8. 2027년에도 같은 조건일까요?</h2>
  <p>알 수 없습니다. 중소벤처기업부는 <a href="${BUDGET_BRIEFING_URL}" target="_blank" rel="noopener noreferrer">2027년 정부 예산안 브리핑</a>에서 예비창업패키지 등 예비창업 사업을 '모두의 창업'으로 일원화할 계획이라고 밝혔습니다. 국회 심의 전 계획이라 자격 기준일, 분야, 가점은 새 공고를 확인해야 합니다.</p>

  <div class="dh-cta">
    <p>신청 자격을 확인했다면 독스헌트에서 공고와 양식을 고르고, 질문에 답하며 평가항목별 사업계획서 초안을 만들어 보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=pre-startup-package-eligibility&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트로 사업계획서 시작하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)</a></li>
      <li><a href="${BUDGET_BRIEFING_URL}" target="_blank" rel="noopener noreferrer">정책브리핑, 중소벤처기업부 재정운용전략 사전 브리핑</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

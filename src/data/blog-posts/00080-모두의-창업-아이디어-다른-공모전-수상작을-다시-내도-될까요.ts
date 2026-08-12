import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const FIRST_COHORT_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066642&cbIdx=310&parentSeq=1066642";
const FIRST_COHORT_PDF_URL =
  "https://mss.go.kr/common/board/Download.do?bcIdx=1066642&cbIdx=310&streFileNm=b1db7f65-7bee-461b-861a-168c81873553.pdf";
const SECOND_COHORT_BRIEFING_URL = "https://www.korea.kr/briefing/policyBriefingView.do?newsId=156772942";

export const post80 = {
  page: 1,
  index: 1,
  slug: "modoo-startup-public-idea-reapplication",
  sourceUrl: "https://docshunt.ai/blog_detail/modoo-startup-public-idea-reapplication",
  title: "모두의 창업 아이디어, 다른 공모전 수상작을 다시 내도 될까요?",
  titleLines: ["모두의 창업 아이디어,", "공모전 수상작을", "다시 낸다면"],
  titleLineBreaks: "always",
  description:
    "모두의 창업 아이디어는 2026년 1기 기준 다른 공모전 수상으로 공개된 안과 실질적으로 같으면 제출할 수 없었습니다. 이름만 바꾼 재신청을 피하고 달라진 핵심을 확인하는 법을 정리했습니다.",
  seo: {
    mainKeyword: "모두의 창업 아이디어",
    supportKeywords: ["모두의 창업 공모전 수상작", "공개 아이디어", "모두의 창업 재신청"],
    searchIntent: "다른 공모전에서 수상해 공개된 아이디어를 모두의 창업에 다시 제출할 수 있는지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.12",
  modifiedDate: "2026.08.12",
  verification: {
    date: "2026.08.12",
    note: "중소벤처기업부의 2026년 모두의 창업 1기 통합 모집공고와 첨부 PDF에서 신청자 본인의 아이디어라도 다른 공모전에서 수상해 공개됐고 제출안과 실질적으로 동일한 경우 신청 제외 대상이 될 수 있다는 안내를 확인했습니다. 이 내용은 1기 규정이며, 2026년 8월 12일 현재 최종 2기 모집공고는 확인되지 않았습니다. 다음 모집에서는 새 공고와 운영기관의 공식 답변을 최종 기준으로 삼아야 합니다.",
    sources: [
      { label: "중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고", url: FIRST_COHORT_NOTICE_URL },
      { label: "중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고 PDF", url: FIRST_COHORT_PDF_URL },
      { label: "중소벤처기업부, 모두의 창업 프로젝트 관련 브리핑", url: SECOND_COHORT_BRIEFING_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00080-modoo-startup-public-idea-reapplication-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00080-modoo-startup-public-idea-reapplication-hero.jpg",
  paragraphs: [
    "2026년 모두의 창업 1기에서는 신청자 본인의 아이디어라도 다른 공모전에서 수상해 공개됐고 제출안과 실질적으로 동일하다면 신청 제외 대상이 될 수 있었습니다.",
    "제품 이름이나 문구만 바꿨다고 다른 아이디어가 되는 것은 아닙니다. 고객 문제, 해결 방식, 핵심 기능과 실행 구조가 실제로 달라졌는지 확인해야 합니다.",
    "이전 수상 여부, 공개된 자료, 현재 제출안의 차이를 한 표에 놓고 비교하세요. 판단이 모호하면 접수 전에 운영기관에 아이디어 공개 범위와 달라진 내용을 구체적으로 적어 문의하는 편이 안전합니다.",
    "해당 기준은 1기 공고 내용입니다. 2026년 8월 12일 현재 최종 2기 공고는 확인되지 않았으므로 다음 모집에서는 새 규정을 다시 확인해야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>2026년 모두의 창업 1기에서는 다른 공모전에서 수상해 공개된 아이디어와 실질적으로 동일한 아이디어를 다시 제출할 수 없었습니다.</strong> 신청자 본인의 아이디어라도 이 기준에 해당할 수 있었습니다.</p>
  <p>따라서 이름, 디자인, 소개 문장만 바꾸기보다 고객 문제·해결 방식·핵심 기능·실행 구조가 실제로 달라졌는지 먼저 확인해야 합니다.</p>

  <h2>본인 아이디어라도 ‘수상 후 공개’ 여부를 확인하세요</h2>
  <p><a href="${FIRST_COHORT_PDF_URL}" target="_blank" rel="noopener noreferrer">2026년 모두의 창업 1기 통합 모집공고 PDF</a>는 신청자 본인의 아이디어라도 다른 공모전에서 제출·수상한 뒤 공개됐고 이번 제출안과 실질적으로 동일하다면 타인의 아이디어로 간주한다고 안내했습니다.</p>
  <p>여기서 먼저 확인할 것은 단순히 예전에 적어본 아이디어인지가 아닙니다. 다른 공모전의 수상작으로 공개됐는지, 이번 아이디어가 실질적으로 같은지가 핵심입니다.</p>
  <ul>
    <li>수상 결과가 주최기관 홈페이지나 보도자료에 공개됐는가?</li>
    <li>발표 영상, 작품 설명, 이미지가 공개돼 있는가?</li>
    <li>이번 제출안의 고객 문제와 해결 방식이 이전 수상작과 같은가?</li>
    <li>달라졌다고 설명할 객관적인 개발·검증 기록이 있는가?</li>
  </ul>

  <h2>고객·문제·해결·검증이 달라졌는지 보세요</h2>
  <table>
    <thead>
      <tr>
        <th>비교 항목</th>
        <th>표현만 바뀐 경우</th>
        <th>실질적인 변화가 있는 경우</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>고객</strong></td>
        <td>호칭만 사용자에서 고객으로 변경</td>
        <td>다른 행동과 조건을 가진 고객군을 검증</td>
      </tr>
      <tr>
        <td><strong>문제</strong></td>
        <td>같은 불편을 새로운 문장으로 표현</td>
        <td>새 인터뷰에서 다른 반복 문제를 확인</td>
      </tr>
      <tr>
        <td><strong>해결</strong></td>
        <td>기능 이름이나 화면 색상만 변경</td>
        <td>작동 방식과 사용 흐름이 달라짐</td>
      </tr>
      <tr>
        <td><strong>검증</strong></td>
        <td>이전 수상작의 자료를 그대로 사용</td>
        <td>변경한 가설을 새 표본으로 검증</td>
      </tr>
    </tbody>
  </table>
  <p>이 표는 공식 판정 기준이 아니라 접수 전 사실관계를 정리하기 위한 도구입니다. 실질적 동일성에 관한 최종 판단은 공고와 운영기관의 안내를 따라야 합니다.</p>

  <h2>이전 수상작과 현재안의 차이를 한 장에 기록하세요</h2>
  <ol>
    <li>이전 공모전 이름, 수상일, 공개 URL을 적습니다.</li>
    <li>공개된 제목, 고객, 문제, 해결 방식을 그대로 옮깁니다.</li>
    <li>현재안에서 달라진 항목과 달라진 시점을 적습니다.</li>
    <li>변화를 뒷받침하는 인터뷰, 실험, 개발 기록을 연결합니다.</li>
    <li>차이를 설명하기 어렵다면 접수 전에 운영기관에 문의합니다.</li>
  </ol>
  <p>문의할 때 “다시 내도 되나요?”라고만 묻기보다 이전 수상작이 어디까지 공개됐고 현재안의 고객과 해결 방식이 무엇으로 달라졌는지 적어야 답변의 기준이 분명해집니다.</p>

  <h2>타인의 아이디어와 권리 문제도 별도로 확인하세요</h2>
  <p>1기 공고는 신청 아이디어의 권리가 신청자에게 있으며 타인의 아이디어나 기술을 모방·표절·도용한 경우 책임은 신청자에게 있다고 안내했습니다. 본인의 이전 수상작 여부를 확인하는 일과 타인의 권리를 침해하지 않는지 확인하는 일은 따로 해야 합니다.</p>
  <ul>
    <li>공동 창작자나 이전 팀원의 기여가 남아 있는가?</li>
    <li>외부 이미지, 코드, 자료를 사용할 권리가 있는가?</li>
    <li>협약이나 공모전 약관에 권리 귀속 조건이 있는가?</li>
  </ul>

  <h2>2기에서는 새 공고와 공식 답변을 확인하세요</h2>
  <p><a href="${SECOND_COHORT_BRIEFING_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부의 2026년 7월 31일 브리핑</a>은 국정원 보안성 검토 등 관련 절차를 8월 중순까지 마칠 계획이며 2기 시작도 비슷한 시기로 예상한다고 밝혔습니다. 2026년 8월 12일 현재 최종 2기 모집공고는 확인되지 않았습니다.</p>
  <p>재신청을 준비한다면 <a href="${FIRST_COHORT_NOTICE_URL}" target="_blank" rel="noopener noreferrer">1기 공고</a>의 표현을 그대로 적용하지 말고 새 공고의 공개 아이디어·중복 제출·권리 조항과 문의처를 다시 확인하세요.</p>
  <p><strong class="dh-emphasis">제목을 바꾸는 데서 멈추지 말고 이전 수상작과 무엇이 실질적으로 달라졌는지 근거로 설명할 수 있어야 합니다.</strong></p>

  <div class="dh-cta">
    <p>이전 아이디어와 달라진 고객·문제·해결 근거를 정리했다면, 독스헌트에서 사업 아이디어 초안이 한 방향으로 이어지는지 점검해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=modoo-startup-public-idea-reapplication&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 달라진 근거 정리하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${FIRST_COHORT_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고</a></li>
      <li><a href="${FIRST_COHORT_PDF_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고 PDF</a></li>
      <li><a href="${SECOND_COHORT_BRIEFING_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 모두의 창업 프로젝트 관련 브리핑</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

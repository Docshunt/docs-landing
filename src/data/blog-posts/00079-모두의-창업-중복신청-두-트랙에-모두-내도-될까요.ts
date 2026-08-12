import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const FIRST_COHORT_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066642&cbIdx=310&parentSeq=1066642";
const FIRST_COHORT_PDF_URL =
  "https://mss.go.kr/common/board/Download.do?bcIdx=1066642&cbIdx=310&streFileNm=b1db7f65-7bee-461b-861a-168c81873553.pdf";
const SECOND_COHORT_BRIEFING_URL = "https://www.korea.kr/briefing/policyBriefingView.do?newsId=156772942";

export const post79 = {
  page: 1,
  index: 1,
  slug: "modoo-startup-one-track-one-idea-rule",
  sourceUrl: "https://docshunt.ai/blog_detail/modoo-startup-one-track-one-idea-rule",
  title: "모두의 창업 중복신청, 두 트랙에 모두 내도 될까요?",
  titleLines: ["모두의 창업 중복신청,", "두 트랙에", "모두 내도 될까요?"],
  titleLineBreaks: "always",
  description:
    "모두의 창업 중복신청은 2026년 1기 기준 허용되지 않았습니다. 일반·기술과 로컬 가운데 한 분야를 골라 하나의 아이디어로 신청하는 규정과 트랙 선택 근거를 정리했습니다.",
  seo: {
    mainKeyword: "모두의 창업 중복신청",
    supportKeywords: ["모두의 창업 일반 기술", "모두의 창업 로컬", "모두의 창업 아이디어"],
    searchIntent: "모두의 창업에서 일반·기술과 로컬 트랙에 동시에 지원하거나 여러 아이디어를 중복 제출할 수 있는지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.12",
  modifiedDate: "2026.08.12",
  verification: {
    date: "2026.08.12",
    note: "중소벤처기업부의 2026년 모두의 창업 1기 통합 모집공고와 첨부 PDF에서 일반·기술 또는 로컬 중 한 분야를 선택하고 하나의 아이디어로만 신청해야 하며 중복신청은 불가능하다는 안내를 확인했습니다. 2026년 8월 12일 현재 최종 2기 모집공고는 확인되지 않았으므로 다음 모집의 트랙과 중복신청 규정은 새 공고를 기준으로 다시 확인해야 합니다.",
    sources: [
      { label: "중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고", url: FIRST_COHORT_NOTICE_URL },
      { label: "중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고 PDF", url: FIRST_COHORT_PDF_URL },
      { label: "중소벤처기업부, 모두의 창업 프로젝트 관련 브리핑", url: SECOND_COHORT_BRIEFING_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00079-modoo-startup-one-track-one-idea-rule-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00079-modoo-startup-one-track-one-idea-rule-hero.jpg",
  paragraphs: [
    "2026년 모두의 창업 1기에서는 일반·기술과 로컬 중 한 분야를 선택하고 하나의 아이디어로만 신청해야 했습니다. 두 분야에 동시에 내거나 여러 아이디어를 중복 제출할 수 없었습니다.",
    "문제를 겪는 고객, 해결 방식, 현장에서 확보한 근거가 어느 평가 기준과 더 잘 맞는지 비교하면 트랙을 고르기 쉬워집니다.",
    "한 아이디어를 두 트랙에 맞춰 다르게 포장하면 핵심 고객과 실행 계획이 흔들릴 수 있습니다. 먼저 한 문장으로 고객·문제·해결을 고정한 뒤 트랙을 선택하세요.",
    "이 규정은 1기 공고 기준입니다. 2026년 8월 12일 현재 최종 2기 공고는 확인되지 않았으므로 다음 모집에서는 새 공고를 다시 읽어야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>2026년 모두의 창업 1기에서는 일반·기술과 로컬 두 분야에 중복신청할 수 없었습니다.</strong> 둘 중 한 분야를 골라 하나의 아이디어로 신청해야 했습니다.</p>
  <p>따라서 같은 아이디어를 두 트랙에 맞춰 각각 제출하거나, 서로 다른 아이디어를 여러 건 내는 방식으로 선택을 미룰 수 없었습니다. 먼저 내 아이디어의 고객·문제·실행 장소를 정리한 뒤 한 트랙을 골라야 합니다.</p>

  <h2>1기 공고는 ‘한 분야·한 아이디어’를 요구했습니다</h2>
  <p><a href="${FIRST_COHORT_PDF_URL}" target="_blank" rel="noopener noreferrer">2026년 모두의 창업 1기 통합 모집공고 PDF</a>는 일반·기술 또는 로컬 가운데 한 분야를 선택하고 하나의 아이디어로 신청하라고 안내했습니다. 중복신청은 불가능하다고도 명시했습니다.</p>
  <ul>
    <li><strong>가능:</strong> 한 분야를 선택해 하나의 아이디어로 신청</li>
    <li><strong>불가:</strong> 일반·기술과 로컬에 같은 아이디어를 각각 신청</li>
    <li><strong>불가:</strong> 한 사람이 여러 아이디어를 나눠 신청</li>
  </ul>
  <p>이는 2026년 1기 규정입니다. 다음 모집에서 트랙 이름과 중복신청 조건이 유지될지는 새 공고를 확인해야 합니다.</p>

  <h2>트랙 이름보다 아이디어의 근거를 놓고 비교하세요</h2>
  <p>기술을 일부 쓴다고 무조건 일반·기술을 고르거나, 특정 지역에서 시작한다고 바로 로컬을 고르면 설명이 어긋날 수 있습니다. 아래 질문은 공식 판정표가 아니라 아이디어의 중심을 확인하기 위한 점검표입니다.</p>
  <table>
    <thead>
      <tr>
        <th>확인할 항목</th>
        <th>일반·기술에서 설명할 내용</th>
        <th>로컬에서 설명할 내용</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>문제</strong></td>
        <td>어떤 고객의 반복 문제인가?</td>
        <td>어떤 지역 자원·생활 문제와 맞닿아 있는가?</td>
      </tr>
      <tr>
        <td><strong>해결</strong></td>
        <td>제품·서비스의 작동 방식은 무엇인가?</td>
        <td>지역의 고유한 자원과 관계가 어떻게 쓰이는가?</td>
      </tr>
      <tr>
        <td><strong>검증</strong></td>
        <td>사용자 테스트와 구현 근거가 있는가?</td>
        <td>현장 관찰과 지역 파트너 근거가 있는가?</td>
      </tr>
    </tbody>
  </table>
  <p>두 열에 모두 답할 수 있어도 괜찮습니다. 지금 확보한 근거로 가장 일관되게 설명되는 이야기를 고르세요.</p>

  <h2>고객·문제·해결을 한 문장으로 먼저 고정하세요</h2>
  <div class="dh-note">
    <p><strong>정리 전</strong><br>AI와 지역 콘텐츠를 활용한 새로운 플랫폼입니다.</p>
    <p><strong>정리 뒤</strong><br>지역 행사 정보를 찾기 어려운 방문객이 당일 동선을 짤 수 있도록, 운영기관의 공개 일정을 장소별로 묶어 보여줍니다.</p>
  </div>
  <p>두 번째 문장에는 고객, 불편, 해결 방식이 보입니다. 이 상태에서 기술 구현 근거가 중심인지, 지역 자원과 현장 관계가 중심인지 비교하면 트랙 선택의 기준이 선명해집니다.</p>

  <h2>선택한 트랙에 맞추려고 사실을 바꾸지 마세요</h2>
  <ul>
    <li>없는 협약이나 지역 파트너를 있는 것처럼 쓰지 않습니다.</li>
    <li>실험하지 않은 기술을 완성된 기능처럼 표현하지 않습니다.</li>
    <li>같은 고객을 문단마다 소비자, 소상공인, 관광객으로 바꾸지 않습니다.</li>
    <li>신청서의 문제와 실행 계획이 서로 다른 아이디어를 설명하지 않는지 봅니다.</li>
  </ul>
  <p>트랙을 골랐다면 이미 확인한 근거 가운데 해당 평가 기준과 연결되는 자료를 앞에 놓습니다.</p>

  <h2>2기 신청 전에는 새 공고를 최종 기준으로 삼으세요</h2>
  <p><a href="${SECOND_COHORT_BRIEFING_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부의 2026년 7월 31일 브리핑</a>은 국정원 보안성 검토 등 관련 절차를 8월 중순까지 마칠 계획이며, 2기 시작도 비슷한 시기로 예상한다고 밝혔습니다. 2026년 8월 12일 현재 최종 2기 모집공고는 확인되지 않았습니다.</p>
  <p>2기가 열리면 <a href="${FIRST_COHORT_NOTICE_URL}" target="_blank" rel="noopener noreferrer">종료된 1기 공고</a>만 보고 신청하지 말고, 새 공고에서 신청 분야, 아이디어 수, 중복신청 제한을 다시 확인하세요.</p>
  <p><strong class="dh-emphasis">가장 탄탄한 근거가 모인 한 아이디어와 한 트랙을 먼저 정하세요.</strong></p>

  <div class="dh-cta">
    <p>한 트랙을 골랐다면 고객·문제·해결 근거가 같은 방향을 가리키는지 독스헌트에서 도전신청서 초안을 점검해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=modoo-startup-one-track-one-idea-rule&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 아이디어 구조 잡기</a>
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

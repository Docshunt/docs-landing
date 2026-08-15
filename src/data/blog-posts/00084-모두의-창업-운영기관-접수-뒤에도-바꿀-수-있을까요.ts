import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const FIRST_COHORT_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066642&cbIdx=310&parentSeq=1066642";
const FIRST_COHORT_PDF_URL =
  "https://mss.go.kr/common/board/Download.do?bcIdx=1066642&cbIdx=310&streFileNm=b1db7f65-7bee-461b-861a-168c81873553.pdf";
const FIRST_COHORT_FAQ_URL = "https://ec.jnu.ac.kr/bbs/ec/237/835571/download.do";
const SECOND_COHORT_STATUS_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1069596&cbIdx=87";

export const post84 = {
  page: 1,
  index: 1,
  slug: "modoo-startup-operating-organization-change",
  sourceUrl: "https://docshunt.ai/blog_detail/modoo-startup-operating-organization-change",
  title: "모두의 창업 운영기관, 접수 뒤에도 바꿀 수 있을까요?",
  titleLines: ["모두의 창업", "운영기관 변경,", "언제까지 될까요?"],
  titleLineBreaks: "always",
  description:
    "2026년 모두의 창업 운영기관은 1기 접수 기간 중 바꿀 수 있었지만 마감 뒤에는 변경할 수 없었습니다. 지역·전문분야·멘토링 참여 가능성을 기준으로 고를 때 볼 항목도 함께 살폈습니다.",
  seo: {
    mainKeyword: "모두의 창업 운영기관",
    supportKeywords: ["모두의 창업 기관 선택", "모두의 창업 지역 선택", "모두의 창업 신청"],
    searchIntent: "모두의 창업 운영기관을 언제까지 바꿀 수 있고 어떤 기준으로 골라야 하는지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.13",
  modifiedDate: "2026.08.13",
  verification: {
    date: "2026.08.13",
    note: "2026년 모두의 창업 1기 통합 모집공고와 일반·기술트랙 FAQ를 확인했습니다. 1기에서는 신청할 때 운영기관 1곳을 선택했습니다. 접수 기간 중에는 아이디어와 운영기관을 변경할 수 있었지만 마감 이후에는 변경할 수 없었습니다. 다른 지역 기관도 선택할 수 있으나 대면 프로그램 참여 가능성을 고려하도록 안내했습니다. 다음 모집에서는 새 공고와 FAQ를 다시 확인해야 합니다.",
    sources: [
      { label: "중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고", url: FIRST_COHORT_NOTICE_URL },
      { label: "중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고 PDF", url: FIRST_COHORT_PDF_URL },
      { label: "모두의 창업 일반·기술트랙 FAQ", url: FIRST_COHORT_FAQ_URL },
      { label: "중소벤처기업부, 모두의 창업 프로젝트 2기 모집 관련 안내", url: SECOND_COHORT_STATUS_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00084-modoo-startup-operating-organization-change-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00084-modoo-startup-operating-organization-change-hero.jpg",
  paragraphs: [
    "2026년 모두의 창업 1기에서는 최종 제출을 했더라도 접수 기간이 끝나기 전이면 운영기관을 바꿀 수 있었습니다. 마감 이후에는 변경이나 교체가 불가능했습니다.",
    "운영기관은 이름이나 소재지만 보고 고를 곳이 아닙니다. 아이디어 평가와 선정, 이후 보육을 맡기 때문에 주력 지원 분야, 멘토, 보육계획과 선발 방향을 함께 봐야 합니다.",
    "거주지와 다른 지역의 기관도 선택할 수 있었습니다. 선택한 지역에서 제공하는 대면 프로그램에는 참여할 수 있어야 했습니다. 1기 FAQ는 책임멘토와 1대1 대면 멘토링을 4회 안팎으로 안내했습니다.",
    "AI 챗봇의 기관 추천은 참고 정보입니다. 실제 활동 지역과 일정, 아이디어 분야를 기준으로 후보를 비교하고 다음 모집에서는 새 공고를 다시 확인해야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>2026년 모두의 창업 1기에서는 최종 제출을 했더라도 접수 기간이 끝나기 전이면 운영기관을 바꿀 수 있었습니다.</strong> 접수 마감 이후에는 변경이나 교체가 불가능했습니다.</p>
  <p>잘못 선택했다면 마감 전 수정·재제출 절차를 확인해야 합니다. “일단 아무 기관이나 고르고 나중에 옮기자”는 방식은 마감 뒤에 막힐 수 있습니다.</p>

  <h2>운영기관은 신청할 때 한 곳만 선택했습니다</h2>
  <p><a href="${FIRST_COHORT_FAQ_URL}" target="_blank" rel="noopener noreferrer">모두의 창업 1기 일반·기술트랙 FAQ</a>는 운영기관을 아이디어 평가·선정과 창업 사업화 지원을 맡는 기관으로 설명합니다. 신청할 때 선택할 수 있는 기관은 한 곳이었습니다.</p>
  <p>기관마다 특화 지원 분야, 중점 선발 방향, 멘토와 보육계획이 다를 수 있습니다. 소재지가 가깝다는 이유만으로 정하기보다 내 아이디어와 이후 활동 방식이 맞는지 살펴봐야 합니다.</p>

  <h2>변경 가능 여부는 접수 마감이 기준이었습니다</h2>
  <table>
    <thead>
      <tr>
        <th>시점</th>
        <th>1기 FAQ의 안내</th>
        <th>확인할 행동</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>접수 기간 중</strong></td>
        <td>운영기관과 작성 중인 아이디어 내용 변경 가능</td>
        <td>수정 뒤 최종 제출 상태 재확인</td>
      </tr>
      <tr>
        <td><strong>접수 마감 후</strong></td>
        <td>운영기관 변경·교체 불가</td>
        <td>선택한 기관의 안내 확인</td>
      </tr>
    </tbody>
  </table>
  <p>마감 전 수정이 가능하더라도 저장만 하고 끝내면 안 됩니다. <a href="${FIRST_COHORT_PDF_URL}" target="_blank" rel="noopener noreferrer">1기 통합 모집공고 PDF</a>가 안내한 최종 접수 절차에 따라 재제출 결과와 알림을 확인해야 합니다.</p>

  <h2>지역보다 실제 참여 가능성을 먼저 계산하세요</h2>
  <p>1기 FAQ는 거주지와 다른 지역의 운영기관을 선택할 수 있다고 안내했습니다. 다만 선택 지역에서 평가와 보육을 받게 되므로 필수 프로그램에 참여할 수 있어야 합니다.</p>
  <p>특히 책임멘토와 1대1 대면 멘토링이 4회 안팎으로 예정돼 있다는 안내가 있었습니다. 직장인이나 군 장병처럼 대면 참석이 어려운 경우 운영기관과 합의해 비대면 지원이 가능하다고 설명했습니다. 모든 일정을 자동으로 비대면 전환해준다는 뜻은 아닙니다.</p>
  <ul>
    <li>평일 대면 일정에 이동할 수 있는가?</li>
    <li>지역 프로그램과 고객 검증 장소가 연결되는가?</li>
    <li>기관의 주력 분야가 아이디어와 맞는가?</li>
    <li>필요한 기술·시장 멘토가 소개돼 있는가?</li>
  </ul>

  <h2>기관 소개에서 네 항목을 비교하세요</h2>
  <ol>
    <li><strong>지원 분야:</strong> 내 아이디어의 기술과 고객군을 실제로 다루는지 봅니다.</li>
    <li><strong>보육계획:</strong> 멘토링, 시제품, 시장검증 일정이 현재 단계에 맞는지 확인합니다.</li>
    <li><strong>멘토 구성:</strong> 이름보다 필요한 전문분야가 있는지 확인합니다.</li>
    <li><strong>참여 조건:</strong> 이동 거리와 필수 대면 일정을 감당할 수 있는지 계산합니다.</li>
  </ol>
  <p>1기에는 선택 지역과 아이디어 분야를 바탕으로 운영기관을 추천하는 AI 챗봇도 안내됐습니다. FAQ는 이 결과를 학습 데이터에 따른 참고 정보로 활용하라고 설명합니다. 추천 결과가 최종 선택을 대신하지는 않습니다.</p>

  <h2>마감 전 마지막 화면에서 다시 확인하세요</h2>
  <div class="dh-note">
    <p><strong>제출 전 확인</strong><br>선택 기관명, 지역, 아이디어 분야, 공개 설정, 최종 제출 상태</p>
  </div>
  <p>기관을 바꿨다면 사업계획의 지역·고객·실행 일정도 새 기관의 보육 방식과 맞는지 읽어보세요. 기관명만 바꾸고 지역 검증 계획을 그대로 두면 문서 안에서 앞뒤가 어긋날 수 있습니다.</p>
  <p>이 글은 2026년 모두의 창업 1기 기준입니다. 중소벤처기업부는 보안 강화를 거쳐 2기 모집을 시작할 예정이라고 안내했으므로, 다음 모집에서는 <a href="${SECOND_COHORT_STATUS_URL}" target="_blank" rel="noopener noreferrer">최신 공식 안내</a>와 신청 화면을 다시 확인해야 합니다.</p>
  <p><strong class="dh-emphasis">운영기관은 마감 전에는 고칠 수 있었습니다. 마감 뒤에는 바꿀 수 없었습니다. 이름보다 실제로 참여하고 도움받을 수 있는 곳인지 먼저 보세요.</strong></p>

  <div class="dh-cta">
    <p>운영기관과 지역을 정했다면, 독스헌트에서 고객 검증과 실행 일정이 선택한 기관의 프로그램과 맞는지 점검해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=modoo-startup-operating-organization-change&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 실행계획 정리하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${FIRST_COHORT_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고</a></li>
      <li><a href="${FIRST_COHORT_PDF_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고 PDF</a></li>
      <li><a href="${FIRST_COHORT_FAQ_URL}" target="_blank" rel="noopener noreferrer">모두의 창업 일반·기술트랙 FAQ</a></li>
      <li><a href="${SECOND_COHORT_STATUS_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 모두의 창업 프로젝트 2기 모집 관련 안내</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

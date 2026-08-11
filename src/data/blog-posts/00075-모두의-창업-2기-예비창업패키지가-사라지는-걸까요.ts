import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const POLICY_STATUS_URL = "https://www.korea.kr/briefing/actuallyView.do?newsId=148968906";
const SECOND_COHORT_BRIEFING_URL = "https://www.korea.kr/briefing/policyBriefingView.do?newsId=156772942";
const FIRST_COHORT_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066642&cbIdx=310&parentSeq=1066642";

export const post75 = {
  page: 1,
  index: 1,
  slug: "modoo-startup-2-pre-startup-package-status",
  sourceUrl: "https://docshunt.ai/blog_detail/modoo-startup-2-pre-startup-package-status",
  title: "모두의 창업 2기, 예비창업패키지가 사라지는 걸까요?",
  titleLines: ["모두의 창업 2기,", "예창패가 사라질까요?"],
  description:
    "모두의 창업 2기 때문에 예비창업패키지가 사라지거나 흡수된다는 내용은 2026년 8월 11일 기준 확정 사항이 아닙니다. 정부 설명자료로 확정된 것과 아직 정해지지 않은 것을 나눴습니다.",
  seo: {
    mainKeyword: "모두의 창업 2기",
    supportKeywords: ["예비창업패키지", "모두의 창업 모집공고", "예비창업자 지원사업"],
    searchIntent: "모두의 창업 2기와 예비창업패키지의 관계, 두 사업의 통합 여부가 공식적으로 확정됐는지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.11",
  modifiedDate: "2026.08.11",
  verification: {
    date: "2026.08.11",
    note: "대한민국 정책브리핑의 2026년 7월 28일 보도설명자료에서 예비창업패키지의 모두의 창업 흡수와 지원사업 일원화가 확정되지 않았음을 확인했습니다. 7월 31일 중소벤처기업부 브리핑은 7월 중 보안·개인정보 조치를 마쳤고 8월 중순까지 추가 행정절차를 진행한 뒤 그 무렵 2기를 시작할 것으로 예상한다고 밝혔습니다. 2026년 8월 11일 공식 사업공고를 재확인했으나 최종 일정과 조건을 담은 2기 모집공고는 확인되지 않았습니다.",
    sources: [
      { label: "대한민국 정책브리핑, 예비창업패키지 흡수 보도 관련 설명", url: POLICY_STATUS_URL },
      { label: "중소벤처기업부, 모두의 창업 프로젝트 관련 브리핑", url: SECOND_COHORT_BRIEFING_URL },
      { label: "중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고", url: FIRST_COHORT_NOTICE_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00075-modoo-startup-2-pre-startup-package-status-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00075-modoo-startup-2-pre-startup-package-status-hero.jpg",
  paragraphs: [
    "2026년 8월 11일 기준 예비창업패키지가 모두의 창업에 흡수되거나 사라진다는 내용은 확정되지 않았습니다.",
    "중소벤처기업부는 예비창업자 지원체계 개편 방향을 검토 중이지만 두 사업의 운영 방식은 예산 심의 단계이며, 흡수와 일원화는 확정 사항이 아니라고 설명했습니다.",
    "중소벤처기업부는 7월 31일 브리핑에서 8월 중순까지 추가 행정절차를 진행한 뒤 그 무렵 2기를 시작할 것으로 예상한다고 밝혔지만, 8월 11일 현재 최종 모집공고는 확인되지 않았습니다.",
    "지금은 특정 양식이나 일정에 맞춰 원고를 완성하기보다 고객 문제, 검증 기록, 실행 일정과 비용처럼 두 사업에서 다시 활용할 수 있는 근거를 정리해두는 편이 낫습니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>2026년 8월 11일 기준으로 예비창업패키지가 모두의 창업에 흡수되거나 사라진다는 내용은 확정되지 않았습니다.</strong> 예비창업자 지원체계의 개편 방향은 검토 중이지만, 두 사업의 운영 방식과 예산은 아직 확정 단계가 아닙니다.</p>
  <p>모두의 창업 2기 역시 새 모집공고가 확인되지 않은 상태입니다. 검색 결과의 전망을 확정 공고처럼 읽기보다 <strong>정부가 확인한 사실과 아직 정하지 않은 항목</strong>을 나눠 봐야 합니다.</p>

  <h2>정부는 ‘흡수·일원화가 확정되지 않았다’고 설명했습니다</h2>
  <p><a href="${POLICY_STATUS_URL}" target="_blank" rel="noopener noreferrer">2026년 7월 28일 대한민국 정책브리핑의 보도설명자료</a>는 중소벤처기업부가 예비창업자 지원체계 개편 방향을 검토 중이라고 밝혔습니다. 다만 예비창업패키지와 모두의 창업의 운영 방식, 초기창업패키지의 모집 규모와 운영 방식은 예산 심의 단계로 확정되지 않았다고 설명했습니다.</p>
  <p>예비창업패키지의 모두의 창업 흡수와 예비창업자 지원사업 일원화도 확정 사항이 아니며, 예산안 확정 과정에서 바뀔 수 있다고 명시했습니다. 따라서 “내년부터 예창패 폐지”나 “모두의 창업으로 완전 통합”처럼 단정해서 준비 방향을 바꾸기는 이릅니다.</p>

  <h2>모두의 창업 2기 일정 역시 새 공고를 확인해야 합니다</h2>
  <p>중소벤처기업부는 <a href="${SECOND_COHORT_BRIEFING_URL}" target="_blank" rel="noopener noreferrer">2026년 7월 31일 브리핑</a>에서 7월 중 보안 취약점과 개인정보 관리 개선 조치를 마쳤고, 8월 중순까지 추가 행정절차를 진행할 계획이라고 설명했습니다. 2기는 그 절차가 끝나는 무렵 시작할 것으로 예상한다고 답했지만, 이는 접수일을 확정한 모집공고가 아닙니다.</p>
  <p>2026년 8월 11일 공식 사업공고를 다시 확인했을 때도 최종 일정과 조건을 담은 2기 모집공고는 확인되지 않았습니다. 브리핑에서 밝힌 예상 시점을 접수 시작일로 단정하거나, 앞서 공개된 추진계획의 인원·대상·일정을 최종 신청 조건으로 사용해서는 안 됩니다.</p>

  <div class="dh-note">
    <p><strong>확인된 것</strong><br>지원체계 개편 방향은 검토 중이며, 중기부는 8월 중순까지 추가 행정절차를 진행할 계획이라고 밝혔습니다.</p>
    <p><strong>확정되지 않은 것</strong><br>예비창업패키지 흡수·폐지, 지원사업 일원화, 2기 접수기간·신청 자격·최종 선발 규모입니다.</p>
  </div>

  <h2>1기 공고와 2기 예상 조건을 섞지 마세요</h2>
  <p><a href="${FIRST_COHORT_NOTICE_URL}" target="_blank" rel="noopener noreferrer">모두의 창업 1기 통합 모집공고</a>는 2026년 5월에 접수가 끝난 자료입니다. 당시의 트랙, 신청 방식, 지원 규모는 1기를 설명할 때는 근거가 되지만 2기의 최종 조건은 아닙니다.</p>
  <p>예비창업패키지의 2026년 모집공고도 이미 진행된 연도의 기준입니다. 다음 모집에서 사업이 유지되더라도 자격 기준일, 제출 양식, 지원 기간과 사업비가 달라질 수 있습니다.</p>
  <table>
    <thead>
      <tr>
        <th>자료</th>
        <th>지금 확인할 수 있는 범위</th>
        <th>단정하면 안 되는 것</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>1기 모집공고</strong></td>
        <td>종료된 1기의 실제 절차와 조건</td>
        <td>2기도 같은 방식이라는 판단</td>
      </tr>
      <tr>
        <td><strong>추진계획·설명자료</strong></td>
        <td>정책 방향과 현재 검토 상태</td>
        <td>최종 일정·자격·예산</td>
      </tr>
      <tr>
        <td><strong>새 모집공고</strong></td>
        <td>새 공고의 실제 신청 기준</td>
        <td>공고 전에 예상한 조건</td>
      </tr>
    </tbody>
  </table>

  <h2>지금은 양식보다 다시 쓸 수 있는 근거를 준비하세요</h2>
  <p>공고가 확정되지 않았다고 손을 놓을 필요는 없습니다. 어느 사업에 지원하더라도 다시 활용할 수 있는 사실을 먼저 정리할 수 있습니다.</p>
  <ul>
    <li><strong>고객 문제:</strong> 누구에게 어떤 상황이 반복되는지 기록합니다.</li>
    <li><strong>검증 근거:</strong> 인터뷰, 예약, 주문, 테스트 결과를 날짜와 함께 남깁니다.</li>
    <li><strong>실행 계획:</strong> 만들 산출물과 검증 순서를 월 단위로 정리합니다.</li>
    <li><strong>비용 근거:</strong> 과업별 견적과 필요한 자원을 구분합니다.</li>
    <li><strong>팀 역할:</strong> 이름과 경력보다 누가 어떤 과업을 맡을지 정합니다.</li>
  </ul>
  <p>이 자료를 한 프로그램의 문항 순서에 바로 끼워 넣지 말고, 출처와 확인 날짜가 있는 근거 묶음으로 보관하세요. 새 공고가 나오면 그때 질문과 분량에 맞춰 다시 배치할 수 있습니다.</p>

  <h2>새 공고가 나오면 네 항목부터 확인하세요</h2>
  <ol>
    <li>공고의 정확한 이름과 공고번호가 무엇인가?</li>
    <li>신청 자격의 기준일과 업력 계산 방식은 무엇인가?</li>
    <li>도전신청서 직접 입력인지 첨부 양식 제출인지?</li>
    <li>접수 플랫폼, 마감 시각, 수정·재제출 규칙은 무엇인가?</li>
  </ol>
  <p><strong class="dh-emphasis">정책 방향은 준비의 힌트이고, 모집공고는 신청의 기준입니다.</strong> 두 문서를 같은 효력으로 읽지 않아야 불필요한 재작업을 줄일 수 있습니다.</p>

  <div class="dh-cta">
    <p>공고가 확정되기 전에는 고객 문제와 검증 기록을 먼저 모으고, 새 문항이 나오면 독스헌트에서 항목별 초안으로 옮겨보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=modoo-startup-2-pre-startup-package-status&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 공통 근거 정리하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${POLICY_STATUS_URL}" target="_blank" rel="noopener noreferrer">대한민국 정책브리핑, 예비창업패키지 흡수 보도 관련 설명</a></li>
      <li><a href="${SECOND_COHORT_BRIEFING_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 모두의 창업 프로젝트 관련 브리핑</a></li>
      <li><a href="${FIRST_COHORT_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

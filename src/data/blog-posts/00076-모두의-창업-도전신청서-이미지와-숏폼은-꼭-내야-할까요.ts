import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const FIRST_COHORT_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066642&cbIdx=310&parentSeq=1066642";
const FIRST_COHORT_PDF_URL =
  "https://mss.go.kr/common/board/Download.do?bcIdx=1066642&cbIdx=310&streFileNm=b1db7f65-7bee-461b-861a-168c81873553.pdf";
const SECOND_COHORT_BRIEFING_URL = "https://www.korea.kr/briefing/policyBriefingView.do?newsId=156772942";

export const post76 = {
  page: 1,
  index: 1,
  slug: "modoo-startup-application-image-shortform",
  sourceUrl: "https://docshunt.ai/blog_detail/modoo-startup-application-image-shortform",
  title: "모두의 창업 도전신청서, 이미지와 숏폼은 꼭 내야 할까요?",
  titleLines: ["모두의 창업", "도전신청서,", "이미지·숏폼은 선택"],
  description:
    "모두의 창업 도전신청서에서는 2026년 1기 기준 이미지 최대 5장과 30~60초 숏폼 URL이 선택사항이었습니다. 장식보다 아이디어 이해를 돕는 증거를 고르고 2기 공고에서 다시 확인하는 법을 정리했습니다.",
  seo: {
    mainKeyword: "모두의 창업 도전신청서",
    supportKeywords: ["모두의 창업 이미지 5장", "모두의 창업 숏폼", "모두의 창업 신청서"],
    searchIntent: "모두의 창업 도전신청서에서 이미지와 숏폼 제출이 필수인지, 무엇을 선택 자료로 붙여야 하는지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.11",
  modifiedDate: "2026.08.11",
  verification: {
    date: "2026.08.11",
    note: "중소벤처기업부의 2026년 모두의 창업 1기 통합 모집공고와 공식 PDF에서 도전신청서 직접 입력, 신청서 외 별도 제출서류 없음, 아이디어를 설명하는 이미지 5장 이내와 30~60초 숏폼 URL의 선택 제출 안내를 확인했습니다. 7월 31일 중소벤처기업부 브리핑은 8월 중순까지 추가 행정절차를 진행한 뒤 그 무렵 2기를 시작할 것으로 예상한다고 밝혔지만, 2026년 8월 11일 현재 최종 2기 모집공고는 확인되지 않았습니다. 다음 모집의 필수·선택 항목은 새 공고와 실제 입력 화면에서 다시 확인해야 합니다.",
    sources: [
      { label: "중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고", url: FIRST_COHORT_NOTICE_URL },
      { label: "중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고 PDF", url: FIRST_COHORT_PDF_URL },
      { label: "중소벤처기업부, 모두의 창업 프로젝트 관련 브리핑", url: SECOND_COHORT_BRIEFING_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00076-modoo-startup-application-image-shortform-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00076-modoo-startup-application-image-shortform-hero.jpg",
  paragraphs: [
    "2026년 모두의 창업 1기 도전신청서에서 아이디어 이해를 돕는 이미지와 숏폼은 필수가 아니라 선택사항이었습니다.",
    "1기 공고는 이미지 5장 이내를 JPG·PNG·GIF 형식으로, 숏폼은 30~60초 내외의 URL로 제출할 수 있다고 안내했습니다.",
    "최대 5장은 채워야 하는 수량이 아닙니다. 신청 문장만으로 설명하기 어려운 제품 구조, 사용 흐름, 관찰 기록을 보여주는 자료만 고르는 편이 낫습니다.",
    "중소벤처기업부는 8월 중순까지 추가 행정절차를 진행한 뒤 그 무렵 2기를 시작할 것으로 예상한다고 밝혔지만, 최종 공고는 아직 확인되지 않았습니다. 다음 모집에서 형식·용량·공개 범위를 다시 확인해야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>2026년 모두의 창업 1기 도전신청서에서 이미지와 숏폼은 필수가 아니라 선택사항이었습니다.</strong> 이미지는 최대 5장, 숏폼은 30~60초 내외의 URL을 제출할 수 있었습니다.</p>
  <p>선택사항이라고 해서 무조건 빼거나, 반대로 최대 수량을 모두 채울 필요는 없습니다. 신청 문장만으로 이해하기 어려운 내용을 <strong>한눈에 확인하게 만드는 자료인지</strong>를 기준으로 고르면 됩니다.</p>

  <h2>1기 공고는 이미지와 숏폼을 ‘제출 가능’으로 안내했습니다</h2>
  <p><a href="${FIRST_COHORT_PDF_URL}" target="_blank" rel="noopener noreferrer">2026년 모두의 창업 1기 통합 모집공고 PDF</a>는 공식 홈페이지에서 도전신청서를 직접 입력하고, 신청서 외 별도 제출서류는 없다고 안내했습니다. 아이디어 이해를 돕기 위한 이미지는 5장 이내, 숏폼은 30~60초 내외로 제출할 수 있었으며 선택사항으로 표시됐습니다.</p>
  <ul>
    <li><strong>이미지:</strong> JPG, PNG, GIF 형식으로 최대 5장</li>
    <li><strong>숏폼:</strong> 30~60초 내외의 영상 URL</li>
    <li><strong>역할:</strong> 도전신청서에 작성한 아이디어의 이해를 돕는 자료</li>
  </ul>
  <p>“5장 이내”는 다섯 장을 반드시 내라는 뜻이 아닙니다. 한 장만으로 제품 흐름이 충분히 보인다면 빈 수량을 장식 이미지로 채우지 않아도 됩니다.</p>

  <h2>이미지 한 장마다 보강할 문장을 정하세요</h2>
  <p>먼저 도전신청서의 문장을 읽고, 글만으로 이해하기 어려운 부분에 표시해보세요. 그 빈틈을 메우는 이미지가 선택 자료의 후보입니다.</p>
  <table>
    <thead>
      <tr>
        <th>보여주려는 내용</th>
        <th>도움이 되는 이미지</th>
        <th>피해야 할 이미지</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>고객 문제</strong></td>
        <td>반복 행동을 익명화한 관찰 기록</td>
        <td>출처 없는 통계 캡처</td>
      </tr>
      <tr>
        <td><strong>해결 흐름</strong></td>
        <td>사용 전·후 행동을 비교한 간단한 도식</td>
        <td>기능 이름만 많은 화면</td>
      </tr>
      <tr>
        <td><strong>현재 단계</strong></td>
        <td>작동 중인 시제품이나 테스트 장면</td>
        <td>완성품처럼 보이게 만든 가상 목업</td>
      </tr>
      <tr>
        <td><strong>검증 결과</strong></td>
        <td>표본과 기간을 밝힌 테스트 요약</td>
        <td>고객 개인정보가 보이는 원본 화면</td>
      </tr>
    </tbody>
  </table>
  <p>이미지를 뺀 뒤에도 같은 문장이 반복된다면 장식일 가능성이 큽니다. 반대로 한 장을 보고 고객, 문제, 현재 단계 중 하나를 더 정확히 설명할 수 있다면 남길 이유가 있습니다.</p>

  <h2>숏폼은 발표 영상보다 짧은 증거에 가깝습니다</h2>
  <p>선택 영상을 만든다면 회사 소개와 시장 규모를 빠르게 읽기보다, 글로 전달하기 어려운 사용 장면을 보여주는 편이 낫습니다. 아래 구성은 공식 심사 규칙이 아닙니다. 30~60초 안에 내용을 정리해보는 가상 예시입니다.</p>
  <div class="dh-note">
    <p><strong>0~10초</strong><br>고객이 반복하는 행동 한 장면</p>
    <p><strong>10~40초</strong><br>시제품으로 그 행동이 어떻게 바뀌는지</p>
    <p><strong>40~60초</strong><br>현재 확인한 결과와 다음에 검증할 내용</p>
  </div>
  <p>영상이 없어도 설명되는 아이디어라면 억지로 만들 필요는 없습니다. 촬영과 편집에 시간을 쓰느라 도전신청서의 문제와 실행 계획이 비어서는 안 됩니다.</p>

  <h2>선택 자료에도 개인정보와 접근 권한을 확인하세요</h2>
  <ul>
    <li>고객과 직원의 얼굴, 이름, 전화번호, 주소가 보이지 않는가?</li>
    <li>메신저·결제·분석 화면에 계정명과 거래정보가 남아 있지 않은가?</li>
    <li>타인의 사진, 음악, 로고를 사용할 권리가 있는가?</li>
    <li>영상 URL이 심사 기간에 로그인 없이 열리고 재생되는가?</li>
    <li>삭제하거나 비공개로 바꾸기 전에 결과 확인 일정까지 고려했는가?</li>
  </ul>
  <p>링크가 열리는지만 본인 계정에서 확인하면 이미 로그인돼 있어 문제를 놓칠 수 있습니다. 로그아웃 상태나 시크릿 창에서 다시 열어보고, 접근 권한과 음소거 상태에서도 핵심이 이해되는지 확인하세요.</p>

  <h2>2기에서는 새 입력 화면을 다시 확인해야 합니다</h2>
  <p><a href="${SECOND_COHORT_BRIEFING_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부의 2026년 7월 31일 브리핑</a>은 7월 중 보안·개인정보 관리 개선 조치를 마쳤고, 8월 중순까지 추가 행정절차를 진행한 뒤 그 무렵 2기를 시작할 것으로 예상한다고 밝혔습니다. 2026년 8월 11일 기준 최종 일정과 조건을 담은 새 모집공고는 확인되지 않았습니다.</p>
  <p>따라서 1기의 최대 장수, 영상 길이, 파일 형식과 링크 제출 방식이 2기에도 같다고 단정할 수 없습니다. 새 모집이 열리면 <a href="${FIRST_COHORT_NOTICE_URL}" target="_blank" rel="noopener noreferrer">종료된 1기 공고</a> 대신 새 공고와 실제 입력 화면부터 확인하세요.</p>
  <p><strong class="dh-emphasis">선택 자료는 빈칸을 채우는 용도가 아닙니다. 신청 문장의 한 부분을 더 빨리 이해시키는 데 쓰입니다.</strong></p>

  <div class="dh-cta">
    <p>이미지를 고르기 전에 고객 문제와 현재 검증 내용을 문장으로 정리하고, 글만으로 부족한 한 장면만 선택 자료로 보완해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=modoo-startup-application-image-shortform&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 도전신청서 정리하기</a>
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

import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const PRE_STARTUP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";
const EARLY_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1065015&cbIdx=310";
const K_STARTUP_URL = "https://www.k-startup.go.kr/";
const TEMPLATE_GUIDE_PATH = "/blog_detail/business-plan-template-instruction-text-checklist";

export const post17 = {
  page: 2,
  index: 7,
  slug: "2026",
  sourceUrl: "https://docshunt.ai/blog_detail/2026",
  title: "한글 사업계획서 양식, 표 칸에 맞추다 근거부터 지우고 있지 않나요?",
  description:
    "지원사업 한글(HWP) 사업계획서 양식은 표 칸이 좁아 분량을 줄이다 숫자의 출처와 기간부터 지우기 쉽습니다. 2026년 예비창업패키지 공고의 제출 방식을 기준으로 내용을 먼저 쓰고 양식에 옮기는 순서를 정리했습니다.",
  seo: {
    mainKeyword: "한글 사업계획서 양식",
    supportKeywords: ["HWP 사업계획서", "사업계획서 양식 수정", "예비창업패키지 사업계획서 양식"],
    searchIntent: "지원사업 공고에 첨부된 한글(HWP·HWPX) 사업계획서 양식을 깨지지 않게 채우고, 분량을 줄여도 근거가 빠지지 않게 하고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.01.22",
  modifiedDate: "2026.11.20",
  verification: {
    date: "2026.11.20",
    note: "제출서류, 파일 용량, 접수 마감 후 수정 불가, 주관기관 표기 기준은 2026년 예비창업패키지 수정 공고(2차, 제2026-207호) 첨부 공고문에서, 초기창업패키지 평가항목 세부 내용은 2026년 초기창업패키지(일반형, 제2026-38호) 공고문에서 확인했습니다. 두 공고 모두 접수가 끝났습니다. 본문의 고치기 전·후 문장은 설명을 위한 가상 예시입니다.",
    sources: [
      { label: "중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)", url: PRE_STARTUP_NOTICE_URL },
      { label: "중소벤처기업부, 2026년 초기창업패키지(일반형) 창업기업 모집공고", url: EARLY_NOTICE_URL },
      { label: "K-Startup 창업지원포털", url: K_STARTUP_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00017-hwp-business-plan-template-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00017-hwp-business-plan-template-hero.jpg",
  paragraphs: [
    "한글 사업계획서 양식은 표 칸이 좁아서, 내용을 붙여 넣으면 표가 늘어나고 쪽수가 넘칩니다. 그때 가장 먼저 지워지는 것이 숫자 옆의 출처, 조사 기간, 대상 같은 근거입니다.",
    "2026년 예비창업패키지는 사업신청서를 온라인으로 입력하고, 사업계획서는 공고 별첨 양식 파일로 첨부(30MB 제한)하게 했습니다. 접수 마감 뒤에는 사업계획서를 고치거나 지울 수 없었습니다.",
    "양식을 먼저 열고 칸을 채우기보다, 평가항목별 내용을 따로 쓴 뒤 양식에 옮기고 마지막에 분량을 줄이는 편이 근거를 지키기 쉽습니다.",
    "같은 평가항목 이름이라도 사업마다 세부 질문이 다릅니다. 다른 공고로 옮길 때는 문항 이름이 아니라 세부 질문을 기준으로 내용을 다시 배치하세요.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>한글 사업계획서 양식을 채우다 보면 표 칸에 맞추느라 문장을 줄이게 됩니다.</strong> 이때 형용사보다 먼저 지워지는 것이 "2025년 10월, 온라인 판매자 12명 인터뷰"처럼 숫자를 받치는 출처와 기간입니다. 칸은 맞췄는데 심사위원이 확인할 근거가 사라지는 셈입니다.</p>
  <p>이 글은 양식 파일을 열기 전에 무엇을 먼저 써야 하는지, 분량을 줄일 때 무엇을 남겨야 하는지를 다룹니다. 제출 기준은 <a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년 예비창업패키지 수정 공고</a>를 예로 들었고, 이 공고의 접수는 2026년 3월 26일에 끝났습니다.</p>

  <h2>2026년 예비창업패키지는 사업계획서를 어떻게 받았나요</h2>
  <p>공고문은 제출서류를 세 가지로 나누고, 사업계획서만 별도 양식 파일로 첨부하게 했습니다.</p>
  <table>
    <thead>
      <tr>
        <th>제출서류</th>
        <th>제출 방법</th>
        <th>공고문에 적힌 주의점</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>사업신청서</strong></td>
        <td>K-Startup 누리집에 온라인 입력</td>
        <td>신청자 본인이 신청해야 하며, 타인이 신청하면 탈락 처리</td>
      </tr>
      <tr>
        <td><strong>사업계획서</strong></td>
        <td>공고 별첨 1 양식으로 작성해 파일 첨부</td>
        <td>용량 제한 30MB, 접수 마감(3월 26일 18시) 뒤 수정·삭제 불가</td>
      </tr>
      <tr>
        <td><strong>증빙서류</strong></td>
        <td>파일 첨부 또는 공공마이데이터 동의</td>
        <td>가점 증빙은 신청할 때 내야 하며, 내지 않으면 가점으로 인정하지 않음</td>
      </tr>
    </tbody>
  </table>
  <p>공고문은 사업계획서에 적은 주관기관과 K-Startup에서 고른 주관기관이 같은지 꼭 확인하라고 했고, 다르면 시스템 접수 기준으로 평가한다고 적었습니다. 지난 공고의 양식을 복사해 쓰다 보면 이런 칸이 예전 값으로 남기 쉽습니다. 마감일에는 접속이 몰릴 수 있으니 2~3일 전에 신청하라는 권고도 있었습니다.</p>

  <h2>양식부터 열면 왜 근거가 빠질까요</h2>
  <p>한글 양식의 표는 칸 높이와 쪽수가 정해져 있어, 내용을 붙여 넣는 순간 분량 싸움이 시작됩니다. 문장을 줄일 때 사람은 보통 뒤쪽부터 자르는데, 사업계획서 문장의 뒤쪽에는 대개 "~를 통해 확인했습니다" 같은 근거가 붙어 있습니다.</p>
  <div class="dh-note">
    <p><strong>칸에 맞추기 전 (가상 예시)</strong><br>온라인 판매자 12명을 2025년 10월에 인터뷰한 결과, 8명이 주문 내역을 엑셀로 손수 옮기고 있었고 그중 5명은 하루 1시간 이상 쓴다고 답했습니다.</p>
    <p><strong>뒤에서부터 자른 문장</strong><br>온라인 판매자 대부분이 주문 관리에 어려움을 겪고 있습니다.</p>
    <p><strong>근거를 남기고 줄인 문장</strong><br>판매자 12명 인터뷰(2025.10): 8명이 주문 내역을 엑셀로 수기 정리, 5명은 하루 1시간 이상 소요</p>
  </div>
  <p>세 번째 문장은 두 번째보다 짧지 않을 수 있지만, 누구에게 언제 무엇을 확인했는지가 남아 있습니다. 칸이 모자라면 수식어와 배경 설명을 먼저 덜어내고, 숫자·대상·기간은 마지막까지 지키세요.</p>

  <h2>내용을 먼저 쓰고 양식에 옮기는 순서</h2>
  <ol>
    <li><strong>평가항목별로 따로 쓰기:</strong> 2026년 예비창업패키지는 문제인식, 실현가능성, 성장전략, 팀(기업) 구성 네 항목으로 평가했습니다. 양식을 열기 전에 항목마다 하고 싶은 말과 근거 자료를 한 문서에 따로 적어 두세요.</li>
    <li><strong>양식의 세부 질문에 맞춰 옮기기:</strong> 양식 칸 제목 아래의 세부 질문을 읽고, 미리 쓴 내용 중 그 질문에 답하는 부분만 옮깁니다.</li>
    <li><strong>마지막에 분량 줄이기:</strong> 표가 넘치면 수식어, 반복된 배경 설명, 같은 말을 다르게 한 문장 순서로 지웁니다.</li>
    <li><strong>안내 문구와 예전 값 정리:</strong> 양식에 남은 작성 안내 문구, 지난 공고의 주관기관명과 날짜를 지웁니다. 안내 문구를 어떻게 처리할지는 <a href="${TEMPLATE_GUIDE_PATH}">사업계획서 양식 안내문 정리 글</a>에서 따로 다뤘습니다.</li>
    <li><strong>제출 직전 파일 다시 열기:</strong> 저장한 파일을 다른 컴퓨터나 뷰어에서 열어 표가 밀리거나 그림이 빠지지 않았는지 확인합니다. 용량이 30MB 같은 제한에 걸리지 않는지도 이때 봅니다.</li>
  </ol>

  <h2>같은 평가항목 이름이라도 세부 질문은 다릅니다</h2>
  <p>2026년 예비창업패키지와 <a href="${EARLY_NOTICE_URL}" target="_blank" rel="noopener noreferrer">초기창업패키지</a>는 평가항목 이름이 같았지만, 공고문에 적힌 세부 내용은 조금씩 달랐습니다.</p>
  <table>
    <thead>
      <tr>
        <th>평가항목</th>
        <th>예비창업패키지(2026)</th>
        <th>초기창업패키지 일반형(2026)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>문제인식</strong></td>
        <td>개발 동기, 해결방안(필요성)</td>
        <td>개발 배경 및 필요성</td>
      </tr>
      <tr>
        <td><strong>실현가능성</strong></td>
        <td>개발(개선) 방법, 경쟁력 확보 방안</td>
        <td>사업기간 내 개발 또는 구체화 계획</td>
      </tr>
      <tr>
        <td><strong>성장전략</strong></td>
        <td>시장진입 전략, 자금조달 방안</td>
        <td>차별성, 수익모델, 자금조달 방안</td>
      </tr>
      <tr>
        <td><strong>팀(기업) 구성</strong></td>
        <td colspan="2">대표자와 고용(예정) 인력이 보유한 기술역량과 노하우</td>
      </tr>
    </tbody>
  </table>
  <p>예비창업패키지 양식에서 "경쟁력 확보 방안"으로 쓴 내용은 초기창업패키지에서는 성장전략의 "차별성"으로 옮겨야 자연스럽습니다. 한 양식의 칸을 통째로 복사해 다른 양식의 같은 이름 칸에 붙이면, 질문과 답이 어긋날 수 있습니다.</p>

  <div class="dh-cta">
    <p>독스헌트에 공고문과 한글(HWP·HWPX) 양식을 올리면 문항 구조에 맞춘 초안을 만들고, 고친 문서를 한글 파일로 내보낼 수 있습니다. 근거가 남았는지는 제출 전에 직접 확인하세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=hwp-business-plan-template&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트로 한글 양식 채우기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)</a></li>
      <li><a href="${EARLY_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 초기창업패키지(일반형) 창업기업 모집공고</a></li>
      <li><a href="${K_STARTUP_URL}" target="_blank" rel="noopener noreferrer">K-Startup 창업지원포털</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

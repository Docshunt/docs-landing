import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const ANNOUNCEMENT_URL = "https://mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1069575&cbIdx=310";
const TEMPLATE_URL =
  "https://mss.go.kr/common/board/Download.do?bcIdx=1069575&cbIdx=310&streFileNm=abc09db3-d842-4865-b25c-b740054b154f.pdf";

export const post73 = {
  page: 1,
  index: 1,
  slug: "business-plan-template-instruction-text-checklist",
  sourceUrl: "https://docshunt.ai/blog_detail/business-plan-template-instruction-text-checklist",
  title: "사업계획서 양식, 파란 안내문까지 남겨 제출해야 할까요?",
  titleLines: ["사업계획서 양식,", "안내문 지워도 될까요?"],
  description:
    "사업계획서 양식의 파란 안내문, 작성 목차, 빈칸과 개인정보를 제출 전에 어떻게 처리해야 할까요? 공식 양식의 지시를 바탕으로 삭제·유지·마스킹 항목을 구분했습니다.",
  seo: {
    mainKeyword: "사업계획서 양식",
    supportKeywords: ["사업계획서 작성법", "사업계획서 목차", "사업계획서 제출"],
    searchIntent: "사업계획서 양식의 안내문·목차·빈칸·개인정보를 제출 전에 삭제할지 유지할지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.11",
  modifiedDate: "2026.08.11",
  verification: {
    date: "2026.08.11",
    note: "중소벤처기업부의 2026년 지역 첨단제조 스타트업 스케일업 사업계획서 양식에서 목차 페이지 삭제, 양식 변경·삭제 금지, 해당 없는 표의 공란 유지, 파란 안내문 삭제, 개인정보 제외·마스킹 지시를 확인했습니다. 이 규칙은 해당 공고의 양식 사례이며 실제 제출에서는 지원하려는 최신 공고와 첨부 양식을 최종 기준으로 확인해야 합니다.",
    sources: [
      { label: "중소벤처기업부, 2026년 지역 첨단제조 스타트업 스케일업 창업기업 모집공고", url: ANNOUNCEMENT_URL },
      { label: "중소벤처기업부, 첨단제조 스케일업 창업기업 사업계획서 양식", url: TEMPLATE_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00073-business-plan-template-instruction-text-checklist-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00073-business-plan-template-instruction-text-checklist-hero.jpg",
  paragraphs: [
    "사업계획서 양식에 파란색으로 적힌 작성 안내를 답변과 함께 남기면 되는지 묻는 분이 많습니다. 2026년 지역 첨단제조 스타트업 스케일업 공식 양식은 파란 안내문을 삭제하고 검정 글씨로 작성하도록 지시했습니다.",
    "같은 양식은 작성 목차 페이지는 제출 전에 삭제하되, 본문 양식 자체는 변경하거나 삭제하지 말라고 안내합니다. 해당 없는 표의 칸은 임의로 없애지 않고 공란으로 유지해야 합니다.",
    "대표자와 직원의 이름, 성별, 생년월일, 학교명·소재지, 직장명처럼 개인을 식별하거나 유추할 수 있는 정보는 제외하거나 마스킹해야 합니다.",
    "삭제와 유지 규칙은 공고마다 다를 수 있습니다. 예전 파일이나 다른 사업의 작성법을 복사하지 말고, 지금 지원하는 공고의 최신 첨부 양식 첫 페이지부터 확인하세요.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>이 글에서 확인한 공식 사업계획서 양식에서는 파란색 안내문을 삭제하고, 답변은 검정 글씨로 작성해야 합니다.</strong> 작성 목차 페이지도 제출 전 삭제 대상입니다. 반면 본문 양식의 항목과 표는 임의로 바꾸거나 없애면 안 됩니다.</p>
  <p>“양식을 삭제하지 말라”와 “안내문은 삭제하라”가 함께 적혀 있어 헷갈릴 수 있습니다. 제출 전에는 문서 전체를 한꺼번에 정리하지 말고, 양식이 직접 지정한 <strong>삭제·유지·마스킹</strong> 규칙을 나눠 확인해야 합니다.</p>

  <h2>공식 양식의 지시를 세 묶음으로 나눠보세요</h2>
  <p><a href="${TEMPLATE_URL}" target="_blank" rel="noopener noreferrer">2026년 지역 첨단제조 스타트업 스케일업 공식 사업계획서 양식</a>에는 제출 전에 처리할 항목이 구체적으로 적혀 있습니다.</p>
  <table>
    <thead>
      <tr>
        <th>처리</th>
        <th>이 양식에서 확인한 항목</th>
        <th>제출 전 행동</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>삭제</strong></td>
        <td>작성 목차 페이지, 파란색 안내 문구</td>
        <td>양식이 삭제하라고 지정한 부분만 지웁니다.</td>
      </tr>
      <tr>
        <td><strong>유지</strong></td>
        <td>본문 항목, 표 구조, 해당 없는 표의 빈칸</td>
        <td>항목을 합치거나 표를 없애지 않고 공란을 둡니다.</td>
      </tr>
      <tr>
        <td><strong>마스킹</strong></td>
        <td>개인을 식별하거나 유추할 수 있는 정보</td>
        <td>정보를 제외하거나 ○, * 등으로 가립니다.</td>
      </tr>
    </tbody>
  </table>
  <p>아래 표는 이 공고의 양식을 기준으로 정리했습니다.</p>

  <h2>‘양식 변경 금지’는 답변을 쓰지 말라는 뜻이 아닙니다</h2>
  <p>양식 변경 금지는 보통 평가에 필요한 항목과 구조를 임의로 없애지 말라는 뜻입니다. 질문 제목을 바꾸거나 여러 표를 하나로 합치면 평가자가 필요한 답을 찾기 어려워질 수 있습니다.</p>
  <p>반면 공식 양식이 허용한 범위 안에서는 설명을 위한 이미지와 표를 넣거나 표 안의 행을 추가할 수 있습니다. 핵심은 원래 질문과 답변의 대응 관계를 유지하는 것입니다.</p>
  <div class="dh-note">
    <p><strong>지우면 안 되는 것</strong><br>문제인식·실현가능성·성장전략·팀처럼 평가 질문을 구분하는 본문 항목과 표 구조</p>
    <p><strong>지워야 하는 것</strong><br>“여기에 작성하세요”처럼 양식이 삭제 대상으로 직접 표시한 안내 문구</p>
  </div>

  <h2>해당 사항이 없다고 표까지 삭제하지 마세요</h2>
  <p>작성할 내용이 없으면 표를 통째로 지우고 싶어집니다. 하지만 이 양식은 해당 없는 표의 칸을 공란으로 유지하라고 안내합니다. 빈칸을 없애면 작성자가 빠뜨린 것인지, 해당 사항이 없는 것인지 구분하기 어려워질 수 있습니다.</p>
  <p>공란 처리 방식도 양식마다 다릅니다. “해당 없음”을 적으라는 지시가 있다면 그 문구를 따르고, 별도 지시가 없다면 임의의 기호로 채우기 전에 담당 기관의 작성 안내와 FAQ를 확인하세요.</p>

  <h2>개인정보는 문장뿐 아니라 증빙 이미지에서도 확인하세요</h2>
  <p>이 공식 양식은 대표자와 직원의 성명, 성별, 생년월일, 대학교명과 소재지, 직장명 등 개인을 식별하거나 유추할 수 있는 정보를 제외하거나 마스킹하도록 안내합니다. 경력의 내용이 필요하더라도 개인이나 기관이 특정되지 않도록 허용된 범위로 줄여야 합니다.</p>
  <ul>
    <li>화면 캡처에 고객 이름, 전화번호, 이메일이 남아 있지 않은가?</li>
    <li>이력 증빙 이미지에 학교명, 직장명, 사번이 보이지 않는가?</li>
    <li>파일 속성과 주석에 작성자 실명이나 조직명이 남아 있지 않은가?</li>
    <li>마스킹한 글자 아래 원문을 복사하거나 검색할 수 있는 상태는 아닌가?</li>
  </ul>
  <p>검은 도형을 겹쳐 놓는 것만으로는 원문이 남을 수 있습니다. 제출용 사본을 따로 만들고, PDF로 변환한 뒤 검색과 복사가 가능한지 다시 확인하는 편이 안전합니다.</p>

  <h2>제출 직전에는 새 사본에서 정리하세요</h2>
  <ol>
    <li>지원하려는 <a href="${ANNOUNCEMENT_URL}" target="_blank" rel="noopener noreferrer">공고 원문</a>에서 최신 첨부파일인지 확인합니다.</li>
    <li>원본은 보관하고 제출용 사본을 따로 만듭니다.</li>
    <li>양식 첫 페이지의 삭제·유지·분량 지시를 체크리스트로 옮깁니다.</li>
    <li>파란 안내문과 목차처럼 명시된 삭제 대상만 지웁니다.</li>
    <li>빈칸, 개인정보, 페이지 수, 파일 용량과 파일명을 마지막으로 확인합니다.</li>
  </ol>
  <p><strong class="dh-emphasis">색깔만 보고 지우지 말고, 양식이 문장으로 지정한 처리 규칙을 기준으로 판단하세요.</strong> 같은 기관의 공고라도 연도와 사업에 따라 제출 규칙이 달라질 수 있습니다.</p>

  <div class="dh-cta">
    <p>최신 양식의 항목을 그대로 유지한 제출용 사본을 만든 뒤, 각 질문에 들어갈 근거와 답변을 독스헌트에서 정리해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=business-plan-template-instruction-text-checklist&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 사업계획서 작성하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${ANNOUNCEMENT_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 지역 첨단제조 스타트업 스케일업 창업기업 모집공고</a></li>
      <li><a href="${TEMPLATE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 첨단제조 스케일업 창업기업 사업계획서 양식</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

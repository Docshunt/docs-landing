import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const OPENAI_DATA_CONTROLS_URL = "https://help.openai.com/en/articles/7730893-temporary-chat";
const OPENAI_RETENTION_URL = "https://help.openai.com/en/articles/8983778-chat-and-file-retention-policies-in-chatgpt";
const GEMINI_PRIVACY_URL = "https://support.google.com/gemini/answer/13594961?hl=ko";

export const post74 = {
  page: 1,
  index: 1,
  slug: "business-plan-ai-file-privacy-checklist",
  sourceUrl: "https://docshunt.ai/blog_detail/business-plan-ai-file-privacy-checklist",
  title: "사업계획서 AI, 원본 파일을 통째로 올려도 될까요?",
  titleLines: ["사업계획서 AI,", "원본 파일부터", "올리지 마세요"],
  description:
    "사업계획서 AI에 원본 파일을 올리기 전에 고객·직원 개인정보와 계약·원가 같은 영업정보를 줄여야 합니다. 필요한 부분만 발췌하고 데이터 설정과 삭제 경로를 확인하는 순서를 정리했습니다.",
  seo: {
    mainKeyword: "사업계획서 AI",
    supportKeywords: ["AI 사업계획서 개인정보", "생성형 AI 파일 업로드", "사업계획서 보안"],
    searchIntent: "사업계획서를 생성형 AI에 올리기 전에 어떤 개인정보와 영업정보를 지우고 어떤 데이터 설정을 확인해야 하는지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.11",
  modifiedDate: "2026.08.11",
  verification: {
    date: "2026.08.11",
    note: "OpenAI의 Data Controls·Temporary Chat 안내와 채팅·파일 보존 정책, Google Gemini Apps Privacy Hub를 2026년 8월 11일 확인했습니다. 본문은 개인용 서비스의 공개 안내를 기준으로 하며 기업·교육·조직 계정의 계약과 관리자 설정은 다를 수 있습니다. 어떤 설정도 민감정보 업로드의 무위험을 보장하지 않으므로 데이터 최소화를 우선 원칙으로 삼았습니다.",
    sources: [
      { label: "OpenAI, Data Controls FAQ", url: OPENAI_DATA_CONTROLS_URL },
      { label: "OpenAI, Chat and File Retention Policies in ChatGPT", url: OPENAI_RETENTION_URL },
      { label: "Google, Gemini Apps Privacy Hub", url: GEMINI_PRIVACY_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00074-business-plan-ai-file-privacy-checklist-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00074-business-plan-ai-file-privacy-checklist-hero.jpg",
  paragraphs: [
    "사업계획서 AI를 쓰기 위해 원본 파일 전체를 먼저 올릴 필요는 없습니다. 질문에 필요한 항목만 발췌한 사본을 만들고 개인정보와 영업정보를 제거한 뒤 사용해야 합니다.",
    "고객 이름·연락처, 직원 정보, 계약서, 거래처별 단가, 미공개 기술, 계정정보는 문장을 다듬는 데 꼭 필요한 데이터가 아닐 수 있습니다. 필요한 관계만 고객 A, 협력사 B 같은 일관된 표기로 남기세요.",
    "학습 사용을 끄는 설정, 임시 대화, 대화 삭제는 서로 같은 기능이 아닙니다. 사용하려는 서비스의 데이터 제어와 파일 보존 정책을 각각 확인해야 합니다.",
    "회사나 학교 계정이라면 개인용 서비스의 공개 안내보다 조직의 계약과 보안 규정이 우선입니다. 외부 AI 업로드가 금지된 문서는 설정을 바꿔도 올리면 안 됩니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>사업계획서 AI에 원본 파일을 통째로 올리는 것부터 시작하지 마세요.</strong> 먼저 AI가 답하는 데 필요한 항목을 정하고, 그 부분만 복사한 사본에서 개인정보와 영업정보를 줄이는 편이 안전합니다.</p>
  <p>데이터 학습 사용을 끄거나 임시 대화를 선택했다고 해서 어떤 문서든 올려도 된다는 뜻은 아닙니다. <strong>최소 발췌 → 마스킹 → 데이터 설정 확인 → 사용 뒤 삭제 확인</strong> 순서로 접근하세요.</p>

  <h2>AI가 꼭 봐야 하는 내용부터 한 문장으로 정하세요</h2>
  <p>“사업계획서 전체를 고쳐줘”라고 요청하면 전체 파일이 필요한 것처럼 느껴집니다. 질문을 좁히면 업로드할 정보도 줄일 수 있습니다.</p>
  <div class="dh-note">
    <p><strong>너무 넓은 요청</strong><br>이 사업계획서가 합격할지 평가해줘.</p>
    <p><strong>범위를 줄인 요청</strong><br>고객 문제 문단에서 주장과 근거가 연결되는지 확인해줘. 아래 3개 문단만 검토해줘.</p>
  </div>
  <p>문장 구조를 검토받는 데 고객의 실명이나 거래처별 단가표가 필요하지는 않습니다. 목적을 먼저 정하면 원본 파일 대신 문제인식 한 항목, 일정표 한 장, 익명화한 표처럼 작은 단위로 보낼 수 있습니다.</p>

  <h2>공개 자료와 비공개 자료를 같은 파일에 두지 마세요</h2>
  <table>
    <thead>
      <tr>
        <th>자료</th>
        <th>예시</th>
        <th>AI에 보내기 전 행동</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>공개 자료</strong></td>
        <td>공식 공고문, 공개된 빈 양식</td>
        <td>출처와 최신 버전을 확인합니다.</td>
      </tr>
      <tr>
        <td><strong>개인정보</strong></td>
        <td>이름, 전화번호, 이메일, 생년월일, 주소</td>
        <td>삭제하거나 일관된 가명으로 바꿉니다.</td>
      </tr>
      <tr>
        <td><strong>영업정보</strong></td>
        <td>계약 조건, 거래처 단가, 미공개 원가, 투자 협의</td>
        <td>질문에 꼭 필요한 범위만 추상화합니다.</td>
      </tr>
      <tr>
        <td><strong>접근정보</strong></td>
        <td>비밀번호, API 키, 내부 링크, 서명 원본</td>
        <td>업로드 대상에서 완전히 제외합니다.</td>
      </tr>
    </tbody>
  </table>
  <p>숫자 구조가 필요하다면 실제 거래처명과 금액을 그대로 남기기보다 “고객 A”, “단가 구간”, “전월 대비 변화율”처럼 검토 목적을 충족하는 최소 정보로 바꿀 수 있습니다. 다만 법률·계약상 보존 의무가 있는 원본은 별도로 보관해야 합니다.</p>

  <h2>검은 상자를 덮는 것보다 새 사본을 만드세요</h2>
  <p>PDF 위에 검은 도형을 올려도 아래 글자가 복사되거나 검색될 수 있습니다. 주석, 변경 이력, 문서 속성, 숨긴 시트에도 정보가 남을 수 있습니다.</p>
  <ol>
    <li>원본을 보존하고 AI 검토용 사본을 새로 만듭니다.</li>
    <li>필요한 문단과 표만 남기고 나머지 페이지를 제거합니다.</li>
    <li>이름은 고객 A, 직원 B처럼 문서 전체에서 같은 가명으로 바꿉니다.</li>
    <li>PDF나 이미지로 내보낸 뒤 검색·복사·속성을 다시 확인합니다.</li>
    <li>마스킹 사본에도 업로드 금지 정보가 없는지 마지막으로 읽습니다.</li>
  </ol>

  <h2>‘학습 끄기’와 ‘기록 삭제’를 구분하세요</h2>
  <p><a href="${OPENAI_DATA_CONTROLS_URL}" target="_blank" rel="noopener noreferrer">OpenAI의 Data Controls 안내</a>에 따르면 개인용 ChatGPT에서 ‘Improve the model for everyone’을 끄면 새 대화가 모델 개선에 사용되지 않지만, 대화는 기록에 남을 수 있습니다. Temporary Chat은 기록과 메모리에 나타나지 않고 모델 개선에도 사용되지 않으며, 안전 목적의 검토 가능성과 최대 30일 보존 후 삭제를 별도로 안내합니다.</p>
  <p>또한 <a href="${OPENAI_RETENTION_URL}" target="_blank" rel="noopener noreferrer">ChatGPT 채팅·파일 보존 정책</a>은 일부 계정에서 Library에 저장된 파일이 채팅과 별도로 관리될 수 있다고 설명합니다. 해당 기능을 사용하는 경우 대화 삭제만 확인하지 말고 Library의 파일도 별도로 삭제해야 합니다.</p>
  <p><a href="${GEMINI_PRIVACY_URL}" target="_blank" rel="noopener noreferrer">Google Gemini Apps Privacy Hub</a>는 Keep Activity가 켜진 대화 일부가 사람의 검토를 거칠 수 있으므로 검토자가 보아서는 안 되는 기밀정보를 입력하지 말라고 안내합니다. Keep Activity를 끄거나 임시 채팅을 사용한 대화도 서비스 제공과 안전 등을 위해 최대 72시간 보관될 수 있다고 설명합니다.</p>
  <p>서비스 화면과 정책은 바뀔 수 있습니다. 업로드 직전에 현재 계정의 설정 화면과 공식 보존 정책을 다시 확인하세요.</p>

  <h2>조직 규정이 있으면 개인 설정보다 먼저 확인하세요</h2>
  <p>회사·학교·기관 계정은 별도 계약, 관리자 설정, 보존 기간과 감사 정책이 적용될 수 있습니다. 반대로 개인 계정으로 옮기면 규정을 피할 수 있다고 생각해서도 안 됩니다.</p>
  <ul>
    <li>외부 생성형 AI에 업로드할 수 있는 문서 등급인가?</li>
    <li>고객이나 파트너와 맺은 비밀유지 의무에 어긋나지 않는가?</li>
    <li>승인된 계정과 기능을 사용하고 있는가?</li>
    <li>사용 뒤 대화와 파일을 어디에서 지워야 하는가?</li>
  </ul>
  <p>하나라도 확인하지 못했다면 원문을 보내지 말고, 공개 정보만으로 만든 가상 예시나 문장 구조만 검토받는 방식으로 바꾸세요.</p>
  <p><strong class="dh-emphasis">가장 안전한 파일은 설정을 잘 고른 원본이 아니라, 애초에 불필요한 민감정보가 들어 있지 않은 최소 사본입니다.</strong></p>

  <div class="dh-cta">
    <p>민감정보를 뺀 검토용 사본을 준비했다면, 공고 질문별로 필요한 근거만 나눠 독스헌트에서 초안을 정리해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=business-plan-ai-file-privacy-checklist&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 안전하게 초안 준비하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${OPENAI_DATA_CONTROLS_URL}" target="_blank" rel="noopener noreferrer">OpenAI, Data Controls FAQ</a></li>
      <li><a href="${OPENAI_RETENTION_URL}" target="_blank" rel="noopener noreferrer">OpenAI, Chat and File Retention Policies in ChatGPT</a></li>
      <li><a href="${GEMINI_PRIVACY_URL}" target="_blank" rel="noopener noreferrer">Google, Gemini Apps Privacy Hub</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

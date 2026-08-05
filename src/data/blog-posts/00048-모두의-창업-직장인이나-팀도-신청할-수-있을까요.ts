import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066642&cbIdx=310";
const FAQ_URL = "https://ec.jnu.ac.kr/bbs/ec/237/835571/download.do";
const STATUS_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1069596&cbIdx=87";

export const post48 = {
  page: 1,
  index: 1,
  slug: "modoo-startup-team-employee",
  sourceUrl: "https://docshunt.ai/blog_detail/modoo-startup-team-employee",
  title: "모두의 창업, 직장인이나 팀도 신청할 수 있을까요?",
  titleLines: ["모두의 창업 직장인·팀,", "신청할 수 있을까요?"],
  description:
    "모두의 창업에 직장인과 팀이 신청할 수 있는지 1기 공식 FAQ를 기준으로 확인했습니다. 대표 신청자가 개인으로 접수하고 팀원 정보를 입력했던 방식, 재직자의 겸직 규정과 프로그램 참여 가능 시간을 신청 전에 확인해야 하는 이유를 정리합니다.",
  author: "독스헌트 마케팅팀",
  date: "2026.08.05",
  modifiedDate: "2026.08.05",
  verification: {
    date: "2026.08.05",
    note: "모두의 창업 1기 일반·기술 분야 FAQ를 기준으로 직장인·팀 신청 규정을 확인했습니다. 소속 회사의 겸직 규정과 2기 최종 공고는 신청자가 별도로 확인해야 합니다.",
    sources: [
      { label: "중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고", url: NOTICE_URL },
      { label: "모두의 창업 프로젝트 1기 일반·기술 분야 FAQ", url: FAQ_URL },
      { label: "중소벤처기업부, 모두의 창업 2기 모집 일정 조정 설명", url: STATUS_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00048-modoo-startup-team-employee-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00048-modoo-startup-team-employee-hero.jpg",
  paragraphs: [
    "모두의 창업 1기 FAQ 기준으로 직장인도 신청할 수 있었고 팀과 함께 도전하는 것도 가능했습니다.",
    "다만 팀 명의로 신청하는 방식은 아니었습니다. 개인의 아이디어를 평가하므로 대표 신청자가 개인으로 접수하고 팀원 정보는 부가정보로 입력했습니다.",
    "직장인은 소속 회사의 겸직 허용 여부를 확인하고, 멘토링과 사업화 과정에 실제로 참여할 수 있어야 했습니다.",
    "2기 신청 방식은 바뀔 수 있으므로 새 공고에서 신청 주체, 팀원 입력, 재직자 제한과 참여 의무를 다시 확인해야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>모두의 창업 1기 FAQ 기준으로 직장인도 신청할 수 있었고, 팀과 함께 도전하는 것도 가능했습니다.</strong> 다만 팀 법인이나 팀 이름으로 접수하는 방식은 아니었습니다. 대표 신청자가 개인으로 신청하고 팀원 정보를 함께 입력하는 구조였습니다.</p>
  <p>아래 내용은 1기 일반·기술 분야 기준입니다. 2기 세부 공고는 아직 나오지 않았으므로 새 접수가 열리면 신청 주체와 재직자 조건을 다시 확인해야 합니다.</p>

  <h2>팀이 있어도 신청자는 개인이었습니다</h2>
  <p><a href="${FAQ_URL}" target="_blank" rel="noopener noreferrer">1기 FAQ</a>는 팀으로 창업에 도전할 수 있다고 안내했습니다. 평가 대상은 신청자 개인의 아이디어였고, 함께 도전할 팀원 정보는 신청서에 별도로 입력할 수 있었습니다.</p>
  <p>1기에서는 팀원의 유무나 역량이 선정 평가 요소에 반영되지 않는다고 명시했습니다. 팀 경력만 길게 적는 것보다 누가 신청자이고 누구의 아이디어인지, 신청자가 프로그램에 끝까지 참여할 수 있는지를 먼저 정리하는 편이 중요했습니다.</p>

  <h2>직장인은 신청보다 겸직 확인이 먼저입니다</h2>
  <p>1기 FAQ는 직장인도 신청할 수 있다고 답했습니다. 동시에 소속 직장의 겸직 허가 여부를 확인하고, 운영기관의 멘토링과 사업화 과정을 성실히 이행할 수 있어야 한다고 안내했습니다.</p>
  <div class="dh-note">
    <strong>재직 중이라면 신청 전에 확인할 것</strong>
    <ul>
      <li>회사 취업규칙과 근로계약서에 겸직·경업 제한이 있는지</li>
      <li>회사 업무로 만든 기술이나 자료와 개인 아이디어가 섞여 있지 않은지</li>
      <li>대면 멘토링과 프로그램 일정에 실제로 참여할 수 있는지</li>
      <li>선정 이후 사업자등록이나 협약 조건을 충족할 수 있는지</li>
    </ul>
  </div>
  <p>겸직 가능 여부는 회사마다 다릅니다. 신청 가능하다는 공고 문구가 소속 회사의 내부 규정까지 대신 허용해주는 것은 아닙니다. 인사 담당자 확인이 필요하다면 아이디어의 비밀을 지키면서 절차부터 물어보세요.</p>

  <h2>팀과 신청할 때는 역할보다 약속을 먼저 맞추세요</h2>
  <ol>
    <li><strong>신청자:</strong> 누가 개인 명의로 접수하고 전체 일정을 책임질지 정합니다.</li>
    <li><strong>아이디어 권리:</strong> 공동으로 만든 아이디어와 결과물의 권리를 문서로 남깁니다.</li>
    <li><strong>참여 시간:</strong> 멘토링, 발표, 시제품 제작에 각자 얼마나 참여할지 정합니다.</li>
    <li><strong>선정 이후:</strong> 법인 설립, 지분, 비용 집행을 언제 논의할지 합의합니다.</li>
  </ol>
  <p>신청서에는 화려한 직함보다 실제로 누가 무엇을 맡을지 쓰는 편이 읽기 쉽습니다. “공동창업자 3명”보다 “신청자는 고객 인터뷰와 사업 운영, 팀원 A는 시제품 개발, 팀원 B는 디자인 테스트를 맡는다”가 구체적입니다.</p>

  <h2>2기에서는 네 항목을 다시 확인하세요</h2>
  <p>중기부는 <a href="${STATUS_URL}" target="_blank" rel="noopener noreferrer">플랫폼 보안 강화 후 2기 모집을 시작할 예정</a>이라고 밝혔습니다. 신청 가능 여부, 팀원 입력 방식, 직장인 제한, 선정 이후 의무가 1기와 같은지는 최종 공고를 기준으로 판단하세요.</p>
  <p>직장인이나 팀이라는 이유만으로 먼저 포기할 필요는 없습니다. 다만 신청할 수 있다는 것과 선정 이후 프로그램을 실제로 수행할 수 있다는 것은 별개의 문제입니다.</p>

  <div class="dh-cta">
    <p>신청자와 팀원의 역할, 현재 확인한 고객 문제를 먼저 정리해 하나의 사업계획서 흐름으로 연결해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=modoo-startup-team-employee&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 역할 정리하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고</a></li>
      <li><a href="${FAQ_URL}" target="_blank" rel="noopener noreferrer">모두의 창업 프로젝트 1기 일반·기술 분야 FAQ</a></li>
      <li><a href="${STATUS_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 모두의 창업 2기 모집 일정 조정 설명</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

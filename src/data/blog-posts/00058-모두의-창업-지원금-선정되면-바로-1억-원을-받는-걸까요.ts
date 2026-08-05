import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066642&cbIdx=310";
const FAQ_URL = "https://ec.jnu.ac.kr/bbs/ec/237/835571/download.do";
const STATUS_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1069596&cbIdx=87";

export const post58 = {
  page: 1,
  index: 1,
  slug: "modoo-startup-funding-stages",
  sourceUrl: "https://docshunt.ai/blog_detail/modoo-startup-funding-stages",
  title: "모두의 창업 지원금, 선정되면 바로 1억 원을 받는 걸까요?",
  titleLines: ["모두의 창업 지원금,", "선정되면 바로 1억일까요?"],
  description:
    "모두의 창업 1기에서 처음 선정됐다고 곧바로 1억 원을 받는 구조는 아니었습니다. 공식 공고를 바탕으로 트랙과 진출 단계에 따라 달랐던 활동비·시제품 제작비·사업화자금 구조를 설명하고, 최대 금액 기사에서 반드시 확인할 조건을 정리했습니다.",
  author: "독스헌트 마케팅팀",
  date: "2026.08.05",
  modifiedDate: "2026.08.05",
  verification: {
    date: "2026.08.05",
    note: "금액과 단계는 모두의 창업 1기 일반·기술 및 로컬 트랙 공고 기준입니다. 2기 지원 규모와 지급 조건은 최종 공고에서 달라질 수 있습니다.",
    sources: [
      { label: "중소벤처기업부, 모두의 창업 프로젝트 1기 통합 모집공고", url: NOTICE_URL },
      { label: "모두의 창업 프로젝트 1기 일반·기술 분야 FAQ", url: FAQ_URL },
      { label: "중소벤처기업부, 모두의 창업 2기 모집 일정 조정 설명", url: STATUS_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00058-modoo-startup-funding-stages-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00058-modoo-startup-funding-stages-hero.jpg",
  paragraphs: [
    "모두의 창업에서 아이디어가 처음 선정됐다고 곧바로 1억 원이 지급되는 것은 아닙니다.",
    "1기 일반·기술 트랙은 초기 창업활동자금 200만 원부터 시작해 다음 라운드 진출자에게 시제품 제작비와 차년도 사업화자금을 단계적으로 지원하는 구조였습니다.",
    "로컬 트랙도 아이디어 선정, 권역별 오디션, 파이널 오디션에 따라 지원 내용과 금액이 달랐습니다.",
    "기사나 홍보물의 최대 금액만 보지 말고 내가 어느 단계에서 어떤 조건으로 지원받는지 공고표를 읽어야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>아닙니다. 모두의 창업 1기에서는 처음 선정됐다고 곧바로 1억 원을 받는 구조가 아니었습니다.</strong> 지원 금액은 트랙과 진출 단계에 따라 달랐고, '최대' 금액은 뒤 라운드까지 진출한 일부 도전자에게 해당했습니다.</p>
  <p>아래 금액은 <a href="${NOTICE_URL}" target="_blank" rel="noopener noreferrer">1기 통합 모집공고</a> 기준입니다. 2기 세부 공고는 아직 발표되지 않았으므로 실제 신청 때는 새 지원 규모와 지급 조건을 다시 확인해야 합니다.</p>

  <h2>일반·기술 트랙은 단계별 지원이었습니다</h2>
  <p>1기 일반·기술 트랙에서는 아이디어 선정자 4,000명에게 창업활동자금 200만 원과 멘토링 등이 제공됐습니다. 이후 지역·권역 오디션 진출자에게는 시제품 제작비가 최대 1,000만 원, TOP 100에는 차년도 사업화자금 1억 원이 안내됐습니다.</p>
  <div class="dh-note">
    <strong>1기 일반·기술 트랙의 흐름</strong>
    <ul>
      <li><strong>아이디어 선정 4,000명:</strong> 창업활동자금 200만 원과 멘토링</li>
      <li><strong>지역 오디션 500명·권역 오디션 200명:</strong> 시제품 제작비 최대 1,000만 원</li>
      <li><strong>전국 오디션 TOP 100:</strong> 차년도 사업화자금 1억 원</li>
      <li><strong>최종 TOP 1:</strong> 상금 5억 원과 약 5억 원 규모의 투자 연계</li>
    </ul>
  </div>
  <p>여기서 중요한 단어는 '최대', '진출', '차년도'입니다. 처음 선정된 모든 사람이 모든 금액을 받는다는 뜻이 아닙니다. 다음 라운드 평가와 협약, 자금 사용 기준을 충족해야 뒤 단계 지원으로 이어집니다.</p>

  <h2>로컬 트랙은 금액과 단계가 달랐습니다</h2>
  <p>1기 로컬 트랙은 아이디어 선정자에게 창업활동자금 200만 원, 권역별 오디션 진출자에게 사업화자금 최대 3,000만 원, 파이널 오디션 우승자에게 최대 1억 원 상금을 안내했습니다.</p>
  <p>일반·기술 트랙의 '사업화자금 최대 1억 원'과 로컬 트랙의 '상금 최대 1억 원'은 성격도 단계도 다릅니다. 숫자가 같다고 같은 지원으로 보면 안 됩니다.</p>

  <h2>지원금 기사에서 놓치기 쉬운 네 단어</h2>
  <ol>
    <li><strong>최대:</strong> 모든 선정자에게 동일하게 지급되는 금액인지 확인합니다.</li>
    <li><strong>단계별:</strong> 어느 라운드 진출자에게 제공되는지 확인합니다.</li>
    <li><strong>협약:</strong> 지급 전에 사업자등록이나 별도 협약이 필요한지 확인합니다.</li>
    <li><strong>사용 범위:</strong> 어떤 항목에 쓸 수 있고 어떤 증빙이 필요한지 확인합니다.</li>
  </ol>
  <p>지원금은 자유롭게 쓸 수 있는 상금과 다를 수 있습니다. 시제품 제작비와 사업화자금은 공고와 협약에 정해진 목적과 절차에 따라 집행해야 합니다. 따라서 최대 금액보다 당장 다음 단계에서 무엇을 만들고 어떤 결과를 제출해야 하는지부터 보는 편이 현실적입니다.</p>

  <h2>2기 금액은 아직 확정된 것으로 보면 안 됩니다</h2>
  <p>중기부는 <a href="${STATUS_URL}" target="_blank" rel="noopener noreferrer">플랫폼 보안 강화 후 2기 모집을 시작할 예정</a>이라고 밝혔습니다. 새 공고가 나오면 지원 인원, 단계, 금액, 자부담 여부, 협약 조건을 한 표 안에서 다시 확인하세요.</p>
  <p>“선정되면 1억 원”이 아니라 “어느 단계까지 진출하면 어떤 목적으로 최대 얼마를 지원받는가”라고 읽어야 실제 준비 계획을 세울 수 있습니다.</p>

  <div class="dh-cta">
    <p>희망 지원금부터 적기보다 단계별로 만들 결과와 필요한 비용을 먼저 계산해 사업계획서를 준비해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=modoo-startup-funding-stages&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 실행계획 만들기</a>
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

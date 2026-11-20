import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const INTERVIEW_VIDEO_URL = "https://www.youtube.com/watch?v=GmIQijv2EFw";
const DOCSHUNT_URL = "https://docshunt.ai/";
const PRICING_URL = "https://docshunt.ai/pricing";

export const post30 = {
  page: 3,
  index: 10,
  slug: "3-1",
  sourceUrl: "https://docshunt.ai/blog_detail/3-1",
  title: "지원사업 합격 사례, 3일 만에 쓴 사업계획서는 사업 배경을 어떻게 바꿨을까요?",
  description:
    "첫 사업계획서에서 사업 배경과 차별점을 충분히 담지 못했던 김지연 대표가 3일 동안 독스헌트로 초안을 다시 잡아 G스타트업 예비창업자 전형에 합격한 과정을 대표의 말로 정리했습니다.",
  seo: {
    mainKeyword: "지원사업 합격 사례",
    supportKeywords: ["사업계획서 사업 배경", "첫 사업계획서 작성", "예비창업자 사업계획서"],
    searchIntent: "짧은 기간에 첫 사업계획서를 준비해 지원사업에 합격한 창업자가 무엇을 고쳤는지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2025.08.28",
  modifiedDate: "2026.11.20",
  verification: {
    date: "2026.11.20",
    note: "인터뷰 내용은 독스헌트 유튜브 채널에 공개된 김지연 대표 인터뷰와 2025년 8월 게시 당시 정리한 인터뷰 원문을 기준으로 했습니다. 작성 기간(3일)과 G스타트업 예비창업자 전형 합격은 인터뷰이의 경험이며, 독스헌트 사용과 선정 결과의 인과관계나 일반적인 결과로 해석하지 않았습니다. G스타트업 사업의 운영 기관과 지원 조건은 이 글에서 따로 확인하지 않았습니다. 독스헌트 기능은 2026년 11월 20일 기준 독스헌트 홈페이지와 요금제 페이지에 적힌 내용입니다. 사업 배경 문장 예시는 설명을 위한 가상 예시입니다.",
    sources: [
      { label: "독스헌트AI 유튜브, 지원사업 합격자 인터뷰(김지연 대표)", url: INTERVIEW_VIDEO_URL },
      { label: "독스헌트 홈페이지", url: DOCSHUNT_URL },
      { label: "독스헌트 요금제", url: PRICING_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00030-support-program-interview-business-background-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00030-support-program-interview-business-background-hero.jpg",
  videoEmbedUrl: "https://www.youtube-nocookie.com/embed/GmIQijv2EFw?rel=0&start=22",
  videoTitle: "3일 만에 완성한 사업계획서 합격 사례 인터뷰",
  videoDescription:
    "김지연 대표 인터뷰 영상입니다. 창업 경험 없이 쓴 첫 사업계획서에서 빠졌던 사업 배경과 차별점을 3일 동안 다시 정리해 G스타트업 예비창업자 전형에 지원한 과정을 대표가 직접 이야기합니다.",
  paragraphs: [
    "김지연 대표는 창업 경험 없이 첫 사업계획서를 썼고, 비즈니스 서류에 익숙하지 않아 중요한 내용을 놓칠까 불안했다고 말했습니다. 첫 사업계획서에는 사업 배경과 차별점을 충분히 담지 못했습니다.",
    "다시 쓸 때 김 대표는 한의사 실습 경험을 사업 배경의 중심에 두었습니다. 독스헌트가 실습 경험의 비중을 높인 초안을 제시하고 사업 배경의 중요성을 짚어 준 덕분에 설득력이 높아졌다고 설명했습니다.",
    "김 대표는 3일 동안 작성한 사업계획서로 G스타트업 예비창업자 전형에 합격했다고 밝혔습니다. 한 사람의 경험이며 작성 기간과 결과는 준비된 자료와 사업 내용에 따라 다릅니다.",
    "김 대표가 정리한 순서는 솔직하게 쓰기, 양식에 맞춰 구조화하기, 자기 언어로 다듬기입니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>첫 사업계획서에서 아이디어는 분명한데 "왜 이 사람이 이 사업을 하는지"가 잘 보이지 않는다면, 사업 배경부터 다시 봐야 합니다.</strong> 김지연 대표는 첫 사업계획서에서 사업 배경과 차별점을 충분히 담지 못했고, 다시 쓸 때 자신의 실습 경험을 배경의 중심으로 옮겼습니다.</p>
  <p>이 글은 독스헌트가 진행한 <a href="${INTERVIEW_VIDEO_URL}" target="_blank" rel="noopener noreferrer">김지연 대표 인터뷰</a>를 정리한 것입니다. 3일이라는 작성 기간과 합격 결과는 김 대표의 경험이며, 독스헌트를 쓰면 같은 기간에 같은 결과가 나온다는 뜻이 아닙니다.</p>

  <div class="dh-note">
    <p><strong>인터뷰이</strong> 김지연 대표</p>
    <p><strong>상황</strong> 창업 경험 없이 쓰는 첫 사업계획서</p>
    <p><strong>인터뷰에서 밝힌 결과</strong> 3일 동안 작성한 사업계획서로 G스타트업 예비창업자 전형 합격</p>
  </div>

  <h2>첫 사업계획서에서 막힌 곳은 사업 배경이었습니다</h2>
  <p>김 대표는 비즈니스 서류를 써본 적이 없었습니다. 무엇을 써야 하는지보다 무엇을 빠뜨렸는지 모르는 것이 더 불안했다고 말합니다.</p>
  <blockquote>"비즈니스 서류에 익숙하지 않아 중요한 내용을 놓칠까 불안했습니다. 심사위원이 무엇을 중요하게 보는지 문서에 담는 것도 어려웠죠."</blockquote>
  <p>첫 사업계획서에는 사업 배경과 차별점이 충분히 들어가지 않았습니다. 아이디어는 있었지만 그것을 어떤 순서로 정리해야 읽는 사람이 납득할지 정하지 못한 상태였습니다. 그래서 김 대표는 사업계획서를 쉽게 쓸 방법을 찾다가 독스헌트를 쓰게 됐습니다.</p>

  <h2>실습 경험을 사업 배경의 중심으로 옮겼습니다</h2>
  <p>다시 쓴 사업계획서에서 달라진 것은 사업 배경입니다. 김 대표는 한의사 실습에서 겪은 일을 창업 동기의 근거로 올렸습니다.</p>
  <blockquote>"독스헌트가 한의사 실습 경험의 비중을 높인 사업계획서를 제시함과 동시에 사업 배경의 중요성에 대한 조언을 주었고, 그 덕분에 더 설득력 있는 사업계획서를 작성할 수 있었습니다."</blockquote>
  <p>김 대표는 이렇게 3일 동안 작성한 사업계획서로 G스타트업 예비창업자 전형에 합격했다고 밝혔습니다.</p>

  <h2>사업 배경 문장은 이렇게 달라집니다</h2>
  <p>아래는 김 대표의 사업이나 문장과 관계없이, 경험을 사업 배경으로 옮기는 방식을 보여주려고 만든 <strong>가상 예시</strong>입니다.</p>
  <div class="dh-note">
    <p><strong>고치기 전</strong><br>소규모 카페의 운영 비효율을 해결하기 위해 새로운 서비스를 개발하고자 합니다.</p>
    <p><strong>고친 뒤 (가상 예시)</strong><br>카페에서 2년간 일하며 마감 후 재고를 종이에 적고 다음 날 아침 다시 엑셀로 옮기는 일을 매일 했습니다. 이 경험에서 출발해, 재고 기록을 한 번에 끝내는 서비스를 만들고자 합니다.</p>
  </div>
  <p>두 번째 문장에는 누가, 어디서, 무엇을 겪었는지가 있습니다. 심사위원이 창업 동기를 확인할 때 쓸 수 있는 장면이 생긴 것입니다. 장면이 없다면 먼저 그 문제를 직접 본 기록이나 고객에게 들은 말을 모아 두세요.</p>

  <h2>김지연 대표가 정리한 세 가지 순서</h2>
  <p>김 대표는 짧은 기간에 사업계획서를 쓴 방법을 세 단계로 정리했습니다.</p>
  <ol>
    <li><strong>솔직하게 쓰기:</strong> 정답을 맞추려 하지 말고 자신의 창업 동기와 아이디어를 솔직하게 적습니다.</li>
    <li><strong>구조화하기:</strong> 독스헌트로 지원사업 양식에 맞춰 문서 구조를 잡습니다.</li>
    <li><strong>자기 언어로 다듬기:</strong> 창업가의 경험과 목소리가 드러나도록 문장을 고칩니다.</li>
  </ol>
  <p>세 번째 단계가 빠지면 구조는 갖췄어도 누구의 사업인지 드러나지 않는 문서가 됩니다. 김 대표가 실습 경험을 넣은 것도 이 단계에 해당합니다.</p>

  <h2>지금 독스헌트에서 같은 순서로 작업하려면</h2>
  <p>인터뷰 당시와 지금은 화면이 다릅니다. 2026년 11월 기준 <a href="${DOCSHUNT_URL}" target="_blank" rel="noopener noreferrer">독스헌트 홈페이지</a>와 <a href="${PRICING_URL}" target="_blank" rel="noopener noreferrer">요금제 페이지</a>에 적힌 흐름은 다음과 같습니다.</p>
  <ul>
    <li>K-Startup·기업마당 공고를 고르거나, 공고문과 양식을 직접 올립니다.</li>
    <li>AI가 필요한 질문을 하면, 아이디어와 경험을 최대한 자세히 답합니다. 김 대표의 실습 경험처럼 구체적인 장면을 넣을수록 초안이 내 사업에 가까워집니다.</li>
    <li>만들어진 초안을 AI와 대화하며 고치고, 한글(HWPX) 파일로 내보냅니다.</li>
  </ul>
  <p>Free 플랜에서는 기본 사업계획서 작성을 체험할 수 있고, 양식 맞춤 작성, AI 문서 수정, 한글 내보내기는 Pro 이상에서 제공됩니다.</p>

  <h2>3일이 모두에게 맞는 기간은 아닙니다</h2>
  <p>김 대표는 쓸 이야기가 이미 있었습니다. 실습에서 직접 본 문제가 있었기 때문에 초안을 고치는 데 시간을 쓸 수 있었습니다. 고객을 만나본 기록이나 경험이 아직 없다면, 문서를 빨리 만드는 것보다 그 근거를 모으는 데 시간을 먼저 쓰는 편이 낫습니다.</p>

  <div class="dh-cta">
    <p>창업 동기가 된 경험이 있다면, 독스헌트의 질문에 그 장면부터 답해 사업 배경 초안을 만들어 보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=support-program-interview-business-background&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트로 사업 배경 초안 만들기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${INTERVIEW_VIDEO_URL}" target="_blank" rel="noopener noreferrer">독스헌트AI 유튜브, 지원사업 합격자 인터뷰(김지연 대표)</a></li>
      <li><a href="${DOCSHUNT_URL}" target="_blank" rel="noopener noreferrer">독스헌트 홈페이지</a></li>
      <li><a href="${PRICING_URL}" target="_blank" rel="noopener noreferrer">독스헌트 요금제</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

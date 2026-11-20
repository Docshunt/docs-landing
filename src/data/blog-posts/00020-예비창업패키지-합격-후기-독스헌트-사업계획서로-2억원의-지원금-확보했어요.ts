import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const INTERVIEW_VIDEO_URL = "https://www.youtube.com/watch?v=34KtW8uyPrU";
const PRE_STARTUP_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066579&cbIdx=310";
const BUDGET_BRIEFING_URL = "https://www.korea.kr/briefing/policyBriefingView.do?newsId=156775671";

export const post20 = {
  page: 2,
  index: 10,
  slug: "2",
  sourceUrl: "https://docshunt.ai/blog_detail/2",
  title: "예비창업패키지 합격 후기, 두 번째 도전에서는 무엇이 달라졌을까요?",
  description:
    "예비창업패키지 합격 후기입니다. 두 번 도전해 합격한 쿼카 온어 트립 정승연 대표가 첫 도전 뒤 계속 지적받던 사업계획서 형식 문제와, 처음 써보는 팀원들과 재도전을 준비한 과정을 대표의 말로 정리했습니다.",
  seo: {
    mainKeyword: "예비창업패키지 합격 후기",
    supportKeywords: ["예비창업패키지 재도전", "예비창업패키지 사업계획서", "사업계획서 형식"],
    searchIntent: "예비창업패키지에 떨어진 뒤 다시 도전해 합격한 창업자가 사업계획서를 어떻게 준비했는지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2025.12.17",
  modifiedDate: "2026.11.20",
  verification: {
    date: "2026.11.20",
    note: "인터뷰 내용은 독스헌트 유튜브 채널에 공개된 정승연 대표 인터뷰와 2025년 12월 게시 당시 정리한 인터뷰 원문을 기준으로 했습니다. 합격한 사업과 지원금 규모(2~3억 원 내외)는 인터뷰이의 발언이며, 독스헌트 사용과 선정 결과의 인과관계나 일반적인 결과로 해석하지 않았습니다. 예비창업패키지 평가항목과 70점 기준은 2026년 수정 공고(제2026-207호) 첨부 공고문에서 확인했고, 2027년 '모두의 창업' 일원화는 정부 예산안 단계의 계획입니다.",
    sources: [
      { label: "독스헌트AI 유튜브, 쿼카 온어 트립 정승연 대표 인터뷰", url: INTERVIEW_VIDEO_URL },
      { label: "중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)", url: PRE_STARTUP_NOTICE_URL },
      { label: "정책브리핑, 중소벤처기업부 재정운용전략 사전 브리핑", url: BUDGET_BRIEFING_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00020-pre-startup-package-second-attempt-interview-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00020-pre-startup-package-second-attempt-interview-hero.jpg",
  videoEmbedUrl: "https://www.youtube-nocookie.com/embed/34KtW8uyPrU?rel=0",
  videoTitle: "예비창업패키지 합격 후기 | 정승연 대표 인터뷰",
  videoDescription:
    "쿼카 온어 트립 정승연 대표 인터뷰 영상입니다. 외국인 관광객 의류 대여 플랫폼을 준비하며 예비창업패키지에 다시 도전한 과정과, 사업계획서를 처음 써보는 팀원들과 재도전을 준비한 과정을 대표가 직접 이야기합니다.",
  paragraphs: [
    "외국인 관광객 대상 의류 대여 플랫폼 TRAVWEAR를 운영하는 쿼카 온어 트립 정승연 대표는 예비창업패키지 첫 도전에서 떨어지고 두 번째 도전에서 합격했다고 말했습니다.",
    "정 대표가 가장 어려웠다고 꼽은 것은 문장보다 형식이었습니다. 글씨체, 제목 폰트, 기호와 간격, 표 구성을 맞추라는 피드백을 계속 받았다고 합니다.",
    "두 번째 도전 때는 팀원 대부분이 사업계획서를 처음 써보는 상황이었습니다. 정 대표는 시간이 크게 줄지는 않았지만 형식이 잡힌 초안 위에서 사업 내용만 다듬으면 되는 구조가 됐다고 설명했습니다.",
    "정 대표는 예비창업패키지 이후 초기창업패키지, 초기관광벤처 사업 등에 합격해 2~3억 원 내외의 지원금을 확보했다고 밝혔습니다. 한 사람의 경험이며 같은 결과를 보장하지 않습니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>예비창업패키지 첫 도전에서 떨어졌다면, 다음 사업계획서에서 무엇부터 바꿔야 할까요?</strong> 쿼카 온어 트립 정승연 대표는 두 번째 도전에서 합격했습니다. 정 대표가 꼽은 첫 번째 과제는 문장이 아니라 문서의 형식이었습니다.</p>
  <p>이 글은 독스헌트가 진행한 <a href="${INTERVIEW_VIDEO_URL}" target="_blank" rel="noopener noreferrer">정승연 대표 인터뷰</a>를 정리한 것입니다. 따옴표 안의 말과 합격·지원금 내용은 모두 정 대표의 발언이며, 독스헌트를 쓰면 같은 결과가 나온다는 뜻이 아닙니다.</p>

  <div class="dh-note">
    <p><strong>인터뷰이</strong> 정승연, 쿼카 온어 트립 대표</p>
    <p><strong>서비스</strong> TRAVWEAR, 한국을 찾은 외국인 관광객이 여행 중 필요한 옷을 빌리는 의류 대여 플랫폼</p>
    <p><strong>인터뷰에서 밝힌 결과</strong> 예비창업패키지 두 번째 도전에서 합격, 이후 초기창업패키지·초기관광벤처 사업 등에 합격해 2~3억 원 내외 지원금 확보</p>
  </div>

  <h2>첫 도전은 불합격, 두 번째 도전에서 합격했습니다</h2>
  <p>정 대표는 예비창업패키지를 준비할 때부터 독스헌트를 썼다고 말했습니다. 한 번에 붙은 것은 아니었습니다.</p>
  <blockquote>"사실 예비창업패키지를 한 번에 합격한 건 아니고요. 첫 도전에서는 불합격, 두 번째 도전에서 최종 합격했습니다."</blockquote>
  <p>두 번째 도전은 상황이 더 빠듯했습니다. 정 대표는 "기간은 촉박하고 팀원들은 사업계획서가 처음"이었고, "이번에도 떨어지면 어쩌지?"라는 불안이 컸다고 돌아봤습니다.</p>

  <h2>계속 지적받은 것은 문장보다 형식이었습니다</h2>
  <p>정 대표가 가장 어려웠다고 꼽은 부분은 지원사업 사업계획서의 형식이었습니다. 피드백을 주던 창업 교수들에게 같은 지적을 반복해서 들었다고 합니다.</p>
  <ul>
    <li>글씨체 통일</li>
    <li>제목·소제목 폰트 통일</li>
    <li>기호와 간격 정렬</li>
    <li>표 구성 정리</li>
  </ul>
  <blockquote>"심사위원도 사람이기 때문에 깔끔한 사업계획서 서식 자체가 신뢰를 준다라고요. 근데 저는 그게 잘 안 돼서 계속 지적을 받았어요."</blockquote>
  <p>서식이 점수표에 따로 있는 항목은 아닙니다. 다만 같은 내용이라도 표와 제목이 들쭉날쭉하면 읽는 사람이 내용을 찾는 데 시간을 씁니다. 정 대표가 받은 피드백도 그 지점을 짚은 것으로 보입니다.</p>

  <h2>"시간이 크게 줄지는 않았어요"</h2>
  <p>정 대표는 작성 시간을 과장하지 않았습니다.</p>
  <blockquote>"시간만 보면 사실 크게 줄지는 않았어요. 그래서 '몇 시간이 단축됐다'고 말하긴 어렵지만, 이렇게 표현하는 게 가장 정확할 것 같아요. 사업계획서를 잘 쓰는 팀원 한 명이 생긴 느낌이었어요."</blockquote>
  <p>정 대표가 말한 변화는 작업 순서였습니다. 형식이 잡힌 초안을 먼저 받고, 그 위에서 사업 내용을 다듬는 방식입니다.</p>
  <blockquote>"아예 처음부터 형식이 깔끔하게 잡힌 사업계획서를 받으니까, 저는 그 위에서 사업 내용만 디벨롭하면 되는 구조가 되더라고요. 그게 정말 컸어요."</blockquote>
  <p>두 번째 도전 때 팀원 대부분이 사업계획서를 처음 써봤다는 점도 덧붙였습니다. 정 대표는 당시 독스헌트를 "든든한 또 다른 팀원, 내 사업계획서 파트너"에 비유했습니다.</p>

  <h2>지원사업마다 다른 양식을 맞추는 일</h2>
  <p>리뉴얼 이후 가장 만족스러웠던 점을 묻자 정 대표는 원하는 지원사업 형식에 맞춰 바로 쓸 수 있다는 점을 꼽았습니다.</p>
  <blockquote>"예비창업패키지, 초기관광벤처사업 등 지원사업마다 요구하는 형식이 미묘하게 다른데, 그걸 하나하나 맞추는 게 생각보다 스트레스였거든요."</blockquote>
  <p>지금 독스헌트에서는 K-Startup·기업마당 공고를 고르거나 공고문과 양식을 직접 올려 초안을 만들 수 있습니다. 양식 맞춤 작성, AI와 대화하며 문장 고치기, 한글(HWPX) 내보내기는 Pro 이상 플랜에서 제공됩니다.</p>

  <h2>재도전을 준비한다면 먼저 확인할 것</h2>
  <p>정 대표의 경험에서 다음 지원 때 써볼 수 있는 점검 순서를 뽑으면 아래와 같습니다. 평가 기준은 <a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">2026년 예비창업패키지 수정 공고</a>를 기준으로 했습니다.</p>
  <ol>
    <li><strong>평가항목별로 지난 서류를 다시 읽기:</strong> 2026년 공고는 문제인식, 실현가능성, 성장전략, 팀(기업) 구성 네 항목으로 평가했고, 서류·발표 단계마다 70점 미만이면 선정 대상에서 제외했습니다. 지난 사업계획서에서 어느 항목이 비어 있었는지부터 표시해 보세요.</li>
    <li><strong>형식 점검표 만들기:</strong> 정 대표가 지적받은 네 가지(글씨체, 제목 폰트, 기호·간격, 표 구성)를 제출 전 마지막 점검 항목으로 두면 팀원이 여럿이어도 문서가 한 사람이 쓴 것처럼 정리됩니다.</li>
    <li><strong>처음 쓰는 팀원에게 빈 문서를 주지 않기:</strong> 항목별 틀과 예시 문장이 있는 초안을 먼저 나눠 주고, 각자 맡은 항목의 사실과 숫자를 채우게 하는 편이 빠릅니다.</li>
  </ol>
  <p>2027년에는 예비창업패키지를 포함한 예비창업 사업을 '모두의 창업'으로 일원화하는 계획이 <a href="${BUDGET_BRIEFING_URL}" target="_blank" rel="noopener noreferrer">정부 예산안 브리핑</a>에 담겼습니다. 국회 심의 전 계획이라 확정은 아니니, 새 공고의 평가표와 양식을 다시 확인하세요.</p>

  <div class="dh-cta">
    <p>지난 사업계획서가 있다면 독스헌트에 올려 새 공고 양식에 맞춘 초안으로 다시 정리해 보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=pre-startup-package-interview&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트로 재도전 초안 만들기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${INTERVIEW_VIDEO_URL}" target="_blank" rel="noopener noreferrer">독스헌트AI 유튜브, 쿼카 온어 트립 정승연 대표 인터뷰</a></li>
      <li><a href="${PRE_STARTUP_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 2026년 예비창업패키지 예비창업자 모집 수정 공고(2차)</a></li>
      <li><a href="${BUDGET_BRIEFING_URL}" target="_blank" rel="noopener noreferrer">정책브리핑, 중소벤처기업부 재정운용전략 사전 브리핑</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

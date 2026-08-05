import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const VIDEO_URL = "https://www.youtube.com/watch?v=9a_QmMnxmOo";
const SPINOZA_URL = "https://spinoza.world/";
const KOAT_PROGRAM_URL = "https://koat.or.kr/board/business/16104/view.do";

export const post41 = {
  page: 1,
  index: 1,
  slug: "support-program-business-plan-application-strategy",
  sourceUrl: "https://docshunt.ai/blog_detail/support-program-business-plan-application-strategy",
  title: "지원사업 사업계획서, 왜 ‘잘 쓰는 것’보다 ‘많이 내는 것’이 중요할까요?",
  titleLines: ["지원사업 사업계획서,", "왜 ‘잘 쓰는 것’보다 ‘많이 내는 것’이 중요할까요?"],
  description:
    "연간 최대 60개의 사업계획서를 작성해온 스피노자 박중현 대표 인터뷰입니다. 공고별 HWP 양식의 어려움과 작성 시간 단축, ‘낚싯대를 여러 대 드리우는’ 지원 전략을 직접 들어봤습니다.",
  author: "독스헌트 마케팅팀",
  date: "2026.08.04",
  modifiedDate: "2026.08.04",
  verification: {
    date: "2026.08.04",
    note: "독스헌트AI가 공개한 박중현 대표 인터뷰를 기준으로 작성했습니다. 연간 작성량, 누적 지원금, 하루 접수량과 작성 시간은 인터뷰이의 창업 경험에 관한 진술이며 모든 신청자에게 같은 결과를 보장하지 않습니다. 그린유니콘 프로그램의 운영 구조는 한국농업기술진흥원 통합공고에서 확인했습니다.",
    sources: [
      {
        label: "독스헌트AI, 지원사업은 잘 쓰는 싸움이 아니라 많이 넣는 싸움입니다",
        url: VIDEO_URL,
      },
      {
        label: "한국농업기술진흥원, 2026 농식품 기술창업 액셀러레이터 참여기업 모집 통합공고(2차)",
        url: KOAT_PROGRAM_URL,
      },
      {
        label: "스피노자, 농업과 임업의 미래를 설계하는 기술기업",
        url: SPINOZA_URL,
      },
    ],
  },
  image: "/docshunt-assets/blog-covers/00041-support-program-business-plan-application-strategy-editorial-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00041-support-program-business-plan-application-strategy-editorial-hero.jpg",
  videoEmbedUrl: "https://www.youtube-nocookie.com/embed/9a_QmMnxmOo?rel=0",
  videoTitle: "지원사업은 잘 쓰는 싸움이 아니라 많이 넣는 싸움입니다 | 박중현 대표 인터뷰",
  paragraphs: [
    "스피노자 박중현 대표는 현대자동차 설계 연구원과 KAIST MBA를 거쳐 묘목과 모종 생산 기술을 개발하는 회사를 창업했습니다.",
    "박 대표가 사업계획서를 쓰며 가장 어려웠던 점은 지원사업이 몰리는 시기에 공고마다 다른 문항과 HWP 양식을 동시에 맞춰야 한다는 것이었습니다.",
    "그는 1년에 사업계획서를 최소 20개, 많을 때는 60개까지 작성했고 지난 7년간 약 14억 원의 지원금을 경험했다고 인터뷰에서 밝혔습니다.",
    "독스헌트를 사용한 뒤에는 기존에 2~3일 걸리던 작업을 1~2시간 안에 마치고 하루 최대 4개를 접수한 경험이 있다고 설명했습니다. 이는 박 대표 개인의 사례이며 일반적인 성과를 뜻하지 않습니다.",
    "박 대표는 지원사업을 좋은 미끼 하나를 단 낚싯대 한 대보다 여러 대의 낚싯대를 드리우는 일에 비유합니다. 결과를 예측하기 어려운 만큼 적합한 공고에 충분히 지원하는 전략이 중요하다는 뜻입니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>지원사업 사업계획서를 1년에 최대 60개까지 작성해온 대표는 어떤 방식으로 여러 공고를 준비할까요?</strong> 박중현 대표는 지원사업을 좋은 미끼 하나를 단 낚싯대 한 대보다 여러 대의 낚싯대를 드리우는 일에 비유합니다. 묘목과 모종 생산 기술을 개발하는 스피노자의 박 대표에게 그 이유와 독스헌트를 사용한 뒤 달라진 점을 물었습니다.</p>
  <p>아래 답변은 <a href="${VIDEO_URL}" target="_blank" rel="noopener noreferrer">독스헌트AI 인터뷰 영상</a>에서 박 대표가 전한 내용을 바탕으로, 뜻을 바꾸지 않는 범위에서 읽기 쉽게 정리했습니다.</p>

  <h2>Q. 먼저 자기소개 부탁드립니다.</h2>
  <p>안녕하세요. 저는 박중현입니다. 사업을 시작하기 전에는 현대자동차에서 설계 연구원으로 약 8년간 일했습니다. 이후 KAIST MBA에서 경영학과 스타트업을 공부했고, 직접 회사를 운영하기 시작했습니다.</p>
  <p>현재는 <a href="${SPINOZA_URL}" target="_blank" rel="noopener noreferrer">스피노자</a>를 운영하고 있습니다. 농업의 시작점인 묘목과 모종을 더 효율적으로 생산할 수 있는 기술을 개발해 제공하는 회사입니다.</p>
  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00041-park-junghyun-spinoza-founder.jpg" alt="대형 육묘 포트를 들고 있는 스피노자 박중현 대표" loading="lazy" />
    <figcaption>묘목·모종 생산 기술을 개발하는 스피노자 박중현 대표</figcaption>
  </figure>
  <p>영상 촬영 당시에는 한국농업기술진흥원이 주관하는 그린유니콘 액셀러레이팅 사업에 선정된 상태였습니다. 투자 연계와 해외 IR이 포함된 프로그램입니다. 2026년 <a href="${KOAT_PROGRAM_URL}" target="_blank" rel="noopener noreferrer">농식품 기술창업 액셀러레이터 참여기업 모집 통합공고</a>에서도 그린유니콘 프로그램의 운영 내용을 확인할 수 있습니다.</p>
  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00041-spinoza-ai-garden-management-system.jpg" alt="재배 환경 정보를 보여주는 스피노자 인공지능 정원관리 시스템 화면" loading="lazy" />
    <figcaption>재배 환경 데이터를 한 화면에서 확인할 수 있는 스피노자의 인공지능 정원관리 시스템</figcaption>
  </figure>

  <h2>Q. 사업계획서를 쓰면서 가장 어려운 점은 무엇이었나요?</h2>
  <p>가장 어려운 점은 대표에게 시간이 없다는 것입니다. 스타트업은 실제 사업과 지원사업 준비를 병행해야 합니다. 대표가 직접 써야 선정 가능성을 높일 수 있고 제가 원하는 방향의 사업계획서도 만들 수 있지만, 정작 쓸 시간이 늘 부족했습니다.</p>
  <p>지원사업은 연초부터 여러 공고가 비슷한 시기에 몰립니다. 회사와 사업에 관한 기본 내용은 같아도 공고마다 질문의 순서와 강조하는 내용이 조금씩 다릅니다. 기존 사업계획서를 그대로 낼 수 없으니 각 양식에 맞춰 내용을 다시 배치하고 표현도 조정해야 했습니다.</p>
  <div class="dh-callout"><strong>“지원사업 공고는 한꺼번에 나오는데 공고마다 양식이 모두 다릅니다. 여러 문서를 동시에 준비하면서 각 문항에 맞게 내용을 바꾸는 일이 가장 힘들었습니다.”</strong></div>

  <h2>Q. 평소 사업계획서를 얼마나 많이 작성하셨나요?</h2>
  <p>주경야독이라는 말처럼 낮에는 사업을 하고 밤 11시나 12시부터 사업계획서를 썼습니다. 다음 날 해야 할 일이 있어도 마감이 다가오면 밤을 새워 계속 작성했습니다. 사업계획서 한 편을 끝내는 데 며칠이 걸리니 공고가 겹치는 시기에는 체력적으로도 부담이 컸습니다.</p>
  <p>그렇게 1년에 적게는 20개, 많을 때는 60개까지 작성했습니다. 지난 7년 동안 지원사업을 통해 받은 금액은 약 14억 원입니다. 한두 번 신청해본 수준이 아니라 매년 여러 공고를 검토하고 제출하는 과정을 반복해왔습니다.</p>
  <p><em>※ 연간 작성량과 누적 지원금은 제 개인적인 창업 경험이며, 모든 신청자에게 같은 결과가 나타난다는 뜻은 아닙니다.</em></p>

  <h2>Q. 기존 AI 도구만으로 해결하기 어려웠던 부분도 있었나요?</h2>
  <p>ChatGPT나 Genspark 같은 AI도 사용해봤습니다. 문장을 만드는 데는 도움이 되지만, 국내 지원사업에서 자주 쓰는 HWP 양식을 직접 다루기는 어렵습니다. 결국 생성된 내용을 한글 문서로 옮기고 표와 목차를 다시 맞춰야 했습니다.</p>
  <p>아이디어나 문장을 빠르게 얻어도 실제 제출 파일을 완성하는 작업은 별도로 남는 셈입니다. 여러 지원사업을 동시에 준비할 때는 내용을 복사하고 문항별로 다시 나누는 일만으로도 시간이 많이 들었습니다. 제가 필요했던 것은 문장 생성만이 아니라 공고의 HWP 양식 안에서 사업계획서를 끝까지 완성하는 과정이었습니다.</p>
  <p>독스헌트는 이 부분을 해결해줬습니다. 원래 일주일 정도 걸릴 수 있었던 작업을 하루 안에 끝낼 수 있겠다는 생각이 들어 서비스를 보자마자 결제했습니다.</p>

  <h2>Q. 독스헌트를 사용한 뒤 작성 과정은 어떻게 달라졌나요?</h2>
  <div class="dh-callout"><strong>“기존에는 사업계획서 한 편을 쓰는 데 못해도 2~3일이 걸렸습니다. 독스헌트를 사용한 뒤에는 1~2시간 안에 마무리했고, 하루에 3~4개까지 접수한 적도 있습니다.”</strong></div>
  <p>예전에는 먼저 지원사업 양식을 읽고 각 문항에 들어갈 내용의 뼈대를 직접 만들었습니다. 그 안에 회사와 사업에 관한 정보를 하나씩 채우고, 문항 사이에서 내용이 겹치거나 빠지지 않았는지 확인한 뒤 다시 문장을 다듬었습니다. 실제 글쓰기보다 이 앞단의 작업에 시간이 많이 걸렸습니다.</p>
  <p>독스헌트를 사용한 뒤에는 사업 내용을 바탕으로 문서의 뼈대와 초안이 먼저 만들어졌습니다. 처음부터 모든 칸을 채우는 대신 이미 만들어진 내용을 읽으며 사실과 다른 부분을 고치고, 제 표현에 맞게 다듬는 데 집중할 수 있었습니다. 그래서 한 편에 들이는 시간이 크게 줄었습니다.</p>
  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00041-business-plan-financial-plan-example-cropped.png" alt="손익분기점과 현금흐름, 자금 조달 및 사용 계획을 차트로 정리한 사업계획서 화면" loading="lazy" />
    <figcaption>손익분기점과 자금 조달·사용 계획을 차트로 정리한 사업계획서 화면 예시</figcaption>
  </figure>
  <p>사업계획서의 맥락을 이해한 뒤 제가 미처 생각하지 못한 중요한 포인트를 보완해주는 점도 인상적이었습니다. 단순히 문장을 길게 만드는 것이 아니라 심사위원이 지적하거나 질문할 만한 부분을 미리 제안해줬습니다. 그 내용을 그대로 받아들이기보다 실제 사업 계획과 맞는지 확인하면서 필요한 아이디어만 반영했습니다.</p>

  <h2>Q. 스타트업 대표에게 작성 시간 단축이 중요한 이유는 무엇인가요?</h2>
  <p>스타트업은 우선 살아남아야 하고 매출을 만들어야 합니다. 그것만으로도 시간과 체력, 정신력이 부족합니다. 그런 상황에서 지원사업 문서까지 직접 작성하려면 큰 노력이 필요합니다.</p>
  <p>지원사업을 준비한다고 고객을 만나고 제품을 만들고 매출을 챙기는 일이 멈추는 것은 아닙니다. 낮에 해야 할 일을 모두 마친 뒤 문서를 쓰기 시작하면 집중력도 떨어지고, 며칠 동안 같은 생활을 반복하기 어렵습니다. 작성 시간을 줄이는 것은 단순히 편해지는 문제가 아니라 본업과 지원사업 준비를 함께 이어가기 위한 조건에 가깝습니다.</p>
  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00041-business-plan-market-analysis-example-cropped-v2.png" alt="현장 농가의 문제와 TAM, SAM, SOM 시장 분석을 정리한 사업계획서 화면" loading="lazy" />
    <figcaption>현장의 문제와 TAM·SAM·SOM 시장 규모를 함께 정리한 사업계획서 화면 예시</figcaption>
  </figure>
  <div class="dh-callout"><strong>“독스헌트가 없었다면 사업하느라 바빠서 ‘이번에는 넘기고 다음에 하자’라며 많은 지원사업을 포기했을 것 같습니다.”</strong></div>
  <p>작성 시간을 줄이면 본업을 놓치지 않으면서도 지원 기회를 챙길 수 있습니다.</p>
  <p>지원사업은 사업계획서를 잘 썼다고 반드시 선정되는 것도 아니고, 부족하다고 느낀 문서가 반드시 탈락하는 것도 아닙니다. 저 역시 잘 썼다고 생각한 사업계획서가 떨어지고, 기대하지 않았던 사업계획서가 선정된 경험이 있습니다. 공고마다 기준이 다르고 심사위원마다 보는 관점도 다르기 때문에 결과를 완전히 예측하기는 어렵습니다.</p>

  <div class="dh-callout"><strong>“좋은 미끼 하나를 달아 낚싯대 한 대만 드리우는 것과, 미끼를 여러 개 준비해 낚싯대를 여러 대 드리우는 것은 물고기를 만날 가능성이 다릅니다. 지원사업도 적합한 공고에 충분히 제출해야 기회를 만들 수 있습니다.”</strong></div>

  <h2>Q. 다른 스타트업 대표에게도 ‘독스헌트’ 서비스를 추천하시나요?</h2>
  <p>사용해보자마자 주변의 스타트업 대표 수십 명에게 추천했고, 실제로 사용하기 시작한 분들도 있습니다. 사업과 지원사업을 병행할 때 필요한 시간과 노력을 줄여주고, 제가 놓친 아이디어까지 보완해 문서를 만들 수 있기 때문입니다.</p>
  <p>특히 공고가 몰리는 시기에 사업계획서를 여러 편 써야 하는 대표라면 작성 속도의 차이를 크게 느낄 수 있다고 생각합니다. 매번 외부 컨설턴트에게 큰 비용을 들여 맡기기 전에 대표가 직접 독스헌트를 사용해 초안을 만들고, 자기 사업의 방향에 맞게 검토해보라고 권하고 싶습니다.</p>

  <div class="dh-cta">
    <p>기존 사업계획서의 핵심 맥락을 유지하면서 다음 공고의 문항과 HWP 양식에 맞는 초안을 준비해보세요. 마지막 사실 확인과 제출 판단은 대표가 직접 맡아야 합니다.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=support-program-application-strategy&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트로 다음 지원사업 준비하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${VIDEO_URL}" target="_blank" rel="noopener noreferrer">독스헌트AI, 지원사업은 잘 쓰는 싸움이 아니라 많이 넣는 싸움입니다</a></li>
      <li><a href="${KOAT_PROGRAM_URL}" target="_blank" rel="noopener noreferrer">한국농업기술진흥원, 2026 농식품 기술창업 액셀러레이터 참여기업 모집 통합공고(2차)</a></li>
      <li><a href="${SPINOZA_URL}" target="_blank" rel="noopener noreferrer">스피노자, 농업과 임업의 미래를 설계하는 기술기업</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const COST_PLUS_MISSION_URL = "https://www.costplusdrugs.com/mission/";
const YAHOO_BROADCAST_SEC_URL = "https://www.sec.gov/Archives/edgar/data/1011006/000091205700014598/0000912057-00-014598-d1.html";
const CBS_MARK_CUBAN_URL = "https://www.cbsnews.com/news/self-made-maverick-12-02-2004/";
const AXIOS_HOURLY_WORKERS_URL = "https://www.axios.com/2020/03/12/nba-coronavirus-mark-cuban-hourly-workers-pledge";

export const post104 = {
  page: 1,
  index: 1,
  slug: "mark-cuban-cost-plus-drugs-price-transparency",
  sourceUrl: "https://docshunt.ai/blog_detail/mark-cuban-cost-plus-drugs-price-transparency",
  title: "마크 큐반 Cost Plus Drugs는 왜 반값 약국을 차렸을까?",
  titleLines: ["마크 큐반 Cost Plus Drugs는", "왜 반값 약국을 차렸을까?"],
  titleLineBreaks: "always",
  description:
    "마크 큐반 Cost Plus Drugs는 약값을 기부가 아닌 투명한 가격 공식으로 바꾸려 했습니다. 카드뉴스의 8장 흐름을 따라 가격 공개와 창업의 성과를 살펴봅니다.",
  seo: {
    mainKeyword: "마크 큐반 Cost Plus Drugs",
    supportKeywords: ["반값 약국", "가격 투명성", "창업 인사이트"],
    searchIntent: "마크 큐반 Cost Plus Drugs가 처방약 가격을 투명하게 공개한 방식과 창업가에게 남긴 사업 모델의 관점을 이해하고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.09.03",
  modifiedDate: "2026.09.03",
  verification: {
    date: "2026.09.03",
    note: "본문은 사용자가 제공한 카드뉴스 8장의 순서·문구·시각 자료를 블로그 형식으로 옮겼습니다. Cost Plus Drugs의 원가+15% 마진+약국 수수료·배송·세금 가격식은 회사 공식 페이지와 대조했습니다. 카드뉴스의 ‘순자산 5조’, ‘100배’, ‘100만 원에서 3만 원’은 특정 시점·품목이 없어 일반적인 사실로 확대하지 않고 원문 카드뉴스의 서술로만 남겼습니다. Broadcast.com 매각과 직원 주식, 2020년 경기장 시급 노동자 지원은 관련 공개 보도로 확인했습니다.",
    sources: [
      { label: "Mark Cuban Cost Plus Drugs, Mission and pricing", url: COST_PLUS_MISSION_URL },
      { label: "Yahoo! SEC filing, broadcast.com acquisition", url: YAHOO_BROADCAST_SEC_URL },
      { label: "CBS News, Self-Made Maverick", url: CBS_MARK_CUBAN_URL },
      { label: "Axios, Mark Cuban vows to help hourly workers impacted by NBA coronavirus move", url: AXIOS_HOURLY_WORKERS_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00104-mark-cuban-cost-plus-drugs-price-transparency-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00104-mark-cuban-cost-plus-drugs-price-transparency-hero.jpg",
  paragraphs: [
    "1999년, 마크 큐반은 회사를 57억 달러에 매각했습니다. 그에게는 더 많은 부를 쌓을 방법이 있었지만, 그는 처방약 유통이라는 더 어려운 문제를 골랐습니다.",
    "카드뉴스는 불투명한 유통 구조가 제네릭 약값을 부풀리고 환자의 선택을 좁혔다고 짚습니다. Cost Plus Drugs는 이를 기부가 아닌 가격 공개 사업으로 풀려고 했습니다.",
    "Cost Plus Drugs의 가격 공식은 약 원가에 15% 마진을 더하고 약국 수수료, 배송비와 세금을 더하는 방식입니다. 중요한 건 가격이 아니라 가격이 만들어지는 경로를 공개했다는 점입니다.",
    "새 약을 만든 것이 아니라 약을 살 수 있는 길을 만들었다는 카드뉴스의 결론은, 사업이 돈을 버는 수단인 동시에 시장의 규칙을 바꿀 수 있다는 관점을 남깁니다.",
    "창업의 성과는 기업가치만이 아니라 고객, 팀원, 그리고 사업의 영향을 받는 사람에게 남긴 변화로도 볼 수 있습니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <h2>1999년, 마크 큐반은 회사를<br>57억 달러에 매각했습니다</h2>
  <p>한 번의 거래로 그는 억만장자 반열에 올랐고,<br>그보다 더 부를 쌓을 방법은 많았습니다.<br>유망 기업에 투자하고,<br>안전한 자산을 사들이는 길도 있었죠.</p>
  <p><strong><u>그는 돈보다 어려운 문제를 골랐습니다.<br>바로 처방약 유통.</u></strong></p>
  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00104-mark-cuban-broadcast-com-sale.jpg" alt="마크 큐반이 무대에서 발언하는 모습">
  </figure>

  <hr>

  <h2>불투명한 유통 구조로 인해<br>병들어 있던 처방약 유통 시장</h2>
  <p>제네릭 약도 중간 브로커들이<br>100배 넘게 약값을 뻥튀기했습니다.</p>
  <p>사람들은 부풀려진 약값을 감당 못해<br>약을 쪼개 먹거나, 사지 못해 죽어갔습니다.</p>
  <p><strong><u>“어느 누구도 약값과 내일 먹을 밥값 중에<br>선택을 강요받아선 안 됩니다.”</u></strong></p>
  <p class="dh-note">위 수치와 표현은 사용자 제공 카드뉴스의 서술입니다. 특정 품목·시점이 제시되지 않아 일반적인 가격 비교로 확대하지 않습니다.</p>
  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00104-prescription-medication-access.jpg" alt="손에 든 약과 약병">
  </figure>

  <hr>

  <h2>큐반은 이 끔찍한 카르텔을<br>‘기부’가 아닌 ‘사업’으로 깨부수기로 합니다.</h2>
  <p><strong>“약의 원가에 15% 마진,<br>약국 수수료와 배송비·세금을 더합니다.”</strong></p>
  <p>가격을 숨기는 대신,<br>가격 공식을 투명히 공개했습니다.</p>
  <p><strong><u>납득할 수 있는 가격을<br>누구나 보게 한 겁니다.</u></strong></p>
  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00104-transparent-drug-pricing.jpg" alt="약국 선반에서 약품을 확인하는 약사">
  </figure>

  <hr>

  <h2>새 약을 만든 것이 아니라,<br>약을 살 수 있는 길을 만들었습니다.</h2>
  <p>복잡한 유통망을 치우고 거품을 빼자 기적이 일어났습니다.<br>100만 원짜리 난치병 약이 3만 원으로 곤두박질쳤습니다.</p>
  <p>세상에 없던 신약을 개발한 것이 아닙니다.<br>환자의 목숨을 쥐어짜던 시스템을 부순 것입니다.</p>
  <p><strong><u>비즈니스가 돈을 버는 수단인 동시에,<br>망가진 시장의 규칙을 바꾸는 가장 강력한 무기라는 것.</u></strong></p>
  <p class="dh-note">가격 차이는 사용자 제공 카드뉴스의 사례 서술입니다. Cost Plus Drugs는 품목별 가격을 공개하지만, 이 글은 해당 금액을 모든 난치병 약에 적용되는 비교 수치로 사용하지 않습니다.</p>
  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00104-affordable-medication-access.jpg" alt="서로를 안고 있는 노년의 부부">
  </figure>

  <hr>

  <h2>큐반의 철학은 ‘사람’을 대하는<br>방식에서도 선명하게 드러납니다.</h2>
  <p>과거 회사를 매각했을 때, 본인만 부자가 되지 않았습니다.<br>수백 명의 평직원들에게 주식을 나누어 주었고<br>직원 대부분을 단숨에 ‘백만장자’로 만들었습니다.</p>
  <p>2020년 코로나19로 NBA가 멈췄을 때도,<br>가장 먼저 생계가 막막해진 경기장 시급 노동자를 지원할 프로그램을 마련하겠다고 약속했습니다.</p>
  <p><strong><u>성과를 혼자 가져가지 않았습니다.</u></strong></p>
  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00104-team-success.jpg" alt="사무실에서 함께 성공을 기뻐하는 팀원들">
  </figure>

  <hr>

  <h2>창업의 성공은 단순히<br>기업가치나 숫자로만 남지 않습니다.</h2>
  <p>내 고객의 삶이 더 편해졌는가?</p>
  <p>내 팀원이 더 안정적으로, 기대를 갖고 일하는가?</p>
  <p>내 사업이 누군가의 시간과 비용, 불안을 줄이고 있는가?</p>
  <p>내 영향이 미치는 사람들의 행복에 기여하는가?</p>
  <p><strong><u>그 긍정적인 변화야말로<br>창업이 남기는 진짜 성과입니다.</u></strong></p>
  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00104-entrepreneurship-positive-impact.jpg" alt="행복한 표정의 사람들과 한글 자막이 있는 장면">
  </figure>

  <div data-dh-align="center">
    <h2>누구나 세상에<br>더 나은 변화를 만들 수 있습니다</h2>
    <p>모든 창업가가 약값을 낮출 필요는 없습니다.</p>
    <p>하지만 누구나 자신의 범위 안에서<br>더 나은 변화를 만들어 낼 수는 있습니다.</p>
    <p>큰 성공은 많은 돈을 버는 데서 시작될 수 있지만,<br>오래 남는 성공은 그 돈과 사업으로<br>‘누구의 삶을 더 행복하게 만들었는가’에 달려 있습니다.</p>
  </div>
  <div class="dh-cta">
    <p>사업이 바꾸고 싶은 고객의 불편과 남기고 싶은 변화를 사업계획서에 먼저 적어보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=mark-cuban-cost-plus-drugs-price-transparency&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 사업계획서 준비하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${COST_PLUS_MISSION_URL}" target="_blank" rel="noopener noreferrer">Mark Cuban Cost Plus Drugs, Mission and pricing</a></li>
      <li><a href="${YAHOO_BROADCAST_SEC_URL}" target="_blank" rel="noopener noreferrer">Yahoo! SEC filing, broadcast.com acquisition</a></li>
      <li><a href="${CBS_MARK_CUBAN_URL}" target="_blank" rel="noopener noreferrer">CBS News, Self-Made Maverick</a></li>
      <li><a href="${AXIOS_HOURLY_WORKERS_URL}" target="_blank" rel="noopener noreferrer">Axios, Mark Cuban vows to help hourly workers impacted by NBA coronavirus move</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

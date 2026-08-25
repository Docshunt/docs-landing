import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const SHINCHOSHA_AUTHOR_URL = "https://www.shinchosha.co.jp/harukimurakami/author.html";
const PARIS_REVIEW_INTERVIEW_URL = "https://www.theparisreview.org/interviews/2/the-art-of-fiction-no-182?src=longreads";
const GUARDIAN_ROUTINE_URL = "https://www.theguardian.com/books/2018/oct/11/haruki-murakami-interview-killing-commendatore";
const GUARDIAN_PETER_CAT_URL = "https://www.theguardian.com/books/2003/may/17/fiction.harukimurakami";

export const post100 = {
  page: 1,
  index: 1,
  slug: "haruki-murakami-routine-startup-consistency",
  sourceUrl: "https://docshunt.ai/blog_detail/haruki-murakami-routine-startup-consistency",
  title: "재즈바도, 소설도 하루키는 하루치씩 했습니다",
  titleLines: ["재즈바도, 소설도", "하루키는", "하루치씩 했습니다"],
  titleLineBreaks: "always",
  description:
    "하루키는 재즈바와 소설을 하루치씩 이어갔습니다. 특별한 영감보다 다음 날에도 다시 시작하는 반복이 창업을 오래 끌고 가는 기준이 될 수 있다는 카드뉴스의 메시지를 그대로 옮겼습니다.",
  seo: {
    mainKeyword: "하루키",
    supportKeywords: ["하루키 루틴", "피터 캣", "매일 글쓰기", "창업 꾸준함"],
    searchIntent: "하루키가 재즈바와 소설을 하루치씩 이어간 루틴에서 창업을 지속하는 기준을 알고 싶다",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.25",
  modifiedDate: "2026.08.25",
  verification: {
    date: "2026.08.25",
    note: "본문은 사용자가 제공한 9장 카드뉴스에서 문구·줄바꿈·강조·정렬·이미지 순서를 재현했습니다. 하루키의 연혁과 피터 캣 관련 내용은 신초샤 공식 연표와 Guardian 자료로, 집필 루틴은 Paris Review와 Guardian 인터뷰로 대조했습니다. 카드뉴스의 창업 비유를 성과 보장이나 일반 법칙으로 확대하지 않았습니다.",
    sources: [
      { label: "신초샤 공식 하루키 작가 소개·연표", url: SHINCHOSHA_AUTHOR_URL },
      { label: "The Paris Review, Haruki Murakami: The Art of Fiction No. 182", url: PARIS_REVIEW_INTERVIEW_URL },
      { label: "The Guardian, Haruki Murakami interview", url: GUARDIAN_ROUTINE_URL },
      { label: "The Guardian, Marathon man", url: GUARDIAN_PETER_CAT_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00100-haruki-routine-startup-consistency-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00100-haruki-routine-startup-consistency-hero.jpg",
  paragraphs: [
    "1974년, 하루키는 아내와 재즈바 ‘피터 캣’을 엽니다. 낮에는 커피를 끓이고 샌드위치를 만들고, 밤에는 술과 안주를 팔았습니다.",
    "29살의 하루키는 야구를 보다가 소설을 써보기로 합니다. 그 뒤 가게 일을 마친 밤, 주방 테이블에 앉아 매일 1~2시간씩 조금씩 글을 썼습니다.",
    "소설가가 된 뒤에도 매일 거의 같은 하루를 반복했습니다. 새벽 4시에 일어나 다섯~여섯 시간 글을 쓰고, 그 뒤에는 달리거나 수영하고 일찍 잠들었습니다.",
    "하루키가 지킨 건 재능의 순간이 아니라 다음 날에도 다시 책상에 앉는 일이었습니다. 창업도 아이디어가 시작된 다음 날에도 계속할 수 있는 ‘그냥’에서 자랍니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <h2>1974년, 하루키는 아내와<br>재즈바 ‘피터 캣’을 엽니다.</h2>
  <p>낮에는 커피를 끓이고 샌드위치를 만들고, 밤에는 술과 안주를 팔았습니다.</p>
  <p>빚을 갚아야 하는데 돈은 벌리지 않고,<br>설거지, 바닥 청소, 재즈 뮤지션 섭외, 취객 관리까지<br><br>모든 일을 아내와 단둘이 직접 했습니다.</p>
  <p><strong><u>피터 캣은 7년 동안 이어졌습니다.</u></strong></p>
  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00100-haruki-peter-cat-bar.jpg" alt="하루키가 운영하던 재즈바 피터 캣의 바 안쪽 이미지">
  </figure>

  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00100-haruki-writing-desk.jpg" alt="하루키가 글을 쓰던 책상과 작업 공간 이미지">
  </figure>
  <h2>29살의 하루키는 야구를 보다가<br>소설을 써보기로 합니다.</h2>
  <p>그 뒤 가게 일을 마친 밤,<br>주방 테이블에 앉아<br>매일 1~2시간씩 조금씩 글을 썼습니다.</p>
  <p>작가가 될 준비가<br>되어 있던 건 아니었습니다.</p>
  <p><strong><u>그냥, 다음 날에도 썼습니다.</u></strong></p>

  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00100-haruki-writing-routine.jpg" alt="책상에서 노트북으로 작업하는 하루키의 모습">
  </figure>
  <h2>가게와 글,<br>둘 다 ‘하루치’씩 했습니다.</h2>
  <div class="dh-card-columns">
    <p>가게에는 영업시간이 있었고,<br>글에는 쓰는 시간이 있었습니다.<br><br>하루가 잘돼도, 안 풀려도<br>다음 날 다시 문을 열고<br>다음 문장을 썼습니다.</p>
    <p><strong><u>한 번의 영감보다<br>반복이 먼저였습니다.</u></strong></p>
  </div>

  <h2>소설가가 된 뒤<br>생활은 더 단순해졌습니다.</h2>
  <p>장편을 쓸 때 그는<br>새벽 4시에 일어나<br>다섯~여섯 시간 글을 씁니다.</p>
  <p>그 뒤에는 달리거나 수영하고,<br>일찍 잠듭니다.</p>
  <p><strong><u>매일 거의 같은 하루를<br>반복했습니다.</u></strong></p>
  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00100-haruki-running-routine.jpg" alt="해 뜨는 시간에 달리는 사람의 실루엣 이미지">
  </figure>

  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00100-haruki-writing-desk-top.jpg" alt="책과 노트, 연필이 놓인 집필 책상 이미지">
  </figure>
  <h2>하루키가 지킨 건<br>재능의 순간이 아니었습니다.</h2>
  <p>책 한 권을 쓰는 일보다<br>다음 날에도 다시<br>책상에 앉는 일.</p>
  <p>작가가 되는 일보다<br>작가로 계속 살아가는 일.</p>
  <p><strong><u>글쓰기는<br>매일 하는 일이었습니다.</u></strong></p>

  <h2>피터 캣과 소설은<br>같은 방식으로 이어졌습니다.</h2>
  <p>가게는 매일 열어야 했고,<br>소설은 매일 써야 했습니다.</p>
  <p>피터 캣은 7년 동안 이어졌고,<br>하루키는 수십 년째 소설을 씁니다.</p>
  <p><strong><u>쌓인 건 특별한 하루가 아니라<br>평범한 날들이었습니다.</u></strong></p>
  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00100-peter-cat-interior.jpg" alt="피터 캣을 떠올리게 하는 음악과 바 공간 이미지">
  </figure>

  <h2>꾸준함은<br>거창한 의지가 아닙니다.</h2>
  <p>매일 대단한 동기가 있어야<br>계속할 수 있는 건 아닙니다.<br><br>오늘 할 몫이 있고,<br>그걸 그냥 해내는 것.</p>
  <p><strong><u>하루키는 그 ‘그냥’을<br>아주 오래 했습니다.</u></strong></p>
  <figure class="dh-image">
    <img src="/docshunt-assets/blog-inline/00100-peter-cat-vintage-bar.jpg" alt="오래된 재즈바의 흑백 내부 사진">
  </figure>

  <div style="text-align:center">
    <h2>특별해서 오래 한 게 아니라,<br>오래 해서 자기만의 것이 됐습니다.</h2>
    <p>창업도 마찬가지입니다.</p>
    <p>아이디어는 어느 날 시작되지만,<br>사업은 그다음 날에도<br>계속할 수 있는 ‘그냥’에서 자랍니다.</p>
    <p><strong><u>수많은 ‘그냥’을 쌓아,<br>나만의 것으로.</u></strong></p>
  </div>

  <div class="dh-cta">
    <p>하루치씩 이어갈 사업계획서를 독스헌트와 함께 준비하세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=haruki-murakami-routine-startup-consistency&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 사업계획서 준비하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${SHINCHOSHA_AUTHOR_URL}" target="_blank" rel="noopener noreferrer">신초샤 공식 하루키 작가 소개·연표</a></li>
      <li><a href="${PARIS_REVIEW_INTERVIEW_URL}" target="_blank" rel="noopener noreferrer">The Paris Review, Haruki Murakami: The Art of Fiction No. 182</a></li>
      <li><a href="${GUARDIAN_ROUTINE_URL}" target="_blank" rel="noopener noreferrer">The Guardian, Haruki Murakami interview</a></li>
      <li><a href="${GUARDIAN_PETER_CAT_URL}" target="_blank" rel="noopener noreferrer">The Guardian, Marathon man</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

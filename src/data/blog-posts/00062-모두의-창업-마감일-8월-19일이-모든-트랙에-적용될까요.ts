import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const MSS_FIRST_NOTICE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1066642&cbIdx=310&parentSeq=1066642";
const MSS_SOCIAL_VENTURE_URL = "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1070161&cbIdx=310";
const MODOO2_RECRUIT_URL = "https://www.korea.kr/news/policyNewsView.do?newsId=148970279";
const MODOO2_ROUND1_URL = "https://www.korea.kr/briefing/pressReleaseView.do?newsId=156785521";

export const post62 = {
  page: 1,
  index: 1,
  slug: "modoo-startup-deadline-track-check",
  sourceUrl: "https://docshunt.ai/blog_detail/modoo-startup-deadline-track-check",
  title: "모두의 창업 마감일, 1기·소셜벤처 리그·2차 일정 한눈에 보기",
  titleLines: ["모두의 창업 마감일,", "1기·소셜벤처 리그·2차", "일정 한눈에 보기"],
  titleLineBreaks: "always",
  description:
    "모두의 창업 마감일을 회차별로 정리했습니다. 1기는 5월 15일, 소셜벤처 리그는 8월 19일, 2차는 9월 17일에 접수를 마쳤고 2차 1라운드 1만 명은 10월에 선발됐습니다. 다음 모집 확인법도 담았습니다.",
  seo: {
    mainKeyword: "모두의 창업 마감일",
    supportKeywords: ["모두의 창업 2차", "모두의 창업 신청기간", "소셜벤처 리그"],
    searchIntent: "모두의 창업 각 회차의 신청 마감일과 지금 신청할 수 있는 모집이 있는지, 다음 모집은 어디서 확인하는지 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.07",
  modifiedDate: "2026.11.23",
  verification: {
    date: "2026.11.23",
    note: "1기 통합 모집기간(2026.3.26~5.15 16시)과 사회혁신 소셜벤처 리그 모집기간(2026.7.30~8.19 18시)은 중소벤처기업부 공고로, 2차 모집기간(2026.8.20 9시~9.17 16시)과 선발 규모는 2026년 8월 19일 정책브리핑 기사로, 2차 1라운드 진출자 1만 명 선발과 재도전 멘토링 일정은 2026년 10월 16일 중소벤처기업부 보도자료로 확인했습니다. 2026년 11월 23일 중소벤처기업부 사업공고 목록에서 새 도전자 모집공고는 보이지 않았습니다. 이 글은 2026년 8월 7일 처음 작성하고 11월 23일 회차별 일정 정리로 다시 썼습니다.",
    sources: [
      { label: "중소벤처기업부, 모두의 창업 프로젝트 통합 모집공고", url: MSS_FIRST_NOTICE_URL },
      { label: "중소벤처기업부, 모두의 창업:사회혁신 소셜벤처 리그 모집공고", url: MSS_SOCIAL_VENTURE_URL },
      { label: "대한민국 정책브리핑, 아이디어 있으면 누구나 도전…내달 17일까지 '모두의 창업' 2차 모집", url: MODOO2_RECRUIT_URL },
      { label: "대한민국 정책브리핑, 2차 '모두의 창업' 1라운드 진출자 선발", url: MODOO2_ROUND1_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00062-modoo-startup-deadline-schedule-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00062-modoo-startup-deadline-schedule-hero.jpg",
  paragraphs: [
    "모두의 창업은 2026년에 세 번 접수를 받았습니다. 1기 통합 모집은 5월 15일 16시, 사회혁신 소셜벤처 리그는 8월 19일 18시, 2차 모집은 9월 17일 16시에 마감했습니다.",
    "2차는 9만 3천여 명이 신청해 10월 15일 1라운드 진출자 1만 명을 선발했고, 미선정자에게는 12월 14일까지 재도전 멘토링을 운영합니다.",
    "2026년 11월 23일 기준 중소벤처기업부 사업공고에는 새 도전자 모집이 올라와 있지 않습니다. 다음 모집은 중소벤처기업부 사업공고와 모두의 창업 플랫폼 공지로 확인하세요.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>모두의 창업 마감일</strong>은 회차마다 달랐습니다. 2026년에는 1기 통합 모집(5월 15일 16시), 사회혁신 소셜벤처 리그(8월 19일 18시), 2차 모집(9월 17일 16시) 세 번 접수를 받았고 <strong>세 모집 모두 끝났습니다.</strong> 11월 23일 기준 중소벤처기업부 사업공고에는 새 도전자 모집이 보이지 않습니다.</p>
  <p>이 글은 8월에 "8월 19일이 모든 트랙의 마감일인가"라는 질문으로 처음 썼고, 2차 모집과 선발이 끝난 뒤 회차별 일정 정리로 다시 썼습니다.</p>

  <h2>2026년 모두의 창업 회차별 일정</h2>
  <table>
    <thead>
      <tr>
        <th>회차</th>
        <th>접수 기간</th>
        <th>규모·결과</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="${MSS_FIRST_NOTICE_URL}" target="_blank" rel="noopener noreferrer"><strong>1기 통합 모집</strong></a><br>일반·기술 / 로컬</td>
        <td>3.26 ~ 5.15 16:00<br>모두의 창업 플랫폼</td>
        <td>5,000명 선발(일반·기술 4,000, 로컬 1,000)</td>
      </tr>
      <tr>
        <td><a href="${MSS_SOCIAL_VENTURE_URL}" target="_blank" rel="noopener noreferrer"><strong>사회혁신 소셜벤처 리그</strong></a><br>별도 공고 제2026-482호</td>
        <td>7.30 ~ 8.19 18:00<br>기술보증기금 ONE플랫폼</td>
        <td>예비창업자 또는 창업 7년 이내, 5개 지정과제</td>
      </tr>
      <tr>
        <td><a href="${MODOO2_RECRUIT_URL}" target="_blank" rel="noopener noreferrer"><strong>2차 모집</strong></a><br>일반·기술 / 로컬</td>
        <td>8.20 09:00 ~ 9.17 16:00<br>모두의 창업 플랫폼</td>
        <td>9만 3천여 명 신청, 10.15 1라운드 1만 명 선발(일반·기술 8천, 로컬 2천)</td>
      </tr>
    </tbody>
  </table>
  <p>세 회차는 접수처와 신청 대상이 달랐습니다. 특히 소셜벤처 리그는 이름에 '모두의 창업'이 붙어 있어도 기술보증기금 ONE플랫폼에서 따로 받는 공고였습니다. 날짜만 보고 같은 사업으로 판단하면 신청 대상과 접수처를 잘못 확인하게 됩니다.</p>

  <h2>2차에서 달라진 점</h2>
  <p><a href="${MODOO2_RECRUIT_URL}" target="_blank" rel="noopener noreferrer">2차 모집 안내</a>를 보면 다음 모집을 준비할 때 참고할 변화가 몇 가지 있었습니다.</p>
  <ul>
    <li><strong>기창업자 범위:</strong> 이종창업을 원하는 기창업자의 참여 자격이 업력 3년 이내에서 7년 이내로 넓어졌습니다. 다만 선발 인원의 80% 이상은 예비창업자로 뽑았습니다.</li>
    <li><strong>도전신청서:</strong> 도전자의 역량과 창업 준비 과정을 쓰는 문항이 추가됐고, 재도전자는 1차 아이디어에서 개선·보완한 점을 따로 썼습니다.</li>
    <li><strong>심사:</strong> 멘토 3명이 함께 보는 다면 심사와 AI 생성률·표절률을 검사하는 AI 검증 모델이 도입됐습니다.</li>
    <li><strong>창업활동자금:</strong> 사용 범위가 온라인 결제대행(PG) 업종까지 넓어졌고, <a href="${MODOO2_ROUND1_URL}" target="_blank" rel="noopener noreferrer">1라운드 진출자 전원</a>에게 2백만 원이 지원됩니다.</li>
  </ul>

  <h2>지금 할 수 있는 것: 재도전 멘토링과 다음 모집 확인</h2>
  <p>2차에서 선정되지 않은 8만 3천여 명에게는 10월 26일부터 12월 14일까지 오프라인 재도전 멘토링이 운영됩니다. 2차 1라운드 진출자 가운데 40.4%가 1차 재도전자였다고 <a href="${MODOO2_ROUND1_URL}" target="_blank" rel="noopener noreferrer">중기부가 밝혔습니다</a>. 2차에서 재도전자의 개선·보완 사항과 재도전 멘토링 참여 이력을 평가에 반영했던 만큼, 다음 모집을 노린다면 멘토링 의견을 기록해 두는 편이 좋습니다.</p>
  <p>다음 모집 일정은 아래 순서로 확인하세요.</p>
  <ol>
    <li><strong>공고 원문:</strong> 중소벤처기업부 사업공고에서 공고 전체 이름과 공고번호를 확인합니다.</li>
    <li><strong>접수처:</strong> 모두의 창업 플랫폼인지, 다른 기관 플랫폼인지 봅니다.</li>
    <li><strong>마감 시각:</strong> 1기와 2차는 16시, 소셜벤처 리그는 18시였습니다. 분 단위까지 확인합니다.</li>
    <li><strong>신청 대상:</strong> 예비창업자, 기창업자 업력, 트랙 조건이 내게 맞는지 확인합니다.</li>
  </ol>
  <p>2027년에는 예비창업패키지 등 예비창업 사업을 모두의 창업으로 일원화하는 정부 계획도 나와 있습니다. 자세한 내용은 <a href="/blog_detail/modoo-startup-2-pre-startup-package-status">모두의 창업 2기와 예비창업패키지 글</a>에 정리했습니다.</p>

  <div class="dh-cta">
    <p>다음 모집 전에 도전신청서에 쓸 고객 문제, 검증 기록, 실행 계획을 미리 정리해 두면 공고가 나온 뒤 문항에 맞춰 옮기기만 하면 됩니다.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=modoo-startup-deadline-track-check&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 신청서 초안 준비하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${MSS_FIRST_NOTICE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 모두의 창업 프로젝트 통합 모집공고 (2026.11.23 확인)</a></li>
      <li><a href="${MSS_SOCIAL_VENTURE_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 모두의 창업:사회혁신 소셜벤처 리그 모집공고 (2026.11.23 확인)</a></li>
      <li><a href="${MODOO2_RECRUIT_URL}" target="_blank" rel="noopener noreferrer">대한민국 정책브리핑, 아이디어 있으면 누구나 도전…내달 17일까지 '모두의 창업' 2차 모집 (2026.11.23 확인)</a></li>
      <li><a href="${MODOO2_ROUND1_URL}" target="_blank" rel="noopener noreferrer">대한민국 정책브리핑, 2차 '모두의 창업' 1라운드 진출자 선발 (2026.11.23 확인)</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

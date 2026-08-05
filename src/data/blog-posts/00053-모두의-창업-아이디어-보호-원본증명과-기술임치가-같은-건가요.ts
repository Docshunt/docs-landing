import { APP_URL } from "@/seo/metadata";

import type { BlogPost } from "./types";

const MODOO_BRIEFING_URL = "https://www.korea.kr/briefing/policyBriefingView.do?newsId=156767570";
const MSS_CLARIFICATION_URL = "https://www.korea.kr/news/policyNewsView.do?newsId=148967078";
const KIPO_ORIGINAL_PROOF_URL =
  "https://www.kipo.go.kr/ko/kpoBultnDetail.do?aprchId=BUT0000029&menuCd=SCD0200618&ntatcSeq=20822&sysCd=SCD02";

export const post53 = {
  page: 1,
  index: 1,
  slug: "modoo-startup-idea-proof-technology-escrow",
  sourceUrl: "https://docshunt.ai/blog_detail/modoo-startup-idea-proof-technology-escrow",
  title: "모두의 창업 아이디어 보호, 원본증명과 기술임치가 같은 건가요?",
  titleLines: ["모두의 창업 아이디어 보호,", "원본증명과 기술임치가 같은 건가요?"],
  description:
    "모두의 창업 1기 선정자에게 안내된 영업비밀 원본증명과 기술임치는 대상과 이용 조건이 다릅니다. 5,000명 지원 범위, 사업자등록 여부, 각 제도가 남기는 증거를 공식 발표 기준으로 구분했습니다.",
  seo: {
    mainKeyword: "모두의 창업",
    supportKeywords: ["아이디어 원본증명", "기술임치", "아이디어 보호"],
    searchIntent: "모두의 창업에서 지원한다는 원본증명과 기술임치의 차이, 대상과 신청 조건을 정확히 알고 싶다.",
  },
  author: "독스헌트 마케팅팀",
  date: "2026.08.05",
  modifiedDate: "2026.08.05",
  verification: {
    date: "2026.08.05",
    note: "2026년 6월 22일 중소벤처기업부 브리핑, 6월 25일 보도설명자료, 지식재산처 원본증명 안내를 대조했습니다. 실제 지원 절차와 법적 효과는 중소벤처기업부·지식재산처의 최신 개별 안내 및 전문가 상담을 최종 기준으로 확인해야 합니다.",
    sources: [
      { label: "대한민국 정책브리핑, 모두의 창업 관련 브리핑", url: MODOO_BRIEFING_URL },
      { label: "중소벤처기업부, 모두의 창업 아이디어 보호 보도설명자료", url: MSS_CLARIFICATION_URL },
      { label: "지식재산처, 영업비밀 원본증명 서비스 안내", url: KIPO_ORIGINAL_PROOF_URL },
    ],
  },
  image: "/docshunt-assets/blog-covers/00053-modoo-startup-idea-proof-technology-escrow-list.jpg",
  heroImage: "/docshunt-assets/blog-covers/00053-modoo-startup-idea-proof-technology-escrow-hero.jpg",
  paragraphs: [
    "모두의 창업 1기 선정자에게 안내된 영업비밀 원본증명과 기술임치는 같은 제도가 아닙니다. 원본증명은 전자파일의 존재와 보유 시점을 입증하는 데 쓰이고, 기술임치는 구체화된 기술자료를 맡겨 보관하는 제도입니다.",
    "정부 발표상 원본증명 등록은 1기 선정자 5,000명 전원을 대상으로 무상 지원하고, 기술임치는 사업자등록을 한 경우 향후 1년간 무상 지원하는 방식입니다.",
    "원본증명이 특허 등록이나 자동 보호를 뜻하는 것은 아닙니다. 안내받은 파일과 신청 시점을 보존하고, 아이디어가 기술자료로 구체화되면 기술임치와 전문가 상담을 함께 검토해야 합니다.",
  ],
  contentHtml: `<div class="dh-seo-post">
  <p><strong>모두의 창업</strong> 1기 선정자에게 안내된 영업비밀 원본증명과 기술임치는 같은 제도가 아닙니다. 원본증명은 전자파일의 존재와 보유 시점을 입증하는 데 쓰이고, 기술임치는 구체화된 기술자료를 맡겨 보관하는 제도입니다.</p>
  <p>중소벤처기업부는 2026년 6월 22일 브리핑에서 1기 선정자 5,000명 전원에게 제출한 도전신청서의 원본증명 등록을 무상 지원하고, 사업자를 등록한 경우 향후 1년간 기술임치도 무상 지원하겠다고 밝혔습니다.</p>

  <h2>원본증명은 ‘이 파일을 언제 보유했는지’를 남깁니다</h2>
  <p>지식재산처 설명에 따르면 영업비밀 원본증명은 원본 전자파일의 고유값을 원본증명기관에 등록해, 분쟁이 생겼을 때 해당 자료의 존재와 보유 시점을 입증하도록 돕는 서비스입니다.</p>
  <p>원본 파일 자체를 정부에 넘겨 특허를 받는 절차와는 다릅니다. 전자파일에서 만든 고유한 전자지문과 등록 시점이 증거로 남고, 원본 파일은 보유자가 관리합니다.</p>

  <h2>기술임치는 구체화된 기술자료를 맡기는 제도입니다</h2>
  <p>중소벤처기업부 보도설명자료는 생산·제조방법, 소스코드, 연구개발보고서처럼 구체적인 기술자료를 기술임치 대상으로 설명합니다. 아직 제품이나 기술로 구현되기 전의 아이디어 문서와는 대상이 다릅니다.</p>
  <p>모두의 창업 지원안에서도 이 차이가 적용됩니다. 원본증명은 사업자등록 여부와 관계없이 5,000명 전원을 대상으로 하지만, 기술임치는 기업이나 법인 등 사업자등록이 필요한 제도여서 등록한 참여자에게 1년 무상 지원하는 방식으로 안내됐습니다.</p>

  <h2>지원 대상과 쓰임을 나란히 보면 차이가 분명합니다</h2>
  <div class="dh-note">
    <p><strong>영업비밀 원본증명</strong><br>도전신청서와 같은 전자파일의 존재와 보유 시점을 남기는 데 초점이 있습니다. 모두의 창업 1기 선정자 5,000명 전원이 무상 지원 대상입니다.</p>
    <p><strong>기술임치</strong><br>소스코드, 제조방법, 연구개발보고서처럼 구체화된 기술자료를 맡기는 데 초점이 있습니다. 사업자등록을 한 참여자에게 향후 1년 무상 지원하는 것으로 발표됐습니다.</p>
  </div>

  <h2>등록 안내를 받았다면 파일부터 그대로 보관하세요</h2>
  <ol>
    <li>제출했던 도전신청서 원본과 최종 제출일을 확인합니다.</li>
    <li>파일을 임의로 덮어쓰지 말고 제출본과 이후 수정본을 따로 보관합니다.</li>
    <li>원본증명 등록 대상 파일과 신청 절차는 공식 안내에서 다시 확인합니다.</li>
    <li>아이디어가 소스코드나 제조방법으로 구체화됐다면 사업자등록 여부와 기술임치 대상을 확인합니다.</li>
    <li>도용 우려나 분쟁 가능성이 있다면 지원되는 지식재산·법률 상담을 이용합니다.</li>
  </ol>
  <p><strong class="dh-emphasis">원본증명과 기술임치는 특허 등록 절차가 아닙니다.</strong> 도용 우려나 분쟁 가능성이 있다면 등록 기록만 믿기보다 함께 제공되는 지식재산·법률 상담에서 필요한 보호 조치를 확인해야 합니다.</p>

  <div class="dh-cta">
    <p>모두의 창업과 다른 지원사업의 공고·제출 조건을 한곳에서 확인하고 준비할 내용을 정리해보세요.</p>
    <a class="dh-cta-button" href="${APP_URL}/f?utm_source=blog&amp;utm_medium=owned&amp;utm_campaign=modoo-startup-idea-proof-technology-escrow&amp;utm_content=blog_cta" target="_blank" rel="noopener noreferrer">독스헌트에서 지원사업 확인하기</a>
  </div>

  <section class="dh-sources">
    <h2>참고자료</h2>
    <ul>
      <li><a href="${MODOO_BRIEFING_URL}" target="_blank" rel="noopener noreferrer">대한민국 정책브리핑, 모두의 창업 관련 브리핑</a></li>
      <li><a href="${MSS_CLARIFICATION_URL}" target="_blank" rel="noopener noreferrer">중소벤처기업부, 모두의 창업 아이디어 보호 보도설명자료</a></li>
      <li><a href="${KIPO_ORIGINAL_PROOF_URL}" target="_blank" rel="noopener noreferrer">지식재산처, 영업비밀 원본증명 서비스 안내</a></li>
    </ul>
  </section>
</div>`,
} satisfies BlogPost;

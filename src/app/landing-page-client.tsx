"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
  type TransitionEvent,
} from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { softwareApplicationJsonLd } from "@/seo/metadata";

const cdn = "https://4691947d26a9c64d254186f138cdee17.cdn.bubble.io";
const assets = "/docshunt-assets";
const startPath = "https://app.docshunt.ai";

const heroWorkflowSlides = [
  {
    step: "STEP 1",
    title: "지원사업 선택하고",
    preview: "program",
  },
  {
    step: "STEP 2",
    title: "AI와 대화하면",
    preview: "chat",
  },
  {
    step: "STEP 3",
    title: "공고 / 양식에 맞춰 완성",
    preview: "complete",
  },
] as const;

const heroWorkflowAutoMs = 9000;
const draftProofAutoMs = 5600;
const heroWorkflowProgramClickMs = 3200;
const heroWorkflowChatAutoMs = 6500;
const heroWorkflowSwipeThreshold = 48;

const heroProgramRows = [
  { title: "2026 예비창업패키지", dday: "D-1", urgent: true },
  { title: "2026 초기창업패키지", dday: "D-7" },
  { title: "2026 청년창업사관학교", dday: "D-15" },
  { title: "2026 창업도약패키지", dday: "D-10" },
] as const;

const draftActualGeneratedDocumentFiles = [
  "스크린샷 2026-07-19 오후 6.27.18.webp",
  "스크린샷 2026-07-19 오후 6.27.29.webp",
  "스크린샷 2026-07-19 오후 6.27.35.webp",
  "스크린샷 2026-07-19 오후 6.27.40.webp",
  "스크린샷 2026-07-19 오후 6.27.45.webp",
  "스크린샷 2026-07-19 오후 6.27.50.webp",
  "스크린샷 2026-07-19 오후 6.27.55.webp",
  "스크린샷 2026-07-19 오후 6.28.01.webp",
  "스크린샷 2026-07-19 오후 6.28.06.webp",
  "스크린샷 2026-07-19 오후 6.28.11.webp",
  "스크린샷 2026-07-19 오후 6.28.15.webp",
  "스크린샷 2026-07-19 오후 6.28.21.webp",
  "스크린샷 2026-07-19 오후 6.28.27.webp",
  "스크린샷 2026-07-19 오후 6.28.31.webp",
] as const;

const draftActualDocumentPages = draftActualGeneratedDocumentFiles.map((fileName, index) => ({
  src: encodeURI(`${assets}/document-viewer-pages/pre-startup-generated/${fileName}`),
  alt: `독스헌트로 생성한 예비창업패키지 사업계획서 ${index + 1}페이지`,
}));

const draftActualTemplateDocumentPages = [
  "page-01-pre-startup-package.webp",
  "page-02-summary.webp",
  "page-03-problem.webp",
  "page-04-solution.webp",
  "page-05-budget.webp",
  "page-06-scale-up.webp",
  "page-07-team.webp",
].map((fileName, index) => ({
  src: `${assets}/document-viewer-pages/${fileName}`,
  alt: `예비창업패키지 사업계획서 양식 ${index + 1}페이지`,
}));

const questionVideo = `${cdn}/f1779716417056x278852230160279800/%E1%84%83%E1%85%A9%E1%86%A8%E1%84%89%E1%85%B3%E1%84%92%E1%85%A5%E1%86%AB%E1%84%90%E1%85%B3_%E1%84%85%E1%85%A2%E1%86%AB%E1%84%83%E1%85%B5%E1%86%BC_%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC.mov`;

const interviewVideos = [
  { id: "eHCOCuoaI5M", title: "지원사업은 잘 쓰는 싸움이 아니라 많이 넣는 싸움입니다", className: "large" },
  { id: "34KtW8uyPrU", title: "독스헌트 지원사업 합격자 인터뷰 영상", className: "small" },
  {
    id: "GmIQijv2EFw",
    title: "[지원사업 합격자 인터뷰] 사업계획서 마감 3일 전에 시작했는데, 2천만원 확보한 썰 풉니다.",
    className: "small",
  },
];

const toolColumns = [
  [
    {
      badge: "이미지",
      title: "사업계획서 특화\n시각 자료 만들기",
      image: `${assets}/tool-image-generation-desktop.svg`,
      mobileImage: `${assets}/tool-image-generation-mobile.svg`,
      className: "tall",
    },
    {
      badge: "도큐먼트",
      title: "텍스트 스타일을 커스텀하고\n문서 전체에 반영",
      image: `${assets}/tool-document-style-desktop.webp`,
      mobileImage: `${assets}/tool-document-style-desktop.webp`,
      className: "medium document",
    },
    {
      badge: "New",
      title: "우리 기업 프로필을\n사업계획서에 자동 반영",
      image: `${assets}/tool-company-profile-desktop.webp`,
      mobileImage: `${assets}/tool-company-profile-mobile.webp`,
      className: "medium profile",
    },
  ],
  [
    {
      badge: "레퍼런스",
      title: "시장부터 경쟁사 조사까지\n근거 자료 찾기",
      image: `${assets}/tool-reference-research-desktop.webp`,
      mobileImage: `${assets}/tool-reference-research-mobile.webp`,
      className: "medium reference",
    },
    {
      badge: "챗봇",
      title: "생성된 문서를\nAI 에디터와 함께 수정",
      image: `${assets}/tool-ai-editor-chat-desktop.webp`,
      mobileImage: `${assets}/tool-ai-editor-chat-mobile.webp`,
      className: "chat",
    },
    {
      badge: "Coming Soon",
      title: "우리 회사 맞춤\n지원사업 추천",
      image: `${assets}/tool-support-program-recommendation-desktop.webp`,
      mobileImage: `${assets}/tool-support-program-recommendation-mobile.webp`,
      className: "medium recommendation",
    },
  ],
];

const draftProofCards = [
  {
    image: `${assets}/interviews/11111.webp`,
    mobileImage: `${assets}/interviews/11111-mobile.webp`,
    alt: "박중현 스피노자 대표 인터뷰",
    title: "지원사업, 잘 쓰는 것보다\n많이 넣는 싸움",
    quote:
      "“제가 독스헌트로 하루에 사업계획서 4개까지 해서 접수를 했고요.\n기존에는 못해도 2~3일 정도 걸리던 거를 1~2시간 안에 할 수 있게 됐습니다.”",
    author: "박중현, 스피노자 대표",
    href: "https://www.youtube.com/watch?v=9a_QmMnxmOo",
  },
  {
    image: `${assets}/interviews/33334.webp`,
    mobileImage: `${assets}/interviews/33334-mobile.webp`,
    alt: "하정연 크레센트 서울 대표 인터뷰",
    title: "밤새 쓰던 사업계획서,\n독스헌트로 자동화했어요",
    quote: "“반복적인 작업들은 자동화하고,\n본질적으로 고민해야 되는 부분에 시간을 더 쓸 수 있었습니다.”",
    author: "하정연, 크레센트 서울 대표",
    href: "https://www.youtube.com/watch?v=OWhe63kWoBk",
  },
  {
    image: `${assets}/interviews/55555.webp`,
    mobileImage: `${assets}/interviews/55555-mobile.webp`,
    alt: "김나연 지구온어스 대표 인터뷰",
    title: "마감 하루 전에도,\n2~3시간 만에 완성",
    quote: "“독스헌트가 전체 문서를 한 번에 만들어줬고,\n문제 제기와 사업 설명은 80% 이상 그대로 활용했습니다.”",
    author: "김나연, 지구온어스 대표",
    href: "https://www.youtube.com/watch?v=2pamKM3ZhCQ",
  },
  {
    image: `${assets}/interviews/22222.webp`,
    mobileImage: `${assets}/interviews/22222-mobile.webp`,
    alt: "공혁진 세르칸 대표 인터뷰",
    title: "일기처럼 쓴 아이디어가\n사업계획서 초안이 됐어요",
    quote: "“일기장에 써놨던 내용을 독스헌트에 한번 넣었죠.\n그랬더니 제가 쓴 거 같은 초안이 하나 나오더라고요.”",
    author: "공혁진, 세르칸 대표",
    href: "https://www.youtube.com/watch?v=XDzMe3WWUEo&t=2s",
  },
  {
    image: `${assets}/interviews/33333.webp`,
    mobileImage: `${assets}/interviews/33333-mobile.webp`,
    alt: "김지연 음파차트 대표 인터뷰",
    title: "마감 3일 전 시작했는데,\n2500만원 +α 확보했습니다",
    quote: "“첫 도전이다보니 기대도 크지 않았는데,\n막상 합격하니 날아갈 듯이 기뻤습니다.”",
    author: "김지연, 음파차트 대표",
    href: "https://www.youtube.com/watch?v=GmIQijv2EFw&t=8s",
  },
];

const draftWorkflowCards = [
  {
    title: "시각 자료 생성",
    body: "TAM/SAM/SOM, 비즈니스 모델, 경쟁사 비교표, 포지셔닝 맵, 자금 계획 차트 등 사업계획서에 바로 넣을 수 있는 시각 자료로 생성합니다.",
    preview: "visual",
  },
  {
    title: "시장·경쟁사 조사",
    body: "웹에서 경쟁사 분석, 시장 규모, 고객 문제, 정책·통계, 트렌드 자료를 찾아 핵심 수치와 출처를 정리하고, 사업계획서에 연결합니다.",
    preview: "research",
  },
  {
    title: "문서 스타일 자동 정리",
    body: "원하는 폰트, 제목, 줄간격 등의 문서 스타일을 사업계획서 전체에 자동 반영합니다.",
    preview: "style",
  },
] as const;

const draftFlowPrograms = [
  {
    source: "기업마당",
    title: "2026년 중소기업 혁신바우처 사업 지원계획 공고",
    eligibility: "지원 가능",
    deadline: "D-2",
    deadlineDate: "~ 26.07.10 18:00",
    agency: "중소벤처기업진흥공단",
    target: "제조 중소기업",
    career: "업력 제한 공고별 확인",
  },
  {
    source: "K-Startup",
    title: "2026년 예비창업패키지 모집 공고",
    eligibility: "지원 가능",
    deadline: "D-3",
    deadlineDate: "~ 26.07.11 18:00",
    agency: "창업진흥원",
    target: "예비창업자 및 초기창업팀",
    career: "예비창업자",
  },
  {
    source: "K-Startup",
    title: "2026년 초기창업패키지 모집 공고",
    eligibility: "지원 가능",
    deadline: "D-5",
    deadlineDate: "~ 26.07.13 18:00",
    agency: "창업진흥원",
    target: "창업 3년 이내 기업",
    career: "초기창업기업",
  },
  {
    source: "기업마당",
    title: "2026년 수출바우처사업 참여기업 모집 공고",
    eligibility: "지원 가능",
    deadline: "D-6",
    deadlineDate: "~ 26.07.14 18:00",
    agency: "중소벤처기업진흥공단",
    target: "수출 준비 및 수출 중소기업",
    career: "중소기업",
  },
  {
    source: "K-Startup",
    title: "2026년 창업도약패키지 모집 공고",
    eligibility: "지원 가능",
    deadline: "D-7",
    deadlineDate: "~ 26.07.15 18:00",
    agency: "창업진흥원",
    target: "창업 3년 초과 7년 이내 기업",
    career: "도약기 창업기업",
  },
  {
    source: "기업마당",
    title: "2026년 스마트공장 구축 및 고도화 지원사업 공고",
    eligibility: "지원 가능",
    deadline: "D-9",
    deadlineDate: "~ 26.07.17 18:00",
    agency: "중소기업기술정보진흥원",
    target: "스마트공장 도입 희망 중소기업",
    career: "중소기업",
  },
  {
    source: "K-Startup",
    title: "2026년 청년창업사관학교 모집 공고",
    eligibility: "지원 가능",
    deadline: "D-12",
    deadlineDate: "~ 26.07.20 18:00",
    agency: "중소벤처기업진흥공단",
    target: "만 39세 이하 창업자",
    career: "청년 창업기업",
  },
  {
    source: "기업마당",
    title: "2026년 중소기업 기술혁신개발사업 공고",
    eligibility: "지원 가능",
    deadline: "D-14",
    deadlineDate: "~ 26.07.22 18:00",
    agency: "중소기업기술정보진흥원",
    target: "기술혁신형 중소기업",
    career: "중소기업",
  },
  {
    source: "K-Startup",
    title: "2026년 창업중심대학 예비창업자 모집 공고",
    eligibility: "지원 가능",
    deadline: "D-16",
    deadlineDate: "~ 26.07.24 18:00",
    agency: "창업진흥원",
    target: "대학 특화 창업 지원 대상자",
    career: "예비창업자 및 초기창업기업",
  },
  {
    source: "기업마당",
    title: "2026년 창업성장기술개발사업 디딤돌 과제 공고",
    eligibility: "지원 가능",
    deadline: "D-21",
    deadlineDate: "~ 26.07.29 18:00",
    agency: "중소기업기술정보진흥원",
    target: "창업 7년 이하 중소기업",
    career: "창업기업",
  },
  {
    source: "K-Startup",
    title: "2026년 재도전성공패키지 모집 공고",
    eligibility: "지원 가능",
    deadline: "D-22",
    deadlineDate: "~ 26.07.30 18:00",
    agency: "창업진흥원",
    target: "재창업 및 재도전 창업기업",
    career: "재창업자",
  },
  {
    source: "기업마당",
    title: "2026년 소상공인 온라인 판로지원사업 공고",
    eligibility: "지원 가능",
    deadline: "D-27",
    deadlineDate: "~ 26.08.04 18:00",
    agency: "중소기업유통센터",
    target: "온라인 판로 확대 희망 소상공인",
    career: "소상공인",
  },
  {
    source: "K-Startup",
    title: "2026년 신사업창업사관학교 예비창업자 모집 공고",
    eligibility: "지원 가능",
    deadline: "D-28",
    deadlineDate: "~ 26.08.05 18:00",
    agency: "소상공인시장진흥공단",
    target: "혁신 아이디어 보유 예비창업자",
    career: "예비창업자",
  },
  {
    source: "기업마당",
    title: "2026년 중소기업 R&D 역량제고사업 공고",
    eligibility: "지원 가능",
    deadline: "D-33",
    deadlineDate: "~ 26.08.10 18:00",
    agency: "중소기업기술정보진흥원",
    target: "R&D 기획 역량 강화 희망 중소기업",
    career: "중소기업",
  },
  {
    source: "K-Startup",
    title: "2026년 글로벌창업사관학교 모집 공고",
    eligibility: "지원 가능",
    deadline: "D-35",
    deadlineDate: "~ 26.08.12 18:00",
    agency: "중소벤처기업진흥공단",
    target: "글로벌 진출 목표 창업기업",
    career: "창업 7년 이내 기업",
  },
  {
    source: "기업마당",
    title: "2026년 해외규격인증획득지원사업 참여기업 모집 공고",
    eligibility: "지원 가능",
    deadline: "D-40",
    deadlineDate: "~ 26.08.17 18:00",
    agency: "한국화학융합시험연구원",
    target: "해외 인증 취득 필요 중소기업",
    career: "중소기업",
  },
  {
    source: "K-Startup",
    title: "2026년 민관협력 오픈이노베이션 지원사업 공고",
    eligibility: "지원 가능",
    deadline: "D-43",
    deadlineDate: "~ 26.08.20 18:00",
    agency: "창업진흥원",
    target: "대기업 협업 희망 창업기업",
    career: "창업기업",
  },
  {
    source: "기업마당",
    title: "2026년 지역특화산업육성사업 지원계획 공고",
    eligibility: "지원 가능",
    deadline: "D-48",
    deadlineDate: "~ 26.08.25 18:00",
    agency: "중소벤처기업부",
    target: "지역 주력산업 분야 중소기업",
    career: "중소기업",
  },
  {
    source: "K-Startup",
    title: "2026년 아기유니콘 플러스 육성사업 공고",
    eligibility: "지원 가능",
    deadline: "D-57",
    deadlineDate: "~ 26.09.03 18:00",
    agency: "창업진흥원",
    target: "고성장 혁신 창업기업",
    career: "창업기업",
  },
  {
    source: "기업마당",
    title: "2026년 구매조건부신제품개발사업 공고",
    eligibility: "지원 가능",
    deadline: "D-60",
    deadlineDate: "~ 26.09.06 18:00",
    agency: "중소기업기술정보진흥원",
    target: "구매 수요처 확보 중소기업",
    career: "중소기업",
  },
];

const draftStoryProgramOverlays = [
  {
    title: "글로벌 기업 협업 프로그램",
    deadline: "D-1",
  },
  {
    title: "창업도약패키지",
    deadline: "D-7",
  },
  {
    title: "딥테크 청년창업사관학교",
    deadline: "D-15",
  },
  {
    title: "글로벌 창업사관학교",
    deadline: "D-10",
  },
  {
    title: "예비창업패키지",
    deadline: "D-18",
  },
  {
    title: "초격차 스타트업 1000+",
    deadline: "D-23",
  },
  {
    title: "민관협력 오픈이노베이션",
    deadline: "D-31",
  },
] as const;

function toBusinessPlanTitle(title: string) {
  return title
    .replace(/\s*-\s*오늘 마감$/u, "")
    .replace(/^(\d{4})년\s+(.+?)\s+예비창업자\s+모집 공고$/u, "$1년 $2 사업계획서")
    .replace(/^(\d{4})년\s+(.+?)\s+참여기업\s+모집 공고$/u, "$1년 $2 사업계획서")
    .replace(/^(\d{4})년\s+(.+?)\s+모집 공고$/u, "$1년 $2 사업계획서")
    .replace(/^(\d{4})년\s+(.+?)\s+지원계획 공고$/u, "$1년 $2 사업계획서")
    .replace(/^(\d{4})년\s+(.+?)\s+지원사업 공고$/u, "$1년 $2 사업계획서");
}

function isUrgentDeadline(deadline: string) {
  const daysLeft = deadline.match(/^D-(\d+)$/u)?.[1];

  return daysLeft !== undefined && Number(daysLeft) <= 7;
}

type DraftFlowSourceFilter = "전체" | "K-Startup" | "기업마당";
type DraftFlowMotionPhase = "scan" | "aim" | "click" | "chatZoom" | "editor";

const draftFlowSourceFilters = ["전체", "K-Startup", "기업마당"] satisfies DraftFlowSourceFilter[];
const draftFlowVisibleRows = 10;
// Keep the prior close-up transition available without using it in the default playback.
const draftFlowEnableChatFocusZoom = false;
const draftFlowMotionStart = draftFlowPrograms[0]!;
const draftFlowMotionTarget = draftFlowPrograms[1]!;
const draftFlowMotionSequence: Array<{
  phase: DraftFlowMotionPhase;
  source: DraftFlowSourceFilter;
  title: string;
  isEditorOpen: boolean;
  pointer: { x: number; y: number; isFollowing: boolean };
  duration: number;
}> = [
  {
    phase: "scan",
    source: "전체",
    title: draftFlowMotionStart.title,
    isEditorOpen: false,
    pointer: { x: 338, y: 60, isFollowing: true },
    duration: 1050,
  },
  {
    phase: "aim",
    source: "전체",
    title: draftFlowMotionTarget.title,
    isEditorOpen: false,
    pointer: { x: 238, y: 112, isFollowing: true },
    duration: 520,
  },
  {
    phase: "click",
    source: "전체",
    title: draftFlowMotionTarget.title,
    isEditorOpen: false,
    pointer: { x: 238, y: 112, isFollowing: true },
    duration: 420,
  },
  {
    phase: "editor",
    source: "전체",
    title: draftFlowMotionTarget.title,
    isEditorOpen: true,
    pointer: { x: 238, y: 112, isFollowing: false },
    duration: 1500,
  },
  ...(draftFlowEnableChatFocusZoom
    ? [
        {
          phase: "chatZoom" as const,
          source: "전체" as const,
          title: draftFlowMotionTarget.title,
          isEditorOpen: true,
          pointer: { x: 238, y: 112, isFollowing: false },
          duration: 4700,
        },
      ]
    : []),
  {
    phase: "editor",
    source: "전체",
    title: draftFlowMotionTarget.title,
    isEditorOpen: true,
    pointer: { x: 238, y: 112, isFollowing: false },
    duration: 7200,
  },
];

type StartHandler = (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
type LandingPageClientProps = {
  initialDraft?: boolean;
};

function youtubeEmbedSrc(id: string) {
  return `https://www.youtube.com/embed/${id}?rel=0&enablejsapi=1`;
}

function buildAppUrl() {
  const url = new URL(startPath);
  if (typeof window === "undefined") return url.toString();
  const params = new URLSearchParams(window.location.search);
  ["atTrackId", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((key) => {
    const value = params.get(key);
    if (value) url.searchParams.set(key, value);
  });
  return url.toString();
}

const draftMemoryChatMessages = [
  {
    role: "assistant",
    text: "2026 예비창업패키지 공고를 분석했어요. 사업 아이템을 한 문장으로 설명해주세요.",
  },
  {
    role: "user",
    text: "독스헌트는 공고별 문항과 평가 기준에 맞춰 사업계획서 초안을 만드는 AI 서비스입니다.",
  },
  {
    role: "assistant",
    text: "독스헌트는 지원사업 사업계획서 작성 AI로 정리할게요.",
  },
  {
    role: "assistant",
    text: "주 고객과 그들이 가장 불편해하는 순간을 알려주세요.",
  },
  {
    role: "user",
    text: "지원사업을 처음 준비하는 예비창업자와 초기 스타트업이 주 고객이에요.",
  },
  {
    role: "assistant",
    text: "이 고객이 사업계획서를 작성할 때 겪는 핵심 문제는 무엇인가요?",
  },
  {
    role: "user",
    text: "공고마다 양식과 평가 기준이 달라서 사업계획서를 매번 처음부터 써야 해요.",
  },
  {
    role: "assistant",
    text: "반복되는 양식 해석과 작성 부담이 핵심 문제군요.",
  },
  {
    role: "assistant",
    text: "독스헌트는 이 문제를 어떤 방식으로 해결하나요?",
  },
  {
    role: "user",
    text: "공고와 양식을 분석한 뒤 필요한 질문만 하고, 답변을 문항별 초안으로 정리해줘요.",
  },
  {
    role: "assistant",
    text: "공고 분석부터 맞춤 질문, 초안 생성, 보완 요청까지 한 흐름으로 제공하는 서비스네요.",
    extractIndex: 0,
  },
  {
    role: "assistant",
    text: "현재 제품의 시장 반응을 보여줄 수 있는 지표가 있나요?",
  },
  {
    role: "user",
    text: "가입자 2만 명, 유료 고객 800명이고 올해 매출은 1.8억 원입니다.",
  },
  {
    role: "assistant",
    text: "가입자 2만 명과 유료 고객 800명을 확보한 초기 검증 단계로 정리할게요.",
  },
  {
    role: "assistant",
    text: "현재 수익 모델은 어떻게 구성되어 있나요?",
  },
  {
    role: "user",
    text: "월 구독형 SaaS로 운영하고 있어요.",
  },
  {
    role: "assistant",
    text: "월 구독형 SaaS 수익 모델과 올해 매출 1.8억 원을 기록할게요.",
  },
  {
    role: "assistant",
    text: "올해 사업 목표와 다음 성장 계획은 무엇인가요?",
  },
  {
    role: "user",
    text: "올해 매출 목표는 3억 원이고, R&D 과제와 조달사업 문서까지 확장하려고 해요.",
  },
  {
    role: "assistant",
    text: "사업계획서 작성 AI에서 R&D·조달사업 문서까지 넓히는 성장 계획으로 정리했습니다.",
    extractIndex: 1,
  },
  {
    role: "assistant",
    text: "이제 이 정보로 예비창업패키지 사업계획서의 초안을 작성하겠습니다.",
    extractIndex: 2,
  },
] as const;

const draftMemoryUpdates = [
  "사업 아이템 정보 기억 완료",
  "핵심 고객 정보 기억 완료",
  "문제 정보 기억 완료",
  "솔루션 정보 기억 완료",
  "시장 정보 기억 완료",
  "경쟁사 정보 기억 완료",
  "수익 모델 정보 기억 완료",
  "핵심 성과 정보 기억 완료",
  "성장 계획 정보 기억 완료",
  "팀 구성 정보 기억 완료",
  "핵심 역량 정보 기억 완료",
  "사업 목표 정보 기억 완료",
] as const;

const draftActualAutoChatMessages = [
  {
    role: "assistant",
    paragraphs: [
      "「2026년 예비창업패키지」 사업계획서를 시작할게요.",
      "이전에 저장된 사업 메모리를 불러왔어요.",
      "공고와 양식을 기준으로 필요한 정보만 순서대로 확인할게요.",
      "1. 독스헌트가 누구의 어떤 문제를 해결하는 서비스인지 설명해주세요.",
    ],
  },
  {
    role: "user",
    text: "지원사업을 준비하는 예비창업자와 초기 스타트업이 공고와 양식에 맞는 사업계획서를 빠르게 작성하도록 돕는 AI 웹 서비스예요.",
  },
  {
    role: "assistant",
    paragraphs: ["좋아요.", "2. 현재 서비스는 어느 단계인가요?"],
  },
  {
    role: "user",
    text: "제품 개발을 완료했고, 공고문 분석과 문항별 초안 생성이 가능한 상태에서 초기 사용자와 사용성을 검증하고 있어요.",
  },
  {
    role: "assistant",
    paragraphs: ["확인했어요.", "3. 고객이 지원사업을 준비할 때 가장 불편한 순간은 무엇인가요?"],
  },
  {
    role: "user",
    text: "공고마다 평가 기준과 양식이 달라 요구사항을 해석하고 문서를 처음부터 쓰느라 며칠에서 몇 주를 쓰는 점이에요.",
  },
  {
    role: "assistant",
    paragraphs: ["문제의 맥락을 이해했어요.", "4. 사용자는 어떤 자료로 사업계획서 작성을 시작하나요?"],
  },
  {
    role: "user",
    text: "K-Startup과 기업마당 공고를 고르거나 공고문, 양식을 직접 올려요.",
  },
  {
    role: "assistant",
    paragraphs: ["좋습니다.", "5. 부족한 정보는 어떤 방식으로 확인하나요?"],
  },
  {
    role: "user",
    text: "기업 프로필과 기존 자료를 먼저 분석하고, 비어 있는 항목만 인터뷰 질문으로 받아요.",
  },
  {
    role: "assistant",
    paragraphs: ["이해했어요.", "6. 답변을 받은 뒤 초안은 어떤 방식으로 만들어지나요?"],
  },
  {
    role: "user",
    text: "답변을 공고 평가 관점에 맞게 정리해 한글 양식과 문항 구조에 맞춘 사업계획서 초안으로 작성해요.",
  },
  {
    role: "assistant",
    paragraphs: ["좋아요.", "7. 일반 생성형 AI나 컨설팅과 비교해 독스헌트의 강점은 무엇인가요?"],
  },
  {
    role: "user",
    text: "공고와 양식의 요구항목을 먼저 분석하고, 사업 메모리를 쌓아 다음 지원사업에도 반복해서 활용할 수 있어요.",
  },
  {
    role: "assistant",
    paragraphs: ["정리했어요.", "8. 초기 고객은 어떤 경로로 만날 계획인가요?"],
  },
  {
    role: "user",
    text: "K-Startup과 기업마당 검색 수요, SEO, SNS 광고, 창업 커뮤니티를 중심으로 예비창업자와 초기 스타트업을 만날 계획이에요.",
  },
  {
    role: "assistant",
    paragraphs: ["확인했어요.", "9. 협약기간에는 어떤 기능을 고도화할 계획인가요?"],
  },
  {
    role: "user",
    text: "기업과 아이템에 맞는 지원사업 추천, 카카오톡·이메일 알림, R&D와 조달사업 제안서 작성 기능을 확장할 거예요.",
  },
  {
    role: "assistant",
    paragraphs: ["마지막으로 확인할게요.", "10. 팀은 어떻게 구성되어 있나요?"],
  },
  {
    role: "user",
    text: "4년 동안 사업계획서와 AI 문서 자동화에 집중해온 진정성과 실행력, 역량 갖춘 팀이에요.",
  },
  {
    role: "assistant",
    paragraphs: [
      "답변을 일반현황, 창업아이템, 문제 인식, 실현 가능성, 성장전략, 팀 구성에 반영했어요.",
      "초안 준비도: 100%",
      "이 정보로 예비창업패키지 문항별 초안을 작성하겠습니다.",
    ],
  },
] as const;

type DraftActualChatPhase = {
  sentCount: number;
  pendingUserIndex: number | null;
};

type DraftActualDocumentPhase = "waiting" | "generating" | "complete";

const draftActualChatZoomInDelay = 460;
const draftActualAssistantMessageDelay = 105;
const draftActualUserTypingDelay = 70;
const draftActualUserMessageDelay = 135;
const draftActualDocumentGenerateDelay = 700;
const draftActualChatZoomOutDelay = 420;
const draftActualDocumentLoadingDuration = 2000;
const draftActualDocumentLoopPause = 900;

const initialDraftActualChatPhase: DraftActualChatPhase = {
  sentCount: 1,
  pendingUserIndex: null,
};

function DraftProofCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isTrackTransitioning, setIsTrackTransitioning] = useState(true);
  const [isInViewport, setIsInViewport] = useState(false);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const loopedProofCards = [draftProofCards[draftProofCards.length - 1]!, ...draftProofCards, draftProofCards[0]!];
  const visibleIndex = (activeIndex - 1 + draftProofCards.length) % draftProofCards.length;

  const moveSlide = useCallback((direction: -1 | 1) => {
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    setIsTrackTransitioning(true);
    setActiveIndex((index) => Math.min(Math.max(index + direction, 0), draftProofCards.length + 1));
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const observer = new IntersectionObserver(([entry]) => setIsInViewport(entry?.isIntersecting ?? false), { threshold: 0.45 });

    observer.observe(carousel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isAutoplayPaused || !isInViewport || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => moveSlide(1), draftProofAutoMs);
    return () => window.clearInterval(timer);
  }, [isAutoplayPaused, isInViewport, moveSlide]);

  const resetTrackPosition = (index: number) => {
    setIsTrackTransitioning(false);
    setActiveIndex(index);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsTrackTransitioning(true);
        isAnimatingRef.current = false;
      });
    });
  };

  const handleTrackTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.currentTarget !== event.target) return;

    if (activeIndex === 0) {
      resetTrackPosition(draftProofCards.length);
      return;
    }

    if (activeIndex === draftProofCards.length + 1) {
      resetTrackPosition(1);
      return;
    }

    isAnimatingRef.current = false;
  };

  return (
    <div
      ref={carouselRef}
      className="draft-proof-carousel"
      aria-roledescription="carousel"
      aria-label="독스헌트 대표 인터뷰"
      onPointerEnter={() => setIsAutoplayPaused(true)}
      onPointerLeave={() => setIsAutoplayPaused(false)}
      onFocusCapture={() => setIsAutoplayPaused(true)}
      onBlurCapture={() => setIsAutoplayPaused(false)}
    >
      <button className="draft-proof-arrow previous" type="button" aria-label="이전 인터뷰 보기" onClick={() => moveSlide(-1)}>
        <span aria-hidden="true">‹</span>
      </button>
      <div className="draft-proof-viewport">
        <div
          className="draft-proof-track"
          onTransitionEnd={handleTrackTransitionEnd}
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: isTrackTransitioning ? undefined : "none",
          }}
        >
          {loopedProofCards.map((card, index) => (
            <article className="draft-proof-card" key={`${card.image}-${index}`} aria-hidden={index !== activeIndex}>
              <picture>
                <source media="(max-width: 767px)" srcSet={card.mobileImage} />
                <img src={card.image} alt={card.alt} />
              </picture>
              <div className="draft-proof-content">
                <div className="draft-proof-copy">
                  <h3>{card.title}</h3>
                  <p className="draft-proof-quote">{card.quote}</p>
                  <p className="draft-proof-author">{card.author}</p>
                  <a
                    className="draft-proof-cta"
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={index === activeIndex ? 0 : -1}
                  >
                    인터뷰 보기
                    <span aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <button className="draft-proof-arrow next" type="button" aria-label="다음 인터뷰 보기" onClick={() => moveSlide(1)}>
        <span aria-hidden="true">›</span>
      </button>
      <div className="draft-proof-dots" aria-hidden="true">
        {draftProofCards.map((card, index) => (
          <span className={index === visibleIndex ? "is-active" : ""} key={card.image} />
        ))}
      </div>
    </div>
  );
}

function DraftMemoryDemo() {
  const initialChatCount = 8;
  const memoryVisibleLimit = 12;
  const memorySlideDuration = 640;
  const [visibleChatCount, setVisibleChatCount] = useState(initialChatCount);
  const [isCompactMemoryDemo, setIsCompactMemoryDemo] = useState(false);
  const [mobileMemoryChatCount, setMobileMemoryChatCount] = useState(8);
  const [memoryItems, setMemoryItems] = useState<Array<{ id: number; text: string }>>([]);
  const [nextMemoryItem, setNextMemoryItem] = useState<{ id: number; text: string } | null>(null);
  const [isMemoryRolling, setIsMemoryRolling] = useState(false);
  const [isMemoryResetting, setIsMemoryResetting] = useState(false);
  const [isMemoryTransferActive, setIsMemoryTransferActive] = useState(false);
  const memoryItemsRef = useRef<Array<{ id: number; text: string }>>([]);
  const memoryNextIndexRef = useRef(0);
  const isMemoryRollingRef = useRef(false);
  const visibleChatLimit = isCompactMemoryDemo ? 8 : 10;
  const visibleChatStart = Math.max(0, visibleChatCount - visibleChatLimit);
  const visibleChatMessages = isCompactMemoryDemo
    ? draftMemoryChatMessages.slice(5, 5 + mobileMemoryChatCount)
    : draftMemoryChatMessages.slice(visibleChatStart, visibleChatCount);
  const visibleMemoryItems = nextMemoryItem ? [...memoryItems, nextMemoryItem] : memoryItems;

  useEffect(() => {
    const syncCompactLayout = () => {
      const viewportWidth = window.innerWidth;

      setIsCompactMemoryDemo(viewportWidth <= 767);
      setMobileMemoryChatCount(viewportWidth >= 448 ? 12 : viewportWidth >= 440 ? 11 : viewportWidth >= 420 ? 9 : 8);
    };

    syncCompactLayout();
    window.addEventListener("resize", syncCompactLayout);

    return () => {
      window.removeEventListener("resize", syncCompactLayout);
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVisibleChatCount((count) => (count >= draftMemoryChatMessages.length ? initialChatCount : count + 1));
    }, 1550);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    let memoryInterval: number | undefined;
    let rollTimeout: number | undefined;
    let transferTimeout: number | undefined;
    let resetAnimationFrame: number | undefined;
    let finishResetAnimationFrame: number | undefined;

    const addMemoryItem = () => {
      if (isMemoryRollingRef.current) return;

      setIsMemoryTransferActive(true);
      if (transferTimeout) window.clearTimeout(transferTimeout);
      transferTimeout = window.setTimeout(() => setIsMemoryTransferActive(false), memorySlideDuration);

      const nextItem = {
        id: memoryNextIndexRef.current,
        text: draftMemoryUpdates[memoryNextIndexRef.current % draftMemoryUpdates.length]!,
      };

      memoryNextIndexRef.current += 1;

      if (memoryItemsRef.current.length < memoryVisibleLimit) {
        const nextItems = [...memoryItemsRef.current, nextItem];
        memoryItemsRef.current = nextItems;
        setMemoryItems(nextItems);
        return;
      }

      isMemoryRollingRef.current = true;
      setNextMemoryItem(nextItem);
      setIsMemoryRolling(true);

      rollTimeout = window.setTimeout(() => {
        const nextItems = [...memoryItemsRef.current.slice(1), nextItem];
        memoryItemsRef.current = nextItems;
        setMemoryItems(nextItems);
        setNextMemoryItem(null);
        setIsMemoryRolling(false);
        setIsMemoryResetting(true);

        resetAnimationFrame = window.requestAnimationFrame(() => {
          finishResetAnimationFrame = window.requestAnimationFrame(() => {
            setIsMemoryResetting(false);
            isMemoryRollingRef.current = false;
          });
        });
      }, memorySlideDuration);
    };

    const firstMemoryTimer = window.setTimeout(() => {
      addMemoryItem();
      memoryInterval = window.setInterval(addMemoryItem, 950);
    }, 550);

    return () => {
      window.clearTimeout(firstMemoryTimer);
      if (memoryInterval) window.clearInterval(memoryInterval);
      if (rollTimeout) window.clearTimeout(rollTimeout);
      if (transferTimeout) window.clearTimeout(transferTimeout);
      if (resetAnimationFrame) window.cancelAnimationFrame(resetAnimationFrame);
      if (finishResetAnimationFrame) window.cancelAnimationFrame(finishResetAnimationFrame);
    };
  }, []);

  return (
    <div
      className="draft-memory-demo draft-memory-chat-transfer draft-memory-chat-to-reference"
      aria-label="채팅에서 정리된 정보가 AI 메모리에 저장되는 예시"
    >
      <div className="draft-memory-card-copy">
        <h2 id="draft-refine-title">쓰면 쓸수록 정교해지는 AI</h2>
        <p>
          사업계획서를 쓸수록 AI 메모리에 아이템과 사업 정보가 쌓이고,
          <br className="draft-memory-mobile-break" /> 다음 사업계획서에 재활용됩니다.
        </p>
      </div>

      <section className="draft-memory-chat-stage" aria-label="AI 문서 채팅에서 정보가 정리되는 예시">
        <div className="draft-memory-chat-shell draft-actual-chat">
          <div className="draft-actual-chat-scroll draft-memory-chat-thread">
            <div className="draft-memory-chat-flow">
              {visibleChatMessages.map((message, index) => {
                const messageIndex = visibleChatStart + index;
                return message.role === "user" ? (
                  <div
                    className="draft-actual-user-message draft-memory-chat-row is-user"
                    key={`${message.role}-${messageIndex}-${message.text}`}
                    style={{ "--message-delay": `${index * 0.06}s` } as CSSProperties}
                  >
                    <div className="draft-actual-user-message-content">{message.text}</div>
                  </div>
                ) : (
                  <div
                    className={`draft-actual-assistant-message draft-memory-chat-row is-assistant${
                      "extractIndex" in message ? ` is-extract extract-${message.extractIndex + 1}` : ""
                    }`}
                    key={`${message.role}-${messageIndex}-${message.text}`}
                    style={
                      {
                        "--message-delay": `${index * 0.06}s`,
                        ...("extractIndex" in message ? { "--extract-delay": `${0.2 + message.extractIndex * 0.18}s` } : {}),
                      } as CSSProperties
                    }
                  >
                    <div className="draft-actual-assistant-message-content">
                      <p>{message.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div className={`draft-memory-transfer-stream${isMemoryTransferActive ? " is-transferring" : ""}`} aria-hidden="true">
        <span className="stream-line" />
        <span className="stream-transfer-pulse" />
        {draftMemoryUpdates.slice(0, 3).map((item, index) => (
          <span
            className={`stream-snippet snippet-${index + 1}`}
            key={item}
            style={{ "--snippet-delay": `${2.8 + index * 2.1}s` } as CSSProperties}
          >
            <span className="snippet-line is-strong" />
            <span className="snippet-line" />
          </span>
        ))}
      </div>

      <section className="draft-memory-reference-stage" aria-label="사업 메모리 카드 예시">
        <article className="draft-memory-reference-card">
          <header className="draft-memory-reference-header">
            <span className="draft-memory-reference-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M9 3.5v3.3" />
                <path d="M12 3.5v3.3" />
                <path d="M15 3.5v3.3" />
                <path d="M9 17.2v3.3" />
                <path d="M12 17.2v3.3" />
                <path d="M15 17.2v3.3" />
                <path d="M3.5 9h3.3" />
                <path d="M3.5 12h3.3" />
                <path d="M3.5 15h3.3" />
                <path d="M17.2 9h3.3" />
                <path d="M17.2 12h3.3" />
                <path d="M17.2 15h3.3" />
                <rect x="6.8" y="6.8" width="10.4" height="10.4" rx="2.4" />
                <rect x="10" y="10" width="4" height="4" rx="1" />
              </svg>
            </span>
            <strong>사업 메모리</strong>
            <span className="draft-memory-live-pill">자동 업데이트</span>
          </header>

          <div className="draft-memory-reference-body">
            <div className="draft-memory-list-viewport">
              <ul
                className={`draft-memory-plain-list${isMemoryRolling ? " is-rolling" : ""}${isMemoryResetting ? " is-resetting" : ""}`}
                aria-label="사업 메모리에 저장되는 핵심 정보"
              >
                {visibleMemoryItems.map((item, index) => (
                  <li
                    className={`is-saved${index === visibleMemoryItems.length - 1 && !isMemoryRolling && !isMemoryResetting ? " is-current" : ""}`}
                    key={item.id}
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

type DraftWorkflowPreviewType = (typeof draftWorkflowCards)[number]["preview"];

function ActualTamSamSomSvg() {
  return (
    <svg
      className="actual-tamsamsom-svg"
      width="1000"
      height="500"
      viewBox="0 0 1000 500"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="1000" height="500" fill="#f8fafc" />
      <circle cx="300" cy="250" r="200" fill="#dbeafe" stroke="#bfdbfe" strokeWidth="2" />
      <circle cx="300" cy="320" r="130" fill="#93c5fd" stroke="#60a5fa" strokeWidth="2" />
      <circle cx="300" cy="370" r="80" fill="#2563eb" stroke="#1d4ed8" strokeWidth="2" />

      <g stroke="#94a3b8" strokeWidth="2" strokeDasharray="6,4" fill="none">
        <line x1="460" y1="130" x2="580" y2="130" />
        <line x1="410" y1="250" x2="580" y2="250" />
        <line x1="380" y1="375" x2="580" y2="375" />
      </g>

      <text x="300" y="115" fontFamily="sans-serif" fontSize="28" fontWeight="900" fill="#2563eb" textAnchor="middle">
        TAM
      </text>
      <text x="300" y="145" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill="#2563eb" textAnchor="middle">
        10조 원
      </text>

      <text x="300" y="235" fontFamily="sans-serif" fontSize="24" fontWeight="900" fill="#1e3a8a" textAnchor="middle">
        SAM
      </text>
      <text x="300" y="265" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#1e3a8a" textAnchor="middle">
        2조 원
      </text>

      <text x="300" y="360" fontFamily="sans-serif" fontSize="22" fontWeight="900" fill="#ffffff" textAnchor="middle">
        SOM
      </text>
      <text x="300" y="390" fontFamily="sans-serif" fontSize="15" fontWeight="bold" fill="#ffffff" textAnchor="middle">
        1,500억 원
      </text>

      <g transform="translate(600, 110)">
        <rect x="0" y="-18" width="4" height="64" fill="#bfdbfe" rx="2" />
        <text x="16" y="0" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#1e293b">
          Total Addressable Market
        </text>
        <text x="16" y="24" fontFamily="sans-serif" fontSize="14" fill="#475569">
          국내 전체 B2B SaaS 솔루션 시장 규모
        </text>
        <text x="16" y="46" fontFamily="sans-serif" fontSize="13" fill="#64748b">
          가장 큰 범위의 잠재적 전체 시장을 의미함
        </text>
      </g>

      <g transform="translate(600, 230)">
        <rect x="0" y="-18" width="4" height="64" fill="#60a5fa" rx="2" />
        <text x="16" y="0" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#1e293b">
          Serviceable Available Market
        </text>
        <text x="16" y="24" fontFamily="sans-serif" fontSize="14" fill="#475569">
          국내 중소기업(SMB) 대상 업무 자동화 시장
        </text>
        <text x="16" y="46" fontFamily="sans-serif" fontSize="13" fill="#64748b">
          우리 비즈니스 모델로 서비스 가능한 유효 시장
        </text>
      </g>

      <g transform="translate(600, 355)">
        <rect x="0" y="-18" width="4" height="64" fill="#2563eb" rx="2" />
        <text x="16" y="0" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#1e293b">
          Serviceable Obtainable Market
        </text>
        <text x="16" y="24" fontFamily="sans-serif" fontSize="14" fill="#475569">
          출시 후 3년 내 확보 가능한 수도권 IT 중소기업
        </text>
        <text x="16" y="46" fontFamily="sans-serif" fontSize="13" fontWeight="bold" fill="#2563eb">
          핵심 1차 타겟 및 현실적인 초기 수익 확보 목표
        </text>
      </g>
    </svg>
  );
}

function ActualSupportFlowSvg() {
  return (
    <svg
      className="actual-support-flow-svg"
      width="1000"
      height="460"
      viewBox="0 0 1000 460"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id="actual-support-flow-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#0f172a" floodOpacity="0.08" />
        </filter>

        <marker id="actual-support-flow-arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10" fill="#2563eb" />
        </marker>
      </defs>

      <rect width="1000" height="460" fill="#f8fafc" />

      <g stroke="#2563eb" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 580 110 L 786 110" markerEnd="url(#actual-support-flow-arrow)" />
        <path d="M 790 160 L 584 160" markerEnd="url(#actual-support-flow-arrow)" />
        <path d="M 580 210 L 786 210" markerEnd="url(#actual-support-flow-arrow)" />

        <path d="M 210 135 L 416 135" markerEnd="url(#actual-support-flow-arrow)" />
        <path d="M 420 185 L 214 185" markerEnd="url(#actual-support-flow-arrow)" />

        <path d="M 130 240 L 130 350 Q 130 370 150 370 L 850 370 Q 870 370 870 350 L 870 245" markerEnd="url(#actual-support-flow-arrow)" />
      </g>

      <g
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif"
        textAnchor="middle"
        paintOrder="stroke"
        stroke="#f8fafc"
        strokeWidth="4"
        strokeLinejoin="round"
      >
        <text x="685" y="95" fontSize="13" fontWeight="bold" fill="#1e293b">
          ① AI 작성 환경·이용권 제공
        </text>
        <text x="685" y="145" fontSize="13" fontWeight="bold" fill="#1e293b">
          ② 직접 결제·사업 정보 입력
        </text>
        <text x="315" y="120" fontSize="13" fontWeight="bold" fill="#1e293b">
          ③ 기관 계약·지원 프로그램 운영
        </text>
        <text x="315" y="205" fontSize="13" fontWeight="bold" fill="#1e293b">
          ④ 참여 현황·성과 리포트 제공
        </text>
        <text x="685" y="230" fontSize="13" fontWeight="900" fill="#1e293b">
          ⑤ 맞춤 질문·초안·보완 가이드
        </text>
        <text x="500" y="394" fontSize="13" fontWeight="900" fill="#1e293b">
          ⑥ 주관기관 지원으로 창업자 이용 가능
        </text>
      </g>

      <g
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif"
        textAnchor="middle"
      >
        <g transform="translate(50, 80)" filter="url(#actual-support-flow-shadow)">
          <rect width="160" height="160" rx="16" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <text x="80" y="70" fontSize="20" fontWeight="900" fill="#334155">
            주관기관
          </text>
          <text x="80" y="90" fontSize="12" fontWeight="bold" fill="#64748b">
            (기관 도입·지원)
          </text>
          <rect x="30" y="110" width="100" height="4" rx="2" fill="#e2e8f0" />
        </g>

        <g transform="translate(420, 80)" filter="url(#actual-support-flow-shadow)">
          <rect width="160" height="160" rx="16" fill="#2563eb" stroke="#1d4ed8" strokeWidth="2" />
          <text x="80" y="70" fontSize="20" fontWeight="900" fill="#ffffff">
            DocsHunt
          </text>
          <text x="80" y="90" fontSize="12" fontWeight="bold" fill="#bfdbfe">
            (AI 작성 인프라)
          </text>
          <rect x="30" y="110" width="100" height="4" rx="2" fill="#60a5fa" />
        </g>

        <g transform="translate(790, 80)" filter="url(#actual-support-flow-shadow)">
          <rect width="160" height="160" rx="16" fill="#eff6ff" stroke="#93c5fd" strokeWidth="2" />
          <text x="80" y="66" fontSize="18" fontWeight="900" fill="#1e293b">
            스타트업
          </text>
          <text x="80" y="88" fontSize="18" fontWeight="900" fill="#1e293b">
            / 창업자
          </text>
          <text x="80" y="108" fontSize="12" fontWeight="bold" fill="#475569">
            (직접 구매·지원 이용)
          </text>
          <rect x="30" y="124" width="100" height="4" rx="2" fill="#bfdbfe" />
        </g>
      </g>
    </svg>
  );
}

function DraftWorkflowPreview({ type }: { type: DraftWorkflowPreviewType }) {
  if (type === "visual") {
    return (
      <div className="workflow-ui workflow-actual-ui workflow-visual-actual-ui" aria-hidden="true">
        <div className="actual-visual-stack">
          <div className="actual-visual-asset-card">
            <div className="actual-visual-asset-preview">
              <ActualTamSamSomSvg />
            </div>
          </div>
          <div className="actual-flow-diagram-card">
            <ActualSupportFlowSvg />
          </div>
        </div>
      </div>
    );
  }

  if (type === "research") {
    return (
      <div className="workflow-ui workflow-actual-ui workflow-research-actual-ui" aria-hidden="true">
        <div className="actual-research-stack">
          <article className="actual-document-canvas">
            <span>시장 분석</span>
            <h4>IDP 시장은 북미가 최대, 유럽이 빠르게 성장하며 미국·독일·영국·중국·일본이 주요 진출 후보로 제시됨</h4>
            <p>
              Research Nester의 Intelligent Document Processing Market 보고서는 글로벌 IDP 시장 규모가 2025년 30억 달러에서 2035년 547억
              달러로 성장하고, 2026~2035년 CAGR 33.4%를 기록할 것으로 전망합니다.
            </p>
            <p>독스헌트는 문서 집약 업무 자동화 수요가 크고 디지털 인프라 성숙도가 높은 시장부터 접근하는 것이 적합합니다.</p>
            <footer>출처: Research Nester</footer>
          </article>
          <article className="actual-document-canvas">
            <span>경쟁사 분석</span>
            <h4>Document AI 시장의 경쟁 축은 IDP·문서 워크플로 자동화·생성형 AI 문서 생성 솔루션으로 확장</h4>
            <p>
              Market.us의 Document AI Market 보고서는 Document AI 시장을 솔루션, 문서 워크플로 자동화, 생성형 문서 생성, ECM 및 정부 문서
              도구까지 구분합니다.
            </p>
            <p>
              기존 솔루션이 추출·분류·워크플로 자동화 중심인 만큼, 독스헌트는 HWPX/DOCX 원본 편집과 양식 보존을 차별화 축으로 제시하기
              적합합니다.
            </p>
            <footer>출처: Market.us</footer>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="workflow-ui workflow-actual-ui workflow-style-actual-ui" aria-hidden="true">
      <section className="actual-style-card">
        <header className="actual-style-head">
          <div>
            <h4>문서 스타일</h4>
            <p>설정한 스타일은 문서 작성 시 그대로 적용됩니다</p>
          </div>
          <i>×</i>
        </header>
        <div className="actual-style-content">
          <div className="actual-style-list">
            <span className="active">대제목</span>
            <span>소제목</span>
            <span>본문</span>
            <span>캡션</span>
          </div>
          <div className="actual-style-properties">
            <div className="actual-style-row">
              <label>
                <span>크기</span>
                <b>16pt</b>
              </label>
              <label>
                <span>글꼴</span>
                <b>HY견고딕</b>
              </label>
            </div>
            <div className="actual-style-row">
              <label>
                <span>줄간격</span>
                <b>160%</b>
              </label>
              <label>
                <span>글머리 기호</span>
                <b>없음</b>
              </label>
            </div>
            <div className="actual-style-row">
              <label>
                <span>문단 위 간격</span>
                <b>10pt</b>
              </label>
              <label>
                <span>문단 아래 간격</span>
                <b>6pt</b>
              </label>
            </div>
            <div className="actual-format-block">
              <span>서식</span>
              <i>B</i>
            </div>
            <span className="actual-preview-caption">미리보기</span>
            <div className="actual-preview-box">
              <strong>□ 대제목을 입력하세요</strong>
              <span>○ 부제목을 입력하세요</span>
              <small>- 본문 텍스트를 입력하세요</small>
              <small>※ 캡션을 입력하세요</small>
            </div>
            <div className="actual-style-footer">
              <span>기본값 초기화</span>
              <b>적용</b>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DraftFlowDemo() {
  return (
    <>
      <div className="draft-flow-mobile-only">
        <DraftFlowMobileDemo />
      </div>
      <div className="draft-flow-desktop-only">
        <DraftFlowDesktopDemo />
      </div>
    </>
  );
}

function DraftFlowMobileDemo() {
  const [playbackCycle, setPlaybackCycle] = useState(0);

  const handleDocumentPresentationComplete = useCallback(() => {
    setPlaybackCycle((currentCycle) => currentCycle + 1);
  }, []);

  return (
    <div className="draft-flow-demo is-mobile-flow is-editor-open">
      <div className="draft-flow-frame">
        <section className="draft-flow-editor-stage" aria-label="AI 채팅과 사업계획서 초안 UI" aria-hidden="true" inert>
          <DraftActualEditorDemo key={playbackCycle} isMobileOnly onDocumentPresentationComplete={handleDocumentPresentationComplete} />
        </section>
      </div>
    </div>
  );
}

function DraftFlowDesktopDemo() {
  const [isMotionFinished, setIsMotionFinished] = useState(false);
  const [motionStep, setMotionStep] = useState(0);
  const currentMotionStep = draftFlowMotionSequence[motionStep] ?? draftFlowMotionSequence[0]!;
  const motionPhase = currentMotionStep.phase;
  const activeSource = currentMotionStep.source;
  const selectedTitle = currentMotionStep.title;
  const isEditorOpen = isMotionFinished || currentMotionStep.isEditorOpen;
  const pointerCue = currentMotionStep.pointer;

  const filteredPrograms =
    activeSource === "전체" ? draftFlowPrograms : draftFlowPrograms.filter((program) => program.source === activeSource);
  const selectedProgram = draftFlowPrograms.find((program) => program.title === selectedTitle) ?? draftFlowPrograms[0]!;
  const selectedProgramInFilter = filteredPrograms.find((program) => program.title === selectedProgram.title);
  const visiblePrograms =
    selectedProgramInFilter && !filteredPrograms.slice(0, draftFlowVisibleRows).some((program) => program.title === selectedProgram.title)
      ? [
          selectedProgramInFilter,
          ...filteredPrograms.filter((program) => program.title !== selectedProgram.title).slice(0, draftFlowVisibleRows - 1),
        ]
      : filteredPrograms.slice(0, draftFlowVisibleRows);
  const emptyProgramRows = Array.from({ length: Math.max(draftFlowVisibleRows - visiblePrograms.length, 0) }, (_, index) => index);
  const selectedDocumentTitle = toBusinessPlanTitle(selectedProgram.title);
  const pointerCueStyle = {
    "--cursor-x": `${pointerCue.x}px`,
    "--cursor-y": `${pointerCue.y}px`,
  } as CSSProperties;
  const motionClassName = ` is-motion-playing motion-${isMotionFinished ? "editor" : motionPhase}${isMotionFinished ? " is-motion-finished" : ""}`;
  const handleDocumentComplete = useCallback(() => {
    setIsMotionFinished(true);
  }, []);

  const handleDocumentPresentationComplete = useCallback(() => {
    setIsMotionFinished(false);
    setMotionStep(0);
  }, []);

  useEffect(() => {
    if (isMotionFinished) return;

    const step = draftFlowMotionSequence[motionStep] ?? draftFlowMotionSequence[0]!;

    const timeoutId = window.setTimeout(() => {
      setMotionStep((currentStep) => (currentStep + 1) % draftFlowMotionSequence.length);
    }, step.duration);

    return () => window.clearTimeout(timeoutId);
  }, [isMotionFinished, motionStep]);

  return (
    <div
      className={`draft-flow-demo${isEditorOpen ? " is-editor-open" : ""}${motionClassName}`}
      aria-label="AI 문서 채팅과 사업계획서 초안 UI"
    >
      <div className="draft-flow-frame">
        {isEditorOpen ? (
          <section className="draft-flow-editor-stage" aria-label={`${selectedDocumentTitle} AI 채팅과 문서 뷰어`}>
            <DraftActualEditorDemo
              isMotionChatZoom={draftFlowEnableChatFocusZoom && !isMotionFinished && motionPhase === "chatZoom"}
              onDocumentComplete={handleDocumentComplete}
              onDocumentPresentationComplete={handleDocumentPresentationComplete}
            />
          </section>
        ) : (
          <section className="draft-flow-template-page" aria-labelledby="draft-flow-template-title">
            <div className="draft-flow-template-camera">
              <div className="draft-flow-template-topbar">
                <div className="draft-flow-template-header">
                  <h3 id="draft-flow-template-title">지원사업</h3>
                  <p>지원사업 공고를 탐색하고 사업계획서를 작성해요.</p>
                </div>

                <div className="draft-flow-template-toolbar">
                  <button className="draft-flow-template-filter-button" type="button">
                    맞춤 추천 필터
                  </button>
                  <div className="draft-flow-template-filter-bar" aria-label="지원사업 필터">
                    {draftFlowSourceFilters.map((source) => (
                      <button
                        className={activeSource === source ? "is-active" : ""}
                        type="button"
                        key={source}
                        aria-pressed={activeSource === source}
                        tabIndex={-1}
                      >
                        {source}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="draft-flow-template-table" role="table" aria-label="지원사업 목록">
                <div
                  className={`draft-flow-pointer-cue${pointerCue.isFollowing ? " is-following" : ""}`}
                  style={pointerCueStyle}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 52 62" focusable="false">
                    <path d="M6 4L45 34L27 38L18 57L6 4Z" />
                  </svg>
                </div>
                <div className="draft-flow-template-table-head" role="row">
                  <span role="columnheader">사업명</span>
                  <span role="columnheader">신청 자격</span>
                  <span role="columnheader">마감순</span>
                  <span role="columnheader">주관기관</span>
                  <span role="columnheader" aria-label="선택" />
                </div>

                {visiblePrograms.map((program) => (
                  <button
                    className={program.title === selectedProgram.title ? "draft-flow-template-row is-selected" : "draft-flow-template-row"}
                    type="button"
                    key={program.title}
                    aria-label={`${program.title} 선택 후 사업계획서 작성 화면 열기`}
                    aria-pressed={program.title === selectedProgram.title}
                    tabIndex={-1}
                  >
                    <strong>
                      <small>{program.source}</small>
                      {program.title}
                    </strong>
                    <em className={program.eligibility === "확인 필요" ? "needs-check" : ""}>{program.eligibility}</em>
                    <b
                      className={[
                        program.deadline.startsWith("D-") ? "" : "is-plain",
                        isUrgentDeadline(program.deadline) ? "is-urgent" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {program.deadline}
                    </b>
                    <i>{program.agency}</i>
                    <span className="draft-flow-row-action" aria-hidden="true">
                      <svg viewBox="0 0 24 24" focusable="false">
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </span>
                  </button>
                ))}

                {emptyProgramRows.map((index) => (
                  <div className="draft-flow-template-row is-empty" role="row" aria-hidden="true" key={`empty-program-${index}`}>
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function DraftActualEditorDemo({
  isMotionChatZoom = false,
  isMobileOnly = false,
  onDocumentComplete,
  onDocumentPresentationComplete,
}: {
  isMotionChatZoom?: boolean;
  isMobileOnly?: boolean;
  onDocumentComplete?: () => void;
  onDocumentPresentationComplete?: () => void;
}) {
  const [chatPhase, setChatPhase] = useState<DraftActualChatPhase>(initialDraftActualChatPhase);
  const [isChatPlaybackReady, setIsChatPlaybackReady] = useState(false);
  const hasSeenChatZoomRef = useRef(false);
  const [isDocumentGenerating, setIsDocumentGenerating] = useState(false);
  const [isDocumentComplete, setIsDocumentComplete] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);
  const mobileChatScrollRef = useRef<HTMLDivElement>(null);

  const handleDocumentPresentationComplete = useCallback(() => {
    onDocumentPresentationComplete?.();
  }, [onDocumentPresentationComplete]);

  useEffect(() => {
    if (isMotionChatZoom) {
      hasSeenChatZoomRef.current = true;
    }
  }, [isMotionChatZoom]);

  useEffect(() => {
    if (isChatPlaybackReady) return;

    const timeoutId = window.setTimeout(
      () => {
        setIsChatPlaybackReady(true);
      },
      isMotionChatZoom ? draftActualChatZoomInDelay : 0,
    );

    return () => window.clearTimeout(timeoutId);
  }, [isChatPlaybackReady, isMotionChatZoom]);

  useEffect(() => {
    if (!isChatPlaybackReady || chatPhase.sentCount >= draftActualAutoChatMessages.length) return;

    const nextMessage = draftActualAutoChatMessages[chatPhase.sentCount];
    const delay =
      chatPhase.pendingUserIndex !== null
        ? draftActualUserMessageDelay
        : nextMessage?.role === "user"
          ? draftActualUserTypingDelay
          : draftActualAssistantMessageDelay;

    const timeoutId = window.setTimeout(() => {
      setChatPhase((phase) => {
        if (phase.pendingUserIndex !== null) {
          return {
            sentCount: phase.pendingUserIndex + 1,
            pendingUserIndex: null,
          };
        }

        const nextMessage = draftActualAutoChatMessages[phase.sentCount];

        if (!nextMessage) {
          return phase;
        }

        if (nextMessage.role === "user") {
          return {
            sentCount: phase.sentCount,
            pendingUserIndex: phase.sentCount,
          };
        }

        return {
          sentCount: phase.sentCount + 1,
          pendingUserIndex: null,
        };
      });
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [chatPhase.pendingUserIndex, chatPhase.sentCount, isChatPlaybackReady]);

  useLayoutEffect(() => {
    const scrollToLatestMessage = () => {
      [chatScrollRef.current, mobileChatScrollRef.current].forEach((chatScroll) => {
        if (chatScroll) {
          chatScroll.scrollTo({
            top: Math.max(chatScroll.scrollHeight - chatScroll.clientHeight, 0),
            behavior: "smooth",
          });
        }
      });
    };

    let settleFrameId: number | undefined;
    const frameId = window.requestAnimationFrame(() => {
      scrollToLatestMessage();
      settleFrameId = window.requestAnimationFrame(scrollToLatestMessage);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      if (settleFrameId !== undefined) {
        window.cancelAnimationFrame(settleFrameId);
      }
    };
  }, [chatPhase.sentCount]);

  const isFinalChatMessageVisible = chatPhase.sentCount >= draftActualAutoChatMessages.length;
  const documentPhase: DraftActualDocumentPhase = isDocumentComplete ? "complete" : isDocumentGenerating ? "generating" : "waiting";

  useEffect(() => {
    if (!isFinalChatMessageVisible || isMotionChatZoom || isDocumentGenerating || isDocumentComplete) return;

    const timeoutId = window.setTimeout(
      () => {
        setIsDocumentGenerating(true);
      },
      hasSeenChatZoomRef.current ? draftActualChatZoomOutDelay : draftActualDocumentGenerateDelay,
    );

    return () => window.clearTimeout(timeoutId);
  }, [isDocumentComplete, isDocumentGenerating, isFinalChatMessageVisible, isMotionChatZoom]);

  useEffect(() => {
    if (!isDocumentGenerating || isDocumentComplete) return;

    const timeoutId = window.setTimeout(() => {
      setIsDocumentComplete(true);
      onDocumentComplete?.();
    }, draftActualDocumentLoadingDuration);

    return () => window.clearTimeout(timeoutId);
  }, [isDocumentComplete, isDocumentGenerating, onDocumentComplete]);

  return (
    <div
      className={`draft-actual-editor-demo${isMotionChatZoom ? " is-chat-motion-focus" : ""}`}
      aria-label="독스헌트 실제 AI 문서 채팅과 사업계획서 뷰어 UI"
    >
      <div className={`draft-actual-mobile-demo is-${documentPhase}`} aria-hidden={isMobileOnly ? undefined : true}>
        {documentPhase === "waiting" ? (
          <section className="draft-actual-chat" aria-label="AI 문서 채팅">
            <div className="draft-actual-chat-scroll" ref={mobileChatScrollRef}>
              {draftActualAutoChatMessages.slice(0, chatPhase.sentCount).map((message, index) => (
                <div className={`draft-actual-${message.role}-message`} key={`mobile-${message.role}-${index}`}>
                  {message.role === "user" ? (
                    <div className="draft-actual-user-message-content">{message.text}</div>
                  ) : (
                    <div className="draft-actual-assistant-message-content">
                      {message.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section className="draft-actual-document" aria-label="사업계획서 문서 미리보기">
            <DraftActualDocumentViewer
              phase={documentPhase}
              {...(isMobileOnly ? { onAutoScrollComplete: handleDocumentPresentationComplete } : {})}
            />
          </section>
        )}
      </div>

      <div className="draft-actual-main">
        <section className="draft-actual-chat" aria-label="AI 문서 채팅">
          <div className="draft-actual-chat-scroll" ref={chatScrollRef}>
            {draftActualAutoChatMessages.slice(0, chatPhase.sentCount).map((message, index) => (
              <div className={`draft-actual-${message.role}-message`} key={`${message.role}-${index}`}>
                {message.role === "user" ? (
                  <div className="draft-actual-user-message-content">{message.text}</div>
                ) : (
                  <div className="draft-actual-assistant-message-content">
                    {message.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="draft-actual-resize-handle" aria-hidden="true" />

        <section className="draft-actual-document" aria-label="사업계획서 문서 미리보기">
          <DraftActualDocumentViewer
            phase={documentPhase}
            {...(!isMobileOnly ? { onAutoScrollComplete: handleDocumentPresentationComplete } : {})}
          />
        </section>
      </div>
    </div>
  );
}

function DraftActualDocumentViewer({
  phase,
  compact = false,
  onAutoScrollComplete,
}: {
  phase: DraftActualDocumentPhase;
  compact?: boolean;
  onAutoScrollComplete?: () => void;
}) {
  const documentScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const documentScroll = documentScrollRef.current;

    if (phase !== "complete" || !documentScroll) return;

    let animationFrameId = 0;
    let completionTimeoutId: number | undefined;
    let startTime = 0;
    let hasUserTakenOver = false;
    let removeInteractionListeners = () => {};

    const startDelay = window.setTimeout(() => {
      const maximumScroll = documentScroll.scrollHeight - documentScroll.clientHeight;

      if (maximumScroll <= 0) return;

      documentScroll.scrollTop = 0;

      const duration = Math.min(16000, Math.max(9000, maximumScroll * 0.9));

      const stopAutoScroll = () => {
        hasUserTakenOver = true;
        window.cancelAnimationFrame(animationFrameId);
      };

      const scrollDocument = (timestamp: number) => {
        if (hasUserTakenOver) return;

        if (!startTime) startTime = timestamp;

        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        documentScroll.scrollTop = maximumScroll * progress;

        if (progress < 1) {
          animationFrameId = window.requestAnimationFrame(scrollDocument);
        } else if (onAutoScrollComplete) {
          completionTimeoutId = window.setTimeout(onAutoScrollComplete, draftActualDocumentLoopPause);
        }
      };

      documentScroll.addEventListener("wheel", stopAutoScroll, { passive: true, once: true });
      documentScroll.addEventListener("touchstart", stopAutoScroll, { passive: true, once: true });
      documentScroll.addEventListener("pointerdown", stopAutoScroll, { passive: true, once: true });
      documentScroll.addEventListener("keydown", stopAutoScroll, { once: true });
      removeInteractionListeners = () => {
        documentScroll.removeEventListener("wheel", stopAutoScroll);
        documentScroll.removeEventListener("touchstart", stopAutoScroll);
        documentScroll.removeEventListener("pointerdown", stopAutoScroll);
        documentScroll.removeEventListener("keydown", stopAutoScroll);
      };
      animationFrameId = window.requestAnimationFrame(scrollDocument);
    }, 700);

    return () => {
      window.clearTimeout(startDelay);
      if (completionTimeoutId !== undefined) {
        window.clearTimeout(completionTimeoutId);
      }
      window.cancelAnimationFrame(animationFrameId);
      removeInteractionListeners();
    };
  }, [onAutoScrollComplete, phase]);

  if (phase === "generating") {
    return (
      <div className={`draft-actual-document-status is-generating${compact ? " is-compact" : ""}`}>
        <div className="draft-actual-document-status-card">
          <span className="draft-actual-document-spinner" aria-hidden="true" />
          <strong>문항별 초안을 작성하고 있어요</strong>
          <p>공고 양식에 맞춰 사업계획서를 구성하는 중입니다.</p>
        </div>
      </div>
    );
  }

  const pages = phase === "complete" ? draftActualDocumentPages : draftActualTemplateDocumentPages;
  const pageLabel = phase === "complete" ? "사업계획서" : "예비창업패키지 양식";

  return (
    <div className="draft-actual-document-content" ref={documentScrollRef} tabIndex={0}>
      <div className="draft-actual-page-stack" aria-label={`${pageLabel} 페이지 목록`}>
        {pages.map((page, index) => (
          <article className="draft-actual-paper" aria-label={`${pageLabel} ${index + 1}페이지`} key={page.src}>
            <img src={page.src} alt={page.alt} loading="eager" />
            <span className="draft-actual-paper-page" aria-hidden="true">
              {index + 1} / {pages.length}
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}

type HeroWorkflowSlide = (typeof heroWorkflowSlides)[number];

function HeroWorkflowCursor() {
  return (
    <svg className="hero-workflow-cursor" viewBox="0 0 58 72" aria-hidden="true" focusable="false">
      <path d="M6 5L52 37L34 40L47 64L36 70L23 45L9 58Z" />
    </svg>
  );
}

export function HeroMiniServiceFlowSvg() {
  return (
    <svg className="hero-complete-doc-visual is-flow" viewBox="0 0 1040 260" aria-hidden="true" focusable="false">
      <defs>
        <filter id="hero-service-flow-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#0f172a" floodOpacity="0.08" />
        </filter>
        <linearGradient id="hero-service-flow-card-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f8fafc" />
        </linearGradient>
        <linearGradient id="hero-service-flow-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <rect width="1040" height="260" rx="20" fill="#f1f5f9" />
      <g stroke="url(#hero-service-flow-line)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M235 130 L285 130 M275 120 L285 130 L275 140" />
        <path d="M495 130 L545 130 M535 120 L545 130 L535 140" />
        <path d="M755 130 L805 130 M795 120 L805 130 L795 140" />
      </g>
      {[
        { x: 40, title: "1. 양식 선택", sub1: "지원사업 선택", sub2: "제출 양식 확인", fill: "#eff6ff" },
        { x: 300, title: "2. AI 채팅", sub1: "핵심 정보 입력", sub2: "부족 항목 질문", fill: "#dbeafe" },
        { x: 560, title: "3. 자동 작성", sub1: "문단 및 표 생성", sub2: "양식 순서 반영", fill: "#bfdbfe" },
        { x: 820, title: "4. 문서 완성", sub1: "검토 후 제출", sub2: "HWPX/DOCX", fill: "#2563eb", active: true },
      ].map((item, index) => (
        <g transform={`translate(${item.x}, 55)`} key={item.title}>
          <rect
            width="180"
            height="150"
            rx="16"
            fill="url(#hero-service-flow-card-bg)"
            stroke={item.active ? "#2563eb" : undefined}
            strokeWidth={item.active ? "2" : undefined}
            filter="url(#hero-service-flow-shadow)"
          />
          <circle cx="90" cy="45" r="22" fill={item.fill} />
          {index === 0 ? (
            <>
              <circle cx="86" cy="41" r="8" stroke="#2563eb" strokeWidth="2.5" fill="none" />
              <line x1="92" y1="47" x2="98" y2="53" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
            </>
          ) : index === 1 ? (
            <>
              <rect x="75" y="35" width="30" height="20" rx="5" stroke="#2563eb" strokeWidth="2.5" fill="none" />
              <path d="M82 56 L78 64 L92 56" fill="#2563eb" opacity="0.22" />
            </>
          ) : index === 2 ? (
            <>
              <rect x="78" y="36" width="24" height="16" rx="3" stroke="#2563eb" strokeWidth="2.5" fill="none" />
              <line x1="78" y1="41" x2="102" y2="41" stroke="#2563eb" strokeWidth="2.5" />
              <rect x="82" y="46" width="6" height="3" fill="#2563eb" rx="1" />
            </>
          ) : (
            <path d="M80 45 L86 51 L100 37" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          )}
          <text x="90" y="95" fontFamily="sans-serif" fontSize="16" fontWeight="900" fill="#2563eb" textAnchor="middle">
            {item.title}
          </text>
          <text x="90" y="118" fontFamily="sans-serif" fontSize="12" fill="#64748b" textAnchor="middle">
            {item.sub1}
          </text>
          <text x="90" y="136" fontFamily="sans-serif" fontSize="12" fill="#64748b" textAnchor="middle">
            {item.sub2}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function HeroMiniTamSomSvg() {
  return (
    <svg className="hero-complete-doc-visual is-tamsom" viewBox="0 0 1000 500" aria-hidden="true" focusable="false">
      <rect width="1000" height="500" fill="#f8fafc" />
      <circle cx="300" cy="250" r="200" fill="#dbeafe" stroke="#bfdbfe" strokeWidth="2" />
      <circle cx="300" cy="320" r="130" fill="#93c5fd" stroke="#60a5fa" strokeWidth="2" />
      <circle cx="300" cy="370" r="80" fill="#2563eb" stroke="#1d4ed8" strokeWidth="2" />
      <g stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 4" fill="none">
        <line x1="460" y1="130" x2="580" y2="130" />
        <line x1="410" y1="250" x2="580" y2="250" />
        <line x1="380" y1="375" x2="580" y2="375" />
      </g>
      <text x="300" y="115" fontFamily="sans-serif" fontSize="28" fontWeight="900" fill="#2563eb" textAnchor="middle">
        TAM
      </text>
      <text x="300" y="145" fontFamily="sans-serif" fontSize="18" fontWeight="700" fill="#2563eb" textAnchor="middle">
        10조 원
      </text>
      <text x="300" y="235" fontFamily="sans-serif" fontSize="24" fontWeight="900" fill="#1e3a8a" textAnchor="middle">
        SAM
      </text>
      <text x="300" y="265" fontFamily="sans-serif" fontSize="16" fontWeight="700" fill="#1e3a8a" textAnchor="middle">
        2조 원
      </text>
      <text x="300" y="360" fontFamily="sans-serif" fontSize="22" fontWeight="900" fill="#ffffff" textAnchor="middle">
        SOM
      </text>
      <text x="300" y="390" fontFamily="sans-serif" fontSize="15" fontWeight="700" fill="#ffffff" textAnchor="middle">
        1,500억 원
      </text>
      {[
        { y: 110, color: "#bfdbfe", title: "Total Addressable Market", desc: "국내 전체 B2B SaaS 솔루션 시장 규모" },
        { y: 230, color: "#60a5fa", title: "Serviceable Available Market", desc: "국내 중소기업 대상 업무 자동화 시장" },
        { y: 355, color: "#2563eb", title: "Serviceable Obtainable Market", desc: "출시 후 3년 내 확보 가능한 고객군" },
      ].map((item) => (
        <g transform={`translate(600, ${item.y})`} key={item.title}>
          <rect x="0" y="-18" width="4" height="64" fill={item.color} rx="2" />
          <text x="16" y="0" fontFamily="sans-serif" fontSize="16" fontWeight="700" fill="#1e293b">
            {item.title}
          </text>
          <text x="16" y="24" fontFamily="sans-serif" fontSize="14" fill="#475569">
            {item.desc}
          </text>
          <text x="16" y="46" fontFamily="sans-serif" fontSize="13" fill="#64748b">
            사업계획서 시장성 근거로 자동 정리
          </text>
        </g>
      ))}
    </svg>
  );
}

export function HeroMiniCompetitorSvg() {
  return (
    <svg className="hero-complete-doc-visual is-competitor" viewBox="0 0 1000 500" aria-hidden="true" focusable="false">
      <defs>
        <filter id="hero-competitor-shadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#0f172a" floodOpacity="0.05" />
        </filter>
      </defs>
      <rect width="1000" height="500" fill="#ffffff" />
      <text x="50" y="50" fontFamily="sans-serif" fontSize="22" fontWeight="900" fill="#1e293b">
        핵심 경쟁력 비교표
      </text>
      <text x="50" y="75" fontFamily="sans-serif" fontSize="14" fill="#64748b">
        경쟁사 대비 기능 및 가격 우위 확보
      </text>
      <rect x="50" y="160" width="900" height="70" fill="#f8fafc" rx="8" />
      <rect x="50" y="300" width="900" height="70" fill="#f8fafc" rx="8" />
      <rect
        x="280"
        y="90"
        width="220"
        height="380"
        fill="#eff6ff"
        stroke="#3b82f6"
        strokeWidth="3"
        rx="12"
        filter="url(#hero-competitor-shadow)"
      />
      <rect x="350" y="78" width="80" height="24" fill="#3b82f6" rx="12" />
      <text x="390" y="94" fontFamily="sans-serif" fontSize="12" fontWeight="700" fill="#ffffff" textAnchor="middle">
        OURS
      </text>
      <g fontFamily="sans-serif" fontSize="16" fontWeight="700" fill="#475569" textAnchor="middle">
        <text x="165" y="135">
          비교 항목
        </text>
        <text x="390" y="135" fill="#1d4ed8" fontSize="18" fontWeight="900">
          우리 솔루션
        </text>
        <text x="610" y="135">
          경쟁사 A
        </text>
        <text x="760" y="135">
          경쟁사 B
        </text>
        <text x="910" y="135">
          경쟁사 C
        </text>
      </g>
      <line x1="50" y1="150" x2="950" y2="150" stroke="#e2e8f0" strokeWidth="2" />
      {[
        { y: 200, label: "100% 업무 자동화", ours: "check", a: "cross", b: "partial", c: "cross" },
        { y: 270, label: "실시간 데이터 연동", ours: "check", a: "cross", b: "cross", c: "check" },
        { y: 340, label: "시스템 구축 기간", ours: "즉시 사용", a: "3개월", b: "1개월", c: "6개월" },
        { y: 410, label: "도입 비용", ours: "월 3만 원", a: "수천만 원", b: "월 50만 원", c: "라이선스" },
      ].map((row) => (
        <g key={row.label}>
          <text x="80" y={row.y} fontFamily="sans-serif" fontSize="15" fontWeight="700" fill="#1e293b">
            {row.label}
          </text>
          {typeof row.ours === "string" && row.ours !== "check" ? (
            <>
              <text x="390" y={row.y + 2} fontFamily="sans-serif" fontSize="16" fontWeight="900" fill="#1d4ed8" textAnchor="middle">
                {row.ours}
              </text>
              <text x="610" y={row.y + 2} fontFamily="sans-serif" fontSize="14" fill="#64748b" textAnchor="middle">
                {row.a}
              </text>
              <text x="760" y={row.y + 2} fontFamily="sans-serif" fontSize="14" fill="#64748b" textAnchor="middle">
                {row.b}
              </text>
              <text x="910" y={row.y + 2} fontFamily="sans-serif" fontSize="14" fill="#64748b" textAnchor="middle">
                {row.c}
              </text>
            </>
          ) : (
            <>
              <HeroMiniStatusIcon type="check" x={390} y={row.y - 5} />
              <HeroMiniStatusIcon type={row.a as "check" | "cross" | "partial"} x={610} y={row.y - 5} />
              <HeroMiniStatusIcon type={row.b as "check" | "cross" | "partial"} x={760} y={row.y - 5} />
              <HeroMiniStatusIcon type={row.c as "check" | "cross" | "partial"} x={910} y={row.y - 5} />
            </>
          )}
        </g>
      ))}
      <line x1="50" y1="450" x2="950" y2="450" stroke="#e2e8f0" strokeWidth="2" />
    </svg>
  );
}

function HeroMiniStatusIcon({ type, x, y }: { type: "check" | "cross" | "partial"; x: number; y: number }) {
  if (type === "check") {
    return (
      <g transform={`translate(${x}, ${y})`}>
        <circle cx="0" cy="0" r="14" fill="#dcfce7" />
        <path d="M-5 1 L-1 5 L6 -4" stroke="#16a34a" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    );
  }

  if (type === "partial") {
    return (
      <g transform={`translate(${x}, ${y})`}>
        <circle cx="0" cy="0" r="14" fill="#fef08a" />
        <path d="M-5 0 L5 0" stroke="#ca8a04" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
    );
  }

  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle cx="0" cy="0" r="14" fill="#f1f5f9" />
      <path d="M-4 -4 L4 4 M4 -4 L-4 4" stroke="#94a3b8" strokeWidth="3" fill="none" strokeLinecap="round" />
    </g>
  );
}

export function HeroMiniRoadmapSvg() {
  return (
    <svg className="hero-complete-doc-visual is-roadmap" viewBox="0 0 1000 520" aria-hidden="true" focusable="false">
      <rect width="1000" height="520" fill="#ffffff" rx="10" />
      <rect x="50" y="30" width="900" height="60" rx="15" fill="#f1f5f9" />
      <line x1="50" y1="90" x2="950" y2="90" stroke="#e2e8f0" strokeWidth="1" />
      <g fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#475569" textAnchor="middle">
        <text x="175" y="67">
          추진 과업
        </text>
        {["07", "08", "09", "10", "11", "12", "01", "02"].map((month, index) => (
          <text x={335 + index * 80} y="67" key={month}>
            {month}
          </text>
        ))}
      </g>
      <g stroke="#f1f5f9" strokeWidth="1">
        {[300, 380, 460, 540, 620, 700, 780, 860].map((x) => (
          <line x1={x} y1="90" x2={x} y2="480" key={x} />
        ))}
        {[170, 230, 290, 350, 410].map((y) => (
          <line x1="50" y1={y} x2="950" y2={y} key={y} />
        ))}
      </g>
      <g fontFamily="sans-serif" fontSize="14" fontWeight="600" fill="#1e293b">
        {["1. 플랫폼 기획 및 설계", "2. MVP 개발", "3. 파트너 계약", "4. 시범 운영", "5. 마케팅 및 홍보", "6. 성과분석"].map(
          (label, index) => (
            <text x="70" y={145 + index * 60} key={label}>
              {label}
            </text>
          ),
        )}
      </g>
      <g fontFamily="sans-serif" fontSize="11" fontWeight="700" textAnchor="middle">
        {[
          { x: 305, y: 125, w: 70, label: "1M", fill: "#2563eb", text: "#ffffff" },
          { x: 385, y: 185, w: 230, label: "3M", fill: "#2563eb", text: "#ffffff" },
          { x: 465, y: 245, w: 70, label: "1M", fill: "#2563eb", text: "#ffffff" },
          { x: 625, y: 305, w: 230, label: "3M", fill: "#2563eb", text: "#ffffff" },
          { x: 545, y: 365, w: 310, label: "4M", fill: "#60a5fa", text: "#1e293b" },
          { x: 865, y: 425, w: 70, label: "1M", fill: "#93c5fd", text: "#1e293b" },
        ].map((bar) => (
          <g key={`${bar.x}-${bar.y}`}>
            <rect x={bar.x} y={bar.y} width={bar.w} height="34" rx="17" fill={bar.fill} />
            <text x={bar.x + bar.w / 2} y={bar.y + 21} fill={bar.text}>
              {bar.label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

function HeroWorkflowPreview({
  onProgramSelect,
  preview,
}: {
  onProgramSelect?: (() => void) | undefined;
  preview: HeroWorkflowSlide["preview"];
}) {
  if (preview === "program") {
    return (
      <div className="hero-program-preview">
        {heroProgramRows.map((program, index) =>
          index === 0 ? (
            <button
              aria-label={`${program.title} 선택하고 AI 채팅 단계 보기`}
              className="hero-program-row is-selected"
              key={program.title}
              onClick={onProgramSelect}
              type="button"
            >
              <span>{program.title}</span>
              <strong className={"urgent" in program && program.urgent ? "is-urgent" : ""}>{program.dday}</strong>
            </button>
          ) : (
            <div aria-hidden="true" className={`hero-program-row hero-program-row-${index}`} key={program.title}>
              <span>{program.title}</span>
              <strong className={"urgent" in program && program.urgent ? "is-urgent" : ""}>{program.dday}</strong>
            </div>
          ),
        )}
        <HeroWorkflowCursor />
      </div>
    );
  }

  if (preview === "chat") {
    return (
      <div className="hero-chat-preview" aria-hidden="true">
        <span className="hero-ai-chat-glow" />
        <div className="hero-ai-chat-window hero-ai-chat-stream-window">
          <div className="hero-ai-chat-body">
            <div className="hero-ai-message hero-ai-message-assistant hero-ai-stream-question hero-ai-stream-question-1">
              <p>이번 공고에서 강조할 사업 아이템은 무엇인가요?</p>
            </div>
            <div className="hero-ai-message hero-ai-message-user hero-ai-stream-reply hero-ai-stream-reply-1">
              <span>
                사업계획서 작성 AI예요.
                <br />
                예비창업자가 고객입니다.
              </span>
            </div>
            <div className="hero-ai-message hero-ai-message-assistant hero-ai-stream-question hero-ai-stream-question-2">
              <p>고객이 가장 불편해하는 순간은 언제인가요?</p>
            </div>
            <div className="hero-ai-message hero-ai-message-user hero-ai-stream-reply hero-ai-stream-reply-2">
              <span>
                공고마다 양식이 달라
                <br />
                매번 처음부터 써야 할 때예요.
              </span>
            </div>
            <div className="hero-ai-message hero-ai-message-assistant hero-ai-stream-question hero-ai-stream-final">
              <p>좋아요. 말씀해주신 내용을 바탕으로 사업계획서를 작성할게요.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-complete-preview" aria-hidden="true">
      <div className="hero-complete-page-sequence">
        <article className="hero-complete-sequence-page hero-complete-sequence-page-1 is-flow">
          <div className="hero-complete-sequence-topbar">
            <i />
          </div>
          <strong>1. Problem</strong>
          <div className="hero-complete-sequence-prelines is-short">
            <span />
            <span />
          </div>
          <HeroMiniServiceFlowSvg />
          <div className="hero-complete-sequence-lines">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </article>
        <article className="hero-complete-sequence-page hero-complete-sequence-page-2 is-market">
          <div className="hero-complete-sequence-topbar">
            <i />
          </div>
          <strong>2. Solution</strong>
          <div className="hero-complete-sequence-field-grid">
            <span />
            <span />
            <span />
            <span />
          </div>
          <HeroMiniTamSomSvg />
          <div className="hero-complete-sequence-lines">
            <span />
            <span />
            <span />
            <span />
          </div>
        </article>
        <article className="hero-complete-sequence-page hero-complete-sequence-page-3 is-competitor">
          <div className="hero-complete-sequence-topbar">
            <i />
          </div>
          <strong>3. Scale-up</strong>
          <div className="hero-complete-sequence-prelines">
            <span />
            <span />
            <span />
          </div>
          <HeroMiniCompetitorSvg />
          <div className="hero-complete-sequence-lines">
            <span />
            <span />
            <span />
          </div>
        </article>
        <article className="hero-complete-sequence-page hero-complete-sequence-page-4 is-roadmap">
          <div className="hero-complete-sequence-topbar">
            <i />
          </div>
          <strong>4. Team</strong>
          <div className="hero-complete-sequence-date-row">
            <span />
            <span />
            <span />
          </div>
          <HeroMiniRoadmapSvg />
          <div className="hero-complete-sequence-bars">
            <span />
            <span />
            <span />
            <span />
          </div>
        </article>
      </div>
    </div>
  );
}

function HeroWorkflowSlideCard({
  clone = false,
  index,
  isActive = false,
  onProgramSelect,
  slide,
}: {
  clone?: boolean;
  index: number;
  isActive?: boolean;
  onProgramSelect?: (() => void) | undefined;
  slide: HeroWorkflowSlide;
}) {
  return (
    <article
      className={`hero-slide hero-workflow-slide hero-workflow-slide-${slide.preview}${isActive ? " is-active" : ""}${clone ? " clone-slide" : ""}`}
      aria-hidden={clone || undefined}
      aria-label={clone ? undefined : `독스헌트 작성 단계 ${index + 1}: ${slide.title}`}
    >
      <div className="hero-workflow-heading">
        <p className="hero-workflow-step">{slide.step}</p>
        <h2 className="hero-workflow-title">{slide.title}</h2>
      </div>
      <HeroWorkflowPreview onProgramSelect={onProgramSelect} preview={slide.preview} />
    </article>
  );
}

function DraftProgramAnnouncementOverlay() {
  return (
    <figcaption className="draft-program-announcement-panel" aria-label="마감이 가까운 지원사업 공고 예시">
      <ol className="draft-program-announcement-list">
        {draftStoryProgramOverlays.map((program, index) => (
          <li
            className="draft-program-announcement-row"
            key={program.title}
            style={
              {
                "--program-delay": `${
                  (index === draftStoryProgramOverlays.length - 1
                    ? -draftStoryProgramOverlays.length
                    : index - (draftStoryProgramOverlays.length - 1)) * 2200
                }ms`,
              } as CSSProperties
            }
          >
            <strong>{program.title}</strong>
            <span>{program.deadline}</span>
          </li>
        ))}
      </ol>
    </figcaption>
  );
}

function HeroWorkflowCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number | null>(null);

  useEffect(() => {
    if (isDragging) {
      return;
    }

    const timer = window.setTimeout(
      () => {
        setActiveIndex((current) => (current + 1) % heroWorkflowSlides.length);
      },
      activeIndex === 0 ? heroWorkflowProgramClickMs : activeIndex === 1 ? heroWorkflowChatAutoMs : heroWorkflowAutoMs,
    );

    return () => {
      window.clearTimeout(timer);
    };
  }, [activeIndex, isDragging]);

  const goToSlide = (nextIndex: number) => {
    setActiveIndex((nextIndex + heroWorkflowSlides.length) % heroWorkflowSlides.length);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLElement && event.target.closest("button, a")) {
      return;
    }

    dragStartX.current = event.clientX;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const finishDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) {
      return;
    }

    const deltaX = event.clientX - dragStartX.current;
    dragStartX.current = null;
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (Math.abs(deltaX) < heroWorkflowSwipeThreshold) {
      return;
    }

    goToSlide(activeIndex + (deltaX < 0 ? 1 : -1));
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) {
      return;
    }

    event.preventDefault();
  };

  const handlePointerCancel = (event: PointerEvent<HTMLDivElement>) => {
    dragStartX.current = null;
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToSlide(activeIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToSlide(activeIndex + 1);
    }
  };

  return (
    <div
      className={`hero-carousel${isDragging ? " is-dragging" : ""}${activeIndex === 0 ? " is-program-step" : ""}`}
      aria-label="독스헌트 작성 단계 미리보기"
      onKeyDown={handleKeyDown}
      onPointerCancel={handlePointerCancel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishDrag}
      role="region"
      tabIndex={0}
    >
      <div className="hero-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {heroWorkflowSlides.map((slide, index) => (
          <HeroWorkflowSlideCard
            index={index}
            isActive={activeIndex === index}
            key={slide.step}
            onProgramSelect={() => goToSlide(1)}
            slide={slide}
          />
        ))}
      </div>
      <button
        aria-label="이전 단계 보기"
        className="hero-carousel-arrow hero-carousel-arrow-prev"
        onClick={() => goToSlide(activeIndex - 1)}
        type="button"
      >
        <span aria-hidden="true" />
      </button>
      <button
        aria-label="다음 단계 보기"
        className="hero-carousel-arrow hero-carousel-arrow-next"
        onClick={() => goToSlide(activeIndex + 1)}
        type="button"
      >
        <span aria-hidden="true" />
      </button>
      <div className="carousel-dots">
        {heroWorkflowSlides.map((slide, index) => (
          <button
            aria-label={`${slide.step} 보기`}
            aria-pressed={activeIndex === index}
            className={activeIndex === index ? "is-active" : ""}
            key={slide.step}
            onClick={() => goToSlide(index)}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}

function DraftLandingMain({ onStart }: { onStart: StartHandler }) {
  return (
    <main className="draft-landing-main" aria-label="독스헌트 새 랜딩 시안">
      <section className="hero" aria-labelledby="draft-hero-title">
        <div className="hero-copy">
          <h1 className="hero-title" id="draft-hero-title">
            <span className="draft-hero-title-desktop">모든 지원사업, 사업계획서를 작성하는 AI</span>
            <span className="draft-hero-title-mobile">
              <span>모든 지원사업</span>
              <span>사업계획서를 작성하는 AI</span>
            </span>
          </h1>
          <p className="hero-subtitle">쓰면 쓸수록 더 잘 써주는 독스헌트, 지금 바로 만나보세요</p>
          <a className="cta-button" href={startPath} onClick={onStart}>
            무료로 시작하기
          </a>
        </div>
        <HeroWorkflowCarousel />
      </section>

      <section className="draft-story-section" aria-labelledby="draft-story-title">
        <div className="draft-centered-copy">
          <h2 id="draft-story-title">끝없는 지원사업, 대표 몸은 하나</h2>
          <p>
            지원사업, 스타트업의 자금 조달에 있어 꼭 필요하지만,
            <br />
            지원사업 별로 사업계획서 양식이 전부 달라 대표에게 엄청난 리소스 할애를 부담시킵니다
          </p>
        </div>
        <figure className="draft-program-visual">
          <img
            className="draft-program-visual-image"
            src={`${assets}/draft-landing-program-selection-background.webp`}
            alt="지원사업 공고를 확인하는 대표"
            width="2644"
            height="1184"
            loading="lazy"
          />
          <DraftProgramAnnouncementOverlay />
        </figure>
        <div className="draft-centered-copy narrow">
          <h2>
            지원사업 선택하고, AI와 대화하면
            <br />
            어느새 사업계획서 자동 완성
          </h2>
          <p>아이템 정보를 모아두고, 사업계획서를 지원사업마다 더 정교하게</p>
        </div>
        <DraftFlowDemo />
      </section>

      <section className="draft-proof-section" aria-labelledby="draft-proof-title">
        <div className="draft-centered-copy">
          <h2 id="draft-proof-title">
            똑똑한 대표들은 이미 독스헌트로
            <br />더 빠르게 결과를 내고 있습니다
          </h2>
          <p className="draft-proof-intro">
            <span className="draft-proof-intro-desktop">
              하루에 사업계획서 5개를 작성하는 대표부터, 첫 지원사업에 합격한 대표까지
              <br />
              직접 사용해보며 그 진가를 확인해 보세요.
            </span>
            <span className="draft-proof-intro-mobile">
              <span>하루에 사업계획서 5개를 작성하는 대표부터, 첫 지원사업에 합격한 대표까지</span>
              <span>직접 사용해보며 그 진가를 확인해 보세요.</span>
            </span>
          </p>
        </div>
        <DraftProofCarousel />
      </section>

      <section className="draft-refine-section" aria-labelledby="draft-refine-title">
        <DraftMemoryDemo />
      </section>

      <section className="draft-dark-workflow" aria-labelledby="draft-workflow-title">
        <div className="draft-centered-copy inverted">
          <h2 id="draft-workflow-title">사업계획서에 필요한 작업까지 한 번에</h2>
          <p>
            시각 자료 생성, 시장·경쟁사 조사, 문서 스타일 자동 정리까지
            <br />
            사업계획서 완성에 필요한 작업을 AI와 함께 이어서 처리할 수 있습니다.
          </p>
        </div>
        <div className="draft-workflow-grid">
          {draftWorkflowCards.map((card) => (
            <article className="draft-workflow-card" key={card.title}>
              <div className="draft-workflow-image">
                <DraftWorkflowPreview type={card.preview} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="security-section draft-security-lite" aria-label="보안 안내">
        <h2 className="draft-security-title">
          사업계획서는
          <span className="mobile-break">
            <br />
          </span>{" "}
          오직 사용자만의 것입니다
        </h2>
        <img className="security-image" src={`${assets}/trust-security-desktop.webp`} alt="보안 잠금 이미지" />
        <p className="security-copy">
          <span className="desktop-only">
            사업계획서 생성 과정에서의 모든 입출력 데이터는, 전송 및 저장 시 암호화되어 안전하게 보호됩니다.
            <br />
            외부 유출 및 AI 모델 학습에 절대 이용되지 않습니다.
          </span>
          <span className="mobile-only">
            입력하신 모든 데이터는 전송 및 저장 시 암호화되어 안전하게
            <br />
            보호됩니다. 외부 유출 및 AI 모델 학습에 절대 이용되지 않습니다.
          </span>
        </p>
      </section>

      <section className="draft-final-cta" aria-labelledby="draft-final-title">
        <h2 id="draft-final-title">
          <span className="draft-final-title-gradient">
            작성 시간은 1/10로
            <br />
            자금 확보 기회는 10배로
          </span>
        </h2>
        <p>
          “낚싯대를 1개 드리우는 것과 100개 드리우는 것의 확률은 다릅니다.
          <br />
          독스헌트를 활용해서 지원사업을 최대한 많이 신청하는 게 최고의 전략입니다.”
          <span className="final-quote-author">박중현, 스피노자 대표</span>
        </p>
        <a className="draft-cta dark" href={startPath} onClick={onStart}>
          무료로 시작하기
        </a>
      </section>
    </main>
  );
}

export function LandingPageClient({ initialDraft = false }: LandingPageClientProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pcDialogOpen, setPcDialogOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [draftLanding, setDraftLanding] = useState(initialDraft);
  const logoTapCountRef = useRef(0);
  const logoTapTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.matchMedia("(max-width: 767px)").matches ? 780 : 1080;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("modal-open", pcDialogOpen);
    return () => document.body.classList.remove("modal-open");
  }, [pcDialogOpen]);

  useEffect(() => {
    return () => {
      if (logoTapTimerRef.current) {
        window.clearTimeout(logoTapTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const draftQueryEnabled = new URLSearchParams(window.location.search).get("draft") === "1";
      setDraftLanding(initialDraft || pathname === "/new-landing" || draftQueryEnabled);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [initialDraft, pathname]);

  const handleStart = (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    event.preventDefault();
    if (window.matchMedia("(max-width: 900px)").matches) {
      setPcDialogOpen(true);
      return;
    }
    window.location.assign(buildAppUrl());
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(buildAppUrl());
      setPcDialogOpen(false);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
    }
  };

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (initialDraft) {
      return;
    }

    event.preventDefault();
    if (logoTapTimerRef.current) {
      window.clearTimeout(logoTapTimerRef.current);
    }

    logoTapCountRef.current += 1;
    if (logoTapCountRef.current >= 5) {
      logoTapCountRef.current = 0;
      const nextDraftLanding = !draftLanding;
      const nextPath = nextDraftLanding ? "/new-landing" : "/";
      setDraftLanding(nextDraftLanding);
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      router.push(nextPath);
      return;
    }

    logoTapTimerRef.current = window.setTimeout(() => {
      logoTapCountRef.current = 0;
    }, 1400);
  };

  return (
    <div className={`page landing-page ${draftLanding ? "draft-landing-page" : ""}`} id="top">
      <JsonLd data={softwareApplicationJsonLd()} />
      <header className={`site-header ${scrolled ? "scrolled" : ""}`} aria-label="독스헌트 사이트 내비게이션">
        <Link className="logo-link" href="/" aria-label="독스헌트 홈" onClick={handleLogoClick}>
          <img
            className="logo"
            src={scrolled ? `${cdn}/f1777294562574x255613413900380960/DocsHunt%20logo.svg` : `${assets}/docshunt-logo-white.svg`}
            alt="DocsHunt"
            width="160"
            height="25"
          />
        </Link>
        <nav className="header-nav" aria-label="주요 메뉴">
          <a className="nav-link" href="/pricing">
            요금제 / 환급
          </a>
          <a className="nav-link" href="/blog_list">
            블로그
          </a>
        </nav>
        <div className="header-actions">
          <button className="header-button primary" type="button" onClick={handleStart}>
            <span className="desktop-label">무료로 시작하기</span>
          </button>
          <button
            className="menu-button"
            type="button"
            aria-label="메뉴 열기"
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            onClick={(event) => {
              event.stopPropagation();
              setMobileMenuOpen((value) => !value);
            }}
          >
            <span />
          </button>
          <nav className={`mobile-menu ${mobileMenuOpen ? "is-open" : ""}`} id="mobile-menu" aria-label="모바일 메뉴">
            <a className="mobile-menu-link" href="/pricing">
              요금제 / 환급
            </a>
            <a className="mobile-menu-link" href="/blog_list">
              블로그
            </a>
          </nav>
        </div>
      </header>

      {draftLanding ? (
        <DraftLandingMain onStart={handleStart} />
      ) : (
        <main>
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-copy">
              <h1 className="hero-title" id="hero-title">
                맞춤 공고 탐색부터
                <span className="mobile-break">
                  <br />
                </span>{" "}
                사업계획서 작성까지 한 번에
              </h1>
              <p className="hero-subtitle">독스헌트와 함께 지원사업을 쉽고 빠르게</p>
              <a className="cta-button" href={startPath} onClick={handleStart}>
                무료로 시작하기
              </a>
            </div>
            <HeroWorkflowCarousel />
          </section>

          <section className="question-section" aria-labelledby="question-title">
            <h2 className="question-title" id="question-title">
              <span className="line">
                <span className="muted-word mobile-stack">내 사업을</span>
                <span>가장 잘 아는 AI가</span>
                <img className="sparkle" src={`${assets}/sparkle-accent.svg`} alt="" />
                <span className="muted-word mobile-stack">질문하고</span>
              </span>
              <span className="line">사업계획서를 완성합니다</span>
            </h2>
            <video
              className="question-video"
              src={questionVideo}
              autoPlay
              muted
              loop
              playsInline
              aria-label="독스헌트 AI 질문 작성 화면 미리보기"
            />

            <div className="feature-intro">
              <h2 className="section-title">
                사업 한 번 정리하면,
                <span className="mobile-break">
                  <br />
                </span>{" "}
                모든 지원사업 자동 완성!
              </h2>
              <p className="section-subtitle">
                아이템 정보를 모아두고,
                <span className="mobile-break">
                  <br />
                </span>{" "}
                사업계획서를 지원사업마다 더 정교하게
              </p>
            </div>

            <div className="feature-cards" id="features">
              <article className="wide-card one">
                <h3>
                  내 사업과 지원사업에 맞게
                  <br />
                  질문/답변 자동 정리
                </h3>
                <a className="cta-button small" href={startPath} onClick={handleStart}>
                  무료 체험하기
                </a>
                <img className="feature-card-image" src={`${assets}/feature-question-answer-mobile.webp`} alt="" />
              </article>
              <article className="wide-card two">
                <h3>
                  <span className="feature-title-desktop">
                    K-Startup, 기업마당
                    <br />전 지원사업 사업계획서 대응
                  </span>
                  <span className="feature-title-compact">
                    모든 지원사업
                    <br />
                    한글 양식 완벽 대응
                  </span>
                </h3>
                <a className="cta-button small" href={startPath} onClick={handleStart}>
                  무료 체험하기
                </a>
                <img className="feature-card-image" src={`${assets}/feature-hwp-template-mobile.webp`} alt="" />
              </article>
            </div>
          </section>

          <section className="tools-section" aria-labelledby="tools-title">
            <h2 className="section-title" id="tools-title">
              아이템을 더 단단하게
              <span className="mobile-break">
                <br />
              </span>{" "}
              만드는 도구들
            </h2>
            <div className="tool-grid">
              {toolColumns.map((column, columnIndex) => (
                <div className="tool-column" key={columnIndex}>
                  {column.map((tool) => (
                    <article className={`tool-card ${tool.className}`} key={tool.title}>
                      <div className="tool-card-copy">
                        <span className="badge">{tool.badge}</span>
                        <h3>
                          {tool.title.split("\n").map((line) => (
                            <span key={line}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </h3>
                      </div>
                      <picture>
                        <source media="(max-width: 1200px)" srcSet={tool.mobileImage} />
                        <img src={tool.image} alt="" />
                      </picture>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </section>

          <section className="interview-section" id="interviews" aria-labelledby="interviews-title">
            <div className="interview-heading">
              <h2 className="section-title" id="interviews-title">
                합격한 대표님들이
                <span className="mobile-break">
                  <br />
                </span>{" "}
                직접 말해요
              </h2>
              <p className="section-subtitle">
                <span className="interview-subtitle-default">
                  독스헌트로 지원사업에 합격한
                  <span className="mobile-break">
                    <br />
                  </span>{" "}
                  대표님들의 생생한 인터뷰
                </span>
                <span className="interview-subtitle-tablet">
                  누적 사업계획서 생성 1만 건을 돌파한, 수많은 창업자가 믿고 쓰는 사업계획서 AI
                </span>
              </p>
            </div>
            <div className="video-grid" aria-label="독스헌트 고객 인터뷰 영상">
              {interviewVideos.map((video) => (
                <iframe
                  className={`video-frame ${video.className}`}
                  src={youtubeEmbedSrc(video.id)}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  key={video.id}
                />
              ))}
            </div>
          </section>

          <section className="security-section" aria-label="보안 안내">
            <img
              className="security-title desktop"
              src={`${assets}/hero-ownership-headline-full.svg`}
              alt="사업계획서는 오직 사용자만의 것입니다"
            />
            <div className="security-title mobile" aria-label="사업계획서는 오직 사용자만의 것입니다">
              <img src={`${assets}/hero-ownership-headline-prefix.svg`} alt="사업계획서는" />
              <img src={`${assets}/hero-ownership-headline-suffix.svg`} alt="오직 사용자만의 것입니다" />
            </div>
            <img className="security-image" src={`${assets}/trust-security-desktop.webp`} alt="보안 잠금 이미지" />
            <p className="security-copy">
              <span className="desktop-only">
                사업계획서 생성 과정에서의 모든 입출력 데이터는, 전송 및 저장 시 암호화되어 안전하게 보호됩니다.
                <br />
                외부 유출 및 AI 모델 학습에 절대 이용되지 않습니다.
              </span>
              <span className="mobile-only">
                입력하신 모든 데이터는 전송 및 저장 시 암호화되어 안전하게 보호됩니다. 외부 유출 및 AI 모델 학습에 절대 이용되지 않습니다.
              </span>
            </p>
          </section>

          <img className="problem-graphic" src={`${assets}/problem-graphic.svg`} alt="사업계획서 작성 문제를 해결하는 독스헌트 그래픽" />

          <section className="final-cta" aria-labelledby="final-title">
            <h2 className="final-title" id="final-title">
              <span className="draft-final-title-gradient">
                작성 시간은 1/10로
                <br />
                자금 확보 기회는 10배로
              </span>
            </h2>
            <p className="final-subtitle">
              “낚싯대를 1개 드리우는 것과 100개 드리우는 것의 확률은 다릅니다.
              <br />
              독스헌트를 활용해서 지원사업을 최대한 많이 신청하는 게 최고의 전략입니다.”
              <span className="final-quote-author">박중현, 스피노자 대표</span>
            </p>
            <a className="cta-button dark" href={startPath} onClick={handleStart}>
              무료로 시작하기
            </a>
          </section>
        </main>
      )}

      <footer className="site-footer">
        <div className="company-name">주식회사 사페레아우데</div>
        <div className="footer-details desktop-details">
          <span>대표 : 김성우</span>
          <span>고객지원 : yes-reply@docshunt.ai</span>
          <span>주소 : 서울시 동작구 상도로 55길 8, 챌린지스테이션 302호</span>
          <span>사업자등록번호 : 575-86-03204 | 통신판매업신고번호 : 제 2024-서울동작-0430 호</span>
        </div>
        <div className="footer-details mobile-details mobile-only">
          <span>대표 : 김성우</span>
          <span>주소 : 서울시 동작구 상도로 55길 8, 챌린지스테이션 302호</span>
          <span>고객센터 : 0507-0177-2162</span>
          <span>이메일: documents@docshunt.ai</span>
          <span>사업자등록번호 : 575-86-03204</span>
          <span>통신판매업신고번호 : 제 2024-서울동작-0430 호</span>
        </div>
        <div className="footer-bottom">
          <a className="instagram" href="https://www.instagram.com/docshunt_official/" target="_blank" rel="noreferrer">
            <img src={`${assets}/instagram-icon.webp`} alt="" />
            <span>docshunt_official</span>
          </a>
          <div className="legal-links">
            <a href="https://docshunt.ai/privacy_policy">개인정보 처리방침</a>
            <span>|</span>
            <a href="https://docshunt.ai/terms">이용약관</a>
            <span>|</span>
            <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=5758603204" target="_blank" rel="noreferrer">
              사업자 정보 확인
            </a>
          </div>
        </div>
      </footer>

      {pcDialogOpen && (
        <dialog className="pc-dialog" open>
          <form className="pc-dialog-card" method="dialog">
            <button className="dialog-close" type="button" aria-label="닫기" onClick={() => setPcDialogOpen(false)}>
              &times;
            </button>
            <h2>PC에서만 이용 가능합니다</h2>
            <p>독스헌트는 PC 환경에 최적화 되어 있습니다. 아래 버튼을 눌러 링크를 복사하고, PC에서 열어주세요.</p>
            <button className="header-button primary copy-link-button" type="button" onClick={copyLink}>
              독스헌트 PC 링크 복사하기
            </button>
            <p className="copy-status" aria-live="polite">
              {copied ? "독스헌트 PC 링크 복사됨" : ""}
            </p>
          </form>
        </dialog>
      )}
      <p className={`copy-toast ${copied ? "is-visible" : ""}`} aria-live="polite">
        독스헌트 PC 링크 복사됨
      </p>
    </div>
  );
}

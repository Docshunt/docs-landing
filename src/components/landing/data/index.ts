"use client";

import type { MouseEvent } from "react";

import { APP_URL } from "@/seo/metadata";

export const assets = "/docshunt-assets";
export const startPath = APP_URL;

export const heroWorkflowSlides = [
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

export const heroWorkflowAutoMs = 9000;
export const draftProofAutoMs = 5600;
export const heroWorkflowProgramClickMs = 3200;
export const heroWorkflowChatAutoMs = 6500;
export const heroWorkflowSwipeThreshold = 48;

export const heroProgramRows = [
  { title: "2026 예비창업패키지", dday: "D-1", urgent: true },
  { title: "2026 초기창업패키지", dday: "D-7" },
  { title: "2026 청년창업사관학교", dday: "D-15" },
  { title: "2026 창업도약패키지", dday: "D-10" },
] as const;

export const draftActualGeneratedDocumentFiles = [
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

export const draftActualDocumentPages = draftActualGeneratedDocumentFiles.map((fileName, index) => ({
  // The source screenshots were named on macOS, where filenames may use NFD.
  // Public assets are served from Linux in production, so normalize the URL to
  // the NFC filenames committed under `public/` before percent-encoding it.
  src: encodeURI(`${assets}/document-viewer-pages/pre-startup-generated/${fileName.normalize("NFC")}`),
  alt: `독스헌트로 생성한 예비창업패키지 사업계획서 ${index + 1}페이지`,
}));

export const draftActualTemplateDocumentPages = [
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

export const questionVideo = `${assets}/landing/question-answer-demo.m4v`;

export const interviewVideos = [
  { id: "eHCOCuoaI5M", title: "지원사업은 잘 쓰는 싸움이 아니라 많이 넣는 싸움입니다", className: "large" },
  { id: "34KtW8uyPrU", title: "독스헌트 지원사업 합격자 인터뷰 영상", className: "small" },
  {
    id: "GmIQijv2EFw",
    title: "[지원사업 합격자 인터뷰] 사업계획서 마감 3일 전에 시작했는데, 2천만원 확보한 썰 풉니다.",
    className: "small",
  },
];

export const toolColumns = [
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

export const draftProofCards = [
  {
    image: `${assets}/interviews/11111.webp`,
    mobileImage: `${assets}/interviews/11111-mobile.webp`,
    alt: "박중현 스피노자 대표 인터뷰",
    title: "지원사업, 잘 쓰는 것보다\n많이 넣는 싸움",
    quote: "“독스헌트로 하루에 사업계획서 4개까지 접수했고요.\n기존엔 2~3일 걸리던 것을 1시간 안에 할 수 있게 됐습니다.”",
    mobileQuote: "“독스헌트로 하루에 사업계획서 4개까지 접수했고요.\n기존엔 2~3일 걸리던 것을 1시간 안에 할 수 있게 됐습니다.”",
    author: "박중현, 스피노자 대표",
    href: "https://www.youtube.com/watch?v=9a_QmMnxmOo",
  },
  {
    image: `${assets}/interviews/33334.webp`,
    mobileImage: `${assets}/interviews/33334-mobile.webp`,
    alt: "하정연 크레센트 서울 대표 인터뷰",
    title: "밤새 쓰던 사업계획서,\n독스헌트로 자동화했어요",
    quote: "“반복적인 작업들은 자동화하고,\n본질에 시간을 더 쓸 수 있었습니다.”",
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

export const draftWorkflowCards = [
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

export const draftFlowPrograms = [
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

export const draftStoryProgramOverlays = [
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

export function toBusinessPlanTitle(title: string) {
  return title
    .replace(/\s*-\s*오늘 마감$/u, "")
    .replace(/^(\d{4})년\s+(.+?)\s+예비창업자\s+모집 공고$/u, "$1년 $2 사업계획서")
    .replace(/^(\d{4})년\s+(.+?)\s+참여기업\s+모집 공고$/u, "$1년 $2 사업계획서")
    .replace(/^(\d{4})년\s+(.+?)\s+모집 공고$/u, "$1년 $2 사업계획서")
    .replace(/^(\d{4})년\s+(.+?)\s+지원계획 공고$/u, "$1년 $2 사업계획서")
    .replace(/^(\d{4})년\s+(.+?)\s+지원사업 공고$/u, "$1년 $2 사업계획서");
}

export function isUrgentDeadline(deadline: string) {
  const daysLeft = deadline.match(/^D-(\d+)$/u)?.[1];

  return daysLeft !== undefined && Number(daysLeft) <= 7;
}

export type DraftFlowSourceFilter = "전체" | "K-Startup" | "기업마당";
export type DraftFlowMotionPhase = "scan" | "aim" | "click" | "chatZoom" | "editor";

export const draftFlowSourceFilters = ["전체", "K-Startup", "기업마당"] satisfies DraftFlowSourceFilter[];
export const draftFlowVisibleRows = 10;
// Keep the prior close-up transition available without using it in the default playback.
export const draftFlowEnableChatFocusZoom = false;
export const draftFlowMotionStart = draftFlowPrograms[0]!;
export const draftFlowMotionTarget = draftFlowPrograms[1]!;
export const draftFlowMotionSequence: Array<{
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

export type StartHandler = (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
export type LandingPageClientProps = {
  initialDraft?: boolean;
};

export function youtubeEmbedSrc(id: string) {
  return `https://www.youtube.com/embed/${id}?rel=0&enablejsapi=1`;
}

export function buildAppUrl() {
  const url = new URL(startPath);
  if (typeof window === "undefined") return url.toString();
  const params = new URLSearchParams(window.location.search);
  ["atTrackId", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((key) => {
    const value = params.get(key);
    if (value) url.searchParams.set(key, value);
  });
  return url.toString();
}

export const draftMemoryChatMessages = [
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

export const draftMemoryUpdates = [
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

export const draftActualAutoChatMessages = [
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

export type DraftActualChatPhase = {
  sentCount: number;
  pendingUserIndex: number | null;
};

export type DraftActualDocumentPhase = "waiting" | "generating" | "complete";

export const draftActualChatZoomInDelay = 460;
export const draftActualAssistantMessageDelay = 105;
export const draftActualUserTypingDelay = 70;
export const draftActualUserMessageDelay = 135;
export const draftActualDocumentGenerateDelay = 700;
export const draftActualChatZoomOutDelay = 420;
export const draftActualDocumentLoadingDuration = 2000;
export const draftActualDocumentLoopPause = 900;

export const initialDraftActualChatPhase: DraftActualChatPhase = {
  sentCount: 1,
  pendingUserIndex: null,
};

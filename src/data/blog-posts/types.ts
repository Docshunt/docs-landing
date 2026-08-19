export const BLOG_CATEGORIES = [
  {
    id: "interviews",
    label: "심사위원·대표 인터뷰",
    summary: "심사위원이 사업계획서에서 확인하는 기준과 대표자들의 실제 정부지원사업 경험을 인터뷰로 살펴봅니다.",
  },
  {
    id: "support-programs",
    label: "정부지원사업",
    summary: "정부지원사업 공고를 찾고 신청 자격, 제출 서류, 마감일과 우리 사업의 지원 적합도를 확인하는 방법을 안내합니다.",
  },
  {
    id: "business-plan-writing",
    label: "사업계획서 작성법",
    summary: "사업계획서의 목차와 근거, 구조와 문장을 심사 기준에 맞춰 설득력 있게 작성하고 검수하는 방법을 안내합니다.",
  },
  {
    id: "ai-docshunt",
    label: "AI·독스헌트 활용",
    summary: "AI와 독스헌트를 활용해 공고를 분석하고 사업계획서 초안을 작성하며 반복 준비 시간을 줄이는 방법을 소개합니다.",
  },
  {
    id: "startup-programs",
    label: "창업 프로그램",
    summary: "예비·초기·도약 단계 창업자가 창업패키지와 정부지원 프로그램의 조건을 비교하고 준비하는 방법을 안내합니다.",
  },
  {
    id: "startup-insights",
    label: "창업 인사이트·합격 전략",
    summary: "창업과 정부지원사업 준비에서 놓치기 쉬운 판단 기준, 합격 전략과 실행 인사이트를 정리합니다.",
  },
  {
    id: "docshunt-news",
    label: "독스헌트 소식",
    summary: "독스헌트의 새로운 기능과 제품 소식, 창업자가 참고할 수 있는 프로그램과 서비스 변경 내용을 안내합니다.",
  },
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number]["id"];
export type BlogFeaturedSection = "interviews" | "guides";

export type BlogPost = {
  page: number;
  index: number;
  slug: string;
  sourceUrl: string;
  title: string;
  titleLines?: string[];
  titleLineBreaks?: "always";
  description: string;
  seo?: {
    mainKeyword: string;
    supportKeywords: string[];
    searchIntent: string;
  };
  author?: string;
  date: string;
  modifiedDate?: string;
  verification?: {
    date: string;
    note: string;
    sources: { label: string; url: string }[];
  };
  image: string;
  heroImage: string;
  videoEmbedUrl?: string;
  videoTitle?: string;
  paragraphs: string[];
  contentHtml?: string;
};

export type CategorizedBlogPost = BlogPost & {
  category: BlogCategory;
  featuredSection?: BlogFeaturedSection | undefined;
  featuredRank?: number | undefined;
  featuredLabel?: string | undefined;
};

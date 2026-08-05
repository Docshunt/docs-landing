export const BLOG_CATEGORIES = [
  {
    id: "interviews",
    label: "심사위원·대표 인터뷰",
    summary: "심사위원의 기준과 대표들의 실제 지원사업 경험",
  },
  {
    id: "support-programs",
    label: "정부지원사업",
    summary: "공고 탐색부터 자격, 서류, 마감과 지원 적합도까지 확인하는 방법",
  },
  {
    id: "business-plan-writing",
    label: "사업계획서 작성법",
    summary: "목차, 근거, 구조와 문장을 사업계획서에 설득력 있게 담는 방법",
  },
  {
    id: "ai-docshunt",
    label: "AI·독스헌트 활용",
    summary: "AI와 독스헌트로 사업계획서 준비 시간을 줄이는 방법",
  },
  {
    id: "startup-programs",
    label: "창업 프로그램",
    summary: "예비·초기·도약 단계에 맞춘 창업패키지와 프로그램 활용법",
  },
  {
    id: "startup-insights",
    label: "창업 인사이트·합격 전략",
    summary: "창업과 지원사업 준비에서 놓치기 쉬운 판단과 전략",
  },
  {
    id: "docshunt-news",
    label: "독스헌트 소식",
    summary: "독스헌트의 새로운 소식과 창업자를 위한 프로그램 안내",
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

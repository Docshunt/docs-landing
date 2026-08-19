import type { Metadata } from "next";

import type { BlogPost } from "@/data/docshunt-blogs";

const DEFAULT_SITE_ORIGIN = "https://docshunt.ai";

export const SITE_URL = new URL(
  process.env.NEXT_PUBLIC_SITE_ORIGIN ??
    (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : DEFAULT_SITE_ORIGIN),
).origin;
export const APP_URL = new URL(process.env.NEXT_PUBLIC_APP_ORIGIN ?? "https://app.docshunt.ai").origin;
export const CHANNEL_URL = new URL(process.env.NEXT_PUBLIC_CHANNEL_ORIGIN ?? "https://docshunt.channel.io").origin;

export const SITE_NAME = "독스헌트 | 지원사업 사업계획서 작성 AI";
export const BLOG_AUTHOR_NAME = "독스헌트 마케팅팀";
export const BLOG_AUTHOR_PATH = "/about#editorial-policy";
export const BLOG_AUTHOR_URL = `${SITE_URL}${BLOG_AUTHOR_PATH}`;
export const DEFAULT_TITLE = "지원사업 사업계획서, AI로 어떻게 작성할까요? | 공고 분석·작성 AI 독스헌트";
export const DEFAULT_DESCRIPTION =
  "독스헌트는 공고별 문항과 평가 기준을 분석하고, AI가 필요한 질문을 한 뒤 지원사업 사업계획서 초안을 작성하는 서비스입니다. 작성할수록 아이템과 사업 정보가 AI 기억에 쌓여 다음 지원사업을 더 빠르게 준비할 수 있습니다.";
export const LANDING_OG_DESCRIPTION = DEFAULT_DESCRIPTION;
export const TWITTER_TITLE = DEFAULT_TITLE;
export const SEO_KEYWORDS = ["사업계획서", "사업계획서 예시", "사업계획서 AI", "사업계획서 작성", "창업", "독스헌트", "정부지원사업"];
export const OG_IMAGE = `${SITE_URL}/docshunt-assets/og-new-landing.jpg`;
export const FAVICON_URL = "/favicon.ico";
export const NAVER_SITE_VERIFICATION = "8b95bd75264aba5160dbc5493c948c6059c20628";
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-KGH2N9HZ";
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-71LW9PVQGN";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "1486344882633369";
export const POSTHOG_PROJECT_TOKEN = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
export const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ? new URL(process.env.NEXT_PUBLIC_POSTHOG_HOST).origin : undefined;

export const BLOG_LIST_TITLE = "사업계획서 AI, 정부지원사업에 어떻게 활용할까요? | 독스헌트";
export const BLOG_LIST_DESCRIPTION =
  "독스헌트 블로그에서 정부지원사업 공고를 읽는 법, 사업계획서 작성법과 합격 사례, AI 활용 팁을 확인하세요. 예비·초기창업자가 지원 자격과 제출 서류, 평가 기준을 점검하고 준비 시간을 줄이는 실전 정보를 제공합니다.";
export const UPDATES_TITLE = "독스헌트 업데이트 | 사업계획서 AI 새 기능과 개선 사항";
export const UPDATES_DESCRIPTION =
  "독스헌트의 새 기능, 서비스 개선 사항과 중요한 변경 내용을 확인하세요. 사업계획서 AI와 지원사업 준비 경험을 더 좋게 만드는 업데이트를 안내합니다.";
export const ABOUT_TITLE = "독스헌트 마케팅팀 | 지원사업 콘텐츠 작성자 소개";
export const ABOUT_DESCRIPTION =
  "정부지원사업과 사업계획서 작성 정보를 전하는 독스헌트 마케팅팀을 소개합니다. 글을 만드는 기준과 독스헌트의 공개 이력을 확인하세요.";
export const PRICING_TITLE = "독스헌트 요금제 비교 | 정부지원사업·사업계획서 작성 AI 서비스 플랜";
export const PRICING_DESCRIPTION =
  "지원사업 준비부터 사업계획서 작성까지, 내 사업에 맞는 독스헌트 AI 요금제와 기능을 비교해 보세요. 플랜별 제공 범위, 작성 지원 기능과 이용 조건을 한눈에 확인할 수 있습니다.";
export const REFUND_EVENT_TITLE = "2026 지원사업 합격 시 구독료 환급 | 독스헌트";
export const REFUND_EVENT_DESCRIPTION =
  "지원사업 합격을 준비하는 연간 Pro·Max 구독자를 위한 독스헌트 구독료 환급 조건과 최대 50% 환급 기준을 확인하세요.";
export const PRIVACY_POLICY_TITLE = "독스헌트 개인정보 처리방침 | 수집·이용·보관 안내";
export const PRIVACY_POLICY_DESCRIPTION =
  "독스헌트 서비스의 개인정보 수집·이용·보관·파기 기준과 정보주체의 권리, 데이터 보호 원칙을 안내합니다.";
export const BUSINESS_INFO_TITLE = "독스헌트 사업자 정보 | 사업자등록·통신판매업 신고";
export const BUSINESS_INFO_DESCRIPTION = "주식회사 사페레아우데의 사업자등록, 대표자, 주소, 통신판매업 신고 정보를 확인할 수 있습니다.";
export const TERMS_TITLE = "독스헌트 서비스 이용약관 | 회원·결제·콘텐츠 기준";
export const TERMS_DESCRIPTION = "독스헌트 서비스 이용 조건, 회원의 권리와 의무, 결제·환불 및 콘텐츠 관리 기준을 안내합니다.";
export const SAMPLE_TITLE = "사업계획서 예시·샘플 | 정부지원사업 문항을 반영한 독스헌트 AI 사례";
export const SAMPLE_DESCRIPTION =
  "독스헌트가 생성한 실제 사업계획서 예시와 작성 과정을 확인하세요. 숙박 공유 플랫폼 사업 모델을 바탕으로 지원사업 문항을 분석하고 사업계획서 초안을 만드는 과정과 참고 기준을 살펴볼 수 있습니다.";
export const MARKETING_CONSENT_TITLE = "마케팅 정보 수집 및 이용동의 | 독스헌트";
export const MARKETING_CONSENT_DESCRIPTION = "독스헌트의 마케팅 정보 수집 목적, 수집 항목, 보유 기간과 동의 철회 방법을 안내합니다.";
export const MARKETING_CONSENT_EN_TITLE = "Marketing Consent | DocsHunt";
export const MARKETING_CONSENT_EN_DESCRIPTION =
  "Learn how DocsHunt collects and uses optional marketing information and how to withdraw your consent.";
export const PAYMENT_POLICY_TITLE = "독스헌트 결제·청약철회 정책 | 자동결제·환불 안내";
export const PAYMENT_POLICY_DESCRIPTION = "독스헌트 유료서비스의 결제, 자동결제 중단, 청약철회와 환불 기준을 자세히 안내합니다.";
export const HWPX_GUIDE_TITLE = "HWP를 HWPX로 변환하는 방법 | 한글 파일 변환 가이드";
export const HWPX_GUIDE_DESCRIPTION = "한컴오피스와 온라인 변환 도구로 HWP 파일을 HWPX로 바꾸는 방법과 변환 전 확인할 점을 안내합니다.";
export const REVIEW_TITLE = "독스헌트 사용자 후기 | 정부지원사업·사업계획서 작성 AI 활용 경험";
export const REVIEW_DESCRIPTION =
  "사업계획서 작성과 정부지원사업 준비에 독스헌트를 활용한 사용자들의 실제 후기와 작성 시간 단축 경험을 확인하세요. 공고 분석, AI 초안 작성과 제출 준비에 활용한 사례를 함께 살펴볼 수 있습니다.";

export function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    const url = new URL(path);
    return url.origin === DEFAULT_SITE_ORIGIN ? `${SITE_URL}${url.pathname}${url.search}${url.hash}` : path;
  }
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  image = OG_IMAGE,
  type = "website",
  locale = "ko_KR",
  keywords = SEO_KEYWORDS,
  robots,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  locale?: string;
  keywords?: string[];
  robots?: Metadata["robots"];
}): Metadata {
  const url = absoluteUrl(path);
  const absoluteImage = absoluteUrl(image);
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale,
      images: [
        {
          url: absoluteImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteImage],
    },
    ...(robots ? { robots } : {}),
    verification: {
      other: {
        "naver-site-verification": NAVER_SITE_VERIFICATION,
      },
    },
  };
}

export function dateToIso(date: string) {
  const [year, month, day] = date.split(".");
  if (!year || !month) return undefined;
  const yearMonth = `${year}-${month.padStart(2, "0")}`;
  return day ? `${yearMonth}-${day.padStart(2, "0")}` : yearMonth;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "독스헌트",
    legalName: "주식회사 사페레아우데",
    url: SITE_URL,
    logo: `${SITE_URL}/docshunt-assets/docshunt-logo-white.svg`,
    sameAs: ["https://www.instagram.com/docshunt.ai/"],
    contactPoint: {
      "@type": "ContactPoint",
      email: "documents@docshunt.ai",
      contactType: "customer support",
      availableLanguage: ["ko"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "KR",
      addressRegion: "서울특별시",
      streetAddress: "동작구 상도로 55길 8, 창의키움관 302호",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "독스헌트",
    alternateName: "DocsHunt",
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    inLanguage: "ko-KR",
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#software-application`,
    name: "독스헌트",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE_URL,
    image: OG_IMAGE,
    description: DEFAULT_DESCRIPTION,
    inLanguage: "ko-KR",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KRW",
      url: APP_URL,
    },
  };
}

export function webPageJsonLd({
  name,
  description,
  path,
  type = "WebPage",
  inLanguage = "ko-KR",
}: {
  name: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "ProfilePage";
  inLanguage?: string;
}) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function authorProfileJsonLd() {
  return {
    ...webPageJsonLd({
      name: ABOUT_TITLE,
      description: ABOUT_DESCRIPTION,
      path: "/about",
      type: "ProfilePage",
    }),
    mainEntity: {
      "@type": "Organization",
      "@id": BLOG_AUTHOR_URL,
      name: BLOG_AUTHOR_NAME,
      url: BLOG_AUTHOR_URL,
      description: ABOUT_DESCRIPTION,
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
    },
  };
}

export function blogListJsonLd(
  posts: BlogPost[],
  page = 1,
  path = page === 1 ? "/blog_list" : `/blog_list?page=${page}`,
  name = BLOG_LIST_TITLE,
  description = BLOG_LIST_DESCRIPTION,
) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${url}#blog`,
    name,
    description,
    url,
    inLanguage: "ko-KR",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      ...(post.seo ? { keywords: [post.seo.mainKeyword, ...post.seo.supportKeywords] } : {}),
      url: absoluteUrl(post.sourceUrl),
      datePublished: dateToIso(post.date),
      ...(post.modifiedDate ? { dateModified: dateToIso(post.modifiedDate) } : {}),
      image: absoluteUrl(post.heroImage),
    })),
  };
}

export function articleJsonLd(post: BlogPost) {
  const url = absoluteUrl(post.sourceUrl);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    ...(post.seo ? { keywords: [post.seo.mainKeyword, ...post.seo.supportKeywords] } : {}),
    url,
    image: absoluteUrl(post.heroImage),
    datePublished: dateToIso(post.date),
    ...(post.modifiedDate ? { dateModified: dateToIso(post.modifiedDate) } : {}),
    ...(post.verification ? { citation: post.verification.sources.map(({ url }) => url) } : {}),
    inLanguage: "ko-KR",
    author: {
      "@type": "Organization",
      "@id": BLOG_AUTHOR_URL,
      name: post.author ?? BLOG_AUTHOR_NAME,
      url: BLOG_AUTHOR_URL,
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

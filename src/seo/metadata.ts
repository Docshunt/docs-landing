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
export const DEFAULT_TITLE = "지원사업 사업계획서, AI로 어떻게 작성할까요? | 독스헌트";
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
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "946529364431115";
export const POSTHOG_PROJECT_TOKEN = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
export const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ? new URL(process.env.NEXT_PUBLIC_POSTHOG_HOST).origin : undefined;

export const BLOG_LIST_TITLE = "사업계획서 AI, 정부지원사업에 어떻게 활용할까요? | 독스헌트";
export const BLOG_LIST_DESCRIPTION =
  "독스헌트 블로그는 사업계획서 AI 활용법과 정부지원사업 준비 방법을 안내합니다. 한글 양식 작성, 합격 예시, 공고별 실전 팁을 확인하세요.";
export const ABOUT_TITLE = "독스헌트 마케팅팀 | 블로그 작성자 소개";
export const ABOUT_DESCRIPTION =
  "정부지원사업과 사업계획서 작성 정보를 전하는 독스헌트 마케팅팀을 소개합니다. 글을 만드는 기준과 독스헌트의 공개 이력을 확인하세요.";
export const PRICING_TITLE = "요금제 | 독스헌트";
export const PRICING_DESCRIPTION = "내 사업의 지원사업 준비 방식에 맞는 독스헌트 플랜을 선택하세요.";
export const REFUND_EVENT_TITLE = "2026 지원사업 합격 시 환급 | 독스헌트";
export const REFUND_EVENT_DESCRIPTION =
  "연간 Pro 또는 Max 요금제로 지원사업을 준비하고 합격하면, 실제 결제한 구독료의 최대 50%를 환급받으세요.";
export const PRIVACY_POLICY_TITLE = "개인정보 처리방침 | 독스헌트";
export const PRIVACY_POLICY_DESCRIPTION = "독스헌트 서비스의 개인정보 수집, 이용, 보관, 파기 및 정보주체의 권리를 안내합니다.";
export const BUSINESS_INFO_TITLE = "사업자 정보 확인 | 독스헌트";
export const BUSINESS_INFO_DESCRIPTION = "주식회사 사페레아우데의 사업자등록 및 통신판매업 신고 정보를 안내합니다.";
export const TERMS_TITLE = "서비스 이용약관 | 독스헌트";
export const TERMS_DESCRIPTION = "독스헌트 서비스의 이용 조건, 회원의 권리와 의무, 결제 및 콘텐츠 관리 기준을 안내합니다.";
export const SAMPLE_TITLE = "사업계획서 예시 샘플 | 독스헌트";
export const SAMPLE_DESCRIPTION =
  "독스헌트가 생성한 실제 사업계획서 예시를 확인하세요. 독스헌트와 숙박 공유 플랫폼 사업 모델을 바탕으로 만든 참고용 샘플입니다.";
export const MARKETING_CONSENT_TITLE = "마케팅 정보 수집 및 이용동의 | 독스헌트";
export const MARKETING_CONSENT_DESCRIPTION = "독스헌트의 마케팅 정보 수집 목적, 수집 항목, 보유 기간과 동의 철회 방법을 안내합니다.";
export const MARKETING_CONSENT_EN_TITLE = "Marketing Consent | DocsHunt";
export const MARKETING_CONSENT_EN_DESCRIPTION =
  "Learn how DocsHunt collects and uses optional marketing information and how to withdraw your consent.";
export const PAYMENT_POLICY_TITLE = "결제 및 청약철회 정책 | 독스헌트";
export const PAYMENT_POLICY_DESCRIPTION = "독스헌트 유료서비스의 결제, 자동결제 중단 및 청약철회 기준을 안내합니다.";
export const CREDITS_GUIDE_TITLE = "독스헌트 크레딧 안내";
export const CREDITS_GUIDE_DESCRIPTION = "독스헌트 요금제별 크레딧 제공량, 사용 기준, 추가 구매와 유효기간을 안내합니다.";
export const HWPX_GUIDE_TITLE = "HWP를 HWPX로 변환하는 방법 | 독스헌트";
export const HWPX_GUIDE_DESCRIPTION = "한컴오피스와 온라인 변환 도구를 이용해 HWP 파일을 HWPX로 변환하는 방법을 안내합니다.";
export const REVIEW_TITLE = "독스헌트 사용 후기";
export const REVIEW_DESCRIPTION = "사업계획서 작성과 정부지원사업 준비에 독스헌트를 활용한 사용자들의 실제 후기를 확인하세요.";

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
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  locale?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const absoluteImage = absoluteUrl(image);
  return {
    title,
    description,
    keywords: SEO_KEYWORDS,
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
    verification: {
      other: {
        "naver-site-verification": NAVER_SITE_VERIFICATION,
      },
    },
  };
}

export function dateToIso(date: string) {
  const [year, month, day] = date.split(".");
  if (!year || !month || !day) return undefined;
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
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
      streetAddress: "동작구 상도로 55길 8, 챌린지스테이션 302호",
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

export function blogListJsonLd(posts: BlogPost[], page = 1) {
  const url = absoluteUrl(page === 1 ? "/blog_list" : `/blog_list?page=${page}`);
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${url}#blog`,
    name: BLOG_LIST_TITLE,
    description: BLOG_LIST_DESCRIPTION,
    url,
    inLanguage: "ko-KR",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
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
    url,
    image: absoluteUrl(post.heroImage),
    datePublished: dateToIso(post.date),
    ...(post.modifiedDate ? { dateModified: dateToIso(post.modifiedDate) } : {}),
    ...(post.verification ? { citation: post.verification.sources.map(({ url }) => url) } : {}),
    inLanguage: "ko-KR",
    author: {
      "@type": "Organization",
      "@id": BLOG_AUTHOR_URL,
      name: BLOG_AUTHOR_NAME,
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

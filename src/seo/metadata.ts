import type { Metadata } from "next";

import type { BlogPost } from "@/data/docshunt-blogs";

export const SITE_URL = "https://docshunt.ai";
export const APP_URL = "https://app.docshunt.ai";
export const CHANNEL_URL = "https://docshunt.channel.io";
export const CDN_URL = "https://4691947d26a9c64d254186f138cdee17.cdn.bubble.io";

export const SITE_NAME = "독스헌트 | 지원사업 사업계획서 작성 AI";
export const DEFAULT_TITLE = "작성 시간은 1/10로, 자금 확보 기회는 10배로 | 독스헌트";
export const DEFAULT_DESCRIPTION =
  "공고별 문항과 평가 기준을 분석하고, AI와 묻고 답하며 사업계획서를 완성합니다. 작성할수록 아이템과 사업 정보가 AI 기억에 쌓여 점점 더 빠르고 정교하게 지원사업을 준비할 수 있습니다.";
export const LANDING_OG_DESCRIPTION = DEFAULT_DESCRIPTION;
export const TWITTER_TITLE = DEFAULT_TITLE;
export const SEO_KEYWORDS = ["사업계획서", "사업계획서 예시", "사업계획서 AI", "사업계획서 작성", "창업", "독스헌트", "정부지원사업"];
export const OG_IMAGE = "https://docs-landing-six.vercel.app/docshunt-assets/og-new-landing.jpg";
export const FAVICON_URL = `${CDN_URL}/f1757483516803x613112797294277800/favicon.ico`;
export const NAVER_SITE_VERIFICATION = "8b95bd75264aba5160dbc5493c948c6059c20628";
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-KGH2N9HZ";
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-71LW9PVQGN";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "946529364431115";

export const BLOG_LIST_TITLE = "사업계획서 AI 작성 팁 및 정부지원사업 합격 가이드 | 독스헌트 블로그";
export const BLOG_LIST_DESCRIPTION =
  "사업계획서 AI 활용법부터 최신 정부지원사업 한글 양식 대응 노하우까지, 창업 성공을 위한 모든 인사이트를 독스헌트 블로그에서 확인하세요. 예비 창업자를 위한 합격 예시와 실전 작성 팁을 매주 업데이트합니다.";

export function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  image = OG_IMAGE,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(path);
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
      locale: "ko_KR",
      images: [
        {
          url: image,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
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
    name: "독스헌트",
    legalName: "주식회사 사페레아우데",
    url: SITE_URL,
    logo: `${SITE_URL}/docshunt-assets/docshunt-logo-white.svg`,
    sameAs: ["https://www.instagram.com/docshunt.ai/"],
    contactPoint: {
      "@type": "ContactPoint",
      email: "yes-reply@docshunt.ai",
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
    name: "독스헌트",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE_URL,
    image: OG_IMAGE,
    description: DEFAULT_DESCRIPTION,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KRW",
      url: APP_URL,
    },
  };
}

export function blogListJsonLd(posts: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: BLOG_LIST_TITLE,
    description: BLOG_LIST_DESCRIPTION,
    url: absoluteUrl("/blog_list"),
    inLanguage: "ko-KR",
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: post.sourceUrl,
      datePublished: dateToIso(post.date),
      image: post.heroImage,
    })),
  };
}

export function articleJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url: post.sourceUrl,
    image: post.heroImage,
    datePublished: dateToIso(post.date),
    dateModified: dateToIso(post.date),
    inLanguage: "ko-KR",
    author: organizationJsonLd(),
    publisher: organizationJsonLd(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.sourceUrl,
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

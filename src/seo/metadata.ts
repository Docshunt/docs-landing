import type { Metadata } from "next";

import type { BlogPost } from "@/data/docshunt-blogs";

export const SITE_URL = "https://docshunt.ai";
export const APP_URL = "https://app.docshunt.ai";
export const CHANNEL_URL = "https://docshunt.channel.io";
export const CDN_URL = "https://4691947d26a9c64d254186f138cdee17.cdn.bubble.io";

export const SITE_NAME = "독스헌트 - 지원사업 전 양식 대응 사업계획서 AI";
export const DEFAULT_TITLE = "독스헌트 | 지원사업 공고 탐색부터 AI 사업계획서 작성까지";
export const DEFAULT_DESCRIPTION =
  "정부지원사업 공고를 찾고, 아이디어를 한글 양식에 맞는 사업계획서로 완성하세요. 독스헌트 AI가 공고 탐색부터 초안 작성과 수정까지 지원합니다.";
export const LANDING_OG_DESCRIPTION = "정부지원사업 공고 탐색부터 한글 양식 사업계획서 작성까지, 독스헌트 AI와 한 번에 준비하세요.";
export const TWITTER_TITLE = "독스헌트 | 지원사업 공고 탐색부터 AI 사업계획서 작성까지";
export const SEO_KEYWORDS = ["사업계획서", "사업계획서 예시", "사업계획서 AI", "사업계획서 작성", "창업", "독스헌트", "정부지원사업"];
export const OG_IMAGE = `${CDN_URL}/cdn-cgi/image/w=,h=,f=auto,dpr=1,fit=contain/f1766369335570x680703495650288900/OGimge.png`;
export const FAVICON_URL = `${CDN_URL}/f1757483516803x613112797294277800/favicon.ico`;
export const NAVER_SITE_VERIFICATION = "8b95bd75264aba5160dbc5493c948c6059c20628";
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-KGH2N9HZ";
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-71LW9PVQGN";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "946529364431115";

export const BLOG_LIST_TITLE = "사업계획서 AI 작성 팁 및 정부지원사업 합격 가이드 | 독스헌트 블로그";
export const BLOG_LIST_DESCRIPTION =
  "사업계획서 AI 활용법부터 최신 정부지원사업 한글 양식 대응 노하우까지, 창업 성공을 위한 모든 인사이트를 독스헌트 블로그에서 확인하세요. 예비 창업자를 위한 합격 예시와 실전 작성 팁을 매주 업데이트합니다.";
export const PRICING_TITLE = "요금제 | 독스헌트";
export const PRICING_DESCRIPTION = "내 사업의 지원사업 준비 방식에 맞는 독스헌트 플랜을 선택하세요.";
export const REFUND_EVENT_TITLE = "2026 지원사업 합격 시 환급 | 독스헌트";
export const REFUND_EVENT_DESCRIPTION =
  "연간 Pro 또는 Max 요금제로 지원사업을 준비하고 합격하면, 실제 결제한 구독료의 최대 50%를 환급받으세요.";

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
    "@id": `${SITE_URL}/#organization`,
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

export function webPageJsonLd({ name, description, path }: { name: string; description: string; path: string }) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "ko-KR",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function blogListJsonLd(posts: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${absoluteUrl("/blog_list")}#blog`,
    name: BLOG_LIST_TITLE,
    description: BLOG_LIST_DESCRIPTION,
    url: absoluteUrl("/blog_list"),
    inLanguage: "ko-KR",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
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
    "@id": `${post.sourceUrl}#article`,
    headline: post.title,
    description: post.description,
    url: post.sourceUrl,
    image: post.heroImage,
    datePublished: dateToIso(post.date),
    dateModified: dateToIso(post.date),
    inLanguage: "ko-KR",
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
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

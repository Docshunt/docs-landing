export type { BlogPost } from "./blog-posts/types";
export { BLOG_PAGE_COUNT, BLOG_POSTS } from "./blog-posts";

import { BLOG_POSTS } from "./blog-posts";
import type { BlogPost } from "./blog-posts/types";

const BLOG_TOPIC_GROUP_CONFIG = [
  {
    name: "사업계획서 작성법",
    summary: "문제 정의부터 실행·재무 계획까지 사업계획서를 순서대로 작성하는 방법",
    slugs: [
      "1783933805576x494076817525278100",
      "business-plan-market-size-tam-sam-som",
      "1777343094612x229953857115337000",
      "1778461267147x278620001529366040",
      "1769491692159x279117165603586050",
      "1755658221110x981594766116126700",
    ],
  },
  {
    name: "정부지원사업 찾기·신청",
    summary: "K-Startup과 기업마당에서 공고를 찾고 자격·서류·마감을 확인하는 방법",
    slugs: [
      "1780626861627x947397884088036900",
      "k-startup-application-guide",
      "startup-support-application-documents-checklist",
      "1755666879059x990557590876586000",
    ],
  },
  {
    name: "창업패키지별 가이드",
    summary: "예비·초기·도약 창업패키지의 공고와 준비 전략을 확인하는 가이드",
    slugs: ["2026qa-4", "2026d6023", "2026ai", "business-plan-reuse-support-program-guide"],
  },
  {
    name: "양식·예시",
    summary: "정부지원사업 양식의 목차를 읽고 샘플과 예시를 활용하는 방법",
    slugs: [
      "1777511331543x693426580638985500",
      "2026-4",
      "1755658221110x981594766116126700",
      "1778461267147x278620001529366040",
    ],
  },
  {
    name: "합격 전략·사례",
    summary: "근거와 실행력을 보강하는 작성 전략과 실제 지원사업 준비 사례",
    slugs: ["3-1", "2", "1770964843114x761947782936002600", "2026-2"],
  },
  {
    name: "독스헌트 활용법",
    summary: "사업계획서 AI로 초안 작성, 수정, 문서 자동화를 진행하는 방법",
    slugs: [
      "gpt-business-plan-rejection",
      "%EC%82%AC%EC%97%85%EA%B3%84%ED%9A%8D%EC%84%9C-ai-%EC%B6%94%EC%B2%9C",
      "gptvsai-2",
      "1763715641699x648859363769319400",
      "80",
    ],
  },
] as const;

export function decodeBlogSlug(slug: string) {
  try {
    return decodeURIComponent(slug);
  } catch {
    return slug;
  }
}

function hasSlug(post: BlogPost, slug: string) {
  return post.slug === slug || decodeBlogSlug(post.slug) === decodeBlogSlug(slug);
}

export const BLOG_TOPIC_GROUPS = BLOG_TOPIC_GROUP_CONFIG.map(({ name, summary, slugs }) => {
  const posts = slugs.map((slug) => BLOG_POSTS.find((post) => hasSlug(post, slug))).filter(
    (post): post is BlogPost => Boolean(post),
  );
  const hub = posts[0];

  if (!hub || posts.length !== slugs.length) {
    throw new Error(`BLOG_TOPIC_GROUP_CONFIG contains a missing blog post: ${name}`);
  }

  return { name, summary, hub, posts };
});

export const BLOG_TOPIC_HUBS = BLOG_TOPIC_GROUPS.map(({ hub }) => hub);

export function findBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => hasSlug(post, slug));
}

export function getRecommendedPosts(slug: string) {
  const topic = BLOG_TOPIC_GROUPS.find(({ posts }) => posts.some((post) => hasSlug(post, slug)));
  return (topic?.posts ?? BLOG_TOPIC_HUBS).filter((post) => !hasSlug(post, slug)).slice(0, 2);
}

export type { BlogPost } from "./blog-posts/types";
export { BLOG_PAGE_COUNT, BLOG_POSTS } from "./blog-posts";

import { BLOG_POSTS } from "./blog-posts";
import type { BlogPost } from "./blog-posts/types";

const BLOG_TOPIC_HUB_SLUGS = [
  "1777343094612x229953857115337000",
  "1780626861627x947397884088036900",
  "startup-support-application-documents-checklist",
];

const blogTopicHubs = BLOG_TOPIC_HUB_SLUGS.map((slug) => BLOG_POSTS.find((post) => post.slug === slug)).filter(
  (post): post is BlogPost => Boolean(post),
);

if (blogTopicHubs.length !== BLOG_TOPIC_HUB_SLUGS.length) {
  throw new Error("BLOG_TOPIC_HUB_SLUGS contains a missing blog post");
}

export const BLOG_TOPIC_HUBS = blogTopicHubs;

export function decodeBlogSlug(slug: string) {
  try {
    return decodeURIComponent(slug);
  } catch {
    return slug;
  }
}

export function findBlogPost(slug: string) {
  const decoded = decodeBlogSlug(slug);
  return BLOG_POSTS.find((post) => post.slug === slug || decodeBlogSlug(post.slug) === decoded);
}

export function getRecommendedPosts(slug: string) {
  const decoded = decodeBlogSlug(slug);
  return BLOG_TOPIC_HUBS.filter((post) => decodeBlogSlug(post.slug) !== decoded).slice(0, 2);
}

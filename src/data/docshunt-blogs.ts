export type { BlogPost } from "./blog-posts/types";
export { BLOG_PAGE_COUNT, BLOG_POSTS } from "./blog-posts";

import { BLOG_POSTS } from "./blog-posts";
import type { BlogPost } from "./blog-posts/types";

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
  const index = BLOG_POSTS.findIndex((post) => post.slug === slug || decodeBlogSlug(post.slug) === decodeBlogSlug(slug));
  if (index < 0) return BLOG_POSTS.slice(0, 2);
  return [BLOG_POSTS[(index + 1) % BLOG_POSTS.length], BLOG_POSTS[(index + 2) % BLOG_POSTS.length]].filter(
    (post): post is BlogPost => Boolean(post),
  );
}

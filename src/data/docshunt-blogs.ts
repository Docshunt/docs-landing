import { BLOG_POSTS as SOURCE_BLOG_POSTS } from "./blog-posts";
import { BLOG_CATEGORIES } from "./blog-posts/types";
import type { BlogCategory, CategorizedBlogPost } from "./blog-posts/types";

export type { BlogPost, BlogCategory, CategorizedBlogPost } from "./blog-posts/types";
export { BLOG_CATEGORIES };

export const BLOG_POSTS = SOURCE_BLOG_POSTS;
export const BLOG_POSTS_PER_PAGE = 10;
export const BLOG_PAGE_COUNT = Math.ceil(BLOG_POSTS.length / BLOG_POSTS_PER_PAGE);

export function decodeBlogSlug(slug: string) {
  try {
    return decodeURIComponent(slug);
  } catch {
    return slug;
  }
}

function hasSlug(post: CategorizedBlogPost, slug: string) {
  return post.slug === slug || decodeBlogSlug(post.slug) === decodeBlogSlug(slug);
}

export const BLOG_TOPIC_GROUPS = BLOG_CATEGORIES.map(({ id, label, summary }) => {
  const posts = BLOG_POSTS.filter((post) => post.category === id);
  const hub = posts[0];

  if (!hub) {
    throw new Error(`Blog category has no posts: ${id}`);
  }

  return { id, name: label, summary, hub, posts };
});

export const BLOG_TOPIC_HUBS = BLOG_TOPIC_GROUPS.map(({ hub }) => hub);

export function findBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => hasSlug(post, slug));
}

export function getRecommendedPosts(slug: string) {
  const currentPost = findBlogPost(slug);

  if (!currentPost) {
    return BLOG_TOPIC_HUBS;
  }

  return BLOG_POSTS.filter((post) => post.category === currentPost.category && !hasSlug(post, slug))
    .concat(BLOG_TOPIC_HUBS.filter((post) => post.category !== currentPost.category))
    .slice(0, 2);
}

export function getPostsByCategory(category?: BlogCategory) {
  return category ? BLOG_POSTS.filter((post) => post.category === category) : BLOG_POSTS;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogListClient } from "@/components/blog-list-client";
import { BlogHeader, DocshuntFooter } from "@/components/docshunt-blog-shell";
import { JsonLd } from "@/components/json-ld";
import { BLOG_CATEGORIES, BLOG_POSTS_PER_PAGE, getPostsByCategory, type BlogCategory } from "@/data/docshunt-blogs";
import { BLOG_LIST_DESCRIPTION, BLOG_LIST_TITLE, blogListJsonLd, buildPageMetadata } from "@/seo/metadata";

type BlogListPageProps = {
  searchParams: Promise<{ category?: string | string[]; page?: string | string[] }>;
};

function firstValue(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

function readCategory(value?: string | string[]) {
  const raw = firstValue(value);
  if (!raw) return undefined;

  return BLOG_CATEGORIES.some((category) => category.id === raw) ? (raw as BlogCategory) : null;
}

function pageCount(category?: BlogCategory) {
  return Math.max(1, Math.ceil(getPostsByCategory(category).length / BLOG_POSTS_PER_PAGE));
}

function readPage(value: string | string[] | undefined, category?: BlogCategory) {
  const raw = firstValue(value);
  if (!raw) return 1;

  const page = Number(raw);
  return Number.isInteger(page) && page >= 1 && page <= pageCount(category) ? page : undefined;
}

function blogListPath(page: number, category?: BlogCategory) {
  const params = new URLSearchParams();

  if (category) params.set("category", category);
  if (page > 1) params.set("page", String(page));

  const query = params.toString();
  return query ? "/blog_list?" + query : "/blog_list";
}

function blogListSeo(page: number, category?: BlogCategory) {
  const selectedCategory = category ? BLOG_CATEGORIES.find((item) => item.id === category) : undefined;
  return {
    title: selectedCategory
      ? selectedCategory.label + " | " + BLOG_LIST_TITLE
      : page === 1
        ? BLOG_LIST_TITLE
        : BLOG_LIST_TITLE + " - " + page + "페이지",
    description: selectedCategory?.summary ?? BLOG_LIST_DESCRIPTION,
  };
}

export async function generateMetadata({ searchParams }: BlogListPageProps): Promise<Metadata> {
  const params = await searchParams;
  const category = readCategory(params.category);
  const page = readPage(params.page, category ?? undefined) ?? 1;
  const { title, description } = blogListSeo(page, category ?? undefined);

  return buildPageMetadata({
    title,
    description,
    path: blogListPath(page, category ?? undefined),
  });
}

export default async function BlogListPage({ searchParams }: BlogListPageProps) {
  const params = await searchParams;
  const category = readCategory(params.category);

  if (category === null) notFound();

  const page = readPage(params.page, category);
  if (!page) notFound();

  const feedPosts = getPostsByCategory(category);
  const totalPages = pageCount(category);
  const posts = feedPosts.slice((page - 1) * BLOG_POSTS_PER_PAGE, page * BLOG_POSTS_PER_PAGE);
  const { title, description } = blogListSeo(page, category ?? undefined);

  return (
    <div className="page blog-page">
      <JsonLd data={blogListJsonLd(posts, page, blogListPath(page, category ?? undefined), title, description)} />
      <BlogHeader />
      <main className="blog-main">
        <BlogListClient category={category} page={page} posts={posts} totalPages={totalPages} totalPosts={feedPosts.length} />
      </main>
      <DocshuntFooter />
    </div>
  );
}

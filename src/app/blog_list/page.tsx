import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogListClient } from "@/components/blog-list-client";
import { BlogHeader, DocshuntFooter } from "@/components/docshunt-blog-shell";
import { JsonLd } from "@/components/json-ld";
import { BLOG_PAGE_COUNT, BLOG_POSTS } from "@/data/docshunt-blogs";
import { BLOG_LIST_DESCRIPTION, BLOG_LIST_TITLE, blogListJsonLd, buildPageMetadata } from "@/seo/metadata";

type BlogListPageProps = {
  searchParams: Promise<{ page?: string | string[] }>;
};

function readPage(value?: string | string[]) {
  const raw = Array.isArray(value) ? value[0] : value;
  if (!raw) return 1;
  const page = Number(raw);
  return Number.isInteger(page) && page >= 1 && page <= BLOG_PAGE_COUNT ? page : undefined;
}

export async function generateMetadata({ searchParams }: BlogListPageProps): Promise<Metadata> {
  const page = readPage((await searchParams).page) ?? 1;
  return buildPageMetadata({
    title: page === 1 ? BLOG_LIST_TITLE : `${BLOG_LIST_TITLE} - ${page}페이지`,
    description: BLOG_LIST_DESCRIPTION,
    path: page === 1 ? "/blog_list" : `/blog_list?page=${page}`,
  });
}

export default async function BlogListPage({ searchParams }: BlogListPageProps) {
  const page = readPage((await searchParams).page);
  if (!page) notFound();
  const posts = BLOG_POSTS.filter((post) => post.page === page);

  return (
    <div className="page blog-page">
      <JsonLd data={blogListJsonLd(posts, page)} />
      <BlogHeader />
      <main className="blog-main">
        <BlogListClient page={page} />
      </main>
      <DocshuntFooter />
    </div>
  );
}

import type { Metadata } from "next";

import { BlogListClient } from "@/components/blog-list-client";
import { BlogHeader, DocshuntFooter } from "@/components/docshunt-blog-shell";
import { JsonLd } from "@/components/json-ld";
import { BLOG_POSTS } from "@/data/docshunt-blogs";
import { BLOG_LIST_DESCRIPTION, BLOG_LIST_TITLE, blogListJsonLd, buildPageMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: BLOG_LIST_TITLE,
  description: BLOG_LIST_DESCRIPTION,
  path: "/blog_list",
});

export default function BlogListPage() {
  return (
    <div className="page blog-page">
      <JsonLd data={blogListJsonLd(BLOG_POSTS)} />
      <BlogHeader />
      <main className="blog-main">
        <BlogListClient />
      </main>
      <DocshuntFooter />
    </div>
  );
}

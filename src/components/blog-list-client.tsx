"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { BLOG_PAGE_COUNT, BLOG_POSTS } from "@/data/docshunt-blogs";

function blogHref(slug: string) {
  return `/blog_detail/${slug}`;
}

export function BlogListClient() {
  const [page, setPage] = useState(1);
  const posts = useMemo(() => BLOG_POSTS.filter((post) => post.page === page), [page]);

  return (
    <section className="blog-list-section" aria-labelledby="blog-list-title">
      <h1 className="blog-list-title" id="blog-list-title">
        블로그
      </h1>
      <div className="blog-list-items">
        {posts.map((post) => (
          <Link className="blog-list-row" href={blogHref(post.slug)} key={post.slug}>
            <article className="blog-list-copy">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <time>{post.date}</time>
            </article>
            <img className="blog-list-thumb" src={post.image} alt="" loading="lazy" />
          </Link>
        ))}
      </div>
      <nav className="blog-pagination" aria-label="블로그 페이지">
        <button type="button" aria-label="이전 페이지" disabled={page === 1} onClick={() => setPage((value) => Math.max(1, value - 1))}>
          &lt;
        </button>
        {Array.from({ length: BLOG_PAGE_COUNT }, (_, index) => index + 1).map((pageNumber) => (
          <button
            className={pageNumber === page ? "is-active" : ""}
            type="button"
            aria-current={pageNumber === page ? "page" : undefined}
            key={pageNumber}
            onClick={() => setPage(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        <button
          type="button"
          aria-label="다음 페이지"
          disabled={page === BLOG_PAGE_COUNT}
          onClick={() => setPage((value) => Math.min(BLOG_PAGE_COUNT, value + 1))}
        >
          &gt;
        </button>
      </nav>
    </section>
  );
}

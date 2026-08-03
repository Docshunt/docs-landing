import Link from "next/link";

import { BLOG_PAGE_COUNT, BLOG_POSTS } from "@/data/docshunt-blogs";

function blogHref(slug: string) {
  return `/blog_detail/${slug}`;
}

function pageHref(page: number) {
  return page === 1 ? "/blog_list" : `/blog_list?page=${page}`;
}

export function BlogListClient({ page }: { page: number }) {
  const posts = BLOG_POSTS.filter((post) => post.page === page);

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
            <img className="blog-list-thumb" src={post.image} alt={`${post.title} 대표 이미지`} loading="lazy" />
          </Link>
        ))}
      </div>
      <nav className="blog-pagination" aria-label="블로그 페이지">
        {page === 1 ? (
          <span className="is-disabled" aria-hidden="true">
            &lt;
          </span>
        ) : (
          <Link href={pageHref(page - 1)} aria-label="이전 페이지">
            &lt;
          </Link>
        )}
        {Array.from({ length: BLOG_PAGE_COUNT }, (_, index) => index + 1).map((pageNumber) => (
          <Link
            className={pageNumber === page ? "is-active" : ""}
            aria-current={pageNumber === page ? "page" : undefined}
            href={pageHref(pageNumber)}
            key={pageNumber}
          >
            {pageNumber}
          </Link>
        ))}
        {page === BLOG_PAGE_COUNT ? (
          <span className="is-disabled" aria-hidden="true">
            &gt;
          </span>
        ) : (
          <Link href={pageHref(page + 1)} aria-label="다음 페이지">
            &gt;
          </Link>
        )}
      </nav>
    </section>
  );
}

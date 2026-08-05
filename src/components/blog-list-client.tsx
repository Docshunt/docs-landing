import Link from "next/link";

import { BlogChannelMobileMenu } from "@/components/blog-channel-mobile-menu";
import { BLOG_CATEGORIES, BLOG_POSTS, getPostsByCategory, type BlogCategory, type CategorizedBlogPost } from "@/data/docshunt-blogs";

function blogHref(slug: string) {
  return "/blog_detail/" + slug;
}

function listHref(page: number, category?: BlogCategory) {
  if (!category) {
    return page === 1 ? "/blog_list" : "/blog_list?page=" + String(page);
  }

  const params = new URLSearchParams();

  params.set("category", category);
  if (page > 1) params.set("page", String(page));

  const query = params.toString();
  return query ? "/blog_list?" + query : "/blog_list";
}

function topicId(category: BlogCategory) {
  return "blog-category-" + category;
}

function topicHref(category: BlogCategory, hasPreviewAnchors: boolean) {
  const hash = "#" + topicId(category);
  return hasPreviewAnchors ? hash : "/blog_list" + hash;
}

function getFeaturedPosts() {
  return BLOG_POSTS.filter((post) => post.featuredSection === "interviews").sort(
    (left, right) => (left.featuredRank ?? Infinity) - (right.featuredRank ?? Infinity),
  );
}

function BlogPostCard({ post, className }: { post: CategorizedBlogPost; className: string }) {
  return (
    <Link className={className} href={blogHref(post.slug)}>
      <article>
        <div className="blog-channel-card-image">
          <img src={post.image} alt={post.title + " 대표 이미지"} loading="lazy" />
        </div>
        <div className="blog-channel-card-copy">
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <time>{post.date}</time>
        </div>
      </article>
    </Link>
  );
}

function BlogCategoryPreview({ category }: { category: (typeof BLOG_CATEGORIES)[number] }) {
  const posts = getPostsByCategory(category.id).slice(0, 3);

  return (
    <section
      className="blog-channel-section blog-channel-category-section"
      id={topicId(category.id)}
      aria-labelledby={topicId(category.id) + "-title"}
    >
      <div className="blog-channel-section-heading blog-channel-category-heading">
        <div>
          <h2 id={topicId(category.id) + "-title"}>{category.label}</h2>
          <p>{category.summary}</p>
        </div>
        <Link className="blog-channel-category-more" href={listHref(1, category.id)}>
          모두 보기 <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="blog-channel-card-grid">
        {posts.map((post) => (
          <BlogPostCard className="blog-channel-card blog-feed-card" key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}

export function BlogListClient({
  page,
  category,
  posts,
  totalPages,
  totalPosts,
}: {
  page: number;
  category?: BlogCategory | undefined;
  posts: CategorizedBlogPost[];
  totalPages: number;
  totalPosts: number;
}) {
  const selectedCategory = BLOG_CATEGORIES.find((item) => item.id === category);
  const recommendedPosts = getFeaturedPosts().slice(0, 4);
  const [leadPost, ...supportingPosts] = recommendedPosts;
  const latestPosts = BLOG_POSTS.filter((post) => !recommendedPosts.some((recommendedPost) => recommendedPost.slug === post.slug)).slice(
    0,
    4,
  );
  const [latestLeadPost, ...latestSupportingPosts] = latestPosts;
  const isHomePage = !category && page === 1;

  return (
    <section className="blog-list-section" aria-labelledby="blog-list-title">
      <div className="blog-channel-layout">
        <aside className="blog-channel-sidebar" aria-label="블로그 분류">
          <h1 className="blog-list-title" id="blog-list-title">
            <span>독스헌트</span>
            <span>블로그</span>
          </h1>
          <nav className="blog-channel-sidebar-nav">
            <Link className={!category ? "is-active" : undefined} href="/blog_list" aria-current={!category ? "page" : undefined}>
              홈
            </Link>
            {BLOG_CATEGORIES.map((item) => (
              <Link
                className={category === item.id ? "is-active" : undefined}
                href={topicHref(item.id, isHomePage)}
                key={item.id}
                aria-current={category === item.id ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <div className="blog-channel-content">
          <BlogChannelMobileMenu category={category} isHomePage={isHomePage} />

          {!category && leadPost ? (
            <section className="blog-channel-section" aria-labelledby="blog-recommendation-title">
              <div className="blog-channel-section-heading">
                <h2 id="blog-recommendation-title">추천 아티클</h2>
              </div>
              <Link className="blog-channel-featured-lead" href={blogHref(leadPost.slug)}>
                <article className="blog-channel-featured-lead-content">
                  <div className="blog-channel-card-image">
                    <img src={leadPost.heroImage} alt={leadPost.title + " 대표 이미지"} loading="lazy" />
                  </div>
                  <div className="blog-channel-card-copy">
                    <h3>{leadPost.title}</h3>
                    <p>{leadPost.description}</p>
                    <time>{leadPost.date}</time>
                  </div>
                </article>
              </Link>
              <div className="blog-channel-card-grid">
                {supportingPosts.map((post) => (
                  <BlogPostCard className="blog-channel-card" key={post.slug} post={post} />
                ))}
              </div>
            </section>
          ) : null}

          {!category && latestLeadPost ? (
            <section className="blog-channel-section" aria-labelledby="blog-latest-title">
              <div className="blog-channel-section-heading">
                <h2 id="blog-latest-title">최신 아티클</h2>
              </div>
              <Link className="blog-channel-featured-lead" href={blogHref(latestLeadPost.slug)}>
                <article className="blog-channel-featured-lead-content">
                  <div className="blog-channel-card-image">
                    <img src={latestLeadPost.heroImage} alt={latestLeadPost.title + " 대표 이미지"} loading="lazy" />
                  </div>
                  <div className="blog-channel-card-copy">
                    <h3>{latestLeadPost.title}</h3>
                    <p>{latestLeadPost.description}</p>
                    <time>{latestLeadPost.date}</time>
                  </div>
                </article>
              </Link>
              <div className="blog-channel-card-grid">
                {latestSupportingPosts.map((post) => (
                  <BlogPostCard className="blog-channel-card" key={post.slug} post={post} />
                ))}
              </div>
            </section>
          ) : null}

          {!isHomePage ? (
            <section className="blog-channel-section" aria-labelledby="blog-feed-title">
              <div className="blog-channel-section-heading">
                <div>
                  <h2 id="blog-feed-title">{selectedCategory?.label ?? "전체 아티클"}</h2>
                  <p>{totalPosts}개의 글</p>
                </div>
              </div>
              <div className="blog-channel-card-grid">
                {posts.map((post) => (
                  <BlogPostCard className="blog-channel-card blog-feed-card" key={post.slug} post={post} />
                ))}
              </div>
              {totalPages > 1 ? (
                <nav className="blog-pagination blog-channel-pagination" aria-label="블로그 페이지">
                  {page === 1 ? (
                    <span className="is-disabled" aria-hidden="true">
                      &lt;
                    </span>
                  ) : (
                    <Link href={listHref(page - 1, category)} aria-label="이전 페이지">
                      &lt;
                    </Link>
                  )}
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                    <Link
                      className={pageNumber === page ? "is-active" : ""}
                      aria-current={pageNumber === page ? "page" : undefined}
                      href={listHref(pageNumber, category)}
                      key={pageNumber}
                    >
                      {pageNumber}
                    </Link>
                  ))}
                  {page === totalPages ? (
                    <span className="is-disabled" aria-hidden="true">
                      &gt;
                    </span>
                  ) : (
                    <Link href={listHref(page + 1, category)} aria-label="다음 페이지">
                      &gt;
                    </Link>
                  )}
                </nav>
              ) : null}
            </section>
          ) : (
            BLOG_CATEGORIES.map((item) => <BlogCategoryPreview category={item} key={item.id} />)
          )}
        </div>
      </div>
    </section>
  );
}

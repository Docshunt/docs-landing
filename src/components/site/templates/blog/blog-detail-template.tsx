import { BlogPageShell } from "@/components/site/layout/blog-page-shell";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { BLOG_CONTENT_HTML } from "@/data/docshunt-blog-content";
import { BLOG_POSTS, BLOG_TOPIC_GROUPS, decodeBlogSlug, findBlogPost, getRecommendedPosts } from "@/data/docshunt-blogs";
import { APP_URL, articleJsonLd, BLOG_AUTHOR_NAME, BLOG_AUTHOR_PATH, breadcrumbJsonLd, buildPageMetadata, dateToIso } from "@/seo/metadata";

type BlogDetailParams = {
  params: Promise<{
    slug: string;
  }>;
};

function detailHref(slug: string) {
  return `/blog_detail/${slug}`;
}

function isHeading(line: string) {
  return (
    /^\d+\.\s/.test(line) ||
    /^Q\.\s/.test(line) ||
    /^A\.\s/.test(line) ||
    (line.length <= 46 && /(?:방법|이유|전략|정리|체크리스트|가이드|마무리|결론|확인|준비|선정|선택)$/.test(line))
  );
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: decodeBlogSlug(post.slug) }));
}

export async function generateMetadata({ params }: BlogDetailParams): Promise<Metadata> {
  const { slug } = await params;
  const post = findBlogPost(slug);
  if (!post) return {};
  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: post.sourceUrl,
    image: post.heroImage,
    type: "article",
    ...(post.seo ? { keywords: [post.seo.mainKeyword, ...post.seo.supportKeywords] } : {}),
  });
}

export async function BlogDetailPageTemplate({ params }: BlogDetailParams) {
  const { slug } = await params;
  const post = findBlogPost(slug);
  if (!post) notFound();

  const rawContentHtml = post.contentHtml ?? BLOG_CONTENT_HTML[post.slug] ?? BLOG_CONTENT_HTML[decodeBlogSlug(post.slug)];
  const contentHtml = rawContentHtml?.includes("dh-seo-post-legacy")
    ? rawContentHtml.replace(/<style>[\s\S]*?<\/style>/, "")
    : rawContentHtml;
  const hasContentCta = contentHtml?.includes('class="dh-cta-button"') ?? false;
  const recommendedPosts = getRecommendedPosts(post.slug);
  const recommendationCards = recommendedPosts.map((recommended) => ({
    image: recommended.image,
    title: recommended.title,
    href: detailHref(recommended.slug),
  }));
  const topicHubs = BLOG_TOPIC_GROUPS.filter(({ hub }) => hub.slug !== post.slug);

  return (
    <BlogPageShell mainClassName="blog-detail-main" pageClassName="blog-detail-page">
      <JsonLd data={articleJsonLd(post)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "홈", path: "/" },
          { name: "블로그", path: "/blog_list" },
          { name: post.title, path: post.sourceUrl },
        ])}
      />
      <article className="blog-detail-article">
        <h1>
          {post.titleLines
            ? post.titleLines.map((line, index) => (
                <span key={`${line}-${index}`}>
                  {index > 0 ? (
                    <br className={post.titleLineBreaks === "always" ? "blog-title-break" : "blog-title-desktop-break"} />
                  ) : null}
                  {index > 0 ? " " : null}
                  {line}
                </span>
              ))
            : post.title}
        </h1>
        <div className="blog-post-meta">
          <span>
            작성·검수 <Link href={BLOG_AUTHOR_PATH}>{post.author ?? BLOG_AUTHOR_NAME}</Link>
          </span>
          <time dateTime={dateToIso(post.date)}>게시 {post.date}</time>
          {post.modifiedDate && post.modifiedDate !== post.date ? (
            <time dateTime={dateToIso(post.modifiedDate)}>수정 {post.modifiedDate}</time>
          ) : null}
        </div>
        {post.videoEmbedUrl ? (
          <div className="blog-detail-video">
            <iframe
              src={post.videoEmbedUrl}
              title={post.videoTitle ?? `${post.title} 인터뷰 영상`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        ) : (
          <img className="blog-detail-hero" src={post.heroImage} alt={`${post.title} 대표 이미지`} />
        )}
        <div className="blog-detail-body">
          {contentHtml ? (
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          ) : (
            post.paragraphs.map((line, index) =>
              isHeading(line) ? <h2 key={`${line}-${index}`}>{line}</h2> : <p key={`${line}-${index}`}>{line}</p>,
            )
          )}
        </div>
        {post.verification ? (
          <details className="blog-verification">
            <summary>작성 기준 및 출처 · {post.verification.date}</summary>
            <p>{post.verification.note}</p>
            <ul>
              {post.verification.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        ) : null}
        <nav className="blog-topic-hubs" aria-labelledby="topic-hubs-title">
          <h2 id="topic-hubs-title">주제별 핵심 가이드</h2>
          <ul>
            {topicHubs.map((topic) => (
              <li key={topic.name}>
                <Link href={detailHref(topic.hub.slug)}>
                  <strong>{topic.name}</strong>
                  <span>{topic.hub.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {!hasContentCta ? (
          <section className="blog-detail-cta" aria-label="독스헌트 시작하기">
            <p>단 몇 분만에, 전문가가 쓴 듯한 사업계획서를 만들어보세요.</p>
            <a href={APP_URL}>무료 생성하기</a>
          </section>
        ) : null}
        <section className="blog-recommended" aria-labelledby="recommended-title">
          <h2 id="recommended-title">추천 포스트</h2>
          <div className="recommended-grid">
            {recommendationCards.map((recommended) => (
              <Link className="recommended-card" href={recommended.href} key={recommended.href}>
                <img src={recommended.image} alt={`${recommended.title} 대표 이미지`} loading="lazy" />
                <span>{recommended.title}</span>
              </Link>
            ))}
          </div>
          <Link className="blog-home-link" href="/blog_list">
            블로그 홈
          </Link>
        </section>
      </article>
    </BlogPageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogHeader, DocshuntFooter } from "@/components/docshunt-blog-shell";
import { JsonLd } from "@/components/json-ld";
import { BLOG_CONTENT_HTML } from "@/data/docshunt-blog-content";
import { BLOG_POSTS, BLOG_TOPIC_HUBS, decodeBlogSlug, findBlogPost, getRecommendedPosts } from "@/data/docshunt-blogs";
import { articleJsonLd, breadcrumbJsonLd, buildPageMetadata, dateToIso } from "@/seo/metadata";

const startUrl = "https://app.docshunt.ai";

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
  });
}

export default async function BlogDetailPage({ params }: BlogDetailParams) {
  const { slug } = await params;
  const post = findBlogPost(slug);
  if (!post) notFound();

  const contentHtml = BLOG_CONTENT_HTML[post.slug] ?? BLOG_CONTENT_HTML[decodeBlogSlug(post.slug)];
  const recommendedPosts = getRecommendedPosts(post.slug);
  const recommendationCards = recommendedPosts.map((recommended) => ({
    image: recommended.image,
    title: recommended.title,
    href: detailHref(recommended.slug),
  }));
  const topicHubs = BLOG_TOPIC_HUBS.filter((hub) => hub.slug !== post.slug);

  return (
    <div className="page blog-page blog-detail-page">
      <JsonLd data={articleJsonLd(post)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "홈", path: "/" },
          { name: "블로그", path: "/blog_list" },
          { name: post.title, path: post.sourceUrl },
        ])}
      />
      <BlogHeader />
      <main className="blog-detail-main">
        <article className="blog-detail-article">
          <h1>{post.title}</h1>
          <time dateTime={dateToIso(post.date)}>{post.date}</time>
          {post.modifiedDate && post.modifiedDate !== post.date ? (
            <time dateTime={dateToIso(post.modifiedDate)}>최종 수정 {post.modifiedDate}</time>
          ) : null}
          <img className="blog-detail-hero" src={post.heroImage} alt={`${post.title} 대표 이미지`} />
          <div className="blog-detail-body">
            {contentHtml ? (
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            ) : (
              post.paragraphs.map((line, index) =>
                isHeading(line) ? <h2 key={`${line}-${index}`}>{line}</h2> : <p key={`${line}-${index}`}>{line}</p>,
              )
            )}
          </div>
          <nav className="blog-topic-hubs" aria-labelledby="topic-hubs-title">
            <h2 id="topic-hubs-title">주제별 핵심 가이드</h2>
            <ul>
              {topicHubs.map((hub) => (
                <li key={hub.slug}>
                  <Link href={detailHref(hub.slug)}>{hub.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <section className="blog-detail-cta" aria-label="독스헌트 시작하기">
            <p>단 몇 분만에, 전문가가 쓴 듯한 사업계획서를 만들어보세요.</p>
            <a href={startUrl}>무료 생성하기</a>
          </section>
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
      </main>
      <DocshuntFooter />
    </div>
  );
}

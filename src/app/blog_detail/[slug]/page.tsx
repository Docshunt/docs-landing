import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogHeader, DocshuntFooter } from "@/components/docshunt-blog-shell";
import { JsonLd } from "@/components/json-ld";
import { BLOG_CONTENT_HTML } from "@/data/docshunt-blog-content";
import { BLOG_RECOMMENDATION_IMAGES } from "@/data/docshunt-blog-recommendations";
import { BLOG_POSTS, decodeBlogSlug, findBlogPost, getRecommendedPosts } from "@/data/docshunt-blogs";
import { articleJsonLd, breadcrumbJsonLd, buildPageMetadata } from "@/seo/metadata";

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
  const recommendationImages = BLOG_RECOMMENDATION_IMAGES[post.slug] ?? [];
  const recommendationCards = (
    recommendationImages.length ? recommendationImages : recommendedPosts.map((recommended) => recommended.image)
  ).map((image, index) => ({
    image,
    href: detailHref(recommendedPosts[index]?.slug ?? recommendedPosts[0]?.slug ?? post.slug),
  }));

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
          <time>{post.date}</time>
          <img className="blog-detail-hero" src={post.heroImage} alt="" />
          <div className="blog-detail-body">
            {contentHtml ? (
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            ) : (
              post.paragraphs.map((line, index) =>
                isHeading(line) ? <h2 key={`${line}-${index}`}>{line}</h2> : <p key={`${line}-${index}`}>{line}</p>,
              )
            )}
          </div>
          <section className="blog-detail-cta" aria-label="독스헌트 시작하기">
            <p>단 몇 분만에, 전문가가 쓴 듯한 사업계획서를 만들어보세요.</p>
            <a href={startUrl}>무료 생성하기</a>
          </section>
          <section className="blog-recommended" aria-labelledby="recommended-title">
            <h2 id="recommended-title">추천 포스트</h2>
            <div className="recommended-grid">
              {recommendationCards.map((recommended, index) => (
                <Link className="recommended-card" href={recommended.href} key={`${recommended.image}-${index}`}>
                  <img src={recommended.image} alt="" loading="lazy" />
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

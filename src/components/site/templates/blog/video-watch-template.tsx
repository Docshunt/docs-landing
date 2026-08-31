import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { BlogPageShell } from "@/components/site/layout/blog-page-shell";
import { BLOG_POSTS, decodeBlogSlug, findBlogPost } from "@/data/docshunt-blogs";
import { breadcrumbJsonLd, buildPageMetadata, videoObjectJsonLd, videoThumbnailUrl, videoWatchPath } from "@/seo/metadata";

type VideoWatchParams = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.filter((post) => post.videoEmbedUrl).map((post) => ({ slug: decodeBlogSlug(post.slug) }));
}

export async function generateMetadata({ params }: VideoWatchParams): Promise<Metadata> {
  const { slug } = await params;
  const post = findBlogPost(slug);
  if (!post?.videoEmbedUrl) return {};

  return buildPageMetadata({
    title: post.videoTitle ?? `${post.title} 영상`,
    description: post.description,
    path: videoWatchPath(post.slug),
    image: videoThumbnailUrl(post),
    type: "article",
    ...(post.seo ? { keywords: [post.seo.mainKeyword, ...post.seo.supportKeywords] } : {}),
  });
}

export async function VideoWatchPageTemplate({ params }: VideoWatchParams) {
  const { slug } = await params;
  const post = findBlogPost(slug);
  if (!post?.videoEmbedUrl) notFound();

  const video = videoObjectJsonLd(post);
  if (!video) notFound();

  return (
    <BlogPageShell mainClassName="blog-detail-main" pageClassName="video-watch-page">
      <JsonLd data={video} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "홈", path: "/" },
          { name: "블로그", path: "/blog_list" },
          { name: video.name, path: videoWatchPath(post.slug) },
        ])}
      />
      <article className="blog-detail-article video-watch-article">
        <p className="video-watch-kicker">독스헌트 인터뷰 영상</p>
        <h1>{video.name}</h1>
        <p className="video-watch-description">{post.description}</p>
        <div className="blog-detail-video">
          <iframe
            src={post.videoEmbedUrl}
            title={video.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="video-watch-meta">
          <time dateTime={video.uploadDate}>게시 {post.date}</time>
          <Link href={post.sourceUrl}>관련 인터뷰 글 읽기 →</Link>
        </div>
      </article>
    </BlogPageShell>
  );
}

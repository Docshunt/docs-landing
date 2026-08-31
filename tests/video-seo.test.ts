import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

type JsonLd = Record<string, unknown>;
type MetadataModule = {
  videoObjectJsonLd(post: object): JsonLd | undefined;
  videoWatchPath(slug: string): string;
};

const require = createRequire(import.meta.url);
const { videoObjectJsonLd, videoWatchPath } = require("../src/seo/metadata.ts") as MetadataModule;

const postWithVideo = {
  page: 1,
  index: 1,
  slug: "video-seo-fixture",
  sourceUrl: "https://docshunt.ai/blog_detail/video-seo-fixture",
  title: "영상 SEO 테스트 글",
  description: "영상 SEO 구조화 데이터 테스트용 글입니다.",
  date: "2026.08.06",
  image: "/fixture-list.jpg",
  heroImage: "/fixture-hero.jpg",
  videoEmbedUrl: "https://www.youtube-nocookie.com/embed/2pamKM3ZhCQ?rel=0",
  videoTitle: "영상 SEO 테스트 인터뷰",
  paragraphs: ["테스트"],
};

const postWithoutVideo = {
  ...postWithVideo,
  slug: "no-video-fixture",
  sourceUrl: "https://docshunt.ai/blog_detail/no-video-fixture",
  videoEmbedUrl: undefined,
  videoTitle: undefined,
};

test("adds a complete VideoObject to video interview article metadata", () => {
  const video = videoObjectJsonLd(postWithVideo);
  assert.ok(video);

  assert.equal(video["@type"], "VideoObject");
  assert.equal(video.name, postWithVideo.videoTitle);
  assert.equal(video.description, postWithVideo.description);
  assert.equal(video.thumbnailUrl, "https://docshunt.ai/fixture-hero.jpg");
  assert.equal(video.uploadDate, "2026-08-06");
  assert.equal(video.embedUrl, postWithVideo.videoEmbedUrl);
  assert.equal(video.url, `https://docshunt.ai/video/${postWithVideo.slug}`);
});

test("does not add video metadata to articles without an embedded video", () => {
  assert.equal(videoObjectJsonLd(postWithoutVideo), undefined);
});

test("uses an encoded dedicated watch path", () => {
  assert.equal(videoWatchPath("한글 인터뷰"), "/video/%ED%95%9C%EA%B8%80%20%EC%9D%B8%ED%84%B0%EB%B7%B0");
});

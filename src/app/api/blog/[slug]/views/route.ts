import { NextResponse } from "next/server";

import { findBlogPost } from "@/data/docshunt-blogs";
import { getBlogView, incrementBlogView, isBlogViewCounterConfigured } from "@/server/blog-views";

const NO_STORE_HEADERS = { "Cache-Control": "no-store" };
const VIEW_CACHE_HEADERS = {
  "Cache-Control": "public, max-age=600",
  "Vercel-CDN-Cache-Control": "public, max-age=600, stale-while-revalidate=300",
};

type RouteContext = {
  params: Promise<{ slug: string }>;
};

type BlogPostResolution = { post: NonNullable<ReturnType<typeof findBlogPost>> } | { error: string; status: 400 | 404 };

function noContent() {
  return new Response(null, { status: 204, headers: NO_STORE_HEADERS });
}

function errorResponse(error: string, status: 400 | 404) {
  return NextResponse.json({ error }, { status, headers: NO_STORE_HEADERS });
}

function resolveBlogPost(slug: string): BlogPostResolution {
  if (slug.length === 0 || slug.length > 200) {
    return { error: "Invalid blog slug", status: 400 };
  }

  const post = findBlogPost(slug);
  return post ? { post } : { error: "Blog post not found", status: 404 };
}

export async function GET(_: Request, { params }: RouteContext) {
  const { slug } = await params;
  const result = resolveBlogPost(slug);
  if ("error" in result) return errorResponse(result.error, result.status);
  if (!isBlogViewCounterConfigured()) return noContent();

  try {
    const views = await getBlogView(result.post.slug);
    return NextResponse.json({ views }, { headers: VIEW_CACHE_HEADERS });
  } catch (error) {
    console.error("Blog view read failed", error instanceof Error ? error.message : "Unknown error");
    return new Response(null, { status: 503, headers: NO_STORE_HEADERS });
  }
}

export async function POST(_: Request, { params }: RouteContext) {
  const { slug } = await params;
  const result = resolveBlogPost(slug);
  if ("error" in result) return errorResponse(result.error, result.status);
  if (!isBlogViewCounterConfigured()) return noContent();

  try {
    await incrementBlogView(result.post.slug);
    return noContent();
  } catch (error) {
    console.error("Blog view increment failed", error instanceof Error ? error.message : "Unknown error");
    return new Response(null, { status: 503, headers: NO_STORE_HEADERS });
  }
}

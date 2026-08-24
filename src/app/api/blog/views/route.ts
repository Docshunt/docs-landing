import { NextResponse } from "next/server";

import { findBlogPost } from "@/data/docshunt-blogs";
import { incrementBlogView, isBlogViewCounterConfigured } from "@/server/blog-views";

export const dynamic = "force-dynamic";

function noContent() {
  return new Response(null, {
    status: 204,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (typeof body !== "object" || body === null || !("slug" in body) || typeof body.slug !== "string") {
    return NextResponse.json({ error: "A blog slug is required" }, { status: 400 });
  }

  const slug = body.slug;
  if (slug.length === 0 || slug.length > 200) {
    return NextResponse.json({ error: "Invalid blog slug" }, { status: 400 });
  }

  const post = findBlogPost(slug);
  if (!post) return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
  if (!isBlogViewCounterConfigured()) return noContent();

  try {
    const viewCount = await incrementBlogView(post.slug);
    return NextResponse.json({ viewCount }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Blog view increment failed", error instanceof Error ? error.message : "Unknown error");
    return new Response(null, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}

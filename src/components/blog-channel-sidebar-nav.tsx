"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { BLOG_CATEGORIES } from "@/data/blog-posts/types";
import type { BlogCategory } from "@/data/blog-posts/types";

function topicId(category: BlogCategory) {
  return "blog-category-" + category;
}

function topicHref(category: BlogCategory, hasPreviewAnchors: boolean) {
  const hash = "#" + topicId(category);
  return hasPreviewAnchors ? hash : "/blog_list" + hash;
}

function readHashCategory() {
  const hash = window.location.hash;
  return BLOG_CATEGORIES.find((item) => hash === "#" + topicId(item.id))?.id;
}

export function BlogChannelSidebarNav({ category, isHomePage }: { category?: BlogCategory | undefined; isHomePage: boolean }) {
  const [hashCategory, setHashCategory] = useState<BlogCategory | undefined>();

  useEffect(() => {
    const syncHashCategory = () => setHashCategory(readHashCategory());

    syncHashCategory();
    window.addEventListener("hashchange", syncHashCategory);
    return () => window.removeEventListener("hashchange", syncHashCategory);
  }, []);

  const activeCategory = hashCategory ?? category;

  return (
    <nav className="blog-channel-sidebar-nav">
      <Link
        className={!activeCategory ? "is-active" : undefined}
        href="/blog_list"
        aria-current={!activeCategory ? "page" : undefined}
        onClick={() => setHashCategory(undefined)}
      >
        홈
      </Link>
      {BLOG_CATEGORIES.map((item) => (
        <Link
          className={activeCategory === item.id ? "is-active" : undefined}
          href={topicHref(item.id, isHomePage)}
          key={item.id}
          aria-current={activeCategory === item.id ? "page" : undefined}
          onClick={() => setHashCategory(item.id)}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

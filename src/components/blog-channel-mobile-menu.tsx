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

export function BlogChannelMobileMenu({ category, isHomePage }: { category?: BlogCategory | undefined; isHomePage: boolean }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentTopicLabel = BLOG_CATEGORIES.find((item) => item.id === category)?.label ?? "홈";

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <div className="blog-channel-mobile-menu">
      <button
        className="blog-channel-mobile-trigger"
        type="button"
        aria-expanded={isMobileMenuOpen}
        aria-controls="blog-channel-mobile-dialog"
        onClick={() => setIsMobileMenuOpen((open) => !open)}
      >
        <span>{currentTopicLabel}</span>
        <span aria-hidden="true">⌄</span>
      </button>
      {isMobileMenuOpen ? (
        <div className="blog-channel-mobile-dialog" id="blog-channel-mobile-dialog">
          <Link
            className={!category ? "is-active" : undefined}
            href="/blog_list"
            aria-current={!category ? "page" : undefined}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            홈
          </Link>
          {BLOG_CATEGORIES.map((item) => (
            <Link
              className={category === item.id ? "is-active" : undefined}
              href={topicHref(item.id, isHomePage)}
              key={item.id}
              aria-current={category === item.id ? "page" : undefined}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

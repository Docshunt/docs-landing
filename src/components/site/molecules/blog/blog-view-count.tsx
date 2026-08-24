"use client";

import { useEffect, useRef, useState } from "react";

const VIEW_DEDUPE_WINDOW_MS = 60 * 60 * 1000;

type BlogViewCountProps = {
  slug: string;
};

function shouldRecordView(slug: string) {
  const key = `docshunt:blog-view:${slug}`;
  const now = Date.now();

  try {
    const previous = Number(window.localStorage.getItem(key));
    if (Number.isSafeInteger(previous) && previous > 0 && now >= previous && now - previous < VIEW_DEDUPE_WINDOW_MS) {
      return false;
    }

    window.localStorage.setItem(key, String(now));
  } catch {
    // ponytail: client-only dedupe; add server rate limiting if view-count integrity becomes important.
  }

  return true;
}

export function BlogViewCount({ slug }: BlogViewCountProps) {
  const requestedSlug = useRef<string | null>(null);
  const [viewCount, setViewCount] = useState<number | null>(null);

  useEffect(() => {
    if (requestedSlug.current === slug) return;
    requestedSlug.current = slug;
    let cancelled = false;
    const endpoint = `/api/blog/${encodeURIComponent(slug)}/views`;
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 1500);

    void fetch(endpoint, { signal: controller.signal })
      .then(async (response) => {
        if (cancelled || response.status === 204 || !response.ok) return;

        const payload = (await response.json()) as { views?: unknown };
        const count = typeof payload.views === "number" ? payload.views : Number(payload.views);
        if (!cancelled && Number.isSafeInteger(count) && count >= 0) setViewCount(count);
      })
      .catch(() => undefined);

    if (shouldRecordView(slug)) {
      void fetch(endpoint, { method: "POST", keepalive: true, cache: "no-store" }).catch(() => undefined);
    }

    return () => {
      cancelled = true;
      controller.abort();
      window.clearTimeout(timeoutId);
    };
  }, [slug]);

  const visible = viewCount !== null;
  const formattedCount = visible ? viewCount.toLocaleString("ko-KR") : "";
  return (
    <span
      className="blog-view-count"
      data-visible={visible}
      aria-hidden={!visible}
      aria-label={visible ? `조회수 ${formattedCount}` : undefined}
    >
      {visible ? `조회수 ${formattedCount}` : null}
    </span>
  );
}

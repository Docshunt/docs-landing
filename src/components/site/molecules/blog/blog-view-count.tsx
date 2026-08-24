"use client";

import { useEffect, useRef, useState } from "react";

type BlogViewCountProps = {
  slug: string;
};

export function BlogViewCount({ slug }: BlogViewCountProps) {
  const requestedSlug = useRef<string | null>(null);
  const [viewCount, setViewCount] = useState<number | null>(null);

  useEffect(() => {
    if (requestedSlug.current === slug) return;
    requestedSlug.current = slug;
    let cancelled = false;

    void fetch("/api/blog/views", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
      cache: "no-store",
      keepalive: true,
    })
      .then(async (response) => {
        if (cancelled || response.status === 204 || !response.ok) return;

        const payload = (await response.json()) as { viewCount?: unknown };
        const count = typeof payload.viewCount === "number" ? payload.viewCount : Number(payload.viewCount);
        if (!cancelled && Number.isSafeInteger(count) && count >= 0) setViewCount(count);
      })
      .catch(() => undefined);

    return () => {
      cancelled = true;
    };
  }, [slug]);

  const formattedCount = viewCount === null ? "·" : viewCount.toLocaleString("ko-KR");
  return <span aria-label={`조회수 ${formattedCount}`}>조회수 {formattedCount}</span>;
}

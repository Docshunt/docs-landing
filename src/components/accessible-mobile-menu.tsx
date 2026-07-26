"use client";

import type { ReactNode } from "react";
import { useState } from "react";

export function AccessibleMobileMenu({
  children,
  className,
  summaryClassName,
}: {
  children: ReactNode;
  className: string;
  summaryClassName?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <details className={className} onToggle={(event) => setOpen(event.currentTarget.open)}>
      <summary className={summaryClassName} aria-label={open ? "메뉴 닫기" : "메뉴 열기"}>
        <span />
      </summary>
      {children}
    </details>
  );
}

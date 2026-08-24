import type { ReactNode } from "react";

import { BlogHeader, DocshuntFooter } from "@/components/docshunt-blog-shell";

type BlogPageShellProps = Readonly<{
  children: ReactNode;
  mainClassName: string;
  pageClassName?: string;
}>;

export function BlogPageShell({ children, mainClassName, pageClassName }: BlogPageShellProps) {
  const pageClasses = ["page", "blog-page", pageClassName].filter(Boolean).join(" ");

  return (
    <div className={pageClasses}>
      <BlogHeader />
      <main className={mainClassName}>{children}</main>
      <DocshuntFooter />
    </div>
  );
}

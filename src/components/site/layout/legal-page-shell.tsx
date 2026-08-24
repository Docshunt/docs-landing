import type { ReactNode } from "react";

import { BlogPageShell } from "@/components/site/layout/blog-page-shell";

export function LegalPageShell({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <BlogPageShell mainClassName="legal-main" pageClassName="legal-page">
      {children}
    </BlogPageShell>
  );
}

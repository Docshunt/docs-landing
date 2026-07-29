import { BlogHeader, DocshuntFooter } from "@/components/docshunt-blog-shell";

export default function LegacyContentLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="page blog-page legal-page">
      <BlogHeader />
      <main className="legal-main">{children}</main>
      <DocshuntFooter />
    </div>
  );
}

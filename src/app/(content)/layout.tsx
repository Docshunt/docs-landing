import { LegalPageShell } from "@/components/site/layout/legal-page-shell";

export default function LegacyContentLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <LegalPageShell>{children}</LegalPageShell>;
}

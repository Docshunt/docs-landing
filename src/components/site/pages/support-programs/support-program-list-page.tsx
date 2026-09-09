import { connection } from "next/server";

import { SupportProgramListTemplate } from "@/components/site/templates/support-programs/support-program-list-template";
import { SupportProgramErrorTemplate } from "@/components/site/templates/support-programs/support-program-error-template";
import { SUPPORT_PROGRAMS_DESCRIPTION, SUPPORT_PROGRAMS_TITLE, buildPageMetadata } from "@/seo/metadata";
import { fetchSupportProgramListPage } from "@/server/support-programs";

export const metadata = buildPageMetadata({
  title: SUPPORT_PROGRAMS_TITLE,
  description: SUPPORT_PROGRAMS_DESCRIPTION,
  path: "/support-programs",
  rssPath: "/rss.xml",
});

export default async function SupportProgramListPage() {
  await connection();
  const result = await fetchSupportProgramListPage().catch(() => undefined);
  return result ? <SupportProgramListTemplate programs={result.items} /> : <SupportProgramErrorTemplate />;
}

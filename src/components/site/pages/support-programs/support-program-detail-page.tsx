import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SupportProgramDetailTemplate } from "@/components/site/templates/support-programs/support-program-detail-template";
import { SupportProgramErrorTemplate } from "@/components/site/templates/support-programs/support-program-error-template";
import { buildPageMetadata } from "@/seo/metadata";
import {
  SupportProgramNotFoundError,
  fetchSupportProgramDetail,
  supportProgramDescription,
  supportProgramId,
  supportProgramPath,
} from "@/server/support-programs";

type SupportProgramDetailPageProps = {
  params: Promise<{ sourceId: string }>;
};

async function getProgram(sourceId: string) {
  try {
    return await fetchSupportProgramDetail(sourceId);
  } catch (error) {
    if (error instanceof SupportProgramNotFoundError) notFound();
    return undefined;
  }
}

export async function generateMetadata({ params }: SupportProgramDetailPageProps): Promise<Metadata> {
  const { sourceId } = await params;
  const program = await getProgram(sourceId);
  if (!program) {
    return buildPageMetadata({
      title: "지원사업 공고를 불러오지 못했습니다 | 독스헌트",
      description: "지원사업 공고를 일시적으로 불러오지 못했습니다. 잠시 후 다시 확인해 주세요.",
      path: supportProgramPath(sourceId),
      rssPath: "/rss.xml",
      robots: { index: false, follow: false },
    });
  }
  return buildPageMetadata({
    title: `${program.title} | 지원사업 공고 | 독스헌트`,
    description: supportProgramDescription(program),
    path: supportProgramPath(supportProgramId(program)),
    rssPath: "/rss.xml",
  });
}

export default async function SupportProgramDetailPage({ params }: SupportProgramDetailPageProps) {
  const { sourceId } = await params;
  const program = await getProgram(sourceId);
  return program ? <SupportProgramDetailTemplate program={program} /> : <SupportProgramErrorTemplate />;
}

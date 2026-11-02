import { cache } from "react";

import { APP_URL } from "../seo/metadata.ts";

const PAGE_SIZE = 50;
const REVALIDATE_SECONDS = 86_400;
const REQUEST_TIMEOUT_MS = 8000;

type JsonObject = Record<string, unknown>;

export type SupportProgram = {
  productFileId: string;
  fileSourceId?: string | null | undefined;
  source?: string | null | undefined;
  title: string;
  organizingAgency?: string | null | undefined;
  deadline?: string | null | undefined;
  deadlineDateOnly?: boolean | undefined;
  createdAt?: string | null | undefined;
  postingUrl?: string | null | undefined;
  supportType?: string | null | undefined;
  supportTypes: string[];
  supportAmount?: string | null | undefined;
  region?: string | null | undefined;
  businessFields: string[];
  supportContent: string[];
  announcementSummary?:
    | {
        oneLine?: string | null | undefined;
        markdown?: string | null | undefined;
      }
    | null
    | undefined;
};

export type SupportProgramListPage = {
  items: SupportProgram[];
  totalItems: number;
  page: number;
  pageSize: number;
};

export class SupportProgramNotFoundError extends Error {
  constructor() {
    super("지원사업 공고를 찾을 수 없습니다.");
    this.name = "SupportProgramNotFoundError";
  }
}

export class SupportProgramUpstreamError extends Error {
  constructor(message = "지원사업 공고 API를 사용할 수 없습니다.") {
    super(message);
    this.name = "SupportProgramUpstreamError";
  }
}

function isObject(value: unknown): value is JsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function optionalString(value: unknown) {
  return typeof value === "string" ? value : value === null ? null : undefined;
}

function stringArray(value: unknown) {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
}

function parseSupportProgram(value: unknown): SupportProgram {
  if (
    !isObject(value) ||
    typeof value.productFileId !== "string" ||
    !value.productFileId.trim() ||
    typeof value.title !== "string" ||
    !value.title.trim()
  ) {
    throw new SupportProgramUpstreamError("지원사업 공고 응답 형식이 올바르지 않습니다.");
  }

  const summary = isObject(value.announcementSummary)
    ? {
        oneLine: optionalString(value.announcementSummary.oneLine),
        markdown: optionalString(value.announcementSummary.markdown),
      }
    : value.announcementSummary === null
      ? null
      : undefined;

  return {
    productFileId: value.productFileId,
    fileSourceId: optionalString(value.fileSourceId),
    source: optionalString(value.source),
    title: value.title,
    organizingAgency: optionalString(value.organizingAgency),
    deadline: optionalString(value.deadline),
    deadlineDateOnly: typeof value.deadlineDateOnly === "boolean" ? value.deadlineDateOnly : undefined,
    createdAt: optionalString(value.createdAt),
    postingUrl: optionalString(value.postingUrl),
    supportType: optionalString(value.supportType),
    supportTypes: stringArray(value.supportTypes),
    supportAmount: optionalString(value.supportAmount),
    region: optionalString(value.region),
    businessFields: stringArray(value.businessFields),
    supportContent: stringArray(value.supportContent),
    announcementSummary: summary,
  };
}

async function fetchApi(url: URL, notFoundOn404 = false, cache?: "no-store") {
  let response: Response;
  try {
    response = await fetch(url, {
      ...(cache ? { cache } : { next: { revalidate: REVALIDATE_SECONDS } }),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
  } catch {
    throw new SupportProgramUpstreamError();
  }

  if (response.status === 404 && notFoundOn404) throw new SupportProgramNotFoundError();
  if (!response.ok) throw new SupportProgramUpstreamError(`지원사업 공고 API가 ${response.status}로 응답했습니다.`);

  let body: unknown;
  try {
    body = await response.json();
  } catch {
    throw new SupportProgramUpstreamError("지원사업 공고 API가 올바른 JSON을 반환하지 않았습니다.");
  }

  if (!isObject(body) || !isObject(body.data) || body.error) {
    throw new SupportProgramUpstreamError("지원사업 공고 API 응답 형식이 올바르지 않습니다.");
  }
  return body.data;
}

export function supportProgramId(program: SupportProgram) {
  return program.fileSourceId?.trim() || program.productFileId.trim();
}

export function supportProgramPath(sourceId: string) {
  return `/support-programs/${encodeURIComponent(sourceId)}`;
}

export function supportProgramDescription(program: SupportProgram) {
  const value =
    program.announcementSummary?.oneLine?.trim() ||
    program.supportContent.find((item) => item.trim())?.trim() ||
    program.organizingAgency?.trim() ||
    program.title.trim();
  return value.replace(/\s+/g, " ").slice(0, 160);
}

export function safePostingUrl(value: string | null | undefined) {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:" ? url.href : undefined;
  } catch {
    return undefined;
  }
}

export async function fetchSupportProgramListPage(page = 0, cache?: "no-store"): Promise<SupportProgramListPage> {
  const url = new URL("/api/products/business-plans", APP_URL);
  url.searchParams.set("sort", "LATEST");
  url.searchParams.set("page", String(page));
  url.searchParams.set("size", String(PAGE_SIZE));
  const data = await fetchApi(url, false, cache);

  if (
    !Array.isArray(data.items) ||
    typeof data.totalItems !== "number" ||
    !Number.isInteger(data.totalItems) ||
    data.totalItems < 0 ||
    typeof data.page !== "number" ||
    !Number.isInteger(data.page) ||
    data.page !== page ||
    typeof data.pageSize !== "number" ||
    !Number.isInteger(data.pageSize) ||
    data.pageSize < 1
  ) {
    throw new SupportProgramUpstreamError("지원사업 공고 목록 응답 형식이 올바르지 않습니다.");
  }

  return {
    items: data.items.map(parseSupportProgram),
    totalItems: data.totalItems,
    page: data.page,
    pageSize: data.pageSize,
  };
}

export const fetchSupportProgramDetail = cache(async (sourceId: string): Promise<SupportProgram> => {
  const url = new URL(`/api/products/business-plans/${encodeURIComponent(sourceId)}`, APP_URL);
  const data = await fetchApi(url, true);
  return parseSupportProgram(data.item);
});

async function loadAllSupportPrograms() {
  // Cache the completed sitemap, not independently revalidating API pages.
  const firstPage = await fetchSupportProgramListPage(0, "no-store");
  const pageCount = Math.ceil(firstPage.totalItems / firstPage.pageSize);
  const programs: SupportProgram[] = [];

  function appendPage(result: SupportProgramListPage) {
    const expectedItems = Math.min(firstPage.pageSize, firstPage.totalItems - result.page * firstPage.pageSize);
    if (result.totalItems !== firstPage.totalItems || result.pageSize !== firstPage.pageSize || result.items.length !== expectedItems) {
      throw new SupportProgramUpstreamError("지원사업 공고 전체 목록을 확인할 수 없습니다.");
    }
    programs.push(...result.items);
  }

  appendPage(firstPage);
  for (let startPage = 1; startPage < pageCount; startPage += 2) {
    // Drain both requests before rejecting so a retry cannot overlap a failed batch.
    const results = await Promise.allSettled(
      Array.from({ length: Math.min(2, pageCount - startPage) }, (_, index) => fetchSupportProgramListPage(startPage + index, "no-store")),
    );
    for (const result of results) {
      if (result.status === "rejected") throw result.reason;
      appendPage(result.value);
    }
  }

  const uniquePrograms = [...new Map(programs.map((program) => [supportProgramId(program), program])).values()];
  if (uniquePrograms.length !== firstPage.totalItems) {
    throw new SupportProgramUpstreamError("지원사업 공고 전체 목록을 확인할 수 없습니다.");
  }
  return uniquePrograms;
}

let pendingPrograms: Promise<SupportProgram[]> | undefined;

export function fetchAllSupportPrograms(): Promise<SupportProgram[]> {
  // Share one generation across simultaneous sitemap requests in this process.
  pendingPrograms ??= loadAllSupportPrograms().finally(() => {
    pendingPrograms = undefined;
  });
  return pendingPrograms;
}

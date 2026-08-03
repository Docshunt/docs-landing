import "server-only";

import { unstable_cache } from "next/cache";

import { BLOG_POSTS } from "./blog-posts";
import type { BlogPost } from "./blog-posts/types";

const NOTION_API_ORIGIN = "https://api.notion.com";
const NOTION_API_VERSION = "2026-03-11";
const NOTION_REVALIDATE_SECONDS = 60;
const POSTS_PER_PAGE = 10;

type JsonRecord = Record<string, unknown>;

type NotionPage = {
  id: string;
  last_edited_time: string;
  properties: Record<string, JsonRecord>;
  url: string;
};

type NotionPostRecord = {
  pageId: string;
  post: BlogPost;
  sortOrder: number;
};

type NotionBlock = JsonRecord & {
  has_children?: boolean;
  id: string;
  type: string;
};

type NotionBlockNode = NotionBlock & {
  children?: NotionBlockNode[];
};

type NotionListResponse<T> = {
  has_more: boolean;
  next_cursor: string | null;
  results: T[];
};

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function notionConfig() {
  const apiKey = process.env.NOTION_API_KEY;
  const dataSourceId = process.env.NOTION_BLOG_DATA_SOURCE_ID;
  return apiKey && dataSourceId ? { apiKey, dataSourceId } : undefined;
}

async function notionFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const config = notionConfig();
  if (!config) {
    throw new Error("Notion blog environment variables are not configured.");
  }

  const response = await fetch(`${NOTION_API_ORIGIN}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
      "Notion-Version": NOTION_API_VERSION,
      ...init?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Notion API request failed with status ${response.status}.`);
  }

  return (await response.json()) as T;
}

function richTextItems(value: unknown) {
  return Array.isArray(value) ? value.filter(isRecord) : [];
}

function richTextPlain(value: unknown) {
  return richTextItems(value)
    .map((item) => (typeof item.plain_text === "string" ? item.plain_text : ""))
    .join("");
}

function propertyText(page: NotionPage, name: string) {
  const property = page.properties[name];
  if (!property) return "";
  return richTextPlain(property.title ?? property.rich_text);
}

function propertySelect(page: NotionPage, name: string) {
  const select = page.properties[name]?.select;
  return isRecord(select) && typeof select.name === "string" ? select.name : undefined;
}

function propertyDate(page: NotionPage, name: string) {
  const date = page.properties[name]?.date;
  return isRecord(date) && typeof date.start === "string" ? date.start : undefined;
}

function propertyUrl(page: NotionPage, name: string) {
  const url = page.properties[name]?.url;
  return typeof url === "string" ? url : undefined;
}

function propertyNumber(page: NotionPage, name: string) {
  const number = page.properties[name]?.number;
  return typeof number === "number" ? number : 0;
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.valueOf())) return value.replaceAll("-", ".");
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(date)
    .replace(/\. /g, ".")
    .replace(/\.$/, "");
}

function buildNotionPost(page: NotionPage): NotionPostRecord | undefined {
  const slug = propertyText(page, "Slug").trim();
  const title = propertyText(page, "제목").trim();
  const status = propertySelect(page, "상태");
  if (!slug || !title || status !== "게시") return undefined;

  const description = propertyText(page, "설명").trim() || title;
  const author = propertyText(page, "작성자").trim();
  const date = formatDate(propertyDate(page, "게시일") ?? page.last_edited_time);
  const modifiedDate = formatDate(page.last_edited_time);
  const image = propertyUrl(page, "목록 이미지") ?? "/docshunt-assets/og-new-landing.jpg";
  const heroImage = propertyUrl(page, "대표 이미지") ?? image;

  return {
    pageId: page.id,
    sortOrder: propertyNumber(page, "정렬"),
    post: {
      page: 1,
      index: 1,
      slug,
      sourceUrl: `https://docshunt.ai/blog_detail/${slug}`,
      title,
      description,
      ...(author ? { author } : {}),
      date,
      ...(modifiedDate !== date ? { modifiedDate } : {}),
      image,
      heroImage,
      paragraphs: [description],
    },
  };
}

async function loadNotionPostRecords() {
  const config = notionConfig();
  if (!config) return [];

  const pages: NotionPage[] = [];
  let cursor: string | null = null;

  do {
    const response: NotionListResponse<NotionPage> = await notionFetch(
      `/v1/data_sources/${encodeURIComponent(config.dataSourceId)}/query`,
      {
        method: "POST",
        body: JSON.stringify({
          filter: {
            property: "상태",
            select: { equals: "게시" },
          },
          sorts: [
            { property: "정렬", direction: "descending" },
            { property: "게시일", direction: "descending" },
          ],
          page_size: 100,
          result_type: "page",
          ...(cursor ? { start_cursor: cursor } : {}),
        }),
      },
    );
    pages.push(...response.results);
    cursor = response.has_more ? response.next_cursor : null;
  } while (cursor);

  return pages
    .map(buildNotionPost)
    .filter((record): record is NotionPostRecord => Boolean(record))
    .sort((a, b) => b.sortOrder - a.sortOrder || b.post.date.localeCompare(a.post.date));
}

const loadNotionPostRecordsCached = unstable_cache(loadNotionPostRecords, ["notion-blog-post-records-v1"], {
  revalidate: NOTION_REVALIDATE_SECONDS,
});

function mergeBlogPosts(records: NotionPostRecord[]) {
  if (records.length === 0) return BLOG_POSTS;

  const staticBySlug = new Map(BLOG_POSTS.map((post) => [post.slug, post]));
  const notionSlugs = new Set(records.map(({ post }) => post.slug));
  const merged = records.map(({ post }) => {
    const fallback = staticBySlug.get(post.slug);
    return {
      ...fallback,
      ...post,
      paragraphs: fallback?.paragraphs ?? post.paragraphs,
    };
  });

  merged.push(...BLOG_POSTS.filter((post) => !notionSlugs.has(post.slug)));

  return merged.map((post, position) => ({
    ...post,
    page: Math.floor(position / POSTS_PER_PAGE) + 1,
    index: (position % POSTS_PER_PAGE) + 1,
  }));
}

function escapeHtml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function safeUrl(value: unknown) {
  if (typeof value !== "string") return undefined;
  try {
    const url = new URL(value);
    return ["http:", "https:", "mailto:"].includes(url.protocol) ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

function renderRichText(value: unknown) {
  return richTextItems(value)
    .map((item) => {
      let text = escapeHtml(typeof item.plain_text === "string" ? item.plain_text : "").replaceAll("\n", "<br>");
      const annotations = isRecord(item.annotations) ? item.annotations : {};
      if (annotations.code === true) text = `<code>${text}</code>`;
      if (annotations.bold === true) text = `<strong>${text}</strong>`;
      if (annotations.italic === true) text = `<em>${text}</em>`;
      if (annotations.strikethrough === true) text = `<s>${text}</s>`;
      if (annotations.underline === true) text = `<u>${text}</u>`;
      const href = safeUrl(item.href);
      return href ? `<a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${text}</a>` : text;
    })
    .join("");
}

function blockValue(block: NotionBlock) {
  const value = block[block.type];
  return isRecord(value) ? value : {};
}

async function loadBlockChildren(blockId: string, depth = 0): Promise<NotionBlockNode[]> {
  if (depth > 5) return [];

  const blocks: NotionBlockNode[] = [];
  let cursor: string | null = null;

  do {
    const query = new URLSearchParams({ page_size: "100" });
    if (cursor) query.set("start_cursor", cursor);
    const response: NotionListResponse<NotionBlock> = await notionFetch(
      `/v1/blocks/${encodeURIComponent(blockId)}/children?${query.toString()}`,
    );

    for (const block of response.results) {
      const children = block.has_children ? await loadBlockChildren(block.id, depth + 1) : undefined;
      blocks.push({ ...block, ...(children && children.length > 0 ? { children } : {}) });
    }

    cursor = response.has_more ? response.next_cursor : null;
  } while (cursor);

  return blocks;
}

const loadBlockChildrenCached = unstable_cache(loadBlockChildren, ["notion-blog-block-children-v1"], {
  revalidate: NOTION_REVALIDATE_SECONDS,
});

function blockText(block: NotionBlockNode) {
  return renderRichText(blockValue(block).rich_text);
}

function blockPlainText(block: NotionBlockNode) {
  return richTextPlain(blockValue(block).rich_text);
}

function renderImage(block: NotionBlockNode) {
  const value = blockValue(block);
  const sourceType = typeof value.type === "string" ? value.type : "";
  const source = isRecord(value[sourceType]) ? value[sourceType] : {};
  const url = safeUrl(source.url);
  if (!url) return "";
  const caption = richTextPlain(value.caption);
  const alt = caption || "블로그 본문 이미지";
  return `<figure class="dh-image"><img src="${escapeHtml(url)}" alt="${escapeHtml(alt)}" loading="lazy">${
    caption ? `<figcaption>${escapeHtml(caption)}</figcaption>` : ""
  }</figure>`;
}

function renderList(blocks: NotionBlockNode[], ordered: boolean) {
  const tag = ordered ? "ol" : "ul";
  const items = blocks.map((block) => `<li>${blockText(block)}${block.children ? renderBlocks(block.children) : ""}</li>`).join("");
  return `<${tag}>${items}</${tag}>`;
}

function renderBlock(block: NotionBlockNode): string {
  const value = blockValue(block);
  const children = block.children ? renderBlocks(block.children) : "";

  switch (block.type) {
    case "paragraph":
      return blockText(block) ? `<p>${blockText(block)}</p>${children}` : children;
    case "heading_1":
      return `<h2>${blockText(block)}</h2>`;
    case "heading_2":
      return `<h2>${blockText(block)}</h2>`;
    case "heading_3":
      return `<h3>${blockText(block)}</h3>`;
    case "quote":
      return `<blockquote><p>${blockText(block)}</p>${children}</blockquote>`;
    case "callout": {
      const icon = isRecord(value.icon) && typeof value.icon.emoji === "string" ? value.icon.emoji : "";
      return `<div class="dh-callout">${icon ? `<span aria-hidden="true">${escapeHtml(icon)}</span>` : ""}<p>${blockText(
        block,
      )}</p>${children}</div>`;
    }
    case "divider":
      return "<hr>";
    case "image":
      return renderImage(block);
    case "code":
      return `<pre><code>${escapeHtml(blockPlainText(block))}</code></pre>`;
    case "toggle":
      return `<details><summary>${blockText(block)}</summary>${children}</details>`;
    case "bookmark":
    case "embed": {
      const url = safeUrl(value.url);
      return url ? `<p><a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(url)}</a></p>` : "";
    }
    case "table_of_contents":
      return "";
    case "bulleted_list_item":
    case "numbered_list_item":
      return "";
    default:
      return children;
  }
}

function renderBlocks(blocks: NotionBlockNode[]) {
  const html: string[] = [];
  let index = 0;

  while (index < blocks.length) {
    const block = blocks[index];
    if (!block) break;

    if (block.type === "bulleted_list_item" || block.type === "numbered_list_item") {
      const type = block.type;
      const listBlocks: NotionBlockNode[] = [];
      while (blocks[index]?.type === type) {
        const listBlock = blocks[index];
        if (listBlock) listBlocks.push(listBlock);
        index += 1;
      }
      html.push(renderList(listBlocks, type === "numbered_list_item"));
      continue;
    }

    html.push(renderBlock(block));
    index += 1;
  }

  return html.join("");
}

function collectParagraphs(blocks: NotionBlockNode[]) {
  const paragraphs: string[] = [];
  for (const block of blocks) {
    const text = blockPlainText(block).trim();
    if (text) paragraphs.push(text);
    if (block.children) paragraphs.push(...collectParagraphs(block.children));
  }
  return paragraphs;
}

export async function getAllBlogPosts() {
  if (!notionConfig()) return BLOG_POSTS;

  try {
    return mergeBlogPosts(await loadNotionPostRecordsCached());
  } catch (error) {
    console.error("Failed to load Notion blog summaries.", error);
    return BLOG_POSTS;
  }
}

export async function getBlogPost(slug: string) {
  const decodedSlug = decodeURIComponent(slug);
  const posts = await getAllBlogPosts();
  const post = posts.find((candidate) => decodeURIComponent(candidate.slug) === decodedSlug);
  if (!post || !notionConfig()) return post;

  try {
    const records = await loadNotionPostRecordsCached();
    const record = records.find(({ post: candidate }) => candidate.slug === post.slug);
    if (!record) return post;
    const blocks = await loadBlockChildrenCached(record.pageId);
    return {
      ...post,
      paragraphs: collectParagraphs(blocks),
      contentHtml: `<div class="dh-seo-post dh-notion-post">${renderBlocks(blocks)}</div>`,
    } satisfies BlogPost;
  } catch (error) {
    console.error(`Failed to load Notion blog content for ${post.slug}.`, error);
    return post;
  }
}

export function getBlogPageCount(posts: BlogPost[]) {
  return Math.max(1, new Set(posts.map((post) => post.page)).size);
}

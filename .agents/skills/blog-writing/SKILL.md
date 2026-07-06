---
name: blog-writing
description: Use when creating, editing, importing, or reviewing docs-landing blog posts. Guides one-file-per-post data, SEO metadata, sitemap/GEO alignment, content HTML, recommendations, and QA.
---

# Blog Writing Skill

Use this skill for any `docs-landing` blog work:

- creating a new blog post
- editing an existing post title, description, date, images, slug, or body
- importing Bubble blog content
- editing `src/data/blog-posts/*.ts`
- editing `src/data/docshunt-blog*`
- adding inline blog screenshots or recommendation cards
- changing blog list/detail rendering

## Data Model

Each blog post owns one file under:

```text
src/data/blog-posts/00001-내용을-설명하는-제목.ts
```

Filename rules:

- Prefix with a five-digit order number matching the aggregate order: `00001`, `00002`, ...
- Follow the number with a short Korean or English description derived from the title.
- Use hyphens, not spaces.
- Keep the filename meaningful even when the legacy slug is numeric or percent-encoded.
- Do not name new files only by Bubble numeric slug.

Required export pattern:

```ts
import type { BlogPost } from "./types";

export const postNN = {
  page: 1,
  index: 1,
  slug: "example-slug",
  sourceUrl: "https://docshunt.ai/blog_detail/example-slug",
  title: "제목",
  description: "검색 결과와 공유 미리보기에 들어갈 설명",
  date: "2026.07.06",
  image: "https://...",
  heroImage: "https://...",
  paragraphs: ["본문 문단"],
} satisfies BlogPost;
```

`src/data/blog-posts/index.ts` is the ordered aggregate. Blog list, blog detail, sitemap, and JSON-LD read from `BLOG_POSTS`.

Do not put new post objects directly into `src/data/docshunt-blogs.ts`; that file is a compatibility facade only.

## Creation Flow

1. Choose a stable slug.
   - Prefer lowercase kebab-case English slugs for new posts.
   - Keep old Bubble slugs only when preserving an existing URL.
2. Create one ordered, descriptive post file under `src/data/blog-posts/`, for example `00033-정부지원사업-사업계획서-작성법.ts`.
3. Add the post import and ordered entry to `src/data/blog-posts/index.ts`.
4. Set `sourceUrl` to `https://docshunt.ai/blog_detail/<slug>`.
5. Ensure `title`, `description`, `date`, `image`, and `heroImage` are complete.
6. Put plain fallback copy in `paragraphs`.
7. If rich HTML is needed, add the keyed entry to `src/data/docshunt-blog-content.ts` using the same slug.
8. If custom recommendation images are needed, add them to `src/data/docshunt-blog-recommendations.ts`.

## SEO/GEO Checklist

For every blog post change:

- `slug` and `sourceUrl` must match.
- `description` must be unique and useful for search snippets.
- `heroImage` should be suitable for article OG/social preview.
- `BLOG_POSTS` ordering must preserve intended list order.
- `BLOG_PAGE_COUNT` must still reflect the unique page values used by `BLOG_POSTS`.
- `/blog_detail/[slug]` must be generated through `generateStaticParams`.
- `/sitemap-blog_detail.xml` must include the post URL.
- Blog JSON-LD must receive the new post through `blogListJsonLd` and `articleJsonLd`.

Run:

```bash
node .agents/skills/seo-geo-guard/scripts/check-seo-geo.mjs
```

## Writing Guidelines

- Write for Korean founders preparing government support applications.
- Keep the title concrete and search-friendly.
- The first paragraph should state the problem clearly.
- Use headings that match actual search intent.
- Include a practical next step or Docshunt CTA when appropriate.
- Do not invent policy dates, program names, funding amounts, or eligibility rules. Verify current facts before writing time-sensitive public guidance.
- Cite source links in body copy when referring to external programs or public notices.

## QA

Run before handoff:

```bash
npm run precommit
npm run build
npm run check
node .agents/skills/seo-geo-guard/scripts/check-seo-geo.mjs
```

If blog UI, images, or content length changes materially, run Playwright responsive screenshots for:

- `/blog_list`
- the changed `/blog_detail/[slug]`
- `/`

PR notes must include:

- slug
- source URL
- whether rich HTML was added
- sitemap impact
- SEO/GEO guard result
- screenshots when layout may be affected

## Gotchas

- Percent-encoded legacy slugs must still resolve through `decodeBlogSlug`.
- Adding a post file without adding it to `src/data/blog-posts/index.ts` means the page and sitemap will not see it.
- A numeric legacy slug is not an acceptable filename by itself. The file still needs an ordered descriptive name.
- Adding HTML content without fallback `paragraphs` makes future rendering changes harder.
- Reusing the same description across posts weakens search snippets.
- Changing `page` or `index` changes blog list pagination and should be intentional.

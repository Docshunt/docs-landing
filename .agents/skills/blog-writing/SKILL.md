---
name: blog-writing
description: Use when creating, editing, importing, or reviewing docs-landing blog posts. Guides one-file-per-post data, SEO metadata, sitemap/GEO alignment, content HTML, recommendations, and QA.
---

# Blog Writing Skill

For a new Korean SEO article, substantial rewrite, title/hook review, anti-AI language pass, fact-checking, or cover production, read `.agents/skills/docshunt-blog-editor/SKILL.md` before this skill. `docshunt-blog-editor` owns editorial quality and visual direction; this skill owns the repository data model, rendering integration, and publication QA.

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

- Prefix with a five-digit stable creation number: `00001`, `00002`, ...
- Keep prefixes contiguous from `00001` through the current post count; never skip a number or reuse a prefix.
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
  modifiedDate: "2026.07.23",
  verification: {
    date: "2026.07.23",
    note: "공식 공고를 기준으로 확인한 내용입니다.",
    sources: [{ label: "공식 공고", url: "https://..." }],
  },
  image: "https://...",
  heroImage: "https://...",
  paragraphs: ["본문 문단"],
  contentHtml: `<div class="dh-seo-post">...</div>`,
} satisfies BlogPost;
```

`src/data/blog-posts/index.ts` is the ordered aggregate. Blog list, blog detail, sitemap, and JSON-LD read from `BLOG_POSTS`.

Run `npm run blog:check-numbers` before adding a post. It fails when filenames are missing from the sequence or when `index.ts` imports a missing post. Repair an existing gap before creating another post; do not let the generator advance past a gap.

Do not put new post objects directly into `src/data/docshunt-blogs.ts`; that file is a compatibility facade only.

## Creation Flow

1. Choose a stable slug.
   - Prefer lowercase kebab-case English slugs for new posts.
   - Keep old Bubble slugs only when preserving an existing URL.
2. Scaffold the post file and index entry:
   ```bash
   node .agents/skills/blog-writing/scripts/create-blog-post.mjs \
     --slug example-slug \
     --title "검색 친화적인 제목"
   ```
3. Complete the generated one-file post. Keep new rich HTML in `contentHtml`; `src/data/docshunt-blog-content.ts` is a legacy compatibility store only.
4. Set `sourceUrl` to `https://docshunt.ai/blog_detail/<slug>`.
5. Ensure `title`, `description`, `date`, `image`, and `heroImage` are complete.
   - Set optional `modifiedDate` only when the published body was actually updated.
6. Put plain fallback copy in `paragraphs`.
7. Select an editorial pattern from [references/editorial-patterns.md](references/editorial-patterns.md) and keep only the blocks the article needs.
8. Recommendation cards use the linked post's own title and list image.
9. Use the article's approved author value, defaulting to `독스헌트 마케팅팀` only when none is provided. Keep the visible author, JSON-LD author, and `/about#editorial-policy` link aligned; preserve an explicit `독스헌트` request exactly.
10. Add the post to an appropriate `BLOG_TOPIC_GROUP_CONFIG` group when it belongs to an existing search-intent cluster.

`BLOG_POSTS` derives pagination from aggregate order. Put a new post at the top of `BLOG_POST_SOURCE`; do not hand-edit the generated `page` and `index` fields. Renumbering is reserved for repairing a repository-wide filename gap and must include the post export, index import, and every paired cover asset reference in the same change.

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
- Visible author, JSON-LD author, and `/about#editorial-policy` must identify the same editorial team.
- Keep exactly one primary Docshunt CTA near the end of each post. When rich HTML already contains `.dh-cta-button`, do not render the generic detail-page CTA again.
- Give every inline content image a descriptive `alt` attribute.
- Do not let imported legacy HTML inject global `body`, heading, paragraph, or link styles. Legacy posts must use the shared `.dh-seo-post-legacy` CSS boundary.
- Every post must be reachable through a crawlable `<a href>` from blog pagination or a contextual internal link.
- Time-sensitive verification sources shown on the page must match JSON-LD `citation`.

Run:

```bash
npm run blog:check-numbers
node .agents/skills/seo-geo-guard/scripts/check-seo-geo.mjs
```

## Writing Guidelines

- Write for Korean founders preparing government support applications.
- Keep the title concrete and search-friendly.
- The first paragraph should state the problem clearly.
- Use headings that match actual search intent.
- Put a direct answer in the first two or three sentences.
- For practical guides, include the intended reader, a checklist or table, an example, and frequently asked questions when they help the reader.
- Include a practical next step or Docshunt CTA when appropriate.
- Do not invent policy dates, program names, funding amounts, or eligibility rules. Verify current facts before writing time-sensitive public guidance.
- Cite source links in body copy when referring to external programs or public notices.
- For time-sensitive support-program posts, state the verification date, distinguish confirmed notice facts from prior-year references and Docshunt guidance, and remind readers to check the final official notice.
- Check numerical or deadline claims in the title, description, body, CTA, and image pixels together. Do not leave a corrected claim in an old cover image.
- Product-approved campaign copy and illustrative D-day UI may remain when explicitly recorded as product decisions; do not silently reinterpret them as current public notices.
- Keep article-specific CSS out of new post files unless the shared `.dh-seo-post` blocks cannot express a required layout.
- Treat the patterns as a starting structure, not mandatory filler. Delete empty FAQ, table, image, and callout sections.

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
- visible author and editorial-policy link
- time-sensitive source and verification-date impact
- crawlable pagination/internal-link impact

## Gotchas

- Percent-encoded legacy slugs must still resolve through `decodeBlogSlug`.
- Adding a post file without adding it to `src/data/blog-posts/index.ts` means the page and sitemap will not see it.
- A numeric legacy slug is not an acceptable filename by itself. The file still needs an ordered descriptive name.
- Adding `contentHtml` without fallback `paragraphs` makes future rendering changes harder.
- Reusing the same description across posts weakens search snippets.
- Changing `page` or `index` changes blog list pagination and should be intentional.

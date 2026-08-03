---
name: notion-blog-publishing
description: Synchronize a DocsHunt blog article from its latest Notion CMS page into the docs-landing Next.js repository, preserving Notion text and image placement while aligning static fallback content, authorship, responsive title layout, SEO/GEO metadata, local assets, QA, and GitHub draft-PR publication. Use for requests such as “노션 수정본 반영해줘”, “사진 순서를 노션처럼 맞춰줘”, “작성·검수를 독스헌트로 바꿔줘”, “SEO 업로드해줘”, or “깃허브에 올려줘” after blog edits.
---

# Notion Blog Publishing

Treat Notion as the editorial source of truth and the repository as the deployable, reviewable source. Complete the requested scope end to end unless a missing permission or materially ambiguous content decision blocks it.

## 1. Establish scope

1. Read `AGENTS.md` and these repository skills:
   - `.agents/skills/blog-writing/SKILL.md`
   - `.agents/skills/landing-change/SKILL.md`
   - `.agents/skills/seo-geo-guard/SKILL.md`
   - `.agents/skills/submit-pr/SKILL.md` when publishing
2. Inspect `git status -sb`, the current branch, staged changes, unstaged changes, and untracked files.
3. Keep a stable existing slug unless the user explicitly requests a URL change.
4. Do not overwrite or stage unrelated work. Do not push directly to `main`, force-push, or merge a PR.

## 2. Fetch the latest Notion article

1. Prefer the connected Notion app for editorial reads and writes. Use direct Notion API access only when the repository's configured integration is the available authorized path.
2. Resolve the page from the supplied link, known slug, title, or data-source record. Do not assume a stale page snapshot is current.
3. Fetch page properties and all child blocks recursively after every user-reported Notion edit.
4. Preserve the current Notion sequence exactly, including:
   - headings, paragraphs, quotes, lists, dividers, and callouts
   - image placement relative to surrounding paragraphs
   - captions and descriptive alternative text
   - the interview-question order and numbering
5. Refetch after a Notion mutation and verify the changed property or block order before syncing the repository.
6. Do not rewrite user-approved prose merely to optimize SEO. Normalize accidental whitespace in metadata separately from visible copy.

## 3. Sync the deployable blog source

1. Update the matching post file under `src/data/blog-posts/` as the static fallback. Keep its `title`, `description`, `slug`, `sourceUrl`, `date`, `author`, images, `paragraphs`, and `contentHtml` aligned with Notion.
2. Keep `src/data/notion-blog.ts` compatible with the Notion data-source properties and block types used by the article. Preserve graceful fallback to `BLOG_POSTS` when Notion credentials or content are unavailable.
3. Add a new post to `src/data/blog-posts/index.ts`; do not duplicate post objects in `src/data/docshunt-blogs.ts`.
4. Store uploaded editorial images under:
   - list and hero images: `public/docshunt-assets/blog-covers/`
   - article images: `public/docshunt-assets/blog-inline/`
5. Use descriptive lowercase kebab-case filenames. Do not rely on expiring Notion-hosted image URLs for the static fallback.
6. Render each image once at the exact Notion block position. Match the caption and `alt` text to the image's actual role.
7. Keep one primary DocsHunt CTA near the article end. Do not add the generic page CTA when `contentHtml` already contains `.dh-cta-button`.

## 4. Align authorship, title layout, and SEO

1. Use the Notion `작성자` value when present. If the user explicitly requests `독스헌트`, set `author: "독스헌트"`; do not silently replace it with `독스헌트 마케팅팀`.
2. Keep the visible `작성·검수` label, `articleJsonLd` author, and `/about#editorial-policy` link semantically aligned.
3. Keep the metadata title as a single clean string. For an exact desktop-only two-line title, add `titleLines: [firstLine, secondLine]` and render the controlled break only at the intended desktop breakpoint.
4. Verify that mobile can wrap naturally without preserving an awkward desktop break.
5. Keep these surfaces aligned:
   - canonical and `og:url`: `https://docshunt.ai/blog_detail/<slug>`
   - unique search description
   - list image, hero/OG image, visible title, JSON-LD, and sitemap URL
   - Notion-backed and static-fallback content
6. Keep every inline image's `alt` descriptive and ensure the article remains reachable through crawlable pagination or contextual links.

## 5. Validate content and layout

Run the repository-required checks:

```bash
npm run security:scan
npm run precommit
node .agents/skills/seo-geo-guard/scripts/check-seo-geo.mjs
npm run build
```

If validating the standalone build locally, prepare assets and start it on the established local port:

```bash
node scripts/prepare-standalone-assets.mjs
PORT=3001 HOSTNAME=127.0.0.1 node .next/standalone/server.js
```

Use browser QA at mobile `390x844`, tablet `768x1024`, and desktop `1440x1000`. Check:

- the target `/blog_detail/[slug]` and `/blog_list` render nonblank
- the title has the requested desktop lines and natural mobile wrapping
- image count, sequence, captions, and surrounding text match Notion
- visible authorship and the editorial-policy link are correct
- JSON-LD contains the intended headline, author, canonical URL, and image
- no horizontal overflow, broken asset, duplicated image, or misplaced CTA exists
- changed SEO/GEO endpoints return expected content

Save screenshots under a gitignored test-results path and record their paths for PR notes.

## 6. Publish to GitHub

1. Follow `.agents/skills/submit-pr/SKILL.md`.
2. Inspect the full staged diff and run `git diff --cached --check`.
3. Stage only intended files by explicit path. Split unrelated concerns into separate commits when needed.
4. Run `npm run security:scan` immediately before pushing.
5. Use a concise Korean Conventional Commit message.
6. Push the current non-default branch with tracking.
7. Prefer the connected GitHub app to find an existing PR and create or update a draft PR. Do not create a duplicate PR for the same branch.
8. Use the Korean PR format required by `submit-pr`, including changes, QA, checks, changed files, risks, and follow-up work.
9. Report the branch, commit SHA, PR URL, checks, article slug, author, image-order verification, and any remaining manual review.

## Guardrails

- Never infer that a Notion change is reflected without refetching it.
- Never treat runtime Notion rendering as a substitute for a correct static fallback.
- Never move photos to aesthetically convenient positions when Notion defines their order.
- Never alter a stable slug or published canonical URL as part of a copy-only edit.
- Never publish secrets, credentialed URLs, local caches, or private production data.
- Never merge the PR; leave final review and merge to a maintainer.

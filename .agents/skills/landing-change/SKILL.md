---
name: landing-change
description: Use for docs-landing landing, blog, visual design, static asset, SEO/GEO, and responsive behavior changes.
---

# Docs Landing Change Skill

Use this skill before editing landing, blog, styles, SEO/GEO endpoints, or public assets.

## Preflight

1. Confirm the worktree and branch:
   ```bash
   git status -sb
   git branch --show-current
   ```
2. Read:
   - `AGENTS.md`
   - `src/app/layout.tsx`
   - relevant route under `src/app/**`
   - `src/seo/metadata.ts` for SEO/GEO work
   - `public/docshunt-assets/manifest.json` for asset work
3. Identify whether the change touches:
   - landing UI
   - blog UI/content
   - SEO/GEO metadata or crawler endpoints
   - static assets
   - proxy behavior

## Design Rules

- Preserve the current Docshunt landing visual language: dark hero, large product screenshots, bold Korean copy, direct CTAs, and restrained cards.
- Do not convert the landing into a marketing template with unrelated hero structure.
- Use existing CSS patterns in `src/app/globals.css` before adding new patterns.
- Text must not overlap or overflow on mobile, tablet, or desktop.
- Blog changes must preserve readable article typography and header/footer consistency.

## SEO/GEO Rules

- Shared constants and helpers belong in `src/seo/metadata.ts`.
- Canonical and `og:url` must be absolute `https://docshunt.ai/...`.
- Blog pages must be local Next pages, not Bubble mirror output.
- Sitemap routes must stay aligned with `BLOG_POSTS`.
- If `/llms.txt` changes, update `/ai.txt` behavior too.

## Static Asset Rules

- Rename generic imported files to semantic lowercase kebab-case names.
- Update `public/docshunt-assets/manifest.json` and all source references in the same change.
- Run `rg "asset-[0-9]" public/docshunt-assets src` after renames. Existing generic names should not remain unless intentionally documented.

## Responsive Playwright QA

For landing/blog/design/public asset changes, run screenshots with Playwright at:

```text
mobile: 390x844
tablet: 768x1024
desktop: 1440x1000
```

Required checks:

- `/` renders nonblank and primary hero content is visible.
- `/blog_list` renders nonblank and list rows are readable.
- At least one `/blog_detail/[slug]` page renders nonblank and article title/content are readable.
- No obvious horizontal overflow.
- No incoherent text overlap in the first viewport.
- Referenced local assets return HTTP 200.

Save screenshots under a gitignored location such as `test-results/responsive/` and include the paths in the PR body.

## Verification

Run before handoff:

```bash
npm run validate
npm run build
```

If SEO/GEO changed, also smoke:

```bash
curl -I http://localhost:3011/robots.txt
curl -I http://localhost:3011/sitemap.xml
curl -I http://localhost:3011/sitemap-blog_detail.xml
curl -I http://localhost:3011/llms.txt
curl -I http://localhost:3011/ai.txt
```

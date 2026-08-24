---
name: docshunt-page-architecture
description: Use when creating or changing any DocsHunt route, page, template, design-system component, responsive layout, or SEO/GEO surface. Enforces the repository's four-layer component architecture and page-level primitive-free rule.
---

# DocsHunt Page Architecture

Use this skill for every public page change in this repository. Preserve the
existing URL, editorial visual language, responsive behavior, and crawler
contracts unless the task explicitly changes them.

## Component boundary

Build visible UI through four layers:

1. **Atoms** — smallest reusable visual primitives and tokens.
2. **Molecules** — small combinations of atoms with one focused responsibility.
3. **Organisms** — complete sections or repeated page regions.
4. **Templates** — page composition and layout; assemble organisms and shared
   shells without duplicating primitive markup.

Use the existing feature directory when one exists. Landing components belong
under `src/components/landing/design-system/{atoms,molecules,organisms,templates}`.
Site-wide page composition belongs under `src/components/site/{layout,pages,templates}`.

Route files under `src/app/**/page.tsx` and `src/app/**/not-found.tsx` are
composition or re-export boundaries only. They must not contain lowercase JSX
intrinsic elements (`div`, `main`, `section`, `p`, `a`, `input`, and so on) or
JSX fragments. `src/components/site/pages/**` follows the same rule: pages
compose a template and pass data; they do not render primitives.

When a page needs a root boundary, use the existing `PageDocument`,
`BlogPageShell`, or `LegalPageShell` instead of adding an ad-hoc wrapper.
Semantic markup belongs in the appropriate template, organism, molecule, or
design-system component so it can be reused and responsive behavior stays in
one place.

## Structure rules

- Keep direct entries in a folder to roughly five or fewer; add a meaningful
  role directory before adding another flat file list.
- Reuse existing atoms, molecules, shells, data, and SEO helpers before
  introducing a new abstraction or dependency.
- Keep page data separate from rendering. Prefer the existing page data and
  one-file-per-post blog data conventions.
- Preserve accessible semantics, keyboard behavior, image alt text, and mobile,
  tablet, and desktop layouts.
- Do not bypass the design system with raw page-level HTML or one-off styles.

## SEO/GEO contract

Use `src/seo/metadata.ts` as the source of truth for titles, descriptions,
canonical URLs, Open Graph values, verification tokens, and JSON-LD helpers.
Canonical and `og:url` values must remain absolute `https://docshunt.ai/...`
URLs. When changing a route, blog slug, metadata, or crawler endpoint, check
the related sitemap, `robots.txt`, `llms.txt`, `ai.txt`, JSON-LD, and metadata
behavior. Keep the metadata and structured-data chain valid even when a route
re-exports through `components/site/pages` and `components/site/templates`.

## Required verification

After page, component, layout, route, or SEO/GEO changes, run the smallest
relevant checks and then the full repository checks before handoff:

```bash
npm run security:scan
npm run precommit
npm run build
node .agents/skills/seo-geo-guard/scripts/check-seo-geo.mjs
```

For visual or responsive changes, verify `/`, `/blog_list`, and a blog detail
at 390x844, 768x1024, and 1440x1000, and smoke-test changed crawler endpoints.
If a check fails, fix the underlying shared boundary rather than adding a
page-specific exception.

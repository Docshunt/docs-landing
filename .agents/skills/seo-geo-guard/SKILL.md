---
name: seo-geo-guard
description: Use whenever a docs-landing page, route, blog data, metadata, sitemap, robots, llms.txt, ai.txt, proxy behavior, public crawler-facing asset, or Bing/Google video indexing report finding changes. Detects SEO/GEO impact for new pages and existing page edits.
---

# SEO/GEO Guard Skill

Use this skill before and after changing any public route or crawler-facing behavior in `docs-landing`.

Trigger examples:

- new page under `src/app/**/page.tsx`
- edits to `src/app/page.tsx`, `src/app/blog_*`, `src/app/layout.tsx`
- edits to `src/seo/**`
- edits to `robots`, `sitemap`, `llms.txt`, `ai.txt`
- edits to `src/data/blog-posts/*.ts`
- edits to `src/data/docshunt-blog*`
- proxy or mirror behavior changes
- public asset rename affecting OG/social/blog images

## Phase 1: Scope Detection

Collect changed files:

```bash
changed_files=$(
  (
    git diff --name-only
    git diff --cached --name-only
    git ls-files --others --exclude-standard
  ) | sort -u
)
```

Classify impact:

- `src/app/**/page.tsx`: page metadata, canonical, sitemap, JSON-LD, social preview
- `src/app/**/layout.tsx`: inherited metadata, global JSON-LD, analytics tags
- `src/app/**/route.ts`: crawler endpoint or dynamic content
- `src/seo/**`: shared SEO/GEO contract
- `src/data/blog-posts/*.ts`, `src/data/docshunt-blog*`: blog slug/title/description/image/date/sitemap contract
- `src/proxy.ts`, `src/app/mirror/**`: local page vs Bubble mirror behavior
- `public/docshunt-assets/**`: OG/social/blog/static image behavior

If any public page route is added or changed, continue through every phase below.

## Phase 2: Page-Level SEO/GEO Checklist

For each new or edited page, verify:

- canonical URL is absolute `https://docshunt.ai/...`
- `openGraph.url` is absolute and matches canonical intent
- title and description exist and match the visible page purpose
- `twitter` metadata exists when the page should be shareable
- image URLs used for OG/social previews are absolute or valid public paths
- page language remains Korean-facing where applicable
- JSON-LD is present for landing, blog list, blog detail, or structured content pages
- visible authorship matches JSON-LD author and links to a crawlable editorial-policy page
- page is not accidentally served through Bubble mirror when local metadata is required

Preferred pattern:

- Shared constants/helpers live in `src/seo/metadata.ts`.
- Page metadata should use shared helpers such as `buildPageMetadata` when available.
- Blog detail metadata must derive from the same blog post data used for rendering.

### Optional video SEO branch

When a blog post includes `videoEmbedUrl`:

- Keep video fields optional. Posts without `videoEmbedUrl` remain ordinary article pages and emit no video JSON-LD or video sitemap entry.
- Treat `/video/[slug]` as the dedicated watch page. Put the player near the top and emit `VideoObject` JSON-LD with `name`, `thumbnailUrl`, `uploadDate`, and the provider `embedUrl` (for example, a YouTube embed URL).
- On the long-form `/blog_detail/[slug]` page, use a crawlable thumbnail/link to the watch page instead of making the article itself the watch page. This prevents Search Console's `동영상이 보기 페이지에 없음` finding.
- Add only video-bearing watch URLs to the sitemap. After deployment, inspect representative watch URLs and validate the Video indexing issue in Search Console.

## Bing Webmaster Recommendation Baseline

When Bing SEO Reports flags a URL, inspect the rendered route and its source data together. For indexable `docshunt.ai` pages:

- keep the page title unique and descriptive; titles shorter than 30 characters are a short-title review risk, so aim for 30–60 characters when natural
- write a page-specific meta description that states the reader's problem and useful outcome; descriptions shorter than 70 characters are a short-description review risk, and blog posts should generally stay near 100–150 Korean characters
- provide one meaningful `<h1>` and enough visible content to answer the search intent; never pad copy just to pass a length check
- give informative images useful `alt` text and decorative images `alt=""`
- after blog or metadata edits, audit the rendered title, description, H1, and image alt for every affected Bing URL; source-file inspection alone is insufficient

Keep crawler ownership explicit across the two public domains:

- `https://docshunt.ai/` is the indexable landing/blog surface and owns the public sitemap, `llms.txt`, and `ai.txt`
- `https://app.docshunt.ai/` is the authenticated product SPA; keep `noindex, nofollow, noarchive` in its HTML and production `robots.txt` at `Disallow: /`, without the landing sitemap
- `make.docshunt.ai` is out of scope unless the task explicitly includes it

## Phase 3: Discovery Surface Checklist

When a route is added, renamed, deleted, or made indexable:

- update sitemap route generation
- verify `/sitemap.xml` or sitemap index links to the right child sitemap
- verify `/sitemap-blog_detail.xml` still matches blog slugs when blog data changes
- update `/llms.txt` and `/ai.txt` together when AI-search guidance changes
- update `robots.txt` only when crawl allow/disallow or sitemap location changes
- verify redirects/proxy do not hide the local Next page from crawlers
- verify duplicate draft or preview routes redirect to the canonical public route or use `noindex`
- verify paginated blog content uses crawlable `<a href>` URLs; JavaScript-only buttons are not sufficient discovery links

For non-indexable pages, explicitly record why they are excluded from sitemap/llms/ai surfaces.

## Phase 4: Local Static Guard

Run the bundled guard script:

```bash
node .agents/skills/seo-geo-guard/scripts/check-seo-geo.mjs
```

The script performs repository-level static checks for common drift:

- route files under `src/app`
- SEO/GEO endpoint presence
- shared SEO helper presence
- blog route and proxy collision risk
- `llms.txt` and `ai.txt` route parity
- obvious relative or localhost canonical/OG values

Treat `ERROR` output as blocking. Treat `WARN` output as PR notes unless it is relevant to the current change.

## Phase 4.5: External Structured Data Validation

After deployment, validate representative public URLs:

1. Paste the rendered URL into [Schema.org Validator](https://validator.schema.org/) and resolve all errors.
2. Run [Google Rich Results Test](https://search.google.com/test/rich-results) to check Google-supported result eligibility separately.
3. Confirm that rendered JSON-LD uses `"@context": "https://schema.org"`; do not use the versioned schema vocabulary dump as `@context`.

Record the tested URLs and results in the PR notes. External validators require a reachable deployment and are not a substitute for the local guard.

## Phase 5: Runtime Smoke

After `npm run build`, start a local production server:

```bash
npm run start -- -p 3011
```

Smoke key pages/endpoints. If `curl` is unavailable, use Node `fetch`.

Required for SEO/GEO changes:

- `/`
- `/blog_list`
- `/blog_list?page=2` when more than one blog page exists
- at least one representative `/blog_detail/[slug]`
- `/about`
- `/robots.txt`
- `/sitemap.xml`
- `/sitemap-blog_detail.xml`
- `/llms.txt`
- `/ai.txt`

For a cross-repository audit, verify the app HTML/robots policy in `docs-front` separately. Do not treat authenticated-app H1 or thin-content findings as landing-page defects.

For each endpoint, record:

- HTTP status
- response size or meaningful content check
- canonical/OG presence for HTML pages when relevant
- absolute `https://docshunt.ai` URLs in XML/text outputs

## Phase 6: PR Notes

PR body must state:

- which pages/routes changed
- whether each changed route is indexable
- sitemap impact
- llms/ai impact
- JSON-LD impact
- runtime smoke results
- any intentionally excluded pages and why

Do not write "SEO unaffected" unless the changed route, metadata, sitemap, and crawler surfaces were checked.

## Gotchas

- Adding a `page.tsx` without metadata can still be indexable through inherited layout metadata, causing duplicate or misleading snippets.
- Moving a blog page back behind the Bubble mirror sacrifices local metadata and JSON-LD.
- Updating `/llms.txt` without `/ai.txt` creates AI-search guidance drift.
- Using `localhost`, relative canonical URLs, or preview deployment URLs in metadata is a release blocker.
- Image renames can break OG/social previews even when the visible page still renders.
- Serving different substantive content by crawler `User-Agent` risks cloaking. Keep public page content equivalent and use `robots.txt`, `/llms.txt`, and `/ai.txt` for crawler guidance.

## Search Console Submission

After the production deployment:

1. Verify the site property in Google Search Console and submit `https://docshunt.ai/sitemap.xml`.
2. Use URL Inspection only for newly published or materially updated priority pages.
3. Import the verified property into Bing Webmaster Tools when available, then submit the same sitemap.
4. Record submission dates and coverage errors; sitemap submission is a discovery signal, not an indexing guarantee.

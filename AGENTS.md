# Docs Landing Agent Guide

이 레포는 Docshunt public landing/blog mirror를 운영하는 Next.js 앱이다. 검색엔진, AI 검색/GEO, 공유 미리보기, 정적 자산 이름, 반응형 화면 품질이 제품 표면이다.

## Scope

이 파일은 레포 전체에 적용된다. 더 깊은 `AGENTS.md`가 생기면 해당 디렉터리 규칙이 우선한다.

## Product Surfaces

- Landing: `/`
- Blog list: `/blog_list`
- Blog detail: `/blog_detail/[slug]`
- SEO/GEO endpoints: `/robots.txt`, `/sitemap.xml`, `/sitemap-index.xml`, `/sitemap-blog_list.xml`, `/sitemap-blog_detail.xml`, `/llms.txt`, `/ai.txt`
- Static assets: `public/docshunt-assets/**`, `public/docshunt-assets/blog-inline/**`

## Repository Commands

- Install: `npm ci`
- Lint and type-check: `npm run validate`
- Precommit verification: `npm run precommit`
- Format check: `npm run format:check`
- Build: `npm run build`
- Sensitive-info scan: `npm run security:scan`
- Production smoke: `npm run start -- -p 3011`
- Dev server: `npm run dev -- -p 3001`

`npm run build` is required before PR handoff. It verifies static page generation and route handlers.

## Skill Routing

- PR 준비/게시: `.agents/skills/submit-pr/SKILL.md`
- 랜딩, 블로그, 디자인, 정적 자산, SEO/GEO 수정: `.agents/skills/landing-change/SKILL.md`
- 새 페이지, 기존 페이지, route, metadata, sitemap, robots, llms.txt, ai.txt, proxy 변경의 SEO/GEO 영향 감지: `.agents/skills/seo-geo-guard/SKILL.md`
- 한국어 블로그 주제·키워드·후킹 제목·자연스러운 본문·사실검증·대표 이미지 제작·외부 문장 검수: `.agents/skills/docshunt-blog-editor/SKILL.md`
- 블로그 글 작성/수정/가져오기 및 post 단위 데이터 관리: `.agents/skills/blog-writing/SKILL.md`

Codex-compatible skill discovery is exposed through `.codex/skills` when the symlink is present.

## SEO and GEO Rules

- Use `src/seo/metadata.ts` as the source of truth for shared titles, descriptions, URLs, OG image, verification tokens, JSON-LD helpers, and crawler-facing constants.
- Canonical and `og:url` values must be absolute `https://docshunt.ai/...` URLs, never relative paths or localhost URLs.
- Keep Bubble-era SEO assets unless there is an explicit product decision to replace them.
- When blog slugs or blog data change, verify `sitemap-blog_detail.xml` still emits all intended blog detail URLs.
- If adding AI-search documentation, update `/llms.txt` and `/ai.txt` together.
- When adding or editing a page, run the SEO/GEO guard skill and record whether metadata, sitemap, JSON-LD, robots, llms.txt, and ai.txt are affected.

## Blog and Design Rules

- Preserve the current editorial landing style: dark hero, bold Korean headline rhythm, large visual product screenshots, compact CTA copy, and blog typography.
- Blog list/detail pages must continue to render locally through Next.js, not Bubble-mirrored HTML.
- Do not re-enable `/blog_list` or `/blog_detail` in `src/proxy.ts` unless the PR explicitly says metadata and JSON-LD will be sacrificed.
- Blog post metadata lives one file per post under `src/data/blog-posts/`; do not add new post objects directly to `src/data/docshunt-blogs.ts`.
- For blog content changes, keep title, description, slug, source URL, hero image, JSON-LD, and sitemap behavior aligned.
- For visual/layout changes, verify mobile, tablet, and desktop viewports with Playwright screenshots before PR handoff.

## Static Asset Rules

- Do not add generic filenames like `asset-01.png` for new assets.
- Use descriptive lowercase kebab-case names that describe the image purpose, for example `hero-step-business-info-desktop.png`.
- When renaming assets, update `public/docshunt-assets/manifest.json` and any source references in the same change.
- Before deleting or renaming an asset, run `rg "<filename>" .` and verify there are no stale references.

## Required Verification

For any PR that changes landing, blog, SEO/GEO, styles, or public assets:

1. `npm run security:scan`
2. `npm run precommit`
3. `npm run build`
4. `node .agents/skills/seo-geo-guard/scripts/check-seo-geo.mjs` when pages, routes, metadata, proxy, blog data, or crawler endpoints change
5. Playwright screenshots at:
   - mobile: `390x844`
   - tablet: `768x1024`
   - desktop: `1440x1000`
6. Curl smoke for SEO/GEO endpoints when changed:
   - `/robots.txt`
   - `/sitemap.xml`
   - `/sitemap-blog_detail.xml`
   - `/llms.txt`
   - `/ai.txt`

PR notes must include which checks ran and where screenshots/artifacts were saved.

## Precommit and CI Rules

- `.githooks/pre-commit` runs `npm run precommit`.
- `npm run precommit` must run type-check, lint, and format check.
- `npm run check` must include `npm run security:scan` because this repository is intended to be public.
- CI must test the pre-commit hook itself before build.
- If a file is intentionally excluded from Prettier, record the reason in `.prettierignore`.

## Git and PR Rules

- Never push directly to `main`.
- Never force-push.
- Because this is a public repository, run `npm run security:scan` and review the result before every push.
- Do not push if the sensitive-info scan reports `.env`, private key material, API tokens, credentialed URLs, DB URLs, local cache, or private production data.
- Codex and other coding agents must never merge PRs into `main`.
- Do not merge through `gh pr merge`, GitHub REST/GraphQL API, local git merge, auto-merge enablement, or any other automated path.
- `main` merge is a conservative human release action and must be performed directly by a maintainer in the GitHub web UI after reviewing checks, preview deployment, SEO/GEO impact, and rollout risk.
- GitHub branch protection for `main` must keep force-push disabled, require `precommit-and-build`, and require conversation resolution before merge.
- If required checks fail or any PR review thread/comment remains unresolved, the PR must not be merged.
- Stage only the intended files; do not use `git add -A` in mixed worktrees.
- Draft PRs are preferred unless the user explicitly asks for ready review.
- Commit messages should follow the recent history while using Korean Conventional Commit style by default, for example `chore: 랜딩 PR 제출 규칙 정렬`.
- PR titles should use the same Korean Conventional Commit style, for example `feat: 랜딩 SEO/GEO 메타데이터 보강`.
- PR body must use the Docshunt Korean QA format from `.agents/skills/submit-pr/SKILL.md`, including `변경 사항`, `QA 안내`, `QA 체크리스트`, `코드 리뷰 결과`, `변경된 파일`, and `리스크 및 후속 작업`.
- PR notes should describe user-visible behavior, changed scope, verification evidence, risks, and follow-up work, not only implementation details.

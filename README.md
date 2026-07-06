# Docs Landing

Docshunt landing and blog mirror built with Next.js.

이 레포는 `https://docshunt.ai` 랜딩, 블로그 목록/상세, Bubble fallback mirror, 검색엔진/AI 검색 노출을 위한 public-facing 웹 표면을 관리합니다.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS/PostCSS
- Playwright for responsive browser QA
- Vercel for preview and production deployments

## Local Setup

Node.js 24 이상을 사용합니다.

```bash
npm ci
npm run dev
```

기본 개발 서버는 `http://localhost:3001`입니다.

LAN에서 확인해야 할 때:

```bash
npm run dev:host
```

## Commands

```bash
npm run validate
npm run build
npm run check
```

- `npm run validate`: ESLint와 TypeScript 검증
- `npm run build`: production build
- `npm run check`: security scan, precommit, build를 순서대로 실행하는 PR 전 기본 검증

## Main Surfaces

- `/`: Docshunt landing page
- `/blog_list`: blog list page
- `/blog_detail/[slug]`: blog detail page
- `/mirror/[...path]`: Bubble origin fallback mirror

SEO/GEO endpoint가 추가된 브랜치에서는 다음 경로도 production smoke 대상입니다.

- `/robots.txt`
- `/sitemap.xml`
- `/sitemap-index.xml`
- `/sitemap-blog_list.xml`
- `/sitemap-blog_detail.xml`
- `/llms.txt`
- `/ai.txt`

## SEO/GEO Guard

새 페이지가 생기거나 기존 페이지, route, metadata, sitemap, robots, `llms.txt`, `ai.txt`, proxy, blog data가 바뀌면 repo-local skill을 먼저 확인합니다.

```text
.agents/skills/seo-geo-guard/SKILL.md
```

정적 drift 검사는 아래 명령으로 실행합니다.

```bash
node .agents/skills/seo-geo-guard/scripts/check-seo-geo.mjs
```

페이지 변경 시 PR에는 다음 영향 여부를 적습니다.

- metadata/canonical/OG
- sitemap
- JSON-LD
- robots
- `llms.txt` / `ai.txt`
- Bubble mirror/proxy fallback

## Blog Posts

Blog post metadata is split one file per post under:

```text
src/data/blog-posts/
```

The aggregate order lives in:

```text
src/data/blog-posts/index.ts
```

Existing imports should continue to use:

```ts
import { BLOG_POSTS } from "@/data/docshunt-blogs";
```

`src/data/docshunt-blogs.ts` is a compatibility facade with shared helpers such as `findBlogPost` and `getRecommendedPosts`.

When writing or editing blog posts, follow:

```text
.agents/skills/blog-writing/SKILL.md
```

## Responsive QA

랜딩, 블로그, 디자인, 정적 자산을 변경하면 Playwright로 최소 아래 viewport를 확인합니다.

- mobile: `390x844`
- tablet: `768x1024`
- desktop: `1440x1000`

확인 대상:

- `/`
- `/blog_list`
- 대표 `/blog_detail/[slug]`

스크린샷은 `test-results/responsive/`처럼 git에 올리지 않는 경로에 저장합니다.

## Vercel Deployment

권장 운영 방식:

- Pull Request: Preview Deployment
- GitHub web UI에서 maintainer가 `main`으로 merge: Production Deployment
- Production domain: `docshunt.ai`

Vercel Project 설정:

| Setting           | Value           |
| ----------------- | --------------- |
| Framework Preset  | Next.js         |
| Root Directory    | `./`            |
| Install Command   | `npm ci`        |
| Build Command     | `npm run check` |
| Output Directory  | 비워둠          |
| Production Branch | `main`          |
| Node.js Version   | `24.x`          |

Vercel Git Integration을 연결하면 PR마다 preview URL이 생성되고, `main`에 병합되는 commit이 production deployment가 됩니다.

`main` 병합은 매우 보수적으로 진행합니다. Codex나 다른 coding agent는 CLI/API/local git으로 PR을 merge하지 않습니다. Maintainer가 GitHub 웹 UI에서 checks, preview deployment, SEO/GEO 영향, rollout risk를 직접 확인한 뒤 merge합니다.

`main` branch protection:

- force push disabled
- `precommit-and-build` required
- conversation resolution required
- failed checks or unresolved review comments block merge

### Environment Variables

현재 코드는 기본값 fallback을 갖고 있지만, Vercel Project에는 아래 값을 명시하는 것을 권장합니다.

```text
NEXT_PUBLIC_GTM_ID
NEXT_PUBLIC_GA_ID
NEXT_PUBLIC_META_PIXEL_ID
```

Production과 Preview 모두에 설정하면 preview에서도 실제 analytics tag 동작을 확인할 수 있습니다.

### Domain Cutover

1. Vercel preview deployment에서 PR 화면 확인
2. PR merge 후 `main` production deployment 확인
3. Vercel Project > Domains에 `docshunt.ai` 추가
4. 필요하면 `www.docshunt.ai`도 추가
5. Vercel이 안내하는 DNS record로 변경
6. Search Console과 Naver Search Advisor에 sitemap 제출

## Git And PR Rules

- `main`에 직접 push하지 않습니다.
- Codex나 다른 coding agent는 PR을 `main`에 병합하지 않습니다.
- `gh pr merge`, GitHub REST/GraphQL API, local `git merge`, auto-merge enablement로 병합하지 않습니다.
- `main` 병합은 maintainer가 GitHub 웹 UI에서 직접 수행합니다.
- 테스트가 실패하거나 unresolved review comment/thread가 남아 있으면 병합하지 않습니다.
- force push하지 않습니다.
- PR은 draft로 시작하는 것을 기본으로 합니다.
- PR 본문에는 변경 사항, QA 안내, QA 체크리스트, 코드 리뷰 결과, 변경된 파일, 리스크 및 후속 작업을 한글로 적습니다.
- 변경 파일만 명시적으로 stage합니다. mixed worktree에서 `git add -A`를 사용하지 않습니다.

권장 PR 검증:

```bash
npm run check
```

`npm run check`는 public repo push 전에 민감정보가 섞이지 않았는지 확인하는 `npm run security:scan`을 먼저 실행합니다.

precommit/CI 규칙이 있는 브랜치에서는 아래도 함께 사용합니다.

```bash
npm run precommit
```

## Public Repository Readiness

레포를 public으로 전환하기 전에는 아래를 확인합니다.

- `.env`, private key, API key, DB URL이 tracked file과 git history에 없는지 확인
- push 전에 `npm run security:scan`을 실행하고, 실패하면 원인을 제거하기 전까지 push하지 않기
- `LICENSE`가 Docshunt 소유권과 재사용 허가 범위를 정확히 표현하는지 확인
- `package.json`의 repository, homepage, bugs URL이 `Docshunt/docs-landing` 기준인지 확인
- `public/docshunt-assets/**`와 blog inline image를 public repo에 게시해도 되는지 확인
- agent instructions 공개가 내부 운영상 문제가 없는지 확인

GitHub repo visibility 전환은 코드 변경과 별도로 GitHub 설정에서 수행합니다.

## Notes

- `next.config.ts`의 `output: "standalone"`은 self-hosting에 필요한 설정입니다. Vercel 연결용으로는 제거하는 것을 권장합니다.
- Bubble CDN URL은 현재 공개 웹 자산과 동일한 전제에서 유지됩니다.
- 실제 배포 전에는 preview URL에서 랜딩, 블로그, SEO endpoint를 확인한 뒤 production domain을 전환합니다.

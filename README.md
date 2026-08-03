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

### Notion Blog CMS

`NOTION_API_KEY`와 `NOTION_BLOG_DATA_SOURCE_ID`가 모두 설정되면 `상태`가 `게시`인 Notion 글이 정적 블로그 데이터를 덮어씁니다. 새 글도 목록, 상세 페이지, 블로그 sitemap에 포함됩니다. Notion 응답은 60초 동안 캐시되며, 설정 누락이나 API 오류가 있으면 저장소의 정적 글로 자동 폴백합니다.

Notion 데이터베이스에는 다음 속성이 필요합니다.

| 속성        | 타입                              |
| ----------- | --------------------------------- |
| 제목        | Title                             |
| Slug        | Rich text                         |
| 상태        | Select (`초안`, `검토중`, `게시`) |
| 설명        | Rich text                         |
| 게시일      | Date                              |
| 목록 이미지 | URL                               |
| 대표 이미지 | URL                               |
| 작성자      | Rich text                         |
| SEO 검수    | Checkbox                          |
| 정렬        | Number                            |
| 마지막 수정 | Last edited time                  |

연결 순서:

1. Notion에서 내부 Integration을 만들고 읽기 권한을 부여합니다.
2. 블로그 데이터베이스 우측 상단 `•••` → `연결 추가`에서 해당 Integration을 공유합니다.
3. GitHub `dev`, `prod` Environment에 `NOTION_BLOG_DATA_SOURCE_ID`를 variable로, `NOTION_API_KEY`를 secret으로 등록합니다.
4. 로컬 개발에서는 셸 환경변수로 같은 값을 전달한 뒤 `npm run dev`를 실행합니다.

API 키나 실제 환경 파일은 저장소에 커밋하지 않습니다.

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

- PR 생성 및 업데이트: GitHub `dev` Environment 변수로 Preview Deployment
- `v*` GitHub Release 발행: GitHub `prod` Environment 변수로 Production Deployment
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

Vercel 배포는 `.github/workflows/vercel.yml`에서 수행합니다.

- PR 생성, 새 commit push, 재오픈: 동일 저장소 PR에 Vercel Preview를 배포하고 고유 URL을 제공
- `v*` GitHub Release 발행: 태그가 `main` commit을 가리키는지 확인한 뒤 Vercel Production 배포
- 외부 fork PR과 GitHub prerelease는 배포하지 않음

`vercel.json`은 Vercel Git Integration의 자동 배포를 비활성화합니다. 따라서 PR Preview와 Production 배포는 GitHub Actions만 수행합니다.

`main` 병합은 매우 보수적으로 진행합니다. Codex나 다른 coding agent는 CLI/API/local git으로 PR을 merge하지 않습니다. Maintainer가 GitHub 웹 UI에서 checks, preview deployment, SEO/GEO 영향, rollout risk를 직접 확인한 뒤 merge합니다.

`main` branch protection:

- force push disabled
- `precommit-and-build` required
- conversation resolution required
- failed checks or unresolved review comments block merge

### Environment Variables

GitHub의 `dev`, `prod` Environment에 아래 값을 Environment variables로 설정합니다.

```text
VERCEL_ORG_ID
VERCEL_PROJECT_ID
NEXT_PUBLIC_APP_ORIGIN
NEXT_PUBLIC_CHANNEL_ORIGIN
```

`NEXT_PUBLIC_SITE_ORIGIN`은 `dev`에서 main 고정 Vercel alias를, `prod`에서 `https://docshunt.ai`를 사용합니다.

Vercel CLI 인증값은 각 GitHub Environment 안에 같은 secret 이름으로 설정합니다. 각 배포 잡은 지정된 Environment의 값만 읽습니다.

```text
dev  Environment secret: VERCEL_TOKEN
prod Environment secret: VERCEL_TOKEN
```

`prod` Environment에는 required reviewer와 `v*` tag deployment restriction을 설정해 PR workflow가 Production Environment에 접근하지 못하게 합니다. 현재 두 Environment의 Vercel 토큰 값은 같으며, 별도 최소 권한 Preview 토큰을 발급하면 `dev`의 값만 교체합니다.

PostHog 값은 GitHub `prod` Environment variables에만 설정하고 Production Release 배포에서만 Vercel로 전달합니다. Preview 잡은 PostHog 값이 비어 있는지 검증하고 build/runtime 변수에 빈 값을 명시해 analytics를 로드하지 않습니다. Production 잡은 두 값이 유효한지 검증한 뒤 build/runtime에 전달합니다.

```text
NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
NEXT_PUBLIC_POSTHOG_HOST
```

GTM, GA, Meta Pixel 기본값을 재정의할 때는 Vercel Project의 Preview와 Production 환경에 각각 설정합니다.

```text
NEXT_PUBLIC_GTM_ID
NEXT_PUBLIC_GA_ID
NEXT_PUBLIC_META_PIXEL_ID
```

공개 origin과 Vercel project ID는 secret이 아니므로 GitHub Environment variables를 사용합니다.

### Domain Cutover

1. PR의 Vercel Preview deployment에서 화면 확인
2. PR을 `main`에 병합
3. Vercel Project > Domains에 `docshunt.ai` 추가
4. 필요하면 `www.docshunt.ai`도 추가
5. Vercel이 안내하는 DNS record로 변경
6. 병합 commit에 `v*` 릴리즈 태그로 GitHub Release를 발행해 Production 배포
7. Search Console과 Naver Search Advisor에 sitemap 제출

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

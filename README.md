# Docs Landing

Docshunt의 랜딩과 정적 블로그를 운영하는 Next.js 앱입니다.

## 시작하기

Node.js 24 이상이 필요합니다.

```bash
npm ci
npm run dev
```

개발 서버: `http://localhost:3001`

LAN에서 확인하려면 `npm run dev:host`를 사용합니다.

## 주요 명령

```bash
npm run validate       # ESLint + TypeScript
npm run build          # production build
npm run security:scan  # 민감정보 검사
npm run precommit      # type-check + lint + format
npm run check          # security:scan + precommit + build
```

## 주요 경로

- `/`: 랜딩
- `/blog_list`: 블로그 목록
- `/blog_detail/[slug]`: 블로그 상세
- `/pricing`, `/refund-event`: 요금제와 환급 안내
- `/robots.txt`, `/sitemap*.xml`, `/llms.txt`, `/ai.txt`: SEO/GEO 엔드포인트

## 블로그 작업

포스트 메타데이터와 본문은 `src/data/blog-posts/`에 포스트별 파일로 관리합니다. 파일·심볼은 안정적인 번호순으로 관리하고, 실제 목록은 작성일 최신순으로 계산합니다. 기존 호환 import는 `src/data/docshunt-blogs.ts`를 사용합니다.

새 글이나 글 수정은 다음 가이드를 먼저 확인합니다.

- `.agents/skills/blog-writing/SKILL.md`
- `.agents/skills/seo-geo-guard/SKILL.md`

## 반응형 QA

랜딩·블로그·스타일을 변경하면 아래 viewport에서 확인합니다.

- mobile: `390x844`
- tablet: `768x1024`
- desktop: `1440x1000`

대상 경로는 `/`, `/blog_list`, 대표 `/blog_detail/[slug]`이며, 스크린샷은 `test-results/responsive/`에 저장합니다.

## 배포와 브랜치

- PR Preview는 `.github/workflows/vercel.yml`이 Vercel에 배포합니다.
- Production은 `main` 기준 `v*` GitHub Release에서 배포합니다.
- `main`은 `precommit-and-build` 상태 검사와 conversation resolution을 요구합니다.
- 관리자 계정은 보호 규칙을 우회할 수 있지만, force push는 계속 금지합니다.
- Codex와 coding agent는 `main`에 직접 push하거나 PR을 merge하지 않습니다.

PR 전에는 `npm run check`를 실행하고, 변경 범위·QA 결과·남은 리스크를 PR 본문에 기록합니다.

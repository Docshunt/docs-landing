---
name: submit-pr
description: Docs Landing 변경사항에 대해 precommit/build/Playwright/SEO smoke 검증 → 리뷰 → P0/P1 자동수정 가능 항목 처리 → P2 사용자확인 → 한글 커밋/PR 생성까지 자동 수행합니다. "PR 올려줘", "PR 생성", "submit pr", "코드 제출", "PR 만들어줘" 요청 시 호출.
---

# Submit PR Skill

`docs-landing` 변경사항을 검증하고, 꼭 필요한 수정만 반영한 뒤 `main` 대상 PR을 생성하거나 열린 PR을 갱신합니다.

이 스킬은 Docshunt child repo의 submit-pr 구조를 따르되, landing/blog/SEO/GEO/static asset/agent workflow 변경에 맞게 검증 명령과 QA 항목을 조정합니다.

## 절대 금지: main 병합

- Codex와 다른 coding agent는 어떤 경우에도 PR을 `main`에 병합하지 않습니다.
- `gh pr merge`, GitHub REST/GraphQL API, local `git merge`, auto-merge enablement 등 자동화 경로로 `main` 병합을 수행하지 않습니다.
- `main` 병합은 보수적인 release gate이며, maintainer가 GitHub 웹 UI에서 checks, preview deployment, SEO/GEO 영향, rollout risk를 직접 확인한 뒤 수행해야 합니다.
- `main` branch protection은 force push 금지, `precommit-and-build` required check, conversation resolution required 상태를 유지해야 합니다.
- required check가 실패했거나 unresolved review thread/comment가 남아 있으면 절대 병합하지 않습니다.
- 사용자가 "머지해줘"라고 요청해도 agent는 병합하지 않고, GitHub 웹 UI에서 직접 진행해야 한다고 안내합니다.

## 실행 흐름

### Phase 0: 작업 워크트리 검증

1. 현재 위치와 git 상태를 확인합니다.

   ```bash
   git status -sb
   git branch --show-current
   git log --oneline -n 10
   ```

2. 현재 브랜치가 `main`이면 PR 작업을 바로 진행하지 않습니다.
   - 사용자가 브랜치명을 준 경우 그 이름을 사용합니다.
   - 없으면 변경 목적에 맞춰 `feat/*`, `fix/*`, `chore/*`, `docs/*` 중 하나로 새 브랜치를 만듭니다.
   - Codex 기본 브랜치가 필요한 경우 `codex/<topic>`을 사용할 수 있습니다.
3. 이미 열린 PR이 있으면 새 PR을 만들지 말고 기존 PR을 갱신합니다.
4. root task workspace에서 시작된 작업이면 root task ledger의 브랜치/경로 기록을 확인하고, 현재 checkout과 다르면 중단합니다.

### Phase 1: 사전 검증

1. 변경 파일을 중복 없이 수집합니다.

   ```bash
   changed_files=$(
     (
       git diff --name-only
       git diff --cached --name-only
       git ls-files --others --exclude-standard
     ) | sort -u
   )
   ```

2. 변경 파일이 없고 unpushed commit도 없으면 즉시 중단하고 사용자에게 알립니다.
3. 변경 범위를 분류합니다.
   - 랜딩/UI: `src/app/page.tsx`, `src/app/globals.css`, shared component
   - 블로그: `src/app/blog_*`, `src/data/docshunt-blog*`, blog shell/client
   - SEO/GEO: `src/seo/**`, `robots`, `sitemap`, `llms.txt`, `ai.txt`, metadata
   - 정적 자산: `public/docshunt-assets/**`
   - Agent/Workflow: `AGENTS.md`, `CLAUDE.md`, `.agents/**`, `.codex/**`, `.githooks/**`, `.github/**`, scripts
   - 공개 전환 준비: `LICENSE`, `package.json`, repository metadata, asset provenance notes

### Phase 2: 정적 검증

기본 검증은 항상 실행합니다.

```bash
npm run security:scan
npm run precommit
npm run build
```

`npm run precommit`은 type-check, lint, format check를 모두 포함해야 합니다.
`npm run security:scan`은 public repo에 push되면 안 되는 `.env`, private key, API token, credentialed URL, DB URL, local cache, private production data를 사전에 차단해야 합니다.

변경 유형별 추가 검증:

- 랜딩/블로그/디자인/정적 자산 변경:
  - `.agents/skills/landing-change/SKILL.md`의 Playwright responsive QA를 실행합니다.
  - mobile `390x844`, tablet `768x1024`, desktop `1440x1000`에서 `/`, `/blog_list`, 대표 `/blog_detail/[slug]`를 확인합니다.
- SEO/GEO 변경:
  - `next start` 또는 standalone 서버를 띄워 `/robots.txt`, `/sitemap.xml`, `/sitemap-blog_detail.xml`, `/llms.txt`, `/ai.txt`의 HTTP 200과 응답 내용을 확인합니다.
  - `curl`이 없으면 Node `fetch` 등 동등한 HTTP smoke로 대체하고 PR에 명시합니다.
- 정적 자산 rename:
  - `public/docshunt-assets/manifest.json`의 경로가 실제 파일과 일치하는지 확인합니다.
  - `rg "asset-[0-9]" public/docshunt-assets src`로 일반 파일명이 남지 않았는지 확인합니다.
- 공개 전환 준비:
  - secret/env/private key 검색 결과
  - `LICENSE`, `package.json`, public asset provenance, agent instruction exposure risk를 확인합니다.

검증 실패 시 자동 수정 가능한 범위만 수정하고 재검증합니다. 자동 수정이 어렵거나 범위를 벗어나면 정확한 실패 명령과 에러를 사용자에게 보고하고 중단합니다.

### Phase 3: 리뷰

1. 변경된 파일을 실제로 읽고, PR 본문에 적을 사용자 영향과 QA 진입점을 확인합니다.
2. 코드리뷰 관점으로 아래 리스크를 점검합니다.
   - canonical/OG URL이 상대 경로나 localhost로 바뀌는 SEO 회귀
   - blog page가 Next local page 대신 Bubble mirror HTML로 돌아가는 회귀
   - sitemap URL 누락, Naver verification 누락, `/llms.txt`와 `/ai.txt` 불일치
   - mobile/tablet/desktop overflow, 텍스트 겹침, blank image
   - stale asset filename 또는 broken local asset URL
   - `.env`, local cache, secret, private production data, generated artifact 포함
   - push 전 `npm run security:scan` 누락 또는 실패
   - 공개 전환 준비 변경 시 license/소유권/재배포 허용 범위 오해
3. 결과 처리:
   - `P0`/`P1` 발견 → 자동 수정 가능한 범위만 수정하고 재검증
   - `P2` 발견 → 사용자에게 목록과 수정 제안을 보여주고 선택된 항목만 수정
   - `P3`만 존재 → PR 본문 Notes/Known Issues에 기록할지 판단하고 진행

### Phase 4: 커밋 & 푸시

1. 커밋 전 최근 히스토리와 staged diff를 확인합니다.

   ```bash
   git log --oneline -n 10
   git diff --cached --name-status
   git diff --cached --check
   ```

2. 변경 파일만 명시적으로 stage합니다. mixed worktree에서 `git add -A`를 사용하지 않습니다.
3. 이 레포는 public repo이므로 push 전에 반드시 민감정보 스캔을 다시 실행합니다.

   ```bash
   npm run security:scan
   ```

   실패하면 push하지 않습니다. `.env`, private key, API token, credentialed URL, DB URL, local cache, private production data가 tracked/staged/untracked publish 범위에 있는지 먼저 제거합니다.

4. 커밋 메시지는 최근 커밋 패턴을 따르되, Docshunt 규칙처럼 **한글 conventional commit**을 기본으로 합니다.

   예시:

   ```text
   chore: 랜딩 PR 제출 규칙 정렬
   fix: 블로그 canonical 메타데이터 보강
   feat: AI 검색용 sitemap 엔드포인트 추가
   docs: 공개 전환 라이선스 기준 문서화
   ```

5. 의미가 다른 변경은 커밋을 분리합니다.
   - 기능/SEO 변경
   - agent/workflow 규칙 변경
   - public-readiness/license 변경
6. 열린 PR이 있으면 history rewrite 없이 follow-up commit을 추가합니다. force-push는 금지합니다.
7. 푸시합니다.

   ```bash
   git push -u origin "$(git branch --show-current)"
   ```

### Phase 5: PR 생성 또는 갱신

1. PR 제목은 한글 conventional style을 사용합니다.

   예시:

   ```text
   feat: 랜딩 SEO/GEO 메타데이터 보강
   chore: 랜딩 PR 검증 워크플로 정렬
   docs: 공개 전환 라이선스 기준 정리
   ```

2. Draft PR을 기본으로 합니다. 사용자가 명시적으로 ready review를 요청한 경우에만 draft가 아닌 PR을 만듭니다.

3. PR 생성:

   ```bash
   gh pr create --draft --base main --head "$(git branch --show-current)" --title "<한글 PR 제목>" --body-file <body-file>
   ```

4. 열린 PR 갱신:
   - 기존 PR이 있으면 새 PR을 만들지 않고 제목/본문을 현재 변경 기준으로 갱신합니다.
   - `gh pr edit`가 GitHub Projects classic GraphQL deprecation 오류로 실패하면 REST API를 사용합니다.

   ```bash
   gh api repos/Docshunt/docs-landing/pulls/<number> -X PATCH -f title="<한글 PR 제목>" -f body="$(cat <body-file>)"
   ```

5. PR 본문은 반드시 한글로 작성하고, 실제 코드를 읽은 내용만 포함합니다.

   ```markdown
   ## 변경 사항

   [사용자/QA 관점에서 화면, 검색 노출, crawler endpoint, agent workflow가 어떻게 바뀌는지 서술]

   - **핵심 변경 1**: 실제 동작 결과를 설명
   - **핵심 변경 2**: 실제 동작 결과를 설명

   ---

   ## QA 안내

   | 항목             | 내용                                                                                 |
   | ---------------- | ------------------------------------------------------------------------------------ |
   | 테스트 환경      | 로컬 `http://localhost:<port>` 또는 배포 환경                                        |
   | 배포 브랜치      | `<현재 브랜치명>`                                                                    |
   | 변경 기능 진입점 | `/`, `/blog_list`, `/blog_detail/[slug]`, `/robots.txt`, `/sitemap.xml` 등 실제 경로 |
   | 사전 조건        | 필요한 계정/데이터/환경이 있으면 기재, 없으면 `없음`                                 |

   ---

   ## QA 체크리스트

   ### ✅ 정상 케이스

   - [ ] [대표 경로 접속] → [기대 결과]
   - [ ] [SEO/GEO endpoint 확인] → [기대 결과]

   ### ⚠️ 비정상 / 엣지 케이스

   - [ ] [없는 blog slug 또는 proxy fallback] → [기대 동작]
   - [ ] [이미지/정적 자산 누락 상황] → [기대 동작]

   ### 🔁 회귀 테스트

   - [ ] [기존 랜딩 CTA/헤더/푸터]가 기존과 동일하게 동작하는지 확인
   - [ ] [기존 블로그 목록/상세]가 기존과 동일하게 읽히는지 확인

   ---

   ## 코드 리뷰 결과

   - ✅ `npm run security:scan` 통과
   - ✅ `npm run precommit` 통과
   - ✅ `npm run build` 통과
   - ✅ Playwright 반응형 QA 통과
   - ✅ SEO/GEO smoke 통과
   - ⚠️ Known Issues: [없으면 `없음`, 있으면 정확히 기재]

   ## 변경된 파일

   - `파일1` - 설명
   - `파일2` - 설명

   ## 리스크 및 후속 작업

   - [배포 후 Search Console/Naver 제출 등]
   - [public repo 전환 시 남은 법무/자산/운영 리스크]
   ```

6. QA 체크리스트 작성 원칙:
   - 실제 route/component/data 파일을 읽고 경로와 문구를 확인합니다.
   - 비개발자 QA도 따라 할 수 있게 "무엇을 해서 어떤 결과가 나와야 하는지"로 씁니다.
   - 구현 세부 용어는 필요한 만큼만 사용합니다.
   - 실행하지 않은 검증은 통과했다고 쓰지 말고 Known Issues 또는 미검증 항목에 남깁니다.

### Phase 6: 병합 handoff

Agent는 여기서 멈춥니다. 다음 내용만 사용자에게 전달합니다.

- PR URL
- 최신 commit
- CI/check 상태
- unresolved conversation 여부
- preview deployment 확인 여부
- 남은 Known Issues
- `main` 병합은 GitHub 웹 UI에서 maintainer가 직접 해야 한다는 안내

## 자동 수정 범위

### 자동 수정 O

- lint/type/format 오류 중 기계적으로 안전한 수정
- 명확한 import/path 오류
- broken asset reference
- stale metadata/sitemap helper 호출
- 민감 정보 하드코딩 제거
- PR body/title이 Docshunt 한글 포맷과 맞지 않는 문제

### 사용자 확인 필요 (`P2`)

- SEO title/description/카피 의미 변경
- 디자인 레이아웃 또는 CTA 문구 변경
- 공개 전환 시 license를 MIT에서 proprietary로 바꾸는 결정
- asset 삭제 또는 재촬영/교체
- Bubble mirror proxy 범위 변경
- analytics/pixel ID 제거 또는 교체

### 자동 수정 X

- 브랜드/법인 소유권 판단
- 외부 이미지/폰트 재배포 허용 여부의 법무 판단
- production analytics 계정 전환
- repo visibility를 실제 public/private로 바꾸는 GitHub 설정 변경

## 주의사항

- `main` 직접 push 금지
- `main` 병합 금지: agent는 CLI/API/local git으로 PR을 병합하지 않는다
- required check 실패 또는 unresolved comment/thread가 있으면 병합 금지
- force-push 금지
- `git add -A` 금지
- `.env`, `.vercel`, `.next`, `test-results`, local task ledger, 개인 설정 파일 커밋 금지
- public repo이므로 push 전 `npm run security:scan`을 통과하지 못하면 push 금지
- PR 생성/갱신 전 변경 범위와 검증 결과를 다시 확인
- 열린 PR이 있으면 기존 PR을 갱신하고 새 PR을 만들지 않음
- public-readiness 변경은 보안, 라이선스, 자산 출처, agent 지침 노출 리스크를 PR에 명시

## Gotchas

> Codex가 이 스킬 실행 시 자주 빠지는 함정 목록.
> 실수를 발견할 때마다 여기에 한 줄씩 추가한다.

- PR 본문을 영어 `Summary / Verification / QA Notes` 템플릿으로 작성하지 말 것. Docshunt 한글 QA 포맷을 사용한다.
- `gh pr edit`가 Projects classic GraphQL deprecation 오류로 실패하면 REST API PATCH로 제목/본문을 갱신한다.
- `curl`이 없는 로컬 환경이 있을 수 있다. 이때 Node `fetch` smoke로 대체하고 PR 본문에 대체 사실을 적는다.
- Playwright screenshot이 font readiness에서 멈추면 `PW_TEST_SCREENSHOT_NO_FONTS_READY=1`로 재실행하고 사유를 기록한다.

---
name: submit-pr
description: Verify docs-landing changes, run responsive QA when needed, stage intentional files, push, and create or update a draft PR.
---

# Docs Landing Submit PR Skill

This skill adapts the Docshunt frontend submit-pr flow for the standalone `docs-landing` Next.js repository.

## Phase 1: Scope and Branch

1. Inspect status and branch:
   ```bash
   git status -sb
   git branch --show-current
   ```
2. If there are no changes and no unpublished commits, stop.
3. Never push directly to `main`; use a feature branch such as `codex/<topic>`, `feat/<topic>`, `fix/<topic>`, or `chore/<topic>`.
4. Collect changed files with:
   ```bash
   (
     git diff --name-only
     git diff --cached --name-only
     git ls-files --others --exclude-standard
   ) | sort -u
   ```

## Phase 2: Required Verification

Always run:

```bash
npm run validate
npm run build
```

If landing, blog, styles, assets, or public rendering changed, also run the responsive Playwright checks from `.agents/skills/landing-change/SKILL.md`.

If SEO/GEO endpoints changed, run production smoke against a local `next start` server:

```bash
npm run start -- -p 3011
curl -L -sS -o /tmp/robots.txt -w '%{http_code}\n' http://localhost:3011/robots.txt
curl -L -sS -o /tmp/sitemap.xml -w '%{http_code}\n' http://localhost:3011/sitemap.xml
curl -L -sS -o /tmp/sitemap-blog_detail.xml -w '%{http_code}\n' http://localhost:3011/sitemap-blog_detail.xml
curl -L -sS -o /tmp/llms.txt -w '%{http_code}\n' http://localhost:3011/llms.txt
curl -L -sS -o /tmp/ai.txt -w '%{http_code}\n' http://localhost:3011/ai.txt
```

Record failures exactly. Do not claim checks passed if they were not run.

## Phase 3: Review

Before committing, review the staged diff:

```bash
git diff --cached --stat
git diff --cached --check
```

Risk-prioritize:

- SEO regressions: relative canonical/OG URLs, missing sitemap URLs, missing Naver verification.
- Blog regressions: Bubble mirror HTML served for blog pages, missing slugs, unreadable article pages.
- Design regressions: mobile/tablet/desktop overflow, text overlap, blank images.
- Asset regressions: stale filenames, broken local asset URLs.

Fix P0/P1 issues before PR. Mention unresolved P2 risks in the PR.

## Phase 4: Stage, Commit, Push

- Stage only intended files. Do not use `git add -A` in a mixed worktree.
- Use recent commit style unless the user asks otherwise.
- Push the active feature branch:
  ```bash
  git push -u origin "$(git branch --show-current)"
  ```

## Phase 5: PR Body

Use a draft PR by default.

Include:

```markdown
## Summary
- user-visible changes
- SEO/GEO or design behavior changes
- asset rename scope when applicable

## Verification
- npm run validate
- npm run build
- Playwright responsive screenshots: <paths>
- SEO/GEO curl smoke: <results>

## QA Notes
- mobile viewport:
- tablet viewport:
- desktop viewport:
- follow-up required after deploy:
```

For SEO/GEO PRs, include post-deploy search console steps if relevant.

---
name: blog-auto-publish
description: Daily unattended DocsHunt blog run. Finds one timely topic from official notices, news, and content that is already performing, writes an original Korean article with the editor and writing skills, passes every check, merges its own PR, releases to production, notifies search engines and Slack, and records the run. Use only for the scheduled auto-publish task or when the maintainer asks for an automatic blog run or to pull an auto-published post.
---

# Blog Auto Publish

The maintainer asked on 2026-11-22 for the blog to publish automatically, the same way the content factory posts shorts and card news: find news, authoritative information, and content that took off, then rework it into our own article. A daily scheduled run follows this skill from start to finish without asking anyone.

This skill is the only place where an agent may merge its own PR and create a release without a request in the conversation (see `AGENTS.md`). Everything else in the repository rules still applies.

## Run Limits

- Publish at most **one** post per run. Quality beats volume; Google treats mass-produced, unreviewed pages as spam.
- Do not publish anything you could not verify. Stopping is always allowed. A skipped day costs nothing; a wrong date or amount on a grant post costs trust.
- Stop and skip the day when:
  - no topic passes the topic gate;
  - a fact the article depends on cannot be confirmed from an official or first-party source;
  - a required check still fails after two fix attempts;
  - CI, review threads, the release workflow, or the live check are not clean within the time limits below.
- When you skip, leave no open PR behind: close it with a short Korean comment and delete the branch.
- Never push to `main`, never force-push, never enable auto-merge, and never touch another session's branch or worktree.

## Local Paths

The run keeps private material outside this public repository.

- Run log and topic history: `/Users/laude/docshunt/blog-auto/history.md`
- Slack notifier: `/Users/laude/docshunt/blog-auto/notify_slack.py`. It reads the factory bot token and never prints it.
- Working copy: create a fresh worktree from `origin/main` at `/Users/laude/docshunt/docs-landing-blog-<YYYYMMDD>` on the branch `blog/auto-<YYYYMMDD>-<short-slug>`. Symlink `node_modules` from `/Users/laude/docshunt/docs-landing/node_modules`, or run `npm ci` if that folder is missing.

## 1. Find the Topic

Read the last 30 lines of `history.md` and the `seo.primaryKeyword` values of all files in `src/data/blog-posts/`. Never repeat a main keyword or a source that is already used.

Collect five to eight candidates from at least three of the four pools below.

1. **Official notices (first-party)**
   - K-Startup 사업공고: <https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do>
   - 중소벤처기업부 보도자료: <https://www.mss.go.kr/site/smba/ex/bbs/List.do?cbIdx=86>
   - 기업마당: <https://www.bizinfo.go.kr>
   - 정책브리핑: <https://www.korea.kr>
   - 소상공인시장진흥공단 and 창업진흥원 notices
   - Prefer a notice that opened or changed in the last 14 days and is still accepting applications.
2. **News (radar only)**
   - Naver News or Google News searches from the last 3 days, for example `창업 지원사업`, `정부지원사업 공고`, `예비창업패키지`, `소상공인 지원금`, `사업계획서`, `R&D 지원`.
   - A news story only tells you a topic is live. Confirm every fact in it from the official notice.
3. **Content that took off**
   - YouTube searches for the same keywords, sorted by upload date this week; note videos with many more views than the channel's usual.
   - Instagram and Threads reference sheets in `/Users/laude/Documents/cardnews/yt_channels/docshunt/research/`.
   - Naver blog and cafe posts that rank on page one for a grant keyword.
   - Use these only for the angle: the question people ask and the hook that worked. Never copy their wording, structure, or images.
4. **Our own search data**
   - Search Console, `sc-domain:docshunt.ai`, on the ego-browser profile "독스헌트 업무". Look under 실적 → 검색어 for queries with many impressions whose page has a low CTR or sits at position 8–20.
   - Read only. If Search Console is not reachable, skip this pool.

Browse politely: use ego-browser read-only, wait 3–5 seconds between pages, stay under 30 pages per run, and stop at any login wall or CAPTCHA (do not solve it). Finish the TaskSpace with `finish({ keep: [] })`.

**Topic gate.** Pick one candidate that passes all of these:

- A Korean founder, small-business owner, or grant applicant would search for it this week.
- An official or first-party page confirms its key facts: dates, amounts, eligibility, evaluation items.
- Its main keyword does not collide with an existing post.
- DocsHunt can help naturally: finding notices, writing or reviewing a business plan, preparing documents.
- It is not about stock or crypto picks, legal or tax advice to an individual, politics, or a private person.

Record three to five candidates with their source URLs and the reason for the pick in `history.md` before writing.

## 2. Write the Article

Follow `.agents/skills/docshunt-blog-editor/SKILL.md` in full, then `.agents/skills/blog-writing/SKILL.md` for the data file. In particular:

- **Rework, never copy.** Use facts, not sentences. Do not paraphrase a news article or creator post line by line. Build the article around the reader's task, for example who can apply, what to prepare, which sentence in the plan to fix, and by when.
- **Add value.** Include at least one thing the sources lack: a checklist from the notice attachment, a comparison with last year's notice, a worked example of a plan sentence (marked as an example), or a deadline table.
- **Cite sources.** Link the official notice next to each date, amount, or eligibility claim. You may cite news only as "보도에 따르면" and also link it. Keep `verification.sources` equal to the visible sources.
- **Freshness.**
  - Set `date`, `modifiedDate`, and `verification.date` to today.
  - When a notice closes within 7 days, put the deadline in the first paragraph.
  - Never invent next year's dates.
- **Cover.**
  - Use the cover compositor with a new descriptive filename in `public/docshunt-assets/blog-covers/`.
  - Do not use news photos or other people's thumbnails. Use a text-free generated visual, a public document excerpt, or an owned product screenshot.
- **Variety.** Choose the article shape, cover look, and title pattern fresh each day. Never fill in a fixed template. The last three auto posts must not share the same structure.
- **Exactly one DocsHunt CTA,** after the useful part.
- **External review.** If `GEMINI_API_KEY` or `GOOGLE_API_KEY` is set, run the independent review script; otherwise do the same checklist manually and note it in the PR.

## 3. Check

Run every command from the repository root. All must pass.

1. `npm run security:scan`
2. `npm run precommit`. It includes `blog:check-copy`; the new post is strict because its `verification.date` is today.
3. `node .agents/skills/seo-geo-guard/scripts/check-seo-geo.mjs` with ERROR 0
4. `npm run build`
5. Start `npm run start -- -p 3011` in the background, then:
   - Fetch the new `/blog_detail/<slug>`. It must return 200, have an absolute canonical, have exactly one H1, and have one CTA.
   - Fetch `/blog_list`.
   - Fetch `/sitemap-blog_detail.xml`; the new URL must appear in it.
   - Stop the server.
6. Visual check of the detail page at 390×844 and 1440×1000 with an available browser tool. Check that the title does not overflow, that the cover is not cut off, and that tables fit. If no browser tool is available, record the visual check as unverified in the PR.
7. Open every source link once more and confirm it supports the sentence beside it.

## 4. Publish

1. Run `rm -rf .omc`. Stage only the new post file, `src/data/blog-posts/index.ts`, and the new cover files, plus any data file the scaffold script changed. Commit as `feat: 블로그 <짧은 제목> 글 추가`, using the repository's commit trailer.
2. Run `npm run security:scan` again. Push the branch and open a **ready** PR (not a draft) with the Korean format from `.agents/skills/submit-pr/SKILL.md`. Also include:
   - topic sources and why this topic was chosen
   - the source ledger
   - which checks ran
   - that this is an automatic run under `blog-auto-publish`
3. Wait up to 25 minutes for `precommit-and-build`, the Vercel preview, and CodeRabbit.
   - Fix valid review findings in a new commit; never amend.
   - For findings you decline, reply with the reason.
   - Resolve every thread.
   - If a check fails, fix it at most twice; otherwise skip the day.
4. When every required check is green and no thread is unresolved, merge with `gh pr merge <number> --merge --delete-branch`.
5. Release:
   - Take the latest tag from `gh release list -L 1` and bump the patch number, for example `v5.1.8` → `v5.1.9`.
   - Run `gh release create <tag> --target main --title <tag> --generate-notes`.
   - If the tag already exists because another session released, bump again.
   - Watch the `Vercel` workflow run for that release until it finishes, up to 20 minutes. If the release deploy fails, do not create another release; notify Slack with the reason and stop.
6. Live check:
   - `https://docshunt.ai/blog_detail/<slug>` returns 200 with the new title.
   - The URL appears in `https://docshunt.ai/sitemap-blog_detail.xml`.
7. Notify search engines with `npm run indexnow:submit -- /blog_detail/<slug> /blog_list`. IndexNow forwards to Naver and Bing. Google reads the sitemap.
8. Optional Google request:
   - Only if the ego-browser profile "독스헌트 업무" is signed in to Search Console, run URL inspection for the new URL and click 색인 생성 요청.
   - Stop at any CAPTCHA or quota message.
9. Notify Slack: `python3 /Users/laude/docshunt/blog-auto/notify_slack.py published "<제목>" "<주소>" "<한 줄 요약>"`
10. Append one line to `history.md`:
    `YYYY-MM-DD | 제목 | 핵심 검색어 | 주제 출처 | PR 번호 | 태그 | 주소`
11. Remove the run's worktree with `git worktree remove`. Keep nothing else.

If the run is skipped at any point, run `notify_slack.py skipped "<이유>"`, append a `SKIP` line with the reason to `history.md`, and clean up.

## Pulling a Post

When the maintainer asks to take down an auto-published post:

1. Open a PR that deletes that post file and removes it from `src/data/blog-posts/index.ts`. Renumber so that `blog:check-numbers` passes; if renumbering is risky, ask first.
2. Merge it and release, following steps 3–6 of Publish. Confirm the URL no longer appears in the sitemap.
3. Run `notify_slack.py pulled`, and record a `PULLED` line in `history.md`.

## Report

End the run with a short Korean report covering:

- the title and the live URL, or why the run was skipped
- the PR link and the release tag
- the topic sources
- anything left unverified

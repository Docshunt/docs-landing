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
- When you skip before the merge, leave no open PR behind: close it with a short Korean comment and delete the branch. After the merge, a skip is not possible; follow the deploy-failure rule in Publish step 5.
- Never push to `main`, never force-push, never enable auto-merge, and never touch another session's branch or worktree.

## Local Paths

The run keeps private material outside this public repository.

- Run log and topic history: `/Users/laude/docshunt/blog-auto/history.md`
- Slack notifier: `/Users/laude/docshunt/blog-auto/notify_slack.py`. It reads the factory bot token and never prints it.
- Working copy: create a fresh worktree from `origin/main` at `/Users/laude/docshunt/docs-landing-blog-<YYYYMMDD>` on the branch `blog/auto-<YYYYMMDD>-<short-slug>`. Symlink `node_modules` from `/Users/laude/docshunt/docs-landing/node_modules`, or run `npm ci` if that folder is missing.

## 1. Find the Topic

### Who we write for

The reader is a **예비창업자** or a founder **within three years of starting**: usually a sole proprietor or a small corporation, writing a first or second government-grant business plan, with no staff who handle paperwork. Every post must be useful to most of these readers, not to a small group inside them.

Read the last 30 lines of `history.md` and the `seo.mainKeyword` values of all files in `src/data/blog-posts/`. Never repeat a main keyword or a source that is already used.

### What to write: questions first, notices second

Most posts answer a question this reader keeps asking, in a form that stays useful for a year or more. A notice summary that dies at its deadline is the exception.

- **Evergreen task question (default, about four runs in five).** Examples of the kind of question, not a list to fill in: how 창업 업력 is counted for eligibility, whether to register as 개인사업자 or 법인 before applying, when to get a 사업자등록 if you are a 예비창업자, which expenses a grant can and cannot pay, how 정산 works and what gets rejected, 창업기업 확인서, 청년창업사관학교 vs 예비창업패키지, 중진공 창업자금 or 신보·기보 창업보증 for a first loan, 벤처기업 확인, what changes when you hire the first employee.
- **Timely notice (about one run in five).** Only for a program many readers can apply to and many people search, such as 예비창업패키지, 초기창업패키지, 청년창업사관학교, 창업중심대학, 모두의 창업, 소상공인 정책자금, or a large regional program. Write it so it keeps working after the deadline: explain how the program works and how to prepare, and put this round's dates in one clearly dated box.
- **Improving an existing post** counts as a run. When the best question is already covered by a weak or outdated post, rewrite that post under the Legacy Post Rewrite rules in `.agents/skills/docshunt-blog-editor/SKILL.md` instead of adding a competing page.

Do not write a standalone post about a program that most of our readers cannot apply to: corporation-only investment or accelerator programs, programs limited to one gender, age band, region, or industry, or rounds selecting about ten companies or fewer. Such a program may appear as one example inside a broader post.

### Where to look

Collect five to eight candidates from at least three of these pools.

1. **What readers ask (demand).**
   - Naver and Google autocomplete and 연관검색어 for seed words like `예비창업자`, `창업 3년 이내`, `정부지원사업`, `사업계획서`, `개인사업자 법인`, `지원금 정산`.
   - Recent questions in Naver 지식iN and startup cafes, and the comments on popular YouTube videos about grants. Note the exact wording people use.
   - Search Console, `sc-domain:docshunt.ai`, on the ego-browser profile "독스헌트 업무": open 실적 → 검색어 and look for queries with many impressions and low CTR, or a position of 8–20. Read only. If the profile is signed out, write `서치콘솔: 로그아웃` in `history.md`; do not just skip it silently.
   - Naver monthly search volume (maintainer decision, 2026-11-27).
     - Run `node .agents/skills/blog-auto-publish/scripts/keyword-volume.mjs --related 30 <seed words>` to widen the list with related keywords.
     - Then run it again without `--related` on every candidate main keyword, using the phrase a reader would type. The script takes any number of keywords and queries them five at a time.
     - Drop related keywords that are off-topic for our reader, such as 알바, 상속세 or 퇴직연금.
     - The key lives outside this repository in `~/.config/docshunt/naver-searchad.env`, and the script never prints it.
     - If the script exits with `검색량 키 없음` or an API error, write `검색량: 조회 실패 (<이유>)` in `history.md` and fall back to the other demand evidence. Never ask for the key and never copy it anywhere.
     - A keyword printed as `조회 결과 없음` has unknown volume, not zero. Treat it the same way as a failed lookup: write `검색량: 조회 결과 없음 (<키워드>)` in `history.md` and judge it on the other demand evidence. Never drop it under the 100 rule.
2. **Official notices and rule changes (first-party).** K-Startup 사업공고 <https://www.k-startup.go.kr/web/contents/bizpbanc-ongoing.do>, 중소벤처기업부 보도자료 <https://www.mss.go.kr/site/smba/ex/bbs/List.do?cbIdx=86>, 기업마당 <https://www.bizinfo.go.kr>, 정책브리핑 <https://www.korea.kr>, 소상공인시장진흥공단, 창업진흥원, 국세청 for registration and tax basics. Use them for timely notices and to verify every fact in an evergreen post.
3. **News (radar only).** Naver News or Google News from the last 3 days. A news story only tells you a topic is live; confirm every fact from the official source.
4. **Content that took off.** YouTube videos this week with many more views than the channel's usual, the reference sheets in `/Users/laude/Documents/cardnews/yt_channels/docshunt/research/`, and Naver blog or cafe posts on page one for a grant keyword. Use them for the question and the angle only. Never copy their wording, structure, or images.

Browse politely: use ego-browser read-only, wait 3–5 seconds between pages, stay under 30 pages per run, and stop at any login wall or CAPTCHA (do not solve it). Finish the TaskSpace with `finish({ keep: [] })`.

### Topic gate

Pick one candidate that passes all of these:

- **Reader:** most 예비창업자 or founders within three years could use it this month.
- **Demand:** the question or its keyword shows up in autocomplete, 연관검색어, Search Console, or several real reader questions. Write down the evidence.
  - When the volume lookup worked, the main keyword should have a Naver monthly volume (PC + mobile) of **at least 100**.
  - Among candidates that pass every other gate, prefer the one with more volume.
  - A keyword under 100 can still win when Search Console shows us already earning impressions for it, or when it is a precise long-tail form of a larger keyword. Write down the reason.
  - `광고 경쟁` is how hard advertisers bid on the keyword. It is not organic difficulty, so treat it only as a hint.
  - Also look up near-variants that ask the **same question**, and compare only those. For example, `업종코드` (about 2,150 a month) vs `사업자등록 업종코드` (about 180), or `개인사업자 법인전환` (about 900) vs `법인전환` (about 380). Put the variant with more volume in `seo.mainKeyword` and at the start of the title, and use the others as `supportKeywords`. Never swap in a keyword about a different question just because it has more volume.
- **Search fit:** we can rank for it. A query answered only by one organization's own site, such as a single program's brand name, is a poor target.
- **Lifetime:** the page is still useful six months from now, or it is one of the large programs listed above.
- **Facts:** an official or first-party page confirms every date, amount, rule, and eligibility condition the post will state.
- **No collision:** the main keyword does not collide with an existing post. If it does, improve that post instead.
- **Fit:** DocsHunt can help naturally, for example by finding notices, writing or reviewing a business plan, or preparing documents.
- **Safe:** it is not about stock or crypto picks, legal or tax advice to an individual, politics, or a private person. General rules from 국세청 or a law text are fine; say where an accountant or the agency must be asked.

Record three to five candidates in `history.md` before writing. Give each one:

- its source URLs;
- its demand evidence, including the Naver monthly volume of its main keyword, for example `월 4210`;
- the reason it was picked or dropped.

Put the chosen keyword's volume in the PR notes too.

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
- **Title and slug.**
  - Put the reader's own search phrase at the start of the title, for example `개인사업자 법인 전환, 지원사업 신청 전에 해야 할까`. A curiosity hook is optional and comes after the phrase.
  - Keep years, months, and round numbers out of the slug unless the post is about one dated round.
  - Do not reuse a title pattern from the last five posts. Phrases such as `~보다 먼저 걸리는` and `고칠 문장 하나` are already used up.
- **Shape follows the question.** There is no fixed skeleton.
  - Before drafting, list the H2 headings of the last three auto posts. The new outline must not follow the same order or reuse their headings.
  - Answer the question directly in the first two or three sentences, before any background.
  - Then use only the parts the question needs, for example a decision table, step-by-step order, cost or timeline numbers, a worked example, common mistakes, or a short Q&A at the end with the follow-up questions people actually ask.
  - Skip the standard `확인 기준` box, `고치기 전/고친 뒤` quotes, and `맞지 않는 경우` section unless this topic really needs them.
- **Usefulness test.** Before checks, answer in the PR notes: what can a 예비창업자 or a founder within three years do after reading this that they could not do before? If the answer is "know that a notice exists", rewrite the post or pick another topic.
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
   - Watch the `Vercel` workflow run for that release until it finishes, up to 20 minutes. If the release deploy fails, do not create another release in this run.
   - The post is already in `main` and has passed every check, so it stays there in the state `배포 대기`. Do not revert it.
   - Append `DEPLOY_FAILED | <태그> | <슬러그> | <이유>` to `history.md`, run `notify_slack.py skipped "<태그> 배포 실패: <이유>. 글은 다음 배포 때 올라갑니다"`, clean up, and stop.
   - The next run starts by reading `history.md`. If the last entry is `DEPLOY_FAILED`, it re-runs that release's failed workflow once with `gh run rerun <run-id> --failed`, then finishes steps 6–10 for that post instead of writing a new one. If the rerun fails again, it notifies Slack that the maintainer must look at the deploy, and writes nothing that day.
   - If the maintainer wants the waiting post removed instead, follow Pulling a Post.
6. Live check:
   - `https://docshunt.ai/blog_detail/<slug>` returns 200 with the new title.
   - The URL appears in `https://docshunt.ai/sitemap-blog_detail.xml`.
7. Search engine notice: the release workflow's `Notify IndexNow of changed blog posts` step sends every changed post and `/blog_list` to IndexNow, which forwards to Naver and Bing. Check that step's log; only if it failed or was skipped, run `npm run indexnow:submit -- /blog_detail/<slug> /blog_list`. Google reads the sitemap.
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
2. Merge it and release, following steps 3–5 of Publish. Skip step 6; instead confirm that `https://docshunt.ai/blog_detail/<slug>` no longer returns 200 and that the URL no longer appears in `https://docshunt.ai/sitemap-blog_detail.xml`.
3. Notify search engines that the page is gone with `npm run indexnow:submit -- /blog_detail/<slug> /blog_list`.
4. Run `notify_slack.py pulled`, and record a `PULLED` line in `history.md`.

## Report

End the run with a short Korean report covering:

- the title and the live URL, or why the run was skipped
- the PR link and the release tag
- the topic sources
- anything left unverified

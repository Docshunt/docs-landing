---
name: docshunt-blog-editor
description: Create, rewrite, review, and validate Korean DocsHunt SEO blog posts in a natural human editorial voice. Use for DocsHunt topic selection, converting overseas startup insights and card-news research into Korean articles, truthful curiosity-driven titles, keyword planning, full-draft writing, line-by-line anti-AI cleanup, fact checking, meta descriptions, hero-image copy and composition, external language review, and publication-ready editorial QA in the docs-landing repository.
---

# DocsHunt Blog Editor

Write as a practitioner sitting next to a founder with the business-plan file open. Do not produce a generic AI explainer, lecture, or product brochure.

Read [references/editorial-style.md](references/editorial-style.md) before drafting or rewriting an article. Read [references/seasonal-keywords.md](references/seasonal-keywords.md) when choosing a topic, a main keyword, or which legacy post to rewrite next. Read [references/overseas-source-search.md](references/overseas-source-search.md) whenever an overseas insight or card-news source is part of topic selection. Read [references/visual-production.md](references/visual-production.md) when creating or changing a cover or body image.

## Repository Integration

1. Read the repository `AGENTS.md` and these complementary skills:
   - `.agents/skills/blog-writing/SKILL.md` for post files and data integration
   - `.agents/skills/landing-change/SKILL.md` for UI and responsive QA
   - `.agents/skills/seo-geo-guard/SKILL.md` for crawler-facing checks
   - `.agents/skills/submit-pr/SKILL.md` only when the user requests a commit, push, or PR
2. Inspect `git status -sb`, the current branch, recent accepted posts, and the user's newest wording. Preserve unrelated changes.
3. Use `origin/main` as the base for new publishable work. Never push directly to `main` or merge a PR.
4. Scaffold new posts with `.agents/skills/blog-writing/scripts/create-blog-post.mjs`.
5. Store one post per file under `src/data/blog-posts/` and register it through `src/data/blog-posts/index.ts`.
6. Treat the actual Next.js route as the final preview. Old Bubble pages and standalone draft HTML are reference material only.

## Portable Setup

This skill must work from a fresh clone without relying on a developer's home directory or global Codex files.

1. Enter the fresh clone's repository root, use Node.js 24 or newer, and run `npm ci`.
2. From the repository root, run `npm run blog:editor:check` before the first article on a machine. If Chromium is missing, run `npx playwright install chromium` and repeat the check.
3. Run documented commands from the repository root. The bundled scripts resolve their input and output arguments against that root instead of a developer home directory.
4. The human-language pass, SEO rules, factuality checks, deterministic cover composition, and Next.js QA are repository capabilities.
5. Gemini review is optional and requires a locally configured `GEMINI_API_KEY` or `GOOGLE_API_KEY`. Never commit that value. When unavailable, perform the same checklist manually and record that external review was skipped.
6. GPT image generation is an optional Codex tool capability rather than a package dependency. When unavailable, use an owned product screenshot, a public document excerpt, or a licensed text-free image; the deterministic compositor must still add the Korean title.

Do not copy a key, browser binary, global skill, generated test artifact, or absolute workstation path into the repository to make a check pass.

## Editorial Workflow

1. Define one search intent, one main keyword, and two to four supporting keywords.
2. Identify one concrete reader problem. Prefer an actual sentence, screen, document, number, date, or public case over a general definition.
3. When the topic comes from an overseas source or card-news research, read `references/overseas-source-search.md`, search the relevant listed platforms, and select one real source before drafting; do not tell the user to find the source themselves.
4. Research unstable facts and statistics from primary sources. Separate confirmed facts, interpretation, hypothetical examples, and product claims.
5. Choose the article shape that fits the evidence:
   - sentence repair: weak sentence → missing evidence → example → revised sentence
   - case story: concrete scene → contradiction → lesson → reader application
   - task guide: obstacle → smallest useful action → example → next action
6. Draft the article before optimizing keyword placement.
7. Run the human-language pass and delete repeated conclusions, filler transitions, symmetrical section padding, and abstract advice.
8. Run a separate title pass. Start with the phrase the reader actually searches; add one defensible risk, mistake, loss, or unanswered question only when it fits. Do not reveal the complete answer in the title.
9. Check the title, first 100 visible characters, headings, description, source links, CTA, and cover copy as one editorial unit.
10. For a substantial new post or batch rewrite, request an independent review from an available external model only after removing personal, customer, and confidential data and explicitly authorizing the transfer. Ask only for concrete context, naturalness, repetition, and factuality problems. Apply suggestions selectively.
11. Render the real blog list and detail routes on mobile, tablet, and desktop before handoff.

## Legacy Post Rewrite

Many posts dated 2025.08–2026.03 were drafted with a general-purpose model and imported from Bubble. Rewrite them instead of patching single words.

1. List candidates with `npm run blog:check-copy -- --backlog`. Prioritize by [references/seasonal-keywords.md](references/seasonal-keywords.md), then by the number of findings.
2. Keep `slug`, `sourceUrl`, `date`, `page`, `index`, and the category placement. Changing a legacy URL loses its search history.
3. Re-plan the post: one search intent, one main keyword, supporting keywords in `seo`, and an approved `author`.
4. Re-verify every date, amount, eligibility rule, and evaluation item against the official notice and its attachment, not a news summary. Download the notice attachment (HWPX, PDF) when the notice page shows only an image.
5. When the notice window has closed:
   - start the description with `[지난 공고]`
   - put a `dh-note` box titled `지난 공고 안내` at the top of the body with the closing date and where to check the next notice
   - keep the facts in past tense and do not invent next year's dates
6. Remove unverifiable first-person stories, customer numbers, and performance claims. If the founder may want to keep one, list it in the PR notes and ask instead of guessing.
7. Rebuild the body as `contentHtml` with the shared `.dh-seo-post` blocks, keep plain `paragraphs` as fallback, and keep exactly one CTA.
8. Update `modifiedDate` and `verification.date` to the rewrite date. This also opts the post into the strict copy check.
9. If the cover pixels carry an outdated or retracted claim (for example `공고 오픈` after the deadline, or a removed number), make a new cover with the compositor and a new descriptive filename. Leave the old Bubble-mapped file in place.
10. Record the before/after title, description, and removed claims in the PR notes.

## Source-led topic workflow

Use the listed platforms to find a defensible article topic, not to translate or summarize a source dump. When the brief explicitly asks for an overseas-source article, do not draft from a title or keyword alone; search the relevant platforms, compare candidates, select one real source, and complete the ledger first. Browsing is part of the writing task, not a handoff to the user. Select one anchor source role and one Korean reader problem:

- principle: First Round, YC, Paul Graham, Steve Blank, or similar evergreen startup guidance
- case or growth pattern: Bessemer, SaaStr, founder interviews, or company materials; treat company-reported outcomes as company claims, not independent proof
- radar: Sifted, TechCrunch, Crunchbase News, or communities; use these to find a case, not as the sole proof
- method or evidence: SBA, research institutions, public datasets, or official guidance; adapt the method, not foreign policy or law

The source catalog is the search pool. If no relevant article is found after searching the appropriate roles, state that the topic is not yet source-led and keep it separate instead of inventing an overseas connection.

Before writing prose, create a short source ledger:

```text
원문 링크 / 출처 역할:
원문이 실제로 주장하는 한 문장:
원문 사례·데이터와 그 한계:
해외 맥락과 한국에 그대로 옮길 수 없는 부분:
한국 독자가 겪는 구체적 장면:
한국 공식·1차 자료 URL과 그 자료가 확인하는 주장:
독자가 글을 읽고 할 한 가지 행동:
```

For a source-led article, also record the search output: searched platforms, three to five candidate URLs, selected primary source, selected supporting source, and why the selected source fits the Korean reader problem. Do not call a source-led draft ready when only a platform name or a generic topic is recorded.

Then translate the logic, not the language: original claim → Korean constraint or scene → verified Korean evidence → reader action. Keep the foreign source as an anchor and add Korean sources for Korean program names, eligibility, market conditions, costs, or public systems. If the Korean bridge cannot be evidenced, label it as an editorial interpretation or hypothetical example and weaken the claim.

## Content depth

Treat a rich article as a layered argument, not a longer list or a larger source dump. Before drafting a source-led article, complete this brief:

```text
핵심 주장:
독자가 실제로 겪는 장면:
해외 원문의 전후·행동·전환·결과:
원문 사례가 성립한 조건과 한계:
한국에서 달라지는 조건:
한국 공식·1차 자료 URL 또는 독자 기록:
본문에 넣을 작업 예시:
조언이 적용되지 않는 경우:
독자가 글을 읽고 남길 산출물:
```

Default source-led drafts should contain the parts that fit the search intent:

- a concrete opening scene and a direct answer
- one source case or idea explained through before → action → turning point → result → limitation
- a Korean evidence bridge, not just a Korean translation
- one worked example or document repair; mark invented numbers as hypothetical
- three to five diagnostic questions or actions tied to a document, metric, or decision
- one boundary, counterexample, or “when this does not apply” section
- a closing synthesis that leads to one reader action and one DocsHunt CTA

Use one overseas anchor and one or two supporting Korean or first-party sources. Do not add ten source summaries, repeated checklist sections, or headings that only increase length. Make every substantive section answer a different question, and build its paragraphs as claim → evidence → interpretation → action. If a section has no source, concrete scene, example, document, number, or next decision, delete it.

Before handoff, audit citations claim by claim: open every linked URL, confirm that its title and domain match the cited source, and confirm that it actually supports the sentence beside it. Never reuse an overseas URL for a Korean public claim. If a Korean date, amount, eligibility rule, or program fact cannot be verified from a Korean official or first-party URL, remove the precise claim or label it as unverified instead of filling the gap from memory.

Use HSO only as a screening scaffold:

- Hook: one truthful tension or unanswered question
- Story: one concrete source case or idea, followed by the Korean mismatch and its consequence
- Offer: one useful action, with the single DocsHunt CTA after the advice

Do not turn every article into a five-card list or force a foreign case into a Korean success story. Cut any section that has no source, concrete example, document, number, or next decision.

## Human-Language Pass

Read every sentence as a reader encountering the topic for the first time.

- Replace abstract advice with who did what, when, and with what evidence.
- Use polite Korean without sounding like a report, advertisement, or lecture.
- Keep paragraphs readable, but vary their length according to importance.
- Make subjects, pronouns, causes, and contrasts explicit when the context is not obvious.
- Remove any sentence that merely repeats the previous conclusion.
- Never invent first-person experience, customer interviews, numbers, selection results, or evaluator behavior.
- Do not claim a phrase causes rejection without an authoritative rule or documented case.
- Do not turn overseas advice into a Korean generalization. Distinguish the source's observation, a Korean fact, DocsHunt's interpretation, and a hypothetical teaching example.
- Replace translated slogans and imported jargon with the Korean reader's actual document, workflow, customer, or constraint.
- Prefer a concrete repair over telling the reader only to check, consider, or improve something.
- Read questionable wording aloud. Rewrite anything that needs a second explanation.

## Title Rules

- Put the reader's own search phrase, including the main keyword, at the beginning. Search fit comes before the hook.
- Optionally add one truthful curiosity gap using a risk, mistake, loss, or question. Do not repeat a title pattern used in the last five posts.
- Avoid unsupported guarantees such as `이것만 하면 합격`, automatic rejection, or fixed ranking claims.
- Keep the title readable in one breath and suitable for a two- or three-line 1200×750 cover.
- Make the opening prove the title's implied risk within the first two paragraphs. If it cannot, weaken or replace the title.

Run three checks:

1. **Search:** Does the main keyword and search intent appear naturally?
2. **Click:** Is there one specific reason to continue without revealing the full answer?
3. **Proof:** Can the article support the implied risk without guessing evaluator behavior?

## SEO and Evidence

- Use the main keyword naturally in the title, opening, one heading when useful, and meta description.
- Write for the searcher's question, not a target keyword count.
- Keep the description roughly 100–150 Korean characters and state the problem, intended reader, and practical outcome.
- Link factual claims about dates, money, eligibility, organizations, or performance to the exact primary source.
- For source-led articles, cite the overseas source where its claim or case is used and cite a Korean official or first-party source for each localized public claim. Do not use one source to support both contexts.
- Put the source list at the bottom and keep `verification.sources` aligned with visible citations.
- Mark fabricated teaching examples as hypothetical and never mix them with product claims.
- Mention DocsHunt only after the article has delivered useful information. Use exactly one primary CTA.

## Independent Review

When a Gemini API key is already available, run:

```bash
node .agents/skills/docshunt-blog-editor/scripts/review-draft-with-gemini.mjs \
  --post-file src/data/blog-posts/<post-file>.ts \
  --artifact test-results/blog-reviews/<slug>-gemini.md \
  --allow-external-review \
  --task "게시 전 사람다운 한국어, 문맥, 반복, 과장 여부를 검수한다."
```

The flag confirms that the editor has removed personal, customer, and confidential data and authorizes sending the full draft to Google Gemini. The script accepts `GEMINI_API_KEY` or `GOOGLE_API_KEY`, never prints the key, stores no full prompt copy, and limits review artifacts to the ignored `test-results` directory. If neither key is available, continue with the manual editorial pass and disclose that external review was skipped. Treat the output as evidence, not authority.

## Visual Production

- Use a 1200×750 hero and a 384×240 list image.
- Keep only the DocsHunt brand, title, and one relevant visual subject on the cover.
- Generate text-free visual material, then add Korean copy with the deterministic cover compositor. Do not rely on image generation to spell Korean correctly.
- Never stretch a source image. Crop it with `object-fit: cover` behavior.
- Prefer real screenshots, document excerpts, sentence comparisons, or simple explanatory diagrams when they prove the article.
- Mask personal or confidential data before publication.

See [references/visual-production.md](references/visual-production.md) for the prompt and composition process.

## Editorial Gate

Do not call a draft publish-ready until all are true:

- The title is interesting without making a false promise.
- The opening gives the reader a concrete reason to continue.
- The article solves one problem without repeating itself.
- At least one concrete example or verified source supports the advice.
- For source-led articles, the source ledger exists, the overseas anchor is cited, and every Korean public claim has a Korean official or first-party bridge.
- For source-led articles, the pre-draft record includes three to five searched candidates, the selected primary and supporting sources, and the reason they fit the Korean reader problem.
- For source-led articles, the draft has a source case or idea, a Korean evidence bridge, a worked example, and a stated boundary; it is not only a translated summary or checklist.
- Every factual source link has been opened and supports the exact nearby claim; unverified Korean dates, amounts, eligibility rules, and program facts are omitted or clearly labeled.
- The prose does not rely on generic AI phrases, and `npm run blog:check-copy` reports no error and no unread warning for the post.
- A closed notice is marked as `[지난 공고]` in the description and in the opening note box.
- The CTA follows naturally and appears once.
- Hero pixels, visible title, metadata, and article intent agree.

After this editorial gate passes, hand the post to `.agents/skills/blog-writing/SKILL.md` for data integration and publication QA. That skill and the repository-wide landing, SEO/GEO, and submit-PR skills own security checks, builds, route smoke, and responsive screenshots.

Do not publish, push, deploy, or post externally unless the user explicitly requests it. The scheduled run under `.agents/skills/blog-auto-publish/SKILL.md` counts as that request.

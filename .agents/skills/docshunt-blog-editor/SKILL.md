---
name: docshunt-blog-editor
description: Create, rewrite, review, and validate Korean DocsHunt SEO blog posts in a natural human editorial voice. Use for DocsHunt topic selection, truthful curiosity-driven titles, keyword planning, full-draft writing, line-by-line anti-AI cleanup, fact checking, meta descriptions, hero-image copy and composition, external language review, and publication-ready editorial QA in the docs-landing repository.
---

# DocsHunt Blog Editor

Write as a practitioner sitting next to a founder with the business-plan file open. Do not produce a generic AI explainer, lecture, or product brochure.

Read [references/editorial-style.md](references/editorial-style.md) before drafting or rewriting an article. Read [references/visual-production.md](references/visual-production.md) when creating or changing a cover or body image.

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
3. Research unstable facts and statistics from primary sources. Separate confirmed facts, interpretation, hypothetical examples, and product claims.
4. Choose the article shape that fits the evidence:
   - sentence repair: weak sentence → missing evidence → example → revised sentence
   - case story: concrete scene → contradiction → lesson → reader application
   - task guide: obstacle → smallest useful action → example → next action
5. Draft the article before optimizing keyword placement.
6. Run the human-language pass and delete repeated conclusions, filler transitions, symmetrical section padding, and abstract advice.
7. Run a separate title pass using one defensible risk, mistake, loss, or unanswered question. Do not reveal the complete answer in the title.
8. Check the title, first 100 visible characters, headings, description, source links, CTA, and cover copy as one editorial unit.
9. For a substantial new post or batch rewrite, request an independent review from an available external model only after removing personal, customer, and confidential data and explicitly authorizing the transfer. Ask only for concrete context, naturalness, repetition, and factuality problems. Apply suggestions selectively.
10. Render the real blog list and detail routes on mobile, tablet, and desktop before handoff.

## Human-Language Pass

Read every sentence as a reader encountering the topic for the first time.

- Replace abstract advice with who did what, when, and with what evidence.
- Use polite Korean without sounding like a report, advertisement, or lecture.
- Keep paragraphs readable, but vary their length according to importance.
- Make subjects, pronouns, causes, and contrasts explicit when the context is not obvious.
- Remove any sentence that merely repeats the previous conclusion.
- Never invent first-person experience, customer interviews, numbers, selection results, or evaluator behavior.
- Do not claim a phrase causes rejection without an authoritative rule or documented case.
- Prefer a concrete repair over telling the reader only to check, consider, or improve something.
- Read questionable wording aloud. Rewrite anything that needs a second explanation.

## Title Rules

- Put the main keyword near the beginning.
- Create one truthful curiosity gap using a risk, mistake, loss, or question.
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
- The prose does not rely on generic AI phrases.
- The CTA follows naturally and appears once.
- Hero pixels, visible title, metadata, and article intent agree.

After this editorial gate passes, hand the post to `.agents/skills/blog-writing/SKILL.md` for data integration and publication QA. That skill and the repository-wide landing, SEO/GEO, and submit-PR skills own security checks, builds, route smoke, and responsive screenshots.

Do not publish, push, deploy, or post externally unless the user explicitly requests it.

# DocsHunt Blog Visual Production

## Choose Evidence Before Decoration

Use visuals in this order:

1. A real product screen, public form, notice, or document excerpt that proves the point
2. A before-and-after sentence comparison or a simple explanatory diagram
3. A generated visual subject when the concept cannot be shown with real evidence

Do not add a body image only to break up text. Decorative stock photos and repeated AI illustrations make a practical guide feel less credible.

Use only company-owned screenshots, newly generated assets, or images with explicit reuse permission. Record the origin and usage rights in the PR notes. When renaming or moving an existing asset mapped from Bubble, update `public/docshunt-assets/manifest.json`; the manifest is a path map, not proof of a license.

## Cover Workflow

1. Finalize the article intent and truthful hook before making the image.
2. Reduce the cover copy to two or three short lines. It may be shorter than the HTML title but must make the same claim.
3. Choose one visual metaphor or subject. Do not combine several objects, badges, labels, or feature lists.
4. When using image generation, request a **text-free** 16:10 background with a clear subject and enough negative space for the title.
5. Compose the DocsHunt logo and Korean copy with `scripts/compose-blog-cover.mjs`.
6. Inspect both 1200×750 and 384×240 output. The list image must remain readable without a separate layout.
7. Open the actual `/blog_list` and `/blog_detail/[slug]` routes at 390, 768, and 1440 pixels.

## Image Generation Prompt Pattern

Use a prompt shaped like this and adapt the subject to the article:

```text
Create a restrained editorial photograph for a Korean business-plan article.
Subject: [one concrete object or document scene].
Composition: one clear subject on the right half, generous clean negative space on the left for a headline.
Style: realistic studio/editorial photography, neutral white and light gray environment, subtle DocsHunt blue detail, soft natural shadows.
Avoid: any text, letters, logos, badges, UI cards, decorative icons, gradients, clutter, exaggerated drama, distorted documents or hands.
Aspect ratio: 16:10. The image will be cropped into a 1200×750 cover without stretching.
```

Never ask the image model to render the Korean headline. Generated lettering is not publication evidence.

If image generation is unavailable, use an owned screenshot, a relevant public document excerpt, or another explicitly licensed text-free source. Do not replace missing image tooling with an unrelated decorative image.

## Deterministic Composition

From the repository root, generate both outputs with one command:

```bash
node .agents/skills/docshunt-blog-editor/scripts/compose-blog-cover.mjs \
  --background test-results/generated-background.png \
  --title-lines "첫 장부터 회사 소개?|순서부터 바꾸세요" \
  --accent-line 2 \
  --hero-output public/docshunt-assets/blog-covers/<slug>-hero.jpg \
  --list-output public/docshunt-assets/blog-covers/<slug>-list.jpg
```

Rules:

- Separate deliberate line breaks with `|`.
- Use two or three lines only.
- Use `--accent-line` to color at most one line.
- The compositor uses the repository logo and Pyeojin Gothic font.
- It crops the source visual with `object-fit: cover`; it never changes the source aspect ratio.
- It reduces type size only when required to keep every line inside the text-safe region.

## Body Images

- Use descriptive lowercase kebab-case filenames.
- Give every inline image useful `alt` text and a caption when its context is not obvious.
- Crop screenshots to the area the paragraph discusses.
- Blur or mask email addresses, names, IDs, phone numbers, and confidential business data.
- Label hypothetical diagrams and fabricated examples directly in the surrounding copy.
- Verify that numerical claims in image pixels still match the title, body, and cited source.

import { expect, test } from "playwright/test";

const baseUrl = process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:3001";

test.use({ launchOptions: { channel: "chrome" } });

for (const width of [390, 768, 1440]) {
  test(`reviewed landing keeps its content and responsive layout at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 1024 });
    await page.goto(`${baseUrl}/landing-before-review`);
    await page.evaluate(() => document.fonts.ready);

    const proofTitle = page.locator("#draft-proof-title");
    const proofEyebrow = page.locator(".draft-proof-eyebrow");
    await expect(proofTitle).toHaveText("똑똑한 대표들은 독스헌트로지원사업을 더 빠르게 준비합니다");
    await expect(proofTitle.locator("br")).toHaveCount(1);
    await expect(proofEyebrow).toHaveText("대표 15,000명이 선택한 독스헌트");
    const eyebrowBox = (await proofEyebrow.boundingBox())!;
    expect(eyebrowBox.y + eyebrowBox.height).toBeLessThan((await proofTitle.boundingBox())!.y);

    const cta = page.locator(".draft-final-cta");
    await expect(cta.locator("h2")).toHaveText("사업계획서에 쓰던 시간,이제 사업에 쓰세요.");
    await expect(cta.locator("p")).toHaveText("첫 사업계획서 초안을 무료로 만들어보세요.");
    await expect(cta.locator(".final-quote-author")).toHaveCount(0);
    await expect(cta.getByRole("link", { name: "무료로 시작하기" })).toHaveAttribute("href", /^https:\/\/app\.docshunt\.ai/);

    const grid = page.locator(".draft-workflow-grid");
    await expect(grid.locator(".draft-workflow-card")).toHaveCount(4);
    expect(await grid.evaluate((element) => getComputedStyle(element).gridTemplateColumns.split(" ").length)).toBe(
      width === 1440 ? 4 : width === 768 ? 2 : 1,
    );
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);

    if (width === 390) {
      expect((await page.locator(".draft-dark-workflow").boundingBox())!.height).toBeLessThan(2200);
      for (const selector of [".actual-document-canvas", ".actual-style-card"]) {
        expect(
          await grid
            .locator(selector)
            .evaluateAll((elements) => elements.every((element) => element.scrollHeight <= element.clientHeight + 1)),
        ).toBe(true);
      }
    }
    if (width === 768) {
      expect((await page.locator(".hero").boundingBox())!.height).toBeLessThan(1050);
    }
  });
}

test("the unreviewed draft keeps its existing CTA", async ({ page }) => {
  await page.goto(`${baseUrl}/landing-original`);
  await expect(page.locator(".draft-proof-eyebrow")).toHaveCount(0);
  await expect(page.locator("#draft-proof-title")).toHaveText("똑똑한 대표들은 이미 독스헌트로더 빠르게 결과를 내고 있습니다");
  await expect(page.locator(".draft-final-cta h2")).toHaveText("작성 시간은 1/10로자금 확보 기회는 10배로");
  await expect(page.locator(".draft-final-cta .final-quote-author")).toHaveText("박중현, 스피노자 대표");
});

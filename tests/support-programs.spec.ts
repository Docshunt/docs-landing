import { expect, test } from "playwright/test";

const baseUrl = process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:3001";

test.use({ javaScriptEnabled: false });

test("renders crawlable support program links and detail metadata without client fetch", async ({ page }) => {
  await page.goto(`${baseUrl}/support-programs`);

  await expect(page.getByRole("heading", { level: 1, name: "지원사업 공고" })).toBeVisible();
  const firstLink = page.locator('a[href^="/support-programs/"]').first();
  await expect(firstLink).toBeVisible();

  await firstLink.click();
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /^https:\/\/docshunt\.ai\/support-programs\//);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /\S+/);
  await expect(page.getByRole("link", { name: "원문 공고 보기" })).toBeVisible();
});

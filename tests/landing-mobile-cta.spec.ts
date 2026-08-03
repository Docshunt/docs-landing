import { expect, test } from "playwright/test";

test("mobile start CTA navigates directly to the app", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:3001");

  await page.route("https://app.docshunt.ai/**", (route) => route.fulfill({ body: "app" }));
  await page.getByRole("link", { name: "무료로 시작하기" }).first().click();
  await expect(page).toHaveURL(/^https:\/\/app\.docshunt\.ai\//);
});

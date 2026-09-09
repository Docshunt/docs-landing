import { expect, test } from "playwright/test";

const baseUrl = process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:3001";

test("updates page and latest JSON expose the same version", async ({ page, request }) => {
  await page.goto(`${baseUrl}/updates`);
  const topDate = (await page.locator(".update-card time").first().textContent())?.trim();
  expect(topDate).toMatch(/^\d{4}\.\d{2}\.\d{2}$/);

  const response = await request.get(`${baseUrl}/updates/latest.json`, {
    headers: { Origin: "https://app.docshunt.ai" },
  });
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toBe("application/json");
  expect(response.headers()["access-control-allow-origin"]).toBe("https://app.docshunt.ai");
  expect(response.headers()["cache-control"]).toBe("no-store");
  expect((await response.json()).version).toBe(topDate);
});

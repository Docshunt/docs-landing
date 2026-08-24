import { expect, test } from "playwright/test";

const baseUrl = process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3001";
const slug = "business-plan-reuse-support-program-guide";
const detailUrl = `${baseUrl}/blog_detail/${slug}`;

test("blog content renders while view count loads and then shows a successful count", async ({ page }) => {
  let postRequests = 0;
  let getRequests = 0;

  await page.route(/\/api\/blog\/[^/]+\/views$/, async (route) => {
    if (route.request().method() === "POST") {
      postRequests += 1;
      await route.fulfill({ status: 204 });
      return;
    }

    getRequests += 1;
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ views: 123 }),
      headers: { "Cache-Control": "public, max-age=600" },
    });
  });

  await page.goto(detailUrl);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.locator(".blog-detail-body")).toBeVisible();
  await expect.poll(() => getRequests).toBe(1);
  await expect(page.locator(".blog-view-count")).toHaveText("조회수 123");
  await expect.poll(() => postRequests).toBe(1);
});

test("a slow view count stays hidden and does not block the article", async ({ page }) => {
  await page.route(/\/api\/blog\/[^/]+\/views$/, async (route) => {
    if (route.request().method() === "POST") {
      await route.fulfill({ status: 204 });
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1800));
    try {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ views: 456 }),
      });
    } catch {
      // The client timeout may abort the request before the delayed response is fulfilled.
    }
  });

  await page.goto(detailUrl);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.locator(".blog-detail-body")).toBeVisible();
  await page.waitForTimeout(1900);
  await expect(page.locator(".blog-view-count")).toBeHidden();
});

test("the same browser does not increment a slug again within the dedupe window", async ({ page }) => {
  let postRequests = 0;

  await page.route(/\/api\/blog\/[^/]+\/views$/, async (route) => {
    if (route.request().method() === "POST") {
      postRequests += 1;
      await route.fulfill({ status: 204 });
      return;
    }

    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ views: 789 }),
    });
  });

  await page.goto(detailUrl);
  await expect(page.locator(".blog-view-count")).toHaveText("조회수 789");
  await expect.poll(() => postRequests).toBe(1);

  await page.reload();
  await expect(page.locator(".blog-view-count")).toHaveText("조회수 789");
  await page.waitForTimeout(100);
  expect(postRequests).toBe(1);
});

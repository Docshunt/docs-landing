import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

import type * as ProductUpdatesModule from "../src/data/product-updates";
import type * as LatestUpdateModule from "../src/seo/product-updates-latest";

const require = createRequire(import.meta.url);
const { PRODUCT_UPDATES, PRODUCT_UPDATES_LATEST_FIRST, latestProductUpdateVersion } =
  require("../src/data/product-updates.ts") as typeof ProductUpdatesModule;
const { latestProductUpdateResponse } = require("../src/seo/product-updates-latest.ts") as typeof LatestUpdateModule;

function update(publishedAt: string) {
  return { publishedAt } as ProductUpdatesModule.ProductUpdate;
}

test("latest version is derived from the same ordered update data", async () => {
  const version = latestProductUpdateVersion();
  const response = latestProductUpdateResponse();

  assert.equal(version, PRODUCT_UPDATES_LATEST_FIRST[0]?.publishedAt);
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("Content-Type"), "application/json");
  assert.equal(response.headers.get("Cache-Control"), "no-store");
  assert.equal(response.headers.get("Access-Control-Allow-Origin"), "https://app.docshunt.ai");
  assert.deepEqual(await response.json(), { version });
  assert.equal(PRODUCT_UPDATES[0]?.publishedAt, version);
});

test("ignores invalid dates and handles an empty update list safely", async () => {
  assert.equal(latestProductUpdateVersion([]), undefined);
  assert.equal(latestProductUpdateVersion([update("not-a-date")]), undefined);
  assert.equal(latestProductUpdateVersion([update("2026.09"), update("2026.08.31")]), "2026.08.31");

  const response = latestProductUpdateResponse([]);
  assert.equal(response.status, 503);
  assert.equal(response.headers.get("Content-Type"), "application/json");
  assert.equal(response.headers.get("Cache-Control"), "no-store");
  assert.deepEqual(await response.json(), { error: "Latest update is unavailable." });
});

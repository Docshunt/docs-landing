import { PRODUCT_UPDATES, latestProductUpdateVersion, type ProductUpdate } from "../data/product-updates.ts";
import { APP_URL } from "./metadata.ts";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": APP_URL,
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const JSON_HEADERS = {
  ...CORS_HEADERS,
  "Cache-Control": "no-store",
  "Content-Type": "application/json",
};

export function latestProductUpdateResponse(updates: readonly ProductUpdate[] = PRODUCT_UPDATES) {
  const version = latestProductUpdateVersion(updates);

  if (!version) {
    return new Response(JSON.stringify({ error: "Latest update is unavailable." }), {
      status: 503,
      headers: { ...JSON_HEADERS, "Retry-After": "300" },
    });
  }

  return new Response(JSON.stringify({ version }), { headers: JSON_HEADERS });
}

export function latestProductUpdateOptionsResponse() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

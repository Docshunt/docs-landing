#!/usr/bin/env node

const SITE_ORIGIN = "https://docshunt.ai";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow";
const INDEXNOW_KEY = "b09dfd10407b54e4e886b09666b376a7";

const inputUrls = process.argv.slice(2);

if (inputUrls.length === 0) {
  console.error("Usage: node scripts/submit-indexnow.mjs /blog_detail/slug [more-public-urls]");
  process.exit(1);
}

const urls = [...new Set(inputUrls.map((value) => new URL(value, SITE_ORIGIN).href))];

for (const url of urls) {
  if (new URL(url).origin !== SITE_ORIGIN) {
    throw new Error(`Only https://docshunt.ai URLs can be submitted: ${url}`);
  }
}

const response = await fetch(INDEXNOW_ENDPOINT, {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: "docshunt.ai",
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_ORIGIN}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  }),
});

if (!response.ok) {
  throw new Error(`IndexNow submission failed (${response.status}): ${await response.text()}`);
}

console.log(`IndexNow submitted ${urls.length} public URL${urls.length === 1 ? "" : "s"}.`);

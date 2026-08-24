function getSupabaseConfig() {
  if (process.env.VERCEL_ENV !== "production") return null;

  const url = process.env.SUPABASE_URL?.trim().replace(/\/$/, "");
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

  return url && serviceRoleKey ? { url, serviceRoleKey } : null;
}

export function isBlogViewCounterConfigured() {
  return getSupabaseConfig() !== null;
}

function supabaseHeaders(serviceRoleKey: string) {
  return {
    apikey: serviceRoleKey,
    Authorization: `Bearer ${serviceRoleKey}`,
  };
}

function parseViewCount(row: unknown) {
  const rawCount = typeof row === "object" && row !== null && "view_count" in row ? row.view_count : null;
  if (rawCount === null) throw new Error("Invalid blog view response");
  const viewCount = typeof rawCount === "number" ? rawCount : Number(rawCount);

  if (!Number.isSafeInteger(viewCount) || viewCount < 0) throw new Error("Invalid blog view response");

  return viewCount;
}

export async function getBlogView(slug: string) {
  const config = getSupabaseConfig();
  if (!config) throw new Error("Blog view counter is not configured");

  const url = new URL(`${config.url}/rest/v1/blog_view_counts`);
  url.searchParams.set("slug", `eq.${slug}`);
  url.searchParams.set("select", "view_count");
  url.searchParams.set("limit", "1");

  const response = await fetch(url, {
    headers: supabaseHeaders(config.serviceRoleKey),
    cache: "no-store",
  });

  if (!response.ok) throw new Error(`Supabase blog view read failed: ${response.status}`);

  const payload: unknown = await response.json();
  if (!Array.isArray(payload)) throw new Error("Invalid blog view response");
  if (payload.length === 0) return 0;

  return parseViewCount(payload[0]);
}

export async function incrementBlogView(slug: string) {
  const config = getSupabaseConfig();
  if (!config) throw new Error("Blog view counter is not configured");

  const response = await fetch(`${config.url}/rest/v1/rpc/increment_blog_view`, {
    method: "POST",
    headers: {
      ...supabaseHeaders(config.serviceRoleKey),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ p_slug: slug }),
    cache: "no-store",
  });

  if (!response.ok) throw new Error(`Supabase blog view RPC failed: ${response.status}`);

  const payload: unknown = await response.json();
  if (!Array.isArray(payload) || payload.length === 0) throw new Error("Invalid blog view RPC response");

  return parseViewCount(payload[0]);
}

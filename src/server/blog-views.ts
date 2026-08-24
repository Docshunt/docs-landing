function getSupabaseConfig() {
  if (process.env.VERCEL_ENV !== "production") return null;

  const url = process.env.SUPABASE_URL?.trim().replace(/\/$/, "");
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

  return url && serviceRoleKey ? { url, serviceRoleKey } : null;
}

export function isBlogViewCounterConfigured() {
  return getSupabaseConfig() !== null;
}

export async function incrementBlogView(slug: string) {
  const config = getSupabaseConfig();
  if (!config) throw new Error("Blog view counter is not configured");

  const response = await fetch(`${config.url}/rest/v1/rpc/increment_blog_view`, {
    method: "POST",
    headers: {
      apikey: config.serviceRoleKey,
      Authorization: `Bearer ${config.serviceRoleKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ p_slug: slug }),
    cache: "no-store",
  });

  if (!response.ok) throw new Error(`Supabase blog view RPC failed: ${response.status}`);

  const payload: unknown = await response.json();
  const row = Array.isArray(payload) ? payload[0] : null;
  const rawCount = typeof row === "object" && row !== null && "view_count" in row ? row.view_count : null;
  if (rawCount === null) throw new Error("Invalid blog view RPC response");
  const viewCount = typeof rawCount === "number" ? rawCount : Number(rawCount);

  if (!Number.isSafeInteger(viewCount) || viewCount < 0) throw new Error("Invalid blog view RPC response");

  return viewCount;
}

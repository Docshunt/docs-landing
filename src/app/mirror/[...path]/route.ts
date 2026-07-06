import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const runtime = "nodejs";

const upstreamOrigin = "https://docshunt.ai";
const hopByHopHeaders = new Set([
  "connection",
  "content-encoding",
  "content-length",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
]);
const strippedResponseHeaders = new Set([
  "content-security-policy",
  "content-security-policy-report-only",
  "x-frame-options",
]);

type MirrorContext = {
  params: Promise<{
    path?: string[];
  }>;
};

function getSetCookies(headers: Headers) {
  const withGetSetCookie = headers as Headers & { getSetCookie?: () => string[] };
  if (typeof withGetSetCookie.getSetCookie === "function") {
    return withGetSetCookie.getSetCookie();
  }
  const cookie = headers.get("set-cookie");
  return cookie ? [cookie] : [];
}

function sanitizeSetCookie(cookie: string) {
  return cookie
    .replace(/;\s*domain=[^;]*/gi, "")
    .replace(/;\s*secure/gi, "")
    .replace(/;\s*samesite=none/gi, "; SameSite=Lax");
}

function rewriteHtml(html: string) {
  return html
    .replaceAll("https://docshunt.ai/blog_list", "/blog_list")
    .replaceAll("https://www.docshunt.ai/blog_list", "/blog_list")
    .replaceAll("https://docshunt.ai/blog_detail/", "/blog_detail/")
    .replaceAll("https://www.docshunt.ai/blog_detail/", "/blog_detail/")
    .replaceAll("https://docshunt.ai/api/1.1/", "/api/1.1/")
    .replaceAll("https://www.docshunt.ai/api/1.1/", "/api/1.1/");
}

function buildForwardHeaders(request: NextRequest, upstreamUrl: URL) {
  const headers = new Headers();
  const passThrough = [
    "accept",
    "accept-language",
    "cache-control",
    "content-type",
    "cookie",
    "pragma",
    "range",
    "user-agent",
  ];

  for (const header of passThrough) {
    const value = request.headers.get(header);
    if (value) headers.set(header, value);
  }

  headers.set("accept-encoding", "identity");
  headers.set("referer", upstreamUrl.toString());
  headers.set("origin", upstreamOrigin);
  return headers;
}

async function mirror(request: NextRequest, context: MirrorContext) {
  const { path = [] } = await context.params;
  const upstreamPath = path.join("/");

  if (upstreamPath === "favicon.ico") {
    return new Response(null, {
      status: 204,
      headers: {
        "cache-control": "public, max-age=86400",
      },
    });
  }

  const upstreamUrl = new URL(`/${path.map(encodeURIComponent).join("/")}`, upstreamOrigin);
  upstreamUrl.search = request.nextUrl.search;
  if (upstreamPath === "api/1.1/init/data") {
    const location = upstreamUrl.searchParams.get("location");
    if (location) {
      try {
        const normalizedLocation = new URL(location);
        if (normalizedLocation.hostname === "localhost" || normalizedLocation.hostname === "127.0.0.1") {
          normalizedLocation.protocol = "https:";
          normalizedLocation.hostname = "docshunt.ai";
          normalizedLocation.port = "";
          upstreamUrl.searchParams.set("location", normalizedLocation.toString());
        }
      } catch {
        // Leave opaque Bubble location values unchanged.
      }
    }
  }

  const method = request.method.toUpperCase();
  const hasBody = !["GET", "HEAD"].includes(method);
  const requestInit: RequestInit = {
    method,
    headers: buildForwardHeaders(request, upstreamUrl),
    redirect: "manual",
    cache: "no-store",
  };

  if (hasBody) {
    requestInit.body = await request.arrayBuffer();
  }

  const upstreamResponse = await fetch(upstreamUrl, requestInit);

  const responseHeaders = new Headers();
  upstreamResponse.headers.forEach((value, key) => {
    const normalizedKey = key.toLowerCase();
    if (hopByHopHeaders.has(normalizedKey) || strippedResponseHeaders.has(normalizedKey)) {
      return;
    }
    if (normalizedKey === "set-cookie") {
      return;
    }
    responseHeaders.set(key, value);
  });

  for (const cookie of getSetCookies(upstreamResponse.headers)) {
    responseHeaders.append("set-cookie", sanitizeSetCookie(cookie));
  }

  responseHeaders.set("cache-control", "no-store");

  if (method === "HEAD") {
    return new Response(null, {
      status: upstreamResponse.status,
      statusText: upstreamResponse.statusText,
      headers: responseHeaders,
    });
  }

  const contentType = upstreamResponse.headers.get("content-type") ?? "";
  if (contentType.includes("text/html")) {
    responseHeaders.set("content-type", contentType);
    const html = await upstreamResponse.text();
    return new Response(rewriteHtml(html), {
      status: upstreamResponse.status,
      statusText: upstreamResponse.statusText,
      headers: responseHeaders,
    });
  }

  return new Response(upstreamResponse.body, {
    status: upstreamResponse.status,
    statusText: upstreamResponse.statusText,
    headers: responseHeaders,
  });
}

export const GET = mirror;
export const HEAD = mirror;
export const POST = mirror;
export const PUT = mirror;
export const PATCH = mirror;
export const DELETE = mirror;
export const OPTIONS = mirror;

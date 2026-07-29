const configuredSiteUrl = new URL(process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://docshunt.ai");

function isAllowedHost(url: URL) {
  return (
    url.host === configuredSiteUrl.host ||
    url.hostname === "docshunt.ai" ||
    url.hostname.endsWith(".vercel.app") ||
    url.hostname === "localhost" ||
    url.hostname === "127.0.0.1" ||
    url.hostname === "[::1]"
  );
}

export function requestOrigin(request: Request) {
  const requestUrl = new URL(request.url);
  const fallbackOrigin = isAllowedHost(requestUrl) ? requestUrl.origin : configuredSiteUrl.origin;
  const forwardedHost = (request.headers.get("x-forwarded-host") ?? request.headers.get("host"))?.split(",")[0]?.trim();
  const forwardedProtocol = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const protocol = forwardedProtocol === "http" || forwardedProtocol === "https" ? forwardedProtocol : requestUrl.protocol.slice(0, -1);

  if (!forwardedHost) return fallbackOrigin;

  try {
    const candidate = new URL(`https://${forwardedHost}`);
    return isAllowedHost(candidate) ? new URL(`${protocol}://${forwardedHost}`).origin : fallbackOrigin;
  } catch {
    return fallbackOrigin;
  }
}

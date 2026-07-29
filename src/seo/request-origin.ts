export function requestOrigin(request: Request) {
  const requestUrl = new URL(request.url);
  const forwardedHost = (request.headers.get("x-forwarded-host") ?? request.headers.get("host"))?.split(",")[0]?.trim();
  const forwardedProtocol = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const protocol = forwardedProtocol === "http" || forwardedProtocol === "https" ? forwardedProtocol : requestUrl.protocol.slice(0, -1);

  if (!forwardedHost) return requestUrl.origin;

  try {
    return new URL(`${protocol}://${forwardedHost}`).origin;
  } catch {
    return requestUrl.origin;
  }
}

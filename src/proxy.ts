import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const mirroredPagePaths = ["/blog_list", "/blog_detail"];
const mirroredRuntimePaths = [
  "/package/",
  "/static/",
  "/version-test/",
  "/cdn-cgi/",
  "/fileupload/",
  "/api/",
  "/bug/",
  "/_p/",
  "/elasticsearch/",
  "/user/",
  "/workflow/",
  "/plugin_assets/",
];

function shouldMirror(pathname: string) {
  if (pathname === "/favicon.ico") return true;
  if (mirroredPagePaths.some((path) => pathname === path || pathname.startsWith(`${path}/`))) {
    return true;
  }
  return mirroredRuntimePaths.some((path) => pathname.startsWith(path));
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname.startsWith("/mirror/") || pathname.startsWith("/_next/")) {
    return NextResponse.next();
  }

  if (!shouldMirror(pathname)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/mirror${pathname}`;
  url.search = search;
  return NextResponse.rewrite(url);
}

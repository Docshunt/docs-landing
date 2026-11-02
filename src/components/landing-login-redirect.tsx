"use client";

import { useEffect } from "react";

import { APP_URL } from "@/seo/metadata";

export function LandingLoginRedirect() {
  useEffect(() => {
    const frame = document.createElement("iframe");
    frame.hidden = true;
    frame.title = "로그인 상태 확인";
    frame.src = `${APP_URL}/landing-login-status.html?v=1`;

    const cleanup = () => {
      window.clearTimeout(timeout);
      window.removeEventListener("message", onMessage);
      frame.remove();
    };
    const onMessage = (event: MessageEvent) => {
      if (
        event.origin !== APP_URL ||
        event.source !== frame.contentWindow ||
        event.data?.type !== "docshunt:login-status:response" ||
        typeof event.data.loggedIn !== "boolean"
      )
        return;

      cleanup();
      if (event.data.loggedIn) window.location.replace(APP_URL);
    };
    const timeout = window.setTimeout(cleanup, 5000);
    frame.onload = () => frame.contentWindow?.postMessage("docshunt:login-status:request", APP_URL);
    window.addEventListener("message", onMessage);
    document.body.appendChild(frame);
    return cleanup;
  }, []);

  return null;
}

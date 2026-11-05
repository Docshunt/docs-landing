"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { DraftProofSection } from "@/components/landing/organisms/landing-draft-sections";
import landingUpdates from "@/components/landing/templates/draft-landing-updates.module.css";

import { getMasterPlanPhase } from "@/components/pricing/master-plan-schedule";

import styles from "./master-plan-page.module.css";
const INITIAL_FRAME_HEIGHT = 1600;

type EmbeddedOffer = { sixMonthTotal?: string; discount?: string };

export function MasterPlanPreview({
  children,
  offers = [],
  phaseName = "시즌 판매 종료",
}: {
  children?: ReactNode;
  offers?: EmbeddedOffer[];
  phaseName?: string;
}) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const countdownTimerRef = useRef<number | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const [frameHeight, setFrameHeight] = useState(INITIAL_FRAME_HEIGHT);
  const [frameReady, setFrameReady] = useState(false);
  const [interviewMount, setInterviewMount] = useState<HTMLElement | null>(null);
  const [scheduleMount, setScheduleMount] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const frameReadyTimer = window.requestAnimationFrame(() => setFrameReady(true));

    return () => {
      window.cancelAnimationFrame(frameReadyTimer);
      resizeObserverRef.current?.disconnect();
      if (countdownTimerRef.current !== null) window.clearInterval(countdownTimerRef.current);
    };
  }, []);

  useEffect(() => {
    // Lazy loading inside the full-height iframe can miss the outer viewport.
    interviewMount?.querySelectorAll<HTMLImageElement>("img").forEach((image) => {
      image.loading = "eager";
    });
  }, [interviewMount]);

  const handleFrameLoad = () => {
    const frame = frameRef.current;
    const frameDocument = frame?.contentDocument;

    if (!frame || !frameDocument) {
      return;
    }

    const setText = (selector: string, value: string) => {
      const node = frameDocument.querySelector<HTMLElement>(selector);
      if (node) node.textContent = value;
    };
    if (countdownTimerRef.current !== null) window.clearInterval(countdownTimerRef.current);
    const updateCountdown = () => {
      const now = Date.now();
      const phase = getMasterPlanPhase(now);
      const remaining = phase.end ? Math.max(0, Math.ceil((Date.parse(phase.end) - now) / 1000)) : 0;
      const values = [Math.floor(remaining / 86400), Math.floor(remaining / 3600) % 24, Math.floor(remaining / 60) % 60, remaining % 60];
      const title = phase.end
        ? `2027 마스터플랜 ${phase.name} 종료까지 (~${new Date(Date.parse(phase.end) - 1).toLocaleDateString("ko-KR", { timeZone: "Asia/Seoul", year: "numeric", month: "numeric", day: "numeric" })})`
        : "2027 마스터플랜 3차 시즌 가격으로 이용하세요";
      [".baTaOiaG0 > div", ".baTaPaIz > div"].forEach((selector) => setText(selector, title));
      [".baTaOjb0", ".baTaPaJaA"].forEach((selector) => {
        const node = frameDocument.querySelector<HTMLElement>(selector);
        if (phase.end === null) node?.style.setProperty("display", "none", "important");
        else node?.style.removeProperty("display");
      });
      [
        [".baTaOiaM0", ".baTaOix0", ".baTaOjaJ0", ".baTaOjaV0"],
        [".baTaPaJaG", ".baTaPaJaN", ".baTaPaJaX", ".baTaPaJe"],
      ].forEach((selectors) =>
        selectors.forEach((selector, index) => {
          setText(`${selector} > div`, String(values[index]));
        }),
      );
    };
    updateCountdown();
    countdownTimerRef.current = window.setInterval(updateCountdown, 1000);

    setText(".baTaPaRh > div", offers.length ? `최대 ${offers[1]?.discount ?? ""}` : "시즌 판매 종료");
    setText(".baTaPpn > div", `○ 2027 마스터플랜 ${phaseName} 안내`);

    const originalInterviews = frameDocument.querySelector<HTMLElement>(".baTaOraX0");
    if (originalInterviews) {
      const host = frameDocument.createElement("div");
      host.style.cssText = "width:100%;min-width:0;order:1;background:#e6f1ff";
      const shadow = host.attachShadow({ mode: "open" });
      document.querySelectorAll<HTMLStyleElement | HTMLLinkElement>('style, link[rel="stylesheet"]').forEach((node) => {
        shadow.appendChild(node.cloneNode(true));
      });
      const proofStyle = frameDocument.createElement("style");
      proofStyle.textContent = `
        .draft-proof-section {
          padding-top: 110px !important;
          padding-bottom: 88px !important;
          background: linear-gradient(to bottom, #e6f1ff 0, #fff 180px, #fff 100%) !important;
        }
        .pricing-preview-proof-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
          max-width: 100%;
          min-height: 48px;
          margin: 0 auto 12px;
          padding: 0 20px;
          border-radius: 999px;
          background: #3182f7;
          color: #fff;
          font-family: PyeojinGothic, sans-serif !important;
          font-size: 20px !important;
          font-weight: 500;
          line-height: 1.4 !important;
          text-align: center;
          word-break: keep-all;
        }
        .pricing-preview-proof-title {
          margin: 0 auto 30px;
          color: #17191f;
          font-family: PyeojinGothic, sans-serif !important;
          font-size: 52px !important;
          font-weight: 800;
          line-height: 1.3 !important;
          text-align: center;
          word-break: keep-all;
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .pricing-preview-proof-title { font-size: 40px !important; line-height: 1.35 !important; }
        }
        @media (max-width: 767px) {
          .draft-proof-section { padding-top: 80px !important; padding-bottom: 64px !important; }
          .pricing-preview-proof-badge { font-size: 16px !important; }
          .pricing-preview-proof-title { font-size: 28px !important; line-height: 1.4 !important; }
        }
      `;
      shadow.appendChild(proofStyle);
      const mount = frameDocument.createElement("div");
      mount.className = "landing-page draft-landing-page";
      const main = frameDocument.createElement("div");
      main.className = `draft-landing-main ${landingUpdates.main}`;
      mount.appendChild(main);
      shadow.appendChild(mount);
      originalInterviews.replaceWith(host);
      const refund = frameDocument.querySelector<HTMLElement>(".baTaOnaJ0");
      if (refund?.parentElement === host.parentElement) refund.before(host);
      setInterviewMount(main);
    }
    const receiptArtwork = frameDocument.querySelector<HTMLElement>(".baTaPaRj");
    if (receiptArtwork && children) {
      const host = frameDocument.createElement("div");
      host.style.cssText = "width:100%;max-width:980px;min-width:0;align-self:center;order:2";
      const shadow = host.attachShadow({ mode: "open" });
      document.querySelectorAll<HTMLStyleElement | HTMLLinkElement>('style, link[rel="stylesheet"]').forEach((node) => {
        shadow.appendChild(node.cloneNode(true));
      });
      const mount = frameDocument.createElement("div");
      shadow.appendChild(mount);
      receiptArtwork.before(host);
      setScheduleMount(mount);
    }

    const scrollToFrameTarget = (target: HTMLElement) => {
      const frameTop = frame.getBoundingClientRect().top + window.scrollY;
      const targetTop = target.getBoundingClientRect().top;

      window.scrollTo({ top: Math.max(0, frameTop + targetTop - 80), behavior: "smooth" });
    };

    const bindFrameScroll = (button: HTMLButtonElement, target?: HTMLElement) => {
      if (button.dataset.masterPlanScrollBound) {
        return;
      }

      button.dataset.masterPlanScrollBound = "true";
      button.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
          event.stopImmediatePropagation();

          if (target) {
            scrollToFrameTarget(target);
            return;
          }

          window.scrollTo({ top: 0, behavior: "smooth" });
        },
        true,
      );
    };

    frameDocument.querySelectorAll<HTMLButtonElement>("[data-go-to]").forEach((button) => {
      button.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
          event.stopImmediatePropagation();
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
        true,
      );
    });

    frameDocument.querySelectorAll<HTMLButtonElement>("[data-scroll-selector]").forEach((button) => {
      const selector = button.dataset.scrollSelector;
      const target = selector ? frameDocument.querySelector<HTMLElement>(selector) : undefined;

      bindFrameScroll(button, target ?? undefined);
    });

    const planSection = frameDocument.querySelector<HTMLElement>(".baTaPaRaV");
    const heroScrollButton = frameDocument.querySelector<HTMLButtonElement>(".baTaOhp0");

    if (heroScrollButton && planSection) {
      bindFrameScroll(heroScrollButton, planSection);
    }

    frameDocument.querySelectorAll<HTMLButtonElement>("[data-scroll-top]").forEach((button) => {
      if (button !== heroScrollButton) {
        bindFrameScroll(button);
      }
    });

    const refundButton = frameDocument.querySelector<HTMLButtonElement>(".baTaOnz0");
    const refundModal = frameDocument.querySelector<HTMLElement>("#refund-modal");

    if (refundButton && refundModal && !refundButton.dataset.masterPlanModalBound) {
      refundButton.dataset.masterPlanModalBound = "true";
      refundButton.addEventListener("click", () => {
        window.requestAnimationFrame(() => {
          if (window.getComputedStyle(refundModal).display === "none") {
            return;
          }

          const frameTop = frame.getBoundingClientRect().top + window.scrollY;
          const modalTop = Math.max(0, window.scrollY - frameTop + 80);

          refundModal.style.position = "absolute";
          refundModal.style.top = `${modalTop}px`;
          refundModal.style.bottom = "auto";
          refundModal.style.maxHeight = `${Math.max(240, window.innerHeight - 180)}px`;
          refundModal.style.overflowY = "auto";
        });
      });
    }

    const syncFrameHeight = () => {
      const content = frameDocument.querySelector<HTMLElement>(".main-page");
      if (content) {
        setFrameHeight(Math.ceil(content.getBoundingClientRect().height));
      }
    };

    resizeObserverRef.current?.disconnect();
    resizeObserverRef.current = new ResizeObserver(syncFrameHeight);
    const content = frameDocument.querySelector<HTMLElement>(".main-page");
    if (content) resizeObserverRef.current.observe(content);

    syncFrameHeight();
    window.setTimeout(syncFrameHeight, 300);
    window.setTimeout(syncFrameHeight, 1500);
  };

  return (
    <div className={`page landing-page ${styles.page} ${styles.embedded}`} id="master-plan-content">
      <div className={styles.main}>
        {frameReady ? (
          <iframe
            key={`${phaseName}-${offers.map((offer) => offer.sixMonthTotal).join("-")}`}
            ref={frameRef}
            className={styles.frame}
            src="/master-plan.html"
            title="2027 독스헌트 마스터플랜"
            style={{ height: frameHeight }}
            onLoad={handleFrameLoad}
          />
        ) : (
          <div className={styles.framePlaceholder} aria-hidden="true" />
        )}
      </div>

      {interviewMount && createPortal(<DraftProofSection marquee pricingPreview />, interviewMount)}
      {scheduleMount && createPortal(children, scheduleMount)}
    </div>
  );
}

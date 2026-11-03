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

    const contentRoot = frameDocument.querySelector(".main-page");
    if (contentRoot) {
      const textNodes = frameDocument.createTreeWalker(contentRoot, NodeFilter.SHOW_TEXT);
      while (textNodes.nextNode()) {
        const node = textNodes.currentNode;
        node.nodeValue = node.nodeValue?.replaceAll("2026", "2027").replaceAll("26년", "27년") ?? null;
      }
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
    setText(".baTaOaUaT0", "2027 마스터플랜");
    setText(".baTaOaUaU0", "마스터플랜으로 6개월 동안 무엇을 할 수 있나요?");
    setText(".baTaOgaO0 > div", "2027 지원사업\n마스터플랜 하나로 끝내세요!");
    setText(".baTaOkaV0 > div", "2027 지원사업 자동화/선정 올인원 플랜");
    setText(".baTaQaFaR > div", "내게 맞는 방식으로 사업계획서 준비하기");
    setText(".baTaQaEt > div", "2027 사업계획서, 마스터플랜으로 시작하세요");
    setText(".baTaQaFaA > div", "*표시 금액은 마스터플랜 6개월 결제 금액입니다.");
    setText(".baTaQaFaX", "플랜 선택하기");
    frameDocument.title = "독스헌트 마스터플랜 | 지원사업 합격 시 최대 50% 환급";
    setText(".baTaPhaF > div", "[지원사업 합격 환급 이벤트 가이드]");
    setText(".baTaPmb > div", "독스헌트와 함께 지원사업에 합격하신 대표님들께 결제 금액을 환급해 드립니다.");
    setText(".baTaOoaR0 > div", "지원사업");
    setText(".baTaOxaZ > div", "1,000만원 이상 선정 시");
    setText(
      ".baTaOoq0 li:first-child",
      "본 환급 이벤트는 마스터플랜 Pro 또는 Max 구독자 중 정부지원사업에서 지원금 1,000만 원 이상 최종 선정된 분을 대상으로 합니다.",
    );
    setText(
      ".baTaPmn > div",
      "중앙정부 또는 중앙정부 산하기관·전문기관 주관 지원사업 중 확정 지원금 1,000만원 이상인 사업의 최종 선정 기업. 공고 마감일 전부터 최종 발표일까지 마스터플랜 Pro 또는 Max 구독이 유효해야 합니다. 사업계획서 심사가 없는 단순 융자나 보조금 사업 등 일부 사업은 제외됩니다.",
    );
    setText(
      ".baTaPqe > div",
      "- 신청 기업 기준 확정 정부지원금 1,000만원 이상인 사업이 대상이며, 상세 기준은 참여 방법을 확인해 주세요.\n- 합격 증빙 서류 제출 및 검토 완료 후 환급이 진행됩니다.",
    );
    setText(
      ".baTaPnd > div",
      "- 신청 시기: 최종 합격 발표일(또는 협약일)로부터 30일 이내 신청 필수\n- 검토 및 승인 안내: 제출하신 모든 증빙 서류와 마케팅 미션 수행 결과는 내부 검토 과정을 거쳐 최종 승인 여부를 개별 안내해 드립니다. 서류의 진위 여부가 불분명하거나 마케팅 미션이 기준에 미달할 경우 환급이 거절되거나 보완을 요청드릴 수 있습니다.\n- 실제 환급액: 본인이 실제 결제한 금액을 기준으로 산정하며, 제세공과금(22%) 공제 후 지급됩니다.",
    );
    setText(
      ".baTaPnl > div",
      "- 본 이벤트는 마스터플랜 이용 기간 내 합격한 건에 한해 ID당 1회 적용됩니다.\n- 인터뷰 및 후기의 마케팅 활용 동의에는 독스헌트 웹사이트와 광고 채널 게시가 포함됩니다.\n- 환급 처리는 서류 검토 및 최종 승인 후 진행됩니다.",
    );
    setText(".baTaOnaW0 > div", "지원사업에 합격하면, 최대 50% 환급");
    const refundSummary = frameDocument.querySelector<HTMLElement>(".baTaOof0");
    if (refundSummary) {
      refundSummary.innerHTML = `
        <div class="master-refund-tiers" aria-label="인증 방법에 따른 환급률">
          <div><span>일반 합격 인증</span><strong>10% 환급</strong></div>
          <div><span>블로그 후기 인증</span><strong>20% 환급</strong></div>
          <div><span>영상 인터뷰 참여</span><strong>50% 환급</strong></div>
        </div>
        <p class="master-refund-condition">지원금 1,000만 원 이상 최종 선정 시</p>`;
    }
    setText(
      ".baTaOoq0 li:nth-child(2)",
      "환급 비율은 인증 방식에 따라 50%(영상 인터뷰), 20%(블로그 후기), 10%(일반 합격 인증)로 적용됩니다.",
    );
    setText(
      ".baTaPnaS > div",
      "합격 인증 방식에 따라 환급률이 차등 적용됩니다.\n1. 50% 환급 (인터뷰형): 최종 합격 후 인터뷰 참여 및 마케팅 활용 동의 시\n2. 20% 환급 (리뷰형): 블로그 후기 인증 및 마케팅 활용 동의 시\n3. 10% 환급 (일반 인증형): 합격 인증 및 후기 제출 시",
    );
    setText(".baTaPqaT > div", "- 지원사업 합격 시 조건에 따라 최대 50%까지 환급 혜택을 제공합니다.");
    setText(".baTaPraN > div", "*구매일부터 6개월 이용하며, 6개월마다 자동 결제됩니다.");
    setText(
      ".baTaPpz > div",
      "- 마스터플랜의 이용 기간은 구매일부터 6개월이며, 6개월마다 자동 결제됩니다. 해지 시 다음 결제부터 갱신되지 않습니다.\n- AI 사용량은 플랜별 일일 한도가 적용됩니다.",
    );
    setText(".baTaPpo > div", "- 마스터플랜은 월 구독 6개월 결제 금액을 기준으로 할인됩니다.");
    setText(".baTaPaRh > div", offers.length ? `최대 ${offers[1]?.discount ?? ""}` : "시즌 판매 종료");
    setText(".baTaPpn > div", `○ 2027 마스터플랜 ${phaseName} 안내`);
    setText(".baTaPaRi > div", "역대급 할인가로 만나보세요");
    setText(".baTaPaRb", "플랜 선택하기");
    const topIcon = frameDocument.querySelector<HTMLElement>(".baTaPhaT .icon-item");
    if (topIcon)
      topIcon.innerHTML =
        '<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 15l6-6 6 6"/></svg>';

    // The pricing preview owns the campaign countdown; hide duplicate timers in the embedded original.
    [
      ".baTaOjr0",
      ".baTaPaIaR",
      ".baTaOkb0",
      ".baTaPaRaL",
      ".baTaOaXaU0",
      ".baTaOnaD0",
      ".baTaOhv0",
      ".baTaOml0",
      ".baTaOaUaJ0",
      ".baTaPaMaY",
      ".baTaQaEn",
      ".baTaPoaZ",
      ".baTaOoq0",
    ].forEach((selector) => {
      const node = frameDocument.querySelector<HTMLElement>(selector);
      if (node) node.style.setProperty("display", "none", "important");
    });
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
    const style = frameDocument.createElement("style");
    style.textContent = `.baTaOgaO0 > div, .baTaPnaS > div, .baTaPnd > div, .baTaPnl > div, .baTaPqe > div, .baTaPpz > div { white-space:pre-line; }
      .b-root .bubble-element.baTaOoaH0 { background:#fff !important; }
      .b-root .bubble-element.baTaOnaJ0 { background:radial-gradient(ellipse 600px 240px at 50% 180px, rgba(49,130,247,.25), transparent 75%), #1a1a1c; border-radius:48px 48px 0 0; }
      .b-root .bubble-element.baTaOof0 { display:block !important; height:auto !important; min-height:0 !important; padding:30px 40px !important; }
      .b-root .bubble-element.baTaOoq0 { font-size:14px !important; line-height:1.5 !important; margin-top:-12px !important; }
      .b-root .master-plan-refund-notes { line-height:1.5 !important; }
      .b-root .master-plan-refund-notes li + li { margin-top:4px; }
      .master-refund-eligibility { margin:0 0 26px; padding:14px 16px; border-radius:10px; background:#edf5ff; color:#17191f; font-size:clamp(16px,1.4vw,20px); font-weight:700; line-height:1.4; text-align:center; word-break:keep-all; }
      .master-refund-eligibility strong { color:#347ef3; }
      .master-refund-condition { margin:18px 0 0; color:#697384; font-size:14px; line-height:1.5; text-align:center; word-break:keep-all; }
      .master-refund-tiers { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); }
      .master-refund-tiers > div { display:flex; flex-direction:column; align-items:center; justify-content:center; gap:8px; padding:14px 12px; text-align:center; }
      .master-refund-tiers > div + div { border-left:1px solid #e3e7ef; }
      .master-refund-tiers span { color:#697384; font-size:clamp(13px,1.2vw,17px); font-weight:600; line-height:1.4; word-break:keep-all; }
      .master-refund-tiers strong { color:#17191f; font-size:clamp(20px,2.1vw,30px); line-height:1.3; white-space:nowrap; }
      .master-refund-tiers > div:last-child { border-left:1px solid #e3e7ef; }
      .master-refund-tiers > div:last-child span { color:#697384; }
      .master-refund-tiers > div:last-child strong { color:#246fe5; }
      @media (max-width: 767px) {
        .baTaOiaG0 > div, .baTaPaIz > div { text-wrap:balance; line-height:1.4 !important; }
        .b-root .bubble-element.baTaOnaJ0 { background:radial-gradient(ellipse 90% 200px at 50% 150px, rgba(49,130,247,.25), transparent 75%), #1a1a1c; }
        .b-root .bubble-element.baTaOof0 { padding:24px 12px !important; }
        .b-root .bubble-element.baTaOoq0 { font-size:12px !important; }
        .master-refund-condition { margin-top:12px; font-size:12px; }
        .master-refund-tiers > div { gap:6px; padding:12px 4px; }
        .master-refund-tiers span { font-size:12px; }
        .master-refund-tiers strong { font-size:16px; }
      }
      .b-root .bubble-element.baTaQaFaG, .b-root .bubble-element.baTaPaRb, .b-root .bubble-element.baTaPaRj, .b-root .bubble-element.baTaPraN { display:none !important; }
      .b-root .bubble-element.baTaPaRd { background:#3182f7 !important; }
      .b-root .bubble-element.baTaPaRaV { background:#1a1a1c; }
      .b-root .bubble-element.baTaPaRaX { background: radial-gradient(ellipse 62% 48% at 50% 32%, rgba(49,130,247,.42) 0%, rgba(49,130,247,.24) 38%, transparent 78%), #1a1a1c !important; }
      .b-root .bubble-element.baTaQaEn { background:#1a1a1c !important; }
      .b-root .bubble-element.baTaOgaD0 { background: url("/docshunt-assets/master-plan-problem-background.svg") center 48px / auto 600px no-repeat, linear-gradient(to bottom,#f4f5f7 0,#3185ff 48px,#3185ff 160px,#e6f1ff 50%,#e6f1ff 100%) !important; }
      .b-root .bubble-element.baTaOkaE0, .b-root .bubble-element.baTaOym, .b-root .bubble-element.baTaPaIc { display:none !important; }
      .b-root .bubble-element.baTaOgaN0 { padding-top:140px; padding-bottom:24px !important; background-image:none !important; }
      @media (max-width: 767px) { .b-root .bubble-element.baTaOgaD0 { background-size: auto 450px, auto !important; } .b-root .bubble-element.baTaOgaN0 { padding-top:120px; padding-bottom:16px !important; } }
    `;
    frameDocument.head.appendChild(style);
    const hero = frameDocument.querySelector<HTMLImageElement>(".baTaOhi0 img");
    if (hero) hero.src = "/master-plan-hero-2027.svg";

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
    const refundCloseButton = refundModal?.querySelector<HTMLButtonElement>(".baTaPnq");
    if (refundCloseButton) {
      refundCloseButton.setAttribute("aria-label", "환급 안내 닫기");
      refundCloseButton.title = "닫기";
    }

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

"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { DraftProofSection } from "@/components/landing/organisms/landing-draft-sections";
import landingUpdates from "@/components/landing/templates/draft-landing-updates.module.css";

import { LandingHeader } from "@/components/landing/organisms";
import { APP_URL } from "@/seo/metadata";
import { getMasterPlanPhase } from "@/components/pricing/master-plan-schedule";

import styles from "./master-plan-page.module.css";
const INITIAL_FRAME_HEIGHT = 1600;

type EmbeddedOffer = { name: string; monthlyPrice: string; sixMonthTotal?: string; discount?: string };

export function MasterPlanPreview({
  embedded = false,
  children,
  offers = [],
  phaseName = "시즌 판매 종료",
}: {
  embedded?: boolean;
  children?: ReactNode;
  offers?: EmbeddedOffer[];
  phaseName?: string;
}) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const countdownTimerRef = useRef<number | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [frameHeight, setFrameHeight] = useState(INITIAL_FRAME_HEIGHT);
  const [frameReady, setFrameReady] = useState(false);
  const [interviewMount, setInterviewMount] = useState<HTMLElement | null>(null);
  const [scheduleMount, setScheduleMount] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const syncHeader = () => setScrolled(window.scrollY > 16);
    const frameReadyTimer = window.requestAnimationFrame(() => setFrameReady(true));

    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });

    return () => {
      window.cancelAnimationFrame(frameReadyTimer);
      window.removeEventListener("scroll", syncHeader);
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

    if (embedded) {
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
        const remaining = phase ? Math.max(0, Math.ceil((Date.parse(phase.end) - now) / 1000)) : 0;
        const values = [Math.floor(remaining / 86400), Math.floor(remaining / 3600) % 24, Math.floor(remaining / 60) % 60, remaining % 60];
        const title = phase
          ? `2027 마스터플랜 ${phase.name} 종료까지 (~${new Date(Date.parse(phase.end) - 1).toLocaleDateString("ko-KR", { timeZone: "Asia/Seoul", year: "numeric", month: "numeric", day: "numeric" })})`
          : "2027 마스터플랜 시즌 판매가 종료되었습니다";
        [".baTaOiaG0 > div", ".baTaPaIz > div"].forEach((selector) => setText(selector, title));
        [
          [".baTaOiaM0", ".baTaOix0", ".baTaOjaJ0", ".baTaOjaV0"],
          [".baTaPaJaG", ".baTaPaJaN", ".baTaPaJaX", ".baTaPaJe"],
        ].forEach((selectors) => selectors.forEach((selector, index) => setText(`${selector} > div`, String(values[index]))));
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
      // Keep the original comparison artwork, after the customer stories and refund benefit.
      const comparison = frameDocument.querySelector<HTMLElement>(".baTaQaFaG");
      const benefits = frameDocument.querySelector<HTMLElement>(".baTaOoaH0");
      if (comparison && benefits) {
        comparison.style.order = "10";
        const receipt = benefits.querySelector<HTMLElement>(".baTaPaRaV");
        if (receipt) benefits.insertBefore(comparison, receipt);
        else benefits.appendChild(comparison);
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
        .master-original-art { position:absolute; inset:0; width:100%; height:100%; display:block; }
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
        .b-root .baTaPaRj .aspect-ratio { padding-top: 104.63% !important; }
        .b-root .bubble-element.baTaQaFaG, .b-root .bubble-element.baTaPaRb, .b-root .bubble-element.baTaPaRj, .b-root .bubble-element.baTaPraN { display:none !important; }
        .b-root .bubble-element.baTaPaRd { background:#3182f7 !important; }
        .b-root .bubble-element.baTaPaRaV { background:#1a1a1c; }
        .b-root .bubble-element.baTaPaRaX { background: radial-gradient(ellipse 62% 48% at 50% 32%, rgba(49,130,247,.42) 0%, rgba(49,130,247,.24) 38%, transparent 78%), #1a1a1c !important; }
        .b-root .bubble-element.baTaQaEn { background:#1a1a1c !important; }
        .b-root .bubble-element.baTaOgaD0 { background: url("https://4691947d26a9c64d254186f138cdee17.cdn.bubble.io/f1766021897656x431425094396937800/PrblemBackground.svg") center 48px / auto 600px no-repeat, linear-gradient(to bottom,#f4f5f7 0,#3185ff 48px,#3185ff 160px,#e6f1ff 50%,#e6f1ff 100%) !important; }
        .b-root .bubble-element.baTaOkaE0, .b-root .bubble-element.baTaOym, .b-root .bubble-element.baTaPaIc { display:none !important; }
        .b-root .bubble-element.baTaOgaN0 { padding-top:140px; padding-bottom:24px !important; background-image:none !important; }
        @media (max-width: 767px) { .b-root .bubble-element.baTaOgaD0 { background-size: auto 450px, auto !important; } .b-root .bubble-element.baTaOgaN0 { padding-top:120px; padding-bottom:16px !important; } }
      `;
      frameDocument.head.appendChild(style);
      const hero = frameDocument.querySelector<HTMLImageElement>(".baTaOhi0 img");
      if (hero) hero.src = "/master-plan-hero-2027.svg";
      const pro = offers.find((offer) => offer.name === "Pro");
      const max = offers.find((offer) => offer.name === "Max");
      const proPrice = pro?.sixMonthTotal ?? "판매 종료";
      const maxPrice = max?.sixMonthTotal ?? "판매 종료";
      const art = (
        selector: string,
        viewBox: string,
        src: string,
        contents: string,
        label = `${phaseName}: Pro ${proPrice}, Max ${maxPrice}, 6개월 이용, 최대 50% 환급`,
      ) => {
        const old = frameDocument.querySelector<HTMLImageElement>(`${selector} img`);
        if (!old) return;
        const svg = frameDocument.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", viewBox);
        svg.setAttribute("class", "master-original-art");
        svg.setAttribute("role", "img");
        svg.setAttribute("aria-label", label);
        svg.innerHTML = `<image href="${src}" width="100%" height="100%" />${contents}`;
        old.replaceWith(svg);
      };
      art(
        ".baTaQaFaS",
        "0 0 693 454",
        "/master-plan-comparison-original.svg",
        `
        <rect x="15" y="160" width="280" height="110" fill="#2e323b"/>
        <g font-family="Arial, sans-serif" fill="#c8ced9" font-size="14"><text x="20" y="187">· 업체별 비용과 범위 확인</text><text x="20" y="225">· 상담 일정 조율</text><text x="20" y="263">· 수정 범위 사전 확인</text></g>
        <rect x="15" y="300" width="280" height="50" fill="#2e323b"/><text x="20" y="329" fill="#c8ced9" font-family="Arial, sans-serif" font-size="14">조건은 업체별로 상이</text>
        <rect x="345" y="25" width="324" height="68" fill="white"/><g font-family="Arial, sans-serif" fill="#17191e"><text x="507" y="54" text-anchor="middle" font-size="23" font-weight="700">독스헌트</text><text x="507" y="83" text-anchor="middle" font-size="23" font-weight="700">2027 마스터플랜</text></g>
        <rect x="345" y="120" width="324" height="205" fill="white"/><g font-family="Arial, sans-serif" fill="#17191e" font-size="15"><text x="345" y="143">+ 사업계획서 작성</text><text x="345" y="185">+ AI 문서 수정</text><text x="345" y="227">+ 지원사업 양식 맞춤 작성</text><text x="345" y="269">+ 최대 50% 환급 이벤트</text><text x="345" y="311">+ 구매일부터 6개월 이용</text></g>
        <rect x="345" y="352" width="335" height="85" fill="white"/><g font-family="Arial, sans-serif" fill="#17191e" font-size="18" font-weight="700"><text x="345" y="380">Pro ${proPrice}</text><text x="345" y="408">Max ${maxPrice}</text></g>`,
        "사업계획서 컨설팅과 독스헌트 마스터플랜 비교. 컨설팅 조건은 업체별로 다르며, 마스터플랜은 6개월 이용과 조건에 따른 최대 50% 환급을 제공합니다.",
      );
      const receiptImage = frameDocument.querySelector<HTMLImageElement>(".baTaPaRj img");
      if (receiptImage) {
        const receipt = frameDocument.createElementNS("http://www.w3.org/2000/svg", "svg");
        receipt.setAttribute("viewBox", "0 0 583 610");
        receipt.setAttribute("class", "master-original-art");
        receipt.setAttribute("role", "img");
        receipt.setAttribute("aria-label", `2027 마스터플랜: Pro ${proPrice}, Max ${maxPrice}, 최대 ${max?.discount ?? "시즌 종료"}`);
        const star = Array.from({ length: 24 }, (_, i) => {
          const angle = (i * Math.PI) / 12 - Math.PI / 2;
          const radius = i % 2 === 0 ? 75 : 59;
          return `${484 + Math.cos(angle) * radius},${90 + Math.sin(angle) * radius}`;
        }).join(" ");
        receipt.innerHTML = `
          <path d="M60 80H523V580H60Z" fill="white"/>
          <g fill="#1a1a1c">${Array.from({ length: 12 }, (_, i) => `<circle cx="${79.3 + i * 38.6}" cy="580" r="11"/>`).join("")}</g>
          <g fill="#17191e" font-family="Arial, sans-serif" font-weight="700" text-anchor="middle"><text x="292" y="132" font-size="31">2027 지원사업</text><text x="292" y="170" font-size="31">마스터 플랜</text></g>
          <path d="M85 204H498 M85 368H498 M85 463H498" stroke="#e1e2e5" stroke-width="2" stroke-dasharray="4 4"/>
          <g fill="none" stroke="#3182f7" stroke-width="3"><path d="M88 240l8 8 16-16"/><path d="M88 282l8 8 16-16"/><path d="M88 324l8 8 16-16"/></g>
          <g fill="#17191e" font-family="Arial, sans-serif" font-size="17" font-weight="600"><text x="122" y="250">AI 사업계획서 초안 자동 작성</text><text x="122" y="292">지원사업 양식 맞춤 작성</text><text x="122" y="334">지원사업 합격 시 최대 50% 환급</text></g>
          <g fill="#17191e" font-family="Arial, sans-serif" font-size="18"><text x="85" y="406">구매일부터 6개월 이용</text><text x="85" y="443">${phaseName}</text></g>
          <g fill="#17191e" font-family="Arial, sans-serif" font-weight="700"><text x="85" y="505" font-size="21">Pro</text><text x="498" y="505" text-anchor="end" font-size="25">${proPrice}</text><text x="85" y="550" font-size="21">Max</text><text x="498" y="550" text-anchor="end" font-size="25">${maxPrice}</text></g>
          <polygon points="${star}" fill="#3182f7" stroke="#3182f7" stroke-width="5" stroke-linejoin="round"/><text x="484" y="98" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="21" font-weight="700">${max?.discount ?? "시즌 종료"}</text>`;
        receiptImage.replaceWith(receipt);
      }
      art(
        ".baTaQaOaR",
        "0 0 607 273",
        "/master-plan-summary-original.svg",
        `
        <rect x="22" y="49" width="175" height="55" fill="white"/><text x="32" y="82" font-family="Arial, sans-serif" font-size="19" font-weight="700">${phaseName}</text>
        <circle cx="275" cy="80" r="58" fill="#3182f7"/><circle cx="275" cy="80" r="54" fill="none" stroke="white" stroke-width="2"/><text x="275" y="78" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="15" font-weight="700">${max ? `최대 ${max.discount}` : "판매 종료"}</text>
        <rect x="365" y="48" width="220" height="67" fill="white"/><g font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#17191e"><text x="573" y="74" text-anchor="end">Pro ${proPrice}</text><text x="573" y="103" text-anchor="end">Max ${maxPrice}</text></g>
        <rect x="48" y="206" width="510" height="40" fill="white"/><text x="54" y="232" font-family="Arial, sans-serif" font-size="19" fill="#758094">구매일부터 6개월 이용</text>`,
      );
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
    <div className={`page landing-page ${styles.page} ${embedded ? styles.embedded : ""}`} id={embedded ? "master-plan-content" : "top"}>
      {!embedded && (
        <LandingHeader
          mobileMenuOpen={mobileMenuOpen}
          onLogoClick={() => setMobileMenuOpen(false)}
          onStart={() => setMobileMenuOpen(false)}
          onToggleMenu={() => setMobileMenuOpen((open) => !open)}
          scrolled={scrolled}
        />
      )}

      <div className={styles.main}>
        {frameReady ? (
          <iframe
            key={`${phaseName}-${offers.map((offer) => offer.sixMonthTotal).join("-")}`}
            ref={frameRef}
            className={styles.frame}
            src="/master-plan.html"
            title={embedded ? "2027 독스헌트 마스터플랜" : "2026 독스헌트 마스터플랜"}
            style={{ height: frameHeight }}
            onLoad={handleFrameLoad}
          />
        ) : (
          <div className={styles.framePlaceholder} aria-hidden="true" />
        )}
      </div>

      {interviewMount && createPortal(<DraftProofSection marquee pricingPreview />, interviewMount)}
      {embedded && scheduleMount && createPortal(children, scheduleMount)}

      {!embedded && (
        <aside className={styles.purchaseBar} aria-label="마스터플랜 구매 안내">
          <div className={styles.purchaseBarInner}>
            <span className={styles.purchaseBarSpacer} aria-hidden="true" />
            <p>얼리버드 종료까지&nbsp;&nbsp; 0일&nbsp; 0시간&nbsp; 0분&nbsp; 0초</p>
            <a href={APP_URL}>최저가로 시작하기</a>
          </div>
        </aside>
      )}
    </div>
  );
}

"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type TransitionEvent } from "react";

import {
  LandingBox,
  LandingBreak,
  LandingButton,
  LandingHeading,
  LandingImage,
  LandingLabel,
  LandingLink,
  LandingPicture,
  LandingSource,
  LandingText,
} from "../design-system/atoms";
import {
  draftActualAssistantMessageDelay,
  draftActualAutoChatMessages,
  draftActualChatZoomInDelay,
  draftActualChatZoomOutDelay,
  draftActualDocumentGenerateDelay,
  draftActualDocumentLoadingDuration,
  draftActualDocumentLoopPause,
  draftActualDocumentPages,
  draftActualTemplateDocumentPages,
  draftActualUserMessageDelay,
  draftActualUserTypingDelay,
  draftFlowEnableChatFocusZoom,
  draftFlowMotionSequence,
  draftFlowPrograms,
  draftFlowSourceFilters,
  draftFlowVisibleRows,
  draftMemoryChatMessages,
  draftMemoryUpdates,
  draftProofAutoMs,
  draftProofCards,
  initialDraftActualChatPhase,
  isUrgentDeadline,
  toBusinessPlanTitle,
  type DraftActualChatPhase,
  type DraftActualDocumentPhase,
  type draftWorkflowCards,
} from "../data";

export function DraftProofCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isTrackTransitioning, setIsTrackTransitioning] = useState(true);
  const [isInViewport, setIsInViewport] = useState(false);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const loopedProofCards = [draftProofCards[draftProofCards.length - 1]!, ...draftProofCards, draftProofCards[0]!];
  const visibleIndex = (activeIndex - 1 + draftProofCards.length) % draftProofCards.length;

  const moveSlide = useCallback((direction: -1 | 1) => {
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    setIsTrackTransitioning(true);
    setActiveIndex((index) => Math.min(Math.max(index + direction, 0), draftProofCards.length + 1));
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const observer = new IntersectionObserver(([entry]) => setIsInViewport(entry?.isIntersecting ?? false), { threshold: 0.45 });

    observer.observe(carousel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isAutoplayPaused || !isInViewport || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => moveSlide(1), draftProofAutoMs);
    return () => window.clearInterval(timer);
  }, [isAutoplayPaused, isInViewport, moveSlide]);

  const resetTrackPosition = (index: number) => {
    setIsTrackTransitioning(false);
    setActiveIndex(index);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsTrackTransitioning(true);
        isAnimatingRef.current = false;
      });
    });
  };

  const handleTrackTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.currentTarget !== event.target) return;

    if (activeIndex === 0) {
      resetTrackPosition(draftProofCards.length);
      return;
    }

    if (activeIndex === draftProofCards.length + 1) {
      resetTrackPosition(1);
      return;
    }

    isAnimatingRef.current = false;
  };

  return (
    <LandingBox
      ref={carouselRef}
      className="draft-proof-carousel"
      aria-roledescription="carousel"
      aria-label="독스헌트 대표 인터뷰"
      onPointerEnter={() => setIsAutoplayPaused(true)}
      onPointerLeave={() => setIsAutoplayPaused(false)}
      onFocusCapture={() => setIsAutoplayPaused(true)}
      onBlurCapture={() => setIsAutoplayPaused(false)}
    >
      <LandingButton className="draft-proof-arrow previous" type="button" aria-label="이전 인터뷰 보기" onClick={() => moveSlide(-1)}>
        <LandingText as="span" aria-hidden="true">
          ‹
        </LandingText>
      </LandingButton>
      <LandingBox className="draft-proof-viewport">
        <LandingBox
          className="draft-proof-track"
          onTransitionEnd={handleTrackTransitionEnd}
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: isTrackTransitioning ? undefined : "none",
          }}
        >
          {loopedProofCards.map((card, index) => (
            <LandingBox as="article" className="draft-proof-card" key={`${card.image}-${index}`} aria-hidden={index !== activeIndex}>
              <LandingPicture>
                <LandingSource media="(max-width: 767px)" srcSet={card.mobileImage} />
                <LandingImage src={card.image} alt={card.alt} />
              </LandingPicture>
              <LandingBox className="draft-proof-content">
                <LandingBox className="draft-proof-copy">
                  <LandingHeading as="h3">{card.title}</LandingHeading>
                  <LandingText className="draft-proof-quote">
                    {card.mobileQuote ? (
                      <>
                        <LandingText as="span" className="desktop-only">
                          {card.quote}
                        </LandingText>
                        <LandingText as="span" className="mobile-only">
                          {card.mobileQuote}
                        </LandingText>
                      </>
                    ) : (
                      card.quote
                    )}
                  </LandingText>
                  <LandingText className="draft-proof-author">{card.author}</LandingText>
                  <LandingLink
                    className="draft-proof-cta"
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={index === activeIndex ? 0 : -1}
                  >
                    인터뷰 보기
                    <LandingText as="span" aria-hidden="true" />
                  </LandingLink>
                </LandingBox>
              </LandingBox>
            </LandingBox>
          ))}
        </LandingBox>
      </LandingBox>
      <LandingButton className="draft-proof-arrow next" type="button" aria-label="다음 인터뷰 보기" onClick={() => moveSlide(1)}>
        <LandingText as="span" aria-hidden="true">
          ›
        </LandingText>
      </LandingButton>
      <LandingBox className="draft-proof-dots" aria-hidden="true">
        {draftProofCards.map((card, index) => (
          <LandingText as="span" className={index === visibleIndex ? "is-active" : ""} key={card.image} />
        ))}
      </LandingBox>
    </LandingBox>
  );
}

export function DraftMemoryDemo() {
  const initialChatCount = 8;
  const memoryVisibleLimit = 12;
  const memorySlideDuration = 640;
  const [visibleChatCount, setVisibleChatCount] = useState(initialChatCount);
  const [isCompactMemoryDemo, setIsCompactMemoryDemo] = useState(false);
  const [mobileMemoryChatCount, setMobileMemoryChatCount] = useState(8);
  const [memoryItems, setMemoryItems] = useState<Array<{ id: number; text: string }>>([]);
  const [nextMemoryItem, setNextMemoryItem] = useState<{ id: number; text: string } | null>(null);
  const [isMemoryRolling, setIsMemoryRolling] = useState(false);
  const [isMemoryResetting, setIsMemoryResetting] = useState(false);
  const [isMemoryTransferActive, setIsMemoryTransferActive] = useState(false);
  const memoryItemsRef = useRef<Array<{ id: number; text: string }>>([]);
  const memoryNextIndexRef = useRef(0);
  const isMemoryRollingRef = useRef(false);
  const visibleChatLimit = isCompactMemoryDemo ? 8 : 10;
  const visibleChatStart = Math.max(0, visibleChatCount - visibleChatLimit);
  const visibleChatMessages = isCompactMemoryDemo
    ? draftMemoryChatMessages.slice(5, 5 + mobileMemoryChatCount)
    : draftMemoryChatMessages.slice(visibleChatStart, visibleChatCount);
  const visibleMemoryItems = nextMemoryItem ? [...memoryItems, nextMemoryItem] : memoryItems;

  useEffect(() => {
    const syncCompactLayout = () => {
      const viewportWidth = window.innerWidth;

      setIsCompactMemoryDemo(viewportWidth <= 767);
      setMobileMemoryChatCount(viewportWidth >= 448 ? 12 : viewportWidth >= 440 ? 11 : viewportWidth >= 420 ? 9 : 8);
    };

    syncCompactLayout();
    window.addEventListener("resize", syncCompactLayout);

    return () => {
      window.removeEventListener("resize", syncCompactLayout);
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVisibleChatCount((count) => (count >= draftMemoryChatMessages.length ? initialChatCount : count + 1));
    }, 1550);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    let memoryInterval: number | undefined;
    let rollTimeout: number | undefined;
    let transferTimeout: number | undefined;
    let resetAnimationFrame: number | undefined;
    let finishResetAnimationFrame: number | undefined;

    const addMemoryItem = () => {
      if (isMemoryRollingRef.current) return;

      setIsMemoryTransferActive(true);
      if (transferTimeout) window.clearTimeout(transferTimeout);
      transferTimeout = window.setTimeout(() => setIsMemoryTransferActive(false), memorySlideDuration);

      const nextItem = {
        id: memoryNextIndexRef.current,
        text: draftMemoryUpdates[memoryNextIndexRef.current % draftMemoryUpdates.length]!,
      };

      memoryNextIndexRef.current += 1;

      if (memoryItemsRef.current.length < memoryVisibleLimit) {
        const nextItems = [...memoryItemsRef.current, nextItem];
        memoryItemsRef.current = nextItems;
        setMemoryItems(nextItems);
        return;
      }

      isMemoryRollingRef.current = true;
      setNextMemoryItem(nextItem);
      setIsMemoryRolling(true);

      rollTimeout = window.setTimeout(() => {
        const nextItems = [...memoryItemsRef.current.slice(1), nextItem];
        memoryItemsRef.current = nextItems;
        setMemoryItems(nextItems);
        setNextMemoryItem(null);
        setIsMemoryRolling(false);
        setIsMemoryResetting(true);

        resetAnimationFrame = window.requestAnimationFrame(() => {
          finishResetAnimationFrame = window.requestAnimationFrame(() => {
            setIsMemoryResetting(false);
            isMemoryRollingRef.current = false;
          });
        });
      }, memorySlideDuration);
    };

    const firstMemoryTimer = window.setTimeout(() => {
      addMemoryItem();
      memoryInterval = window.setInterval(addMemoryItem, 950);
    }, 550);

    return () => {
      window.clearTimeout(firstMemoryTimer);
      if (memoryInterval) window.clearInterval(memoryInterval);
      if (rollTimeout) window.clearTimeout(rollTimeout);
      if (transferTimeout) window.clearTimeout(transferTimeout);
      if (resetAnimationFrame) window.cancelAnimationFrame(resetAnimationFrame);
      if (finishResetAnimationFrame) window.cancelAnimationFrame(finishResetAnimationFrame);
    };
  }, []);

  return (
    <LandingBox
      className="draft-memory-demo draft-memory-chat-transfer draft-memory-chat-to-reference"
      aria-label="채팅에서 정리된 정보가 AI 메모리에 저장되는 예시"
    >
      <LandingBox className="draft-memory-card-copy">
        <LandingHeading as="h2" id="draft-refine-title">
          쓰면 쓸수록 정교해지는 AI
        </LandingHeading>
        <LandingText>
          사업계획서를 쓸수록 AI 메모리에 아이템과 사업 정보가 쌓이고,
          <LandingBreak className="draft-memory-mobile-break" /> 다음 사업계획서에 재활용됩니다.
        </LandingText>
      </LandingBox>

      <LandingBox as="section" className="draft-memory-chat-stage" aria-label="AI 문서 채팅에서 정보가 정리되는 예시">
        <LandingBox className="draft-memory-chat-shell draft-actual-chat">
          <LandingBox className="draft-actual-chat-scroll draft-memory-chat-thread">
            <LandingBox className="draft-memory-chat-flow">
              {visibleChatMessages.map((message, index) => {
                const messageIndex = visibleChatStart + index;
                return message.role === "user" ? (
                  <LandingBox
                    className="draft-actual-user-message draft-memory-chat-row is-user"
                    key={`${message.role}-${messageIndex}-${message.text}`}
                    style={{ "--message-delay": `${index * 0.06}s` } as CSSProperties}
                  >
                    <LandingBox className="draft-actual-user-message-content">{message.text}</LandingBox>
                  </LandingBox>
                ) : (
                  <LandingBox
                    className={`draft-actual-assistant-message draft-memory-chat-row is-assistant${
                      "extractIndex" in message ? ` is-extract extract-${message.extractIndex + 1}` : ""
                    }`}
                    key={`${message.role}-${messageIndex}-${message.text}`}
                    style={
                      {
                        "--message-delay": `${index * 0.06}s`,
                        ...("extractIndex" in message ? { "--extract-delay": `${0.2 + message.extractIndex * 0.18}s` } : {}),
                      } as CSSProperties
                    }
                  >
                    <LandingBox className="draft-actual-assistant-message-content">
                      <LandingText>{message.text}</LandingText>
                    </LandingBox>
                  </LandingBox>
                );
              })}
            </LandingBox>
          </LandingBox>
        </LandingBox>
      </LandingBox>

      <LandingBox className={`draft-memory-transfer-stream${isMemoryTransferActive ? " is-transferring" : ""}`} aria-hidden="true">
        <LandingText as="span" className="stream-line" />
        <LandingText as="span" className="stream-transfer-pulse" />
        {draftMemoryUpdates.slice(0, 3).map((item, index) => (
          <LandingText
            as="span"
            className={`stream-snippet snippet-${index + 1}`}
            key={item}
            style={{ "--snippet-delay": `${2.8 + index * 2.1}s` } as CSSProperties}
          >
            <LandingText as="span" className="snippet-line is-strong" />
            <LandingText as="span" className="snippet-line" />
          </LandingText>
        ))}
      </LandingBox>

      <LandingBox as="section" className="draft-memory-reference-stage" aria-label="사업 메모리 카드 예시">
        <LandingBox as="article" className="draft-memory-reference-card">
          <LandingBox as="header" className="draft-memory-reference-header">
            <LandingText as="span" className="draft-memory-reference-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M9 3.5v3.3" />
                <path d="M12 3.5v3.3" />
                <path d="M15 3.5v3.3" />
                <path d="M9 17.2v3.3" />
                <path d="M12 17.2v3.3" />
                <path d="M15 17.2v3.3" />
                <path d="M3.5 9h3.3" />
                <path d="M3.5 12h3.3" />
                <path d="M3.5 15h3.3" />
                <path d="M17.2 9h3.3" />
                <path d="M17.2 12h3.3" />
                <path d="M17.2 15h3.3" />
                <rect x="6.8" y="6.8" width="10.4" height="10.4" rx="2.4" />
                <rect x="10" y="10" width="4" height="4" rx="1" />
              </svg>
            </LandingText>
            <LandingText as="strong">사업 메모리</LandingText>
            <LandingText as="span" className="draft-memory-live-pill">
              자동 업데이트
            </LandingText>
          </LandingBox>

          <LandingBox className="draft-memory-reference-body">
            <LandingBox className="draft-memory-list-viewport">
              <ul
                className={`draft-memory-plain-list${isMemoryRolling ? " is-rolling" : ""}${isMemoryResetting ? " is-resetting" : ""}`}
                aria-label="사업 메모리에 저장되는 핵심 정보"
              >
                {visibleMemoryItems.map((item, index) => (
                  <li
                    className={`is-saved${index === visibleMemoryItems.length - 1 && !isMemoryRolling && !isMemoryResetting ? " is-current" : ""}`}
                    key={item.id}
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </LandingBox>
          </LandingBox>
        </LandingBox>
      </LandingBox>
    </LandingBox>
  );
}

export type DraftWorkflowPreviewType = (typeof draftWorkflowCards)[number]["preview"];

export function ActualTamSamSomSvg() {
  return (
    <svg
      className="actual-tamsamsom-svg"
      width="1000"
      height="500"
      viewBox="0 0 1000 500"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="1000" height="500" fill="#f8fafc" />
      <circle cx="300" cy="250" r="200" fill="#dbeafe" stroke="#bfdbfe" strokeWidth="2" />
      <circle cx="300" cy="320" r="130" fill="#93c5fd" stroke="#60a5fa" strokeWidth="2" />
      <circle cx="300" cy="370" r="80" fill="#2563eb" stroke="#1d4ed8" strokeWidth="2" />

      <g stroke="#94a3b8" strokeWidth="2" strokeDasharray="6,4" fill="none">
        <line x1="460" y1="130" x2="580" y2="130" />
        <line x1="410" y1="250" x2="580" y2="250" />
        <line x1="380" y1="375" x2="580" y2="375" />
      </g>

      <text x="300" y="115" fontFamily="sans-serif" fontSize="28" fontWeight="900" fill="#2563eb" textAnchor="middle">
        TAM
      </text>
      <text x="300" y="145" fontFamily="sans-serif" fontSize="18" fontWeight="bold" fill="#2563eb" textAnchor="middle">
        10조 원
      </text>

      <text x="300" y="235" fontFamily="sans-serif" fontSize="24" fontWeight="900" fill="#1e3a8a" textAnchor="middle">
        SAM
      </text>
      <text x="300" y="265" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#1e3a8a" textAnchor="middle">
        2조 원
      </text>

      <text x="300" y="360" fontFamily="sans-serif" fontSize="22" fontWeight="900" fill="#ffffff" textAnchor="middle">
        SOM
      </text>
      <text x="300" y="390" fontFamily="sans-serif" fontSize="15" fontWeight="bold" fill="#ffffff" textAnchor="middle">
        1,500억 원
      </text>

      <g transform="translate(600, 110)">
        <rect x="0" y="-18" width="4" height="64" fill="#bfdbfe" rx="2" />
        <text x="16" y="0" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#1e293b">
          Total Addressable Market
        </text>
        <text x="16" y="24" fontFamily="sans-serif" fontSize="14" fill="#475569">
          국내 전체 B2B SaaS 솔루션 시장 규모
        </text>
        <text x="16" y="46" fontFamily="sans-serif" fontSize="13" fill="#64748b">
          가장 큰 범위의 잠재적 전체 시장을 의미함
        </text>
      </g>

      <g transform="translate(600, 230)">
        <rect x="0" y="-18" width="4" height="64" fill="#60a5fa" rx="2" />
        <text x="16" y="0" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#1e293b">
          Serviceable Available Market
        </text>
        <text x="16" y="24" fontFamily="sans-serif" fontSize="14" fill="#475569">
          국내 중소기업(SMB) 대상 업무 자동화 시장
        </text>
        <text x="16" y="46" fontFamily="sans-serif" fontSize="13" fill="#64748b">
          우리 비즈니스 모델로 서비스 가능한 유효 시장
        </text>
      </g>

      <g transform="translate(600, 355)">
        <rect x="0" y="-18" width="4" height="64" fill="#2563eb" rx="2" />
        <text x="16" y="0" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#1e293b">
          Serviceable Obtainable Market
        </text>
        <text x="16" y="24" fontFamily="sans-serif" fontSize="14" fill="#475569">
          출시 후 3년 내 확보 가능한 수도권 IT 중소기업
        </text>
        <text x="16" y="46" fontFamily="sans-serif" fontSize="13" fontWeight="bold" fill="#2563eb">
          핵심 1차 타겟 및 현실적인 초기 수익 확보 목표
        </text>
      </g>
    </svg>
  );
}

export function ActualSupportFlowSvg() {
  return (
    <svg
      className="actual-support-flow-svg"
      width="1000"
      height="460"
      viewBox="0 0 1000 460"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id="actual-support-flow-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#0f172a" floodOpacity="0.08" />
        </filter>

        <marker id="actual-support-flow-arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10" fill="#2563eb" />
        </marker>
      </defs>

      <rect width="1000" height="460" fill="#f8fafc" />

      <g stroke="#2563eb" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 580 110 L 786 110" markerEnd="url(#actual-support-flow-arrow)" />
        <path d="M 790 160 L 584 160" markerEnd="url(#actual-support-flow-arrow)" />
        <path d="M 580 210 L 786 210" markerEnd="url(#actual-support-flow-arrow)" />

        <path d="M 210 135 L 416 135" markerEnd="url(#actual-support-flow-arrow)" />
        <path d="M 420 185 L 214 185" markerEnd="url(#actual-support-flow-arrow)" />

        <path d="M 130 240 L 130 350 Q 130 370 150 370 L 850 370 Q 870 370 870 350 L 870 245" markerEnd="url(#actual-support-flow-arrow)" />
      </g>

      <g
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif"
        textAnchor="middle"
        paintOrder="stroke"
        stroke="#f8fafc"
        strokeWidth="4"
        strokeLinejoin="round"
      >
        <text x="685" y="95" fontSize="13" fontWeight="bold" fill="#1e293b">
          ① AI 작성 환경·이용권 제공
        </text>
        <text x="685" y="145" fontSize="13" fontWeight="bold" fill="#1e293b">
          ② 직접 결제·사업 정보 입력
        </text>
        <text x="315" y="120" fontSize="13" fontWeight="bold" fill="#1e293b">
          ③ 기관 계약·지원 프로그램 운영
        </text>
        <text x="315" y="205" fontSize="13" fontWeight="bold" fill="#1e293b">
          ④ 참여 현황·성과 리포트 제공
        </text>
        <text x="685" y="230" fontSize="13" fontWeight="900" fill="#1e293b">
          ⑤ 맞춤 질문·초안·보완 가이드
        </text>
        <text x="500" y="394" fontSize="13" fontWeight="900" fill="#1e293b">
          ⑥ 주관기관 지원으로 창업자 이용 가능
        </text>
      </g>

      <g
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif"
        textAnchor="middle"
      >
        <g transform="translate(50, 80)" filter="url(#actual-support-flow-shadow)">
          <rect width="160" height="160" rx="16" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          <text x="80" y="70" fontSize="20" fontWeight="900" fill="#334155">
            주관기관
          </text>
          <text x="80" y="90" fontSize="12" fontWeight="bold" fill="#64748b">
            (기관 도입·지원)
          </text>
          <rect x="30" y="110" width="100" height="4" rx="2" fill="#e2e8f0" />
        </g>

        <g transform="translate(420, 80)" filter="url(#actual-support-flow-shadow)">
          <rect width="160" height="160" rx="16" fill="#2563eb" stroke="#1d4ed8" strokeWidth="2" />
          <text x="80" y="70" fontSize="20" fontWeight="900" fill="#ffffff">
            DocsHunt
          </text>
          <text x="80" y="90" fontSize="12" fontWeight="bold" fill="#bfdbfe">
            (AI 작성 인프라)
          </text>
          <rect x="30" y="110" width="100" height="4" rx="2" fill="#60a5fa" />
        </g>

        <g transform="translate(790, 80)" filter="url(#actual-support-flow-shadow)">
          <rect width="160" height="160" rx="16" fill="#eff6ff" stroke="#93c5fd" strokeWidth="2" />
          <text x="80" y="66" fontSize="18" fontWeight="900" fill="#1e293b">
            스타트업
          </text>
          <text x="80" y="88" fontSize="18" fontWeight="900" fill="#1e293b">
            / 창업자
          </text>
          <text x="80" y="108" fontSize="12" fontWeight="bold" fill="#475569">
            (직접 구매·지원 이용)
          </text>
          <rect x="30" y="124" width="100" height="4" rx="2" fill="#bfdbfe" />
        </g>
      </g>
    </svg>
  );
}

export function DraftWorkflowPreview({ type }: { type: DraftWorkflowPreviewType }) {
  if (type === "visual") {
    return (
      <LandingBox className="workflow-ui workflow-actual-ui workflow-visual-actual-ui" aria-hidden="true">
        <LandingBox className="actual-visual-stack">
          <LandingBox className="actual-visual-asset-card">
            <LandingBox className="actual-visual-asset-preview">
              <ActualTamSamSomSvg />
            </LandingBox>
          </LandingBox>
          <LandingBox className="actual-flow-diagram-card">
            <ActualSupportFlowSvg />
          </LandingBox>
        </LandingBox>
      </LandingBox>
    );
  }

  if (type === "research") {
    return (
      <LandingBox className="workflow-ui workflow-actual-ui workflow-research-actual-ui" aria-hidden="true">
        <LandingBox className="actual-research-stack">
          <LandingBox as="article" className="actual-document-canvas">
            <LandingText as="span">시장 분석</LandingText>
            <LandingHeading as="h4">
              IDP 시장은 북미가 최대, 유럽이 빠르게 성장하며 미국·독일·영국·중국·일본이 주요 진출 후보로 제시됨
            </LandingHeading>
            <LandingText>
              Research Nester의 Intelligent Document Processing Market 보고서는 글로벌 IDP 시장 규모가 2025년 30억 달러에서 2035년 547억
              달러로 성장하고, 2026~2035년 CAGR 33.4%를 기록할 것으로 전망합니다.
            </LandingText>
            <LandingText>
              독스헌트는 문서 집약 업무 자동화 수요가 크고 디지털 인프라 성숙도가 높은 시장부터 접근하는 것이 적합합니다.
            </LandingText>
            <LandingBox as="footer">출처: Research Nester</LandingBox>
          </LandingBox>
          <LandingBox as="article" className="actual-document-canvas">
            <LandingText as="span">경쟁사 분석</LandingText>
            <LandingHeading as="h4">
              Document AI 시장의 경쟁 축은 IDP·문서 워크플로 자동화·생성형 AI 문서 생성 솔루션으로 확장
            </LandingHeading>
            <LandingText>
              Market.us의 Document AI Market 보고서는 Document AI 시장을 솔루션, 문서 워크플로 자동화, 생성형 문서 생성, ECM 및 정부 문서
              도구까지 구분합니다.
            </LandingText>
            <LandingText>
              기존 솔루션이 추출·분류·워크플로 자동화 중심인 만큼, 독스헌트는 HWPX/DOCX 원본 편집과 양식 보존을 차별화 축으로 제시하기
              적합합니다.
            </LandingText>
            <LandingBox as="footer">출처: Market.us</LandingBox>
          </LandingBox>
        </LandingBox>
      </LandingBox>
    );
  }

  return (
    <LandingBox className="workflow-ui workflow-actual-ui workflow-style-actual-ui" aria-hidden="true">
      <LandingBox as="section" className="actual-style-card">
        <LandingBox as="header" className="actual-style-head">
          <LandingBox>
            <LandingHeading as="h4">문서 스타일</LandingHeading>
            <LandingText>설정한 스타일은 문서 작성 시 그대로 적용됩니다</LandingText>
          </LandingBox>
          <i>×</i>
        </LandingBox>
        <LandingBox className="actual-style-content">
          <LandingBox className="actual-style-list">
            <LandingText as="span" className="active">
              대제목
            </LandingText>
            <LandingText as="span">소제목</LandingText>
            <LandingText as="span">본문</LandingText>
            <LandingText as="span">캡션</LandingText>
          </LandingBox>
          <LandingBox className="actual-style-properties">
            <LandingBox className="actual-style-row">
              <LandingLabel>
                <LandingText as="span">크기</LandingText>
                <b>16pt</b>
              </LandingLabel>
              <LandingLabel>
                <LandingText as="span">글꼴</LandingText>
                <b>HY견고딕</b>
              </LandingLabel>
            </LandingBox>
            <LandingBox className="actual-style-row">
              <LandingLabel>
                <LandingText as="span">줄간격</LandingText>
                <b>160%</b>
              </LandingLabel>
              <LandingLabel>
                <LandingText as="span">글머리 기호</LandingText>
                <b>없음</b>
              </LandingLabel>
            </LandingBox>
            <LandingBox className="actual-style-row">
              <LandingLabel>
                <LandingText as="span">문단 위 간격</LandingText>
                <b>10pt</b>
              </LandingLabel>
              <LandingLabel>
                <LandingText as="span">문단 아래 간격</LandingText>
                <b>6pt</b>
              </LandingLabel>
            </LandingBox>
            <LandingBox className="actual-format-block">
              <LandingText as="span">서식</LandingText>
              <i>B</i>
            </LandingBox>
            <LandingText as="span" className="actual-preview-caption">
              미리보기
            </LandingText>
            <LandingBox className="actual-preview-box">
              <LandingText as="strong">□ 대제목을 입력하세요</LandingText>
              <LandingText as="span">○ 부제목을 입력하세요</LandingText>
              <LandingText as="small">- 본문 텍스트를 입력하세요</LandingText>
              <LandingText as="small">※ 캡션을 입력하세요</LandingText>
            </LandingBox>
            <LandingBox className="actual-style-footer">
              <LandingText as="span">기본값 초기화</LandingText>
              <b>적용</b>
            </LandingBox>
          </LandingBox>
        </LandingBox>
      </LandingBox>
    </LandingBox>
  );
}

export function DraftFlowDemo() {
  return (
    <>
      <LandingBox className="draft-flow-mobile-only">
        <DraftFlowMobileDemo />
      </LandingBox>
      <LandingBox className="draft-flow-desktop-only">
        <DraftFlowDesktopDemo />
      </LandingBox>
    </>
  );
}

export function DraftFlowMobileDemo() {
  const [playbackCycle, setPlaybackCycle] = useState(0);

  const handleDocumentPresentationComplete = useCallback(() => {
    setPlaybackCycle((currentCycle) => currentCycle + 1);
  }, []);

  return (
    <LandingBox className="draft-flow-demo is-mobile-flow is-editor-open">
      <LandingBox className="draft-flow-frame">
        <LandingBox as="section" className="draft-flow-editor-stage" aria-label="AI 채팅과 사업계획서 초안 UI" aria-hidden="true" inert>
          <DraftActualEditorDemo key={playbackCycle} isMobileOnly onDocumentPresentationComplete={handleDocumentPresentationComplete} />
        </LandingBox>
      </LandingBox>
    </LandingBox>
  );
}

export function DraftFlowDesktopDemo() {
  const [isMotionFinished, setIsMotionFinished] = useState(false);
  const [motionStep, setMotionStep] = useState(0);
  const currentMotionStep = draftFlowMotionSequence[motionStep] ?? draftFlowMotionSequence[0]!;
  const motionPhase = currentMotionStep.phase;
  const activeSource = currentMotionStep.source;
  const selectedTitle = currentMotionStep.title;
  const isEditorOpen = isMotionFinished || currentMotionStep.isEditorOpen;
  const pointerCue = currentMotionStep.pointer;

  const filteredPrograms =
    activeSource === "전체" ? draftFlowPrograms : draftFlowPrograms.filter((program) => program.source === activeSource);
  const selectedProgram = draftFlowPrograms.find((program) => program.title === selectedTitle) ?? draftFlowPrograms[0]!;
  const selectedProgramInFilter = filteredPrograms.find((program) => program.title === selectedProgram.title);
  const visiblePrograms =
    selectedProgramInFilter && !filteredPrograms.slice(0, draftFlowVisibleRows).some((program) => program.title === selectedProgram.title)
      ? [
          selectedProgramInFilter,
          ...filteredPrograms.filter((program) => program.title !== selectedProgram.title).slice(0, draftFlowVisibleRows - 1),
        ]
      : filteredPrograms.slice(0, draftFlowVisibleRows);
  const emptyProgramRows = Array.from({ length: Math.max(draftFlowVisibleRows - visiblePrograms.length, 0) }, (_, index) => index);
  const selectedDocumentTitle = toBusinessPlanTitle(selectedProgram.title);
  const pointerCueStyle = {
    "--cursor-x": `${pointerCue.x}px`,
    "--cursor-y": `${pointerCue.y}px`,
  } as CSSProperties;
  const motionClassName = ` is-motion-playing motion-${isMotionFinished ? "editor" : motionPhase}${isMotionFinished ? " is-motion-finished" : ""}`;
  const handleDocumentComplete = useCallback(() => {
    setIsMotionFinished(true);
  }, []);

  const handleDocumentPresentationComplete = useCallback(() => {
    setIsMotionFinished(false);
    setMotionStep(0);
  }, []);

  useEffect(() => {
    if (isMotionFinished) return;

    const step = draftFlowMotionSequence[motionStep] ?? draftFlowMotionSequence[0]!;

    const timeoutId = window.setTimeout(() => {
      setMotionStep((currentStep) => (currentStep + 1) % draftFlowMotionSequence.length);
    }, step.duration);

    return () => window.clearTimeout(timeoutId);
  }, [isMotionFinished, motionStep]);

  return (
    <LandingBox
      className={`draft-flow-demo${isEditorOpen ? " is-editor-open" : ""}${motionClassName}`}
      aria-label="AI 문서 채팅과 사업계획서 초안 UI"
    >
      <LandingBox className="draft-flow-frame">
        {isEditorOpen ? (
          <LandingBox as="section" className="draft-flow-editor-stage" aria-label={`${selectedDocumentTitle} AI 채팅과 문서 뷰어`}>
            <DraftActualEditorDemo
              isMotionChatZoom={draftFlowEnableChatFocusZoom && !isMotionFinished && motionPhase === "chatZoom"}
              onDocumentComplete={handleDocumentComplete}
              onDocumentPresentationComplete={handleDocumentPresentationComplete}
            />
          </LandingBox>
        ) : (
          <LandingBox as="section" className="draft-flow-template-page" aria-labelledby="draft-flow-template-title">
            <LandingBox className="draft-flow-template-camera">
              <LandingBox className="draft-flow-template-topbar">
                <LandingBox className="draft-flow-template-header">
                  <LandingHeading as="h3" id="draft-flow-template-title">
                    지원사업
                  </LandingHeading>
                  <LandingText>지원사업 공고를 탐색하고 사업계획서를 작성해요.</LandingText>
                </LandingBox>

                <LandingBox className="draft-flow-template-toolbar">
                  <LandingButton className="draft-flow-template-filter-button" type="button">
                    맞춤 추천 필터
                  </LandingButton>
                  <LandingBox className="draft-flow-template-filter-bar" aria-label="지원사업 필터">
                    {draftFlowSourceFilters.map((source) => (
                      <LandingButton
                        className={activeSource === source ? "is-active" : ""}
                        type="button"
                        key={source}
                        aria-pressed={activeSource === source}
                        tabIndex={-1}
                      >
                        {source}
                      </LandingButton>
                    ))}
                  </LandingBox>
                </LandingBox>
              </LandingBox>

              <LandingBox className="draft-flow-template-table" role="table" aria-label="지원사업 목록">
                <LandingBox
                  className={`draft-flow-pointer-cue${pointerCue.isFollowing ? " is-following" : ""}`}
                  style={pointerCueStyle}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 52 62" focusable="false">
                    <path d="M6 4L45 34L27 38L18 57L6 4Z" />
                  </svg>
                </LandingBox>
                <LandingBox className="draft-flow-template-table-head" role="row">
                  <LandingText as="span" role="columnheader">
                    사업명
                  </LandingText>
                  <LandingText as="span" role="columnheader">
                    신청 자격
                  </LandingText>
                  <LandingText as="span" role="columnheader">
                    마감순
                  </LandingText>
                  <LandingText as="span" role="columnheader">
                    주관기관
                  </LandingText>
                  <LandingText as="span" role="columnheader" aria-label="선택" />
                </LandingBox>

                {visiblePrograms.map((program) => (
                  <LandingButton
                    className={program.title === selectedProgram.title ? "draft-flow-template-row is-selected" : "draft-flow-template-row"}
                    type="button"
                    key={program.title}
                    aria-label={`${program.title} 선택 후 사업계획서 작성 화면 열기`}
                    aria-pressed={program.title === selectedProgram.title}
                    tabIndex={-1}
                  >
                    <LandingText as="strong">
                      <LandingText as="small">{program.source}</LandingText>
                      {program.title}
                    </LandingText>
                    <em className={program.eligibility === "확인 필요" ? "needs-check" : ""}>{program.eligibility}</em>
                    <b
                      className={[
                        program.deadline.startsWith("D-") ? "" : "is-plain",
                        isUrgentDeadline(program.deadline) ? "is-urgent" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {program.deadline}
                    </b>
                    <i>{program.agency}</i>
                    <LandingText as="span" className="draft-flow-row-action" aria-hidden="true">
                      <svg viewBox="0 0 24 24" focusable="false">
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </LandingText>
                  </LandingButton>
                ))}

                {emptyProgramRows.map((index) => (
                  <LandingBox className="draft-flow-template-row is-empty" role="row" aria-hidden="true" key={`empty-program-${index}`}>
                    <LandingText as="span" />
                    <LandingText as="span" />
                    <LandingText as="span" />
                    <LandingText as="span" />
                    <LandingText as="span" />
                  </LandingBox>
                ))}
              </LandingBox>
            </LandingBox>
          </LandingBox>
        )}
      </LandingBox>
    </LandingBox>
  );
}

export function DraftActualEditorDemo({
  isMotionChatZoom = false,
  isMobileOnly = false,
  onDocumentComplete,
  onDocumentPresentationComplete,
}: {
  isMotionChatZoom?: boolean;
  isMobileOnly?: boolean;
  onDocumentComplete?: () => void;
  onDocumentPresentationComplete?: () => void;
}) {
  const [chatPhase, setChatPhase] = useState<DraftActualChatPhase>(initialDraftActualChatPhase);
  const [isChatPlaybackReady, setIsChatPlaybackReady] = useState(false);
  const hasSeenChatZoomRef = useRef(false);
  const [isDocumentGenerating, setIsDocumentGenerating] = useState(false);
  const [isDocumentComplete, setIsDocumentComplete] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);
  const mobileChatScrollRef = useRef<HTMLDivElement>(null);

  const handleDocumentPresentationComplete = useCallback(() => {
    onDocumentPresentationComplete?.();
  }, [onDocumentPresentationComplete]);

  useEffect(() => {
    if (isMotionChatZoom) {
      hasSeenChatZoomRef.current = true;
    }
  }, [isMotionChatZoom]);

  useEffect(() => {
    if (isChatPlaybackReady) return;

    const timeoutId = window.setTimeout(
      () => {
        setIsChatPlaybackReady(true);
      },
      isMotionChatZoom ? draftActualChatZoomInDelay : 0,
    );

    return () => window.clearTimeout(timeoutId);
  }, [isChatPlaybackReady, isMotionChatZoom]);

  useEffect(() => {
    if (!isChatPlaybackReady || chatPhase.sentCount >= draftActualAutoChatMessages.length) return;

    const nextMessage = draftActualAutoChatMessages[chatPhase.sentCount];
    const delay =
      chatPhase.pendingUserIndex !== null
        ? draftActualUserMessageDelay
        : nextMessage?.role === "user"
          ? draftActualUserTypingDelay
          : draftActualAssistantMessageDelay;

    const timeoutId = window.setTimeout(() => {
      setChatPhase((phase) => {
        if (phase.pendingUserIndex !== null) {
          return {
            sentCount: phase.pendingUserIndex + 1,
            pendingUserIndex: null,
          };
        }

        const nextMessage = draftActualAutoChatMessages[phase.sentCount];

        if (!nextMessage) {
          return phase;
        }

        if (nextMessage.role === "user") {
          return {
            sentCount: phase.sentCount,
            pendingUserIndex: phase.sentCount,
          };
        }

        return {
          sentCount: phase.sentCount + 1,
          pendingUserIndex: null,
        };
      });
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [chatPhase.pendingUserIndex, chatPhase.sentCount, isChatPlaybackReady]);

  useLayoutEffect(() => {
    const scrollToLatestMessage = () => {
      [chatScrollRef.current, mobileChatScrollRef.current].forEach((chatScroll) => {
        if (chatScroll) {
          chatScroll.scrollTo({
            top: Math.max(chatScroll.scrollHeight - chatScroll.clientHeight, 0),
            behavior: "smooth",
          });
        }
      });
    };

    let settleFrameId: number | undefined;
    const frameId = window.requestAnimationFrame(() => {
      scrollToLatestMessage();
      settleFrameId = window.requestAnimationFrame(scrollToLatestMessage);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      if (settleFrameId !== undefined) {
        window.cancelAnimationFrame(settleFrameId);
      }
    };
  }, [chatPhase.sentCount]);

  const isFinalChatMessageVisible = chatPhase.sentCount >= draftActualAutoChatMessages.length;
  const documentPhase: DraftActualDocumentPhase = isDocumentComplete ? "complete" : isDocumentGenerating ? "generating" : "waiting";

  useEffect(() => {
    if (!isFinalChatMessageVisible || isMotionChatZoom || isDocumentGenerating || isDocumentComplete) return;

    const timeoutId = window.setTimeout(
      () => {
        setIsDocumentGenerating(true);
      },
      hasSeenChatZoomRef.current ? draftActualChatZoomOutDelay : draftActualDocumentGenerateDelay,
    );

    return () => window.clearTimeout(timeoutId);
  }, [isDocumentComplete, isDocumentGenerating, isFinalChatMessageVisible, isMotionChatZoom]);

  useEffect(() => {
    if (!isDocumentGenerating || isDocumentComplete) return;

    const timeoutId = window.setTimeout(() => {
      setIsDocumentComplete(true);
      onDocumentComplete?.();
    }, draftActualDocumentLoadingDuration);

    return () => window.clearTimeout(timeoutId);
  }, [isDocumentComplete, isDocumentGenerating, onDocumentComplete]);

  return (
    <LandingBox
      className={`draft-actual-editor-demo${isMotionChatZoom ? " is-chat-motion-focus" : ""}`}
      aria-label="독스헌트 실제 AI 문서 채팅과 사업계획서 뷰어 UI"
    >
      <LandingBox className={`draft-actual-mobile-demo is-${documentPhase}`} aria-hidden={isMobileOnly ? undefined : true}>
        {documentPhase === "waiting" ? (
          <LandingBox as="section" className="draft-actual-chat" aria-label="AI 문서 채팅">
            <LandingBox className="draft-actual-chat-scroll" ref={mobileChatScrollRef}>
              {draftActualAutoChatMessages.slice(0, chatPhase.sentCount).map((message, index) => (
                <LandingBox className={`draft-actual-${message.role}-message`} key={`mobile-${message.role}-${index}`}>
                  {message.role === "user" ? (
                    <LandingBox className="draft-actual-user-message-content">{message.text}</LandingBox>
                  ) : (
                    <LandingBox className="draft-actual-assistant-message-content">
                      {message.paragraphs.map((paragraph) => (
                        <LandingText key={paragraph}>{paragraph}</LandingText>
                      ))}
                    </LandingBox>
                  )}
                </LandingBox>
              ))}
            </LandingBox>
          </LandingBox>
        ) : (
          <LandingBox as="section" className="draft-actual-document" aria-label="사업계획서 문서 미리보기">
            <DraftActualDocumentViewer
              phase={documentPhase}
              {...(isMobileOnly ? { onAutoScrollComplete: handleDocumentPresentationComplete } : {})}
            />
          </LandingBox>
        )}
      </LandingBox>

      <LandingBox className="draft-actual-main">
        <LandingBox as="section" className="draft-actual-chat" aria-label="AI 문서 채팅">
          <LandingBox className="draft-actual-chat-scroll" ref={chatScrollRef}>
            {draftActualAutoChatMessages.slice(0, chatPhase.sentCount).map((message, index) => (
              <LandingBox className={`draft-actual-${message.role}-message`} key={`${message.role}-${index}`}>
                {message.role === "user" ? (
                  <LandingBox className="draft-actual-user-message-content">{message.text}</LandingBox>
                ) : (
                  <LandingBox className="draft-actual-assistant-message-content">
                    {message.paragraphs.map((paragraph) => (
                      <LandingText key={paragraph}>{paragraph}</LandingText>
                    ))}
                  </LandingBox>
                )}
              </LandingBox>
            ))}
          </LandingBox>
        </LandingBox>

        <LandingBox className="draft-actual-resize-handle" aria-hidden="true" />

        <LandingBox as="section" className="draft-actual-document" aria-label="사업계획서 문서 미리보기">
          <DraftActualDocumentViewer
            phase={documentPhase}
            {...(!isMobileOnly ? { onAutoScrollComplete: handleDocumentPresentationComplete } : {})}
          />
        </LandingBox>
      </LandingBox>
    </LandingBox>
  );
}

export function DraftActualDocumentViewer({
  phase,
  compact = false,
  onAutoScrollComplete,
}: {
  phase: DraftActualDocumentPhase;
  compact?: boolean;
  onAutoScrollComplete?: () => void;
}) {
  const documentScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const documentScroll = documentScrollRef.current;

    if (phase !== "complete" || !documentScroll) return;

    let animationFrameId = 0;
    let completionTimeoutId: number | undefined;
    let startTime = 0;
    let hasUserTakenOver = false;
    let removeInteractionListeners = () => {};

    const startDelay = window.setTimeout(() => {
      const maximumScroll = documentScroll.scrollHeight - documentScroll.clientHeight;

      if (maximumScroll <= 0) return;

      documentScroll.scrollTop = 0;

      const duration = Math.min(16000, Math.max(9000, maximumScroll * 0.9));

      const stopAutoScroll = () => {
        hasUserTakenOver = true;
        window.cancelAnimationFrame(animationFrameId);
      };

      const scrollDocument = (timestamp: number) => {
        if (hasUserTakenOver) return;

        if (!startTime) startTime = timestamp;

        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        documentScroll.scrollTop = maximumScroll * progress;

        if (progress < 1) {
          animationFrameId = window.requestAnimationFrame(scrollDocument);
        } else if (onAutoScrollComplete) {
          completionTimeoutId = window.setTimeout(onAutoScrollComplete, draftActualDocumentLoopPause);
        }
      };

      documentScroll.addEventListener("wheel", stopAutoScroll, { passive: true, once: true });
      documentScroll.addEventListener("touchstart", stopAutoScroll, { passive: true, once: true });
      documentScroll.addEventListener("pointerdown", stopAutoScroll, { passive: true, once: true });
      documentScroll.addEventListener("keydown", stopAutoScroll, { once: true });
      removeInteractionListeners = () => {
        documentScroll.removeEventListener("wheel", stopAutoScroll);
        documentScroll.removeEventListener("touchstart", stopAutoScroll);
        documentScroll.removeEventListener("pointerdown", stopAutoScroll);
        documentScroll.removeEventListener("keydown", stopAutoScroll);
      };
      animationFrameId = window.requestAnimationFrame(scrollDocument);
    }, 700);

    return () => {
      window.clearTimeout(startDelay);
      if (completionTimeoutId !== undefined) {
        window.clearTimeout(completionTimeoutId);
      }
      window.cancelAnimationFrame(animationFrameId);
      removeInteractionListeners();
    };
  }, [onAutoScrollComplete, phase]);

  if (phase === "generating") {
    return (
      <LandingBox className={`draft-actual-document-status is-generating${compact ? " is-compact" : ""}`}>
        <LandingBox className="draft-actual-document-status-card">
          <LandingText as="span" className="draft-actual-document-spinner" aria-hidden="true" />
          <LandingText as="strong">문항별 초안을 작성하고 있어요</LandingText>
          <LandingText>공고 양식에 맞춰 사업계획서를 구성하는 중입니다.</LandingText>
        </LandingBox>
      </LandingBox>
    );
  }

  const pages = phase === "complete" ? draftActualDocumentPages : draftActualTemplateDocumentPages;
  const pageLabel = phase === "complete" ? "사업계획서" : "예비창업패키지 양식";

  return (
    <LandingBox className="draft-actual-document-content" ref={documentScrollRef} tabIndex={0}>
      <LandingBox className="draft-actual-page-stack" aria-label={`${pageLabel} 페이지 목록`}>
        {pages.map((page, index) => (
          <LandingBox as="article" className="draft-actual-paper" aria-label={`${pageLabel} ${index + 1}페이지`} key={page.src}>
            <LandingImage src={page.src} alt={page.alt} loading="eager" />
            <LandingText as="span" className="draft-actual-paper-page" aria-hidden="true">
              {index + 1} / {pages.length}
            </LandingText>
          </LandingBox>
        ))}
      </LandingBox>
    </LandingBox>
  );
}

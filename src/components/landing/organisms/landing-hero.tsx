"use client";

import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from "react";

import { LandingBox, LandingBreak, LandingButton, LandingHeading, LandingText } from "../design-system/atoms";
import {
  draftStoryProgramOverlays,
  heroProgramRows,
  heroWorkflowAutoMs,
  heroWorkflowChatAutoMs,
  heroWorkflowProgramClickMs,
  heroWorkflowSlides,
  heroWorkflowSwipeThreshold,
} from "../landing-data";

export type HeroWorkflowSlide = (typeof heroWorkflowSlides)[number];

export function HeroWorkflowCursor() {
  return (
    <svg className="hero-workflow-cursor" viewBox="0 0 58 72" aria-hidden="true" focusable="false">
      <path d="M6 5L52 37L34 40L47 64L36 70L23 45L9 58Z" />
    </svg>
  );
}

export function HeroMiniServiceFlowSvg() {
  return (
    <svg className="hero-complete-doc-visual is-flow" viewBox="0 0 1040 260" aria-hidden="true" focusable="false">
      <defs>
        <filter id="hero-service-flow-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#0f172a" floodOpacity="0.08" />
        </filter>
        <linearGradient id="hero-service-flow-card-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f8fafc" />
        </linearGradient>
        <linearGradient id="hero-service-flow-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <rect width="1040" height="260" rx="20" fill="#f1f5f9" />
      <g stroke="url(#hero-service-flow-line)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M235 130 L285 130 M275 120 L285 130 L275 140" />
        <path d="M495 130 L545 130 M535 120 L545 130 L535 140" />
        <path d="M755 130 L805 130 M795 120 L805 130 L795 140" />
      </g>
      {[
        { x: 40, title: "1. 양식 선택", sub1: "지원사업 선택", sub2: "제출 양식 확인", fill: "#eff6ff" },
        { x: 300, title: "2. AI 채팅", sub1: "핵심 정보 입력", sub2: "부족 항목 질문", fill: "#dbeafe" },
        { x: 560, title: "3. 자동 작성", sub1: "문단 및 표 생성", sub2: "양식 순서 반영", fill: "#bfdbfe" },
        { x: 820, title: "4. 문서 완성", sub1: "검토 후 제출", sub2: "HWPX/DOCX", fill: "#2563eb", active: true },
      ].map((item, index) => (
        <g transform={`translate(${item.x}, 55)`} key={item.title}>
          <rect
            width="180"
            height="150"
            rx="16"
            fill="url(#hero-service-flow-card-bg)"
            stroke={item.active ? "#2563eb" : undefined}
            strokeWidth={item.active ? "2" : undefined}
            filter="url(#hero-service-flow-shadow)"
          />
          <circle cx="90" cy="45" r="22" fill={item.fill} />
          {index === 0 ? (
            <>
              <circle cx="86" cy="41" r="8" stroke="#2563eb" strokeWidth="2.5" fill="none" />
              <line x1="92" y1="47" x2="98" y2="53" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
            </>
          ) : index === 1 ? (
            <>
              <rect x="75" y="35" width="30" height="20" rx="5" stroke="#2563eb" strokeWidth="2.5" fill="none" />
              <path d="M82 56 L78 64 L92 56" fill="#2563eb" opacity="0.22" />
            </>
          ) : index === 2 ? (
            <>
              <rect x="78" y="36" width="24" height="16" rx="3" stroke="#2563eb" strokeWidth="2.5" fill="none" />
              <line x1="78" y1="41" x2="102" y2="41" stroke="#2563eb" strokeWidth="2.5" />
              <rect x="82" y="46" width="6" height="3" fill="#2563eb" rx="1" />
            </>
          ) : (
            <path d="M80 45 L86 51 L100 37" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          )}
          <text x="90" y="95" fontFamily="sans-serif" fontSize="16" fontWeight="900" fill="#2563eb" textAnchor="middle">
            {item.title}
          </text>
          <text x="90" y="118" fontFamily="sans-serif" fontSize="12" fill="#64748b" textAnchor="middle">
            {item.sub1}
          </text>
          <text x="90" y="136" fontFamily="sans-serif" fontSize="12" fill="#64748b" textAnchor="middle">
            {item.sub2}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function HeroMiniTamSomSvg() {
  return (
    <svg className="hero-complete-doc-visual is-tamsom" viewBox="0 0 1000 500" aria-hidden="true" focusable="false">
      <rect width="1000" height="500" fill="#f8fafc" />
      <circle cx="300" cy="250" r="200" fill="#dbeafe" stroke="#bfdbfe" strokeWidth="2" />
      <circle cx="300" cy="320" r="130" fill="#93c5fd" stroke="#60a5fa" strokeWidth="2" />
      <circle cx="300" cy="370" r="80" fill="#2563eb" stroke="#1d4ed8" strokeWidth="2" />
      <g stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 4" fill="none">
        <line x1="460" y1="130" x2="580" y2="130" />
        <line x1="410" y1="250" x2="580" y2="250" />
        <line x1="380" y1="375" x2="580" y2="375" />
      </g>
      <text x="300" y="115" fontFamily="sans-serif" fontSize="28" fontWeight="900" fill="#2563eb" textAnchor="middle">
        TAM
      </text>
      <text x="300" y="145" fontFamily="sans-serif" fontSize="18" fontWeight="700" fill="#2563eb" textAnchor="middle">
        10조 원
      </text>
      <text x="300" y="235" fontFamily="sans-serif" fontSize="24" fontWeight="900" fill="#1e3a8a" textAnchor="middle">
        SAM
      </text>
      <text x="300" y="265" fontFamily="sans-serif" fontSize="16" fontWeight="700" fill="#1e3a8a" textAnchor="middle">
        2조 원
      </text>
      <text x="300" y="360" fontFamily="sans-serif" fontSize="22" fontWeight="900" fill="#ffffff" textAnchor="middle">
        SOM
      </text>
      <text x="300" y="390" fontFamily="sans-serif" fontSize="15" fontWeight="700" fill="#ffffff" textAnchor="middle">
        1,500억 원
      </text>
      {[
        { y: 110, color: "#bfdbfe", title: "Total Addressable Market", desc: "국내 전체 B2B SaaS 솔루션 시장 규모" },
        { y: 230, color: "#60a5fa", title: "Serviceable Available Market", desc: "국내 중소기업 대상 업무 자동화 시장" },
        { y: 355, color: "#2563eb", title: "Serviceable Obtainable Market", desc: "출시 후 3년 내 확보 가능한 고객군" },
      ].map((item) => (
        <g transform={`translate(600, ${item.y})`} key={item.title}>
          <rect x="0" y="-18" width="4" height="64" fill={item.color} rx="2" />
          <text x="16" y="0" fontFamily="sans-serif" fontSize="16" fontWeight="700" fill="#1e293b">
            {item.title}
          </text>
          <text x="16" y="24" fontFamily="sans-serif" fontSize="14" fill="#475569">
            {item.desc}
          </text>
          <text x="16" y="46" fontFamily="sans-serif" fontSize="13" fill="#64748b">
            사업계획서 시장성 근거로 자동 정리
          </text>
        </g>
      ))}
    </svg>
  );
}

export function HeroMiniCompetitorSvg() {
  return (
    <svg className="hero-complete-doc-visual is-competitor" viewBox="0 0 1000 500" aria-hidden="true" focusable="false">
      <defs>
        <filter id="hero-competitor-shadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#0f172a" floodOpacity="0.05" />
        </filter>
      </defs>
      <rect width="1000" height="500" fill="#ffffff" />
      <text x="50" y="50" fontFamily="sans-serif" fontSize="22" fontWeight="900" fill="#1e293b">
        핵심 경쟁력 비교표
      </text>
      <text x="50" y="75" fontFamily="sans-serif" fontSize="14" fill="#64748b">
        경쟁사 대비 기능 및 가격 우위 확보
      </text>
      <rect x="50" y="160" width="900" height="70" fill="#f8fafc" rx="8" />
      <rect x="50" y="300" width="900" height="70" fill="#f8fafc" rx="8" />
      <rect
        x="280"
        y="90"
        width="220"
        height="380"
        fill="#eff6ff"
        stroke="#3b82f6"
        strokeWidth="3"
        rx="12"
        filter="url(#hero-competitor-shadow)"
      />
      <rect x="350" y="78" width="80" height="24" fill="#3b82f6" rx="12" />
      <text x="390" y="94" fontFamily="sans-serif" fontSize="12" fontWeight="700" fill="#ffffff" textAnchor="middle">
        OURS
      </text>
      <g fontFamily="sans-serif" fontSize="16" fontWeight="700" fill="#475569" textAnchor="middle">
        <text x="165" y="135">
          비교 항목
        </text>
        <text x="390" y="135" fill="#1d4ed8" fontSize="18" fontWeight="900">
          우리 솔루션
        </text>
        <text x="610" y="135">
          경쟁사 A
        </text>
        <text x="760" y="135">
          경쟁사 B
        </text>
        <text x="910" y="135">
          경쟁사 C
        </text>
      </g>
      <line x1="50" y1="150" x2="950" y2="150" stroke="#e2e8f0" strokeWidth="2" />
      {[
        { y: 200, label: "100% 업무 자동화", ours: "check", a: "cross", b: "partial", c: "cross" },
        { y: 270, label: "실시간 데이터 연동", ours: "check", a: "cross", b: "cross", c: "check" },
        { y: 340, label: "시스템 구축 기간", ours: "즉시 사용", a: "3개월", b: "1개월", c: "6개월" },
        { y: 410, label: "도입 비용", ours: "월 3만 원", a: "수천만 원", b: "월 50만 원", c: "라이선스" },
      ].map((row) => (
        <g key={row.label}>
          <text x="80" y={row.y} fontFamily="sans-serif" fontSize="15" fontWeight="700" fill="#1e293b">
            {row.label}
          </text>
          {typeof row.ours === "string" && row.ours !== "check" ? (
            <>
              <text x="390" y={row.y + 2} fontFamily="sans-serif" fontSize="16" fontWeight="900" fill="#1d4ed8" textAnchor="middle">
                {row.ours}
              </text>
              <text x="610" y={row.y + 2} fontFamily="sans-serif" fontSize="14" fill="#64748b" textAnchor="middle">
                {row.a}
              </text>
              <text x="760" y={row.y + 2} fontFamily="sans-serif" fontSize="14" fill="#64748b" textAnchor="middle">
                {row.b}
              </text>
              <text x="910" y={row.y + 2} fontFamily="sans-serif" fontSize="14" fill="#64748b" textAnchor="middle">
                {row.c}
              </text>
            </>
          ) : (
            <>
              <HeroMiniStatusIcon type="check" x={390} y={row.y - 5} />
              <HeroMiniStatusIcon type={row.a as "check" | "cross" | "partial"} x={610} y={row.y - 5} />
              <HeroMiniStatusIcon type={row.b as "check" | "cross" | "partial"} x={760} y={row.y - 5} />
              <HeroMiniStatusIcon type={row.c as "check" | "cross" | "partial"} x={910} y={row.y - 5} />
            </>
          )}
        </g>
      ))}
      <line x1="50" y1="450" x2="950" y2="450" stroke="#e2e8f0" strokeWidth="2" />
    </svg>
  );
}

export function HeroMiniStatusIcon({ type, x, y }: { type: "check" | "cross" | "partial"; x: number; y: number }) {
  if (type === "check") {
    return (
      <g transform={`translate(${x}, ${y})`}>
        <circle cx="0" cy="0" r="14" fill="#dcfce7" />
        <path d="M-5 1 L-1 5 L6 -4" stroke="#16a34a" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    );
  }

  if (type === "partial") {
    return (
      <g transform={`translate(${x}, ${y})`}>
        <circle cx="0" cy="0" r="14" fill="#fef08a" />
        <path d="M-5 0 L5 0" stroke="#ca8a04" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
    );
  }

  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle cx="0" cy="0" r="14" fill="#f1f5f9" />
      <path d="M-4 -4 L4 4 M4 -4 L-4 4" stroke="#94a3b8" strokeWidth="3" fill="none" strokeLinecap="round" />
    </g>
  );
}

export function HeroMiniRoadmapSvg() {
  return (
    <svg className="hero-complete-doc-visual is-roadmap" viewBox="0 0 1000 520" aria-hidden="true" focusable="false">
      <rect width="1000" height="520" fill="#ffffff" rx="10" />
      <rect x="50" y="30" width="900" height="60" rx="15" fill="#f1f5f9" />
      <line x1="50" y1="90" x2="950" y2="90" stroke="#e2e8f0" strokeWidth="1" />
      <g fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#475569" textAnchor="middle">
        <text x="175" y="67">
          추진 과업
        </text>
        {["07", "08", "09", "10", "11", "12", "01", "02"].map((month, index) => (
          <text x={335 + index * 80} y="67" key={month}>
            {month}
          </text>
        ))}
      </g>
      <g stroke="#f1f5f9" strokeWidth="1">
        {[300, 380, 460, 540, 620, 700, 780, 860].map((x) => (
          <line x1={x} y1="90" x2={x} y2="480" key={x} />
        ))}
        {[170, 230, 290, 350, 410].map((y) => (
          <line x1="50" y1={y} x2="950" y2={y} key={y} />
        ))}
      </g>
      <g fontFamily="sans-serif" fontSize="14" fontWeight="600" fill="#1e293b">
        {["1. 플랫폼 기획 및 설계", "2. MVP 개발", "3. 파트너 계약", "4. 시범 운영", "5. 마케팅 및 홍보", "6. 성과분석"].map(
          (label, index) => (
            <text x="70" y={145 + index * 60} key={label}>
              {label}
            </text>
          ),
        )}
      </g>
      <g fontFamily="sans-serif" fontSize="11" fontWeight="700" textAnchor="middle">
        {[
          { x: 305, y: 125, w: 70, label: "1M", fill: "#2563eb", text: "#ffffff" },
          { x: 385, y: 185, w: 230, label: "3M", fill: "#2563eb", text: "#ffffff" },
          { x: 465, y: 245, w: 70, label: "1M", fill: "#2563eb", text: "#ffffff" },
          { x: 625, y: 305, w: 230, label: "3M", fill: "#2563eb", text: "#ffffff" },
          { x: 545, y: 365, w: 310, label: "4M", fill: "#60a5fa", text: "#1e293b" },
          { x: 865, y: 425, w: 70, label: "1M", fill: "#93c5fd", text: "#1e293b" },
        ].map((bar) => (
          <g key={`${bar.x}-${bar.y}`}>
            <rect x={bar.x} y={bar.y} width={bar.w} height="34" rx="17" fill={bar.fill} />
            <text x={bar.x + bar.w / 2} y={bar.y + 21} fill={bar.text}>
              {bar.label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

export function HeroWorkflowPreview({
  onProgramSelect,
  preview,
}: {
  onProgramSelect?: (() => void) | undefined;
  preview: HeroWorkflowSlide["preview"];
}) {
  if (preview === "program") {
    return (
      <LandingBox className="hero-program-preview">
        {heroProgramRows.map((program, index) =>
          index === 0 ? (
            <LandingButton
              aria-label={`${program.title} 선택하고 AI 채팅 단계 보기`}
              className="hero-program-row is-selected"
              key={program.title}
              onClick={onProgramSelect}
              type="button"
            >
              <LandingText as="span">{program.title}</LandingText>
              <LandingText as="strong" className={"urgent" in program && program.urgent ? "is-urgent" : ""}>
                {program.dday}
              </LandingText>
            </LandingButton>
          ) : (
            <LandingBox aria-hidden="true" className={`hero-program-row hero-program-row-${index}`} key={program.title}>
              <LandingText as="span">{program.title}</LandingText>
              <LandingText as="strong" className={"urgent" in program && program.urgent ? "is-urgent" : ""}>
                {program.dday}
              </LandingText>
            </LandingBox>
          ),
        )}
        <HeroWorkflowCursor />
      </LandingBox>
    );
  }

  if (preview === "chat") {
    return (
      <LandingBox className="hero-chat-preview" aria-hidden="true">
        <LandingText as="span" className="hero-ai-chat-glow" />
        <LandingBox className="hero-ai-chat-window hero-ai-chat-stream-window">
          <LandingBox className="hero-ai-chat-body">
            <LandingBox className="hero-ai-message hero-ai-message-assistant hero-ai-stream-question hero-ai-stream-question-1">
              <LandingText>사업아이템을 알려주세요.</LandingText>
            </LandingBox>
            <LandingBox className="hero-ai-message hero-ai-message-user hero-ai-stream-reply hero-ai-stream-reply-1">
              <LandingText as="span">
                사업계획서 작성 AI예요.
                <LandingBreak />
                창업자가 고객입니다.
              </LandingText>
            </LandingBox>
            <LandingBox className="hero-ai-message hero-ai-message-assistant hero-ai-stream-question hero-ai-stream-question-2">
              <LandingText>고객이 가장 불편해하는 순간은 언제인가요?</LandingText>
            </LandingBox>
            <LandingBox className="hero-ai-message hero-ai-message-user hero-ai-stream-reply hero-ai-stream-reply-2">
              <LandingText as="span">
                공고마다 양식이 달라
                <LandingBreak />
                매번 처음부터 써야 할 때예요.
              </LandingText>
            </LandingBox>
            <LandingBox className="hero-ai-message hero-ai-message-assistant hero-ai-stream-question hero-ai-stream-final">
              <LandingText>좋아요. 말씀해주신 내용을 바탕으로 사업계획서를 작성할게요.</LandingText>
            </LandingBox>
          </LandingBox>
        </LandingBox>
      </LandingBox>
    );
  }

  return (
    <LandingBox className="hero-complete-preview" aria-hidden="true">
      <LandingBox className="hero-complete-page-sequence">
        <LandingBox as="article" className="hero-complete-sequence-page hero-complete-sequence-page-1 is-flow">
          <LandingBox className="hero-complete-sequence-topbar">
            <i />
          </LandingBox>
          <LandingText as="strong">1. Problem</LandingText>
          <LandingBox className="hero-complete-sequence-prelines is-short">
            <LandingText as="span" />
            <LandingText as="span" />
          </LandingBox>
          <HeroMiniServiceFlowSvg />
          <LandingBox className="hero-complete-sequence-lines">
            <LandingText as="span" />
            <LandingText as="span" />
            <LandingText as="span" />
            <LandingText as="span" />
            <LandingText as="span" />
            <LandingText as="span" />
          </LandingBox>
        </LandingBox>
        <LandingBox as="article" className="hero-complete-sequence-page hero-complete-sequence-page-2 is-market">
          <LandingBox className="hero-complete-sequence-topbar">
            <i />
          </LandingBox>
          <LandingText as="strong">2. Solution</LandingText>
          <LandingBox className="hero-complete-sequence-field-grid">
            <LandingText as="span" />
            <LandingText as="span" />
            <LandingText as="span" />
            <LandingText as="span" />
          </LandingBox>
          <HeroMiniTamSomSvg />
          <LandingBox className="hero-complete-sequence-lines">
            <LandingText as="span" />
            <LandingText as="span" />
            <LandingText as="span" />
            <LandingText as="span" />
          </LandingBox>
        </LandingBox>
        <LandingBox as="article" className="hero-complete-sequence-page hero-complete-sequence-page-3 is-competitor">
          <LandingBox className="hero-complete-sequence-topbar">
            <i />
          </LandingBox>
          <LandingText as="strong">3. Scale-up</LandingText>
          <LandingBox className="hero-complete-sequence-prelines">
            <LandingText as="span" />
            <LandingText as="span" />
            <LandingText as="span" />
          </LandingBox>
          <HeroMiniCompetitorSvg />
          <LandingBox className="hero-complete-sequence-lines">
            <LandingText as="span" />
            <LandingText as="span" />
            <LandingText as="span" />
          </LandingBox>
        </LandingBox>
        <LandingBox as="article" className="hero-complete-sequence-page hero-complete-sequence-page-4 is-roadmap">
          <LandingBox className="hero-complete-sequence-topbar">
            <i />
          </LandingBox>
          <LandingText as="strong">4. Team</LandingText>
          <LandingBox className="hero-complete-sequence-date-row">
            <LandingText as="span" />
            <LandingText as="span" />
            <LandingText as="span" />
          </LandingBox>
          <HeroMiniRoadmapSvg />
          <LandingBox className="hero-complete-sequence-bars">
            <LandingText as="span" />
            <LandingText as="span" />
            <LandingText as="span" />
            <LandingText as="span" />
          </LandingBox>
        </LandingBox>
      </LandingBox>
    </LandingBox>
  );
}

export function HeroWorkflowSlideCard({
  clone = false,
  index,
  isActive = false,
  onProgramSelect,
  slide,
}: {
  clone?: boolean;
  index: number;
  isActive?: boolean;
  onProgramSelect?: (() => void) | undefined;
  slide: HeroWorkflowSlide;
}) {
  return (
    <LandingBox
      as="article"
      className={`hero-slide hero-workflow-slide hero-workflow-slide-${slide.preview}${isActive ? " is-active" : ""}${clone ? " clone-slide" : ""}`}
      aria-hidden={clone || undefined}
      aria-label={clone ? undefined : `독스헌트 작성 단계 ${index + 1}: ${slide.title}`}
    >
      <LandingBox className="hero-workflow-heading">
        <LandingText className="hero-workflow-step">{slide.step}</LandingText>
        <LandingHeading as="h2" className="hero-workflow-title">
          {slide.title}
        </LandingHeading>
      </LandingBox>
      <HeroWorkflowPreview onProgramSelect={onProgramSelect} preview={slide.preview} />
    </LandingBox>
  );
}

export function DraftProgramAnnouncementOverlay() {
  return (
    <figcaption className="draft-program-announcement-panel" aria-label="마감이 가까운 지원사업 공고 예시">
      <ol className="draft-program-announcement-list">
        {draftStoryProgramOverlays.map((program, index) => (
          <li
            className="draft-program-announcement-row"
            key={program.title}
            style={
              {
                "--program-delay": `${
                  (index === draftStoryProgramOverlays.length - 1
                    ? -draftStoryProgramOverlays.length
                    : index - (draftStoryProgramOverlays.length - 1)) * 2200
                }ms`,
              } as CSSProperties
            }
          >
            <LandingText as="strong">{program.title}</LandingText>
            <LandingText as="span">{program.deadline}</LandingText>
          </li>
        ))}
      </ol>
    </figcaption>
  );
}

export function HeroWorkflowCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number | null>(null);

  useEffect(() => {
    if (isDragging) {
      return;
    }

    const timer = window.setTimeout(
      () => {
        setActiveIndex((current) => (current + 1) % heroWorkflowSlides.length);
      },
      activeIndex === 0 ? heroWorkflowProgramClickMs : activeIndex === 1 ? heroWorkflowChatAutoMs : heroWorkflowAutoMs,
    );

    return () => {
      window.clearTimeout(timer);
    };
  }, [activeIndex, isDragging]);

  const goToSlide = (nextIndex: number) => {
    setActiveIndex((nextIndex + heroWorkflowSlides.length) % heroWorkflowSlides.length);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLElement && event.target.closest("button, a")) {
      return;
    }

    dragStartX.current = event.clientX;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const finishDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) {
      return;
    }

    const deltaX = event.clientX - dragStartX.current;
    dragStartX.current = null;
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (Math.abs(deltaX) < heroWorkflowSwipeThreshold) {
      return;
    }

    goToSlide(activeIndex + (deltaX < 0 ? 1 : -1));
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) {
      return;
    }

    event.preventDefault();
  };

  const handlePointerCancel = (event: PointerEvent<HTMLDivElement>) => {
    dragStartX.current = null;
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToSlide(activeIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToSlide(activeIndex + 1);
    }
  };

  return (
    <LandingBox
      className={`hero-carousel${isDragging ? " is-dragging" : ""}${activeIndex === 0 ? " is-program-step" : ""}`}
      aria-label="독스헌트 작성 단계 미리보기"
      onKeyDown={handleKeyDown}
      onPointerCancel={handlePointerCancel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishDrag}
      role="region"
      tabIndex={0}
    >
      <LandingBox className="hero-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {heroWorkflowSlides.map((slide, index) => (
          <HeroWorkflowSlideCard
            index={index}
            isActive={activeIndex === index}
            key={slide.step}
            onProgramSelect={() => goToSlide(1)}
            slide={slide}
          />
        ))}
      </LandingBox>
      <LandingButton
        aria-label="이전 단계 보기"
        className="hero-carousel-arrow hero-carousel-arrow-prev"
        onClick={() => goToSlide(activeIndex - 1)}
        type="button"
      >
        <LandingText as="span" aria-hidden="true" />
      </LandingButton>
      <LandingButton
        aria-label="다음 단계 보기"
        className="hero-carousel-arrow hero-carousel-arrow-next"
        onClick={() => goToSlide(activeIndex + 1)}
        type="button"
      >
        <LandingText as="span" aria-hidden="true" />
      </LandingButton>
      <LandingBox className="carousel-dots">
        {heroWorkflowSlides.map((slide, index) => (
          <LandingButton
            aria-label={`${slide.step} 보기`}
            aria-pressed={activeIndex === index}
            className={activeIndex === index ? "is-active" : ""}
            key={slide.step}
            onClick={() => goToSlide(index)}
            type="button"
          />
        ))}
      </LandingBox>
    </LandingBox>
  );
}

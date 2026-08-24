"use client";

import {
  LandingBox,
  LandingBreak,
  LandingHeading,
  LandingIframe,
  LandingImage,
  LandingPicture,
  LandingSource,
  LandingText,
  LandingVideo,
} from "../design-system/atoms";
import { LandingCta, LandingSection } from "../design-system/molecules";
import { assets, interviewVideos, questionVideo, startPath, toolColumns, youtubeEmbedSrc, type StartHandler } from "../data";
import { HeroWorkflowCarousel } from "./landing-hero";

export function LegacyHeroSection({ onStart }: { onStart: StartHandler }) {
  return (
    <LandingSection className="hero" labelledBy="hero-title">
      <LandingBox className="hero-copy">
        <LandingHeading as="h1" className="hero-title" id="hero-title">
          맞춤 공고 탐색부터
          <LandingText as="span" className="mobile-break">
            <LandingBreak />
          </LandingText>{" "}
          사업계획서 작성까지 한 번에
        </LandingHeading>
        <LandingText className="hero-subtitle">독스헌트와 함께 지원사업을 쉽고 빠르게</LandingText>
        <LandingCta kind="cta" href={startPath} onClick={onStart}>
          무료로 시작하기
        </LandingCta>
      </LandingBox>
      <HeroWorkflowCarousel />
    </LandingSection>
  );
}

export function LegacyQuestionSection({ onStart }: { onStart: StartHandler }) {
  return (
    <LandingSection className="question-section" labelledBy="question-title">
      <LandingHeading as="h2" className="question-title" id="question-title">
        <LandingText as="span" className="line">
          <LandingText as="span" className="muted-word mobile-stack">
            내 사업을
          </LandingText>
          <LandingText as="span">가장 잘 아는 AI가</LandingText>
          <LandingImage className="sparkle" src={`${assets}/sparkle-accent.svg`} alt="" />
          <LandingText as="span" className="muted-word mobile-stack">
            질문하고
          </LandingText>
        </LandingText>
        <LandingText as="span" className="line">
          사업계획서를 완성합니다
        </LandingText>
      </LandingHeading>
      <LandingVideo
        className="question-video"
        src={questionVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-label="독스헌트 AI 질문 작성 화면 미리보기"
      />

      <LandingBox className="feature-intro">
        <LandingHeading as="h2" className="section-title">
          사업 한 번 정리하면,
          <LandingText as="span" className="mobile-break">
            <LandingBreak />
          </LandingText>{" "}
          모든 지원사업 자동 완성!
        </LandingHeading>
        <LandingText className="section-subtitle">
          아이템 정보를 모아두고,
          <LandingText as="span" className="mobile-break">
            <LandingBreak />
          </LandingText>{" "}
          사업계획서를 지원사업마다 더 정교하게
        </LandingText>
      </LandingBox>

      <LandingBox className="feature-cards" id="features">
        <LandingBox as="article" className="wide-card one">
          <LandingHeading as="h3">
            내 사업과 지원사업에 맞게
            <LandingBreak />
            질문/답변 자동 정리
          </LandingHeading>
          <LandingCta kind="cta" href={startPath} onClick={onStart} small>
            무료 체험하기
          </LandingCta>
          <LandingImage className="feature-card-image" src={`${assets}/feature-question-answer-mobile.webp`} alt="" />
        </LandingBox>
        <LandingBox as="article" className="wide-card two">
          <LandingHeading as="h3">
            <LandingText as="span" className="feature-title-desktop">
              K-Startup, 기업마당
              <LandingBreak />전 지원사업 사업계획서 대응
            </LandingText>
            <LandingText as="span" className="feature-title-compact">
              모든 지원사업
              <LandingBreak />
              한글 양식 완벽 대응
            </LandingText>
          </LandingHeading>
          <LandingCta kind="cta" href={startPath} onClick={onStart} small>
            무료 체험하기
          </LandingCta>
          <LandingImage className="feature-card-image" src={`${assets}/feature-hwp-template-mobile.webp`} alt="" />
        </LandingBox>
      </LandingBox>
    </LandingSection>
  );
}

export function LegacyToolsSection() {
  return (
    <LandingSection className="tools-section" labelledBy="tools-title">
      <LandingHeading as="h2" className="section-title" id="tools-title">
        아이템을 더 단단하게
        <LandingText as="span" className="mobile-break">
          <LandingBreak />
        </LandingText>{" "}
        만드는 도구들
      </LandingHeading>
      <LandingBox className="tool-grid">
        {toolColumns.map((column, columnIndex) => (
          <LandingBox className="tool-column" key={columnIndex}>
            {column.map((tool) => (
              <LandingBox as="article" className={`tool-card ${tool.className}`} key={tool.title}>
                <LandingBox className="tool-card-copy">
                  <LandingText as="span" className="badge">
                    {tool.badge}
                  </LandingText>
                  <LandingHeading as="h3">
                    {tool.title.split("\n").map((line) => (
                      <LandingText as="span" key={line}>
                        {line}
                        <LandingBreak />
                      </LandingText>
                    ))}
                  </LandingHeading>
                </LandingBox>
                <LandingPicture>
                  <LandingSource media="(max-width: 1200px)" srcSet={tool.mobileImage} />
                  <LandingImage src={tool.image} alt="" />
                </LandingPicture>
              </LandingBox>
            ))}
          </LandingBox>
        ))}
      </LandingBox>
    </LandingSection>
  );
}

export function LegacyInterviewSection() {
  return (
    <LandingSection className="interview-section" id="interviews" labelledBy="interviews-title">
      <LandingBox className="interview-heading">
        <LandingHeading as="h2" className="section-title" id="interviews-title">
          합격한 대표님들이
          <LandingText as="span" className="mobile-break">
            <LandingBreak />
          </LandingText>{" "}
          직접 말해요
        </LandingHeading>
        <LandingText className="section-subtitle">
          <LandingText as="span" className="interview-subtitle-default">
            독스헌트로 지원사업에 합격한
            <LandingText as="span" className="mobile-break">
              <LandingBreak />
            </LandingText>{" "}
            대표님들의 생생한 인터뷰
          </LandingText>
          <LandingText as="span" className="interview-subtitle-tablet">
            누적 사업계획서 생성 1만 건을 돌파한, 수많은 창업자가 믿고 쓰는 사업계획서 AI
          </LandingText>
        </LandingText>
      </LandingBox>
      <LandingBox className="video-grid" aria-label="독스헌트 고객 인터뷰 영상">
        {interviewVideos.map((video) => (
          <LandingIframe
            className={`video-frame ${video.className}`}
            src={youtubeEmbedSrc(video.id)}
            title={video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            key={video.id}
          />
        ))}
      </LandingBox>
    </LandingSection>
  );
}

export function LegacySecuritySection() {
  return (
    <LandingSection ariaLabel="보안 안내" className="security-section">
      <LandingImage
        className="security-title desktop"
        src={`${assets}/hero-ownership-headline-full.svg`}
        alt="사업계획서는 오직 사용자만의 것입니다"
      />
      <LandingBox className="security-title mobile" aria-label="사업계획서는 오직 사용자만의 것입니다">
        <LandingImage src={`${assets}/hero-ownership-headline-prefix.svg`} alt="사업계획서는" />
        <LandingImage src={`${assets}/hero-ownership-headline-suffix.svg`} alt="오직 사용자만의 것입니다" />
      </LandingBox>
      <LandingImage className="security-image" src={`${assets}/trust-security-desktop.webp`} alt="보안 잠금 이미지" />
      <LandingText className="security-copy">
        <LandingText as="span" className="desktop-only">
          모든 데이터는, 암호화되어 안전하게 보호됩니다.
          <LandingBreak />
          외부 유출 및 AI 모델 학습에 이용되지 않습니다.
        </LandingText>
        <LandingText as="span" className="mobile-only">
          모든 데이터는, 암호화되어 안전하게 보호됩니다.
          <LandingBreak />
          외부 유출 및 AI 모델 학습에 이용되지 않습니다.
        </LandingText>
      </LandingText>
    </LandingSection>
  );
}

export function LegacyProblemGraphic() {
  return (
    <LandingImage className="problem-graphic" src={`${assets}/problem-graphic.svg`} alt="사업계획서 작성 문제를 해결하는 독스헌트 그래픽" />
  );
}

export function LegacyFinalCtaSection({ onStart }: { onStart: StartHandler }) {
  return (
    <LandingSection className="final-cta" labelledBy="final-title">
      <LandingHeading as="h2" className="final-title" id="final-title">
        <LandingText as="span" className="draft-final-title-gradient">
          작성 시간은 1/10로
          <LandingBreak />
          자금 확보 기회는 10배로
        </LandingText>
      </LandingHeading>
      <LandingText className="final-subtitle">
        <LandingText as="span" className="desktop-only">
          “낚싯대를 1개 드리우는 것과 100개 드리우는 것의 확률은 다릅니다.
          <LandingBreak />
          독스헌트를 활용해서 지원사업을 최대한 많이 신청하는 게 최고의 전략입니다.”
        </LandingText>
        <LandingText as="span" className="mobile-only">
          “낚싯대를 1개 드리우는 것과
          <LandingBreak />
          100개 드리우는 것의 확률은 다릅니다.
          <LandingBreak />
          <LandingBreak />
          독스헌트를 활용해서 지원사업을 최대한 많이
          <LandingBreak />
          신청하는 게 최고의 전략입니다.”
        </LandingText>
        <LandingText as="span" className="final-quote-author">
          박중현, 스피노자 대표
        </LandingText>
      </LandingText>
      <LandingCta dark kind="cta" href={startPath} onClick={onStart}>
        무료로 시작하기
      </LandingCta>
    </LandingSection>
  );
}

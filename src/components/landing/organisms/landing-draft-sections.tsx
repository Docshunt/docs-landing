"use client";

import { LandingBox, LandingBreak, LandingHeading, LandingImage, LandingText } from "../design-system/atoms";
import { LandingCard, LandingCopy, LandingCta, LandingMediaFrame, LandingSection } from "../design-system/molecules";
import { assets, draftWorkflowCards, startPath, type StartHandler } from "../landing-data";
import { DraftFlowDemo, DraftMemoryDemo, DraftProofCarousel, DraftWorkflowPreview } from "./landing-demos";
import { DraftProgramAnnouncementOverlay, HeroWorkflowCarousel } from "./landing-hero";

export function DraftHeroSection({ onStart }: { onStart: StartHandler }) {
  return (
    <LandingSection className="hero" labelledBy="draft-hero-title">
      <LandingBox className="hero-copy">
        <LandingHeading as="h1" className="hero-title" id="draft-hero-title">
          모든 지원사업,
          <LandingBreak className="draft-hero-title-break" /> 사업계획서를 작성하는 AI
        </LandingHeading>
        <LandingText className="hero-subtitle">쓰면 쓸수록 더 잘 써주는 독스헌트, 지금 바로 만나보세요</LandingText>
        <LandingCta kind="cta" href={startPath} onClick={onStart}>
          무료로 시작하기
        </LandingCta>
      </LandingBox>
      <HeroWorkflowCarousel />
    </LandingSection>
  );
}

export function DraftStorySection() {
  return (
    <LandingSection className="draft-story-section" labelledBy="draft-story-title">
      <LandingCopy title="끝없는 지원사업, 대표 몸은 하나" titleId="draft-story-title">
        <LandingText>
          지원사업, 스타트업의 자금 조달에 있어 꼭 필요하지만,
          <LandingBreak />
          지원사업 별로 사업계획서 양식이 전부 달라 대표에게 엄청난 리소스 할애를 부담시킵니다
        </LandingText>
      </LandingCopy>
      <LandingMediaFrame className="draft-program-visual">
        <LandingImage
          className="draft-program-visual-image"
          src={`${assets}/draft-landing-program-selection-background.webp`}
          alt="지원사업 공고를 확인하는 대표"
          width="2644"
          height="1184"
          loading="lazy"
        />
        <DraftProgramAnnouncementOverlay />
      </LandingMediaFrame>
      <LandingCopy
        narrow
        title={
          <>
            지원사업 선택하고,
            <LandingText as="span" className="mobile-break">
              <LandingBreak />
            </LandingText>{" "}
            AI와 대화하면
            <LandingBreak />
            어느새 사업계획서 완성
          </>
        }
      >
        <LandingText>아이템 정보를 모아두고, 사업계획서를 지원사업마다 더 정교하게</LandingText>
      </LandingCopy>
      <DraftFlowDemo />
    </LandingSection>
  );
}

export function DraftProofSection() {
  return (
    <LandingSection className="draft-proof-section" labelledBy="draft-proof-title">
      <LandingCopy
        title={
          <>
            똑똑한 대표들은 이미 독스헌트로
            <LandingBreak />더 빠르게 결과를 내고 있습니다
          </>
        }
        titleId="draft-proof-title"
      >
        <LandingText className="draft-proof-intro">
          <LandingText as="span" className="draft-proof-intro-desktop">
            하루에 사업계획서 5개를 작성하는 대표부터, 첫 지원사업에 합격한 대표까지
            <LandingBreak />
            직접 사용해보며 그 진가를 확인해 보세요.
          </LandingText>
          <LandingText as="span" className="draft-proof-intro-mobile">
            <LandingText as="span">하루에 사업계획서 5개를 작성하는 대표부터,</LandingText>
            <LandingText as="span">첫 지원사업에 합격한 대표까지</LandingText>
            <LandingText as="span">직접 사용해보며 그 진가를 확인해 보세요.</LandingText>
          </LandingText>
        </LandingText>
      </LandingCopy>
      <DraftProofCarousel />
    </LandingSection>
  );
}

export function DraftRefineSection() {
  return (
    <LandingSection className="draft-refine-section" labelledBy="draft-refine-title">
      <DraftMemoryDemo />
    </LandingSection>
  );
}

export function DraftWorkflowSection() {
  return (
    <LandingSection className="draft-dark-workflow" labelledBy="draft-workflow-title">
      <LandingCopy inverted title="사업계획서 완성까지, 독스헌트에서 전부" titleId="draft-workflow-title">
        <LandingText>
          시각 자료 생성, 시장·경쟁사 조사, 문서 스타일 자동 정리까지
          <LandingBreak />
          사업계획서 완성에 필요한 작업을 AI와 함께 이어서 처리할 수 있습니다.
        </LandingText>
      </LandingCopy>
      <LandingBox className="draft-workflow-grid">
        {draftWorkflowCards.map((card) => (
          <LandingCard body={card.body} key={card.title} title={card.title}>
            <LandingBox className="draft-workflow-image">
              <DraftWorkflowPreview type={card.preview} />
            </LandingBox>
          </LandingCard>
        ))}
      </LandingBox>
    </LandingSection>
  );
}

export function DraftSecuritySection() {
  return (
    <LandingSection ariaLabel="보안 안내" className="security-section draft-security-lite">
      <LandingHeading as="h2" className="draft-security-title">
        사업계획서는
        <LandingText as="span" className="mobile-break">
          <LandingBreak />
        </LandingText>{" "}
        오직 사용자만의 것입니다
      </LandingHeading>
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

export function DraftFinalCtaSection({ onStart }: { onStart: StartHandler }) {
  return (
    <LandingSection className="draft-final-cta" labelledBy="draft-final-title">
      <LandingHeading as="h2" id="draft-final-title">
        <LandingText as="span" className="draft-final-title-gradient">
          작성 시간은 1/10로
          <LandingBreak />
          자금 확보 기회는 10배로
        </LandingText>
      </LandingHeading>
      <LandingText>
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
      <LandingCta dark href={startPath} onClick={onStart}>
        무료로 시작하기
      </LandingCta>
    </LandingSection>
  );
}

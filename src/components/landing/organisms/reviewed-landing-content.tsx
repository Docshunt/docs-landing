"use client";

import "../templates/reviewed-landing.css";
import { useRef, useState } from "react";

import { draftActualDocumentPages, startPath, type StartHandler } from "../data";
import { LandingBox, LandingHeading, LandingImage, LandingText } from "../design-system/atoms";
import { LandingCta, LandingMain, LandingSection } from "../design-system/molecules";
import { HeroWorkflowCarousel } from "../organisms/landing-hero";
import { DraftProofSection, DraftSecuritySection } from "../organisms/landing-draft-sections";
import { DraftMemoryDemo } from "../organisms/landing-demos";

const faqs = [
  [
    "아이디어만 있어도 시작할 수 있나요?",
    "사업 아이템이 완전히 정리되지 않아도 괜찮습니다. 누구의 어떤 문제를 해결하려는지부터 답하면, AI가 필요한 질문을 이어가며 사업계획서 초안의 뼈대를 함께 정리합니다.",
  ],
  [
    "지원사업 공고와 양식에 맞춰 작성할 수 있나요?",
    "독스헌트는 모든 HWPX·HWP 양식을 지원합니다. K-Startup과 기업마당의 공고는 모두 수집하고 있으며, 그 외 공고는 공고문과 양식을 직접 업로드해 작성할 수 있습니다. 양식 맞춤 작성과 직접 업로드는 Basic 이상에서 이용할 수 있습니다.",
  ],
  [
    "기존 사업계획서도 활용할 수 있나요?",
    "기존에 작성한 사업계획서와 사업 자료를 바탕으로 새 공고에 맞는 초안을 만들 수 있습니다. 아이템·고객·핵심 정보는 사업 메모리에 쌓여, 다음 지원사업을 준비할 때 다시 활용됩니다.",
  ],
  [
    "작성한 문서를 수정하거나 한글 파일로 받을 수 있나요?",
    "Basic 이상에서는 AI와 대화하며 문장을 수정하고, 완성한 문서를 한글(HWPX) 파일로 내보낼 수 있습니다.",
  ],
  [
    "무료 플랜에서는 어디까지 사용할 수 있나요?",
    "Free 플랜에서 기본 사업계획서 작성을 체험할 수 있습니다. 지원사업 양식 맞춤 작성, AI 문서 수정, 한글(HWPX) 내보내기 등은 Basic 이상 플랜에서 제공합니다.",
  ],
  ["만든 사업계획서가 AI 학습에 사용되나요?", "입력한 정보와 생성한 문서는 암호화해 보호하며, AI 모델 학습에 사용하지 않습니다."],
  [
    "마스터플랜은 무엇인가요?",
    "마스터플랜은 Basic·Pro·Max의 연간 구독입니다. 결제일부터 1년간 이용하며, 연간 총액을 한 번에 결제하고 매년 자동 갱신됩니다. 플랜별 제공 기능과 사용량, 실제 결제 금액은 요금제 페이지에서 확인할 수 있습니다. 연간 Pro·Max 이용자는 조건에 따라 지원사업 합격 환급을 신청할 수 있습니다.",
  ],
];

export function ReviewedFaqSection() {
  return (
    <section className="reviewed-faq" aria-labelledby="reviewed-faq-title">
      <header className="reviewed-section-copy">
        <h2 id="reviewed-faq-title">자주 묻는 질문</h2>
      </header>
      {faqs.map(([question, answer]) => (
        <details key={question}>
          <summary>{question}</summary>
          <p>{answer}</p>
        </details>
      ))}
    </section>
  );
}

export function ReviewedLandingContent({ onStart }: { onStart: StartHandler }) {
  const previewDialog = useRef<HTMLDialogElement>(null);
  const [preview, setPreview] = useState({ file: draftActualDocumentPages[2]!.src, title: "문제 인식 · 시장과 고객" });
  const showPreview = (file: string, title: string) => {
    setPreview({ file, title });
    previewDialog.current?.showModal();
  };
  return (
    <LandingMain className="draft-landing-main reviewed-main" aria-label="독스헌트 사업계획서 AI">
      <LandingSection className="hero" labelledBy="reviewed-hero-title">
        <LandingBox className="hero-copy">
          <LandingHeading as="h1" className="hero-title" id="reviewed-hero-title">
            지원사업 공고에 맞춰,
            <br />
            사업계획서를 작성하는 AI
          </LandingHeading>
          <LandingText className="hero-subtitle">
            공고를 고르고 질문에 답하면,
            <br />
            제출 양식에 맞는 사업계획서 초안이 완성됩니다.
          </LandingText>
          <LandingCta kind="cta" href={startPath} onClick={onStart}>
            무료로 시작하기
          </LandingCta>
          <p className="reviewed-hero-note">기본 사업계획서 무료 체험 · 양식 맞춤 작성은 유료 플랜</p>
          <a className="reviewed-hero-sample" href="#result-preview">
            완성 문서 먼저 보기 ↓
          </a>
        </LandingBox>
        <HeroWorkflowCarousel />
      </LandingSection>

      <section className="reviewed-proof-strip" aria-label="실제 고객의 사용 경험">
        <blockquote>
          “기존엔 2~3일 걸리던 것을
          <br className="mobile-only" /> 1시간 안에 할 수 있게 됐습니다.”
        </blockquote>
        <p>
          박중현 · 스피노자 대표 <span>개별 고객의 사용 경험입니다.</span>
        </p>
        <a href="#draft-proof-title">고객 인터뷰 보기 →</a>
      </section>

      <section className="reviewed-result" id="result-preview" aria-labelledby="reviewed-result-title">
        <header className="reviewed-section-copy">
          <h2 id="reviewed-result-title">
            대화의 결과는,
            <br />
            양식에 맞춰 정리된 사업계획서
          </h2>
          <p>
            문항별 본문부터 일정표·예산표까지.
            <br />
            초안을 검토하고 보완해 제출을 준비하세요.
          </p>
        </header>
        <div className="reviewed-document-pages">
          <figure>
            <button
              type="button"
              aria-label="문제 인식 작성 예시 크게 보기"
              onClick={() => showPreview(draftActualDocumentPages[2]!.src, "문제 인식 · 시장과 고객")}
            >
              <LandingImage
                src={draftActualDocumentPages[2]!.src}
                alt="예비창업패키지 사업계획서 문제 인식 작성 예시"
                width="1000"
                height="1414"
                loading="lazy"
              />
            </button>
            <figcaption>문제 인식 · 시장과 고객</figcaption>
          </figure>
          <figure>
            <button
              type="button"
              aria-label="사업비 계획 작성 예시 크게 보기"
              onClick={() => showPreview(draftActualDocumentPages[7]!.src, "실현 가능성 · 사업비 계획")}
            >
              <LandingImage
                src={draftActualDocumentPages[7]!.src}
                alt="예비창업패키지 사업계획서 예산표 작성 예시"
                width="1000"
                height="1414"
                loading="lazy"
              />
            </button>
            <figcaption>실현 가능성 · 사업비 계획</figcaption>
          </figure>
        </div>
        <a className="reviewed-text-link" href="/sample">
          사업계획서 샘플 더 보기 →
        </a>
        <ol className="reviewed-steps">
          <li>
            <span>01</span>
            <h3>공고와 양식 선택</h3>
            <p>K-Startup·기업마당 공고를 고르거나 공고문과 양식을 올려요.</p>
          </li>
          <li>
            <span>02</span>
            <h3>사업 정보 답변</h3>
            <p>아이템과 고객을 설명하고, 부족한 정보는 AI의 질문에 답해요.</p>
          </li>
          <li>
            <span>03</span>
            <h3>초안 검토와 내보내기</h3>
            <p>문항별 초안을 보완하고 한글(HWPX) 파일로 받아요.</p>
          </li>
        </ol>
        <p className="reviewed-plan-note">양식 맞춤 작성·AI 수정·HWPX 내보내기는 Basic 이상에서 제공됩니다.</p>
      </section>

      <DraftProofSection />

      <LandingSection className="draft-refine-section reviewed-memory" labelledBy="reviewed-memory-title">
        <header className="reviewed-section-copy">
          <h2 id="reviewed-memory-title">
            다음 지원사업엔,
            <br />
            처음부터 쓰지 마세요
          </h2>
          <p>
            아이템·고객·핵심 정보를 사업 메모리에 모아두고,
            <br />
            다른 공고의 사업계획서를 작성할 때 재활용하세요.
          </p>
        </header>
        <DraftMemoryDemo />
      </LandingSection>

      <section className="reviewed-tools" aria-labelledby="reviewed-tools-title">
        <header className="reviewed-section-copy">
          <h2 id="reviewed-tools-title">
            초안 다음의 작업도,
            <br />
            독스헌트에서 이어서
          </h2>
        </header>
        <div className="reviewed-tool-list">
          <article>
            <span>Basic 이상</span>
            <h3>시장·경쟁사 조사</h3>
            <p>사업계획서에 필요한 근거자료를 찾고, 핵심 수치와 출처를 정리합니다.</p>
          </article>
          <article>
            <span>Pro 이상</span>
            <h3>시각 자료 생성</h3>
            <p>시장 규모, 비즈니스 모델, 경쟁사 비교 등을 문서에 넣을 시각 자료로 만듭니다.</p>
          </article>
          <article>
            <span>문서 마무리</span>
            <h3>문서 스타일 정리</h3>
            <p>폰트와 제목, 줄간격을 정리해 일관된 문서 스타일로 완성합니다.</p>
          </article>
        </div>
        <a className="reviewed-text-link" href="/pricing">
          플랜별 기능과 요금 확인하기 →
        </a>
      </section>

      <DraftSecuritySection />

      <ReviewedFaqSection />

      <LandingSection className="draft-final-cta reviewed-final" labelledBy="reviewed-final-title">
        <LandingHeading as="h2" id="reviewed-final-title">
          첫 사업계획서 초안,
          <br />
          사업 아이디어부터 시작해보세요
        </LandingHeading>
        <LandingText>Free 플랜에서 기본 사업계획서 작성을 체험하세요.</LandingText>
        <LandingCta dark href={startPath} onClick={onStart}>
          무료로 시작하기
        </LandingCta>
        <p className="reviewed-plan-note">양식 맞춤 작성과 HWPX 내보내기는 Basic 이상에서 이용할 수 있습니다.</p>
      </LandingSection>
      <dialog ref={previewDialog} className="reviewed-preview-dialog" aria-labelledby="reviewed-preview-title">
        <header>
          <h2 id="reviewed-preview-title">{preview.title}</h2>
          <form method="dialog">
            <button>닫기</button>
          </form>
        </header>
        <LandingImage src={preview.file} alt={preview.title} width="1000" height="1414" />
      </dialog>
    </LandingMain>
  );
}

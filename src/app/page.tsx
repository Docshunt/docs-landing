"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";

const cdn = "https://4691947d26a9c64d254186f138cdee17.cdn.bubble.io";
const startPath = "https://app.docshunt.ai";

const desktopSlides = [
  `${cdn}/f1779247505139x590040075706677900/step1.png`,
  `${cdn}/f1779247515958x188670351445033630/step2.png`,
  `${cdn}/f1779247523364x169896416384072600/step3.png`,
];

const mobileSlides = [
  `${cdn}/f1779417818022x776531776292099600/step1%20%28mobile%29.jpg`,
  `${cdn}/f1779417810473x401404733343046140/step2%20%28mobile%29.jpg`,
  `${cdn}/f1779417801667x281332587342286270/step3%20%28mobile%29.jpg`,
];

const questionVideo = `${cdn}/f1779716417056x278852230160279800/%E1%84%83%E1%85%A9%E1%86%A8%E1%84%89%E1%85%B3%E1%84%92%E1%85%A5%E1%86%AB%E1%84%90%E1%85%B3_%E1%84%85%E1%85%A2%E1%86%AB%E1%84%83%E1%85%B5%E1%86%BC_%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC.mov`;

const interviewVideos = [
  { id: "eHCOCuoaI5M", title: "지원사업은 잘 쓰는 싸움이 아니라 많이 넣는 싸움입니다", className: "large" },
  { id: "XDzMe3WWUEo", title: "[지원사업 합격자 인터뷰] 정부 지원사업 막막하다면? 사업계획서 고퀄 초안을 만드세요", className: "small" },
  { id: "GmIQijv2EFw", title: "[지원사업 합격자 인터뷰] 사업계획서 마감 3일 전에 시작했는데, 2천만원 확보한 썰 풉니다.", className: "small" },
];

const toolColumns = [
  [
    {
      badge: "이미지",
      title: "사업계획서 특화\n시각 자료 만들기",
      image: `${cdn}/f1779246242381x214459980136810000/image.svg`,
      mobileImage: `${cdn}/f1779246280853x638980389171644200/image.svg`,
      className: "tall",
    },
    {
      badge: "도큐먼트",
      title: "텍스트 스타일을 커스텀하고\n문서 전체에 반영",
      image: `${cdn}/cdn-cgi/image/w=768,h=422,f=auto,dpr=1,fit=contain/f1776847692085x649657854299959600/detail%202.png`,
      mobileImage: `${cdn}/cdn-cgi/image/w=768,h=422,f=auto,dpr=1,fit=contain/f1776847692085x649657854299959600/detail%202.png`,
      className: "medium document",
    },
    {
      badge: "New",
      title: "우리 기업 프로필을\n사업계획서에 자동 반영",
      image: `${cdn}/cdn-cgi/image/w=768,h=454,f=auto,dpr=1,fit=contain/f1777287347359x478341661298039550/comingsoon%202.png`,
      mobileImage: `${cdn}/cdn-cgi/image/w=768,h=454,f=auto,dpr=1,fit=contain/f1777287370954x479574004118159300/comingsoon%202.png`,
      className: "medium profile",
    },
  ],
  [
    {
      badge: "레퍼런스",
      title: "시장부터 경쟁사 조사까지\n근거 자료 찾기",
      image: `${cdn}/cdn-cgi/image/w=768,h=424,f=auto,dpr=1,fit=contain/f1779247846136x366905776788948740/referenece.png`,
      mobileImage: `${cdn}/cdn-cgi/image/w=768,h=424,f=auto,dpr=1,fit=contain/f1779418938166x716383740545432000/referenece.png`,
      className: "medium reference",
    },
    {
      badge: "챗봇",
      title: "생성된 문서를\nAI 에디터와 함께 수정",
      image: `${cdn}/cdn-cgi/image/w=768,h=661,f=auto,dpr=1,fit=contain/f1777291519792x101938099518794600/detail%204.png`,
      mobileImage: `${cdn}/cdn-cgi/image/w=768,h=661,f=auto,dpr=1,fit=contain/f1777291536290x843010178838869500/detail%204.png`,
      className: "chat",
    },
    {
      badge: "Coming Soon",
      title: "우리 회사 맞춤\n지원사업 추천",
      image: `${cdn}/cdn-cgi/image/w=768,h=454,f=auto,dpr=1,fit=contain/f1777022070518x278318814260964960/comingsoon%202.png`,
      mobileImage: `${cdn}/cdn-cgi/image/w=768,h=454,f=auto,dpr=1,fit=contain/f1777022166780x631609678775776400/comingsoon%202.png`,
      className: "medium recommendation",
    },
  ],
];

function youtubeEmbedSrc(id: string) {
  return `https://www.youtube.com/embed/${id}?rel=0&enablejsapi=1`;
}

function buildAppUrl() {
  const url = new URL(startPath);
  if (typeof window === "undefined") return url.toString();
  const params = new URLSearchParams(window.location.search);
  ["atTrackId", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach(
    (key) => {
      const value = params.get(key);
      if (value) url.searchParams.set(key, value);
    },
  );
  return url.toString();
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pcDialogOpen, setPcDialogOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 1080);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("modal-open", pcDialogOpen);
    return () => document.body.classList.remove("modal-open");
  }, [pcDialogOpen]);

  const handleStart = (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    event.preventDefault();
    if (window.matchMedia("(max-width: 900px)").matches) {
      setPcDialogOpen(true);
      return;
    }
    window.location.assign(buildAppUrl());
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(buildAppUrl());
      setPcDialogOpen(false);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
    }
  };

  return (
    <div className="page landing-page" id="top">
      <header className={`site-header ${scrolled ? "scrolled" : ""}`} aria-label="독스헌트 사이트 내비게이션">
        <Link className="logo-link" href="/" aria-label="독스헌트 홈">
          <img
            className="logo"
            src={
              scrolled
                ? `${cdn}/f1777294562574x255613413900380960/DocsHunt%20logo.svg`
                : `${cdn}/f1777294458301x161224217465893980/DocsHunt%20logo%20%28white%29.svg`
            }
            alt="DocsHunt"
            width="160"
            height="25"
          />
        </Link>
        <nav className="header-nav" aria-label="주요 메뉴">
          <a className="nav-link" href="/blog_list">
            블로그
          </a>
          <a className="nav-link" href="https://docshunt.channel.io" target="_blank" rel="noreferrer">
            상담받기
          </a>
        </nav>
        <div className="header-actions">
          <button className="header-button primary" type="button" onClick={handleStart}>
            <span className="desktop-label">무료로 시작하기</span>
          </button>
          <button
            className="menu-button"
            type="button"
            aria-label="메뉴 열기"
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            onClick={(event) => {
              event.stopPropagation();
              setMobileMenuOpen((value) => !value);
            }}
          >
            <span />
          </button>
          <nav className={`mobile-menu ${mobileMenuOpen ? "is-open" : ""}`} id="mobile-menu" aria-label="모바일 메뉴">
            <a className="mobile-menu-link" href="/blog_list">
              블로그
            </a>
            <a className="mobile-menu-link" href="https://docshunt.channel.io" target="_blank" rel="noreferrer">
              상담받기
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 className="hero-title" id="hero-title">
              맞춤 공고 탐색부터<span className="mobile-break"><br /></span> 사업계획서 작성까지 한 번에
            </h1>
            <p className="hero-subtitle">독스헌트와 함께 지원사업을 쉽고 빠르게</p>
            <a className="cta-button" href={startPath} onClick={handleStart}>
              무료로 시작하기
            </a>
          </div>
          <div className="hero-carousel" aria-label="독스헌트 작성 단계 미리보기">
            <div className="hero-track">
              {desktopSlides.map((src, index) => (
                <picture className="hero-slide desktop-slide" key={src}>
                  <source media="(max-width: 819px)" srcSet={mobileSlides[index]} />
                  <img src={src} alt={`독스헌트 작성 단계 ${index + 1}`} loading={index === 0 ? "eager" : "lazy"} />
                </picture>
              ))}
              <picture className="hero-slide desktop-slide clone-slide">
                <source media="(max-width: 819px)" srcSet={mobileSlides[0]} />
                <img src={desktopSlides[0]} alt="" loading="lazy" />
              </picture>
            </div>
            <div className="carousel-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>
        </section>

        <section className="question-section" aria-labelledby="question-title">
          <h2 className="question-title" id="question-title">
            <span className="line">
              <span className="muted-word mobile-stack">내 사업을</span>
              <span>가장 잘 아는 AI가</span>
              <img className="sparkle" src={`${cdn}/f1776845521028x214359347394544640/sparkle.svg`} alt="" />
              <span className="muted-word mobile-stack">질문하고</span>
            </span>
            <span className="line">사업계획서를 완성합니다</span>
          </h2>
          <video className="question-video" src={questionVideo} autoPlay muted loop playsInline aria-label="독스헌트 AI 질문 작성 화면 미리보기" />

          <div className="feature-intro">
            <h2 className="section-title">
              사업 한 번 정리하면,<span className="mobile-break"><br /></span> 모든 지원사업 자동 완성!
            </h2>
            <p className="section-subtitle">
              아이템 정보를 모아두고,<span className="mobile-break"><br /></span> 사업계획서를 지원사업마다 더 정교하게
            </p>
          </div>

          <div className="feature-cards" id="features">
            <article className="wide-card one">
              <h3>
                내 사업과 지원사업에 맞게
                <br />
                질문/답변 자동 정리
              </h3>
              <a className="cta-button small" href={startPath} onClick={handleStart}>
                무료 체험하기
              </a>
              <img className="feature-card-image" src={`${cdn}/f1779418825793x309928339738934100/feature%201%20image%20%28mobile%29.png`} alt="" />
            </article>
            <article className="wide-card two">
              <h3>
                <span className="feature-title-desktop">
                  K-Startup, 기업마당
                  <br />전 지원사업 사업계획서 대응
                </span>
                <span className="feature-title-compact">
                  모든 지원사업
                  <br />
                  한글 양식 완벽 대응
                </span>
              </h3>
              <a className="cta-button small" href={startPath} onClick={handleStart}>
                무료 체험하기
              </a>
              <img className="feature-card-image" src={`${cdn}/f1776999533590x884101333436242700/feature%202%20image%20%28mobile%29.png`} alt="" />
            </article>
          </div>
        </section>

        <section className="tools-section" aria-labelledby="tools-title">
          <h2 className="section-title" id="tools-title">
            아이템을 더 단단하게<span className="mobile-break"><br /></span> 만드는 도구들
          </h2>
          <div className="tool-grid">
            {toolColumns.map((column, columnIndex) => (
              <div className="tool-column" key={columnIndex}>
                {column.map((tool) => (
                  <article className={`tool-card ${tool.className}`} key={tool.title}>
                    <div className="tool-card-copy">
                      <span className="badge">{tool.badge}</span>
                      <h3>
                        {tool.title.split("\n").map((line) => (
                          <span key={line}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </h3>
                    </div>
                    <picture>
                      <source media="(max-width: 1200px)" srcSet={tool.mobileImage} />
                      <img src={tool.image} alt="" />
                    </picture>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="interview-section" id="interviews" aria-labelledby="interviews-title">
          <div className="interview-heading">
            <h2 className="section-title" id="interviews-title">
              합격한 대표님들이<span className="mobile-break"><br /></span> 직접 말해요
            </h2>
            <p className="section-subtitle">
              <span className="interview-subtitle-default">
                독스헌트로 지원사업에 합격한<span className="mobile-break"><br /></span> 대표님들의 생생한 인터뷰
              </span>
              <span className="interview-subtitle-tablet">누적 사업계획서 생성 1만 건을 돌파한, 수많은 창업자가 믿고 쓰는 사업계획서 AI</span>
            </p>
          </div>
          <div className="video-grid" aria-label="독스헌트 고객 인터뷰 영상">
            {interviewVideos.map((video) => (
              <iframe
                className={`video-frame ${video.className}`}
                src={youtubeEmbedSrc(video.id)}
                title={video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                key={video.id}
              />
            ))}
          </div>
        </section>

        <section className="security-section" aria-label="보안 안내">
          <img className="security-title desktop" src={`${cdn}/f1776844878582x945609644873803800/%E1%84%89%E1%85%A1%E1%84%8B%E1%85%A5%E1%86%B8%E1%84%80%E1%85%A8%E1%84%92%E1%85%AC%E1%86%A8%E1%84%89%E1%85%A5%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%B5%E1%86%A8%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%A1%E1%84%86%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B4%20%E1%84%80%E1%85%A5%E1%86%BA%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%82%E1%85%B5%E1%84%83%E1%85%A1.svg`} alt="사업계획서는 오직 사용자만의 것입니다" />
          <div className="security-title mobile" aria-label="사업계획서는 오직 사용자만의 것입니다">
            <img src={`${cdn}/f1777010785376x718822326043463200/%E1%84%89%E1%85%A1%E1%84%8B%E1%85%A5%E1%86%B8%E1%84%80%E1%85%A8%E1%84%92%E1%85%AC%E1%86%A8%E1%84%89%E1%85%A5%E1%84%82%E1%85%B3%E1%86%AB.svg`} alt="사업계획서는" />
            <img src={`${cdn}/f1777010792042x749884594508687000/%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%B5%E1%86%A8%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%A1%E1%84%86%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B4%20%E1%84%80%E1%85%A5%E1%86%BA%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%82%E1%85%B5%E1%84%83%E1%85%A1.svg`} alt="오직 사용자만의 것입니다" />
          </div>
          <img className="security-image" src={`${cdn}/cdn-cgi/image/w=256,h=236,f=auto,dpr=2,fit=contain/f1776845008921x748258540915451600/SecurityImage.png`} alt="보안 잠금 이미지" />
          <p className="security-copy">
            <span className="desktop-only">
              사업계획서 생성 과정에서의 모든 입출력 데이터는, 전송 및 저장 시 암호화되어 안전하게 보호됩니다.
              <br />
              외부 유출 및 AI 모델 학습에 절대 이용되지 않습니다.
            </span>
            <span className="mobile-only">입력하신 모든 데이터는 전송 및 저장 시 암호화되어 안전하게 보호됩니다. 외부 유출 및 AI 모델 학습에 절대 이용되지 않습니다.</span>
          </p>
        </section>

        <img className="problem-graphic" src={`${cdn}/f1766132988372x300140942022471700/Problem%20Graphic.svg`} alt="사업계획서 작성 문제를 해결하는 독스헌트 그래픽" />

        <section className="final-cta" aria-labelledby="final-title">
          <h2 className="final-title" id="final-title">
            사업계획서에 쓰던 시간,<span className="mobile-break"><br /></span> 이제 사업에 쓰세요
          </h2>
          <p className="final-subtitle">독스헌트와 함께 지원사업을 쉽고 빠르게</p>
          <a className="cta-button dark" href={startPath} onClick={handleStart}>
            무료로 시작하기
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="company-name">주식회사 사페레아우데</div>
        <div className="footer-details desktop-details">
          <span>대표 : 김성우</span>
          <span>고객지원 : yes-reply@docshunt.ai</span>
          <span>주소 : 서울시 동작구 상도로 55길 8, 챌린지스테이션 302호</span>
          <span>사업자등록번호 : 575-86-03204 | 통신판매업신고번호 : 제 2024-서울동작-0430 호</span>
        </div>
        <div className="footer-details mobile-details mobile-only">
          <span>대표 : 김성우</span>
          <span>주소 : 서울시 동작구 상도로 55길 8, 챌린지스테이션 302호</span>
          <span>고객센터 : 0507-0177-2162</span>
          <span>이메일: documents@docshunt.ai</span>
          <span>사업자등록번호 : 575-86-03204</span>
          <span>통신판매업신고번호 : 제 2024-서울동작-0430 호</span>
        </div>
        <div className="footer-bottom">
          <a className="instagram" href="https://www.instagram.com/docshunt_official/" target="_blank" rel="noreferrer">
            <img src={`${cdn}/f1776963097199x479119601809532300/instagram.png`} alt="" />
            <span>docshunt_official</span>
          </a>
          <div className="legal-links">
            <a href="https://docshunt.ai/privacy_policy">개인정보 처리방침</a>
            <span>|</span>
            <a href="https://docshunt.ai/terms">이용약관</a>
            <span>|</span>
            <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=5758603204" target="_blank" rel="noreferrer">
              사업자 정보 확인
            </a>
          </div>
        </div>
      </footer>

      {pcDialogOpen && (
        <dialog className="pc-dialog" open>
          <form className="pc-dialog-card" method="dialog">
            <button className="dialog-close" type="button" aria-label="닫기" onClick={() => setPcDialogOpen(false)}>
              &times;
            </button>
            <h2>PC에서만 이용 가능합니다</h2>
            <p>독스헌트는 PC 환경에 최적화 되어 있습니다. 아래 버튼을 눌러 링크를 복사하고, PC에서 열어주세요.</p>
            <button className="header-button primary copy-link-button" type="button" onClick={copyLink}>
              독스헌트 PC 링크 복사하기
            </button>
            <p className="copy-status" aria-live="polite">
              {copied ? "독스헌트 PC 링크 복사됨" : ""}
            </p>
          </form>
        </dialog>
      )}
      <p className={`copy-toast ${copied ? "is-visible" : ""}`} aria-live="polite">
        독스헌트 PC 링크 복사됨
      </p>
    </div>
  );
}

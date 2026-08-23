"use client";

import type { MouseEventHandler } from "react";

import { APP_URL } from "@/seo/metadata";
import { LandingBox, LandingButton, LandingImage, LandingLink, LandingText } from "../design-system/atoms";

const assets = "/docshunt-assets";

type LandingHeaderProps = {
  mobileMenuOpen: boolean;
  onLogoClick: MouseEventHandler<HTMLAnchorElement>;
  onStart: MouseEventHandler<HTMLAnchorElement>;
  onToggleMenu: () => void;
  scrolled: boolean;
};

export function LandingHeader({ mobileMenuOpen, onLogoClick, onStart, onToggleMenu, scrolled }: LandingHeaderProps) {
  return (
    <LandingBox as="header" className={`site-header ${scrolled ? "scrolled" : ""}`} aria-label="독스헌트 사이트 내비게이션">
      <LandingLink className="logo-link" href="/" aria-label="독스헌트 홈" onClick={onLogoClick}>
        <LandingImage
          className="logo"
          src={scrolled ? `${assets}/docshunt-logo.svg` : `${assets}/docshunt-logo-white.svg`}
          alt="DocsHunt"
          width="160"
          height="25"
        />
      </LandingLink>
      <LandingBox as="nav" className="header-nav" aria-label="주요 메뉴">
        <LandingLink className="nav-link" href="/pricing">
          요금제 / 환급
        </LandingLink>
        <LandingLink className="nav-link" href="/blog_list">
          블로그
        </LandingLink>
        <LandingLink className="nav-link" href="/updates">
          업데이트
        </LandingLink>
      </LandingBox>
      <LandingBox className="header-actions">
        <LandingLink className="header-button primary" href={APP_URL} onClick={onStart}>
          <LandingText as="span" className="desktop-label">
            무료로 시작하기
          </LandingText>
        </LandingLink>
        <LandingButton
          className="menu-button"
          type="button"
          aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-controls="mobile-menu"
          aria-expanded={mobileMenuOpen}
          onClick={(event) => {
            event.stopPropagation();
            onToggleMenu();
          }}
        >
          <LandingText as="span" />
        </LandingButton>
        <LandingBox as="nav" className={`mobile-menu ${mobileMenuOpen ? "is-open" : ""}`} id="mobile-menu" aria-label="모바일 메뉴">
          <LandingLink className="mobile-menu-link" href="/pricing">
            요금제 / 환급
          </LandingLink>
          <LandingLink className="mobile-menu-link" href="/blog_list">
            블로그
          </LandingLink>
          <LandingLink className="mobile-menu-link" href="/updates">
            업데이트
          </LandingLink>
        </LandingBox>
      </LandingBox>
    </LandingBox>
  );
}

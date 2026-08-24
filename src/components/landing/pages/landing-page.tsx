"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { usePathname, useRouter } from "next/navigation";

import { LandingFooter, LandingHeader, LandingShell } from "../organisms";
import { buildAppUrl, type LandingPageClientProps } from "../data";
import { DraftLandingTemplate, LegacyLandingTemplate } from "../templates";

export function LandingPageClient({ initialDraft = false }: LandingPageClientProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [draftLanding, setDraftLanding] = useState(initialDraft);
  const logoTapCountRef = useRef(0);
  const logoTapTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.matchMedia("(max-width: 767px)").matches ? 780 : 1080;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (logoTapTimerRef.current) {
        window.clearTimeout(logoTapTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const draftQueryEnabled = new URLSearchParams(window.location.search).get("draft") === "1";
      setDraftLanding(initialDraft || pathname === "/new-landing" || draftQueryEnabled);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [initialDraft, pathname]);

  const handleStart = (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    event.preventDefault();
    window.location.assign(buildAppUrl());
  };

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (initialDraft) {
      return;
    }

    event.preventDefault();
    if (logoTapTimerRef.current) {
      window.clearTimeout(logoTapTimerRef.current);
    }

    logoTapCountRef.current += 1;
    if (logoTapCountRef.current >= 5) {
      logoTapCountRef.current = 0;
      const nextDraftLanding = !draftLanding;
      const nextPath = nextDraftLanding ? "/new-landing" : "/";
      setDraftLanding(nextDraftLanding);
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      router.push(nextPath);
      return;
    }

    logoTapTimerRef.current = window.setTimeout(() => {
      logoTapCountRef.current = 0;
    }, 1400);
  };

  return (
    <LandingShell draftLanding={draftLanding}>
      <LandingHeader
        mobileMenuOpen={mobileMenuOpen}
        onLogoClick={handleLogoClick}
        onStart={(event) => handleStart(event)}
        onToggleMenu={() => setMobileMenuOpen((value) => !value)}
        scrolled={scrolled}
      />

      {draftLanding ? <DraftLandingTemplate onStart={handleStart} /> : <LegacyLandingTemplate onStart={handleStart} />}

      <LandingFooter />
    </LandingShell>
  );
}

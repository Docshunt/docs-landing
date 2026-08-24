"use client";

import type { AnchorHTMLAttributes, HTMLAttributes, MouseEventHandler, ReactNode } from "react";

import { LandingBox, LandingHeading, LandingLink, LandingText } from "../atoms";

type LandingSectionProps = {
  children: ReactNode;
  className: string;
  id?: string;
  labelledBy?: string;
  ariaLabel?: string;
};

type LandingCopyProps = {
  children: ReactNode;
  className?: string;
  inverted?: boolean;
  narrow?: boolean;
  title: ReactNode;
  titleId?: string;
};

type LandingCtaProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className" | "href" | "onClick"> & {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  href: string;
  kind?: "cta" | "draft";
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  small?: boolean;
};

type LandingCardProps = {
  body: ReactNode;
  children: ReactNode;
  className?: string;
  title: ReactNode;
};

export function LandingSection({ ariaLabel, children, className, id, labelledBy }: LandingSectionProps) {
  return (
    <LandingBox as="section" aria-label={ariaLabel} aria-labelledby={labelledBy} className={className} id={id}>
      {children}
    </LandingBox>
  );
}

export function LandingMain({ children, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <LandingBox as="main" {...props}>
      {children}
    </LandingBox>
  );
}

export function LandingCopy({ children, className, inverted = false, narrow = false, title, titleId }: LandingCopyProps) {
  const copyClassName = ["draft-centered-copy", narrow && "narrow", inverted && "inverted", className].filter(Boolean).join(" ");

  return (
    <LandingBox className={copyClassName}>
      <LandingHeading id={titleId} as="h2">
        {title}
      </LandingHeading>
      {children}
    </LandingBox>
  );
}

export function LandingCta({ children, className, dark = false, href, kind = "draft", onClick, small = false, ...props }: LandingCtaProps) {
  const ctaClassName = [kind === "cta" ? "cta-button" : "draft-cta", dark && "dark", small && "small", className].filter(Boolean).join(" ");

  return (
    <LandingLink {...props} className={ctaClassName} href={href} onClick={onClick}>
      {children}
    </LandingLink>
  );
}

export function LandingCard({ body, children, className, title }: LandingCardProps) {
  return (
    <LandingBox as="article" className={["draft-workflow-card", className].filter(Boolean).join(" ")}>
      {children}
      <LandingHeading as="h3">{title}</LandingHeading>
      <LandingText>{body}</LandingText>
    </LandingBox>
  );
}

export function LandingMediaFrame({ children, className, ...props }: HTMLAttributes<HTMLElement> & { children: ReactNode }) {
  return (
    <LandingBox as="figure" {...props} className={className}>
      {children}
    </LandingBox>
  );
}

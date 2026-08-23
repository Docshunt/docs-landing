"use client";

import Link from "next/link";
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
  type ElementType,
  type ForwardedRef,
  type HTMLAttributes,
  type IframeHTMLAttributes,
  type ImgHTMLAttributes,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  type ReactElement,
  type ReactNode,
  type SourceHTMLAttributes,
  type VideoHTMLAttributes,
} from "react";

type LandingBoxProps<T extends ElementType = "div"> = { as?: T } & Omit<ComponentPropsWithoutRef<T>, "as">;
type LandingBoxComponent = <T extends ElementType = "div">(
  props: LandingBoxProps<T> & { ref?: ComponentPropsWithRef<T>["ref"] },
) => ReactElement | null;

function LandingBoxImpl<T extends ElementType = "div">({ as, ...props }: LandingBoxProps<T>, ref: ForwardedRef<HTMLElement>) {
  const Component = (as ?? "div") as ElementType;

  return <Component {...(props as ComponentPropsWithoutRef<ElementType>)} ref={ref} />;
}

export const LandingBox = forwardRef(LandingBoxImpl) as LandingBoxComponent;

type LandingTextProps = { as?: "p" | "span" | "strong" | "small" } & HTMLAttributes<HTMLElement>;

export function LandingText({ as = "p", ...props }: LandingTextProps) {
  const Component = as;

  return <Component {...props} />;
}

type LandingHeadingProps = { as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" } & HTMLAttributes<HTMLHeadingElement>;

export function LandingHeading({ as = "h2", ...props }: LandingHeadingProps) {
  const Component = as;

  return <Component {...props} />;
}

export function LandingImage({ alt = "", ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return <img {...props} alt={alt} />;
}

export function LandingVideo(props: VideoHTMLAttributes<HTMLVideoElement>) {
  return <video {...props} />;
}

export function LandingIframe(props: IframeHTMLAttributes<HTMLIFrameElement>) {
  return <iframe {...props} />;
}

export function LandingPicture(props: HTMLAttributes<HTMLElement>) {
  return <picture {...props} />;
}

export function LandingSource(props: SourceHTMLAttributes<HTMLSourceElement>) {
  return <source {...props} />;
}

export function LandingButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} />;
}

export function LandingInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} />;
}

export function LandingLabel(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...props} />;
}

export function LandingBreak(props: HTMLAttributes<HTMLBRElement>) {
  return <br {...props} />;
}

type LandingLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children?: ReactNode;
  href: string;
};

export function LandingLink({ children, href, ...props }: LandingLinkProps) {
  const NextLink = Link as unknown as (props: LandingLinkProps) => ReactElement;

  return (
    <NextLink {...props} href={href}>
      {children}
    </NextLink>
  );
}

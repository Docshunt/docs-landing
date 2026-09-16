"use client";

import { useEffect, useRef, useState } from "react";
import { draftActualDocumentPages } from "../data";
import styles from "./document-marquee.module.css";

export function DocumentMarquee() {
  const viewport = useRef<HTMLDivElement>(null);
  const group = useRef<HTMLDivElement>(null);
  const touching = useRef(false);
  const resumeAfter = useRef(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const element = viewport.current;
    const firstGroup = group.current;
    if (!element || !firstGroup) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let frame = 0;
    let previous = 0;
    let position = element.scrollLeft;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? false;
    });
    observer.observe(element);
    const release = () => {
      if (!touching.current) return;
      touching.current = false;
      resumeAfter.current = performance.now() + 1800;
    };
    window.addEventListener("pointerup", release);
    window.addEventListener("pointercancel", release);

    const tick = (time: number) => {
      const elapsed = previous ? Math.min(time - previous, 50) : 0;
      previous = time;
      if (visible && !document.hidden && !motion.matches && !touching.current && time >= resumeAfter.current && !hovered && !focused) {
        const width = firstGroup.offsetWidth;
        // Keep fractional pixels so slow motion is smooth across device pixel ratios.
        if (Math.abs(element.scrollLeft - position) > 2) position = element.scrollLeft;
        position += (elapsed / 1000) * (element.clientWidth < 700 ? 22 : 32);
        if (width > 0 && position >= width) position %= width;
        element.scrollLeft = position;
      } else {
        position = element.scrollLeft;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", release);
    };
  }, [hovered, focused]);

  return (
    <div className={styles.root}>
      <div
        ref={viewport}
        className={styles.viewport}
        role="region"
        aria-label="AI로 작성한 사업계획서 14페이지"
        tabIndex={0}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") setHovered(true);
        }}
        onPointerLeave={() => setHovered(false)}
        onPointerDown={() => {
          touching.current = true;
        }}
        onWheel={() => {
          resumeAfter.current = performance.now() + 1800;
        }}
        onFocus={(event) => setFocused(event.currentTarget.matches(":focus-visible"))}
        onBlur={() => setFocused(false)}
      >
        <div className={styles.track}>
          {[0, 1].map((copy) => (
            <div className={styles.group} ref={copy === 0 ? group : undefined} key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {draftActualDocumentPages.map((page, index) => (
                <img
                  className={styles.page}
                  key={page.src}
                  src={page.src}
                  alt={copy === 0 ? page.alt : ""}
                  width="1000"
                  height="1414"
                  loading={copy === 0 && index < 4 ? "eager" : "lazy"}
                  decoding="async"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

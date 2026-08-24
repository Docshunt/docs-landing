"use client";

import { useEffect, useRef, useState } from "react";

const countdownUnits = [
  { key: "days", label: "일" },
  { key: "hours", label: "시간" },
  { key: "minutes", label: "분" },
  { key: "seconds", label: "초" },
] as const;

type TimeLeft = Record<(typeof countdownUnits)[number]["key"], number>;

function getTimeLeft(endAt: string): TimeLeft {
  const diff = Math.max(0, new Date(endAt).getTime() - Date.now());
  const totalSeconds = Math.floor(diff / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

export function Countdown({ compact = false, endAt }: { compact?: boolean; endAt: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const update = () => setTimeLeft(getTimeLeft(endAt));
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, [endAt]);

  return (
    <div className={`refund-countdown ${compact ? "compact" : ""}`} aria-label="얼리버드 종료 카운트다운">
      {countdownUnits.map((unit) => (
        <div className="refund-countdown-box" key={unit.key}>
          <strong>{timeLeft[unit.key]}</strong>
          <span>{unit.label}</span>
        </div>
      ))}
    </div>
  );
}

export function LazyDemoVideo({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          void video.play();
        } else {
          video.pause();
        }
      },
      { rootMargin: "160px 0px", threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return <video ref={videoRef} src={src} title={title} preload="metadata" muted loop playsInline />;
}

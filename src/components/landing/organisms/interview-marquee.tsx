"use client";

import { draftProofCards } from "../data";
import styles from "./interview-marquee.module.css";

export function InterviewMarquee() {
  return (
    <div className={styles.root}>
      <div className={styles.viewport} role="region" aria-label="지원사업 합격자 인터뷰">
        <div className={styles.track}>
          {[0, 1].map((copy) => (
            <div className={styles.group} key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {draftProofCards.map((card) => (
                <a
                  className={styles.card}
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  key={card.href}
                  tabIndex={copy === 1 ? -1 : undefined}
                >
                  <img className={styles.image} src={card.image} alt={card.alt} loading="lazy" />
                  <div className={styles.content}>
                    <h3>{card.author}</h3>
                    <p>{card.quote}</p>
                    <span className={styles.link}>인터뷰 보기 ↗</span>
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

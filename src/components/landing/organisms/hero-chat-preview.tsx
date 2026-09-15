import styles from "./hero-chat-preview.module.css";

export function RefinedHeroChat() {
  return (
    <div className="hero-chat-preview" aria-hidden="true">
      <div className={styles.window}>
        <div className={styles.thread}>
          <p className={`${styles.message} hero-ai-stream-question-1`}>어떤 사업을 준비하고 계신가요?</p>
          <p className={`${styles.message} ${styles.answer} hero-ai-stream-reply hero-ai-stream-reply-1`}>
            작은 매장을 위한 재고 관리
            <br />
            서비스를 만들고 있어요.
          </p>
          <p className={`${styles.message} ${styles.nextQuestion} hero-ai-stream-question hero-ai-stream-question-2`}>
            고객은 어떤 점이 가장 불편한가요?
          </p>
          <p className={`${styles.message} ${styles.answer} hero-ai-stream-reply hero-ai-stream-reply-2`}>
            재고를 수기로 관리하다
            <br />
            발주 시기를 놓쳐요.
          </p>
          <p className={`${styles.message} ${styles.final} hero-ai-stream-question hero-ai-stream-final`}>
            말씀해주신 내용을
            <br className={styles.mobileBreak} /> 사업계획서 초안으로 정리할게요.
          </p>
        </div>
      </div>
    </div>
  );
}

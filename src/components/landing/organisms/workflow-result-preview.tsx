import styles from "./workflow-result-preview.module.css";

export function WorkflowResultPreview({ type }: { type: "visual" | "research" | "style" }) {
  if (type === "visual") {
    return (
      <div className={styles.preview} aria-hidden="true">
        <div className={`${styles.paper} ${styles.chart}`}>
          <div className={styles.caption}>
            시장 규모 시각화 <span>예시</span>
          </div>
          <svg viewBox="0 0 320 300" className={styles.diagram}>
            <circle cx="160" cy="150" r="140" fill="#e7efff" />
            <circle cx="160" cy="191" r="99" fill="#aacbff" />
            <circle cx="160" cy="233" r="57" fill="#3169ef" />
            <g textAnchor="middle" fontFamily="inherit" fontSize="16" fill="#375884">
              <text x="160" y="53" fontWeight="700">
                TAM
              </text>
              <text x="160" y="77">
                전체 시장
              </text>
              <text x="160" y="126" fontWeight="700">
                SAM
              </text>
              <text x="160" y="150">
                목표 시장
              </text>
              <text x="160" y="226" fontWeight="700" fill="white">
                SOM
              </text>
              <text x="160" y="251" fill="white">
                초기 진입 시장
              </text>
            </g>
          </svg>
          <p className={styles.note}>복잡한 시장 구조를 한눈에</p>
        </div>
      </div>
    );
  }

  if (type === "research") {
    return (
      <div className={`${styles.preview} ${styles.research}`} aria-hidden="true">
        <div className={styles.paper}>
          <div className={styles.caption}>
            시장 분석 <span>요약 예시</span>
          </div>
          <h4>어느 시장부터 진입할까?</h4>
          <p>
            문서 업무 자동화 수요와
            <br />
            디지털 인프라를 함께 검토
          </p>
          <div className={styles.finding}>시장 정보 → 진출 방향 정리</div>
          <div className={styles.source}>출처 · Research Nester</div>
        </div>
        <div className={styles.paper}>
          <div className={styles.caption}>
            경쟁사 분석 <span>요약 예시</span>
          </div>
          <h4>우리 서비스의 차별점은?</h4>
          <p>
            기존 문서 처리 솔루션과 비교해
            <br />
            원본 편집·양식 보존에 주목
          </p>
          <div className={styles.finding}>경쟁 환경 → 차별화 방향 정리</div>
          <div className={styles.source}>출처 · Market.us</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.preview} ${styles.comparison}`} aria-hidden="true">
      <div className={`${styles.paper} ${styles.before}`}>
        <div className={styles.caption}>정리 전</div>
        <h4>1. 사업 개요</h4>
        <p>소상공인을 위한 재고 관리 서비스</p>
        <h5>2. 목표 고객</h5>
        <p>재고와 발주를 직접 관리하는 1인 사업자</p>
      </div>
      <div className={styles.transition}>
        글꼴·제목·줄간격 일괄 적용 <span>↓</span>
      </div>
      <div className={`${styles.paper} ${styles.after}`}>
        <div className={styles.caption}>
          정리 후 <span>적용 완료 ✓</span>
        </div>
        <h4>1. 사업 개요</h4>
        <p>소상공인을 위한 재고 관리 서비스</p>
        <h5>2. 목표 고객</h5>
        <p>재고와 발주를 직접 관리하는 1인 사업자</p>
      </div>
    </div>
  );
}

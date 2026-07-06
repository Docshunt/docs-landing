import Link from "next/link";

const cdn = "https://4691947d26a9c64d254186f138cdee17.cdn.bubble.io";
const assets = "/docshunt-assets";
const startUrl = "https://app.docshunt.ai";

export function BlogHeader() {
  return (
    <header className="site-header blog-header" aria-label="독스헌트 사이트 내비게이션">
      <Link className="logo-link" href="/" aria-label="독스헌트 홈">
        <img className="logo" src={`${cdn}/f1777294562574x255613413900380960/DocsHunt%20logo.svg`} alt="DocsHunt" width="160" height="25" />
      </Link>
      <nav className="header-nav" aria-label="주요 메뉴">
        <Link className="nav-link" href="/blog_list">
          블로그
        </Link>
        <a className="nav-link" href="https://docshunt.channel.io" target="_blank" rel="noreferrer">
          상담받기
        </a>
      </nav>
      <div className="header-actions">
        <a className="header-button primary" href={startUrl}>
          무료로 시작하기
        </a>
        <button className="menu-button" type="button" aria-label="메뉴 열기">
          <span />
        </button>
      </div>
    </header>
  );
}

export function DocshuntFooter() {
  return (
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
        <a className="instagram" href="https://www.instagram.com/docshunt.ai/" target="_blank" rel="noreferrer">
          <img src={`${assets}/instagram-icon.png`} alt="" />
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
  );
}

import Link from "next/link";

import { AccessibleMobileMenu } from "@/components/accessible-mobile-menu";
import { APP_URL } from "@/seo/metadata";

const assets = "/docshunt-assets";
const siteNavLinks = [
  { href: "/pricing", label: "요금제 / 환급" },
  { href: "/blog_list", label: "블로그" },
] as const;

export function BlogHeader() {
  return (
    <header className="site-header blog-header" aria-label="독스헌트 사이트 내비게이션">
      <Link className="logo-link" href="/" aria-label="독스헌트 홈">
        <img className="logo" src={`${assets}/docshunt-logo.svg`} alt="DocsHunt" width="160" height="25" />
      </Link>
      <nav className="header-nav" aria-label="주요 메뉴">
        {siteNavLinks.map((link) => (
          <Link className="nav-link" href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <a className="header-button primary" href={APP_URL}>
          무료로 시작하기
        </a>
        <AccessibleMobileMenu className="blog-header-mobile-menu" summaryClassName="menu-button">
          <nav className="mobile-menu" aria-label="모바일 메뉴">
            {siteNavLinks.map((link) => (
              <Link className="mobile-menu-link" href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </AccessibleMobileMenu>
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
        <span>고객지원 : documents@docshunt.ai</span>
        <span>주소 : 서울시 동작구 상도로 55길 8, 창의키움관 302호</span>
        <span>사업자등록번호 : 575-86-03204 | 통신판매업신고번호 : 제 2024-서울동작-0430 호</span>
      </div>
      <div className="footer-details mobile-details mobile-only">
        <span>대표 : 김성우</span>
        <span>주소 : 서울시 동작구 상도로 55길 8, 창의키움관 302호</span>
        <span>고객센터 : 0507-0177-2162</span>
        <span>이메일: documents@docshunt.ai</span>
        <span>사업자등록번호 : 575-86-03204</span>
        <span>통신판매업신고번호 : 제 2024-서울동작-0430 호</span>
      </div>
      <div className="footer-bottom">
        <a className="instagram" href="https://www.instagram.com/docshunt.ai/" target="_blank" rel="noreferrer">
          <img src={`${assets}/instagram-icon.png`} alt="" />
          <span>docshunt.ai</span>
        </a>
        <div className="legal-links">
          <Link href="/about">작성자·회사 소개</Link>
          <span>|</span>
          <Link href="/privacy_policy">개인정보 처리방침</Link>
          <span>|</span>
          <Link href="/terms">이용약관</Link>
          <span>|</span>
          <Link href="/business_info">사업자 정보 확인</Link>
        </div>
      </div>
    </footer>
  );
}

import { LandingBox, LandingImage, LandingLink, LandingText } from "../design-system/atoms";

const assets = "/docshunt-assets";

export function LandingFooter() {
  return (
    <LandingBox as="footer" className="site-footer">
      <LandingBox className="company-name">주식회사 사페레아우데</LandingBox>
      <LandingBox className="footer-details desktop-details">
        <LandingText as="span">대표 : 김성우</LandingText>
        <LandingText as="span">고객지원 : documents@docshunt.ai</LandingText>
        <LandingText as="span">주소 : 서울시 동작구 상도로 55길 8, 창의키움관 302호</LandingText>
        <LandingText as="span">사업자등록번호 : 575-86-03204 | 통신판매업신고번호 : 제 2024-서울동작-0430 호</LandingText>
      </LandingBox>
      <LandingBox className="footer-details mobile-details mobile-only">
        <LandingText as="span">대표 : 김성우</LandingText>
        <LandingText as="span">주소 : 서울시 동작구 상도로 55길 8, 창의키움관 302호</LandingText>
        <LandingText as="span">고객센터 : 0507-0177-2162</LandingText>
        <LandingText as="span">이메일: documents@docshunt.ai</LandingText>
        <LandingText as="span">사업자등록번호 : 575-86-03204</LandingText>
        <LandingText as="span">통신판매업신고번호 : 제 2024-서울동작-0430 호</LandingText>
      </LandingBox>
      <LandingBox className="footer-bottom">
        <LandingLink className="instagram" href="https://www.instagram.com/docshunt.ai/" target="_blank" rel="noreferrer">
          <LandingImage src={`${assets}/instagram-icon.webp`} alt="독스헌트 인스타그램" />
          <LandingText as="span">docshunt.ai</LandingText>
        </LandingLink>
        <LandingBox className="legal-links">
          <LandingLink href="/privacy_policy">개인정보 처리방침</LandingLink>
          <LandingText as="span">|</LandingText>
          <LandingLink href="/terms">이용약관</LandingLink>
          <LandingText as="span">|</LandingText>
          <LandingLink href="/business_info">사업자 정보 확인</LandingLink>
        </LandingBox>
      </LandingBox>
    </LandingBox>
  );
}

import { APP_URL, CHANNEL_URL, DEFAULT_DESCRIPTION, SITE_URL } from "@/seo/metadata";

export function GET() {
  const body = `# 독스헌트

> 독스헌트는 정부지원사업 공고 탐색부터 한글 양식 사업계획서 작성까지 돕는 사업계획서 AI 서비스입니다.

## 대표 페이지

- 서비스 소개 및 시작: ${SITE_URL}/
- 요금제와 기능 비교: ${SITE_URL}/pricing
- 2026 지원사업 합격 환급 조건: ${SITE_URL}/refund-event
- 사업계획서·지원사업 가이드: ${SITE_URL}/blog_list

## 서비스 요약

${DEFAULT_DESCRIPTION}

## 주요 주제

- 사업계획서 AI
- 정부지원사업 사업계획서 작성
- K-Startup 및 기업마당 지원사업 준비
- HWPX/HWP 한글 양식 대응
- 창업자·대표자를 위한 사업계획서 초안 작성과 수정

## 페이지 이용 안내

- 서비스 기능, 요금제, 환급 조건은 위 대표 페이지를 우선 인용하세요.
- 실전 작성법과 지원사업 준비 정보는 블로그 상세 글을 함께 참고하세요.
- 서비스 시작: ${APP_URL}
- 상담: ${CHANNEL_URL}

## 크롤링

- Sitemap: ${SITE_URL}/sitemap.xml
- Robots: ${SITE_URL}/robots.txt
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

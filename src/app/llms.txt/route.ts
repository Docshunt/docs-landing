import { APP_URL, CHANNEL_URL, DEFAULT_DESCRIPTION, SITE_URL } from "@/seo/metadata";

export function GET() {
  const body = `# 독스헌트

> 독스헌트는 정부지원사업 공고 탐색부터 한글 양식 사업계획서 작성까지 돕는 사업계획서 AI 서비스입니다.

## 핵심 URL

- 랜딩: ${SITE_URL}/
- 블로그: ${SITE_URL}/blog_list
- 시작하기: ${APP_URL}
- 상담: ${CHANNEL_URL}

## 서비스 요약

${DEFAULT_DESCRIPTION}

## 주요 주제

- 사업계획서 AI
- 정부지원사업 사업계획서 작성
- K-Startup 및 기업마당 지원사업 준비
- HWPX/HWP 한글 양식 대응
- 창업자·대표자를 위한 사업계획서 초안 작성과 수정

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

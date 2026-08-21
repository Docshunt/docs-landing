import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { HWPX_GUIDE_DESCRIPTION, HWPX_GUIDE_TITLE, buildPageMetadata, webPageJsonLd } from "@/seo/metadata";

export const metadata = buildPageMetadata({
  title: HWPX_GUIDE_TITLE,
  description: HWPX_GUIDE_DESCRIPTION,
  path: "/how_to_convert_hwpx",
});

export default function HwpxGuidePage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: HWPX_GUIDE_TITLE,
          description: HWPX_GUIDE_DESCRIPTION,
          path: "/how_to_convert_hwpx",
        })}
      />
      <article className="legal-document">
        <header className="legal-title">
          <h1>HWP를 HWPX로 변환하는 방법</h1>
          <p>
            HWP 문서를 제출하거나 편집하기 전에 파일 형식을 확인하세요. 가장 안전한 방법은 원본을 보관한 뒤 변환 결과를 직접 열어 확인하는
            것입니다.
          </p>
          <p>
            <Link href="/">독스헌트 홈으로 돌아가기</Link>
          </p>
        </header>
        <section>
          <h2>1. 한글 프로그램(한컴 오피스) 사용</h2>
          <ol>
            <li>한컴오피스에서 .hwp 파일 열기.</li>
            <li>상단 메뉴에서 [파일] &gt; [다른 이름으로 저장하기]를 클릭.</li>
            <li>&apos;파일 형식&apos;을 ‘한글 표준 문서(.hwpx)’로 선택하고 저장.</li>
            <li>새롭게 저장된 파일을 업로드.</li>
          </ol>
        </section>
        <section>
          <h2>2. 온라인 변환 사이트 이용</h2>
          <p>
            (추천) 폴라리스 오피스:{" "}
            <a href="https://www.polarisofficetools.com/hwp/convert/hwpx" target="_blank" rel="noreferrer">
              https://www.polarisofficetools.com/hwp/convert/hwpx
            </a>
          </p>
        </section>
        <section>
          <h2>3. 변환 전에 확인할 점</h2>
          <ul>
            <li>변환 전 원본 .hwp 파일을 별도로 보관하세요.</li>
            <li>표, 글꼴, 이미지, 머리말과 쪽 번호가 변환 후에도 유지되는지 확인하세요.</li>
            <li>외부 온라인 도구를 이용할 때는 개인정보나 민감한 사업자료를 업로드하지 마세요.</li>
          </ul>
        </section>
        <p>
          사업계획서 작성 방법이 필요하다면 <Link href="/blog_list?category=business-plan-writing">사업계획서 작성법 아티클</Link>도 함께
          확인할 수 있습니다.
        </p>
      </article>
    </>
  );
}

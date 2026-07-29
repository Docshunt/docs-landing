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
          <h1>hwp -&gt; hwpx 변환 방법</h1>
          <p>
            <Link href="/">Back to DocsHunt</Link>
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
      </article>
    </>
  );
}

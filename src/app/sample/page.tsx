import { BlogHeader, DocshuntFooter } from "@/components/docshunt-blog-shell";
import { JsonLd } from "@/components/json-ld";
import { SAMPLE_DESCRIPTION, SAMPLE_TITLE, buildPageMetadata, webPageJsonLd } from "@/seo/metadata";

const samples = [
  {
    title: "DocsHunt AI",
    description: "Business document automation SaaS",
    href: "/docshunt-assets/samples/docshunt-ai-business-plan.pdf",
  },
  {
    title: "Airbnc",
    description: "Home-sharing platform",
    href: "/docshunt-assets/samples/airbnc-business-plan.pdf",
  },
] as const;

export const metadata = buildPageMetadata({
  title: SAMPLE_TITLE,
  description: SAMPLE_DESCRIPTION,
  path: "/sample",
});

export default function SamplePage() {
  return (
    <div className="page blog-page sample-page">
      <JsonLd data={webPageJsonLd({ name: SAMPLE_TITLE, description: SAMPLE_DESCRIPTION, path: "/sample" })} />
      <BlogHeader />
      <main className="sample-main">
        <section className="sample-section" aria-labelledby="sample-title">
          <h1 id="sample-title">Sample Business Plan</h1>
          <p className="sample-intro">독스헌트가 생성한 실제 사업계획서 예시를 확인해 보세요.</p>
          <div className="sample-grid">
            {samples.map((sample) => (
              <article className="sample-card" key={sample.href}>
                <h2>{sample.title}</h2>
                <p>{sample.description}</p>
                <a href={sample.href} target="_blank" rel="noopener noreferrer">
                  View Sample
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
      <DocshuntFooter />
    </div>
  );
}

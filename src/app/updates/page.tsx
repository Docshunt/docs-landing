import type { Metadata } from "next";

import { BlogHeader, DocshuntFooter } from "@/components/docshunt-blog-shell";
import { JsonLd } from "@/components/json-ld";
import { PRODUCT_UPDATES } from "@/data/product-updates";
import { UPDATES_DESCRIPTION, UPDATES_TITLE, absoluteUrl, buildPageMetadata, dateToIso, webPageJsonLd } from "@/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: UPDATES_TITLE,
  description: UPDATES_DESCRIPTION,
  path: "/updates",
});

const updatesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${absoluteUrl("/updates")}#product-updates`,
  name: "독스헌트 제품 업데이트",
  description: UPDATES_DESCRIPTION,
  url: absoluteUrl("/updates"),
  inLanguage: "ko-KR",
  itemListElement: PRODUCT_UPDATES.map((update, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      "@id": `${absoluteUrl("/updates")}#${update.slug}`,
      name: update.title,
      description: update.summary,
      datePublished: dateToIso(update.publishedAt),
      url: `${absoluteUrl("/updates")}#${update.slug}`,
    },
  })),
};

export default function UpdatesPage() {
  return (
    <div className="page blog-page updates-page">
      <JsonLd data={webPageJsonLd({ name: UPDATES_TITLE, description: UPDATES_DESCRIPTION, path: "/updates" })} />
      <JsonLd data={updatesJsonLd} />
      <BlogHeader />
      <main className="blog-main">
        <section className="blog-list-section updates-list" aria-labelledby="updates-list-title">
          <div className="blog-channel-layout">
            <aside className="blog-channel-sidebar">
              <h1 className="blog-list-title" id="updates-list-title">
                독스헌트 업데이트
              </h1>
            </aside>
            <div className="blog-channel-content">
              <section className="blog-channel-section" aria-labelledby="updates-feed-title">
                <div className="blog-channel-section-heading">
                  <div>
                    <h2 id="updates-feed-title">전체 업데이트</h2>
                  </div>
                </div>
                <div className="updates-feed">
                  {PRODUCT_UPDATES.map((update) => (
                    <article className="update-card" id={update.slug} key={update.slug}>
                      <div className="update-card-meta">
                        <div className="update-card-chips" aria-label="업데이트 주제">
                          {update.chips.map((chip) => (
                            <span key={chip}>{chip}</span>
                          ))}
                        </div>
                        <time dateTime={dateToIso(update.publishedAt)}>{update.publishedAt}</time>
                      </div>
                      <h3>{update.title}</h3>
                      <p>{update.summary}</p>
                      <ul>
                        {update.changes.map((change) => (
                          <li key={change}>{change}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <DocshuntFooter />
    </div>
  );
}

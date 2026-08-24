import { BlogDetailPageTemplate } from "@/components/site/templates/blog/blog-detail-template";

export { generateMetadata } from "@/components/site/templates/blog/blog-detail-template";
export { generateStaticParams } from "@/components/site/templates/blog/blog-detail-template";

export default function BlogDetailPage(props: Parameters<typeof BlogDetailPageTemplate>[0]) {
  return <BlogDetailPageTemplate {...props} />;
}

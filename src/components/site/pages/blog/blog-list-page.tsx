import { BlogListPageTemplate } from "@/components/site/templates/blog/blog-list-template";

export { generateMetadata } from "@/components/site/templates/blog/blog-list-template";

export default function BlogListPage(props: Parameters<typeof BlogListPageTemplate>[0]) {
  return <BlogListPageTemplate {...props} />;
}

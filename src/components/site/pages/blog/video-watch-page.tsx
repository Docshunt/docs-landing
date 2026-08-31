import { VideoWatchPageTemplate } from "@/components/site/templates/blog/video-watch-template";

export { generateMetadata, generateStaticParams } from "@/components/site/templates/blog/video-watch-template";

export default function VideoWatchPage(props: Parameters<typeof VideoWatchPageTemplate>[0]) {
  return <VideoWatchPageTemplate {...props} />;
}

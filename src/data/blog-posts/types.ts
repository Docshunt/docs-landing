export type BlogPost = {
  page: number;
  index: number;
  slug: string;
  sourceUrl: string;
  title: string;
  titleLines?: [string, string];
  description: string;
  author?: string;
  date: string;
  modifiedDate?: string;
  verification?: {
    date: string;
    note: string;
    sources: { label: string; url: string }[];
  };
  image: string;
  heroImage: string;
  videoEmbedUrl?: string;
  videoTitle?: string;
  paragraphs: string[];
  contentHtml?: string;
};

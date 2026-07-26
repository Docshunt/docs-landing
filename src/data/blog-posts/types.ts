export type BlogPost = {
  page: number;
  index: number;
  slug: string;
  sourceUrl: string;
  title: string;
  description: string;
  date: string;
  modifiedDate?: string;
  verification?: {
    date: string;
    note: string;
    sources: { label: string; url: string }[];
  };
  image: string;
  heroImage: string;
  paragraphs: string[];
  contentHtml?: string;
};

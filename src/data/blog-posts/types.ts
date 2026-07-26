export type BlogPost = {
  page: number;
  index: number;
  slug: string;
  sourceUrl: string;
  title: string;
  description: string;
  date: string;
  modifiedDate?: string;
  image: string;
  heroImage: string;
  paragraphs: string[];
};

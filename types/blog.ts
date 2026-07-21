export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readingTime: number;
  tags: string[];
  featured: boolean;
}

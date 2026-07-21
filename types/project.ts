export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  summary: string;
  problem: string;
  solution: string;
  results: string[];
  technologies: string[];
  status: 'Completed' | 'In Progress' | 'Archived';
  featured: boolean;
  year: number;
  repository?: string;
  liveDemo?: string;
  caseStudy?: string;
  thumbnail: string;
  gallery: string[];
}

import { BlogPost } from '@/types';

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    title: 'The Future of Local LLMs on Consumer Hardware',
    slug: 'future-local-llms',
    excerpt: 'Exploring how optimizations like GGUF and Llama.cpp are democratizing AI research and deployment.',
    date: '2025-11-12',
    readingTime: 8,
    tags: ['AI', 'LLM', 'Hardware', 'Optimization'],
    featured: true,
  },
  {
    title: 'Architecting Scalable Edge Computing Pipelines',
    slug: 'scalable-edge-computing',
    excerpt: 'A deep dive into deploying machine learning models to microcontrollers for low-latency inference.',
    date: '2025-08-24',
    readingTime: 12,
    tags: ['Edge AI', 'IoT', 'C++'],
    featured: true,
  },
  {
    title: 'From React to Next.js App Router: A Migration Story',
    slug: 'nextjs-app-router-migration',
    excerpt: 'Lessons learned while migrating a large-scale enterprise dashboard to the new Next.js architecture.',
    date: '2024-03-15',
    readingTime: 6,
    tags: ['Next.js', 'React', 'Frontend'],
    featured: false,
  },
];

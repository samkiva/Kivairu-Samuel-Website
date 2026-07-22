import { MetadataRoute } from 'next';
import { SEO_CONFIG } from '@/config/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dev/'],
    },
    sitemap: `${SEO_CONFIG.url}/sitemap.xml`,
  };
}

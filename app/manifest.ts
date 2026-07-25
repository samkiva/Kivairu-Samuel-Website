import { MetadataRoute } from 'next';
import { SEO_CONFIG } from '@/config/seo';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SEO_CONFIG.name,
    short_name: SEO_CONFIG.shortName,
    description: SEO_CONFIG.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#4F46E5',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/utils/cn';
import { SEO_CONFIG } from '@/config/seo';
import { AppProviders } from '@/components/providers/AppProviders';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: SEO_CONFIG.name,
    template: `%s | ${SEO_CONFIG.name}`,
  },
  description: SEO_CONFIG.description,
  keywords: [...SEO_CONFIG.keywords],
  authors: [
    {
      name: SEO_CONFIG.author,
      url: SEO_CONFIG.url,
    },
  ],
  creator: SEO_CONFIG.author,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SEO_CONFIG.url,
    title: SEO_CONFIG.name,
    description: SEO_CONFIG.description,
    siteName: SEO_CONFIG.name,
    images: [
      {
        url: `${SEO_CONFIG.url}/og.png`,
        width: 1200,
        height: 630,
        alt: SEO_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_CONFIG.name,
    description: SEO_CONFIG.description,
    images: [`${SEO_CONFIG.url}/og.png`],
    creator: '@yourhandle',
  },
  metadataBase: new URL(SEO_CONFIG.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background text-foreground font-sans antialiased', inter.className)}>
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}

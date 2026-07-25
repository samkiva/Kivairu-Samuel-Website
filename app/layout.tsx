import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/utils/cn';
import { SEO_CONFIG } from '@/config/seo';
import { AppProviders } from '@/components/providers/AppProviders';
import { Navbar, Footer, PageWrapper } from '@/components/layout';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: '#4F46E5',
};

export const metadata: Metadata = {
  title: {
    default: SEO_CONFIG.name,
    template: `%s | ${SEO_CONFIG.shortName}`,
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  alternates: {
    canonical: SEO_CONFIG.url,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SEO_CONFIG.url,
    title: SEO_CONFIG.name,
    description: SEO_CONFIG.description,
    siteName: SEO_CONFIG.shortName,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: SEO_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_CONFIG.name,
    description: SEO_CONFIG.description,
    images: ['/og.png'],
    creator: SEO_CONFIG.twitterHandle,
  },
  facebook: {
    appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '966242223397117',
  },
  other: {
    'fb:app_id': process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '966242223397117',
  },
  publisher: SEO_CONFIG.author,
  category: 'technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL(SEO_CONFIG.url),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SEO_CONFIG.url}/#person`,
      name: 'Kivairu Samuel',
      url: SEO_CONFIG.url,
      image: `${SEO_CONFIG.url}/profile.jpg`,
      jobTitle: 'AI Engineer & Software Developer',
      description: SEO_CONFIG.description,
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'University of Nairobi',
      },
      sameAs: [
        'https://github.com/samkiva',
        'https://www.linkedin.com/in/samuel-kivairu',
      ],
      knowsAbout: [
        'Artificial Intelligence',
        'Machine Learning',
        'Full-Stack Software Engineering',
        'Data Analysis',
        'Embedded Systems',
        'Aerospace Systems',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SEO_CONFIG.url}/#website`,
      url: SEO_CONFIG.url,
      name: SEO_CONFIG.name,
      description: SEO_CONFIG.description,
      publisher: {
        '@id': `${SEO_CONFIG.url}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn('min-h-screen bg-background text-foreground font-sans antialiased flex flex-col', inter.className)}>
        <AppProviders>
          <Navbar />
          <PageWrapper>
            {children}
          </PageWrapper>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}

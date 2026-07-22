import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/utils/cn';
import { SEO_CONFIG } from '@/config/seo';
import { AppProviders } from '@/components/providers/AppProviders';
import { Navbar, Footer, PageWrapper } from '@/components/layout';

const inter = Inter({ subsets: ['latin'] });

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
    creator: SEO_CONFIG.twitterHandle,
  },
  metadataBase: new URL(SEO_CONFIG.url),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kivairu Samuel',
  url: SEO_CONFIG.url,
  jobTitle: 'Software Developer, AI Engineer & Hardware Innovator',
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
    'Full-Stack Software Engineering',
    'Data Analysis',
    'Embedded Systems',
    'Aerospace Systems',
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
        {/* Accessibility Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:shadow-lg font-medium text-xs transition-all"
        >
          Skip to main content
        </a>

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

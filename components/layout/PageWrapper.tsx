import * as React from 'react';
import { SkipToContent, ScrollProgress, ScrollToTop } from '@/components/ui';

interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <>
      <SkipToContent />
      <ScrollProgress />
      <main id="main-content" className="flex-1 flex flex-col pt-16 min-h-screen">
        {children}
      </main>
      <ScrollToTop />
    </>
  );
};

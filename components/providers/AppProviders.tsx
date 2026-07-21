'use client';

import * as React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { ToastProvider } from './ToastProvider';
import { AnalyticsProvider } from './AnalyticsProvider';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <AnalyticsProvider>
        {children}
        <ToastProvider />
      </AnalyticsProvider>
    </ThemeProvider>
  );
}

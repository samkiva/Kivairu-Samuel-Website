// ─────────────────────────────────────────────
// lib/analytics.ts — Event tracking helper for GA4 / Vercel Analytics / Clarity
// ─────────────────────────────────────────────

export type EventName =
  | 'resume_download'
  | 'contact_submission'
  | 'project_view'
  | 'github_click'
  | 'linkedin_click'
  | 'cta_click';

export interface EventProperties {
  [key: string]: string | number | boolean | undefined;
}

type TrackFn = (...args: unknown[]) => void;

interface CustomWindow extends Window {
  gtag?: TrackFn;
  clarity?: TrackFn;
}

export const trackEvent = (eventName: EventName, properties?: EventProperties): void => {
  if (typeof window === 'undefined') return;

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics Track Event]`, eventName, properties);
  }

  const customWindow = window as unknown as CustomWindow;

  // Google Analytics 4 (gtag) dispatch if initialized
  if (typeof customWindow.gtag === 'function') {
    customWindow.gtag('event', eventName, properties);
  }

  // Microsoft Clarity dispatch if initialized
  if (typeof customWindow.clarity === 'function') {
    customWindow.clarity('event', eventName);
  }
};

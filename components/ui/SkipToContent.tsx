import * as React from 'react';
import { cn } from '@/utils/cn';

export interface SkipToContentProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  targetId?: string;
}

export const SkipToContent = React.forwardRef<HTMLAnchorElement, SkipToContentProps>(
  ({ className, targetId = 'main-content', ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={`#${targetId}`}
        className={cn(
          'absolute left-4 top-4 z-[100] -translate-y-[150%] rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-transform focus-visible:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          className
        )}
        {...props}
      >
        Skip to content
      </a>
    );
  }
);
SkipToContent.displayName = 'SkipToContent';

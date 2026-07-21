import * as React from 'react';
import { cn } from '@/utils/cn';

export interface LoadingDotsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const LoadingDots = React.memo(
  React.forwardRef<HTMLDivElement, LoadingDotsProps>(
    ({ className, ...props }, ref) => {
      return (
        <div ref={ref} className={cn('flex items-center space-x-1', className)} {...props}>
          <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]"></div>
          <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]"></div>
          <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"></div>
        </div>
      );
    }
  )
);
LoadingDots.displayName = 'LoadingDots';

import * as React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

export const LoadingSpinner = React.forwardRef<HTMLDivElement, LoadingSpinnerProps>(
  ({ className, size = 24, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('flex items-center justify-center', className)} {...props}>
        <Loader2 size={size} className="animate-spin text-muted-foreground" />
      </div>
    );
  }
);
LoadingSpinner.displayName = 'LoadingSpinner';

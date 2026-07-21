import * as React from 'react';
import { AlertTriangle } from 'lucide-react';
import { cn } from '@/utils/cn';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

export interface ErrorStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export const ErrorState = React.forwardRef<HTMLDivElement, ErrorStateProps>(
  ({ className, title = 'Something went wrong', message, onRetry, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col items-center justify-center p-8 text-center border border-red-500/20 bg-red-500/5 rounded-xl',
          className
        )}
        {...props}
      >
        <AlertTriangle className="mb-4 h-10 w-10 text-red-500" />
        <Typography variant="h4" className="text-red-500">{title}</Typography>
        {message && (
          <Typography variant="muted" className="mt-2 max-w-sm">
            {message}
          </Typography>
        )}
        {onRetry && (
          <Button variant="outline" className="mt-6 border-red-500/20 text-red-500 hover:bg-red-500/10" onClick={onRetry}>
            Try Again
          </Button>
        )}
      </div>
    );
  }
);
ErrorState.displayName = 'ErrorState';

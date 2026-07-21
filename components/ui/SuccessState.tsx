import * as React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/utils/cn';
import { Typography } from '@/components/ui/Typography';

export interface SuccessStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  message?: string;
  action?: React.ReactNode;
}

export const SuccessState = React.forwardRef<HTMLDivElement, SuccessStateProps>(
  ({ className, title = 'Success!', message, action, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col items-center justify-center p-8 text-center border border-green-500/20 bg-green-500/5 rounded-xl',
          className
        )}
        {...props}
      >
        <CheckCircle2 className="mb-4 h-10 w-10 text-green-500" />
        <Typography variant="h4" className="text-green-500">{title}</Typography>
        {message && (
          <Typography variant="muted" className="mt-2 max-w-sm">
            {message}
          </Typography>
        )}
        {action && <div className="mt-6">{action}</div>}
      </div>
    );
  }
);
SuccessState.displayName = 'SuccessState';

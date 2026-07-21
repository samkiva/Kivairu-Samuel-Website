import * as React from 'react';
import { cn } from '@/utils/cn';
import { Typography } from '@/components/ui/Typography';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, icon, title, description, action, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col items-center justify-center p-8 text-center animate-in fade-in-50',
          className
        )}
        {...props}
      >
        {icon && <div className="mb-4 text-muted-foreground">{icon}</div>}
        <Typography variant="h4">{title}</Typography>
        {description && (
          <Typography variant="muted" className="mt-2 max-w-sm">
            {description}
          </Typography>
        )}
        {action && <div className="mt-6">{action}</div>}
      </div>
    );
  }
);
EmptyState.displayName = 'EmptyState';

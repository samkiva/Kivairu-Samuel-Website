import * as React from 'react';
import { Card, CardProps } from '@/components/ui/Card';
import { cn } from '@/utils/cn';

export const GlassCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        variant="glass"
        className={cn('backdrop-blur-xl bg-background/60 border-white/10 dark:border-white/5', className)}
        {...props}
      />
    );
  }
);
GlassCard.displayName = 'GlassCard';

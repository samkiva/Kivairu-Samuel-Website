import { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { Typography } from '@/components/ui/Typography';

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const SectionHeading = forwardRef<HTMLHeadingElement, SectionHeadingProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Typography
        ref={ref}
        variant="h2"
        className={cn('mb-4 tracking-tight', className)}
        {...props}
      >
        {children}
      </Typography>
    );
  }
);

SectionHeading.displayName = 'SectionHeading';

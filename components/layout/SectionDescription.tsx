import { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { Typography } from '@/components/ui/Typography';

export interface SectionDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const SectionDescription = forwardRef<HTMLParagraphElement, SectionDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Typography
        ref={ref}
        variant="bodyLarge"
        className={cn('text-muted-foreground max-w-2xl mb-8 md:mb-12', className)}
        {...props}
      >
        {children}
      </Typography>
    );
  }
);

SectionDescription.displayName = 'SectionDescription';

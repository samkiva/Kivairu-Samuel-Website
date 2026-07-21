import { forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('py-16 md:py-24 lg:py-32 w-full', className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

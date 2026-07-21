import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const tagVariants = cva(
  'inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-medium tracking-wide transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-accent/10 text-accent border border-accent/20',
        primary: 'bg-primary/10 text-primary border border-primary/20',
        outline: 'border border-border text-foreground hover:bg-muted',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof tagVariants> {}

export function Tag({ className, variant, children, ...props }: TagProps) {
  return (
    <span className={cn(tagVariants({ variant }), className)} {...props}>
      #{children}
    </span>
  );
}

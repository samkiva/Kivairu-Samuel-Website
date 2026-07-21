import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const textareaVariants = cva(
  'flex min-h-[80px] w-full rounded-md border bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors',
  {
    variants: {
      variant: {
        default: 'border-input focus-visible:ring-ring',
        error: 'border-red-500 focus-visible:ring-red-500',
        glass: 'glass border-white/10 focus-visible:ring-white/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  error?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, error, ...props }, ref) => {
    const activeVariant = error ? 'error' : variant;

    return (
      <textarea
        className={cn(textareaVariants({ variant: activeVariant }), className)}
        ref={ref}
        aria-invalid={error ? 'true' : 'false'}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const inputVariants = cva(
  'flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors',
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

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, error, type, ...props }, ref) => {
    const activeVariant = error ? 'error' : variant;
    
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant: activeVariant }), className)}
        ref={ref}
        aria-invalid={error ? 'true' : 'false'}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

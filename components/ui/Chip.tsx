import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const chipVariants = cva(
  'inline-flex items-center justify-center rounded-md border px-3 py-1 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-muted text-muted-foreground hover:bg-muted/80 border-transparent',
        active: 'bg-primary/10 text-primary border-primary/20',
        outline: 'border-border text-foreground hover:bg-accent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface ChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {
  icon?: React.ReactNode;
}

export function Chip({ className, variant, icon, children, ...props }: ChipProps) {
  return (
    <div className={cn(chipVariants({ variant }), className)} {...props}>
      {icon && <span className="mr-2 flex items-center">{icon}</span>}
      {children}
    </div>
  );
}

import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const typographyVariants = cva('text-foreground', {
  variants: {
    variant: {
      display: 'text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter',
      h1: 'text-4xl md:text-5xl font-bold tracking-tight',
      h2: 'text-3xl md:text-4xl font-semibold tracking-tight',
      h3: 'text-2xl md:text-3xl font-semibold tracking-tight',
      h4: 'text-xl md:text-2xl font-medium tracking-tight',
      bodyLarge: 'text-lg md:text-xl',
      body: 'text-base',
      small: 'text-sm font-medium leading-none',
      caption: 'text-xs text-muted-foreground',
      muted: 'text-sm text-muted-foreground',
      gradient: 'text-gradient font-bold',
      monospace: 'font-mono text-sm',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as, children, ...props }, ref) => {
    const Component = as || defaultElementForVariant(variant);

    return (
      <Component
        ref={ref}
        className={cn(typographyVariants({ variant, className }))}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';

function defaultElementForVariant(variant: VariantProps<typeof typographyVariants>['variant']): React.ElementType {
  switch (variant) {
    case 'display':
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'bodyLarge':
    case 'body':
    case 'muted':
      return 'p';
    case 'small':
    case 'caption':
      return 'span';
    case 'gradient':
      return 'span';
    case 'monospace':
      return 'code';
    default:
      return 'p';
  }
}

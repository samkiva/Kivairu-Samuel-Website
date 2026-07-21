import * as React from 'react';
import { cn } from '@/utils/cn';
import Image from 'next/image';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt: string;
  fallbackInitials: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, fallbackInitials, size = 'md', ...props }, ref) => {
    const sizeClasses = {
      sm: 'h-8 w-8 text-xs',
      md: 'h-10 w-10 text-sm',
      lg: 'h-12 w-12 text-base',
      xl: 'h-16 w-16 text-lg',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'relative flex shrink-0 overflow-hidden rounded-full bg-muted items-center justify-center font-medium border',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="aspect-square h-full w-full object-cover"
          />
        ) : (
          <span className="text-muted-foreground">{fallbackInitials}</span>
        )}
      </div>
    );
  }
);
Avatar.displayName = 'Avatar';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { Typography } from './Typography';
import { Avatar } from './Avatar';

export type LogoProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Logo = React.forwardRef<HTMLAnchorElement, LogoProps>(
  ({ className, ...props }, ref) => {
    return (
      <Link
        href="/"
        ref={ref}
        className={cn(
          'flex items-center gap-2 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md',
          className
        )}
        {...props}
      >
        <Avatar 
          src="/profile.jpg" 
          alt="Kivairu Samuel" 
          fallbackInitials="KS" 
          size="sm" 
          className="border-primary/20 shadow-sm"
        />
        <Typography variant="h4" className="font-bold tracking-tight mb-0">
          Kivairu Samuel
        </Typography>
      </Link>
    );
  }
);
Logo.displayName = 'Logo';

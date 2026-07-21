'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { Typography } from './Typography';
import { Avatar } from './Avatar';

export type LogoProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Logo = React.forwardRef<HTMLAnchorElement, LogoProps>(
  ({ className, ...props }, ref) => {
    const [isProfileOpen, setIsProfileOpen] = React.useState(false);

    return (
      <div className="relative" onMouseLeave={() => setIsProfileOpen(false)}>
        <Link
          href="/"
          ref={ref}
          className={cn(
            'flex items-center gap-2 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md',
            className
          )}
          {...props}
        >
          <div 
            role="button"
            tabIndex={0}
            onClick={(e) => {
              e.preventDefault();
              setIsProfileOpen(!isProfileOpen);
            }}
            onMouseEnter={() => setIsProfileOpen(true)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsProfileOpen(!isProfileOpen);
              }
            }}
            className="rounded-full overflow-hidden shrink-0 transition-transform hover:scale-105"
            aria-label="View Profile Photo"
          >
            <Avatar 
              src="/profile.jpg" 
              alt="Kivairu Samuel" 
              fallbackInitials="KS" 
              size="sm" 
              className="border-primary/20 shadow-sm"
            />
          </div>
          <Typography variant="h4" className="font-bold tracking-tight mb-0">
            Kivairu Samuel
          </Typography>
        </Link>

        {/* Invisible Backdrop for mobile tapping outside */}
        <AnimatePresence>
          {isProfileOpen && (
            <div 
              className="fixed inset-0 z-40 sm:hidden" 
              onClick={() => setIsProfileOpen(false)} 
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isProfileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="absolute top-12 left-0 z-50 w-60 p-3 rounded-2xl border border-white/10 bg-background/70 backdrop-blur-xl shadow-2xl origin-top-left"
            >
              <div className="w-full aspect-square relative rounded-xl overflow-hidden shadow-inner mb-3 border border-white/5">
                <Image 
                  src="/profile.jpg" 
                  alt="Kivairu Samuel Full Profile" 
                  fill
                  className="object-cover"
                  sizes="240px"
                  priority
                />
              </div>
              <div className="px-1 text-left">
                <Typography variant="small" className="font-semibold block mb-0.5">
                  Kivairu Samuel
                </Typography>
                <Typography variant="small" className="text-muted-foreground text-[11px] block leading-tight">
                  AI Engineer & Software Developer
                </Typography>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);
Logo.displayName = 'Logo';

'use client';

import * as React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Logo, ThemeToggle } from '@/components/ui';
import { buttonVariants } from '@/components/ui/Button';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { cn } from '@/utils/cn';

export const Navbar = () => {
  const { scrollY } = useScroll();
  
  // Create a blurred, slightly transparent background as we scroll
  const background = useTransform(
    scrollY,
    [0, 50],
    ['rgba(var(--background), 0)', 'rgba(var(--background), 0.8)']
  );

  const border = useTransform(
    scrollY,
    [0, 50],
    ['1px solid rgba(var(--border), 0)', '1px solid rgba(var(--border), 0.5)']
  );

  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(12px)']
  );

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        background,
        borderBottom: border,
        backdropFilter,
        WebkitBackdropFilter: backdropFilter,
      }}
    >
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />
          <DesktopNav />
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />
          <div className="hidden md:block">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
            >
              Resume
            </a>
          </div>
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
};

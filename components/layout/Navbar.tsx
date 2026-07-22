'use client';

import * as React from 'react';
import { useScroll } from 'framer-motion';
import { Logo, ThemeToggle } from '@/components/ui';
import { buttonVariants } from '@/components/ui/Button';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { cn } from '@/utils/cn';

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-border/60 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      )}
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
    </header>
  );
};

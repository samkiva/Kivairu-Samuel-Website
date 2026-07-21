'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { MAIN_NAVIGATION } from '@/config/navigation';
import { cn } from '@/utils/cn';
import { Typography } from '@/components/ui';

export const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-6">
      {MAIN_NAVIGATION.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'relative py-1 text-sm font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm',
              isActive ? 'text-foreground' : 'text-muted-foreground'
            )}
            {...(item.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {item.title}
            {isActive && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute left-0 right-0 -bottom-1 h-[2px] bg-primary rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

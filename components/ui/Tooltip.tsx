'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export function Tooltip({ content, children, position = 'top', className }: TooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  const initialMotion = {
    top: { opacity: 0, y: 5 },
    bottom: { opacity: 0, y: -5 },
    left: { opacity: 0, x: 5 },
    right: { opacity: 0, x: -5 },
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={initialMotion[position]}
            animate={{ opacity: 1, x: position === 'left' || position === 'right' ? 0 : '-50%', y: position === 'top' || position === 'bottom' ? 0 : '-50%' }}
            exit={initialMotion[position]}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            role="tooltip"
            className={cn(
              'absolute z-50 px-2 py-1 text-xs font-medium text-primary-foreground bg-primary rounded-md whitespace-nowrap pointer-events-none shadow-sm',
              positionClasses[position],
              className
            )}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

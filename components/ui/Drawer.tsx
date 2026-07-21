'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { ANIMATION_CONFIG } from '@/config/animations';
import { X } from 'lucide-react';
import { IconButton } from './IconButton';
import { useFocusTrap } from '@/hooks/useFocusTrap';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  position?: 'left' | 'right' | 'bottom';
  children: React.ReactNode;
  className?: string;
}

export function Drawer({ isOpen, onClose, position = 'right', children, className }: DrawerProps) {
  const trapRef = useFocusTrap(isOpen);
  
  // Handle escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const slideVariants = {
    left: { initial: { x: '-100%' }, animate: { x: 0 }, exit: { x: '-100%' } },
    right: { initial: { x: '100%' }, animate: { x: 0 }, exit: { x: '100%' } },
    bottom: { initial: { y: '100%' }, animate: { y: 0 }, exit: { y: '100%' } },
  };

  const baseClasses = {
    left: 'fixed inset-y-0 left-0 h-full w-3/4 max-w-sm border-r',
    right: 'fixed inset-y-0 right-0 h-full w-3/4 max-w-sm border-l',
    bottom: 'fixed inset-x-0 bottom-0 w-full rounded-t-xl border-t h-auto max-h-[90vh]',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <motion.div
            ref={trapRef}
            initial={{ x: position === 'right' ? '100%' : position === 'left' ? '-100%' : 0, y: position === 'bottom' ? '100%' : 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            variants={slideVariants[position]}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={ANIMATION_CONFIG.transition}
            role="dialog"
            aria-modal="true"
            ref={trapRef}
            className={cn(
              'z-50 bg-background shadow-2xl flex flex-col',
              baseClasses[position],
              className
            )}
          >
            <div className="flex justify-end p-4 border-b">
              <IconButton 
                icon={<X size={20} />} 
                aria-label="Close drawer" 
                variant="ghost" 
                onClick={onClose}
              />
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

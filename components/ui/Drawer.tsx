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

  // Handle escape key and body scroll lock
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
    left:   { initial: { x: '-100%' }, animate: { x: 0 }, exit: { x: '-100%' } },
    right:  { initial: { x: '100%'  }, animate: { x: 0 }, exit: { x: '100%'  } },
    bottom: { initial: { y: '100%'  }, animate: { y: 0 }, exit: { y: '100%'  } },
  };

  const baseClasses = {
    left:   'fixed inset-y-0 left-0  h-full w-3/4 max-w-sm border-r',
    right:  'fixed inset-y-0 right-0 h-full w-3/4 max-w-sm border-l',
    bottom: 'fixed inset-x-0 bottom-0 w-full rounded-t-xl border-t h-auto max-h-[90vh]',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/*
           * FIX 1: Backdrop now uses opacity fade (initial/animate/exit) only.
           *         Previously it had x/y translation which slid it on top of the drawer panel.
           * FIX 2: ref={trapRef} removed from backdrop; it belongs only on the dialog panel below.
           * FIX 3: z-40 on backdrop, z-50 on panel — explicit stacking order.
           */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer panel — ref={trapRef} lives here and nowhere else */}
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

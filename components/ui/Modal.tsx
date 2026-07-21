'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { ANIMATION_CONFIG, FADE_IN } from '@/config/animations';
import { X } from 'lucide-react';
import { IconButton } from './IconButton';
import { useFocusTrap } from '@/hooks/useFocusTrap';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function Modal({ isOpen, onClose, title, description, children, className }: ModalProps) {
  const trapRef = useFocusTrap(isOpen);

  // Handle escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={ANIMATION_CONFIG.transition}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "modal-title" : undefined}
            ref={trapRef}
            className={cn(
              'relative z-50 w-full max-w-lg rounded-xl border bg-card p-6 shadow-xl',
              className
            )}
          >
            <div className="flex flex-col space-y-1.5 text-center sm:text-left mb-4">
              <div className="flex items-center justify-between">
                {title && <h2 id="modal-title" className="text-lg font-semibold leading-none tracking-tight">{title}</h2>}
                <IconButton 
                  icon={<X size={16} />} 
                  aria-label="Close modal" 
                  variant="ghost" 
                  size="xs"
                  className="absolute right-4 top-4"
                  onClick={onClose}
                />
              </div>
              {description && <p className="text-sm text-muted-foreground">{description}</p>}
            </div>
            
            <div className="relative">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

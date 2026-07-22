'use client';

// ─────────────────────────────────────────────────────────────────────────────
// components/ui/Drawer.tsx
//
// ROOT CAUSE FIXED (2026-07-22):
//   The Drawer previously rendered inside the <Navbar> component tree.
//   When isScrolled=true, the <header> receives backdrop-filter:blur(12px).
//   Per CSS Transforms Level 2 §2.3, backdrop-filter creates:
//     (a) a new stacking context, AND
//     (b) a new containing block for ALL position:fixed descendants.
//   This caused the Drawer's fixed panel to be composited INSIDE the Navbar's
//   blurred layer, making bg-background blend through a semi-transparent blurred
//   surface and washing out all navigation link text.
//
// FIX: ReactDOM.createPortal(…, document.body)
//   Attaches the Drawer directly to <body>, completely outside the Navbar's
//   stacking/compositing context. The Drawer now NEVER inherits:
//     • backdrop-filter   • filter   • transform
//     • opacity           • stacking context   • containing block
//   …from the Navbar, regardless of scroll position or theme.
// ─────────────────────────────────────────────────────────────────────────────

import * as React from 'react';
import { createPortal } from 'react-dom';
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

  // ── SSR guard ────────────────────────────────────────────────────────────
  // createPortal requires the DOM to exist. This component has 'use client'
  // so it never runs on the server. However, we still guard with mounted
  // state to prevent a hydration mismatch on the first client render
  // (server renders null, client renders null on paint 1, then mounts portal).
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // ── Body scroll lock + Escape key dismissal ───────────────────────────────
  // Identical behaviour to before — the portal location does not affect these.
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

  // ── Framer Motion variants ────────────────────────────────────────────────
  // Unchanged from original — animations are not affected by portal location.
  const slideVariants = {
    left:   { initial: { x: '-100%' }, animate: { x: 0 }, exit: { x: '-100%' } },
    right:  { initial: { x: '100%'  }, animate: { x: 0 }, exit: { x: '100%'  } },
    bottom: { initial: { y: '100%'  }, animate: { y: 0 }, exit: { y: '100%'  } },
  };

  // ── Positional base classes ───────────────────────────────────────────────
  const baseClasses = {
    left:   'fixed inset-y-0 left-0  h-full w-3/4 max-w-sm border-r',
    right:  'fixed inset-y-0 right-0 h-full w-3/4 max-w-sm border-l',
    bottom: 'fixed inset-x-0 bottom-0 w-full rounded-t-xl border-t h-auto max-h-[90vh]',
  };

  // Do not render until mounted — portal target (document.body) unavailable on server.
  if (!mounted) return null;

  // ── Portal render ─────────────────────────────────────────────────────────
  // Mounts directly on document.body, completely bypassing the Navbar's
  // stacking context. The Drawer is now an independent compositing layer.
  //
  // z-[200] on the container places it above:
  //   • Navbar         → z-40
  //   • ScrollProgress → z-[100]
  //   • ProjectModal   → z-50
  //   …and anything else currently in the page.
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200]">

          {/* ── Backdrop ───────────────────────────────────────────────────
           * Pure opacity fade — no translate that could cover the panel.
           * aria-hidden so screen readers skip the overlay entirely.
           * Clicking it closes the drawer.
           */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* ── Drawer panel ───────────────────────────────────────────────
           * Slides in/out from the specified side.
           * bg-background now resolves from document :root CSS variables
           * with zero interference from the Navbar's compositing layer.
           * ref={trapRef} — single binding, focus trap targets this element.
           */}
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
              'fixed bg-background shadow-2xl flex flex-col',
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
    </AnimatePresence>,
    document.body,
  );
}

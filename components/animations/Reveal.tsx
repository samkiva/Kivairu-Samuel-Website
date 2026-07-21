'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { getRevealVariants, getRevealOverlayVariants } from '@/lib/motion';

export interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  width?: 'fit-content' | '100%';
  color?: string;
}

export const Reveal = React.forwardRef<HTMLDivElement, RevealProps>(
  ({ children, delay = 0, width = 'fit-content', color = 'hsl(var(--primary))', ...props }, ref) => {
    return (
      <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }} {...props}>
        <motion.div
          variants={getRevealVariants()}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.25 }}
        >
          {children}
        </motion.div>
        <motion.div
          variants={getRevealOverlayVariants()}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeIn', delay }}
          style={{
            position: 'absolute',
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: color,
            zIndex: 20,
          }}
        />
      </div>
    );
  }
);
Reveal.displayName = 'Reveal';

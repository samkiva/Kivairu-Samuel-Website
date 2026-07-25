'use client';

import * as React from 'react';
import { motion, HTMLMotionProps, useReducedMotion } from 'framer-motion';
import { ANIMATION_CONFIG } from '@/config/animations';

export interface HoverScaleProps extends HTMLMotionProps<"div"> {
  scale?: number;
}

export const HoverScale = React.forwardRef<HTMLDivElement, HoverScaleProps>(
  ({ children, scale = ANIMATION_CONFIG.hover.scale, ...props }, ref) => {
    const shouldReduceMotion = useReducedMotion();
    const activeScale = shouldReduceMotion ? 1 : scale;
    const activeTapScale = shouldReduceMotion ? 1 : ANIMATION_CONFIG.tap.scale;

    return (
      <motion.div
        ref={ref}
        whileHover={{ scale: activeScale }}
        whileTap={{ scale: activeTapScale }}
        transition={ANIMATION_CONFIG.transition}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
HoverScale.displayName = 'HoverScale';

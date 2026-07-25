'use client';

import * as React from 'react';
import { motion, HTMLMotionProps, useReducedMotion } from 'framer-motion';
import { ANIMATION_CONFIG } from '@/config/animations';

export interface HoverLiftProps extends HTMLMotionProps<"div"> {
  yOffset?: number;
}

export const HoverLift = React.forwardRef<HTMLDivElement, HoverLiftProps>(
  ({ children, yOffset = -5, ...props }, ref) => {
    const shouldReduceMotion = useReducedMotion();
    const activeYOffset = shouldReduceMotion ? 0 : yOffset;

    return (
      <motion.div
        ref={ref}
        whileHover={{ y: activeYOffset }}
        whileTap={{ y: 0 }}
        transition={ANIMATION_CONFIG.transition}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
HoverLift.displayName = 'HoverLift';

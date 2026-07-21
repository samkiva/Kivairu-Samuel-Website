'use client';

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { ANIMATION_CONFIG } from '@/config/animations';

export interface HoverScaleProps extends HTMLMotionProps<"div"> {
  scale?: number;
}

export const HoverScale = React.forwardRef<HTMLDivElement, HoverScaleProps>(
  ({ children, scale = ANIMATION_CONFIG.hover.scale, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={{ scale }}
        whileTap={{ scale: ANIMATION_CONFIG.tap.scale }}
        transition={ANIMATION_CONFIG.transition}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
HoverScale.displayName = 'HoverScale';

'use client';

import * as React from 'react';
import { motion, HTMLMotionProps, useReducedMotion } from 'framer-motion';
import { ANIMATION_CONFIG } from '@/config/animations';
import { getSlideVariants } from '@/lib/motion';

export interface SlideLeftProps extends HTMLMotionProps<"div"> {
  delay?: number;
  xOffset?: number;
}

export const SlideLeft = React.forwardRef<HTMLDivElement, SlideLeftProps>(
  ({ children, delay = 0, xOffset = 50, ...props }, ref) => {
    const shouldReduceMotion = useReducedMotion();
    const variants = getSlideVariants(!!shouldReduceMotion, 'left', xOffset);

    return (
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ ...ANIMATION_CONFIG.transition, delay }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
SlideLeft.displayName = 'SlideLeft';

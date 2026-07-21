'use client';

import * as React from 'react';
import { motion, HTMLMotionProps, useReducedMotion } from 'framer-motion';
import { ANIMATION_CONFIG } from '@/config/animations';
import { getSlideVariants } from '@/lib/motion';

export interface SlideUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
  yOffset?: number;
}

export const SlideUp = React.forwardRef<HTMLDivElement, SlideUpProps>(
  ({ children, delay = 0, yOffset = 50, ...props }, ref) => {
    const shouldReduceMotion = useReducedMotion();
    const variants = getSlideVariants(!!shouldReduceMotion, 'up', yOffset);
    
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
SlideUp.displayName = 'SlideUp';

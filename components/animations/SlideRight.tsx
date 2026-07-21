'use client';

import * as React from 'react';
import { motion, HTMLMotionProps, useReducedMotion } from 'framer-motion';
import { ANIMATION_CONFIG } from '@/config/animations';
import { getSlideVariants } from '@/lib/motion';

export interface SlideRightProps extends HTMLMotionProps<"div"> {
  delay?: number;
  xOffset?: number;
}

export const SlideRight = React.forwardRef<HTMLDivElement, SlideRightProps>(
  ({ children, delay = 0, xOffset = -50, ...props }, ref) => {
    const shouldReduceMotion = useReducedMotion();
    const variants = getSlideVariants(!!shouldReduceMotion, 'right', xOffset);

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
SlideRight.displayName = 'SlideRight';

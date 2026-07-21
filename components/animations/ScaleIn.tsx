'use client';

import * as React from 'react';
import { motion, HTMLMotionProps, useReducedMotion } from 'framer-motion';
import { ANIMATION_CONFIG } from '@/config/animations';
import { getScaleVariants } from '@/lib/motion';

export interface ScaleInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  scale?: number;
}

export const ScaleIn = React.forwardRef<HTMLDivElement, ScaleInProps>(
  ({ children, delay = 0, scale = 0.95, ...props }, ref) => {
    const shouldReduceMotion = useReducedMotion();
    const variants = getScaleVariants(!!shouldReduceMotion, scale);

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
ScaleIn.displayName = 'ScaleIn';

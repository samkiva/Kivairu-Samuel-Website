'use client';

import * as React from 'react';
import { motion, HTMLMotionProps, useReducedMotion } from 'framer-motion';
import { ANIMATION_CONFIG } from '@/config/animations';
import { getRotateVariants } from '@/lib/motion';

export interface RotateInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  rotation?: number;
}

export const RotateIn = React.forwardRef<HTMLDivElement, RotateInProps>(
  ({ children, delay = 0, rotation = 15, ...props }, ref) => {
    const shouldReduceMotion = useReducedMotion();
    const variants = getRotateVariants(!!shouldReduceMotion, rotation);

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
RotateIn.displayName = 'RotateIn';

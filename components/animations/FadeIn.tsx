'use client';

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { ANIMATION_CONFIG } from '@/config/animations';
import { getFadeVariants } from '@/lib/motion';

export interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

export const FadeIn = React.forwardRef<HTMLDivElement, FadeInProps>(
  ({ children, delay = 0, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={getFadeVariants()}
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
FadeIn.displayName = 'FadeIn';

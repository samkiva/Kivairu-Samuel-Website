'use client';

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  staggerDelay?: number;
  delayChildren?: number;
}

export const StaggerContainer = React.forwardRef<HTMLDivElement, StaggerContainerProps>(
  ({ children, staggerDelay = 0.1, delayChildren = 0, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: staggerDelay,
              delayChildren: delayChildren,
            },
          },
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
StaggerContainer.displayName = 'StaggerContainer';

'use client';

import * as React from 'react';
import { motion, useScroll, useTransform, HTMLMotionProps } from 'framer-motion';

export interface ParallaxProps extends HTMLMotionProps<"div"> {
  offset?: number;
}

export const Parallax = React.forwardRef<HTMLDivElement, ParallaxProps>(
  ({ children, offset = 50, ...props }, ref) => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

    return (
      <motion.div ref={ref} style={{ y }} {...props}>
        {children}
      </motion.div>
    );
  }
);
Parallax.displayName = 'Parallax';

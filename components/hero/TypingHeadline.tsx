'use client';

import * as React from 'react';
import { motion, Variants, useReducedMotion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface TypingHeadlineProps {
  text: string;
  className?: string;
}

export const TypingHeadline = ({ text, className }: TypingHeadlineProps) => {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const child: Variants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: 'spring', damping: 12, stiffness: 100 },
        },
      };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className={cn(
        'max-w-2xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground flex flex-wrap gap-x-3 gap-y-2',
        className
      )}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

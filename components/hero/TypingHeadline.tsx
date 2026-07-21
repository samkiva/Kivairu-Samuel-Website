'use client';

import * as React from 'react';
import { motion, Variants } from 'framer-motion';
import { Typography } from '@/components/ui';

interface TypingHeadlineProps {
  text: string;
}

export const TypingHeadline = ({ text }: TypingHeadlineProps) => {
  // Split the headline into words for a staggered word-by-word reveal
  // We use word-by-word instead of character-by-character for better performance and a cleaner, more premium look
  const words = text.split(' ');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Typography
      variant="h1"
      as={motion.h1}
      className="max-w-2xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground flex flex-wrap gap-x-3 gap-y-2"
      // @ts-expect-error - framer-motion props
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index}>
          {word}
        </motion.span>
      ))}
    </Typography>
  );
};

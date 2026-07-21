'use client';

import * as React from 'react';
import { motion, useScroll, useAnimationControls } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { IconButton } from './IconButton';
import { getFadeVariants } from '@/lib/motion';

export const ScrollToTop = () => {
  const { scrollY } = useScroll();
  const controls = useAnimationControls();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    return scrollY.on('change', (latest) => {
      const show = latest > 500;
      if (show !== isVisible) {
        setIsVisible(show);
        if (show) {
          controls.start('animate');
        } else {
          controls.start('initial');
        }
      }
    });
  }, [scrollY, isVisible, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div
      variants={getFadeVariants()}
      initial="initial"
      animate={controls}
      className="fixed bottom-8 right-8 z-50 pointer-events-none"
    >
      <div className={isVisible ? 'pointer-events-auto' : ''}>
        <IconButton
          variant="secondary"
          size="lg"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="rounded-full shadow-lg"
          icon={<ArrowUp className="h-5 w-5" />}
        />
      </div>
    </motion.div>
  );
};

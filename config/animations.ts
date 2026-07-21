// Standardized Framer Motion animation configurations

export const ANIMATION_CONFIG = {
  transition: {
    type: 'spring',
    stiffness: 100,
    damping: 20,
    mass: 1,
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.95,
  },
} as const;

export const FADE_IN = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

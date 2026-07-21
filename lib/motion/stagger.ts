export const getStaggerVariants = (staggerChildren: number = 0.1, delayChildren: number = 0) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

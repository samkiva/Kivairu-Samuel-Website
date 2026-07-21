export const getRevealVariants = () => ({
  initial: { opacity: 0, y: 75 },
  animate: { opacity: 1, y: 0 },
});

export const getRevealOverlayVariants = () => ({
  initial: { left: 0 },
  animate: { left: '100%' },
});

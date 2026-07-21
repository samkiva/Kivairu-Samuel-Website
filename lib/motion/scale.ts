export const getScaleVariants = (shouldReduceMotion: boolean, scale: number = 0.95) => {
  if (shouldReduceMotion) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    };
  }

  return {
    initial: { opacity: 0, scale },
    animate: { opacity: 1, scale: 1 },
  };
};

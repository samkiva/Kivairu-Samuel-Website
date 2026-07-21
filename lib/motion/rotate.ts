export const getRotateVariants = (shouldReduceMotion: boolean, rotation: number = 10) => {
  if (shouldReduceMotion) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    };
  }

  return {
    initial: { opacity: 0, rotate: rotation },
    animate: { opacity: 1, rotate: 0 },
  };
};

export const getSlideVariants = (shouldReduceMotion: boolean, direction: 'up' | 'down' | 'left' | 'right', offset: number = 50) => {
  if (shouldReduceMotion) {
    return {
      initial: { opacity: 0, x: 0, y: 0 },
      animate: { opacity: 1, x: 0, y: 0 },
    };
  }

  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y';
  const sign = direction === 'left' || direction === 'up' ? 1 : -1;
  const initialOffset = offset * sign;

  return {
    initial: { opacity: 0, [axis]: initialOffset },
    animate: { opacity: 1, [axis]: 0 },
  };
};

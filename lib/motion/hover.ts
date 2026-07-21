export const getHoverVariants = (shouldReduceMotion: boolean, scale: number = 1.05, yOffset: number = -5) => ({
  hoverScale: shouldReduceMotion ? {} : { scale },
  hoverLift: shouldReduceMotion ? {} : { y: yOffset },
});

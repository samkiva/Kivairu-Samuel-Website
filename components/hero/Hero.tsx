import * as React from 'react';
import { Section, Container } from '@/components/layout';
import { HeroBackground } from '@/components/background';
import { HeroContent } from './HeroContent';
import { HeroVisual } from './HeroVisual';
import { HERO_DATA } from '@/data/hero';

export const Hero = () => {
  return (
    <Section id="hero" className="relative min-h-[90vh] flex items-center pt-20 md:pt-32 pb-16 overflow-hidden">
      <HeroBackground />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <HeroContent data={HERO_DATA} />
          
          <div className="hidden md:block">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </Section>
  );
};

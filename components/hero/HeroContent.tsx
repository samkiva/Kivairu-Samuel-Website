import * as React from 'react';
import { Typography } from '@/components/ui';
import { SlideUp, StaggerContainer } from '@/components/animations';
import { TypingHeadline } from './TypingHeadline';
import { HeroActions } from './HeroActions';
import { HeroAvailability } from './HeroAvailability';
import { HeroConfig } from '@/data/hero';

interface HeroContentProps {
  data: HeroConfig;
}

export const HeroContent = ({ data }: HeroContentProps) => {
  return (
    <StaggerContainer className="flex flex-col gap-6 md:gap-8 items-start justify-center">
      <SlideUp>
        <HeroAvailability status={data.availability} />
      </SlideUp>

      <div className="space-y-4">
        <TypingHeadline text={data.headline} />
        
        <SlideUp delay={0.5}>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm md:text-base font-medium text-primary">
            {data.roles.map((role, index) => (
              <React.Fragment key={role}>
                <span>{role}</span>
                {index < data.roles.length - 1 && (
                  <span className="text-muted-foreground/50">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </SlideUp>
      </div>

      <SlideUp delay={0.6}>
        <Typography variant="body" className="max-w-xl text-lg text-muted-foreground leading-relaxed">
          {data.description}
        </Typography>
      </SlideUp>

      <SlideUp delay={0.7} className="w-full">
        <HeroActions primary={data.cta.primary} secondary={data.cta.secondary} />
      </SlideUp>
    </StaggerContainer>
  );
};

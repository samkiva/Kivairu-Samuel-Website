import * as React from 'react';
import { SlideUp } from '@/components/animations';
import { EXPERIENCE_DATA } from '@/data/experience';
import { ExperienceCard } from './ExperienceCard';

export const ExperienceTimeline = () => {
  const experiences = EXPERIENCE_DATA.experiences;

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className="flex flex-col gap-2 mb-2">
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
          Engineering & Research Timeline
        </h3>
        <p className="text-xs md:text-sm text-muted-foreground">
          Chronological record of hardware-software integration, AI projects, and systems engineering development.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:gap-8">
        {experiences.map((item, index) => (
          <SlideUp key={item.id} delay={index * 0.1}>
            <ExperienceCard item={item} />
          </SlideUp>
        ))}
      </div>
    </div>
  );
};

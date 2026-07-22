import * as React from 'react';
import { SectionHeading, SectionDescription } from '@/components/layout';
import { SlideUp } from '@/components/animations';
import { Badge } from '@/components/ui/Badge';
import { EXPERIENCE_DATA } from '@/data/experience';

export const ExperienceHeader = () => {
  return (
    <div className="text-center mb-14 md:mb-18 flex flex-col items-center gap-3">
      <SlideUp>
        <Badge variant="outline" className="w-fit">
          {EXPERIENCE_DATA.sectionLabel}
        </Badge>
      </SlideUp>

      <SlideUp delay={0.1}>
        <SectionHeading>{EXPERIENCE_DATA.headline}</SectionHeading>
      </SlideUp>

      <SlideUp delay={0.2}>
        <SectionDescription className="max-w-2xl mx-auto">
          {EXPERIENCE_DATA.subheadline}
        </SectionDescription>
      </SlideUp>
    </div>
  );
};

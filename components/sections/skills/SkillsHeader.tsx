import * as React from 'react';
import { SectionHeading, SectionDescription } from '@/components/layout';
import { SlideUp } from '@/components/animations';
import { Badge } from '@/components/ui/Badge';
import { SKILLS_DATA } from '@/data/skills';

export const SkillsHeader = () => {
  return (
    <div className="text-center mb-14 md:mb-18 flex flex-col items-center gap-3">
      <SlideUp>
        <Badge variant="outline" className="w-fit">
          {SKILLS_DATA.sectionLabel}
        </Badge>
      </SlideUp>

      <SlideUp delay={0.1}>
        <SectionHeading>{SKILLS_DATA.headline}</SectionHeading>
      </SlideUp>

      <SlideUp delay={0.2}>
        <SectionDescription className="max-w-2xl mx-auto">
          {SKILLS_DATA.subheadline}
        </SectionDescription>
      </SlideUp>
    </div>
  );
};

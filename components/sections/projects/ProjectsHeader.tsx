import * as React from 'react';
import { SectionHeading, SectionDescription } from '@/components/layout';
import { SlideUp } from '@/components/animations';
import { Badge } from '@/components/ui/Badge';
import { PROJECTS_DATA } from '@/data/projects';

export const ProjectsHeader = () => {
  return (
    <div className="text-center mb-12 md:mb-16 flex flex-col items-center gap-3">
      <SlideUp>
        <Badge variant="outline" className="w-fit">
          {PROJECTS_DATA.sectionLabel}
        </Badge>
      </SlideUp>

      <SlideUp delay={0.1}>
        <SectionHeading>{PROJECTS_DATA.headline}</SectionHeading>
      </SlideUp>

      <SlideUp delay={0.2}>
        <SectionDescription className="max-w-2xl mx-auto">
          {PROJECTS_DATA.subheadline}
        </SectionDescription>
      </SlideUp>
    </div>
  );
};

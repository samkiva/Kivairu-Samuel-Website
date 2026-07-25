import * as React from 'react';
import { SectionHeading, SectionDescription } from '@/components/layout';
import { SlideUp } from '@/components/animations';
import { Badge } from '@/components/ui/Badge';

export const ServicesHeader = () => {
  return (
    <SlideUp className="text-center flex flex-col items-center gap-3">
      <Badge variant="outline" className="w-fit">What I Build &amp; Deliver</Badge>
      <SectionHeading id="services-heading">
        Services &amp; Technical Expertise
      </SectionHeading>
      <SectionDescription className="max-w-2xl mx-auto">
        End-to-end engineering across artificial intelligence, full-stack web platforms,
        embedded firmware, and data analytics — built to solve real problems and ship
        production-ready results.
      </SectionDescription>
    </SlideUp>
  );
};

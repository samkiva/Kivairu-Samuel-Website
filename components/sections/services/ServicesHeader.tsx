import * as React from 'react';
import { SectionHeading, SectionDescription } from '@/components/layout';
import { SlideUp } from '@/components/animations';
import { Badge } from '@/components/ui/Badge';

export const ServicesHeader = () => {
  return (
    <SlideUp className="text-center flex flex-col items-center gap-3">
      <Badge variant="outline" className="w-fit">Engineering Capabilities</Badge>
      <SectionHeading>Services & Technical Expertise</SectionHeading>
      <SectionDescription className="max-w-2xl mx-auto">
        Delivering end-to-end engineering solutions spanning artificial intelligence, full-stack web platforms, embedded firmware, and computational data analytics.
      </SectionDescription>
    </SlideUp>
  );
};

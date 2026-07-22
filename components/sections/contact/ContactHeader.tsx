import * as React from 'react';
import { SectionHeading, SectionDescription } from '@/components/layout';
import { SlideUp } from '@/components/animations';
import { Badge } from '@/components/ui/Badge';
import { CONTACT_DATA } from '@/data/contact';

export const ContactHeader = () => {
  return (
    <SlideUp className="text-center flex flex-col items-center gap-3">
      <Badge variant="outline" className="w-fit">Get In Touch</Badge>
      <SectionHeading>{CONTACT_DATA.headline}</SectionHeading>
      <SectionDescription className="max-w-2xl mx-auto">
        {CONTACT_DATA.subheadline}
      </SectionDescription>
    </SlideUp>
  );
};

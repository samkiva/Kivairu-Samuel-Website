import * as React from 'react';
import { buttonVariants } from '@/components/ui/Button';
import { SlideUp } from '@/components/animations';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

interface AboutCTAProps {
  cta: { label: string; href: string };
}

export const AboutCTA = ({ cta }: AboutCTAProps) => {
  return (
    <SlideUp className="mt-16 md:mt-20 flex flex-col items-center text-center gap-6">
      <p className="text-muted-foreground text-base max-w-md">
        Want to see how these principles come to life? Explore the projects I have built.
      </p>
      <a
        href={cta.href}
        className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'group')}
        aria-label={`Navigate to ${cta.label}`}
      >
        {cta.label}
        <ArrowRight
          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </a>
    </SlideUp>
  );
};

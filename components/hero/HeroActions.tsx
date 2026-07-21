import * as React from 'react';
import { buttonVariants } from '@/components/ui/Button';
import { ArrowRight, Download } from 'lucide-react';
import { cn } from '@/utils/cn';

interface HeroActionsProps {
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}

export const HeroActions = ({ primary, secondary }: HeroActionsProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
      <a 
        href={primary.href}
        className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'w-full sm:w-auto group')}
      >
        {primary.label}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
      <a 
        href={secondary.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'w-full sm:w-auto')}
      >
        <Download className="mr-2 h-4 w-4" />
        {secondary.label}
      </a>
    </div>
  );
};

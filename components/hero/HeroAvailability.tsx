import * as React from 'react';
import { Badge } from '@/components/ui/Badge';

interface HeroAvailabilityProps {
  status: string;
}

export const HeroAvailability = ({ status }: HeroAvailabilityProps) => {
  return (
    <div className="flex items-center gap-2">
      <Badge
        variant="default"
        className="bg-success text-success-foreground hover:bg-success/90 shadow-sm shadow-success/20 gap-2"
      >
        {/* Ping dot — relative wrapper required for absolute child */}
        <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
        </span>
        {status}
      </Badge>
    </div>
  );
};

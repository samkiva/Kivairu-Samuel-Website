import * as React from 'react';
import { Badge } from '@/components/ui/Badge';

interface HeroAvailabilityProps {
  status: string;
}

export const HeroAvailability = ({ status }: HeroAvailabilityProps) => {
  return (
    <div className="flex items-center gap-2">
      <Badge variant="default" className="bg-success text-success-foreground hover:bg-success/90 animate-pulse shadow-sm shadow-success/20">
        <span className="w-1.5 h-1.5 rounded-full bg-white mr-1.5 animate-ping" />
        <span className="w-1.5 h-1.5 rounded-full bg-white mr-1.5 absolute" />
        {status}
      </Badge>
    </div>
  );
};

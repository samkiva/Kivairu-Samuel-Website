import * as React from 'react';
import { Badge } from '@/components/ui/Badge';
import { CONTACT_DATA } from '@/data/contact';
import { CheckCircle2 } from 'lucide-react';

export const ContactTrustBadges = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5 my-6">
      {CONTACT_DATA.trustBadges.map((badge) => (
        <Badge
          key={badge}
          variant="secondary"
          className="px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 bg-surface/60 border-primary/20 text-foreground shadow-xs"
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-success" />
          <span>{badge}</span>
        </Badge>
      ))}
    </div>
  );
};

import * as React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ProjectHighlightsProps {
  highlights: string[];
}

export const ProjectHighlights = ({ highlights }: ProjectHighlightsProps) => {
  return (
    <ul className="flex flex-col gap-1.5" aria-label="Technical Highlights">
      {highlights.map((highlight) => (
        <li key={highlight} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
          <span>{highlight}</span>
        </li>
      ))}
    </ul>
  );
};

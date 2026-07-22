import * as React from 'react';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/utils/cn';

interface ProjectTechStackProps {
  technologies: string[];
  maxDisplay?: number;
  className?: string;
}

export const ProjectTechStack = ({
  technologies,
  maxDisplay,
  className,
}: ProjectTechStackProps) => {
  const displayedTechs = maxDisplay ? technologies.slice(0, maxDisplay) : technologies;
  const remainingCount = maxDisplay ? technologies.length - maxDisplay : 0;

  return (
    <div className={cn('flex flex-wrap gap-1.5 items-center', className)}>
      {displayedTechs.map((tech) => (
        <Badge
          key={tech}
          variant="outline"
          className="text-[11px] font-mono px-2 py-0.5 border-border/60 text-muted-foreground bg-muted/30"
        >
          {tech}
        </Badge>
      ))}
      {remainingCount > 0 && (
        <span className="text-[11px] font-mono text-muted-foreground/70 pl-1">
          +{remainingCount} more
        </span>
      )}
    </div>
  );
};

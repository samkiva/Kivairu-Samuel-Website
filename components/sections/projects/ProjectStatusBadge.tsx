import * as React from 'react';
import { Badge } from '@/components/ui/Badge';
import { ProjectStatus } from '@/data/projects';
import { cn } from '@/utils/cn';

interface ProjectStatusBadgeProps {
  status: ProjectStatus;
  className?: string;
}

const statusConfigMap: Record<ProjectStatus, { label: string; className: string }> = {
  Production: {
    label: 'Production',
    className: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
  },
  'Research Prototype': {
    label: 'Research Prototype',
    className: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
  },
  'Currently Building': {
    label: 'Currently Building',
    className: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
  },
  Completed: {
    label: 'Completed',
    className: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10',
  },
  'In Progress': {
    label: 'In Progress',
    className: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
  },
};

export const ProjectStatusBadge = ({ status, className }: ProjectStatusBadgeProps) => {
  const config = statusConfigMap[status] || statusConfigMap['Completed'];

  return (
    <Badge
      variant="glass"
      className={cn('text-[11px] font-medium px-2.5 py-0.5 border', config.className, className)}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 animate-pulse" aria-hidden="true" />
      {config.label}
    </Badge>
  );
};

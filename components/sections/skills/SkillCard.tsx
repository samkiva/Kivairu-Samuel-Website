import * as React from 'react';
import { GlassCard } from '@/components/ui';
import { Badge } from '@/components/ui/Badge';
import { HoverLift } from '@/components/animations';
import { SkillItem, ExperienceLevel } from '@/data/skills';
import { SkillIcon } from './SkillIcon';
import { cn } from '@/utils/cn';

interface SkillCardProps {
  skill: SkillItem;
}

const levelVariantMap: Record<ExperienceLevel, { variant: 'default' | 'secondary' | 'outline' | 'glass'; className: string }> = {
  'Currently Using': { variant: 'glass', className: 'border-primary/30 text-primary bg-primary/10' },
  'Strong Experience': { variant: 'secondary', className: 'border-border text-foreground bg-muted/60' },
  'Working Knowledge': { variant: 'outline', className: 'border-border/60 text-muted-foreground bg-transparent' },
  Learning: { variant: 'outline', className: 'border-primary/20 text-primary/80 bg-primary/5' },
};

export const SkillCard = ({ skill }: SkillCardProps) => {
  const levelStyle = levelVariantMap[skill.level] || levelVariantMap['Working Knowledge'];

  return (
    <HoverLift className="h-full">
      <GlassCard
        className={cn(
          'h-full p-5 rounded-xl flex flex-col justify-between gap-4 transition-all duration-200 border-white/5 hover:border-primary/20',
          skill.featured && 'bg-muted/20 border-primary/10'
        )}
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div
                className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0 flex items-center justify-center"
                aria-hidden="true"
              >
                <SkillIcon name={skill.icon} className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-sm tracking-tight text-foreground">
                {skill.name}
              </h4>
            </div>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {skill.description}
          </p>
        </div>

        <div className="pt-2 border-t border-border/40 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-wider font-mono text-muted-foreground/70">
            Status
          </span>
          <Badge
            variant={levelStyle.variant}
            className={cn('text-[11px] font-medium px-2 py-0.5', levelStyle.className)}
          >
            {skill.level}
          </Badge>
        </div>
      </GlassCard>
    </HoverLift>
  );
};

import * as React from 'react';
import { GlassCard } from '@/components/ui';
import { Badge } from '@/components/ui/Badge';
import { HoverLift } from '@/components/animations';
import { ExperienceItem } from '@/data/experience';
import { MapPin, Calendar, CheckCircle2, Rocket, Code2, GraduationCap } from 'lucide-react';
import { cn } from '@/utils/cn';

interface ExperienceCardProps {
  item: ExperienceItem;
}

const typeIconMap: Record<ExperienceItem['type'], React.ReactNode> = {
  'Research Initiative': <Rocket className="w-4 h-4 text-cyan-400" aria-hidden="true" />,
  'Engineering Development': <Code2 className="w-4 h-4 text-primary" aria-hidden="true" />,
  'Academic & Self-Directed': <GraduationCap className="w-4 h-4 text-emerald-400" aria-hidden="true" />,
};

export const ExperienceCard = ({ item }: ExperienceCardProps) => {
  return (
    <HoverLift className="h-full">
      <GlassCard
        className={cn(
          'h-full p-6 md:p-7 rounded-2xl flex flex-col justify-between gap-5 transition-all duration-200 border-white/5 hover:border-primary/20',
          item.featured && 'bg-muted/20 border-primary/15'
        )}
      >
        <div className="flex flex-col gap-4">
          {/* Card Header: Role & Period */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  {typeIconMap[item.type]}
                </div>
                <Badge variant="outline" className="text-[11px] font-mono border-border/60">
                  {item.type}
                </Badge>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                {item.period}
              </div>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold text-foreground tracking-tight">
                {item.role}
              </h3>
              <p className="text-sm font-semibold text-primary">
                {item.organization}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
            {item.description}
          </p>

          {/* Key Contributions */}
          <div className="flex flex-col gap-2 pt-2 border-t border-border/40">
            <span className="text-[11px] uppercase tracking-wider font-mono text-muted-foreground/70">
              Key Contributions & Outcomes
            </span>
            <ul className="flex flex-col gap-1.5 text-xs text-muted-foreground">
              {item.keyContributions.map((contribution) => (
                <li key={contribution} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Technologies & Location */}
        <div className="pt-3 border-t border-border/40 flex items-center justify-between gap-2 flex-wrap">
          <div className="flex flex-wrap gap-1.5">
            {item.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-[10px] font-mono px-2 py-0.5 border-border/60 bg-muted/30"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <span className="flex items-center gap-1 text-[11px] text-muted-foreground/80 font-mono">
            <MapPin className="w-3 h-3" aria-hidden="true" />
            {item.location}
          </span>
        </div>
      </GlassCard>
    </HoverLift>
  );
};

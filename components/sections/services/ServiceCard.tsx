import * as React from 'react';
import { GlassCard } from '@/components/ui';
import { Badge } from '@/components/ui/Badge';
import { HoverLift } from '@/components/animations';
import { ServiceItem } from '@/data/services';
import { SkillIcon } from '@/components/sections/skills/SkillIcon';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <HoverLift yOffset={-6}>
      <GlassCard className="h-full p-6 md:p-8 rounded-3xl border-white/10 dark:border-white/5 flex flex-col justify-between relative overflow-hidden group hover:border-primary/40 transition-colors">
        {/* Glow backdrop on hover */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all pointer-events-none" />

        <div className="space-y-4 relative z-10">
          {/* Header row: Icon & Featured badge */}
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
              <SkillIcon name={service.iconName} className="w-6 h-6" />
            </div>

            {service.featured && (
              <Badge variant="default" className="text-[10px] uppercase font-mono tracking-wider">
                Core Capability
              </Badge>
            )}
          </div>

          {/* Title & Description */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
              {service.title}
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/40 space-y-4 relative z-10">
          {/* Technologies badge pill list */}
          <div className="space-y-1.5">
            <span className="text-xs font-semibold text-foreground uppercase tracking-wider block">
              Key Technologies
            </span>
            <div className="flex flex-wrap gap-1.5">
              {service.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-[11px] font-normal py-0.5">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Project Scope Context */}
          <div className="bg-muted/30 p-3 rounded-xl border border-border/30">
            <span className="text-[11px] font-semibold text-primary uppercase tracking-wider block mb-1">
              Typical Project Scope
            </span>
            <p className="text-xs text-muted-foreground leading-normal">
              {service.projectScope}
            </p>
          </div>
        </div>
      </GlassCard>
    </HoverLift>
  );
};

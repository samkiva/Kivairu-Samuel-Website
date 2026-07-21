import * as React from 'react';
import { GlassCard } from '@/components/ui';
import { Badge } from '@/components/ui/Badge';
import { SlideUp, HoverLift } from '@/components/animations';
import { SKILLS_DATA } from '@/data/skills';
import { SkillIcon } from './SkillIcon';
import { Compass, Sparkles } from 'lucide-react';

export const CurrentLearning = () => {
  const { title, headline, paragraph, items } = SKILLS_DATA.currentLearning;

  return (
    <SlideUp className="mt-20 md:mt-28">
      <GlassCard className="p-8 md:p-12 rounded-3xl border-primary/20 relative overflow-hidden bg-gradient-to-b from-primary/5 via-background/60 to-background/90">
        {/* Glow Effects */}
        <div
          className="absolute -top-24 -right-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-8 relative">
          {/* Header */}
          <div className="flex flex-col gap-3 max-w-3xl">
            <div className="flex items-center gap-2">
              <Badge variant="glass" className="border-primary/30 text-primary gap-1.5 px-3 py-1">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                {title}
              </Badge>
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              {headline}
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          </div>

          {/* Research Topic Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-2">
            {items.map((item, index) => (
              <SlideUp key={item.topic} delay={index * 0.08}>
                <HoverLift className="h-full">
                  <div className="h-full p-5 rounded-2xl border border-white/10 bg-background/50 hover:bg-background/80 hover:border-primary/30 transition-all flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <div
                          className="p-2 rounded-lg bg-primary/10 text-primary shrink-0"
                          aria-hidden="true"
                        >
                          <SkillIcon name={item.icon} className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-primary/90 bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                          {item.badge}
                        </span>
                      </div>
                      <h4 className="font-semibold text-sm text-foreground tracking-tight">
                        {item.topic}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] text-primary/80 font-medium pt-2 border-t border-border/30">
                      <Compass className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Active Exploration</span>
                    </div>
                  </div>
                </HoverLift>
              </SlideUp>
            ))}
          </div>
        </div>
      </GlassCard>
    </SlideUp>
  );
};

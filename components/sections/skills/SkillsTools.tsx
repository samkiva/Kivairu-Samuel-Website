import * as React from 'react';
import { GlassCard } from '@/components/ui';
import { SlideUp, HoverLift } from '@/components/animations';
import { SKILLS_DATA } from '@/data/skills';
import { SkillIcon } from './SkillIcon';

export const SkillsTools = () => {
  const tools = SKILLS_DATA.dailyTools;

  return (
    <div className="mt-20 md:mt-28 flex flex-col gap-8">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          Tools I Use Daily
        </h3>
        <p className="text-sm text-muted-foreground">
          The essential software, IDEs, and workflow tools powering my everyday engineering process.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {tools.map((tool, index) => (
          <SlideUp key={tool.name} delay={index * 0.06}>
            <HoverLift className="h-full">
              <GlassCard className="h-full p-5 rounded-xl flex items-start gap-4 border-white/5 hover:border-primary/20 transition-all">
                <div
                  className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <SkillIcon name={tool.icon} className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-semibold text-sm text-foreground">
                      {tool.name}
                    </h4>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground/80 bg-muted/50 px-2 py-0.5 rounded border border-border/40">
                      {tool.category}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                    {tool.description}
                  </p>
                </div>
              </GlassCard>
            </HoverLift>
          </SlideUp>
        ))}
      </div>
    </div>
  );
};

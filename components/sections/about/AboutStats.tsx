import * as React from 'react';
import { FadeIn } from '@/components/animations';
import { AboutStat } from '@/data/about';

interface AboutStatsProps {
  stats: AboutStat[];
}

export const AboutStats = ({ stats }: AboutStatsProps) => {
  return (
    <div className="mt-16 md:mt-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {stats.map((stat, index) => (
          <FadeIn key={stat.label} delay={index * 0.1}>
            <div className="bg-background flex flex-col items-center justify-center py-8 px-4 text-center gap-1 hover:bg-muted/40 transition-colors">
              <span className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground leading-tight">
                {stat.label}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

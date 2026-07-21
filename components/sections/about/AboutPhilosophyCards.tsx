import * as React from 'react';
import {
  Target, Layers, BarChart3, Brain, Users, Zap
} from 'lucide-react';
import { GlassCard } from '@/components/ui';
import { HoverLift, SlideUp } from '@/components/animations';
import { AboutPhilosophy } from '@/data/about';

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
  Brain: <Brain className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
};

interface AboutPhilosophyCardsProps {
  philosophy: AboutPhilosophy[];
}

export const AboutPhilosophyCards = ({ philosophy }: AboutPhilosophyCardsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {philosophy.map((item, index) => (
        <SlideUp key={item.principle} delay={index * 0.08}>
          <HoverLift className="h-full">
            <GlassCard className="h-full p-6 rounded-2xl flex flex-col gap-4 border-white/5 hover:border-primary/20 transition-colors">
              <div className="flex items-center gap-3">
                <div
                  className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0"
                  aria-hidden="true"
                >
                  {iconMap[item.icon]}
                </div>
                <h4 className="font-semibold text-sm tracking-wide">
                  {item.principle}
                </h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </GlassCard>
          </HoverLift>
        </SlideUp>
      ))}
    </div>
  );
};

'use client';

import * as React from 'react';
import { Terminal, Network, Cpu, Database, Code2 } from 'lucide-react';
import { GlassCard } from '@/components/ui';
import { Floating, HoverLift, HoverScale } from '@/components/animations';

export const HeroVisual = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center" aria-hidden="true">
      {/* Central Network Node */}
      <Floating delay={0} yOffset={15} duration={4}>
        <HoverScale>
          <div className="relative z-20">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
            <GlassCard className="w-32 h-32 rounded-3xl flex items-center justify-center border-primary/20 bg-background/40 backdrop-blur-xl">
              <Network className="w-12 h-12 text-primary" strokeWidth={1.5} />
            </GlassCard>
          </div>
        </HoverScale>
      </Floating>

      {/* Terminal Node - Top Left */}
      <div className="absolute top-10 left-0 md:left-10 z-10">
        <Floating delay={1.5} yOffset={10} duration={5}>
          <HoverLift>
            <GlassCard className="w-48 p-4 rounded-2xl flex flex-col gap-3 border-white/10 bg-background/60 backdrop-blur-md shadow-2xl">
              <div className="flex items-center justify-between opacity-50">
                <Terminal className="w-4 h-4" />
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/80" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                  <div className="w-2 h-2 rounded-full bg-green-500/80" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-primary/20 rounded-full" />
                <div className="h-2 w-3/4 bg-primary/20 rounded-full" />
                <div className="h-2 w-1/2 bg-primary/20 rounded-full" />
              </div>
            </GlassCard>
          </HoverLift>
        </Floating>
      </div>

      {/* Performance Node - Bottom Right */}
      <div className="absolute bottom-10 right-0 md:right-10 z-30">
        <Floating delay={0.8} yOffset={12} duration={4.5}>
          <HoverLift>
            <GlassCard className="p-4 rounded-2xl flex items-center gap-4 border-primary/20 bg-background/60 backdrop-blur-md shadow-2xl">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-medium">Model Deployed</div>
                <div className="text-xs text-muted-foreground">Production-ready</div>
              </div>
            </GlassCard>
          </HoverLift>
        </Floating>
      </div>

      {/* Floating decorative icons — aria-hidden as purely decorative */}
      <div className="absolute top-1/4 right-1/4 opacity-20" aria-hidden="true">
        <Floating delay={2} yOffset={8} duration={3}>
          <Database className="w-8 h-8" />
        </Floating>
      </div>
      
      <div className="absolute bottom-1/4 left-1/4 opacity-20" aria-hidden="true">
        <Floating delay={0.5} yOffset={10} duration={6}>
          <Code2 className="w-10 h-10" />
        </Floating>
      </div>

      {/* Background connection lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full -z-10 opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="30%" y1="30%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="70%" y1="70%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>
  );
};

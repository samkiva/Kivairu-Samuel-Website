'use client';

import * as React from 'react';
import { GlassCard } from '@/components/ui';
import { Badge } from '@/components/ui/Badge';
import { HoverLift } from '@/components/animations';
import { ServiceItem } from '@/data/services';
import { SkillIcon } from '@/components/sections/skills/SkillIcon';

// Apple HIG-compliant spring: critically damped, no overshoot
const CARD_SPRING = {
  type: 'spring',
  stiffness: 120,
  damping: 26,
  mass: 1,
} as const;

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    // HoverLift receives an Apple-compliant spring override via the transition prop
    <HoverLift yOffset={-6} transition={CARD_SPRING} className="h-full">
      {/*
       * GlassCard rendered as <article> via the Card `as` prop.
       * Each service is an independent, self-contained content unit — article is correct.
       * Not a <button> or <a> because these cards are informational, not interactive.
       * The ArrowUpRight affordance has been removed to eliminate the broken click signal.
       */}
      <GlassCard
        as="article"
        aria-label={service.title}
        className="h-full p-6 md:p-8 rounded-3xl border-white/10 dark:border-white/5 flex flex-col justify-between relative overflow-hidden group hover:border-primary/40 transition-colors"
      >
        {/*
         * Glow backdrop — static blur, only opacity is animated.
         * Animating blur triggers paint-layer recalculation on every frame.
         * Animating opacity is GPU-composited and cost-free.
         */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        <div className="space-y-4 relative z-10">
          {/* Icon row + featured badge */}
          <div className="flex items-center justify-between">
            {/*
             * Icon container is purely decorative.
             * SkillIcon already sets aria-hidden="true" internally.
             */}
            <div
              className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary"
              aria-hidden="true"
            >
              <SkillIcon name={service.iconName} className="w-6 h-6" />
            </div>

            {service.featured && (
              <Badge
                variant="default"
                className="text-xs uppercase font-mono tracking-wider"
              >
                Core Capability
              </Badge>
            )}
          </div>

          {/* Title and description */}
          <div className="space-y-2">
            {/*
             * Plain h3 — no icon inside the heading.
             * Icons inside headings pollute the accessible name announced by screen readers.
             * The hover color change alone communicates engagement.
             */}
            <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>

        {/* Card footer — technologies and project scope */}
        <div className="mt-6 pt-6 border-t border-border/40 space-y-4 relative z-10">
          {/* Technology badge list */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-foreground/80 uppercase tracking-wider block">
              Key Technologies
            </span>
            <div className="flex flex-wrap gap-1.5" role="list" aria-label={`Technologies for ${service.title}`}>
              {service.technologies.map((tech) => (
                <Badge
                  key={tech}
                  role="listitem"
                  variant="secondary"
                  className="text-xs font-normal py-0.5"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Project scope context */}
          <div className="bg-muted/40 p-3 rounded-xl border border-border/50 dark:border-white/10">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-1">
              Typical Project Scope
            </span>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {service.projectScope}
            </p>
          </div>
        </div>
      </GlassCard>
    </HoverLift>
  );
};

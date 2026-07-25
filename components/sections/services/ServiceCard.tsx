'use client';

import * as React from 'react';
import { GlassCard } from '@/components/ui';
import { Badge } from '@/components/ui/Badge';
import { HoverLift } from '@/components/animations';
import { ServiceItem } from '@/data/services';
import { SkillIcon } from '@/components/sections/skills/SkillIcon';

// Apple HIG-compliant spring: critically damped, no overshoot, no bounce.
// stiffness:120 damping:26 matches Apple's motion timing principles.
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
  // Stable id derived from the service id — ties aria-labelledby to the h3.
  const headingId = `service-heading-${service.id}`;

  return (
    // HoverLift transition prop overrides ANIMATION_CONFIG.transition because
    // {...props} is spread after transition={ANIMATION_CONFIG.transition} in HoverLift.tsx.
    <HoverLift yOffset={-6} transition={CARD_SPRING} className="h-full">
      {/*
       * Rendered as <article> via Card's `as` prop.
       * Each service is a self-contained informational unit — article is semantically correct.
       * aria-labelledby points to the visible <h3> inside the article.
       * This is preferred over aria-label because it avoids announcing the title twice
       * on screen readers that read both the aria-label and the heading content.
       */}
      <GlassCard
        as="article"
        aria-labelledby={headingId}
        className="h-full p-6 md:p-8 rounded-3xl border-white/10 dark:border-white/5 flex flex-col justify-between relative overflow-hidden group hover:border-primary/40 transition-colors"
      >
        {/*
         * Glow backdrop — blur is static, only opacity animates.
         * Animating blur forces the browser to recalculate the filter on every frame
         * (paint-layer operation, not GPU-composited). Animating opacity is composited.
         */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        <div className="space-y-4 relative z-10">
          {/* Icon row + featured badge */}
          <div className="flex items-center justify-between">
            {/*
             * Decorative icon container — aria-hidden prevents double-announcement
             * since SkillIcon already sets aria-hidden="true" on the SVG.
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
             * id matches the aria-labelledby on the <article>.
             * No icon inside the heading — icons in headings pollute accessible names.
             * Color change on hover communicates engagement without a broken affordance.
             */}
            <h3
              id={headingId}
              className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors"
            >
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
            <div
              className="flex flex-wrap gap-1.5"
              role="list"
              aria-label={`Technologies for ${service.title}`}
            >
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

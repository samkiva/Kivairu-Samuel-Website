import * as React from 'react';
import { GlassCard } from '@/components/ui';
import { Badge } from '@/components/ui/Badge';
import { SlideUp, HoverLift } from '@/components/animations';
import { EXPERIENCE_DATA } from '@/data/experience';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

export const EducationCard = () => {
  const edu = EXPERIENCE_DATA.education;

  return (
    <SlideUp className="mt-16 md:mt-20">
      <div className="flex flex-col gap-4 mb-4">
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
          Education & Academic Background
        </h3>
        <p className="text-xs md:text-sm text-muted-foreground">
          Mathematical foundation in statistics, data modeling, and computational methods.
        </p>
      </div>

      <HoverLift>
        <GlassCard className="p-6 md:p-8 rounded-2xl border-primary/15 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background/60 to-background/90">
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border/50">
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-xl bg-primary/10 text-primary shrink-0 mt-1"
                  aria-hidden="true"
                >
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-xl font-bold text-foreground tracking-tight">
                      {edu.institution}
                    </h4>
                    <Badge variant="glass" className="border-emerald-500/30 text-emerald-400 bg-emerald-500/10 text-[11px]">
                      {edu.status}
                    </Badge>
                  </div>
                  <p className="text-base font-semibold text-primary">
                    {edu.degree}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                  {edu.location}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              {edu.description}
            </p>

            {/* Relevant Focus Areas */}
            <div className="flex flex-col gap-2">
              <span className="text-[11px] uppercase tracking-wider font-mono text-muted-foreground/80 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                Relevant Focus & Interdisciplinary Interests
              </span>
              <div className="flex flex-wrap gap-2">
                {edu.relevantFocus.map((focus) => (
                  <Badge
                    key={focus}
                    variant="glass"
                    className="border-primary/20 text-primary bg-primary/5 text-xs py-1 px-3"
                  >
                    {focus}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="flex flex-col gap-2 pt-2 border-t border-border/40">
              <span className="text-[11px] uppercase tracking-wider font-mono text-muted-foreground/80 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                Academic Highlights
              </span>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-muted-foreground">
                {edu.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 p-2.5 rounded-xl bg-background/50 border border-border/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GlassCard>
      </HoverLift>
    </SlideUp>
  );
};

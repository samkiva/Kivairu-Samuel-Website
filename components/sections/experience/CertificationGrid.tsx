import * as React from 'react';
import { GlassCard } from '@/components/ui';
import { Badge } from '@/components/ui/Badge';
import { SlideUp, HoverLift } from '@/components/animations';
import { EXPERIENCE_DATA } from '@/data/experience';
import { Award, Sparkles, CheckCircle2, Clock } from 'lucide-react';

export const CertificationGrid = () => {
  const { certificationsNotice, certifications } = EXPERIENCE_DATA;

  return (
    <div className="mt-16 md:mt-20 flex flex-col gap-6">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
          Professional Certifications & Coursework
        </h3>
        <p className="text-xs md:text-sm text-muted-foreground">
          Continuous technical development and specialized skill expansion.
        </p>
      </div>

      {/* Truthful Certifications Notice Banner */}
      <SlideUp>
        <GlassCard className="p-5 rounded-2xl border-primary/20 bg-primary/5 flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5" aria-hidden="true">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold text-sm text-foreground">
              {certificationsNotice.message}
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {certificationsNotice.submessage}
            </p>
          </div>
        </GlassCard>
      </SlideUp>

      {/* Certifications Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, index) => (
          <SlideUp key={cert.title} delay={index * 0.08}>
            <HoverLift className="h-full">
              <GlassCard className="h-full p-5 rounded-xl flex flex-col justify-between gap-3 border-white/5 hover:border-primary/20 transition-all">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <Award className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                    <Badge
                      variant="outline"
                      className={`text-[10px] font-mono px-2 py-0.5 ${
                        cert.status === 'Completed'
                          ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
                          : 'border-amber-500/30 text-amber-400 bg-amber-500/10'
                      }`}
                    >
                      {cert.status === 'Completed' ? (
                        <CheckCircle2 className="w-3 h-3 mr-1 inline" />
                      ) : (
                        <Clock className="w-3 h-3 mr-1 inline" />
                      )}
                      {cert.status}
                    </Badge>
                  </div>
                  <h4 className="font-semibold text-sm text-foreground tracking-tight">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {cert.issuer}
                  </p>
                </div>
                <div className="pt-2 border-t border-border/30 text-[11px] font-mono text-muted-foreground/70">
                  Year: {cert.date}
                </div>
              </GlassCard>
            </HoverLift>
          </SlideUp>
        ))}
      </div>
    </div>
  );
};

import * as React from 'react';
import Image from 'next/image';
import { SlideUp } from '@/components/animations';
import { GlassCard } from '@/components/ui';
import { Badge } from '@/components/ui/Badge';
import { AboutConfig } from '@/data/about';
import { MapPin, Calendar } from 'lucide-react';

interface AboutContentProps {
  data: AboutConfig;
}

export const AboutContent = ({ data }: AboutContentProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left — Text */}
      <div className="flex flex-col gap-6">
        <SlideUp>
          <Badge variant="outline" className="w-fit">
            {data.sectionLabel}
          </Badge>
        </SlideUp>

        <SlideUp delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            {data.headline}
          </h2>
        </SlideUp>

        <SlideUp delay={0.2}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {data.introduction}
          </p>
        </SlideUp>

        <SlideUp delay={0.3}>
          <p className="text-base text-muted-foreground leading-relaxed">
            {data.story}
          </p>
        </SlideUp>

        <SlideUp delay={0.4}>
          <GlassCard className="p-4 rounded-xl border-primary/10 flex flex-col gap-3">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">
              Current Focus
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {data.currentFocus}
            </p>
            <div className="flex items-center gap-4 mt-1 flex-wrap">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                Kenya
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                Open to Opportunities
              </span>
            </div>
          </GlassCard>
        </SlideUp>
      </div>

      {/* Right — Profile Image */}
      <SlideUp delay={0.2} className="flex justify-center lg:justify-end">
        <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 shrink-0">
          {/* Decorative ring */}
          <div
            className="absolute inset-[-12px] rounded-full border border-primary/10"
            aria-hidden="true"
          />
          <div
            className="absolute inset-[-24px] rounded-full border border-primary/5"
            aria-hidden="true"
          />
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-full bg-primary/10 blur-3xl"
            aria-hidden="true"
          />
          {/* Photo */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-primary/10 flex items-center justify-center bg-background/50">
            <Image
              src="/profile.jpg"
              alt="Kivairu Samuel — AI Engineer & Software Developer"
              fill
              className="object-cover object-center scale-[1.02]"
              sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
              priority
            />
          </div>
        </div>
      </SlideUp>
    </div>
  );
};

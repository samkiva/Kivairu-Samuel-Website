import * as React from 'react';
import { FadeIn } from '@/components/animations';
import { AboutTimelineItem } from '@/data/about';

interface AboutTimelineProps {
  timeline: AboutTimelineItem[];
}

export const AboutTimeline = ({ timeline }: AboutTimelineProps) => {
  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Vertical line */}
      <div
        className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-px"
        aria-hidden="true"
      />

      <ol className="flex flex-col gap-0" aria-label="Professional journey timeline">
        {timeline.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <li key={item.title} className="relative flex items-start sm:grid sm:grid-cols-2 sm:gap-8 pb-10 last:pb-0">
              <FadeIn delay={index * 0.1}>
                {/* Left side (desktop: even items) */}
                <div
                  className={`
                    hidden sm:flex flex-col gap-1 pt-1
                    ${isLeft ? 'text-right pr-8' : 'sm:col-start-2 pl-8'}
                  `}
                  style={!isLeft ? { display: 'none' } : undefined}
                >
                  {isLeft && (
                    <>
                      <span className="text-xs font-bold text-primary tracking-widest uppercase">
                        {item.year}
                      </span>
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </>
                  )}
                </div>

                {/* Center dot — positioned on the line */}
                <div
                  className="absolute left-[15px] sm:left-1/2 sm:-translate-x-1/2 mt-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background shrink-0"
                  aria-hidden="true"
                />

                {/* Right side (desktop: odd items) | Mobile: always shown offset */}
                <div
                  className={`
                    pl-10 sm:pl-8 flex flex-col gap-1 pt-1
                    ${isLeft ? 'sm:hidden' : 'sm:block'}
                  `}
                >
                  <span className="text-xs font-bold text-primary tracking-widest uppercase">
                    {item.year}
                  </span>
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

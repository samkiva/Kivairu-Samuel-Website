import * as React from 'react';
import { SlideUp } from '@/components/animations';
import { GlassCard } from '@/components/ui';
import { Quote } from 'lucide-react';

interface AboutQuoteProps {
  quote: string;
  author: string;
}

export const AboutQuote = ({ quote, author }: AboutQuoteProps) => {
  return (
    <SlideUp className="mt-20 md:mt-28">
      <GlassCard className="p-8 md:p-12 rounded-3xl border-primary/10 relative overflow-hidden">
        {/* Decorative large quote mark */}
        <div
          className="absolute top-6 right-8 text-primary/5 pointer-events-none select-none"
          aria-hidden="true"
        >
          <Quote className="w-24 h-24 fill-current" />
        </div>

        <div className="relative flex flex-col gap-6 max-w-3xl">
          <Quote
            className="w-8 h-8 text-primary shrink-0"
            aria-hidden="true"
          />
          <blockquote>
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground">
              {quote}
            </p>
          </blockquote>
          <footer className="flex items-center gap-3">
            <div className="w-8 h-px bg-primary" aria-hidden="true" />
            <cite className="text-sm font-semibold text-primary not-italic">
              {author}
            </cite>
          </footer>
        </div>
      </GlassCard>
    </SlideUp>
  );
};

import * as React from 'react';
import { GlassCard } from '@/components/ui';
import { Badge } from '@/components/ui/Badge';
import { buttonVariants } from '@/components/ui/Button';
import { SlideUp } from '@/components/animations';
import { EXPERIENCE_DATA } from '@/data/experience';
import { Download, FileText, ArrowUpRight, CheckCircle } from 'lucide-react';
import { cn } from '@/utils/cn';

export const ResumeCTA = () => {
  const { title, subtitle, statusLabel, resumePdfUrl, availableFor } = EXPERIENCE_DATA.resumeCta;

  return (
    <SlideUp className="mt-20 md:mt-28">
      <GlassCard className="p-8 md:p-12 rounded-3xl border-primary/20 relative overflow-hidden bg-gradient-to-r from-primary/10 via-background/80 to-accent/10">
        {/* Glow decoration */}
        <div
          className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
          {/* Left Text */}
          <div className="flex flex-col gap-4 max-w-xl">
            <div className="flex items-center gap-2">
              <Badge variant="glass" className="border-emerald-500/30 text-emerald-400 bg-emerald-500/10 px-3 py-1 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" aria-hidden="true" />
                {statusLabel}
              </Badge>
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              {title}
            </h3>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {subtitle}
            </p>

            {/* Available For Capabilities */}
            <div className="flex flex-col gap-2 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground/80">
                Available for:
              </span>
              <div className="flex flex-wrap gap-2">
                {availableFor.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg bg-background/80 border border-border/50 text-foreground"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
            <a
              href={resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'gap-2 group shadow-lg shadow-primary/20')}
              aria-label="Download Kivairu Samuel's Resume PDF"
            >
              <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              Download Resume (PDF)
            </a>

            <a
              href="#contact"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'gap-2 group')}
            >
              <FileText className="w-4 h-4" />
              Get In Touch
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </GlassCard>
    </SlideUp>
  );
};

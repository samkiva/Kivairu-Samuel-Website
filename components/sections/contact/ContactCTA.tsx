import * as React from 'react';
import { GlassCard } from '@/components/ui';
import { buttonVariants } from '@/components/ui/Button';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { CONTACT_DATA } from '@/data/contact';
import { cn } from '@/utils/cn';

export const ContactCTA = () => {
  const { cta } = CONTACT_DATA;

  return (
    <GlassCard className="p-8 md:p-12 rounded-3xl border-primary/30 bg-gradient-to-br from-primary/10 via-background/80 to-accent/10 text-center flex flex-col items-center gap-6 shadow-2xl relative overflow-hidden my-16">
      <div className="max-w-2xl space-y-3 relative z-10">
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
          {cta.title}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          {cta.description}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto relative z-10 pt-2">
        <a
          href={cta.primaryBtn.href}
          className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'w-full sm:w-auto gap-2')}
        >
          <Mail className="w-4 h-4" />
          <span>{cta.primaryBtn.label}</span>
        </a>

        <a
          href={cta.secondaryBtn.href}
          className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'w-full sm:w-auto gap-2')}
        >
          <span>{cta.secondaryBtn.label}</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        <a
          href={cta.resumeBtn.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: 'ghost', size: 'lg' }), 'w-full sm:w-auto gap-2 border border-border/40')}
        >
          <Download className="w-4 h-4 text-primary" />
          <span>{cta.resumeBtn.label}</span>
        </a>
      </div>
    </GlassCard>
  );
};

import * as React from 'react';
import Link from 'next/link';
import { Section, Container } from '@/components/layout';
import { GlassCard } from '@/components/ui';
import { buttonVariants } from '@/components/ui/Button';
import { Home, ArrowLeft } from 'lucide-react';
import { cn } from '@/utils/cn';

export default function NotFound() {
  return (
    <Section className="min-h-[85vh] flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
      <Container className="relative z-10 max-w-xl">
        <GlassCard className="p-8 md:p-12 rounded-3xl border-primary/20 text-center flex flex-col items-center gap-6 bg-background/80 shadow-2xl">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20">
            Error 404
          </span>

          <div className="flex flex-col gap-2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Page Not Found
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              The page or resource you are looking for does not exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-2">
            <Link
              href="/"
              className={cn(buttonVariants({ variant: 'primary', size: 'lg' }), 'w-full sm:w-auto gap-2')}
            >
              <Home className="w-4 h-4" />
              Return to Homepage
            </Link>

            <Link
              href="/#projects"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'w-full sm:w-auto gap-2')}
            >
              <ArrowLeft className="w-4 h-4" />
              Explore Projects
            </Link>
          </div>
        </GlassCard>
      </Container>
    </Section>
  );
}

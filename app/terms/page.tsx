import * as React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, Container, SectionHeading } from '@/components/layout';
import { GlassCard } from '@/components/ui';
import { buttonVariants } from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/utils/cn';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for the Kivairu Samuel Portfolio platform.',
};

export default function TermsPage() {
  return (
    <Section className="pt-28 pb-20">
      <Container>
        <div className="mb-8">
          <Link
            href="/"
            className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'gap-2 mb-6')}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <SectionHeading>Terms of Service</SectionHeading>
          <p className="text-xs font-mono text-muted-foreground mt-2">
            Last Updated: July 2026
          </p>
        </div>

        <GlassCard className="p-8 md:p-12 rounded-3xl border-primary/20 bg-background/80 space-y-6 text-sm text-muted-foreground leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing and viewing the Kivairu Samuel Portfolio, you agree to comply with these terms of use.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-foreground">2. Intellectual Property</h2>
            <p>
              The design, source code architecture, custom graphics, and case study content presented on this site belong to Kivairu Samuel. Open-source repositories linked are governed by their respective licenses.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-foreground">3. Disclaimer</h2>
            <p>
              Projects and research insights presented on this site are provided for informational and demonstration purposes without warranties of any kind.
            </p>
          </section>
        </GlassCard>
      </Container>
    </Section>
  );
}

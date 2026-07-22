import * as React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, Container, SectionHeading } from '@/components/layout';
import { GlassCard } from '@/components/ui';
import { buttonVariants } from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/utils/cn';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for the Kivairu Samuel Portfolio platform.',
};

export default function PrivacyPage() {
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
          <SectionHeading>Privacy Policy</SectionHeading>
          <p className="text-xs font-mono text-muted-foreground mt-2">
            Last Updated: July 2026
          </p>
        </div>

        <GlassCard className="p-8 md:p-12 rounded-3xl border-primary/20 bg-background/80 space-y-6 text-sm text-muted-foreground leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-foreground">1. Overview</h2>
            <p>
              Welcome to the Kivairu Samuel Portfolio website. This platform is a personal engineering showcase and digital headquarters. Respecting your privacy is a core design principle.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-foreground">2. Data Collection</h2>
            <p>
              This website is static and server-rendered. It does not set third-party tracking cookies, sell personal data, or deploy invasive user tracking scripts.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-foreground">3. Direct Contact</h2>
            <p>
              If you send an email directly via the provided contact links, your message will only be used to respond to your inquiry regarding software development, AI engineering, or aerospace research collaboration.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-foreground">4. Contact Information</h2>
            <p>
              For privacy-related questions, reach out directly to <strong>kivairusamuel9409@gmail.com</strong>.
            </p>
          </section>
        </GlassCard>
      </Container>
    </Section>
  );
}

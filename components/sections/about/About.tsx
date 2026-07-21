import * as React from 'react';
import { Section, Container, SectionHeading, SectionDescription } from '@/components/layout';
import { AboutContent } from './AboutContent';
import { AboutStats } from './AboutStats';
import { AboutPhilosophyCards } from './AboutPhilosophyCards';
import { AboutHighlights } from './AboutHighlights';
import { AboutTimeline } from './AboutTimeline';
import { AboutQuote } from './AboutQuote';
import { AboutCTA } from './AboutCTA';
import { ABOUT_DATA } from '@/data/about';

export const About = () => {
  return (
    <Section id="about" className="relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <SectionHeading>{ABOUT_DATA.sectionLabel}</SectionHeading>
          <SectionDescription className="max-w-2xl mx-auto mt-4">
            {ABOUT_DATA.subheadline}
          </SectionDescription>
        </div>

        {/* Main Content Grid: Intro + Image side-by-side on desktop */}
        <AboutContent data={ABOUT_DATA} />

        {/* Stats Row */}
        <AboutStats stats={ABOUT_DATA.stats} />

        {/* Engineering Philosophy */}
        <div className="mt-20 md:mt-28">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Engineering Philosophy
            </h3>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-base">
              The principles that guide every decision I make as an engineer.
            </p>
          </div>
          <AboutPhilosophyCards philosophy={ABOUT_DATA.philosophy} />
        </div>

        {/* Highlights */}
        <div className="mt-20 md:mt-28">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              What I Do
            </h3>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-base">
              Core areas where I apply my skills and create meaningful impact.
            </p>
          </div>
          <AboutHighlights highlights={ABOUT_DATA.highlights} />
        </div>

        {/* Timeline */}
        <div className="mt-20 md:mt-28">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              My Journey
            </h3>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-base">
              A brief timeline of how I evolved from a curious beginner to a full-stack AI engineer.
            </p>
          </div>
          <AboutTimeline timeline={ABOUT_DATA.timeline} />
        </div>

        {/* Quote */}
        <AboutQuote quote={ABOUT_DATA.quote} author={ABOUT_DATA.quoteAuthor} />

        {/* CTA */}
        <AboutCTA cta={ABOUT_DATA.cta} />
      </Container>
    </Section>
  );
};

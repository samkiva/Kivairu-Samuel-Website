import * as React from 'react';
import { Section, Container } from '@/components/layout';
import { ExperienceHeader } from './ExperienceHeader';
import { ExperienceTimeline } from './ExperienceTimeline';
import { EducationCard } from './EducationCard';
import { CertificationGrid } from './CertificationGrid';
import { ResumeCTA } from './ResumeCTA';

export const Experience = () => {
  return (
    <Section id="experience" className="relative overflow-hidden">
      <Container>
        <ExperienceHeader />
        <ExperienceTimeline />
        <EducationCard />
        <CertificationGrid />
        <ResumeCTA />
      </Container>
    </Section>
  );
};

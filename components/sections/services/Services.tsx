import * as React from 'react';
import { Section, Container } from '@/components/layout';
import { ServicesHeader } from './ServicesHeader';
import { ServicesGrid } from './ServicesGrid';

export const Services = () => {
  return (
    <Section id="services" className="relative overflow-hidden">
      <Container>
        <ServicesHeader />
        <ServicesGrid />
      </Container>
    </Section>
  );
};

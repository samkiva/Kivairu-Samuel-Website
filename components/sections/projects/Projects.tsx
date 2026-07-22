import * as React from 'react';
import { Section, Container } from '@/components/layout';
import { ProjectsHeader } from './ProjectsHeader';
import { ProjectsGrid } from './ProjectsGrid';

export const Projects = () => {
  return (
    <Section id="projects" className="relative overflow-hidden">
      <Container>
        <ProjectsHeader />
        <ProjectsGrid />
      </Container>
    </Section>
  );
};

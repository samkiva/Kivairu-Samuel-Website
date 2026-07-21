import * as React from 'react';
import { Section, Container } from '@/components/layout';
import { SkillsHeader } from './SkillsHeader';
import { SkillsCategories } from './SkillsCategories';
import { SkillsTools } from './SkillsTools';
import { CurrentLearning } from './CurrentLearning';

export const Skills = () => {
  return (
    <Section id="skills" className="relative overflow-hidden">
      <Container>
        <SkillsHeader />
        <SkillsCategories />
        <SkillsTools />
        <CurrentLearning />
      </Container>
    </Section>
  );
};

import * as React from 'react';
import { Section, Container } from '@/components/layout';
import { ContactHeader } from './ContactHeader';
import { ContactTrustBadges } from './ContactTrustBadges';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';
import { ContactCTA } from './ContactCTA';

export const Contact = () => {
  return (
    <Section id="contact" className="relative overflow-hidden">
      <Container>
        <ContactHeader />
        <ContactTrustBadges />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        <ContactCTA />
      </Container>
    </Section>
  );
};

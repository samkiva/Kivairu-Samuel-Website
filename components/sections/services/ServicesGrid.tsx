import * as React from 'react';
import { SlideUp } from '@/components/animations';
import { SERVICES_DATA } from '@/data/services';
import { ServiceCard } from './ServiceCard';

export const ServicesGrid = () => {
  return (
    <ul
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 list-none p-0"
      aria-label="Engineering services"
    >
      {SERVICES_DATA.map((service, index) => (
        <li key={service.id}>
          {/* Cap total stagger at 300 ms so the last card never feels delayed */}
          <SlideUp delay={Math.min(index * 0.08, 0.3)} className="h-full">
            <ServiceCard service={service} />
          </SlideUp>
        </li>
      ))}
    </ul>
  );
};

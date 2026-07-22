import * as React from 'react';
import { SlideUp } from '@/components/animations';
import { SERVICES_DATA } from '@/data/services';
import { ServiceCard } from './ServiceCard';

export const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
      {SERVICES_DATA.map((service, index) => (
        <SlideUp key={service.id} delay={index * 0.08}>
          <ServiceCard service={service} />
        </SlideUp>
      ))}
    </div>
  );
};

import { Service } from '@/types';

export const SERVICES: readonly Service[] = [
  {
    title: 'AI & Machine Learning Consulting',
    description: 'Custom AI solutions tailored to your business needs, from predictive modeling to LLM integration.',
    icon: 'BrainCircuit',
    availability: 'Available',
  },
  {
    title: 'Full-Stack Web Development',
    description: 'Scalable, high-performance web applications built with Next.js, React, and modern backend architectures.',
    icon: 'MonitorSmartphone',
    availability: 'Available',
  },
  {
    title: 'Hardware & IoT Prototyping',
    description: 'End-to-end prototyping for embedded systems and smart connected devices.',
    icon: 'Cpu',
    availability: 'Limited',
  },
  {
    title: 'Data Architecture & Strategy',
    description: 'Designing robust data pipelines and analytics infrastructure to extract actionable insights.',
    icon: 'Database',
    availability: 'Unavailable',
  },
];

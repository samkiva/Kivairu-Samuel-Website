import { Experience } from '@/types';

export const EXPERIENCES: readonly Experience[] = [
  {
    title: 'Senior AI Engineer',
    organization: 'TechFlow Innovations',
    period: '2024 - Present',
    description: [
      'Lead the development of enterprise LLM wrappers handling 50k+ daily queries.',
      'Architected scalable backend infrastructure reducing latency by 40%.',
      'Mentored a team of 4 junior developers in best practices for AI integration.',
    ],
    technologies: ['Python', 'Next.js', 'OpenAI', 'AWS', 'PostgreSQL'],
  },
  {
    title: 'Software Engineer',
    organization: 'Global Data Systems',
    period: '2022 - 2024',
    description: [
      'Developed responsive frontend dashboards for real-time analytics monitoring.',
      'Refactored legacy React codebases, improving Lighthouse scores by 25 points.',
      'Collaborated closely with product managers to deliver features on aggressive deadlines.',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
  },
  {
    title: 'Hardware Research Intern',
    organization: 'Institute for Smart Systems',
    period: '2021 - 2022',
    description: [
      'Assisted in designing IoT sensor nodes for agricultural monitoring.',
      'Wrote low-level C++ firmware for ESP32 microcontrollers.',
      'Conducted field testing and data validation for prototype deployments.',
    ],
    technologies: ['C++', 'Arduino', 'LoRaWAN', 'Python'],
  },
];

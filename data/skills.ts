import { Skill } from '@/types';

export const SKILLS: readonly Skill[] = [
  // Artificial Intelligence
  { name: 'Machine Learning', level: 90, icon: 'brain', category: 'Artificial Intelligence' },
  { name: 'Deep Learning', level: 85, icon: 'network', category: 'Artificial Intelligence' },
  { name: 'Computer Vision', level: 80, icon: 'eye', category: 'Artificial Intelligence' },
  { name: 'LLMs & NLP', level: 85, icon: 'message-square', category: 'Artificial Intelligence' },
  { name: 'PyTorch / TensorFlow', level: 90, icon: 'cpu', category: 'Artificial Intelligence' },
  
  // Software Engineering & Frontend
  { name: 'TypeScript', level: 95, icon: 'code', category: 'Frontend' },
  { name: 'React / Next.js', level: 95, icon: 'layout', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, icon: 'palette', category: 'Frontend' },
  
  // Backend & Cloud
  { name: 'Node.js', level: 85, icon: 'server', category: 'Backend' },
  { name: 'Python', level: 95, icon: 'terminal', category: 'Backend' },
  { name: 'PostgreSQL', level: 80, icon: 'database', category: 'Backend' },
  { name: 'AWS / GCP', level: 75, icon: 'cloud', category: 'Cloud' },
  { name: 'Docker / CI/CD', level: 80, icon: 'container', category: 'DevOps' },
  
  // Hardware
  { name: 'Embedded Systems', level: 70, icon: 'cpu', category: 'Hardware' },
  { name: 'IoT Architecture', level: 75, icon: 'wifi', category: 'Hardware' },
  { name: 'C / C++', level: 70, icon: 'code', category: 'Hardware' },
];

export interface HeroConfig {
  headline: string;
  roles: string[];
  description: string;
  availability: string;
  cta: {
    primary: {
      label: string;
      href: string;
    };
    secondary: {
      label: string;
      href: string;
    };
  };
}

export const HERO_DATA: HeroConfig = {
  headline: 'Engineering Intelligent Systems That Solve Real Problems.',
  roles: ['AI Engineer', 'Software Developer', 'Data Analyst'],
  description:
    'Engineering intelligent, scalable technology with a focus on solving meaningful problems. Bridging the gap between cutting-edge AI research, full-stack software development, and embedded hardware systems.',
  availability: 'Open to Opportunities',
  cta: {
    primary: {
      label: 'View Projects',
      href: '#projects',
    },
    secondary: {
      label: 'Download Resume',
      href: '/resume.pdf',
    },
  },
};

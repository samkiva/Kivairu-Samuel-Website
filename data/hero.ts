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
  roles: ['AI Engineer', 'Software Developer', 'Data Analyst', 'Ethical Hacker'],
  description:
    'A concise paragraph introducing HexSentinel as someone building secure, intelligent, scalable technology with a focus on solving meaningful problems. Bridging the gap between cutting-edge AI research and robust production systems.',
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

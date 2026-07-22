export interface ContactConfig {
  headline: string;
  subheadline: string;
  email: string;
  location: string;
  responseTime: string;
  socials: {
    github: string;
    linkedin: string;
  };
  trustBadges: string[];
  cta: {
    title: string;
    description: string;
    primaryBtn: { label: string; href: string };
    secondaryBtn: { label: string; href: string };
    resumeBtn: { label: string; href: string };
  };
}

export const CONTACT_DATA: ContactConfig = {
  headline: "Let's Build Something Exceptional Together",
  subheadline:
    "Whether you have a complex software engineering project, AI model integration, research initiative, or technical consulting inquiry, I'm ready to collaborate.",
  email: 'kivairusamuel9409@gmail.com',
  location: 'Nairobi, Kenya',
  responseTime: 'Typically responds within 24 hours',
  socials: {
    github: 'https://github.com/samkiva',
    linkedin: 'https://www.linkedin.com/in/samuel-kivairu',
  },
  trustBadges: [
    'Open to Opportunities',
    'Open to Research Collaboration',
    'Open to Freelance Projects',
    'Open to AI Engineering Roles',
  ],
  cta: {
    title: 'Ready to turn your vision into engineering reality?',
    description:
      'Explore my completed case studies, review my resume, or send me a direct message to start a conversation.',
    primaryBtn: { label: 'Send a Message', href: '#contact-form' },
    secondaryBtn: { label: 'Explore Projects', href: '#projects' },
    resumeBtn: { label: 'Download Resume', href: '/resume.pdf' },
  },
};

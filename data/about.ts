// ─────────────────────────────────────────────
// data/about.ts — Single source of truth for the About section
// ─────────────────────────────────────────────

export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutPhilosophy {
  principle: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface AboutHighlight {
  title: string;
  description: string;
  icon: string;
}

export interface AboutTimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface AboutConfig {
  sectionLabel: string;
  headline: string;
  subheadline: string;
  introduction: string;
  story: string;
  quote: string;
  quoteAuthor: string;
  currentFocus: string;
  stats: AboutStat[];
  philosophy: AboutPhilosophy[];
  highlights: AboutHighlight[];
  timeline: AboutTimelineItem[];
  cta: {
    label: string;
    href: string;
  };
}

export const ABOUT_DATA: AboutConfig = {
  sectionLabel: 'About Me',
  headline: 'Engineer. Builder. Problem Solver.',
  subheadline:
    'A brief look at who I am, how I think, and why I build what I build.',

  introduction:
    'I am Kivairu Samuel — a Software Developer, AI Engineer, and Data Analyst. My work bridges the gap between software engineering, machine learning, and embedded hardware to build intelligent, scalable systems.',

  story:
    'My journey started in 2024 with a simple goal: understanding how the web works through HTML. That initial curiosity quickly escalated into a deep dive into programming logic, software architecture, and eventually, data analysis and artificial intelligence. Today, I apply those skills in the Aerospace System Research Initiative, helping develop RC planes and drone systems to advance autonomous flight research. For me, the thrill lies at the intersection of software and hardware — writing code that makes physical machines move, react, and fly. I believe that engineering isn\'t just about the code you write today; it\'s about how rapidly you can adapt and learn to build the future.',

  quote:
    'Great engineering is not measured by lines of code, but by the ability to rapidly learn, adapt, and solve complex problems across both software and physical systems.',
  quoteAuthor: 'Kivairu Samuel',

  currentFocus:
    'Currently working on the Aerospace System Research Initiative — developing RC planes and drone systems for autonomous flight research. Simultaneously deepening my expertise in full-stack engineering and hardware-software integration.',

  stats: [
    { value: '10+', label: 'Projects Built' },
    { value: '15+', label: 'Technologies Learned' },
    { value: '1+', label: 'Year of Building' },
    { value: '1', label: 'Aerospace Initiative' },
  ],

  philosophy: [
    {
      principle: 'Continuous Rapid Learning',
      description:
        'Technology evolves fast. The most critical skill an engineer can have is the ability to master new tools, languages, and systems quickly.',
      icon: 'BookOpen',
    },
    {
      principle: 'Solve Meaningful Problems',
      description:
        'Every project should address a real need. Writing code without a clear, impactful problem to solve is just noise.',
      icon: 'Target',
    },
    {
      principle: 'Bridge Software & Hardware',
      description:
        'The most impactful systems don\'t just live on screens — they interact with the physical world and respond to their environment.',
      icon: 'Layers',
    },
    {
      principle: 'Make AI Practical',
      description:
        'Artificial intelligence is a tool, not magic. The goal is to build reliable, data-driven systems that deliver tangible value.',
      icon: 'Brain',
    },
    {
      principle: 'Build Maintainable Systems',
      description:
        'Code is read far more often than it is written. Writing clean, modular, and maintainable software is a core responsibility.',
      icon: 'Code2',
    },
    {
      principle: 'Engineering with Purpose',
      description:
        'Whether it\'s a web application or an autonomous drone, every architectural decision should be deliberate and outcome-focused.',
      icon: 'Lightbulb',
    },
  ],

  highlights: [
    {
      title: 'AI Engineering',
      description:
        'Applying machine learning and data analysis to build systems that learn, adapt, and solve complex problems.',
      icon: 'Bot',
    },
    {
      title: 'Full-Stack Development',
      description:
        'Engineering robust, scalable web applications from the database layer all the way up to the user interface.',
      icon: 'Code2',
    },
    {
      title: 'Embedded Systems',
      description:
        'Programming hardware and integrating physical components to make machines respond intelligently to code.',
      icon: 'Zap',
    },
    {
      title: 'Data Analysis',
      description:
        'Extracting meaningful insights from raw data using rigorous analytical and statistical methods.',
      icon: 'LineChart',
    },
    {
      title: 'Aerospace Integration',
      description:
        'Developing and researching RC planes and drone systems for autonomous and remote-controlled flight.',
      icon: 'Target',
    },
    {
      title: 'Continuous Learning',
      description:
        'Constantly expanding my technical horizon to tackle completely new challenges across different engineering domains.',
      icon: 'BookOpen',
    },
  ],

  timeline: [
    {
      year: '2024',
      title: 'First Line of Code — HTML',
      description:
        'Started the journey with the fundamentals — learning how websites are structured with HTML and how the web works.',
    },
    {
      year: '2024',
      title: 'Software Development',
      description:
        'Rapidly progressed from markup to programming — building logic-driven applications and learning core software engineering principles.',
    },
    {
      year: '2024',
      title: 'Data & AI Exploration',
      description:
        'Expanded into data analysis and artificial intelligence, discovering the power of data-driven decision making and machine learning.',
    },
    {
      year: '2025',
      title: 'Aerospace Research Initiative',
      description:
        'Joined a research team developing RC planes and drone systems — integrating hardware and software to advance autonomous flight research.',
    },
    {
      year: '2025',
      title: 'Full-Stack & Systems Engineering',
      description:
        'Now building production-grade software systems, programming embedded hardware, and pushing the boundaries of what software can control.',
    },
  ],

  cta: {
    label: 'Explore My Projects',
    href: '#projects',
  },
};

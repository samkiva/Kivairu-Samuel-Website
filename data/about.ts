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
    'I am Kivairu Samuel — a Software Developer, AI Engineer, and Data Analyst with a deep commitment to building technology that is intelligent, purposeful, and scalable. My work sits at the intersection of software engineering, machine learning, and data-driven product development.',

  story:
    'My journey began with a fundamental curiosity — I wanted to understand not just how software works, but why it matters. Starting with foundational programming, I quickly found myself drawn toward data and AI as the most powerful levers for solving real problems at scale. Each project I take on deepens my engineering mindset: approach every challenge with first principles, measure outcomes rigorously, and always build with the end user in mind. I believe great software is not just about code — it is about clarity of thinking, disciplined architecture, and continuous learning.',

  quote:
    'The best engineers are not those who write the most code — they are those who solve the right problems with clarity and purpose.',
  quoteAuthor: 'Kivairu Samuel',

  currentFocus:
    'Currently focused on building production-grade AI systems, exploring large language model applications, and deepening expertise in full-stack engineering with a performance-first mindset.',

  stats: [
    { value: '15+', label: 'Projects Built' },
    { value: '20+', label: 'Technologies Mastered' },
    { value: '2+', label: 'Years Learning' },
    { value: '5+', label: 'AI Research Areas' },
  ],

  philosophy: [
    {
      principle: 'Build with Purpose',
      description:
        'Every line of code should serve a clear objective. Complexity without purpose is waste.',
      icon: 'Target',
    },
    {
      principle: 'Simplicity Scales',
      description:
        'The most elegant systems are simple at their core. Simplicity reduces bugs, increases velocity, and enables growth.',
      icon: 'Layers',
    },
    {
      principle: 'Data Drives Decisions',
      description:
        'Intuition is a starting point. Data is the compass. Build systems that measure what matters.',
      icon: 'BarChart3',
    },
    {
      principle: 'AI Should Empower',
      description:
        'Artificial intelligence must amplify human capability, not replace human judgment.',
      icon: 'Brain',
    },
    {
      principle: 'Accessibility Is Non-Negotiable',
      description:
        'Great technology is technology that works for everyone. Inclusion is an engineering responsibility.',
      icon: 'Users',
    },
    {
      principle: 'Performance Matters',
      description:
        'A slow product is a broken product. Performance is a feature, not an afterthought.',
      icon: 'Zap',
    },
  ],

  highlights: [
    {
      title: 'AI Engineering',
      description:
        'Designing and deploying intelligent systems using machine learning, deep learning, and LLM frameworks.',
      icon: 'Bot',
    },
    {
      title: 'Full-Stack Development',
      description:
        'Building scalable web applications from database to deployment with modern frameworks and tools.',
      icon: 'Code2',
    },
    {
      title: 'Data Analysis',
      description:
        'Transforming raw data into actionable insight through rigorous analysis, visualization, and modeling.',
      icon: 'LineChart',
    },
    {
      title: 'Continuous Learning',
      description:
        'Staying at the frontier of technology through research, experimentation, and deliberate practice.',
      icon: 'BookOpen',
    },
    {
      title: 'Problem-First Thinking',
      description:
        'Starting every project by deeply understanding the problem before writing a single line of code.',
      icon: 'Lightbulb',
    },
    {
      title: 'Open Collaboration',
      description:
        'Contributing to communities of developers and researchers to build better technology together.',
      icon: 'GitMerge',
    },
  ],

  timeline: [
    {
      year: '2024',
      title: 'First Line of Code',
      description:
        'Discovered programming and began learning foundational software development concepts.',
    },
    {
      year: '2024',
      title: 'Frontend & Web Development',
      description:
        'Built interactive web applications and developed strong proficiency in modern frontend frameworks.',
    },
    {
      year: '2025',
      title: 'Data Science & Analytics',
      description:
        'Shifted focus to data — learning statistical modeling, analysis pipelines, and data visualization.',
    },
    {
      year: '2025',
      title: 'AI & Machine Learning',
      description:
        'Dived deep into artificial intelligence, neural networks, and large language model applications.',
    },
    {
      year: '2026',
      title: 'Production Systems',
      description:
        'Now building end-to-end production-grade software systems with AI, data, and robust engineering at the core.',
    },
  ],

  cta: {
    label: 'Explore My Projects',
    href: '#projects',
  },
};

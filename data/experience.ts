// ─────────────────────────────────────────────
// data/experience.ts — Single source of truth for Experience & Education section
// ─────────────────────────────────────────────

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  year: string;
  location: string;
  type: 'Research Initiative' | 'Engineering Development' | 'Academic & Self-Directed';
  description: string;
  keyContributions: string[];
  technologies: string[];
  featured?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  status: string;
  location: string;
  description: string;
  relevantFocus: string[];
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  status: 'Completed' | 'In Progress';
}

export interface ResumeConfig {
  title: string;
  subtitle: string;
  statusLabel: string;
  resumePdfUrl: string;
  availableFor: string[];
}

export interface ExperienceData {
  sectionLabel: string;
  headline: string;
  subheadline: string;
  experiences: ExperienceItem[];
  education: EducationItem;
  certificationsNotice: {
    message: string;
    submessage: string;
  };
  certifications: CertificationItem[];
  resumeCta: ResumeConfig;
}

export const EXPERIENCE_DATA: ExperienceData = {
  sectionLabel: 'Journey & Growth',
  headline: 'Experience, Education & Track Record',
  subheadline:
    'An authentic timeline of my engineering development, research contributions, statistics education, and ongoing technical growth.',

  experiences: [
    {
      id: 'present-autonomous',
      role: 'Full-Stack & Autonomous Systems Developer',
      organization: 'Independent Engineering & Research',
      period: '2026 — Present',
      year: '2026',
      location: 'Kenya',
      type: 'Engineering Development',
      description:
        'Engineering production-grade software applications, building intelligent AI pipelines, and advancing research in embedded control systems.',
      keyContributions: [
        'Developing full-stack web applications with Next.js 16, TypeScript, and Tailwind CSS v4',
        'Integrating machine learning models and computer vision pipelines into production software',
        'Exploring ROS2 and PX4 control logic for self-stabilizing RC aircraft and drone telemetry',
      ],
      technologies: ['Next.js 16', 'TypeScript', 'Python', 'Tailwind CSS', 'ROS2', 'PX4'],
      featured: true,
    },
    {
      id: 'aerospace-research',
      role: 'Hardware & Systems Lead',
      organization: 'Aerospace System Research Initiative',
      period: '2025 — Present',
      year: '2025',
      location: 'Kenya',
      type: 'Research Initiative',
      description:
        'Contributing to a dedicated research team developing fixed-wing RC planes and multirotor drone hardware to advance autonomous flight research.',
      keyContributions: [
        'Interfacing ESP32 and STM32 microcontrollers with telemetry sensors, IMUs, and radio transceivers',
        'Implementing low-latency C++ control loops for sensor reading, serial telemetry, and motor ESC timing',
        'Designing fail-safe power isolation circuits and signal loss cutoff routines for flight safety',
      ],
      technologies: ['C/C++', 'ESP32 / STM32', 'Arduino IDE', 'Telemetry', 'I2C/SPI/UART'],
      featured: true,
    },
    {
      id: 'early-foundations',
      role: 'Software Development & Data AI Exploration',
      organization: 'Self-Directed Engineering & Projects',
      period: '2024',
      year: '2024',
      location: 'Kenya',
      type: 'Academic & Self-Directed',
      description:
        'Initiated my technical journey starting with fundamental HTML web architecture, rapidly progressing through software logic, data analysis, and machine learning.',
      keyContributions: [
        'Built foundational web applications and interactive interfaces using HTML, CSS, and JavaScript',
        'Mastered Python data analytics using Pandas, NumPy, and statistical visualization tools',
        'Participated in AI exploration and hackathons, developing initial machine learning classification models',
      ],
      technologies: ['HTML5/CSS3', 'JavaScript', 'Python', 'Pandas', 'NumPy', 'Scikit-Learn'],
    },
  ],

  education: {
    institution: 'University of Nairobi',
    degree: 'Bachelor of Science in Statistics',
    period: '2024 — Present',
    status: 'In Progress',
    location: 'Nairobi, Kenya',
    description:
      'Gaining a rigorous mathematical foundation in probability, statistical inference, data analytics, and computational modeling.',
    relevantFocus: [
      'Artificial Intelligence',
      'Software Engineering',
      'Data Science & Analytics',
      'Embedded Systems',
      'Autonomous Systems',
    ],
    highlights: [
      'Applying statistical modeling techniques to real-world machine learning dataset challenges',
      'Combining computational statistics with full-stack software development principles',
      'Active focus on data-driven decision making and algorithm evaluation',
    ],
  },

  certificationsNotice: {
    message: 'Currently expanding professional certifications.',
    submessage:
      'Continuously completing advanced coursework and hands-on specializations across AI engineering, embedded systems, and full-stack development.',
  },

  certifications: [
    {
      title: 'Python for Data Science & AI',
      issuer: 'Self-Paced Specialization',
      date: '2024',
      status: 'Completed',
    },
    {
      title: 'Full-Stack Web Engineering',
      issuer: 'Modern Web Guidance',
      date: '2024',
      status: 'Completed',
    },
    {
      title: 'ROS2 & Autonomous Flight Systems',
      issuer: 'Ongoing Research',
      date: '2026',
      status: 'In Progress',
    },
  ],

  resumeCta: {
    title: 'Interested in working together?',
    subtitle:
      'I am actively open to engineering roles, research collaborations, and project partnerships.',
    statusLabel: 'Open to Opportunities',
    resumePdfUrl: '/resume.pdf',
    availableFor: [
      'AI Engineering',
      'Software Development',
      'Research Collaboration',
      'Data Analytics',
    ],
  },
};

// ─────────────────────────────────────────────
// data/skills.ts — Single source of truth for Skills & Technologies section
// ─────────────────────────────────────────────

export type ExperienceLevel =
  | 'Currently Using'
  | 'Strong Experience'
  | 'Working Knowledge'
  | 'Learning';

export interface SkillItem {
  name: string;
  description: string;
  icon: string;
  level: ExperienceLevel;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface DailyTool {
  name: string;
  category: string;
  icon: string;
  description: string;
}

export interface CurrentLearningItem {
  topic: string;
  description: string;
  badge: string;
  icon: string;
}

export interface SkillsData {
  sectionLabel: string;
  headline: string;
  subheadline: string;
  categories: SkillCategory[];
  dailyTools: DailyTool[];
  currentLearning: {
    title: string;
    headline: string;
    paragraph: string;
    items: CurrentLearningItem[];
  };
}

export const SKILLS_DATA: SkillsData = {
  sectionLabel: 'Skills & Capabilities',
  headline: 'Engineering Competencies & Tech Stack',
  subheadline:
    'A structured overview of technologies, frameworks, and engineering disciplines I apply to solve complex problems.',

  categories: [
    {
      id: 'programming',
      title: 'Programming Languages',
      description: 'Foundational languages for software development, systems logic, and data processing.',
      icon: 'Code2',
      skills: [
        {
          name: 'Python',
          description: 'Primary language for AI, data analysis, scripting, and backend development.',
          icon: 'FileCode',
          level: 'Currently Using',
          featured: true,
        },
        {
          name: 'TypeScript',
          description: 'Typed JavaScript for building resilient, type-safe full-stack web applications.',
          icon: 'FileCode',
          level: 'Currently Using',
          featured: true,
        },
        {
          name: 'JavaScript (ES6+)',
          description: 'Core web language for interactive client-side logic and asynchronous operations.',
          icon: 'FileCode',
          level: 'Strong Experience',
        },
        {
          name: 'C / C++',
          description: 'Low-level programming for embedded systems, microcontrollers, and performance-critical logic.',
          icon: 'Cpu',
          level: 'Working Knowledge',
          featured: true,
        },
        {
          name: 'HTML5 & CSS3',
          description: 'Semantic markup and modern responsive styling architecture.',
          icon: 'Layout',
          level: 'Strong Experience',
        },
        {
          name: 'SQL',
          description: 'Querying relational databases, data manipulation, and schema querying.',
          icon: 'Database',
          level: 'Working Knowledge',
        },
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend Engineering',
      description: 'Building modern, accessible, and performant user interfaces.',
      icon: 'Layout',
      skills: [
        {
          name: 'React.js',
          description: 'Component-driven UI development with custom hooks and state management.',
          icon: 'Component',
          level: 'Currently Using',
          featured: true,
        },
        {
          name: 'Next.js (App Router)',
          description: 'Full-stack React framework utilizing Server Components, Turbopack, and SSR.',
          icon: 'Globe',
          level: 'Currently Using',
          featured: true,
        },
        {
          name: 'Tailwind CSS',
          description: 'Utility-first CSS styling for rapid, token-driven design systems.',
          icon: 'Palette',
          level: 'Currently Using',
          featured: true,
        },
        {
          name: 'Framer Motion',
          description: 'Declarative animation library for fluid, physics-based UI transitions.',
          icon: 'Zap',
          level: 'Working Knowledge',
        },
      ],
    },
    {
      id: 'ai-data',
      title: 'AI & Data Engineering',
      description: 'Machine learning, data analysis pipelines, and intelligent system integration.',
      icon: 'Brain',
      skills: [
        {
          name: 'Machine Learning',
          description: 'Supervised and unsupervised modeling, feature engineering, and evaluation.',
          icon: 'Brain',
          level: 'Currently Using',
          featured: true,
        },
        {
          name: 'Data Analysis (Pandas/NumPy)',
          description: 'Data cleaning, aggregation, exploratory analysis, and numerical processing.',
          icon: 'BarChart3',
          level: 'Strong Experience',
          featured: true,
        },
        {
          name: 'Data Visualization',
          description: 'Communicating complex analytical findings via visual charts and dashboards.',
          icon: 'LineChart',
          level: 'Strong Experience',
        },
        {
          name: 'LLM & AI Integration',
          description: 'Integrating artificial intelligence APIs and model workflows into production software.',
          icon: 'Bot',
          level: 'Currently Using',
        },
      ],
    },
    {
      id: 'embedded',
      title: 'Embedded Systems & Hardware',
      description:
        'Hardware-software integration, microcontroller programming, and robotics hardware.',
      icon: 'Cpu',
      skills: [
        {
          name: 'Microcontroller Programming',
          description: 'Programming ESP32, Arduino, and STM32 boards for sensor reading and actuator control.',
          icon: 'Cpu',
          level: 'Currently Using',
          featured: true,
        },
        {
          name: 'Hardware-Software Integration',
          description: 'Interfacing physical sensors, radio receivers, and flight electronics with software.',
          icon: 'Radio',
          level: 'Currently Using',
          featured: true,
        },
        {
          name: 'Sensor Protocols (I2C / SPI / UART)',
          description: 'Low-level bus communications for telemetry and device interfacing.',
          icon: 'Workflow',
          level: 'Working Knowledge',
        },
      ],
    },
    {
      id: 'backend-cloud',
      title: 'Backend & Cloud Basics',
      description: 'Server logic, REST APIs, relational/NoSQL storage, and cloud integration.',
      icon: 'Server',
      skills: [
        {
          name: 'Node.js & Express',
          description: 'Building RESTful microservices and asynchronous backend API routes.',
          icon: 'Server',
          level: 'Working Knowledge',
        },
        {
          name: 'PostgreSQL & Database Design',
          description: 'Relational data modeling, indexing, and persistent storage management.',
          icon: 'Database',
          level: 'Working Knowledge',
        },
        {
          name: 'Firebase Services',
          description: 'Authentication, Firestore realtime database, and cloud hosting integration.',
          icon: 'Cloud',
          level: 'Strong Experience',
        },
      ],
    },
  ],

  dailyTools: [
    {
      name: 'VS Code',
      category: 'Code Editor',
      icon: 'FileCode',
      description: 'Primary IDE customized with extensions for TypeScript, Python, and C/C++ development.',
    },
    {
      name: 'Git & GitHub',
      category: 'Version Control',
      icon: 'GitBranch',
      description: 'Source code management, branch workflows, pull requests, and version history.',
    },
    {
      name: 'Linux / Terminal',
      category: 'Operating System',
      icon: 'Terminal',
      description: 'Command line environment for package management, build tools, and system scripting.',
    },
    {
      name: 'Arduino IDE / PlatformIO',
      category: 'Embedded Development',
      icon: 'Cpu',
      description: 'Development environment for flashing microcontrollers and debugging serial communications.',
    },
    {
      name: 'Postman',
      category: 'API Testing',
      icon: 'Globe',
      description: 'Testing REST endpoints, inspecting headers, payload validation, and API documentation.',
    },
    {
      name: 'Figma',
      category: 'Design & Prototyping',
      icon: 'Palette',
      description: 'UI/UX wireframing, layout prototyping, and design system visual reference.',
    },
  ],

  currentLearning: {
    title: 'Current Research & Learning',
    headline: 'Frontier Explorations in Aerospace & Embedded AI',
    paragraph:
      'Technology evolves through continuous, goal-driven experimentation. Currently, my research is focused on advancing the Aerospace System Research Initiative — developing RC planes and drone systems while bridging embedded hardware with autonomous software intelligence.',
    items: [
      {
        topic: 'ROS2 (Robot Operating System)',
        description:
          'Studying modular robotics middleware for node communications, sensor fusion, and real-time control.',
        badge: 'Robotics Framework',
        icon: 'Workflow',
      },
      {
        topic: 'PX4 Autopilot',
        description:
          'Exploring open-source flight control software for fixed-wing RC planes and multirotor drone navigation.',
        badge: 'Flight Control',
        icon: 'Plane',
      },
      {
        topic: 'TinyML & Edge AI',
        description:
          'Deploying lightweight neural networks directly onto microcontrollers for low-power edge inference.',
        badge: 'Embedded AI',
        icon: 'Cpu',
      },
      {
        topic: 'Computer Vision (OpenCV)',
        description:
          'Spatial AI, object detection, and visual navigation algorithms for aerial system orientation.',
        badge: 'Vision & Perception',
        icon: 'Eye',
      },
      {
        topic: 'Autonomous Flight Control',
        description:
          'Integrating telemetry data, GPS navigation, and PID tuning for self-stabilizing RC aircraft flight.',
        badge: 'Aerospace Initiative',
        icon: 'Compass',
      },
    ],
  },
};

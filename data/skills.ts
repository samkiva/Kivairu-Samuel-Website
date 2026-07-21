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
  contextEvidence?: string; // Specific project context/evidence
  icon: string;
  level: ExperienceLevel;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  featured?: boolean;
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
  sectionLabel: 'Capabilities & Stack',
  headline: 'Engineering Competencies & Hands-On Stack',
  subheadline:
    'A curated overview of technologies, engineering disciplines, and real-world project applications.',

  categories: [
    {
      id: 'embedded-aerospace',
      title: 'Embedded Systems & Aerospace',
      description: 'Programming hardware controllers, sensor buses, and flight electronics for research aircraft.',
      icon: 'Cpu',
      featured: true,
      skills: [
        {
          name: 'Microcontroller Programming (C/C++)',
          description: 'Writing low-level code for ESP32 and Arduino boards.',
          contextEvidence: 'Programming embedded controllers for aerospace research prototypes and telemetry systems.',
          icon: 'Cpu',
          level: 'Currently Using',
          featured: true,
        },
        {
          name: 'Hardware-Software Integration',
          description: 'Connecting physical sensors, radio receivers, and motor ESCs with control code.',
          contextEvidence: 'Interfacing flight hardware with real-time software logic for RC planes and drones.',
          icon: 'Radio',
          level: 'Currently Using',
          featured: true,
        },
        {
          name: 'Sensor Protocols (I2C / SPI / UART)',
          description: 'Low-level bus communication for hardware modules.',
          contextEvidence: 'Configuring telemetry sensors, IMUs, and GPS modules for aerial data collection.',
          icon: 'Workflow',
          level: 'Working Knowledge',
        },
      ],
    },
    {
      id: 'ai-data',
      title: 'AI & Data Engineering',
      description: 'Machine learning algorithms, data analysis, and predictive modeling.',
      icon: 'Brain',
      skills: [
        {
          name: 'Python',
          description: 'Primary language for AI development, data pipelines, and automation.',
          contextEvidence: 'Developing machine learning models and analytical pipelines.',
          icon: 'FileCode',
          level: 'Currently Using',
          featured: true,
        },
        {
          name: 'Machine Learning',
          description: 'Supervised classification, regression, and model evaluation.',
          contextEvidence: 'Applied in health analytics experimentation and predictive data modeling.',
          icon: 'Brain',
          level: 'Currently Using',
          featured: true,
        },
        {
          name: 'Data Analysis (Pandas / NumPy)',
          description: 'Exploratory data analysis, dataset cleaning, and transformation.',
          contextEvidence: 'Cleaning and visualizing complex data sets for decision making.',
          icon: 'BarChart3',
          level: 'Strong Experience',
        },
        {
          name: 'AI System Integration',
          description: 'Connecting machine learning models and API endpoints into full applications.',
          contextEvidence: 'Integrating AI APIs and intelligent features into modern software web applications.',
          icon: 'Bot',
          level: 'Currently Using',
        },
      ],
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Software Engineering',
      description: 'Building resilient web applications, component architecture, and API systems.',
      icon: 'Code2',
      skills: [
        {
          name: 'TypeScript & JavaScript',
          description: 'Type-safe frontend and backend application logic.',
          contextEvidence: 'Used to build high-performance web applications with zero technical debt.',
          icon: 'FileCode',
          level: 'Currently Using',
          featured: true,
        },
        {
          name: 'React.js & Next.js',
          description: 'Full-stack framework architecture using Server Components and SSR.',
          contextEvidence: 'Building production portfolios, dynamic user dashboards, and structured web apps.',
          icon: 'Globe',
          level: 'Currently Using',
          featured: true,
        },
        {
          name: 'Tailwind CSS & Design Systems',
          description: 'Utility-first CSS styling and token-driven design systems.',
          contextEvidence: 'Architecting custom glassmorphism design systems with responsive layouts.',
          icon: 'Palette',
          level: 'Currently Using',
        },
        {
          name: 'Node.js & Express',
          description: 'Asynchronous server logic and RESTful API endpoint routing.',
          contextEvidence: 'Building backend API services and managing server-client data flow.',
          icon: 'Server',
          level: 'Working Knowledge',
        },
      ],
    },
  ],

  dailyTools: [
    {
      name: 'VS Code',
      category: 'IDE',
      icon: 'FileCode',
      description: 'Primary editor configured for TypeScript, Python, and C/C++ development.',
    },
    {
      name: 'Git & GitHub',
      category: 'Version Control',
      icon: 'GitBranch',
      description: 'Source code management, feature branching, and pull request workflows.',
    },
    {
      name: 'Linux / Terminal',
      category: 'OS & CLI',
      icon: 'Terminal',
      description: 'Command line environment for build scripts, environment setup, and toolchains.',
    },
    {
      name: 'Arduino IDE / PlatformIO',
      category: 'Embedded Tooling',
      icon: 'Cpu',
      description: 'Flashing firmware to microcontrollers and inspecting serial telemetry output.',
    },
    {
      name: 'Postman',
      category: 'API Testing',
      icon: 'Globe',
      description: 'Inspecting HTTP payloads, testing REST endpoints, and verifying API contracts.',
    },
    {
      name: 'Figma',
      category: 'Design',
      icon: 'Palette',
      description: 'Wireframing layouts, prototyping UI components, and design token inspection.',
    },
  ],

  currentLearning: {
    title: 'Current Research & Learning',
    headline: 'Frontier Explorations in Aerospace & Embedded AI',
    paragraph:
      'Continuous learning is driven by solving real engineering problems. My current research focuses on the Aerospace System Research Initiative — building RC planes and drone systems while bridging embedded hardware with autonomous flight intelligence.',
    items: [
      {
        topic: 'ROS2 (Robot Operating System)',
        description:
          'Studying node communications and telemetry pub/sub architecture for autonomous robotics systems.',
        badge: 'Robotics Framework',
        icon: 'Workflow',
      },
      {
        topic: 'PX4 Autopilot',
        description:
          'Exploring flight control firmware for fixed-wing RC planes and multirotor drone navigation.',
        badge: 'Flight Control',
        icon: 'Plane',
      },
      {
        topic: 'TinyML & Edge AI',
        description:
          'Deploying lightweight neural network models directly onto microcontrollers for on-device inference.',
        badge: 'Embedded AI',
        icon: 'Cpu',
      },
      {
        topic: 'Computer Vision (OpenCV)',
        description:
          'Spatial perception and object tracking algorithms for aerial navigation assistance.',
        badge: 'Vision & Perception',
        icon: 'Eye',
      },
      {
        topic: 'Autonomous Flight Control',
        description:
          'PID tuning, sensor fusion, and GPS-guided waypoint navigation for self-stabilizing RC aircraft.',
        badge: 'Aerospace Initiative',
        icon: 'Compass',
      },
    ],
  },
};

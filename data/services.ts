export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  technologies: string[];
  projectScope: string;
  featured?: boolean;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ai-engineering',
    title: 'AI & Machine Learning Engineering',
    description:
      'Designing and deploying practical AI models, computer vision systems, predictive algorithms, and custom neural networks tailored for real-world application.',
    iconName: 'Brain',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-Learn', 'OpenCV', 'FastAPI'],
    projectScope: 'Custom ML pipelines, computer vision models, predictive analytics engines, and AI API integrations.',
    featured: true,
  },
  {
    id: 'fullstack-dev',
    title: 'Full-Stack Software Development',
    description:
      'Building modern, scalable web applications and platforms using Server-First architectures, clean TypeScript, React/Next.js, and robust backend microservices.',
    iconName: 'Code2',
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'REST/GraphQL'],
    projectScope: 'End-to-end web applications, SaaS MVPs, admin dashboards, and high-performance frontend interfaces.',
    featured: true,
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & Computational Statistics',
    description:
      'Leveraging statistical methodologies, probability modeling, and data visualization to uncover actionable insights and drive data-informed decision-making.',
    iconName: 'BarChart3',
    technologies: ['R', 'Python', 'Pandas', 'NumPy', 'Matplotlib/Seaborn', 'SQL'],
    projectScope: 'Exploratory data analysis, statistical modeling, automated data pipelines, and business intelligence dashboards.',
  },
  {
    id: 'embedded-systems',
    title: 'Embedded Systems & Hardware Systems',
    description:
      'Developing low-level firmware, sensor integrations, telemetry systems, and micro-controller software for autonomous systems and IoT hardware.',
    iconName: 'Cpu',
    technologies: ['C/C++', 'Arduino IDE / PlatformIO', 'ESP32', 'STM32', 'UART/SPI/I2C', 'Telemetry'],
    projectScope: 'Sensor fusion firmware, telemetry communication, custom micro-controller code, and hardware prototypes.',
    featured: true,
  },
  {
    id: 'systems-consulting',
    title: 'Technical Systems Architecture',
    description:
      'Providing engineering guidance on software system design, database architecture, AI integration roadmaps, and code quality audits.',
    iconName: 'Workflow',
    technologies: ['System Design', 'API Design', 'Database Schema', 'Git Workflow', 'CI/CD Pipelines'],
    projectScope: 'System architecture reviews, technical roadmap strategy, code refactoring audits, and stack selection.',
  },
  {
    id: 'research-collaboration',
    title: 'Research & Autonomous Systems',
    description:
      'Partnering with academic institutions, research labs, and engineering teams to research autonomous flight, edge AI, and control algorithms.',
    iconName: 'Radio',
    technologies: ['ROS2', 'PX4 Autopilot', 'TinyML', 'Edge AI', 'Flight Controller Firmware'],
    projectScope: 'Joint research initiatives, prototype testing, technical paper collaboration, and autonomous flight experiments.',
  },
];

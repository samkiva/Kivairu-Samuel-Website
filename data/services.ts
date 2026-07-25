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
      'I build AI systems that automate repetitive workflows, reduce operational costs, and help organizations make faster, data-driven decisions — from production-ready ML pipelines to computer vision models deployed at scale.',
    iconName: 'Brain',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-Learn', 'OpenCV', 'FastAPI'],
    projectScope: 'Custom ML pipelines, computer vision models, predictive analytics engines, and AI API integrations.',
    featured: true,
  },
  {
    id: 'fullstack-dev',
    title: 'Full-Stack Software Development',
    description:
      'I deliver fast, scalable web platforms that give your users a seamless experience and your team a codebase they can confidently maintain — built with server-first Next.js, clean TypeScript, and production-grade backend APIs.',
    iconName: 'Code2',
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'REST/GraphQL'],
    projectScope: 'End-to-end web applications, SaaS MVPs, admin dashboards, and high-performance frontend interfaces.',
    featured: true,
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & Computational Statistics',
    description:
      'I turn raw data into clear, actionable insights that reveal what is actually driving your business — using statistical modeling, probability analysis, and visual dashboards your stakeholders can act on immediately.',
    iconName: 'BarChart3',
    technologies: ['R', 'Python', 'Pandas', 'NumPy', 'Matplotlib/Seaborn', 'SQL'],
    projectScope: 'Exploratory data analysis, statistical modeling, automated data pipelines, and business intelligence dashboards.',
  },
  {
    id: 'embedded-systems',
    title: 'Embedded Systems & Hardware Engineering',
    description:
      'I write reliable, low-latency firmware that makes hardware behave exactly as intended — enabling autonomous systems, sensor networks, and IoT devices to operate in the real world without failure.',
    iconName: 'Cpu',
    technologies: ['C/C++', 'Arduino / PlatformIO', 'ESP32', 'STM32', 'UART/SPI/I2C', 'Telemetry'],
    projectScope: 'Sensor fusion firmware, telemetry communication, custom micro-controller code, and hardware prototypes.',
    featured: true,
  },
  {
    id: 'systems-consulting',
    title: 'Technical Systems Architecture',
    description:
      'I help engineering teams eliminate technical debt, avoid costly architecture mistakes, and build systems that scale — through hands-on design reviews, API audits, and strategic roadmap guidance.',
    iconName: 'Workflow',
    technologies: ['System Design', 'API Design', 'Database Schema', 'Git Workflow', 'CI/CD Pipelines'],
    projectScope: 'System architecture reviews, technical roadmap strategy, code refactoring audits, and stack selection.',
  },
  {
    id: 'research-collaboration',
    title: 'Research & Autonomous Systems',
    description:
      'I partner with research institutions and engineering teams to push autonomous flight, edge AI, and control systems from theory into tested, working prototypes — accelerating research timelines and bridging the lab-to-field gap.',
    iconName: 'Radio',
    technologies: ['ROS2', 'PX4 Autopilot', 'TinyML', 'Edge AI', 'Flight Controller Firmware'],
    projectScope: 'Joint research initiatives, prototype testing, technical paper collaboration, and autonomous flight experiments.',
  },
];

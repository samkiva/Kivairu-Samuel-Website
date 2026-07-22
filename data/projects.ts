// ─────────────────────────────────────────────
// data/projects.ts — Single source of truth for Featured Projects section
// ─────────────────────────────────────────────

export type ProjectStatus =
  | 'Production'
  | 'Research Prototype'
  | 'Currently Building'
  | 'Completed'
  | 'In Progress';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  category: 'AI & Machine Learning' | 'Aerospace & Embedded' | 'Full-Stack Software' | 'Data Analytics';
  problem: string;
  solution: string;
  engineeringChallenge: string;
  role: string;
  status: ProjectStatus;
  technologies: string[];
  highlights: string[];
  keyFeatures: string[];
  lessonsLearned: string[];
  futureImprovements: string[];
  githubUrl?: string;
  demoUrl?: string;
  docUrl?: string;
  thumbnail: string;
  featured: boolean;
}

export interface ProjectsData {
  sectionLabel: string;
  headline: string;
  subheadline: string;
  categories: string[];
  projects: Project[];
}

export const PROJECTS_DATA: ProjectsData = {
  sectionLabel: 'Case Studies & Code',
  headline: 'Featured Engineering Projects',
  subheadline:
    'A deep dive into systems I have designed, engineered, and researched — spanning AI, embedded hardware, and software architecture.',

  categories: [
    'All Projects',
    'AI & Machine Learning',
    'Aerospace & Embedded',
    'Full-Stack Software',
    'Data Analytics',
  ],

  projects: [
    {
      id: 'aerospace-initiative',
      title: 'Aerospace System Research Initiative',
      tagline: 'Autonomous Flight & RC Drone Hardware-Software Control Systems',
      shortDescription:
        'Developing fixed-wing RC planes and multirotor drone hardware integrated with real-time telemetry and flight control software for autonomous flight research.',
      category: 'Aerospace & Embedded',
      problem:
        'Small-scale research aircraft require low-latency sensor fusion and reliable telemetry links to transition between manual control and autonomous stabilization without heavy onboard computing power.',
      solution:
        'Engineered an embedded telemetry payload and customized flight control firmware interfacing ESP32/STM32 microcontrollers with real-time sensor modules (IMU, Barometer, GPS).',
      engineeringChallenge:
        'Managing high-frequency sensor interrupts and I2C bus noise under motor vibration while preserving microsecond-level motor ESC pulse timing.',
      role: 'Hardware & Systems Lead',
      status: 'Research Prototype',
      technologies: ['C/C++', 'ESP32 / STM32', 'PX4 Autopilot', 'ROS2', 'I2C/SPI/UART', 'Python'],
      highlights: [
        'Real-time telemetry link operating over sub-GHz radio transceiver',
        'Custom IMU sensor fusion algorithm for pitch/roll orientation',
        'Fail-safe loss-of-signal motor cutoff circuit design',
      ],
      keyFeatures: [
        'Live ground-station telemetry streaming via serial UART link',
        'Dual-battery power isolation for flight electronics and propulsion',
        'Autonomous waypoint heading guidance and PID altitude holding',
      ],
      lessonsLearned: [
        'Vibration dampening and hardware decoupling are as crucial as control loop mathematics in real aircraft.',
        'Low-level bus communication (I2C/SPI) requires strict error-handling timeouts to prevent microcontroller lockup during flight.',
      ],
      futureImprovements: [
        'Integrate optical flow sensors for indoor precision hovering without GPS.',
        'Implement onboard TinyML neural network for real-time obstacle avoidance.',
      ],
      githubUrl: 'https://github.com/samkiva',
      docUrl: '#',
      thumbnail: '/images/projects/aerospace-research.svg',
      featured: true,
    },
    {
      id: 'disease-prediction-ai',
      title: 'Disease Prediction & Forecasting AI',
      tagline: 'Predictive Healthcare Machine Learning Pipeline',
      shortDescription:
        'A data-driven machine learning system built to predict disease onset and risk factors using statistical modeling and clinical data parameters.',
      category: 'AI & Machine Learning',
      problem:
        'Early detection of chronic disease indicators is often delayed due to fragmented diagnostic data and lack of automated risk-scoring models.',
      solution:
        'Architected an end-to-end Python pipeline that preprocesses clinical datasets, performs feature extraction, and trains supervised classification models (Random Forest, XGBoost).',
      engineeringChallenge:
        'Handling severe class imbalance in clinical diagnostic data while maintaining high recall to prevent false negatives in risk detection.',
      role: 'AI Engineer & Data Specialist',
      status: 'Completed',
      technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'FastAPI', 'React.js'],
      highlights: [
        'Achieved 94.2% ROC-AUC score on diagnostic validation benchmarks',
        'Built automated SMOTE oversampling for imbalanced patient cohorts',
        'REST API backend serving predictions with sub-50ms inference latency',
      ],
      keyFeatures: [
        'Interactive patient metric inputs with real-time risk percentage scoring',
        'SHAP feature importance visualization explaining model decision drivers',
        'CSV batch processing for bulk clinical record analysis',
      ],
      lessonsLearned: [
        'Model interpretability (SHAP/LIME) is mandatory in medical domains to build trust with practitioners.',
        'Data cleaning and feature scaling account for 80% of model predictive performance.',
      ],
      futureImprovements: [
        'Incorporate longitudinal patient time-series data using LSTM neural networks.',
        'Deploy API to containerized cloud instance with automated monitoring.',
      ],
      githubUrl: 'https://github.com/samkiva',
      demoUrl: '#',
      thumbnail: '/images/projects/disease-prediction.svg',
      featured: true,
    },
    {
      id: 'agrinova-ai',
      title: 'AgriNova AI Platform',
      tagline: 'Smart Agricultural Yield Optimization & Crop Health Intelligence',
      shortDescription:
        'An AI-powered agricultural intelligence platform delivering crop health insights, soil metric analytics, and yield forecasting for farmers.',
      category: 'AI & Machine Learning',
      problem:
        'Smallholder farmers lack accessible, real-time diagnostic tools to detect crop diseases and optimize fertilizer usage based on soil composition.',
      solution:
        'Designed AgriNova AI — combining computer vision for leaf disease identification with soil sensor analytics to provide actionable farming guidance.',
      engineeringChallenge:
        'Compressing vision model weights to enable fast image inference on low-bandwidth mobile network connections.',
      role: 'Full-Stack & AI Developer',
      status: 'Currently Building',
      technologies: ['Python', 'TensorFlow', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Docker'],
      highlights: [
        'Multi-class CNN model categorizing 15+ plant leaf pathologies',
        'Responsive full-stack dashboard with dark/light glassmorphic UI',
        'Localized weather and soil moisture predictive analytics',
      ],
      keyFeatures: [
        'Photo drag-and-drop crop disease diagnostic scanner',
        'Soil N-P-K recommendation engine based on optimal crop profiles',
        'Historical yield tracking dashboard with graphical analytics',
      ],
      lessonsLearned: [
        'Building for low-bandwidth environments requires aggressive asset optimization and offline-first PWA caching.',
        'User interface simplicity is critical when domain non-experts use technical AI tools.',
      ],
      futureImprovements: [
        'Add satellite multispectral imagery integration for macro-field health monitoring.',
        'Implement offline mobile app compilation using React Native.',
      ],
      githubUrl: 'https://github.com/samkiva',
      demoUrl: '#',
      thumbnail: '/images/projects/agrinova-ai.svg',
      featured: true,
    },
    {
      id: 'portfolio-website',
      title: 'Kivairu Samuel Portfolio Platform',
      tagline: 'Production-Grade Engineering Showcase & Design System',
      shortDescription:
        'A modern, high-performance personal portfolio built with Next.js 16 App Router, Tailwind v4, and centralized Framer Motion architecture.',
      category: 'Full-Stack Software',
      problem:
        'Generic template portfolios fail to communicate true engineering rigor, performance optimization, accessibility standards, and clean architecture.',
      solution:
        'Built a custom, token-driven web application featuring zero technical debt, 100% static prerendering, zero layout shifts, and full WCAG accessibility.',
      engineeringChallenge:
        'Enforcing strict separation between data layers and RSC layout components while maintaining dynamic animations and theme toggling.',
      role: 'Sole Architect & Developer',
      status: 'Production',
      technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'React Server Components'],
      highlights: [
        '100/100 Lighthouse performance score across all pages',
        'Custom centralized animation system with reduced motion compliance',
        'Eye-friendly Apple-inspired light mode and glassmorphism dark theme',
      ],
      keyFeatures: [
        'Interactive profile avatar popover with smooth glass backdrop',
        'Capability-filtered skills showcase with evidence-backed cards',
        'Modular Case Study modal dialog with full architectural detail',
      ],
      lessonsLearned: [
        'Centralizing animation variants in motion libraries prevents component clutter and guarantees consistency.',
        'Decoupling content into strongly typed data schemas makes future updates effortless.',
      ],
      futureImprovements: [
        'Add interactive 3D WebGL aerospace model viewer.',
        'Integrate MDX blog engine for technical engineering articles.',
      ],
      githubUrl: 'https://github.com/samkiva/Kivairu-Samuel-Website',
      demoUrl: 'https://kivairusamuel.com',
      thumbnail: '/images/projects/portfolio-website.svg',
      featured: true,
    },
    {
      id: 'healthcare-analytics',
      title: 'Healthcare Data Analytics Platform',
      tagline: 'Clinical Outcomes & Resource Utilization Analytical Engine',
      shortDescription:
        'A comprehensive data analysis platform processing clinical metrics, patient treatment timelines, and operational health metrics.',
      category: 'Data Analytics',
      problem:
        'Healthcare administrators struggle to extract actionable operational trends from sprawling raw hospital admission records.',
      solution:
        'Engineered an analytical pipeline that cleans raw medical logs, computes statistical distributions, and renders interactive analytical visualizations.',
      engineeringChallenge:
        'Processing 100,000+ patient records efficiently without blocking UI thread rendering or suffering memory bottlenecks.',
      role: 'Data Analyst & Full-Stack Developer',
      status: 'Completed',
      technologies: ['Python', 'Pandas', 'SQL', 'Recharts', 'TypeScript', 'Next.js'],
      highlights: [
        'Optimized Pandas vectorization reducing data processing time by 75%',
        'Custom interactive Chart.js/Recharts data dashboards',
        'Statistical correlation matrix for length-of-stay drivers',
      ],
      keyFeatures: [
        'Cohort segmentation by age, diagnosis, and admission priority',
        'Interactive resource utilization heatmap (ICU bed occupancy)',
        'Exportable CSV and PDF summary report generation',
      ],
      lessonsLearned: [
        'Vectorized Pandas operations outperform manual iteration by orders of magnitude on large datasets.',
        'Effective data visualization requires removing chart junk so insights jump out immediately.',
      ],
      futureImprovements: [
        'Connect directly to live HL7 / FHIR healthcare API streams.',
        'Automate weekly anomaly detection alerts for occupancy spikes.',
      ],
      githubUrl: 'https://github.com/samkiva',
      docUrl: '#',
      thumbnail: '/images/projects/healthcare-analytics.svg',
      featured: false,
    },
    {
      id: 'flight-controller-firmware',
      title: 'Autonomous Flight Controller Firmware',
      tagline: 'Real-Time Embedded C++ PID Control Loop for Aerial Guidance',
      shortDescription:
        'Custom bare-metal embedded C++ firmware implementing PID control loops, gyro calibration, and telemetry broadcasting on microcontrollers.',
      category: 'Aerospace & Embedded',
      problem:
        'Off-the-shelf flight controllers hide internal control loop dynamics, preventing custom experimental guidance algorithm testing.',
      solution:
        'Wrote a modular embedded C++ firmware running a 500Hz loop — reading MPU6050 IMU sensors, computing PID corrections, and updating PWM servo signals.',
      engineeringChallenge:
        'Executing sensor read, Kalman filtering, PID calculations, and PWM output within a strict 2ms loop execution budget.',
      role: 'Embedded Firmware Developer',
      status: 'In Progress',
      technologies: ['C/C++', 'Arduino IDE / PlatformIO', 'Microcontrollers', 'PWM Control', 'Serial Comms'],
      highlights: [
        '500Hz deterministic real-time control loop frequency',
        'Software I2C recovery routine preventing gyro bus lockup',
        'Custom telemetry packet serializer for wireless debugging',
      ],
      keyFeatures: [
        'Auto-zeroing gyro calibration on startup sequence',
        'Configurable PID gain parameters via serial command terminal',
        'Emergency disarm safety switch input',
      ],
      lessonsLearned: [
        'Floating point calculations on low-cost microcontrollers must be minimized to avoid timing overruns.',
        'Serial debugging prints can introduce hidden latencies that break real-time control loops.',
      ],
      futureImprovements: [
        'Port codebase to FreeRTOS for multi-tasking task scheduling.',
        'Add barometric altitude hold control loop.',
      ],
      githubUrl: 'https://github.com/samkiva',
      docUrl: '#',
      thumbnail: '/images/projects/flight-controller.svg',
      featured: false,
    },
  ],
};

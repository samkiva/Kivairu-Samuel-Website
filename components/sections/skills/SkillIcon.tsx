import * as React from 'react';
import {
  Code2,
  FileCode,
  Cpu,
  Layout,
  Database,
  Component,
  Globe,
  Palette,
  Zap,
  Brain,
  BarChart3,
  LineChart,
  Bot,
  Radio,
  Workflow,
  Server,
  Cloud,
  GitBranch,
  Terminal,
  Plane,
  Eye,
  Compass,
  Wrench,
  LucideProps,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Code2,
  FileCode,
  Cpu,
  Layout,
  Database,
  Component,
  Globe,
  Palette,
  Zap,
  Brain,
  BarChart3,
  LineChart,
  Bot,
  Radio,
  Workflow,
  Server,
  Cloud,
  GitBranch,
  Terminal,
  Plane,
  Eye,
  Compass,
  Wrench,
};

export interface SkillIconProps extends LucideProps {
  name: string;
}

export const SkillIcon = ({ name, className = 'w-5 h-5', ...props }: SkillIconProps) => {
  const IconComponent = iconMap[name] || Code2;
  return <IconComponent className={className} aria-hidden="true" {...props} />;
};

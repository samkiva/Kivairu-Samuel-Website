import * as React from 'react';
import {
  Bot, Code2, LineChart, BookOpen, Lightbulb, GitMerge
} from 'lucide-react';
import { SlideUp } from '@/components/animations';
import { AboutHighlight } from '@/data/about';

const iconMap: Record<string, React.ReactNode> = {
  Bot: <Bot className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  LineChart: <LineChart className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
  Lightbulb: <Lightbulb className="w-6 h-6" />,
  GitMerge: <GitMerge className="w-6 h-6" />,
};

interface AboutHighlightsProps {
  highlights: AboutHighlight[];
}

export const AboutHighlights = ({ highlights }: AboutHighlightsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {highlights.map((item, index) => (
        <SlideUp key={item.title} delay={index * 0.07}>
          <div className="flex items-start gap-4 p-5 rounded-xl border border-border bg-muted/30 hover:bg-muted/60 transition-colors group">
            <div
              className="p-2.5 rounded-lg bg-background border border-border text-primary shrink-0 group-hover:border-primary/30 transition-colors"
              aria-hidden="true"
            >
              {iconMap[item.icon]}
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-semibold text-sm">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </SlideUp>
      ))}
    </div>
  );
};

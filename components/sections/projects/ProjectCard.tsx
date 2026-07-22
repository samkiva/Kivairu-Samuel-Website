import * as React from 'react';
import Image from 'next/image';
import { GlassCard } from '@/components/ui';
import { buttonVariants } from '@/components/ui/Button';
import { HoverLift } from '@/components/animations';
import { Project } from '@/data/projects';
import { ProjectStatusBadge } from './ProjectStatusBadge';
import { ProjectTechStack } from './ProjectTechStack';
import { ProjectHighlights } from './ProjectHighlights';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard = ({ project, onOpenModal }: ProjectCardProps) => {
  return (
    <HoverLift className="h-full">
      <GlassCard
        className={cn(
          'h-full p-6 rounded-2xl flex flex-col justify-between gap-5 transition-all duration-200 border-white/5 hover:border-primary/30 group',
          project.featured && 'bg-muted/20 border-primary/15'
        )}
      >
        <div className="flex flex-col gap-4">
          {/* Card Image Banner */}
          <div className="relative w-full h-44 rounded-xl overflow-hidden bg-muted/40 border border-border/50">
            <Image
              src={project.thumbnail}
              alt={`${project.title} project preview`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute top-3 left-3 z-10">
              <ProjectStatusBadge status={project.status} />
            </div>
          </div>

          {/* Title & Tagline */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors tracking-tight">
                {project.title}
              </h3>
            </div>
            <p className="text-xs font-medium text-primary/90">
              {project.tagline}
            </p>
          </div>

          {/* Short Summary */}
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Technical Highlights */}
          <div className="pt-2 border-t border-border/40">
            <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground/70 mb-2">
              Key Highlights
            </p>
            <ProjectHighlights highlights={project.highlights.slice(0, 2)} />
          </div>

          {/* Tech Stack Chips */}
          <div className="pt-1">
            <ProjectTechStack technologies={project.technologies} maxDisplay={4} />
          </div>
        </div>

        {/* Card Footer CTAs */}
        <div className="pt-4 border-t border-border/40 flex items-center justify-between gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => onOpenModal(project)}
            className={cn(buttonVariants({ variant: 'primary', size: 'sm' }), 'text-xs gap-1.5')}
          >
            View Case Study
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>

          <div className="flex items-center gap-1.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'sm' }),
                  'p-2 h-8 w-8 text-muted-foreground hover:text-foreground'
                )}
                aria-label={`View ${project.title} on GitHub`}
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.demoUrl && project.demoUrl !== '#' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'sm' }),
                  'p-2 h-8 w-8 text-muted-foreground hover:text-foreground'
                )}
                aria-label={`View live demo for ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </GlassCard>
    </HoverLift>
  );
};

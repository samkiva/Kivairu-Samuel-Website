'use client';

import * as React from 'react';
import { useEffect } from 'react';
import Image from 'next/image';
import { Project } from '@/data/projects';
import { ProjectStatusBadge } from './ProjectStatusBadge';
import { ProjectTechStack } from './ProjectTechStack';
import { GlassCard } from '@/components/ui';
import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import {
  X,
  ExternalLink,
  BookOpen,
  AlertTriangle,
  Lightbulb,
  CheckSquare,
  Sparkles,
  User,
} from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  // ESC key handler & body overflow lock
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-background/80 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <GlassCard
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 md:p-8 rounded-3xl border-primary/20 bg-background/95 shadow-2xl my-auto no-scrollbar flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Close case study modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col gap-3 pr-8">
          <div className="flex items-center gap-3 flex-wrap">
            <ProjectStatusBadge status={project.status} />
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground/80 bg-muted/40 px-2.5 py-0.5 rounded border border-border/40">
              {project.category}
            </span>
          </div>

          <h2 id="modal-project-title" className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            {project.title}
          </h2>

          <p className="text-sm font-medium text-primary">
            {project.tagline}
          </p>
        </div>

        {/* Project Image Banner */}
        <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden border border-border/50 bg-muted/30">
          <Image
            src={project.thumbnail}
            alt={`${project.title} project showcase graphic`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        {/* Role & Tech Stack */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-muted/30 border border-border/40">
          <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
            <User className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
            <div>
              <span className="font-semibold text-foreground block">My Role:</span>
              {project.role}
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold text-foreground block mb-1">Technologies Used:</span>
            <ProjectTechStack technologies={project.technologies} />
          </div>
        </div>

        {/* Problem & Solution */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-base font-bold text-foreground flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" aria-hidden="true" />
              The Problem & Engineering Challenge
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              {project.problem}
            </p>
            <p className="text-xs text-muted-foreground/90 font-mono bg-amber-500/5 p-3 rounded-lg border border-amber-500/20 mt-1">
              <strong>Core Challenge:</strong> {project.engineeringChallenge}
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <h3 className="text-base font-bold text-foreground flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
              The Architectural Solution
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
            <CheckSquare className="w-4 h-4 text-emerald-500" aria-hidden="true" />
            Key System Features
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
            {project.keyFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-2 p-2 rounded-lg bg-background border border-border/40">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Lessons Learned & Future Improvements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
              Lessons Learned
            </h3>
            <ul className="flex flex-col gap-1.5 text-xs text-muted-foreground">
              {project.lessonsLearned.map((lesson) => (
                <li key={lesson} className="leading-relaxed">
                  • {lesson}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
              Future Roadmap
            </h3>
            <ul className="flex flex-col gap-1.5 text-xs text-muted-foreground">
              {project.futureImprovements.map((improvement) => (
                <li key={improvement} className="leading-relaxed">
                  • {improvement}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-4 border-t border-border flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'gap-2')}
              >
                <GithubIcon className="w-4 h-4" />
                GitHub Repository
              </a>
            )}
            {project.demoUrl && project.demoUrl !== '#' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: 'primary', size: 'sm' }), 'gap-2')}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }))}
          >
            Close
          </button>
        </div>
      </GlassCard>
    </div>
  );
};

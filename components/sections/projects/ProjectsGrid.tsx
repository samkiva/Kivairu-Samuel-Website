'use client';

import * as React from 'react';
import { useState } from 'react';
import { SlideUp } from '@/components/animations';
import { PROJECTS_DATA, Project } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { cn } from '@/utils/cn';

export const ProjectsGrid = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All Projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = PROJECTS_DATA.categories;
  const allProjects = PROJECTS_DATA.projects;

  const filteredProjects =
    activeCategory === 'All Projects'
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory);

  return (
    <div className="flex flex-col gap-10">
      {/* Category Filter Tabs */}
      <SlideUp delay={0.2} className="flex justify-center">
        <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-muted/40 border border-border overflow-x-auto max-w-full no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-4 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary/50',
                activeCategory === category
                  ? 'bg-background text-foreground shadow-sm border border-border/50'
                  : 'text-muted-foreground hover:text-foreground hover:bg-background/40'
              )}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
      </SlideUp>

      {/* Projects Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project, index) => (
          <SlideUp key={project.id} delay={index * 0.08}>
            <ProjectCard project={project} onOpenModal={setSelectedProject} />
          </SlideUp>
        ))}
      </div>

      {/* Case Study Detailed Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

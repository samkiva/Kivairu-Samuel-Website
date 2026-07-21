'use client';

import * as React from 'react';
import { useState } from 'react';
import { SlideUp } from '@/components/animations';
import { SKILLS_DATA, SkillCategory } from '@/data/skills';
import { SkillCard } from './SkillCard';
import { SkillIcon } from './SkillIcon';
import { cn } from '@/utils/cn';

export const SkillsCategories = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = SKILLS_DATA.categories;

  const filteredCategories: SkillCategory[] =
    activeCategory === 'all'
      ? categories
      : categories.filter((cat) => cat.id === activeCategory);

  return (
    <div className="flex flex-col gap-10">
      {/* Category Filter Tabs */}
      <SlideUp delay={0.2} className="flex justify-center">
        <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-muted/40 border border-border overflow-x-auto max-w-full no-scrollbar">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={cn(
              'px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary/50',
              activeCategory === 'all'
                ? 'bg-background text-foreground shadow-sm border border-border/50'
                : 'text-muted-foreground hover:text-foreground hover:bg-background/40'
            )}
            aria-pressed={activeCategory === 'all'}
          >
            All Capabilities
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                'flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary/50',
                activeCategory === cat.id
                  ? 'bg-background text-foreground shadow-sm border border-border/50'
                  : 'text-muted-foreground hover:text-foreground hover:bg-background/40'
              )}
              aria-pressed={activeCategory === cat.id}
            >
              <SkillIcon name={cat.icon} className="w-3.5 h-3.5" />
              {cat.title}
            </button>
          ))}
        </div>
      </SlideUp>

      {/* Category Grids */}
      <div className="flex flex-col gap-12">
        {filteredCategories.map((category, catIndex) => (
          <div key={category.id} className="flex flex-col gap-5">
            {/* Category Header */}
            <div className="flex items-center justify-between gap-3 pb-2 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div
                  className="p-2 rounded-lg bg-primary/10 text-primary shrink-0"
                  aria-hidden="true"
                >
                  <SkillIcon name={category.icon} className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-bold text-foreground tracking-tight">
                      {category.title}
                    </h3>
                    {category.featured && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                        Featured Differentiator
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {category.skills.map((skill, skillIndex) => (
                <SlideUp
                  key={skill.name}
                  delay={catIndex * 0.05 + skillIndex * 0.04}
                >
                  <SkillCard skill={skill} />
                </SlideUp>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

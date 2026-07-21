'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Drawer, IconButton, Logo } from '@/components/ui';
import { MAIN_NAVIGATION } from '@/config/navigation';
import { SOCIAL_LINKS } from '@/config/socials';
import { cn } from '@/utils/cn';

export const MobileNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="md:hidden">
      <IconButton
        variant="ghost"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        aria-expanded={isOpen}
        icon={<Menu className="h-5 w-5" />}
      />

      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position="right"
        className="w-[85vw] max-w-sm"
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b">
            <Logo onClick={() => setIsOpen(false)} />
          </div>
          
          <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
            {MAIN_NAVIGATION.map((item) => {
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg font-medium py-2 px-4 rounded-md transition-colors',
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                  )}
                  {...(item.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          <div className="p-6 border-t mt-auto">
            <div className="flex flex-col gap-4">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

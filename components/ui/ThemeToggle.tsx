'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { IconButton } from './IconButton';
import { Tooltip } from './Tooltip';
import { useMounted } from '@/hooks/useMounted';

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div className="h-10 w-10 animate-pulse rounded-full bg-muted" />
    );
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Tooltip content={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}>
      <IconButton
        variant="ghost"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="relative overflow-hidden"
        icon={
          <>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </>
        }
      />
    </Tooltip>
  );
};

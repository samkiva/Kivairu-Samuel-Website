import * as React from 'react';
import Link from 'next/link';
import { Logo, Typography } from '@/components/ui';
import { MAIN_NAVIGATION, FOOTER_NAVIGATION } from '@/config/navigation';
import { SOCIAL_LINKS } from '@/config/socials';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background/50 backdrop-blur-sm py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          <div className="md:col-span-2 space-y-4">
            <Logo />
            <Typography variant="body" className="text-muted-foreground max-w-sm">
              Building premium, scalable, and highly aesthetic digital experiences using modern web technologies.
            </Typography>
            <div className="flex items-center gap-4 mt-6">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <Typography variant="h4" className="text-sm font-semibold tracking-wider uppercase text-foreground">
              Navigation
            </Typography>
            <nav className="flex flex-col gap-3">
              {MAIN_NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <Typography variant="h4" className="text-sm font-semibold tracking-wider uppercase text-foreground">
              Legal
            </Typography>
            <nav className="flex flex-col gap-3">
              {FOOTER_NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 border-t border-border/50 gap-4">
          <Typography variant="small" className="text-muted-foreground text-center md:text-left">
            © {currentYear} Kivairu Samuel. All rights reserved.
          </Typography>
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
            </span>
            <Typography variant="small" className="text-muted-foreground font-medium">
              Available for new opportunities
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

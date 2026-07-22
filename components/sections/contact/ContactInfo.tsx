import * as React from 'react';
import { GlassCard } from '@/components/ui';
import { Mail, MapPin, Clock, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { CONTACT_DATA } from '@/data/contact';

export const ContactInfo = () => {
  return (
    <GlassCard className="p-8 rounded-3xl border-white/10 dark:border-white/5 space-y-6 flex flex-col justify-between bg-background/60">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            Contact Information
          </h3>
          <p className="text-xs text-muted-foreground mt-1">
            Direct communication channels for engineering inquiries and collaborations.
          </p>
        </div>

        <div className="space-y-4 text-sm">
          {/* Direct Email */}
          <a
            href={`mailto:${CONTACT_DATA.email}`}
            className="flex items-start gap-3.5 p-3 rounded-2xl bg-muted/20 border border-border/30 hover:border-primary/40 hover:bg-primary/5 transition-all group"
          >
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary mt-0.5">
              <Mail className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[11px] uppercase font-semibold text-muted-foreground tracking-wider block">
                Direct Email
              </span>
              <span className="font-mono text-xs md:text-sm text-foreground group-hover:text-primary transition-colors truncate block">
                {CONTACT_DATA.email}
              </span>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-muted/20 border border-border/30">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] uppercase font-semibold text-muted-foreground tracking-wider block">
                Location
              </span>
              <span className="text-sm font-medium text-foreground">
                {CONTACT_DATA.location}
              </span>
            </div>
          </div>

          {/* Response Time */}
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-muted/20 border border-border/30">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] uppercase font-semibold text-muted-foreground tracking-wider block">
                Expected Response
              </span>
              <span className="text-xs text-foreground font-medium">
                {CONTACT_DATA.responseTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Social profiles & links */}
      <div className="pt-6 border-t border-border/40 space-y-3">
        <span className="text-xs font-semibold text-foreground uppercase tracking-wider block">
          Connect Online
        </span>
        <div className="grid grid-cols-2 gap-3">
          <a
            href={CONTACT_DATA.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-xl bg-muted/30 border border-border/30 hover:border-primary/40 text-xs font-medium text-foreground hover:text-primary transition-all group"
          >
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href={CONTACT_DATA.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-xl bg-muted/30 border border-border/30 hover:border-primary/40 text-xs font-medium text-foreground hover:text-primary transition-all group"
          >
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-accent" />
              <span>LinkedIn</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </GlassCard>
  );
};

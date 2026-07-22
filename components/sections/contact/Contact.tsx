import * as React from 'react';
import { Section, Container } from '@/components/layout';
import { SectionHeading, SectionDescription } from '@/components/layout';
import { GlassCard } from '@/components/ui';
import { Badge } from '@/components/ui/Badge';
import { buttonVariants } from '@/components/ui/Button';
import { Mail, MessageSquare, MapPin, Send } from 'lucide-react';
import { cn } from '@/utils/cn';

export const Contact = () => {
  return (
    <Section id="contact" className="relative overflow-hidden">
      <Container>
        <div className="text-center mb-12 flex flex-col items-center gap-3">
          <Badge variant="outline" className="w-fit">Get In Touch</Badge>
          <SectionHeading>Let&apos;s Build Something Together</SectionHeading>
          <SectionDescription className="max-w-2xl mx-auto">
            Whether you have a research inquiry, full-stack project, or AI initiative, my inbox is always open.
          </SectionDescription>
        </div>

        <GlassCard className="max-w-3xl mx-auto p-8 md:p-12 rounded-3xl border-primary/20 bg-background/80 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold text-foreground">Contact Information</h3>
              <div className="flex flex-col gap-4 text-sm text-muted-foreground">
                <a href="mailto:samuelkivairu@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary"><Mail className="w-4 h-4" /></div>
                  <span>samuelkivairu@gmail.com</span>
                </a>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary"><MapPin className="w-4 h-4" /></div>
                  <span>Nairobi, Kenya</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary"><MessageSquare className="w-4 h-4" /></div>
                  <span>Open to Collaborations</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center text-center p-6 rounded-2xl bg-muted/30 border border-border/40">
              <h4 className="font-semibold text-base text-foreground">Direct Email</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Reach out directly for AI development, software engineering, or aerospace research inquiries.
              </p>
              <a
                href="mailto:samuelkivairu@gmail.com"
                className={cn(buttonVariants({ variant: 'primary', size: 'md' }), 'w-full gap-2 mt-2')}
              >
                <Send className="w-4 h-4" />
                Send Email
              </a>
            </div>
          </div>
        </GlassCard>
      </Container>
    </Section>
  );
};

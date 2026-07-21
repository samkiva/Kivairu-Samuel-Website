'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { useMounted } from '@/hooks/useMounted';
import { ArrowRight, Check, Info } from 'lucide-react';
import { 
  Container, SectionHeading, SectionDescription 
} from '@/components/layout';
import { 
  Button, IconButton, Card, GlassCard, Badge, Chip, Tag, Input, Textarea, 
  Label, Divider, Tooltip, Modal, Drawer, Toast, 
  EmptyState, ErrorState, SuccessState, Typography, LoadingSpinner, LoadingDots, Skeleton 
} from '@/components/ui';
import { 
  FadeIn, SlideUp, SlideLeft, SlideRight, ScaleIn, HoverScale, HoverLift, Floating, Reveal 
} from '@/components/animations';
import { toast } from 'sonner';

export default function DesignSystemShowcase() {
  const { setTheme } = useTheme();
  const mounted = useMounted();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Theme Switcher Sticky Header */}
      <div className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md p-4 flex justify-between items-center">
        <Typography variant="h4">Kivairu Samuel Design System</Typography>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setTheme('light')}>Light</Button>
          <Button variant="outline" size="sm" onClick={() => setTheme('dark')}>Dark</Button>
          <Button variant="outline" size="sm" onClick={() => setTheme('system')}>System</Button>
        </div>
      </div>

      <Container className="mt-12 space-y-24">
        
        {/* Buttons */}
        <section className="space-y-6">
          <SectionHeading>Buttons</SectionHeading>
          <SectionDescription>All supported variants and sizes for interactive actions.</SectionDescription>
          
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="gradient">Gradient</Button>
            <div className="p-4 bg-muted/50 rounded-lg"><Button variant="glass">Glass</Button></div>
            <Button variant="link">Link Button</Button>
          </div>

          <div className="flex flex-wrap gap-4 items-center mt-6">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>

          <div className="flex flex-wrap gap-4 items-center mt-6">
            <Button isLoading>Loading</Button>
            <Button leftIcon={<Check size={16} />}>Left Icon</Button>
            <Button rightIcon={<ArrowRight size={16} />}>Right Icon</Button>
            <Button disabled>Disabled</Button>
            <IconButton icon={<Info size={18} />} aria-label="Info" />
          </div>
        </section>

        <Divider />

        {/* Typography */}
        <section className="space-y-6">
          <SectionHeading>Typography</SectionHeading>
          <SectionDescription>Text styles inherited from Inter standard definitions.</SectionDescription>
          
          <div className="space-y-4">
            <Typography variant="display">A highly polished design language for &quot;Kivairu Samuel&quot;.</Typography>
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h4">Heading 4</Typography>
            <Typography variant="bodyLarge">Body Large - Recommended for introductions.</Typography>
            <Typography variant="body">Body - Standard paragraph text. Readability prioritized.</Typography>
            <Typography variant="muted">Muted - Subtle helper text.</Typography>
            <Typography variant="small">Small - Dense UI elements.</Typography>
            <Typography variant="caption">Caption - Tiniest legal or meta text.</Typography>
            <Typography variant="gradient">Gradient Typography</Typography>
            <Typography variant="monospace">console.log(&quot;Monospace code snippet&quot;);</Typography>
          </div>
        </section>

        <Divider />

        {/* Cards */}
        <section className="space-y-6">
          <SectionHeading>Cards</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <div className="p-6">
                <Typography variant="h4">Standard Card</Typography>
                <Typography variant="muted" className="mt-2">Basic border and background.</Typography>
              </div>
            </Card>

            <Card variant="interactive">
              <div className="p-6">
                <Typography variant="h4">Interactive Card</Typography>
                <Typography variant="muted" className="mt-2">Hover effects and scale on active.</Typography>
              </div>
            </Card>

            <Card variant="gradientBorder">
              <div className="p-6">
                <Typography variant="h4">Gradient Border</Typography>
                <Typography variant="muted" className="mt-2">Premium aesthetic for featured content.</Typography>
              </div>
            </Card>

            <div className="p-6 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl relative">
              <GlassCard>
                <div className="p-6">
                  <Typography variant="h4" className="text-white">Glass Card</Typography>
                  <Typography variant="muted" className="mt-2 text-white/80">Frosted blur effect.</Typography>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        <Divider />

        {/* Forms */}
        <section className="space-y-6">
          <SectionHeading>Forms</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label htmlFor="default">Default Input</Label>
              <Input id="default" placeholder="Enter your text..." />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="error" error>Error State</Label>
              <Input id="error" error placeholder="Failed input..." />
            </div>

            <div className="space-y-2">
              <Label htmlFor="disabled">Disabled State</Label>
              <Input id="disabled" disabled placeholder="Cannot type here" />
            </div>

            <div className="space-y-2 col-span-1 md:col-span-2">
              <Label htmlFor="message">Textarea</Label>
              <Textarea id="message" placeholder="Type your message here..." />
            </div>
          </div>
        </section>

        <Divider />

        {/* Tags & Badges */}
        <section className="space-y-6">
          <SectionHeading>Badges & Chips</SectionHeading>
          
          <div className="flex gap-4">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>

          <div className="flex gap-4">
            <Chip>Default Chip</Chip>
            <Chip variant="active">Active Chip</Chip>
            <Chip variant="outline" icon={<Check size={14} />}>With Icon</Chip>
          </div>

          <div className="flex gap-4">
            <Tag>React</Tag>
            <Tag variant="primary">Next.js</Tag>
            <Tag variant="outline">Tailwind</Tag>
          </div>
        </section>

        <Divider />

        {/* Feedback States */}
        <section className="space-y-6">
          <SectionHeading>Feedback States</SectionHeading>
          
          <div className="flex gap-8 items-center mb-8">
            <LoadingSpinner size={32} />
            <LoadingDots />
          </div>

          <div className="space-y-4 mb-8">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-10 w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <EmptyState title="No Projects Found" description="Try adjusting your filters." />
            <ErrorState title="Failed to Load" message="Connection timed out." />
            <SuccessState title="Message Sent" message="We'll be in touch soon!" />
          </div>
        </section>

        <Divider />

        {/* Overlays */}
        <section className="space-y-6">
          <SectionHeading>Overlays</SectionHeading>
          
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
            <Button onClick={() => setDrawerOpen(true)} variant="secondary">Open Drawer</Button>
            
            <Tooltip content="This is an accessible tooltip" position="top">
              <Button variant="outline">Hover for Tooltip</Button>
            </Tooltip>

            <Button variant="gradient" onClick={() => toast.success('This is a highly polished toast notification!')}>Trigger Toast</Button>
          </div>

          {/* Hidden Overlay Elements */}
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="System Configured">
            <Typography variant="body" className="mb-4">The design system modal is rendering correctly with proper focus trapping.</Typography>
            <Button onClick={() => setModalOpen(false)} className="w-full">Confirm</Button>
          </Modal>

          <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} position="right">
            <Typography variant="h3" className="mb-4">Drawer Content</Typography>
            <Typography variant="body">Slide in from the right gracefully.</Typography>
          </Drawer>
          
          <Toast />
        </section>

        <Divider />

        {/* Animations */}
        <section className="space-y-6">
          <SectionHeading>Animations</SectionHeading>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <FadeIn><Card className="p-4 text-center">FadeIn</Card></FadeIn>
            <SlideUp><Card className="p-4 text-center">SlideUp</Card></SlideUp>
            <SlideLeft><Card className="p-4 text-center">SlideLeft</Card></SlideLeft>
            <SlideRight><Card className="p-4 text-center">SlideRight</Card></SlideRight>
            <ScaleIn><Card className="p-4 text-center">ScaleIn</Card></ScaleIn>
            
            <HoverScale><Card className="p-4 text-center cursor-pointer">Hover Scale</Card></HoverScale>
            <HoverLift><Card className="p-4 text-center cursor-pointer">Hover Lift</Card></HoverLift>
            <Floating><Card className="p-4 text-center">Floating</Card></Floating>
          </div>

          <div className="mt-8">
            <Reveal><Typography variant="h3">This block utilizes a Reveal animation mask!</Typography></Reveal>
          </div>
        </section>
        
      </Container>
    </div>
  );
}

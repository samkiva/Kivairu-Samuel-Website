import { Section, Container } from '@/components/layout';

export default function Home() {
  return (
    <Section className="min-h-[80vh] flex items-center justify-center pt-24 md:pt-32">
      <Container className="flex flex-col items-center justify-center text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Global Layout Shell
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
          The Phase 3 global application shell has been successfully integrated. 
          You can test the Navbar, Footer, Theme Toggle, and Scroll Progress.
        </p>
      </Container>
    </Section>
  );
}

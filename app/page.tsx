import { Hero } from '@/components/hero';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Services } from '@/components/sections/services';
import { Projects } from '@/components/sections/projects';
import { Experience } from '@/components/sections/experience';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

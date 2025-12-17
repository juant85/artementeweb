import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Methodology from '@/components/sections/Methodology';
import Benefits from '@/components/sections/Benefits';
import Modalities from '@/components/sections/Modalities';
import ClassStructure from '@/components/sections/ClassStructure';
import References from '@/components/sections/References';
import Trajectory from '@/components/sections/Trajectory';
import Bio from '@/components/sections/Bio';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Methodology />
      <Benefits />
      <Modalities />
      <ClassStructure />
      <References />
      <Trajectory />
      <Bio />
      <Contact />
    </main>
  );
}

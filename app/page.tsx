import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Overview } from '@/components/overview';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

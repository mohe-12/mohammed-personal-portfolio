import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Overview } from '@/components/overview';
import { Journey } from '@/components/journey';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { HowIWork } from '@/components/how-i-work';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Overview />
        <Skills />
        <Projects />
        <Journey />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

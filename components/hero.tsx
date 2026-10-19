'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, ChevronDown, Sparkles, Github, Linkedin } from 'lucide-react';
import { SiTelegram } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { TechnologyOrbit } from '@/components/technology-orbit';
import { siteConfig } from '@/data/site-config';
import { configuredSocialLinks } from '@/data/social-links';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Linkedin,
  telegram: SiTelegram,
};

const heroTitles = [siteConfig.role, siteConfig.title];

function useTypewriter(texts: string[], speed = 90, pause = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const text = texts[textIndex];

  useEffect(() => {
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i += 1;
        timer = setTimeout(tick, speed);
      } else {
        setDone(true);
        timer = setTimeout(() => {
          setDone(false);
          setDisplayed('');
          setTextIndex((index) => (index + 1) % texts.length);
        }, pause);
      }
    };
    tick();
    return () => clearTimeout(timer);
  }, [text, texts.length, speed, pause]);

  return { displayed, done };
}

export function Hero() {
  const { displayed, done } = useTypewriter(heroTitles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 md:pt-28 lg:px-8"
    >
      {/* Background: subtle grid + radial glows */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.3] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute left-1/4 top-1/4 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-[100px] dark:bg-indigo-500/20" />
      <div className="absolute right-[8%] top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px] dark:bg-accent/15" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-6">
        {/* Left: text content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Hello, I&apos;m
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl"
          >
            MOHAMMED <span className="gradient-text">HASEN</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            variants={item}
            className="mt-4 flex items-center gap-1 text-xl font-semibold text-foreground/85 sm:text-2xl"
          >
            <span className="text-primary">{displayed}</span>
            <span
              className={`inline-block h-6 w-0.5 bg-primary sm:h-7 ${done ? 'opacity-0' : 'opacity-100'}`}
              aria-hidden="true"
            />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {siteConfig.description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start"
          >
            <Button asChild size="lg" className="group w-full sm:w-auto">
              <motion.a
                href="#projects"
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={item}
            className="mt-7 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <span className="text-sm text-muted-foreground">Find me on:</span>
            <div className="flex items-center gap-2">
              {configuredSocialLinks
                .map((link) => {
                  const Icon = socialIcons[link.icon];
                  return (
                    <a
                      key={link.name}
                      href={link.href as string}
                      target={link.icon === 'mail' ? undefined : '_blank'}
                      rel={link.icon === 'mail' ? undefined : 'noopener noreferrer'}
                      aria-label={link.label}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary hover:-translate-y-0.5"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: rotating orbit with profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <TechnologyOrbit />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 1.4, duration: 0.6 },
          y: { repeat: Infinity, duration: 1.8, ease: 'easeInOut' },
        }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </motion.a>
    </section>
  );
}

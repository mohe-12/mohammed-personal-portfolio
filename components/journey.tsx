'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Section, SectionHeader } from '@/components/section';
import { EducationCard, ExperienceCard } from '@/components/experience';

export function Journey() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeMilestone, setActiveMilestone] = useState(0);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 25%'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    setActiveMilestone(Math.min(1, Math.floor(progress * 2)));
  });

  return (
    <Section id="journey" className="bg-muted/20">
      <SectionHeader
        eyebrow="Education & Journey"
        title={
          <>
            <span className="text-foreground">Academic </span>
            <span className="gradient-text">foundation</span>
          </>
        }
        subtitle="A timeline of the experience and education behind my work."
        replayOnScroll
      />
      <div ref={timelineRef} className="relative mx-auto grid max-w-6xl gap-8 md:gap-10">
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-4 top-8 w-[2px] bg-border/70 md:left-1/2"
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-8 left-4 top-8 w-[2px] origin-top bg-gradient-to-b from-primary via-primary to-accent md:left-1/2"
          style={{ scaleY: scrollYProgress }}
        />

        <div className="relative grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-x-4 md:grid-cols-2 md:gap-x-16">
          <span
            aria-hidden="true"
            className="absolute left-4 top-5 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-[3px] border-background bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.12)] md:left-1/2"
          />
          <div className="col-start-2 min-w-0 md:col-start-1">
            <p className="mb-3 inline-flex max-w-full rounded-full border border-primary/20 bg-background/80 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-primary sm:px-3 sm:text-xs sm:tracking-[0.14em] md:float-right">
              2025 · Professional experience
            </p>
            <div className="clear-both">
              <ExperienceCard />
            </div>
          </div>
          <div className="hidden md:block" aria-hidden="true" />
        </div>

        <div className="relative grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-x-4 md:grid-cols-2 md:gap-x-16">
          <span
            aria-hidden="true"
            className={`absolute left-4 top-5 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-[3px] border-background transition-colors duration-200 md:left-1/2 ${
              activeMilestone >= 1
                ? 'bg-accent shadow-[0_0_0_4px_hsl(var(--accent)/0.12)]'
                : 'bg-muted-foreground/30'
            }`}
          />
          <div className="col-start-2 min-w-0 md:col-start-2">
            <p className="mb-3 inline-flex max-w-full rounded-full border border-accent/25 bg-background/80 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-accent sm:px-3 sm:text-xs sm:tracking-[0.14em]">
              2021 - 2026 · Education
            </p>
            <EducationCard />
          </div>
          <div className="hidden md:block md:col-start-1" aria-hidden="true" />
        </div>
      </div>
    </Section>
  );
}

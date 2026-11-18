'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { Blocks, Gauge, Hammer, RefreshCw, Smartphone } from 'lucide-react';
import { Section, SectionHeader } from '@/components/section';
import { Card, CardContent } from '@/components/ui/card';

const steps = [
  {
    number: '01',
    title: 'Clean, maintainable code',
    description: 'Readable structure and reusable components that are easy to extend.',
    icon: Hammer,
  },
  {
    number: '02',
    title: 'Responsive-first',
    description: 'Layouts designed for phones first, then scaled up to large screens.',
    icon: Smartphone,
  },
  {
    number: '03',
    title: 'Performance-focused',
    description: 'Lean pages, optimised assets and only the code that is needed.',
    icon: Gauge,
  },
  {
    number: '04',
    title: 'Scalable architecture',
    description: 'Clear separation between interface, API and data layers.',
    icon: Blocks,
  },
  {
    number: '05',
    title: 'Continuous improvement',
    description: 'Regular reviews that keep the codebase fast, secure and easy to maintain.',
    icon: RefreshCw,
  },
] as const;

export function HowIWork() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);

  // Scroll progress is only used for the vertical (mobile/tablet) timeline.
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 75%', 'end 40%'],
  });
  const { scrollYProgress: mobileProgress } = useScroll({
    target: listRef,
    offset: ['start 75%', 'end 25%'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    setActiveStep(Math.min(steps.length - 1, Math.floor(progress * steps.length)));
  });

  return (
    <Section id="how-i-work">
      <SectionHeader
        eyebrow="How I Work"
        title={
          <>
            <span className="text-foreground">From idea to </span>
            <span className="gradient-text">solution</span>
          </>
        }
        subtitle="A practical, thoughtful process focused on clear goals and reliable results."
      />

      <ol ref={listRef} className="relative mx-auto grid max-w-6xl gap-5 lg:grid-cols-5 lg:gap-6">
        {/* Mobile / tablet: vertical track */}
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-[6px] top-6 w-[2px] bg-border/70 lg:hidden"
        />
        <motion.span
          aria-hidden="true"
          className="absolute bottom-6 left-[6px] top-6 w-[2px] origin-top rounded-full bg-gradient-to-b from-primary via-primary to-accent lg:hidden"
          style={{ scaleY: mobileProgress }}
        />

        {/* Desktop: horizontal track */}
        <span
          aria-hidden="true"
          className="absolute left-0 right-0 top-[17px] hidden h-px bg-border lg:block"
        />

        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index <= activeStep;

          return (
            <motion.li
              key={step.number}
              className="relative pl-9 lg:pl-0"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                delay: reduceMotion ? 0 : index * 0.07,
                ease: 'easeOut',
              }}
            >
              {/* Mobile dot */}
              <span
                aria-hidden="true"
                className={`absolute left-0 top-7 h-3.5 w-3.5 rounded-full border-2 border-background ring-1 transition-colors duration-200 lg:hidden ${
                  isActive ? 'bg-primary ring-primary/40' : 'bg-muted ring-border'
                }`}
              />

              {/* Desktop node */}
              <div className="mb-5 hidden lg:block">
                <span className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-background text-xs font-bold tabular-nums text-primary shadow-sm">
                  {step.number}
                </span>
              </div>

              <Card className="group h-full border-border/70 bg-background shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
                <CardContent className="flex h-full flex-col p-5 sm:p-6">
                  <div className="flex items-center gap-3 lg:block">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                        isActive
                          ? 'border-primary/30 bg-primary/10 text-primary'
                          : 'border-border bg-muted/40 text-muted-foreground'
                      } lg:border-primary/20 lg:bg-primary/10 lg:text-primary`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="min-w-0 flex-1 text-left text-base font-semibold leading-snug text-foreground lg:mt-5">
                      {step.title}
                    </h3>
                    <span className="ml-auto shrink-0 text-xs font-semibold tabular-nums text-muted-foreground sm:hidden">
                      {step.number}
                    </span>
                    <span className="ml-auto hidden whitespace-nowrap text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:inline lg:hidden">
                      Step {step.number}
                    </span>
                  </div>

                  <p className="mt-2 flex-1 text-left text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}
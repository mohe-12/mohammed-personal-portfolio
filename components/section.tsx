'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  replayOnScroll = false,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
  replayOnScroll?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: !replayOnScroll, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'mb-12 flex flex-col gap-3 md:mb-16',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
        {eyebrow}
      </span>
      <h2 className="font-heading text-2xl font-bold leading-tight tracking-tight text-balance sm:text-3xl sm:leading-10 md:text-4xl md:leading-tight lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'max-w-2xl text-base text-muted-foreground md:text-lg',
            align === 'center' ? 'mx-auto' : '',
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        'relative scroll-mt-2 px-4 py-20 sm:px-6 md:py-28 lg:px-8',
        className,
      )}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

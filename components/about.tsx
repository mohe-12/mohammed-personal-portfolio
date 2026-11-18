'use client';

import { motion } from 'framer-motion';
import {
  CodeXml,
  GraduationCap,
  Lightbulb,
  Target,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CursorTilt } from '@/components/cursor-tilt';

export function AboutCard() {
  const focusAreas = [
    {
      title: 'Technical focus',
      description:
        'Full-stack web apps with React, Next.js, Node.js, Express, Laravel, and SQL / NoSQL databases.',
      icon: CodeXml,
    },
    {
      title: 'Problem-solving',
      description:
        'Understanding the problem first, then building the simplest solution that works well.',
      icon: Lightbulb,
    },
    {
      title: 'Career objective',
      description:
        'Software development, IT or information systems roles, plus freelance projects.',
      icon: Target,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <CursorTilt>
        <Card className="group relative h-full overflow-hidden border-border/60 transition-all duration-300 hover:border-primary/40 hover:shadow-xl">
          <div
            className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 blur-3xl md:block"
            aria-hidden="true"
          />
          <CardContent className="relative grid min-w-0 gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:p-10">
            <div className="min-w-0">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    Profile
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Computer Science &amp; Engineering
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  I’m a graduate of Bule Hora University with a strong interest in
                  full-stack development and modern software engineering.
                </p>
                <p>
                  I enjoy transforming ideas into practical digital solutions by
                  combining frontend technologies, backend systems, database
                  management, and thoughtful user experience design.
                </p>
                <p>
                  I’ve delivered a company website for Yetababarut Beherawi Petroleum
                  and built an Employee Management System for Bule Hora University
                  using the MERN stack and TypeScript. My web development internship
                  at Madda Walabu University gave me hands-on experience working with
                  frontend interfaces in a professional setting.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'TypeScript', 'MERN'].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid content-start gap-3">
              {focusAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.title}
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                    className="flex min-w-0 gap-4 rounded-2xl border border-border/60 bg-background/70 p-4 transition-colors hover:border-primary/30 sm:p-5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold sm:text-base">{area.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {area.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </CursorTilt>
    </motion.div>
  );
}
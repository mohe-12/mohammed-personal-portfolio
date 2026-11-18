'use client';

import { motion } from 'framer-motion';
import { BriefcaseBusiness, Calendar, GraduationCap, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CursorTilt } from '@/components/cursor-tilt';
import { education, experiences } from '@/data/experience';

export function ExperienceCard() {
  return (
    <motion.div
      id="experience"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-80px' }}
      transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <CursorTilt>
        <Card className="relative h-full overflow-hidden border-border/60 bg-card/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
          <CardContent className="relative min-w-0 p-5 sm:p-7">
            <div className="mb-5 flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 text-primary ring-1 ring-primary/10">
                <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="min-w-0 text-lg font-bold leading-tight sm:text-xl">
                Work Experience
              </h3>
            </div>

            <div className="grid gap-5">
              {experiences.map((experience) => (
                <div
                  key={`${experience.role}-${experience.organization}`}
                  className="relative ml-1 border-l border-primary/20 pb-1 pl-6"
                >
                  <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-primary ring-2 ring-primary/15" />
                  <h4 className="break-words text-base font-bold sm:text-lg">
                    {experience.role}
                  </h4>
                  <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    
                    {experience.startDate} – {experience.endDate}
                  </span>
                  <p className="mt-3 flex items-start gap-2 break-words text-sm leading-relaxed text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" aria-hidden="true" />
                    <span className="min-w-0 break-words">{experience.organization}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/5 to-accent/5 p-4 sm:p-5">
              <h4 className="text-sm font-bold text-primary sm:text-base">
                Open to opportunities
              </h4>
              <p className="mt-2 break-words text-sm leading-relaxed text-muted-foreground">
                I’m seeking software development and IT roles, as well as freelance projects,
                where I can build practical web applications and contribute to real-world teams.
                Available to start immediately and open to on-site or remote work.
              </p>
            </div>
          </CardContent>
        </Card>
      </CursorTilt>
    </motion.div>
  );
}

export function EducationCard() {
  return (
    <motion.div
      id="education"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-80px' }}
      transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <CursorTilt>
        <Card className="relative h-full overflow-hidden border-border/60 bg-card/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl">
          <CardContent className="relative min-w-0 p-5 sm:p-7">
            <div className="mb-5 flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/15 to-primary/10 text-accent ring-1 ring-accent/10">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="min-w-0 text-base font-bold leading-tight sm:text-lg lg:text-xl">
                Educational Background
              </h3>
            </div>

            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div className="min-w-0 rounded-2xl border border-accent/10 bg-gradient-to-br from-accent/5 to-primary/5 p-4 sm:p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  Degree
                </p>
                <h4 className="mt-2 break-words text-base font-bold leading-snug sm:text-lg">
                  {education.degree}
                </h4>
                <p className="mt-3 flex items-start gap-2 break-words text-sm leading-relaxed text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="min-w-0 break-words">{education.institution}</span>
                </p>
              </div>
              <div className="flex items-center justify-between gap-4 rounded-2xl border border-border/60 bg-background/70 p-4 lg:min-w-32 lg:flex-col lg:justify-center lg:gap-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Graduated
                </span>
                <span className="text-2xl font-black tracking-tight text-accent">
                  {education.year}
                </span>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/5 px-3 py-1.5 text-xs font-semibold text-foreground">
                <Calendar className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                CGPA 3.51 / 4.00
              </span>
            </div>
          </CardContent>
        </Card>
      </CursorTilt>
    </motion.div>
  );
}
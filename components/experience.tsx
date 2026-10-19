'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CursorTilt } from '@/components/cursor-tilt';
import { education, experiences } from '@/data/experience';

export function ExperienceCard() {
  return (
    <motion.div
      id="experience"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="h-full"
    >
      <CursorTilt>
        <Card className="overview-card-decoration overview-card-glow h-full border-border/60 transition-all hover:border-primary/40 hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Briefcase className="h-4 w-4" />
              </div>
              <h3 className="text-xl font-bold">Work Experience</h3>
            </div>

            <div className="pb-5">
              <h4 className="text-base font-bold text-primary">Fresher</h4>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                I’m currently seeking opportunities where I can contribute to
                real-world software projects, expand my technical expertise, and
                grow as a professional software developer.
              </p>
            </div>

            <div className="grid gap-5">
              {experiences.map((experience) => (
                <div key={experience.role} className="relative pl-6">
                  <span className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-primary" />
                  <h4 className="text-base font-bold">{experience.role}</h4>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wide text-primary">
                    {experience.startDate} – {experience.endDate}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {experience.organization}
                  </p>
                </div>
              ))}
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
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="h-full"
    >
      <CursorTilt>
        <Card className="overview-card-decoration overview-card-glow h-full border-border/60 transition-all hover:border-primary/40 hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="h-4 w-4" />
              </div>
              <h3 className="text-xl font-bold">Education</h3>
            </div>

            <h4 className="text-lg font-bold leading-snug">
              {education.degree}
            </h4>
            <p className="mt-1 text-sm font-medium text-primary">
              {education.institution}
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {education.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                Graduation {education.year}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                Ethiopia
              </span>
            </div>
          </CardContent>
        </Card>
      </CursorTilt>
    </motion.div>
  );
}

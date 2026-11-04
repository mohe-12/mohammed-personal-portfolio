'use client';

import { motion } from 'framer-motion';
import { UserRound } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CursorTilt } from '@/components/cursor-tilt';

const techStack = [
  'React.js',
  'Next.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Laravel',
];

export function AboutCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <CursorTilt>
        <Card className="overview-card-decoration overview-card-glow h-full border-border/60 transition-all hover:border-primary/40 hover:shadow-lg">
          <CardContent className="p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <UserRound className="h-4 w-4" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold">Profile</h3>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I&apos;m a Computer Science and Engineering graduate from Bule
                Hora University, passionate about web development and building
                practical digital solutions that solve real problems.
              </p>
              <p>
                Through academic projects and a frontend internship, I have
                worked with modern frontend and backend technologies and
                developed a strong interest in creating responsive,
                maintainable applications.
              </p>
            </div>

            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Core technologies">
              {techStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </CursorTilt>
    </motion.div>
  );
}
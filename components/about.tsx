'use client';

import { motion } from 'framer-motion';
import { Code2, GraduationCap, Target, UserRound } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CursorTilt } from '@/components/cursor-tilt';

const highlights = [
  {
    icon: Code2,
    title: 'Focus',
    description: 'Full-stack web development and modern web technologies.',
  },
  {
    icon: Target,
    title: 'Career Goal',
    description: 'Contributing to software projects while growing as a developer.',
  },
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
                <UserRound className="h-4 w-4" />
              </div>
              <h3 className="text-xl font-bold">Profile</h3>
            </div>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              I&apos;m Mohammed Hasen, a Computer Science and Engineering graduate
              from Bule Hora University. I am passionate about web development and
              building practical digital solutions that solve real problems.
              Through academic projects and internship experience, I have worked
              with modern frontend and backend technologies and developed an
              interest in creating useful, responsive, and maintainable
              applications.
            </p>
          </CardContent>
        </Card>
      </CursorTilt>
    </motion.div>
  );
}

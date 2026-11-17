'use client';

import { motion } from 'framer-motion';
import { CircleUserRound } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CursorTilt } from '@/components/cursor-tilt';


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
        <Card className="h-full border-border/60 transition-all hover:border-primary/40 hover:shadow-lg">
          <CardContent className="min-w-0 p-4 sm:p-6">
            <div className="mb-5 flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <CircleUserRound className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="min-w-0 text-lg font-bold leading-tight sm:text-xl">
                Profile
              </h3>
              <span
                aria-hidden="true"
                className="h-px min-w-3 flex-1 bg-gradient-to-r from-border via-border/70 to-transparent"
              />
            </div>

            <div className="min-w-0 space-y-4 break-words text-sm leading-relaxed text-muted-foreground">
              <p>
                I’m a Computer Science and Engineering graduate from Bule Hora University who builds full-stack web applications with React, Next.js, Node.js, Express, and MongoDB.
                I’ve delivered a company website for Yetababarut Beherawi Petroleum and
                am building an Employee Management System for Bule Hora University using the MERN stack and TypeScript.
              </p>
              <p>
                During my web development internship at Madda Walabu University, I worked on frontend development in a professional setting.
                I’m now looking for software development, IT, or information systems roles where I can contribute to real-world projects.
              </p>
            </div>
          </CardContent>
        </Card>
      </CursorTilt>
    </motion.div>
  );
}
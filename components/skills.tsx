'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Sparkles, Wrench } from 'lucide-react';
import { Section, SectionHeader } from '@/components/section';
import { Card, CardContent } from '@/components/ui/card';
import { TechIcon } from '@/components/tech-icon';
import { skillCategories } from '@/data/skills';
import { CursorTilt } from '@/components/cursor-tilt';

const categoryIcons = {
  code: Code2,
  layout: Layout,
  server: Server,
  database: Database,
  wrench: Wrench,
  sparkles: Sparkles,
};

const skillListVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.08,
    },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: 'easeOut' as const },
  },
};

const categoryGridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const categoryCardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: 'easeOut' as const },
  },
};

export function Skills() {
  return (
    <Section id="skills" className="bg-muted/20">
      <SectionHeader
        eyebrow="Expertise"
        title={
          <>
            <span className="text-foreground">Technical</span>
            <span className="gradient-text"> Expertise</span>
          </>
        }
        subtitle="Technologies and tools I have worked with."
      />
      <motion.div
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        variants={categoryGridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {skillCategories.map((category) => {
          const Icon = categoryIcons[category.iconName];
          return (
            <motion.div
              key={category.title}
              className="h-full"
              variants={categoryCardVariants}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 320, damping: 24 }}
            >
              <CursorTilt>
                <Card className="overview-card-decoration skills-card-glow h-full border-border/60 transition-colors hover:border-primary/40 hover:shadow-lg">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                    </div>
                    <motion.ul
                      className="grid gap-3"
                      variants={skillListVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: '-40px' }}
                    >
                      {category.skills.map((skill) => (
                        <motion.li
                          key={skill.name}
                          variants={skillItemVariants}
                          whileHover={{
                            y: -3,
                            scale: 1.03,
                            transition: { type: 'spring', stiffness: 400, damping: 18 },
                          }}
                          className="flex items-center gap-3 rounded-lg border border-border/40 bg-background/40 px-3 py-2"
                        >
                          <TechIcon
                            name={skill.iconName}
                            className="h-5 w-5 shrink-0"
                            title={skill.name}
                            style={{ color: skill.color }}
                          />
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </CardContent>
                </Card>
              </CursorTilt>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
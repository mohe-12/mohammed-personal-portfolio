'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, ExternalLink, ChevronDown } from 'lucide-react';
import { Section, SectionHeader } from '@/components/section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { projects, type Project } from '@/data/projects';
import { CursorTilt } from '@/components/cursor-tilt';

const INITIAL_COUNT = 3;

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hiddenProjectCount = projects.length - INITIAL_COUNT;

  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Projects"
        title={
          <>
            <span className="text-foreground">Selected </span>
            <span className="gradient-text">Projects</span>
          </>
        }
        subtitle="A showcase of my work, highlighting my skills and experience in software development."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence initial={false}>
          {visibleProjects.map((project, i) => (
            <motion.div
              layout
              key={project.id}
              className="h-full"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{
                duration: 0.35,
                delay: i >= INITIAL_COUNT ? (i - INITIAL_COUNT) * 0.08 : 0,
              }}
            >
              <CursorTilt>
                <Card className="group flex h-full flex-col overflow-hidden border-border/60 transition-all hover:border-primary/40 hover:shadow-xl">
                  {/* Preview header */}
                  <div className="relative aspect-video overflow-hidden">
                    <ProjectPreview project={project} />
                  </div>

                  <CardContent className="flex flex-1 flex-col p-5">
                    {/* Number + status on one row */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-primary/70">
                        {project.number}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          project.status === 'Completed'
                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                            : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <h3 className="mt-2 text-lg font-bold leading-tight">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mt-auto flex flex-wrap justify-center gap-2 pt-5">
                      {project.githubUrl ? (
                        <Button asChild size="sm" variant="outline">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} on GitHub`}
                          >
                            <Github className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                            GitHub
                          </a>
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          disabled
                          title="GitHub link coming soon"
                        >
                          <Github className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                          GitHub
                        </Button>
                      )}

                      {project.liveUrl ? (
                        <Button asChild size="sm">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} live demo`}
                          >
                            <ExternalLink className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                            Live Demo
                          </a>
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          disabled
                          title="Live demo link coming soon"
                        >
                          <ExternalLink className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CursorTilt>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {projects.length > INITIAL_COUNT && (
        <div className="mt-8 flex w-full items-center justify-center gap-4 sm:gap-6">
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
          <Button
            type="button"
            size="lg"
            variant="outline"
            aria-expanded={showAll}
            onClick={() => setShowAll((current) => !current)}
          >
            {showAll
              ? 'Show Fewer Projects'
              : `View All Projects (+${hiddenProjectCount} more)`}
            <ChevronDown
              className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                showAll ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            />
          </Button>
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>
      )}
    </Section>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  if (project.previewImage) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={project.previewImage}
        alt={`${project.title} preview`}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${project.accentFrom}22, ${project.accentTo}22)`,
      }}
    >
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div
        className="absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl"
        style={{ background: `${project.accentFrom}40` }}
      />
      <div
        className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full blur-2xl"
        style={{ background: `${project.accentTo}40` }}
      />
      <div className="relative flex flex-col items-center gap-2">
        <span
          className="text-6xl font-black opacity-20"
          style={{ color: project.accentFrom }}
        >
          {project.number}
        </span>
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Project
        </span>
      </div>
    </div>
  );
}
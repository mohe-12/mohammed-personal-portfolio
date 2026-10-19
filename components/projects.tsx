'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Section, SectionHeader } from '@/components/section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import { CursorTilt } from '@/components/cursor-tilt';

export function Projects() {
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
        subtitle="A showcase of my work, highlighting my skills and experience in web development."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="h-full"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <CursorTilt>
              <Card className="group flex h-full flex-col overflow-hidden border-border/60 transition-all hover:border-primary/40 hover:shadow-xl">
                {/* Preview header */}
                <div className="relative aspect-video overflow-hidden">
                  <ProjectPreview project={project} />
                </div>

                <CardContent className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-bold text-primary/70">
                      {project.number}
                    </span>
                  </div>

                  <h3 className="mt-1 text-lg font-bold leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {project.githubUrl ? (
                      <Button asChild size="sm" variant="outline">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-1.5 h-3.5 w-3.5" />
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
                        <Github className="mr-1.5 h-3.5 w-3.5" />
                        GitHub
                      </Button>
                    )}
                    {project.liveUrl ? (
                      <Button asChild size="sm">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                          Live Demo
                        </a>
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        disabled
                        title="Live demo link coming soon"
                      >
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </CursorTilt>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function ProjectPreview({
  project,
}: {
  project: { previewImage: string | null; accentFrom: string; accentTo: string; title: string; number: string };
}) {
  if (project.previewImage) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={project.previewImage}
        alt={`${project.title} preview`}
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
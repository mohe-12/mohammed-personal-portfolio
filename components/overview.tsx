import { Section, SectionHeader } from '@/components/section';
import { AboutCard } from '@/components/about';
import { EducationCard, ExperienceCard } from '@/components/experience';

export function Overview() {
  return (
    <Section id="about" className="bg-muted/20">
      <SectionHeader
        eyebrow="About Me"
        title={
          <>
            <span className="text-foreground">Over</span>
            <span className="gradient-text">view</span>
          </>
        }
        subtitle="Full-Stack Web Developer"
      />
      <div className="grid items-stretch gap-5 lg:grid-cols-3">
        <AboutCard />
        <ExperienceCard />
        <EducationCard />
      </div>
    </Section>
  );
}

import { Section, SectionHeader } from '@/components/section';
import { AboutCard } from '@/components/about';

export function Overview() {
  return (
    <Section id="about" className="bg-muted/20">
      <SectionHeader
        eyebrow="About Me"
        title={
          <>
            <span className="text-foreground">Engineering fundamentals, </span>
            <span className="gradient-text">practical results.</span>
          </>
        }
      />
      <div className="mx-auto max-w-6xl">
        <AboutCard />
      </div>
    </Section>
  );
}

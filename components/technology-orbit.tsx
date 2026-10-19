'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { TechIcon } from '@/components/tech-icon';
import { orbitTechnologies } from '@/data/skills';
import { siteConfig } from '@/data/site-config';
import { cn } from '@/lib/utils';

const middle = Math.ceil(orbitTechnologies.length / 2);
const outerTechnologies = orbitTechnologies.slice(0, middle);
const innerTechnologies = orbitTechnologies
  .slice(middle)
  .filter((technology) => technology.name !== 'Laravel');

type OrbitItem = { name: string; iconName: string; color: string };

export function TechnologyOrbit() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[21rem] sm:max-w-[27rem] lg:max-w-[32rem]"
      aria-label="Technologies used by Mohammed Hasen"
    >
      <div className="pointer-events-none absolute -right-[5%] top-1/2 h-[70%] w-[60%] -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-primary/10 to-accent/15 blur-3xl" />

      {/* Fixed orbit paths */}
      <div className="absolute inset-[10%] rounded-full border-2 border-dashed border-primary/30" />
      <div className="absolute inset-[22%] rounded-full border border-dashed border-primary/25" />

      {/* Icons rotate around the fixed outer path */}
      <MotionConfig reducedMotion="never">
        <OrbitRing
          items={outerTechnologies}
          orbitInset="10%"
          duration={10}
          reverseSpin
        />

        {/* Icons rotate around the fixed inner path in the same direction */}
        <OrbitRing
          items={innerTechnologies}
          orbitInset="22%"
          duration={6}
          reverseSpin
        />
      </MotionConfig>

      {/* Fixed profile image with breathing room inside the inner path */}
      <ProfileImage className="absolute inset-[28%] z-0" />
    </div>
  );
}

function OrbitRing({
  items,
  orbitInset,
  duration,
  reverseSpin,
}: {
  items: OrbitItem[];
  orbitInset: string;
  duration: number;
  reverseSpin: boolean;
}) {
  const step = 360 / items.length;

  return (
    <motion.div
      className="absolute z-10"
      style={{ inset: orbitInset }}
      animate={duration > 0 ? { rotate: 360 } : undefined}
      transition={duration > 0 ? { duration, repeat: Infinity, ease: 'linear' } : undefined}
    >
      {items.map((tech, i) => (
        <div
          key={tech.name}
          className="absolute inset-0"
          style={{ transform: `rotate(${i * step}deg)` }}
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <div style={{ transform: `rotate(${-i * step}deg)` }}>
              <motion.div
                animate={reverseSpin ? { rotate: -360 } : undefined}
                transition={reverseSpin ? { duration, repeat: Infinity, ease: 'linear' } : undefined}
              >
                <IconBubble tech={tech} />
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

function IconBubble({ tech }: { tech: OrbitItem }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-border/80 bg-card/95 shadow-md glass sm:h-12 sm:w-12"
        title={tech.name}
      >
        <TechIcon
          name={tech.iconName}
          className="relative h-6 w-6 sm:h-7 sm:w-7"
          title={tech.name}
          style={{ color: tech.color === '#000000' ? 'hsl(var(--foreground))' : tech.color }}
        />
      </div>
      <span className="whitespace-nowrap text-[10px] font-medium leading-none text-foreground/80 sm:text-xs">
        {tech.name}
      </span>
    </div>
  );
}

function ProfileImage({ className }: { className?: string }) {
  const [imageFailed, setImageFailed] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth === 0) {
      setImageFailed(true);
    }
  }, []);

  return (
    <div className={cn('relative z-10', className)}>
      <div className="relative h-full w-full overflow-hidden rounded-full">
        {!imageFailed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={imageRef}
            src={siteConfig.profileImagePath}
            alt="Mohammed Hasen — Full-Stack Developer"
            className="h-full w-full object-cover object-top"
            loading="eager"
            onErrorCapture={() => setImageFailed(true)}
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center text-3xl font-black tracking-tight text-primary sm:text-4xl"
            aria-label="Mohammed Hasen monogram"
          >
            MH
          </div>
        )}
      </div>
    </div>
  );
}

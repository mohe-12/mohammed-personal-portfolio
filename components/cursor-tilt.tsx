'use client';

import type { PointerEvent, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function CursorTilt({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    const y = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;

    event.currentTarget.style.setProperty('--tilt-x', `${-y * 5}deg`);
    event.currentTarget.style.setProperty('--tilt-y', `${x * 5}deg`);
    event.currentTarget.style.setProperty('--shift-x', `${x * 3}px`);
    event.currentTarget.style.setProperty('--shift-y', `${y * 3}px`);
  };

  const handlePointerLeave = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty('--tilt-x', '0deg');
    event.currentTarget.style.setProperty('--tilt-y', '0deg');
    event.currentTarget.style.setProperty('--shift-x', '0px');
    event.currentTarget.style.setProperty('--shift-y', '0px');
  };

  return (
    <div
      className={cn('cursor-tilt-card h-full', className)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </div>
  );
}

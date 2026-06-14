import type { ReactNode } from 'react';
import { cn } from '../../../lib/cn';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  action?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  action,
}: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col gap-3', align === 'center' ? 'items-center text-center' : 'items-start')}>
      <div className="flex w-full items-center gap-4">
        <div className="space-y-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-cyan-300/70">{eyebrow}</p>
          <h2 className="text-pretty text-lg font-semibold tracking-tight text-zinc-50 md:text-xl">{title}</h2>
        </div>
        {action ? <div className="ml-auto">{action}</div> : null}
      </div>
      {description ? <p className="max-w-3xl text-sm leading-6 text-zinc-400">{description}</p> : null}
    </div>
  );
}

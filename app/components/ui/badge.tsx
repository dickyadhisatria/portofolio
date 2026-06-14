import type { HTMLAttributes } from 'react';
import { cn } from '../../../lib/cn';

type BadgeTone = 'cyan' | 'blue' | 'violet' | 'neutral';

const toneClasses: Record<BadgeTone, string> = {
  cyan: 'border-cyan-400/25 bg-cyan-400/10 text-cyan-200',
  blue: 'border-blue-400/25 bg-blue-400/10 text-blue-200',
  violet: 'border-violet-400/25 bg-violet-400/10 text-violet-200',
  neutral: 'border-white/15 bg-white/[0.05] text-zinc-300',
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

export function Badge({ className, tone = 'neutral', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em]',
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}

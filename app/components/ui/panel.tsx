import type { HTMLAttributes } from 'react';
import { cn } from '../../../lib/cn';

export function Panel({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-[1.25rem] border border-white/10 bg-white/[0.035] shadow-[0_32px_96px_-48px_rgba(2,6,23,0.95)] backdrop-blur-xl',
        className,
      )}
      {...props}
    />
  );
}

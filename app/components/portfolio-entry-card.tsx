'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import type { PortfolioItem } from '../../lib/types';
import { Badge } from './ui/badge';
import { Panel } from './ui/panel';
import { cn } from '../../lib/cn';

const accentMap: Record<string, 'cyan' | 'blue' | 'violet' | 'neutral'> = {
  backend: 'cyan',
  spatial: 'blue',
  ml: 'violet',
  ai: 'violet',
  other: 'neutral',
};

const categoryEmoji: Record<string, string> = {
  backend: '⚙️',
  spatial: '🗺️',
  ml: '🧠',
  ai: '🤖',
  other: '📁',
};

interface PortfolioEntryCardProps {
  entry: PortfolioItem;
}

export function PortfolioEntryCard({ entry }: PortfolioEntryCardProps) {
  const [hovered, setHovered] = useState(false);

  const title = 'company' in entry ? entry.company : entry.title;
  const subtitle = 'company' in entry ? entry.role : `${entry.role} · ${entry.client}`;
  const projectTitle = 'title' in entry ? entry.title : null;

  return (
    <div className="group/parent relative perspective-[800px]">
      <a
        href={entry.url ?? '#'}
        target={entry.url ? '_blank' : undefined}
        rel={entry.url ? 'noreferrer' : undefined}
        className="block transition-all duration-150 hover:scale-[1.005]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Panel
          className={cn(
            'relative overflow-hidden border-white/10 bg-white/[0.04] p-5 transition-all duration-300',
            hovered && 'border-cyan-400/30 bg-white/[0.06]',
          )}
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge tone={accentMap[entry.category]}>
                  {categoryEmoji[entry.category]} {entry.category}
                </Badge>
                {entry.url && (
                  <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-600">
                    {new URL(entry.url).hostname}
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <h3 className="flex items-center gap-2 text-base font-semibold text-zinc-50">
                  {title}
                  <span
                    className="text-zinc-500 transition-all duration-200"
                    style={{
                      transform: hovered ? 'translateX(4px)' : 'translateX(0)',
                      opacity: hovered ? 1 : 0,
                    }}
                  >
                    ↗
                  </span>
                </h3>
                <p className="text-sm text-zinc-300">{subtitle}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500">
                  {entry.period} · {entry.location}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {entry.stack.slice(0, 6).map((tech) => (
                <Badge key={tech} tone="neutral" className="normal-case tracking-normal">
                  {tech}
                </Badge>
              ))}
              {entry.stack.length > 6 && (
                <Badge tone="neutral">+{entry.stack.length - 6}</Badge>
              )}
            </div>
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-400">{entry.description}</p>

          {entry.metrics && entry.metrics.length > 0 && (
            <div className="mt-4 grid gap-2">
              {entry.metrics.map((metric) => (
                <div
                  key={metric}
                  className="flex animate-[fadeIn_0.4s_ease-out_both] items-start gap-2 text-sm text-zinc-300"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/90" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          )}
        </Panel>
      </a>

      <AnimatePresence>
        {hovered && entry.url && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="pointer-events-none absolute -top-2 right-4 z-50 max-w-xs rounded-xl border border-white/15 bg-zinc-950/95 px-4 py-3 shadow-2xl shadow-cyan-500/5 backdrop-blur-xl"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{categoryEmoji[entry.category]}</span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium text-zinc-200">{projectTitle ?? title}</p>
                <p className="mt-0.5 truncate text-[10px] uppercase tracking-wider text-zinc-500">
                  {new URL(entry.url).hostname}
                </p>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-2 border-t border-white/10 pt-2">
              <span className="font-mono text-[9px] uppercase tracking-wider text-cyan-400/80">
                Click to open
              </span>
              <span className="text-[10px] text-zinc-600">&rarr;</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

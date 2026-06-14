'use client';

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
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
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(smoothY, [0, 1], [4, -4]);
  const rotateY = useTransform(smoothX, [0, 1], [-4, 4]);

  const title = 'company' in entry ? entry.company : entry.title;
  const subtitle = 'company' in entry ? entry.role : `${entry.role} · ${entry.client}`;
  const projectTitle = 'title' in entry ? entry.title : null;

  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
    setHovered(false);
  }

  return (
    <div className="relative perspective-[800px]" ref={cardRef}>
      <motion.a
        href={entry.url ?? '#'}
        target={entry.url ? '_blank' : undefined}
        rel={entry.url ? 'noreferrer' : undefined}
        className="block"
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.005 }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      >
        <Panel
          className={cn(
            'relative overflow-hidden border-white/10 bg-white/[0.04] p-5 transition-colors duration-300',
            hovered && 'border-cyan-400/30 bg-white/[0.06]',
          )}
        >
          {[
            { side: 'top', color: 'via-cyan-500/6', delay: 0 },
            { side: 'bottom', color: 'via-violet-500/5', delay: 0.08 },
          ].map((glow) => (
            <motion.div
              key={glow.side}
              className={`pointer-events-none absolute -inset-x-24 ${glow.side === 'top' ? '-top-24' : '-bottom-24'} h-48 w-[calc(100%+192px)] bg-gradient-to-r from-transparent ${glow.color} to-transparent blur-3xl`}
              initial={false}
              animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
              transition={{ duration: 0.35, delay: glow.delay }}
            />
          ))}

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
                  <motion.span
                    animate={{ x: hovered ? 4 : 0, opacity: hovered ? 1 : 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="text-zinc-500"
                  >
                    ↗
                  </motion.span>
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
                <motion.div
                  key={metric}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2 text-sm text-zinc-300"
                >
                  <motion.span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/90"
                    animate={hovered ? { scale: [1, 1.5, 1] } : {}}
                    transition={{ duration: 0.4 }}
                  />
                  <span>{metric}</span>
                </motion.div>
              ))}
            </div>
          )}
        </Panel>
      </motion.a>

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

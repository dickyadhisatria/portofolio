'use client';

import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { metrics } from '../../lib/data';
import { Panel } from './ui/panel';
import { cn } from '../../lib/cn';

const accentClasses = {
  cyan: 'text-cyan-200 border-cyan-400/20',
  blue: 'text-blue-200 border-blue-400/20',
  violet: 'text-violet-200 border-violet-400/20',
} as const;

const accentMap: Record<string, 'cyan' | 'blue' | 'violet'> = {
  backend: 'cyan',
  spatial: 'blue',
  ml: 'violet',
};

const VALUE_STRIP_RE = /[+\-.]/g;

function AnimatedMetric({
  value,
  suffix,
  label,
  category,
  index,
}: {
  value: string;
  suffix: string | undefined;
  label: string;
  category: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const raw = parseFloat(value.replace(VALUE_STRIP_RE, '')) || 0;
  const count = useMotionValue(0);

  const prefix = value.startsWith('+') ? '+' : '';
  const isDecimal = value.includes('.');
  const suffixStr = suffix ?? '';

  const formattedDisplay = useTransform(count, (v) => {
    const rounded = Math.round(v);
    const formatted = isDecimal ? rounded.toFixed(2) : String(rounded);
    return `${prefix}${formatted}${suffixStr}`;
  });

  useEffect(() => {
    if (inView) {
      count.set(0);
      let stopped = false;
      const duration = 1400;
      const start = performance.now();

      function animate(now: number) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        count.set(raw * eased);
        if (progress < 1 && !stopped) requestAnimationFrame(animate);
      }

      requestAnimationFrame(animate);
      return () => { stopped = true; };
    }
  }, [inView, raw, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ type: 'spring', stiffness: 140, damping: 14, delay: index * 0.04 }}
      whileHover={{ y: -2 }}
    >
      <Panel className="h-full rounded-none border-0 bg-zinc-950/90 p-4 transition-colors hover:bg-zinc-900/90">
        <div className={cn('font-mono text-2xl font-semibold tracking-tight tabular-nums', accentClasses[accentMap[category]])}>
          {inView ? (
            <motion.span>{formattedDisplay}</motion.span>
          ) : (
            <>{prefix}0{suffixStr}</>
          )}
        </div>
        <p className="mt-2 text-[10px] uppercase tracking-[0.24em] text-zinc-500">{label}</p>
      </Panel>
    </motion.div>
  );
}

export function MetricsRibbon() {
  return (
    <div
      id="stack"
      className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/10 sm:grid-cols-3 xl:grid-cols-6"
    >
      {metrics.map((metric, i) => (
        <AnimatedMetric
          key={metric.label}
          value={metric.value}
          suffix={metric.suffix}
          label={metric.label}
          category={metric.category}
          index={i}
        />
      ))}
    </div>
  );
}
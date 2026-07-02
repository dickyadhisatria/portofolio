'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { telemetryLogs, personalInfo } from '../../lib/data';
import { Badge } from './ui/badge';
import { Panel } from './ui/panel';

const accentMap: Record<string, 'cyan' | 'blue' | 'violet'> = {
  backend: 'cyan',
  spatial: 'blue',
  ml: 'violet',
};

const accentClasses: Record<string, string> = {
  cyan: 'text-cyan-200 border-cyan-400/20',
  blue: 'text-blue-200 border-blue-400/20',
  violet: 'text-violet-200 border-violet-400/20',
};

const accentDots: Record<string, string> = {
  cyan: 'bg-cyan-400',
  blue: 'bg-blue-400',
  violet: 'bg-violet-400',
};

/** Extracted to limit re-render scope — only this component re-renders every 1.8s. */
function TelemetryLogsList() {
  const [cursor, setCursor] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCursor((current) => (current + 1) % telemetryLogs.length);
    }, 1800);

    return () => window.clearInterval(timer);
  }, []);

  const visible = useMemo(
    () => [
      telemetryLogs[cursor],
      telemetryLogs[(cursor + 1) % telemetryLogs.length],
      telemetryLogs[(cursor + 2) % telemetryLogs.length],
    ],
    [cursor],
  );

  return (
    <div className="mt-4 space-y-2 font-mono text-[11px]" aria-live="off">
      <AnimatePresence mode="popLayout">
        {visible.map((log) => (
          <motion.div
            key={`${log.timestamp}-${log.source}-${log.message}`}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
            className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2"
          >
            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${accentDots[accentMap[log.type]]}`} />
            <span className="text-zinc-500">{log.timestamp}</span>
            <span className={`rounded-full border px-2 py-0.5 text-[9px] uppercase tracking-[0.22em] ${accentClasses[accentMap[log.type]]}`}>
              {log.source}
            </span>
            <span className="min-w-0 flex-1 truncate text-zinc-300">{log.message}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export function TelemetryCard() {
  return (
    <Panel className="overflow-hidden border-white/10 bg-zinc-950/80 p-5">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400">Sample Live System Telemetry</p>
            <p className="mt-1 text-xs text-zinc-500">{personalInfo.location}</p>
          </div>
        </div>
        <Badge tone="neutral" className="whitespace-nowrap">
          Synced
        </Badge>
      </div>

      <TelemetryLogsList />

      <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/10 pt-4">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-zinc-500">Uptime</p>
          <p className="tabular-nums mt-1 text-sm font-semibold text-zinc-100">99.998%</p>
        </div>
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-zinc-500">p99</p>
          <p className="tabular-nums mt-1 text-sm font-semibold text-zinc-100">142ms</p>
        </div>
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-zinc-500">RPS</p>
          <p className="tabular-nums mt-1 text-sm font-semibold text-zinc-100">12.4k</p>
        </div>
      </div>
    </Panel>
  );
}

'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Badge } from './ui/badge';
import { Panel } from './ui/panel';

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Stack', href: '#stack' },
  { label: 'Work', href: '#work' },
  { label: 'Profile', href: '#profile' },
] as const;

export function SiteHeader() {
  const { scrollY } = useScroll();
  const bgColor = useTransform(scrollY, [0, 80], ['rgba(10,10,10,0)', 'rgba(10,10,10,0.85)']);
  const blurStyle = useTransform(scrollY, [0, 80], ['blur(0px)', 'blur(12px)']);

  return (
    <motion.div
      className="sticky top-4 z-20"
      style={{ backgroundColor: bgColor, backdropFilter: blurStyle }}
    >
      <Panel className="px-4 py-3">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 160, damping: 16 }}
          >
            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.05]">
              <span className="font-mono text-sm font-semibold tracking-[0.2em] text-cyan-200">DA</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-50">Dicky Adhi Satria</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                Engineering scalable backends, spatial systems, and AI pipelines
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-2"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 160, damping: 16, delay: 0.05 }}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="relative rounded-full border border-white/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-zinc-300 transition-colors hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                {item.label}
              </motion.a>
            ))}
            <Badge tone="cyan">Open to work</Badge>
          </motion.div>
        </div>
      </Panel>
    </motion.div>
  );
}
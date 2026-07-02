'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { experience, projects } from '../../lib/data';
import type { PortfolioItem } from '../../lib/types';
import { PortfolioEntryCard } from './portfolio-entry-card';
import { SectionHeading } from './ui/section-heading';

type ViewMode = 'experience' | 'projects';

const tabs: readonly { id: ViewMode; label: string }[] = [
  { id: 'experience', label: 'Professional Experience' },
  { id: 'projects', label: 'Map / LMS Projects' },
];

const cardItem = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 160, damping: 14 } as const },
};

export function ExperienceSwitcher() {
  const [active, setActive] = useState<ViewMode>('experience');

  const items = useMemo<readonly PortfolioItem[]>(
    () => (active === 'experience' ? experience : projects),
    [active],
  );

  return (
    <section id="work" className="scroll-mt-24 space-y-5">
      <SectionHeading
        eyebrow="Professional history & case studies"
        title="Switch between backend work and project delivery"
        description="The experience rail flips between production backend roles and map/LMS projects so the CV remains readable without losing detail."
      />

      <motion.div
        className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1"
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 160, damping: 16 }}
      >
        {tabs.map((tab) => {
          const isActive = tab.id === active;

          return (
            <motion.button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="relative rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-400 transition-colors hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {isActive ? (
                <motion.span
                  layoutId="experience-switcher-pill"
                  transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                  className="absolute inset-0 rounded-full border border-white/10 bg-white/10"
                />
              ) : null}
              <span className="relative z-10">{tab.label}</span>
            </motion.button>
          );
        })}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        >
          <motion.div
            className="space-y-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06 } },
            }}
          >
            {items.map((entry) => (
              <motion.div key={entry.id} variants={cardItem}>
                <PortfolioEntryCard entry={entry} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
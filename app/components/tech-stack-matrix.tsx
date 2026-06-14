'use client';

import { motion } from 'framer-motion';
import { techStack } from '../../lib/data';
import { Badge } from './ui/badge';
import { Panel } from './ui/panel';
import { SectionHeading } from './ui/section-heading';

type ItemFamily = 'Language' | 'Framework' | 'Database' | 'Infrastructure' | 'Tool';

const familyOrder = ['Language', 'Framework', 'Database', 'Infrastructure', 'Tool'] as const;

const familyTone: Record<ItemFamily, 'cyan' | 'blue' | 'violet'> = {
  Language: 'blue',
  Framework: 'cyan',
  Database: 'blue',
  Infrastructure: 'violet',
  Tool: 'violet',
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const groupVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 140, damping: 14 } as const },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 8 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 160, damping: 14 } as const },
};

export function TechStackMatrix() {
  const grouped = familyOrder.map((family) => ({
    family,
    items: techStack.filter((item) => item.category === family),
  }));

  return (
    <section id="stack" className="space-y-5">
      <SectionHeading
        eyebrow="Technical stack matrix"
        title="Systems, data, and ML tooling"
        description="A compact inventory of the tools, frameworks, and infrastructure layers used across backend, GIS, and ML work."
      />

      <motion.div
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {grouped.map((group) => (
          <motion.div key={group.family} variants={groupVariants}>
            <Panel className="h-full p-4">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-sm font-semibold text-zinc-50">{group.family}</h3>
                <Badge tone={familyTone[group.family]}>Stack</Badge>
              </div>

              <motion.div
                className="mt-4 grid gap-3 sm:grid-cols-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {group.items.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition-colors duration-200 hover:border-white/20 hover:shadow-[0_0_20px_-6px_rgba(6,182,212,0.06)]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-medium text-zinc-50">{item.name}</p>
                      <Badge tone={familyTone[item.category]} className="normal-case tracking-normal">
                        {item.category}
                      </Badge>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-zinc-400">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </Panel>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
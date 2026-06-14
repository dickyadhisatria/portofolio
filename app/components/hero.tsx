'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { personalInfo } from '../../lib/data';
import { Badge } from './ui/badge';
import { Panel } from './ui/panel';
import { TelemetryCard } from './telemetry-card';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } as const },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 140, damping: 14 } as const },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 140, damping: 14, delay: i * 0.06 } as const,
  }),
};

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'start start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-20%', '0%']);

  return (
    <section
      id="overview"
      ref={sectionRef}
      className="relative grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.75fr)]"
    >
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute -inset-32 -z-10 opacity-40" aria-hidden />

      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-zinc-300">
          <motion.span
            className="h-1 w-1 rounded-full bg-cyan-400/70"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          Available for select backend roles
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-balance text-4xl font-semibold tracking-tighter text-zinc-50 md:text-5xl lg:text-6xl">
          {personalInfo.name}
          <span className="mt-3 block bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-2xl font-medium text-transparent md:text-3xl">
            {personalInfo.headline}
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-pretty text-sm leading-7 text-zinc-400/85 md:text-base">
          {personalInfo.summary}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
          <ContactLink href={`mailto:${personalInfo.email}`}>{personalInfo.email}</ContactLink>
          <ContactLink href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>{personalInfo.phone}</ContactLink>
          <ContactLink>{personalInfo.location}</ContactLink>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
          <Badge tone="neutral">Available for select backend roles</Badge>
          <Badge tone="blue">{personalInfo.linkedin}</Badge>
          <Badge tone="violet">{personalInfo.github}</Badge>
        </motion.div>

        <motion.div variants={itemVariants} className="grid gap-4 md:grid-cols-3">
          {[
            { label: 'Primary Focus', value: 'Backend systems', tone: 'blue' as const, note: 'Microservices, API contracts, and reliability' },
            { label: 'Spatial Layer', value: 'PostGIS delivery', tone: 'cyan' as const, note: 'GeoJSON, routing, and geospatial query design' },
            { label: 'ML Depth', value: 'CNN / TensorFlow', tone: 'violet' as const, note: 'Research-informed data pipelines and inference' },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              custom={i}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 200, damping: 16 }}
            >
              <Panel className="flex h-full flex-col p-5 transition-shadow duration-300 hover:shadow-[0_0_32px_-8px_rgba(6,182,212,0.08)]">
                <Badge tone={card.tone}>{card.label}</Badge>
                <p className="mt-3 text-base font-semibold text-zinc-50">{card.value}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-400/80">{card.note}</p>
              </Panel>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 6 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 140, damping: 14, delay: 0.12 }}
          className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl"
        >
          <Image
            src="/images/profile-picture.webp"
            alt={personalInfo.name}
            fill
            sizes="(max-width: 1024px) 100vw, 24rem"
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/40 to-transparent p-5 pt-16">
            <p className="text-sm font-medium text-zinc-50">{personalInfo.name}</p>
            <p className="mt-0.5 text-xs text-zinc-400">{personalInfo.location}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 6 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 140, damping: 14, delay: 0.18 }}
          whileHover={{ y: -4, scale: 1.01 }}
        >
          <TelemetryCard />
        </motion.div>
      </div>
    </section>
  );
}

function ContactLink({ href, children }: { href?: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.06]"
    >
      {children}
    </motion.a>
  );
}
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { certifications, personalInfo } from '../../lib/data';
import type { Certification } from '../../lib/types';
import { Badge } from './ui/badge';
import { Panel } from './ui/panel';
import { SectionHeading } from './ui/section-heading';
import { withBasePath } from '../../lib/base-path';

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 140, damping: 14 } as const },
};

const certContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
};

const certItem = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 160, damping: 14 } as const },
};

function CertificationCard({
  cert,
  onHover,
  onLeave,
}: {
  cert: Certification;
  onHover: (id: string) => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      className="group relative cursor-pointer rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition-all duration-200 hover:border-cyan-400/30 hover:bg-white/[0.06]"
      onMouseEnter={() => onHover(cert.id)}
      onMouseLeave={onLeave}
      whileHover={{ x: 2 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
    >
      <div className="flex items-start gap-3">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/5 p-1.5">
          <img
            src={withBasePath(cert.svgPath)}
            alt={`${cert.issuer} logo`}
            className="h-full w-full object-contain opacity-60 transition-opacity group-hover:opacity-100"
            loading="lazy"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-zinc-50">{cert.name}</p>
          <p className="mt-0.5 text-xs text-zinc-400">
            {cert.issuer} &middot; {cert.date}
          </p>
        </div>
      </div>
      <a
        href={cert.verifyUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-wider text-zinc-500 transition-colors hover:border-white/20 hover:text-zinc-200"
      >
        Verify
      </a>
    </motion.div>
  );
}

function CertificationPreview({ cert }: { cert: Certification }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 6 }}
      transition={{ type: 'spring', stiffness: 250, damping: 22 }}
      className="absolute right-full top-1/2 z-50 w-72 -translate-y-1/2 -mr-2 overflow-hidden rounded-xl border border-white/15 bg-zinc-900 shadow-2xl shadow-black/50 max-lg:right-1/2 max-lg:mr-0 max-lg:translate-x-1/2"
    >
      <div className="flex items-center justify-center bg-white p-4">
        <img
          src={withBasePath(cert.svgPath)}
          alt={cert.name}
          width={256}
          height={160}
          className="h-auto max-h-40 w-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="border-t border-white/10 px-4 py-3">
        <p className="truncate text-xs font-medium text-zinc-200">{cert.name}</p>
        <p className="mt-0.5 text-[10px] uppercase tracking-wider text-zinc-500">
          {cert.issuer} &middot; {cert.date}
        </p>
      </div>
    </motion.div>
  );
}

function ContactLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
    >
      {children}
    </motion.a>
  );
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </motion.div>
  );
}

export function ProfileRail() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const hoveredCert = hoveredId ? certifications.find((c) => c.id === hoveredId) ?? null : null;
  const railRef = useRef<HTMLDivElement>(null);

  return (
    <aside ref={railRef} id="profile" className="space-y-6 xl:sticky xl:top-24 self-start">
      <SectionHeading
        eyebrow="Profile rail"
        title="Education, credentials, and contact"
        description="A compact summary of the formal background and the best entry points for follow-up."
      />

      <AnimatedSection>
        <Panel className="p-5">
          <div className="space-y-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-300/70">Education</p>
            <h3 className="text-sm font-semibold text-zinc-50">{personalInfo.education.institution}</h3>
            <p className="text-sm text-zinc-300">{personalInfo.education.degree}</p>
            <p className="text-xs text-zinc-500">{personalInfo.location}</p>
          </div>

          <dl className="mt-4 space-y-3 border-t border-white/10 pt-4 text-sm">
            <div className="flex items-center justify-between gap-4">
              <dt className="text-zinc-500">Period</dt>
              <dd className="text-zinc-200">{personalInfo.education.period}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-zinc-500">Major / Minor</span>
              <dd className="text-zinc-200">
                <span className="text-zinc-200">Electrical Engineering / Telecommunications</span>
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-zinc-500">GPA</dt>
              <dd className="text-zinc-200">{personalInfo.education.gpa}</dd>
            </div>
          </dl>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-zinc-400"
          >
            {personalInfo.education.thesis}
          </motion.p>
        </Panel>
      </AnimatedSection>

      <AnimatedSection>
        <Panel className="p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-violet-300/70">Contact</p>
          <p className="mt-2 text-sm text-zinc-500">{personalInfo.location}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <ContactLink href={`mailto:${personalInfo.email}`}>Email</ContactLink>
            <ContactLink href={`https://wa.me/${personalInfo.phone.replace(/[-\s]/g, '')}`}>Whatsapp</ContactLink>
            <ContactLink href={`https://${personalInfo.linkedin}`}>LinkedIn</ContactLink>
            <ContactLink href={`https://${personalInfo.github}`}>GitHub</ContactLink>
          </div>
        </Panel>
      </AnimatedSection>

      <AnimatedSection>
        <Panel className="p-5">
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-blue-300/70">
              Certifications
            </p>
            <span className="font-mono text-[10px] text-zinc-500">{certifications.length} Total</span>
          </div>

          <motion.div
            className="relative mt-4 space-y-2"
            variants={certContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {certifications.map((cert) => (
              <motion.div key={cert.id} variants={certItem} className="relative">
                <CertificationCard
                  cert={cert}
                  onHover={setHoveredId}
                  onLeave={() => setHoveredId(null)}
                />
                <AnimatePresence>
                  {hoveredId === cert.id && hoveredCert && (
                    <CertificationPreview cert={hoveredCert} />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Badge tone="cyan">Backend</Badge>
            <Badge tone="blue">Spatial</Badge>
            <Badge tone="violet">ML</Badge>
          </div>
        </Panel>
      </AnimatedSection>
    </aside>
  );
}
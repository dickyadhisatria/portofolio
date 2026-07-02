'use client';

import { useEffect, useState } from 'react';
import { Badge } from './ui/badge';
import { Panel } from './ui/panel';

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Stack', href: '#stack' },
  { label: 'Work', href: '#work' },
  { label: 'Profile', href: '#profile' },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const listener = () => setScrolled(window.scrollY > 80);
    listener();
    window.addEventListener('scroll', listener, { passive: true });
    return () => window.removeEventListener('scroll', listener);
  }, []);

  return (
    <header
      className="sticky top-4 z-20 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(10,10,10,0.85)' : 'rgba(10,10,10,0)',
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
      }}
    >
      <Panel className="px-4 py-3">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex animate-[fadeIn_0.5s_ease-out_both] items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.05]">
              <span className="font-mono text-sm font-semibold tracking-[0.2em] text-cyan-200">DA</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-50">Dicky Adhi Satria</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                Engineering scalable backends, spatial systems, and AI pipelines
              </p>
            </div>
          </div>

          <nav
            className="flex animate-[fadeIn_0.5s_ease-out_0.05s_both] flex-wrap items-center gap-2"
            style={{ animationDelay: '0.05s' }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative rounded-full border border-white/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-zinc-300 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <Badge tone="cyan">Open to work</Badge>
          </nav>
        </div>
      </Panel>
    </header>
  );
}

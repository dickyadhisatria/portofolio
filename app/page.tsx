import { SiteHeader } from './components/site-header';
import { ExperienceSwitcher } from './components/experience-switcher';
import { Hero } from './components/hero';
import { MetricsRibbon } from './components/metrics-ribbon';
import { ProfileRail } from './components/profile-rail';
import { TechStackMatrix } from './components/tech-stack-matrix';

export default function HomePage() {
  return (
    <main className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(6,182,212,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(139,92,246,0.12),_transparent_32%),linear-gradient(to_bottom,_rgba(255,255,255,0.03),_transparent_24%)]"
      />

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <SiteHeader />
        <Hero />
        <MetricsRibbon />

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_24rem]">
          <div className="space-y-8">
            <TechStackMatrix />
            <ExperienceSwitcher />
          </div>
          <ProfileRail />
        </div>

        <footer className="border-t border-white/10 py-6 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            © {new Date().getFullYear()} Dicky Adhi Satria · Backend, Spatial, and ML systems
          </p>
        </footer>
      </div>
    </main>
  );
}

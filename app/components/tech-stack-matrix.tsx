import { techStack } from '../../lib/data';
import { Badge } from './ui/badge';
import { Panel } from './ui/panel';

type ItemFamily = 'Language' | 'Framework' | 'Database' | 'Infrastructure' | 'Tool';

const familyOrder = ['Language', 'Framework', 'Database', 'Infrastructure', 'Tool'] as const;

const familyTone: Record<ItemFamily, 'cyan' | 'blue' | 'violet'> = {
  Language: 'blue',
  Framework: 'cyan',
  Database: 'blue',
  Infrastructure: 'violet',
  Tool: 'violet',
};

const grouped = familyOrder.map((family) => ({
  family,
  items: techStack.filter((item) => item.category === family),
}));

export function TechStackMatrix() {

  return (
    <section id="stack" className="scroll-mt-24 space-y-5">
      <div className="space-y-2">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          Technical stack matrix
        </p>
        <h2 className="text-xl font-semibold tracking-tight text-zinc-50">
          Systems, data, and ML tooling
        </h2>
        <p className="text-sm leading-6 text-zinc-400">
          A compact inventory of the tools, frameworks, and infrastructure layers used across backend, GIS, and ML work.
        </p>
      </div>

      <div className="grid animate-[fadeIn_0.6s_ease-out_both] gap-4 md:grid-cols-2 xl:grid-cols-3">
        {grouped.map((group) => (
          <div key={group.family} className="animate-[fadeIn_0.5s_ease-out_both]">
            <Panel className="h-full p-4">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-sm font-semibold text-zinc-50">{group.family}</h3>
                <Badge tone={familyTone[group.family]}>Stack</Badge>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {group.items.map((item, i) => (
                  <div
                    key={item.name}
                    style={{ animationDelay: `${i * 0.07}s` } as React.CSSProperties}
                    className="group animate-[fadeIn_0.4s_ease-out_both] rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-white/20 hover:shadow-[0_0_20px_-6px_rgba(6,182,212,0.06)]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-medium text-zinc-50">{item.name}</p>
                      <Badge tone={familyTone[item.category]} className="normal-case tracking-normal">
                        {item.category}
                      </Badge>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-zinc-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        ))}
      </div>
    </section>
  );
}

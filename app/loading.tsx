export default function Loading() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.75fr)]">
        <div className="space-y-4">
          <div className="h-6 w-52 animate-pulse rounded-full bg-white/10" />
          <div className="h-16 w-full max-w-3xl animate-pulse rounded-3xl bg-white/10" />
          <div className="h-24 w-full max-w-4xl animate-pulse rounded-3xl bg-white/5" />
          <div className="flex flex-wrap gap-3">
            <div className="h-10 w-48 animate-pulse rounded-full bg-white/10" />
            <div className="h-10 w-40 animate-pulse rounded-full bg-white/10" />
            <div className="h-10 w-32 animate-pulse rounded-full bg-white/10" />
          </div>
        </div>
        <div className="h-[22rem] animate-pulse rounded-[1.25rem] border border-white/10 bg-white/5" />
      </div>

      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/10 sm:grid-cols-3 xl:grid-cols-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-28 animate-pulse bg-white/5" />
        ))}
      </div>

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_24rem]">
        <div className="space-y-4">
          <div className="h-8 w-64 animate-pulse rounded-full bg-white/10" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="h-56 animate-pulse rounded-[1.25rem] border border-white/10 bg-white/5" />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="h-8 w-56 animate-pulse rounded-full bg-white/10" />
          <div className="h-72 animate-pulse rounded-[1.25rem] border border-white/10 bg-white/5" />
          <div className="h-72 animate-pulse rounded-[1.25rem] border border-white/10 bg-white/5" />
        </div>
      </div>
    </main>
  );
}

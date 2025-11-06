import { ArrowUpRight, Flame, ShieldCheck, Users } from 'lucide-react';

export default function Hero({ onAddCoin }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-[1] bg-gradient-to-b from-indigo-50 to-white" aria-hidden />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm">
            <ShieldCheck className="h-3.5 w-3.5" />
            Community-driven coin listings
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Discover, vote and boost the next big crypto.
          </h1>
          <p className="mt-4 text-slate-600">
            Submit your token, collect votes, climb the rankings. Transparent, fast, and powered by the community.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={onAddCoin} className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-slate-800">
              List your coin
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <a href="#listing" className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50">
              Explore listings
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-indigo-500" /> 120k+ voters
            </div>
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-amber-500" /> Daily trending
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-tr from-indigo-100 via-white to-amber-100 blur-2xl" />
          <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
            <div className="mb-3 text-xs font-medium text-slate-500">Live spotlight</div>
            <div className="flex items-center justify-between rounded-md bg-slate-50 p-4">
              <div>
                <div className="text-sm font-semibold">FLAME</div>
                <div className="text-xs text-slate-500">Flames Protocol</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-emerald-600">+18.2%</div>
                <div className="text-xs text-slate-500">24h votes</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-md border border-slate-200 p-3">
                <div className="text-xs text-slate-500">Votes</div>
                <div className="text-lg font-bold">12,435</div>
              </div>
              <div className="rounded-md border border-slate-200 p-3">
                <div className="text-xs text-slate-500">Rank</div>
                <div className="text-lg font-bold">#3</div>
              </div>
              <div className="rounded-md border border-slate-200 p-3">
                <div className="text-xs text-slate-500">Launch</div>
                <div className="text-lg font-bold">Q4 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Rocket, Star } from 'lucide-react';

export default function Navbar({ onAddCoin }) {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white shadow">
            <Rocket className="h-5 w-5" />
          </div>
          <div className="font-semibold">CoinVote</div>
        </div>

        <nav className="hidden gap-6 md:flex">
          <a className="text-sm text-slate-600 hover:text-slate-900" href="#">Listings</a>
          <a className="text-sm text-slate-600 hover:text-slate-900" href="#">Trending</a>
          <a className="text-sm text-slate-600 hover:text-slate-900" href="#">Airdrops</a>
          <a className="text-sm text-slate-600 hover:text-slate-900" href="#">Promote</a>
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={onAddCoin} className="hidden rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 md:block">
            Add Coin
          </button>
          <button className="inline-flex items-center gap-1 rounded-md bg-amber-500 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-amber-600">
            <Star className="h-4 w-4" />
            Top Today
          </button>
        </div>
      </div>
    </header>
  );
}

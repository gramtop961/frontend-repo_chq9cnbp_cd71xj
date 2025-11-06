import { ArrowUpRight, Heart } from 'lucide-react';

export default function CoinCard({ coin, onVote }) {
  const changeColor = coin.change >= 0 ? 'text-emerald-600' : 'text-rose-600';
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <img src={coin.logo} alt={coin.symbol} className="h-9 w-9 rounded" />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">{coin.name}</span>
              <span className="text-xs text-slate-500">{coin.symbol}</span>
            </div>
            <div className="text-xs text-slate-500">{coin.chain}</div>
          </div>
        </div>
        <div className={`text-xs font-semibold ${changeColor}`}>{coin.change}%</div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="text-xs text-slate-500">24h votes</div>
        <div className="text-sm font-bold">{coin.votes.toLocaleString()}</div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button onClick={() => onVote(coin.id)} className="inline-flex items-center gap-1 rounded-md bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800">
          Vote
          <Heart className="h-3.5 w-3.5" />
        </button>
        <a href="#" className="inline-flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-700">
          Explore
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

import CoinCard from './CoinCard.jsx';

export default function CoinList({ coins, onVote }) {
  return (
    <section id="listing" className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-xl font-bold">Trending Today</h2>
          <p className="text-sm text-slate-500">Most voted coins in the last 24 hours</p>
        </div>
        <div className="flex gap-2">
          <select className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm">
            <option>All chains</option>
            <option>Ethereum</option>
            <option>Solana</option>
            <option>BNB Chain</option>
          </select>
          <select className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm">
            <option>Sort by votes</option>
            <option>Newest</option>
            <option>Gainers</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {coins.map((c) => (
          <CoinCard key={c.id} coin={c} onVote={onVote} />
        ))}
      </div>
    </section>
  );
}

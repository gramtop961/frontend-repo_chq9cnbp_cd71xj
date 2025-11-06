import { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CoinList from './components/CoinList.jsx';

function App() {
  const [coins, setCoins] = useState([
    {
      id: '1',
      name: 'Flames Protocol',
      symbol: 'FLAME',
      chain: 'Ethereum',
      votes: 12435,
      change: 18.2,
      logo: 'https://avatars.githubusercontent.com/u/9919?s=200&v=4',
    },
    {
      id: '2',
      name: 'Solar Cat',
      symbol: 'SCAT',
      chain: 'Solana',
      votes: 9822,
      change: 9.4,
      logo: 'https://avatars.githubusercontent.com/u/210414?s=200&v=4',
    },
    {
      id: '3',
      name: 'Nano Frog',
      symbol: 'NFROG',
      chain: 'BNB Chain',
      votes: 7540,
      change: -4.1,
      logo: 'https://avatars.githubusercontent.com/u/6128107?s=200&v=4',
    },
  ]);

  const totalVotes = useMemo(() => coins.reduce((s, c) => s + c.votes, 0), [coins]);

  const handleVote = (id) => {
    setCoins((prev) =>
      prev
        .map((c) => (c.id === id ? { ...c, votes: c.votes + 1 } : c))
        .sort((a, b) => b.votes - a.votes)
    );
  };

  const handleAddCoin = () => {
    const name = prompt('Coin name');
    const symbol = prompt('Symbol');
    if (!name || !symbol) return;
    const newCoin = {
      id: String(Date.now()),
      name,
      symbol: symbol.toUpperCase(),
      chain: 'Ethereum',
      votes: 0,
      change: 0,
      logo: 'https://avatars.githubusercontent.com/u/49699333?s=200&v=4',
    };
    setCoins((prev) => [newCoin, ...prev]);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onAddCoin={handleAddCoin} />
      <Hero onAddCoin={handleAddCoin} />

      <section className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="text-sm text-slate-600">Total votes today</div>
          <div className="text-lg font-bold">{totalVotes.toLocaleString()}</div>
        </div>
      </section>

      <CoinList coins={coins} onVote={handleVote} />

      <footer className="mt-16 border-t border-slate-200 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} CoinVote — Community coin rankings
      </footer>
    </div>
  );
}

export default App;

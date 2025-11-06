import { useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import OverviewCards from './components/OverviewCards.jsx';
import TransactionsTable from './components/TransactionsTable.jsx';
import BudgetPlanner from './components/BudgetPlanner.jsx';

function App() {
  // Dati di esempio iniziali
  const [transactions, setTransactions] = useState([
    { id: 't1', date: '2025-10-01', description: 'Stipendio', category: 'Entrate', type: 'entrata', amount: 2200 },
    { id: 't2', date: '2025-10-03', description: 'Affitto', category: 'Casa', type: 'uscita', amount: 850 },
    { id: 't3', date: '2025-10-05', description: 'Spesa settimanale', category: 'Spesa', type: 'uscita', amount: 92.4 },
    { id: 't4', date: '2025-10-07', description: 'Abbonamento palestra', category: 'Benessere', type: 'uscita', amount: 29.9 },
    { id: 't5', date: '2025-10-08', description: 'Lavoretto freelance', category: 'Entrate', type: 'entrata', amount: 320 },
  ]);

  const [budgets, setBudgets] = useState([
    { id: 'b1', category: 'Spesa', limit: 400 },
    { id: 'b2', category: 'Casa', limit: 900 },
    { id: 'b3', category: 'Trasporti', limit: 120 },
    { id: 'b4', category: 'Svago', limit: 150 },
  ]);

  const totals = useMemo(() => {
    const entrate = transactions.filter(t => t.type === 'entrata').reduce((s, t) => s + t.amount, 0);
    const uscite = transactions.filter(t => t.type === 'uscita').reduce((s, t) => s + t.amount, 0);
    const saldo = entrate - uscite;
    return { entrate, uscite, saldo };
  }, [transactions]);

  const addTransaction = (tx) => {
    setTransactions(prev => [{ id: `t${Date.now()}`, ...tx }, ...prev]);
  };

  const updateBudgetLimit = (id, newLimit) => {
    setBudgets(prev => prev.map(b => (b.id === id ? { ...b, limit: newLimit } : b)));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header onAdd={addTransaction} />

      <main className="mx-auto max-w-6xl px-4 pb-16">
        <section className="py-6">
          <OverviewCards saldo={totals.saldo} entrate={totals.entrate} uscite={totals.uscite} />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TransactionsTable transactions={transactions} onAdd={addTransaction} />
          </div>
          <div className="lg:col-span-1">
            <BudgetPlanner transactions={transactions} budgets={budgets} onUpdateLimit={updateBudgetLimit} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

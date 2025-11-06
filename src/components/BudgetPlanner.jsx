import { useMemo } from 'react';
import { Pencil } from 'lucide-react';

export default function BudgetPlanner({ transactions, budgets, onUpdateLimit }) {
  const spendingByCategory = useMemo(() => {
    const map = {};
    transactions.filter(t => t.type === 'uscita').forEach(t => {
      map[t.category] = (map[t.category] || 0) + t.amount;
    });
    return map;
  }, [transactions]);

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-4">
      <h3 className="font-semibold mb-3">Budget</h3>
      <div className="space-y-4">
        {budgets.map(b => {
          const spent = spendingByCategory[b.category] || 0;
          const ratio = Math.min(1, spent / b.limit);
          return (
            <div key={b.id} className="">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-slate-600">{b.category}</span>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">{spent.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })} / {b.limit.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</span>
                  <button onClick={() => {
                    const value = prompt('Nuovo limite per ' + b.category, String(b.limit));
                    if (value) {
                      const num = parseFloat(value);
                      if (!isNaN(num) && num > 0) onUpdateLimit(b.id, num);
                    }
                  }} className="p-1 hover:bg-slate-100 rounded">
                    <Pencil className="h-4 w-4 text-slate-500" />
                  </button>
                </div>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className={`${ratio < 0.8 ? 'bg-emerald-500' : ratio < 1 ? 'bg-amber-500' : 'bg-rose-500'} h-full`} style={{ width: `${ratio * 100}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

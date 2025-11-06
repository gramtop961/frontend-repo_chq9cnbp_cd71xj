import { useMemo, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Filter } from 'lucide-react';

export default function TransactionsTable({ transactions, onAdd }) {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('tutte');

  const filtered = useMemo(() => {
    return transactions.filter(t => {
      const matchesQuery = [t.description, t.category].join(' ').toLowerCase().includes(query.toLowerCase());
      const matchesType = type === 'tutte' || t.type === type;
      return matchesQuery && matchesType;
    });
  }, [transactions, query, type]);

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="p-4 flex flex-wrap items-center gap-3 border-b border-slate-100">
        <div className="flex items-center gap-2 text-slate-600">
          <Filter className="h-4 w-4" />
          <span className="text-sm">Filtri</span>
        </div>
        <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Cerca descrizione o categoria..." className="flex-1 min-w-48 rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500" />
        <select value={type} onChange={(e)=>setType(e.target.value)} className="rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500">
          <option value="tutte">Tutte</option>
          <option value="entrata">Entrate</option>
          <option value="uscita">Uscite</option>
        </select>
      </div>

      <div className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="text-left px-4 py-3 font-medium">Data</th>
              <th className="text-left px-4 py-3 font-medium">Descrizione</th>
              <th className="text-left px-4 py-3 font-medium">Categoria</th>
              <th className="text-right px-4 py-3 font-medium">Importo</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(t => (
              <tr key={t.id} className="border-t border-slate-100">
                <td className="px-4 py-3 whitespace-nowrap text-slate-600">{new Date(t.date).toLocaleDateString('it-IT')}</td>
                <td className="px-4 py-3">{t.description}</td>
                <td className="px-4 py-3 text-slate-600">{t.category}</td>
                <td className={`px-4 py-3 text-right font-medium ${t.type === 'entrata' ? 'text-emerald-600' : 'text-rose-600'}`}>
                  <span className="inline-flex items-center gap-1">
                    {t.type === 'entrata' ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                    {t.amount.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
                  </span>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-10 text-center text-slate-500">Nessun movimento trovato</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

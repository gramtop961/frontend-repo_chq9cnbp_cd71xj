import { useState } from 'react';
import { Wallet, Plus, Menu } from 'lucide-react';

const categories = ['Entrate', 'Casa', 'Spesa', 'Trasporti', 'Svago', 'Benessere', 'Altro'];

export default function Header({ onAdd }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    description: '',
    category: 'Spesa',
    type: 'uscita',
    amount: ''
  });

  const submit = (e) => {
    e.preventDefault();
    const amount = parseFloat(form.amount);
    if (!form.description || !amount || amount <= 0) return;
    onAdd({ ...form, amount });
    setForm({ ...form, description: '', amount: '' });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Wallet className="h-6 w-6 text-indigo-600" />
          <span className="font-semibold text-lg">Finance Manager</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-3 py-2 text-sm shadow-sm hover:bg-indigo-500">
            <Plus className="h-4 w-4" />
            Aggiungi movimento
          </button>
          <button className="lg:hidden p-2 rounded-md hover:bg-slate-100">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200">
          <form onSubmit={submit} className="mx-auto max-w-6xl px-4 py-4 grid grid-cols-1 md:grid-cols-6 gap-3">
            <input value={form.date} onChange={(e)=>setForm(f=>({...f, date:e.target.value}))} type="date" className="md:col-span-1 w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500" />
            <input value={form.description} onChange={(e)=>setForm(f=>({...f, description:e.target.value}))} placeholder="Descrizione" className="md:col-span-2 w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500" />
            <select value={form.category} onChange={(e)=>setForm(f=>({...f, category:e.target.value}))} className="md:col-span-1 w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500">
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={form.type} onChange={(e)=>setForm(f=>({...f, type:e.target.value}))} className="md:col-span-1 w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500">
              <option value="entrata">Entrata</option>
              <option value="uscita">Uscita</option>
            </select>
            <input value={form.amount} onChange={(e)=>setForm(f=>({...f, amount:e.target.value}))} type="number" step="0.01" placeholder="Importo" className="md:col-span-1 w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500" />
            <div className="md:col-span-6 flex justify-end gap-2">
              <button type="button" onClick={()=>setOpen(false)} className="px-3 py-2 rounded-md border border-slate-300 hover:bg-slate-50">Annulla</button>
              <button type="submit" className="px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500">Salva</button>
            </div>
          </form>
        </div>
      )}
    </header>
  );
}

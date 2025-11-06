import { ArrowDownRight, ArrowUpRight, PiggyBank } from 'lucide-react';

export default function OverviewCards({ saldo, entrate, uscite }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-slate-500 text-sm">Saldo</span>
          <PiggyBank className="h-5 w-5 text-emerald-600" />
        </div>
        <div className={`mt-3 text-2xl font-semibold ${saldo >= 0 ? 'text-emerald-700' : 'text-rose-600'}`}>{saldo.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</div>
        <p className="text-xs text-slate-500 mt-1">Disponibile</p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-slate-500 text-sm">Entrate</span>
          <ArrowUpRight className="h-5 w-5 text-emerald-600" />
        </div>
        <div className="mt-3 text-2xl font-semibold text-emerald-700">{entrate.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</div>
        <p className="text-xs text-slate-500 mt-1">Totale mese</p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-slate-500 text-sm">Uscite</span>
          <ArrowDownRight className="h-5 w-5 text-rose-600" />
        </div>
        <div className="mt-3 text-2xl font-semibold text-rose-700">{uscite.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</div>
        <p className="text-xs text-slate-500 mt-1">Totale mese</p>
      </div>
    </div>
  );
}

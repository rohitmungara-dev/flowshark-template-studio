import type { DocumentData, Template } from '../types'
import { calculateTotals, formatMoney } from '../utils/formatters'
import { Zap, Terminal, Shield, Lock, CreditCard, Mail, Phone, Globe } from 'lucide-react'

type Props = {
  data: DocumentData
  template: Template
  accent: string
}

export default function InvoiceDarkBold({ data, template, accent }: Props) {
  const { subtotal, discount, tax, total } = calculateTotals(data)
  const violetAccent = template.color || '#7864ff'
  const dynamicViolet = accent || violetAccent

  return (
    <article
      className="darkbold-invoice w-full max-w-[800px] min-h-[1060px] bg-[#0c0b14] text-[#e2e1ec] font-['DM_Sans',sans-serif] shadow-2xl relative flex flex-col justify-between overflow-hidden p-8 sm:p-11 border border-violet-900/40"
      style={{
        '--darkbold-violet': dynamicViolet
      } as React.CSSProperties}
    >
      {/* Background ambient neon glow effects */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[110px] opacity-25 pointer-events-none"
        style={{ background: dynamicViolet }}
      />
      <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-indigo-950/40 blur-[90px] pointer-events-none" />

      {/* Top Electric Violet Accent Line */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5 shadow-[0_0_15px_rgba(120,100,255,0.6)]"
        style={{ background: dynamicViolet }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        {/* 1. High-Impact Typography & Clear Invoice Metadata */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 pb-6 border-b border-violet-900/30">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-extrabold text-2xl shadow-lg border border-violet-400/40"
              style={{
                background: `linear-gradient(135deg, ${dynamicViolet}, #3b1c8f)`
              }}
            >
              F
            </div>
            <div>
              <div className="text-xl font-black tracking-tight text-white flex items-center gap-1.5 font-['Manrope',sans-serif]">
                <span>{data.company || 'Flowshark.ai'}</span>
                <span
                  className="w-2 h-2 rounded-full animate-ping"
                  style={{ background: dynamicViolet }}
                />
              </div>
              <p className="text-xs text-violet-300/80 font-mono mt-0.5 tracking-wider">
                {data.tagline || 'HIGH VELOCITY CLIENT OPS'}
              </p>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <h1
              className="text-4xl sm:text-5xl font-black tracking-tight uppercase leading-none font-['Manrope',sans-serif]"
              style={{
                color: '#ffffff',
                textShadow: `0 0 25px ${dynamicViolet}88`
              }}
            >
              INVOICE
            </h1>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-mono font-bold bg-violet-950/80 border border-violet-500/40 text-violet-200 mt-2">
              <Zap size={12} style={{ color: dynamicViolet }} />
              <span>TRANSACTION SPEC</span>
            </div>
          </div>
        </div>

        {/* Clear Invoice Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          <div className="bg-[#141324] border border-violet-900/40 rounded-xl p-3 shadow-inner">
            <span className="text-[9px] uppercase tracking-wider text-violet-400 block font-mono">
              INVOICE ID
            </span>
            <span className="font-mono text-xs font-bold text-white">
              {data.documentNumber}
            </span>
          </div>

          <div className="bg-[#141324] border border-violet-900/40 rounded-xl p-3 shadow-inner">
            <span className="text-[9px] uppercase tracking-wider text-violet-400 block font-mono">
              TIMESTAMP
            </span>
            <span className="text-xs font-medium text-slate-200">
              {data.issueDate}
            </span>
          </div>

          <div className="bg-[#17152b] border border-violet-600/50 rounded-xl p-3 shadow-inner">
            <span className="text-[9px] uppercase tracking-wider text-violet-300 block font-mono">
              DUE DATE
            </span>
            <span className="text-xs font-bold text-violet-200">
              {data.dueDate}
            </span>
          </div>

          <div className="bg-[#141324] border border-violet-900/40 rounded-xl p-3 shadow-inner">
            <span className="text-[9px] uppercase tracking-wider text-violet-400 block font-mono">
              PROTOCOL
            </span>
            <span className="text-xs font-medium text-slate-200">
              {data.terms}
            </span>
          </div>
        </div>

        {/* Client Card: Recipient Data */}
        <div className="bg-[#131222] border border-violet-900/50 rounded-2xl p-5 mb-6 relative overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 w-1.5"
            style={{ background: dynamicViolet }}
          />
          <span className="text-[9px] font-mono uppercase tracking-widest text-violet-400 block mb-1">
            TARGET ENTITY / BILLED CLIENT
          </span>
          <h2 className="text-lg font-bold text-white font-['Manrope',sans-serif]">
            {data.client || 'Client Organization'}
          </h2>
          <p className="text-xs text-slate-400 mt-1 whitespace-pre-line leading-relaxed">
            {data.clientAddress}
          </p>
        </div>

        {/* 2. Dark Table Surfaces with Subtle Borders */}
        <div className="mb-6 flex-1">
          <div className="rounded-xl overflow-hidden border border-violet-900/40 bg-[#121120] shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1a182e] border-b border-violet-800/40 text-violet-200 text-[10px] uppercase font-mono tracking-wider">
                  <th className="py-3 px-4 w-12 text-center">#</th>
                  <th className="py-3 px-4 text-white">Itemized Specifications</th>
                  <th className="py-3 px-3 text-right w-16">Units</th>
                  <th className="py-3 px-4 text-right w-28">Rate</th>
                  <th className="py-3 px-4 text-right w-32 text-white">Net Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-violet-950/70 text-xs">
                {data.items.map((item, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-[#121120]' : 'bg-[#151326]'}
                  >
                    <td className="py-3.5 px-4 text-center font-mono text-violet-400/80 text-[11px]">
                      {String(idx + 1).padStart(2, '0')}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-100">
                      {item.description}
                    </td>
                    <td className="py-3.5 px-3 text-right text-slate-400 font-mono">
                      {item.qty}
                    </td>
                    <td className="py-3.5 px-4 text-right text-slate-400 font-mono">
                      {formatMoney(item.price, data.currency)}
                    </td>
                    <td className="py-3.5 px-4 text-right font-bold text-white font-mono">
                      {formatMoney(item.qty * item.price, data.currency)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Distinct Payment & Total Panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start mb-6">
          {/* Distinct Payment Panel */}
          <div className="bg-[#141226] border border-violet-900/50 rounded-2xl p-5 text-xs text-slate-300">
            <div className="flex items-center gap-2 mb-3 text-white font-bold font-['Manrope',sans-serif]">
              <CreditCard size={15} style={{ color: dynamicViolet }} />
              <span>Remittance Protocol & Routing</span>
            </div>
            <div className="space-y-2 text-[11px] font-mono">
              <div className="flex justify-between border-b border-violet-950 pb-1.5">
                <span className="text-violet-400">Account Name:</span>
                <span className="text-white font-semibold">{data.company || 'Flowshark Core'}</span>
              </div>
              <div className="flex justify-between border-b border-violet-950 pb-1.5">
                <span className="text-violet-400">Remittance Ref:</span>
                <span className="text-violet-200 font-bold">{data.documentNumber}</span>
              </div>
              <div className="flex justify-between border-b border-violet-950 pb-1.5">
                <span className="text-violet-400">Accepted:</span>
                <span className="text-slate-200">ACH / Wire / Corporate Card</span>
              </div>
            </div>
            {data.notes && (
              <div className="mt-3 pt-2 border-t border-violet-950 text-[10px] text-violet-300/80 italic font-sans">
                "{data.notes}"
              </div>
            )}
          </div>

          {/* Distinct Total Panel */}
          <div
            className="rounded-2xl p-5 border shadow-xl"
            style={{
              background: 'linear-gradient(145deg, #18152e, #110f22)',
              borderColor: `${dynamicViolet}66`
            }}
          >
            <div className="space-y-2 text-xs text-slate-300 mb-3">
              <div className="flex justify-between">
                <span className="text-slate-400">Subtotal</span>
                <span className="font-mono text-white font-medium">
                  {formatMoney(subtotal, data.currency)}
                </span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-violet-400">
                  <span>Rebate / Discount</span>
                  <span className="font-mono font-bold">
                    −{formatMoney(discount, data.currency)}
                  </span>
                </div>
              )}
              <div className="flex justify-between border-b border-violet-900/40 pb-2">
                <span className="text-slate-400">Tax ({data.tax}%)</span>
                <span className="font-mono text-white font-medium">
                  {formatMoney(tax, data.currency)}
                </span>
              </div>
            </div>

            {/* Glowing Total Box */}
            <div
              className="rounded-xl p-4 text-white flex justify-between items-center shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${dynamicViolet}, #4c1d95)`
              }}
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-violet-200 block">
                  SETTLEMENT TOTAL
                </span>
                <span className="text-[10px] text-violet-100">Due {data.dueDate}</span>
              </div>
              <div className="text-2xl font-black font-mono tracking-tight text-white">
                {formatMoney(total, data.currency)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. High-Contrast Footer with Readable Text */}
      <footer className="relative z-10 pt-4 mt-2 border-t border-violet-900/50 text-[11px] text-slate-300 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-bold text-white">
          <Terminal size={14} style={{ color: dynamicViolet }} />
          <span>{data.company || 'Flowshark.ai'} Production Core</span>
        </div>
        <div className="flex items-center gap-5 text-slate-300">
          <span className="flex items-center gap-1.5"><Mail size={12} style={{ color: dynamicViolet }} /> dispatch@flowshark.ai</span>
          <span className="flex items-center gap-1.5"><Globe size={12} style={{ color: dynamicViolet }} /> flowshark.ai</span>
        </div>
        <div className="flex items-center gap-1.5 text-violet-400 font-mono text-[10px]">
          <Lock size={11} />
          <span>Secured Ledger</span>
        </div>
      </footer>
    </article>
  )
}

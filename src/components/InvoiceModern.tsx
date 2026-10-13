import type { DocumentData, Template } from '../types'
import { calculateTotals, formatMoney } from '../utils/formatters'
import { CreditCard, Calendar, Hash, Clock, FileText, CheckCircle2, Mail, Phone, Globe, MapPin } from 'lucide-react'

type Props = {
  data: DocumentData
  template: Template
  accent: string
}

export default function InvoiceModern({ data, template, accent }: Props) {
  const { subtotal, discount, tax, total } = calculateTotals(data)
  const violetColor = template.color || '#5838e8'
  const dynamicViolet = accent || violetColor

  return (
    <article
      className="modern-invoice w-full max-w-[800px] min-h-[1060px] bg-gradient-to-br from-white via-[#faf9ff] to-[#f3f0ff] text-[#1e1b4b] font-['DM_Sans',sans-serif] shadow-2xl relative flex flex-col justify-between overflow-hidden p-8 sm:p-10 border border-violet-100/80"
      style={{
        '--modern-violet': dynamicViolet
      } as React.CSSProperties}
    >
      {/* Subtle decorative circles background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-violet-200/30 blur-2xl pointer-events-none" />
      <div className="absolute top-48 right-16 w-48 h-48 rounded-full border border-violet-200/40 pointer-events-none" />
      <div className="absolute top-56 right-24 w-32 h-32 rounded-full border border-violet-300/30 pointer-events-none" />
      <div className="absolute bottom-16 -left-16 w-64 h-64 rounded-full bg-indigo-200/20 blur-xl pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        {/* Header: Logo on Upper Left & Prominent Violet Heading on the Right */}
        <div className="flex flex-row items-start justify-between gap-6 pb-6 border-b border-violet-100">
          {/* Upper Left: Brand Logo */}
          <div className="flex items-center gap-3.5">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-violet-500/25"
              style={{ background: dynamicViolet }}
            >
              F
            </div>
            <div>
              <div className="text-xl font-extrabold tracking-tight text-[#16123f] flex items-center gap-1 font-['Manrope',sans-serif]">
                <span>{data.company || 'Flowshark.ai'}</span>
                <span className="w-2 h-2 rounded-full" style={{ background: dynamicViolet }} />
              </div>
              <p className="text-xs font-medium text-violet-600/80 mt-0.5 tracking-wide">
                {data.tagline || 'Intelligent Client Operations'}
              </p>
            </div>
          </div>

          {/* Upper Right: Prominent Violet Invoice Heading */}
          <div className="text-right">
            <h1
              className="text-4xl sm:text-5xl font-black tracking-tight uppercase"
              style={{
                color: dynamicViolet,
                fontFamily: "'Manrope', sans-serif"
              }}
            >
              INVOICE
            </h1>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-100/70 text-violet-800 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-pulse" />
              <span>ELECTRONIC INVOICE</span>
            </div>
          </div>
        </div>

        {/* Separate Invoice Number, Issue Date, Due Date & Terms Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          <div className="bg-white/90 backdrop-blur-sm border border-violet-100 rounded-xl p-3.5 shadow-sm">
            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-violet-500 mb-1">
              <Hash size={11} />
              <span>Invoice No</span>
            </div>
            <div className="font-mono text-sm font-bold text-[#16123f]">
              {data.documentNumber}
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm border border-violet-100 rounded-xl p-3.5 shadow-sm">
            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-violet-500 mb-1">
              <Calendar size={11} />
              <span>Issue Date</span>
            </div>
            <div className="text-xs font-semibold text-[#16123f]">
              {data.issueDate}
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm border border-violet-200 rounded-xl p-3.5 shadow-sm relative overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ background: dynamicViolet }}
            />
            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-violet-600 mb-1">
              <Clock size={11} />
              <span>Due Date</span>
            </div>
            <div className="text-xs font-bold text-violet-900">
              {data.dueDate}
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm border border-violet-100 rounded-xl p-3.5 shadow-sm">
            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-violet-500 mb-1">
              <FileText size={11} />
              <span>Payment Terms</span>
            </div>
            <div className="text-xs font-semibold text-[#16123f]">
              {data.terms}
            </div>
          </div>
        </div>

        {/* Client Card: Recipient Information */}
        <div className="bg-white/80 backdrop-blur-sm border border-violet-100/90 rounded-2xl p-5 mb-6 shadow-sm flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-violet-500 block mb-1">
              BILLED RECIPIENT
            </span>
            <h2 className="text-base font-extrabold text-[#15123d] font-['Manrope',sans-serif]">
              {data.client || 'Client Organization'}
            </h2>
            <p className="text-xs text-slate-500 mt-1 whitespace-pre-line leading-relaxed">
              {data.clientAddress}
            </p>
          </div>
          <div className="px-4 py-2.5 rounded-xl bg-violet-50 text-violet-700 text-xs font-semibold border border-violet-200/60 self-start sm:self-auto flex items-center gap-2">
            <CheckCircle2 size={14} className="text-violet-600" />
            <span>Verified Customer Account</span>
          </div>
        </div>

        {/* Full-Width Purple Table Header & Line Items */}
        <div className="mb-6 flex-1">
          <div className="rounded-2xl overflow-hidden border border-violet-100 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr style={{ background: dynamicViolet }} className="text-white">
                  <th className="py-3.5 px-4 text-[11px] font-bold tracking-wider uppercase w-12 text-center text-violet-100">
                    #
                  </th>
                  <th className="py-3.5 px-4 text-[11px] font-bold tracking-wider uppercase text-white">
                    Item Description
                  </th>
                  <th className="py-3.5 px-3 text-[11px] font-bold tracking-wider uppercase text-right w-16 text-violet-100">
                    Qty
                  </th>
                  <th className="py-3.5 px-4 text-[11px] font-bold tracking-wider uppercase text-right w-28 text-violet-100">
                    Unit Price
                  </th>
                  <th className="py-3.5 px-4 text-[11px] font-bold tracking-wider uppercase text-right w-32 text-white">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-violet-50 text-xs">
                {data.items.map((item, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-violet-50/30'}
                  >
                    <td className="py-3.5 px-4 text-center text-violet-400 font-mono text-[11px]">
                      {String(idx + 1).padStart(2, '0')}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-[#1e1b4b]">
                      {item.description}
                    </td>
                    <td className="py-3.5 px-3 text-right text-slate-600 font-mono">
                      {item.qty}
                    </td>
                    <td className="py-3.5 px-4 text-right text-slate-600 font-mono">
                      {formatMoney(item.price, data.currency)}
                    </td>
                    <td className="py-3.5 px-4 text-right font-bold text-violet-900 font-mono">
                      {formatMoney(item.qty * item.price, data.currency)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Lower Section: Rounded Lavender Payment-Info Card (Left) & Separate Totals Card with Violet Total Bar (Right) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start mb-6">
          {/* Rounded Lavender Payment-Information Card */}
          <div className="bg-[#ede9fe]/70 border border-violet-200/80 rounded-2xl p-5 text-xs text-[#2e266d]">
            <div className="flex items-center gap-2 mb-3 text-violet-900 font-bold">
              <CreditCard size={16} className="text-violet-600" />
              <h3 className="font-['Manrope',sans-serif] text-sm">Payment Information</h3>
            </div>
            <div className="space-y-2 text-[11px]">
              <div className="flex justify-between border-b border-violet-200/60 pb-1.5">
                <span className="text-violet-600 font-medium">Bank Name</span>
                <span className="font-bold text-[#1e1b4b]">Silicon Tech Bank</span>
              </div>
              <div className="flex justify-between border-b border-violet-200/60 pb-1.5">
                <span className="text-violet-600 font-medium">Account Name</span>
                <span className="font-bold text-[#1e1b4b]">{data.company || 'Flowshark.ai'}</span>
              </div>
              <div className="flex justify-between border-b border-violet-200/60 pb-1.5">
                <span className="text-violet-600 font-medium">Payment Reference</span>
                <span className="font-mono font-bold text-violet-800">{data.documentNumber}</span>
              </div>
              <div className="flex justify-between pt-0.5">
                <span className="text-violet-600 font-medium">Payment Protocol</span>
                <span className="font-semibold text-[#1e1b4b]">{data.terms}</span>
              </div>
            </div>
          </div>

          {/* Separate Totals Card with Strong Violet Total Bar */}
          <div className="bg-white border border-violet-100 rounded-2xl p-5 shadow-sm">
            <div className="space-y-2 text-xs text-slate-600 mb-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono font-semibold text-slate-800">
                  {formatMoney(subtotal, data.currency)}
                </span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-violet-600">
                  <span>Loyalty Discount</span>
                  <span className="font-mono font-bold">
                    −{formatMoney(discount, data.currency)}
                  </span>
                </div>
              )}
              <div className="flex justify-between border-b border-violet-50 pb-2">
                <span>Tax ({data.tax}%)</span>
                <span className="font-mono font-semibold text-slate-800">
                  {formatMoney(tax, data.currency)}
                </span>
              </div>
            </div>

            {/* Strong Violet Total Bar */}
            <div
              className="rounded-xl p-4 text-white shadow-md flex justify-between items-center"
              style={{ background: dynamicViolet }}
            >
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-violet-200 block">
                  AMOUNT PAYABLE
                </span>
                <span className="text-[10px] text-violet-100">Due {data.dueDate}</span>
              </div>
              <div className="text-2xl font-black font-mono tracking-tight text-white">
                {formatMoney(total, data.currency)}
              </div>
            </div>
          </div>
        </div>

        {/* Notes & Signature Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-end pt-2 pb-4">
          <div className="text-xs text-slate-500 bg-white/60 p-4 rounded-xl border border-violet-100/60">
            <span className="text-[10px] font-bold uppercase tracking-wider text-violet-600 block mb-1">
              Client Note & Guidelines
            </span>
            <p className="italic text-[11px] leading-relaxed">
              "{data.notes || 'Thank you for choosing Flowshark.ai. We appreciate your partnership.'}"
            </p>
          </div>

          {/* Signature Area */}
          <div className="flex flex-col items-end pr-2">
            <div className="w-48 text-center">
              <div className="h-10 border-b-2 border-violet-300 flex items-end justify-center pb-1">
                <span className="font-serif italic text-sm text-violet-700 font-bold">
                  {data.company ? `${data.company} Finance` : 'Flowshark Operations'}
                </span>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mt-1 block">
                Authorized Signatory
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Light Contact Footer */}
      <footer className="relative z-10 pt-4 mt-2 border-t border-violet-100 text-[10px] text-slate-400 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 font-bold text-violet-900">
          <span>{data.company || 'Flowshark.ai'}</span>
          <span>· Modern SaaS Invoicing</span>
        </div>
        <div className="flex items-center gap-4 text-slate-500">
          <span className="flex items-center gap-1"><Mail size={11} className="text-violet-600" /> support@flowshark.ai</span>
          <span className="flex items-center gap-1"><Phone size={11} className="text-violet-600" /> +1 (800) 415-9920</span>
          <span className="flex items-center gap-1"><Globe size={11} className="text-violet-600" /> flowshark.ai</span>
        </div>
      </footer>
    </article>
  )
}

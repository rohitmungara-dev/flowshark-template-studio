import type { DocumentData, Template } from '../types'
import { calculateTotals, formatMoney } from '../utils/formatters'
import { Sparkles, ArrowUpRight, Compass, HeartHandshake, Mail, Globe, MapPin } from 'lucide-react'

type Props = {
  data: DocumentData
  template: Template
  accent: string
}

export default function InvoiceCreative({ data, template, accent }: Props) {
  const { subtotal, discount, tax, total } = calculateTotals(data)
  const terracottaColor = template.color || '#e56f4e'
  const dynamicTerracotta = accent !== '#5838e8' ? accent : terracottaColor

  return (
    <article
      className="creative-invoice w-full max-w-[800px] min-h-[1060px] bg-[#fffaf5] text-[#2c221e] font-['DM_Sans',sans-serif] shadow-2xl relative flex flex-col justify-between overflow-hidden p-8 sm:p-11 border border-orange-100"
      style={{
        '--creative-terracotta': dynamicTerracotta
      } as React.CSSProperties}
    >
      {/* Asymmetrical background graphic shape */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-bl-[140px] opacity-15 pointer-events-none"
        style={{ background: dynamicTerracotta }}
      />
      <div className="absolute top-20 right-10 w-24 h-24 rounded-full border-2 border-dashed border-orange-300/40 pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        {/* 1. Header: Asymmetrical Composition & Large Editorial Heading */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 pb-6 border-b border-[#f3e5d8]">
          <div className="max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-orange-100/70 text-amber-900 mb-3">
              <Sparkles size={11} style={{ color: dynamicTerracotta }} />
              <span>Studio Invoice / Editorial Edition</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl font-black tracking-tight leading-[0.95]"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: '#261b17'
              }}
            >
              Statement of <br />
              <span className="italic font-serif font-normal" style={{ color: dynamicTerracotta }}>
                Creative Services
              </span>
            </h1>

            <p className="text-xs text-[#8c7467] mt-3 font-medium">
              {data.company || 'Flowshark.ai'} — {data.tagline || 'Design, Strategy & Creative Automation'}
            </p>
          </div>

          {/* Asymmetrical Right Metadata Card */}
          <div className="bg-[#fceedf]/80 p-5 rounded-2xl border border-orange-200/60 shadow-sm min-w-[210px] self-stretch sm:self-auto">
            <div className="text-[10px] uppercase font-bold tracking-wider text-orange-900/60 mb-2">
              Invoice Stamp
            </div>
            <div className="font-mono text-base font-bold text-amber-950 mb-1">
              {data.documentNumber}
            </div>
            <div className="text-xs text-[#7c6356] space-y-1">
              <div>Issued: <span className="font-semibold text-stone-800">{data.issueDate}</span></div>
              <div>Due: <span className="font-bold" style={{ color: dynamicTerracotta }}>{data.dueDate}</span></div>
              <div>Terms: <span className="font-semibold text-stone-800">{data.terms}</span></div>
            </div>
          </div>
        </div>

        {/* 2. Distinct Client Information Area (Asymmetrical Editorial Callout) */}
        <div className="my-6 grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch">
          <div
            className="sm:col-span-8 bg-gradient-to-r from-orange-50/90 to-amber-50/50 p-6 rounded-2xl border-l-4 shadow-sm"
            style={{ borderColor: dynamicTerracotta }}
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-orange-800 block mb-1">
              COMMISSIONED BY
            </span>
            <h2 className="text-xl font-bold font-serif text-[#2a1d17] mb-1">
              {data.client || 'Creative Partner'}
            </h2>
            <div className="text-xs text-[#6e584d] whitespace-pre-line leading-relaxed font-normal">
              {data.clientAddress}
            </div>
          </div>

          <div className="sm:col-span-4 bg-white/80 p-5 rounded-2xl border border-orange-100 flex flex-col justify-between">
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#a0897d]">
              Engagement Mode
            </div>
            <div className="my-2">
              <span className="text-xs font-bold text-[#38261e] block">Retainer & SOW</span>
              <span className="text-[11px] text-[#856e62]">High-touch execution</span>
            </div>
            <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-orange-700">
              <span>Verified Account</span>
              <ArrowUpRight size={13} />
            </div>
          </div>
        </div>

        {/* 3. Visually Separated Line Items (Individual Floating Cards instead of standard grid) */}
        <div className="mb-6 flex-1">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#796356]">
              Delivered Workstreams & Services
            </span>
            <span className="text-[11px] text-[#a58e82]">
              {data.items.length} line item{data.items.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="space-y-2.5">
            {data.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/90 p-4 rounded-xl border border-orange-100/90 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 transition-all hover:border-orange-200"
              >
                <div className="flex items-center gap-3.5">
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold text-white shadow-sm flex-shrink-0"
                    style={{ background: dynamicTerracotta }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="font-semibold text-sm text-[#241712]">
                      {item.description}
                    </h4>
                    <span className="text-[11px] text-[#8e776a]">
                      Unit: {formatMoney(item.price, data.currency)} × {item.qty} {item.qty === 1 ? 'unit' : 'units'}
                    </span>
                  </div>
                </div>

                <div className="self-end sm:self-auto text-right">
                  <span className="text-base font-bold font-mono text-[#261914]">
                    {formatMoney(item.qty * item.price, data.currency)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Creative Summary Panel & Highlighted Total */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start mb-6">
          {/* Creative Left Card: Payment & Notes */}
          <div className="bg-[#fceedf]/60 border border-orange-200/50 rounded-2xl p-5 text-xs text-[#523e34]">
            <div className="flex items-center gap-2 mb-2 text-[#2c1d16] font-bold">
              <Compass size={15} style={{ color: dynamicTerracotta }} />
              <span>Remittance & Wire Transfer</span>
            </div>
            <p className="text-[11px] text-[#6b5548] leading-relaxed mb-3">
              Payment transfer for invoice <b className="text-amber-950">{data.documentNumber}</b> via direct deposit or card. Terms are strict {data.terms}.
            </p>
            {data.notes && (
              <div className="border-t border-orange-200/60 pt-2 text-[11px] italic text-[#775e51]">
                "{data.notes}"
              </div>
            )}
          </div>

          {/* Highlighted Total Box */}
          <div className="bg-white border-2 border-orange-200 rounded-2xl p-5 shadow-md">
            <div className="space-y-2 text-xs text-[#715c50] mb-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono font-medium text-[#2b1c15]">
                  {formatMoney(subtotal, data.currency)}
                </span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-orange-600">
                  <span>Creative Partner Credit</span>
                  <span className="font-mono font-semibold">
                    −{formatMoney(discount, data.currency)}
                  </span>
                </div>
              )}
              <div className="flex justify-between border-b border-orange-100 pb-2">
                <span>Applicable Tax ({data.tax}%)</span>
                <span className="font-mono font-medium text-[#2b1c15]">
                  {formatMoney(tax, data.currency)}
                </span>
              </div>
            </div>

            {/* Highlighted Total Banner */}
            <div
              className="rounded-xl p-4 text-white shadow-md flex justify-between items-center"
              style={{
                background: `linear-gradient(135deg, ${dynamicTerracotta}, #b44a2b)`
              }}
            >
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-orange-200 block">
                  INVESTMENT TOTAL
                </span>
                <span className="text-[10px] text-orange-100 font-medium">Due by {data.dueDate}</span>
              </div>
              <div className="text-2xl font-black font-mono tracking-tight text-white">
                {formatMoney(total, data.currency)}
              </div>
            </div>
          </div>
        </div>

        {/* 5. Stylish Closing Section */}
        <div className="py-3 text-center border-t border-orange-100 flex items-center justify-center gap-2 text-xs text-[#826a5d] font-serif italic">
          <HeartHandshake size={15} style={{ color: dynamicTerracotta }} />
          <span>Great collaboration creates remarkable outcomes. Thank you for your partnership.</span>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 pt-4 mt-2 border-t border-orange-200/60 text-[10px] text-[#9c8477] flex flex-wrap items-center justify-between gap-3">
        <div className="font-bold text-[#2e1f18]">
          {data.company || 'Flowshark.ai'} · Editorial Studio
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><Mail size={11} style={{ color: dynamicTerracotta }} /> studio@flowshark.ai</span>
          <span className="flex items-center gap-1"><Globe size={11} style={{ color: dynamicTerracotta }} /> flowshark.ai</span>
        </div>
      </footer>
    </article>
  )
}

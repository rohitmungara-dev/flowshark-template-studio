import type { DocumentData, Template } from '../types'
import { calculateTotals, formatMoney } from '../utils/formatters'
import { Landmark, ShieldCheck, Mail, Phone, Globe, MapPin } from 'lucide-react'

type Props = {
  data: DocumentData
  template: Template
  accent: string
}

export default function InvoiceLuxe({ data, template, accent }: Props) {
  const { subtotal, discount, tax, total } = calculateTotals(data)
  const goldColor = template.color || '#b78b42'
  const dynamicGold = accent !== '#5838e8' ? accent : goldColor

  return (
    <article
      className="luxe-invoice w-full max-w-[800px] min-h-[1060px] bg-[#fcfaf6] text-[#222120] font-['DM_Sans',sans-serif] shadow-2xl relative flex flex-col justify-between overflow-hidden"
      style={{
        '--luxe-gold': dynamicGold,
        '--luxe-dark': '#141414'
      } as React.CSSProperties}
    >
      {/* Top Layered & Curved Visual Header */}
      <div className="relative bg-[#141414] text-white pt-8 pb-14 px-10 overflow-hidden">
        {/* Layered decorative wave / curved treatment */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 200" fill="none">
            <path d="M0,0 L800,0 L800,140 Q500,200 200,150 L0,180 Z" fill={dynamicGold} />
            <path d="M0,40 Q400,180 800,60 L800,0 L0,0 Z" fill="white" opacity="0.1" />
          </svg>
        </div>

        {/* Curved bottom separator in champagne gold */}
        <div className="absolute -bottom-[1px] left-0 right-0 h-6 overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-[#fcfaf6]">
            <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>

        {/* Brand and Large Serif INVOICE Heading */}
        <div className="relative z-10 flex flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center font-serif text-2xl font-bold shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${dynamicGold}, #f5dfb8)`,
                color: '#141414'
              }}
            >
              F
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-['Manrope',sans-serif]">
                <span>{data.company || 'Flowshark.ai'}</span>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: dynamicGold }} />
              </div>
              <p className="text-xs tracking-widest uppercase text-[#b8b3aa] font-medium mt-0.5">
                {data.tagline || 'Private Client Operations & Atelier'}
              </p>
            </div>
          </div>

          <div className="text-right">
            <h1
              className="font-serif text-4xl sm:text-5xl tracking-[0.18em] uppercase font-bold leading-none"
              style={{
                color: dynamicGold,
                textShadow: '0 2px 8px rgba(0,0,0,0.4)',
                fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif"
              }}
            >
              INVOICE
            </h1>
            <div className="flex items-center justify-end gap-2 text-xs text-[#a39f97] tracking-wider uppercase mt-2">
              <span>OFFICIAL STATEMENT</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Body with Opposing Columns */}
      <div className="px-10 pt-4 pb-6 flex-1 flex flex-col justify-between">
        {/* Opposing Columns: Client Details (Left) vs Invoice Metadata (Right) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start mb-8 pb-6 border-b border-[#e8dfcb]">
          {/* Left Column: Client Information */}
          <div className="bg-[#f7f2e7] p-5 rounded-xl border border-[#e8dfcb] relative">
            <div
              className="absolute left-0 top-3 bottom-3 w-1 rounded-r"
              style={{ background: dynamicGold }}
            />
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#887c67] block mb-2 font-['Manrope',sans-serif]">
              BILLED TO / VALUED CLIENT
            </span>
            <h2 className="font-serif text-lg font-bold text-[#1a1918] mb-1.5">
              {data.client || 'Client Name'}
            </h2>
            <div className="text-xs text-[#5f5a52] leading-relaxed whitespace-pre-line font-normal">
              {data.clientAddress || 'Client Address'}
            </div>
          </div>

          {/* Right Column: Invoice Metadata */}
          <div className="bg-[#1f1e1d] text-white p-5 rounded-xl border border-[#38342e] shadow-md">
            <div className="grid grid-cols-2 gap-y-3.5 gap-x-4 text-xs">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-[#9d978d] block font-medium">
                  Invoice Number
                </span>
                <span className="font-mono text-sm font-bold text-amber-100 tracking-wide">
                  {data.documentNumber}
                </span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-wider text-[#9d978d] block font-medium">
                  Issue Date
                </span>
                <span className="font-medium text-white">{data.issueDate}</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-wider text-[#9d978d] block font-medium">
                  Payment Due
                </span>
                <span
                  className="font-semibold"
                  style={{ color: dynamicGold }}
                >
                  {data.dueDate}
                </span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-wider text-[#9d978d] block font-medium">
                  Payment Terms
                </span>
                <span className="font-medium text-[#e3ded6]">{data.terms}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Table Header with Gold Accents */}
        <div className="mb-8 flex-1">
          <div className="rounded-xl overflow-hidden border border-[#ded5c2] shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#141414] text-white border-b-2" style={{ borderColor: dynamicGold }}>
                  <th className="py-3.5 px-4 text-[10px] font-bold tracking-widest uppercase text-[#9e988d] w-12 text-center">
                    #
                  </th>
                  <th className="py-3.5 px-4 text-[10px] font-bold tracking-widest uppercase text-white">
                    Service & Description
                  </th>
                  <th className="py-3.5 px-3 text-[10px] font-bold tracking-widest uppercase text-right w-16" style={{ color: dynamicGold }}>
                    Qty
                  </th>
                  <th className="py-3.5 px-4 text-[10px] font-bold tracking-widest uppercase text-right w-28" style={{ color: dynamicGold }}>
                    Unit Rate
                  </th>
                  <th className="py-3.5 px-4 text-[10px] font-bold tracking-widest uppercase text-right w-32 text-white">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eee6d7] text-xs">
                {data.items.map((item, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-[#fdfcf9]' : 'bg-[#f7f2e8]/60'}
                  >
                    <td className="py-3 px-4 text-center text-[#9c9384] font-mono text-[11px]">
                      {String(idx + 1).padStart(2, '0')}
                    </td>
                    <td className="py-3 px-4 text-[#262422] font-medium">
                      {item.description}
                    </td>
                    <td className="py-3 px-3 text-right text-[#5f594e] font-mono">
                      {item.qty}
                    </td>
                    <td className="py-3 px-4 text-right text-[#5f594e] font-mono">
                      {formatMoney(item.price, data.currency)}
                    </td>
                    <td className="py-3 px-4 text-right font-bold text-[#141414] font-mono">
                      {formatMoney(item.qty * item.price, data.currency)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Lower Section: Payment Information (Lower Left) & Boxed Grand Total (Lower Right) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start mb-6">
          {/* Lower Left: Payment Information Card */}
          <div className="bg-[#f7f3ea] border border-[#e4dcce] rounded-xl p-5 text-xs text-[#4b463e] shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Landmark size={15} style={{ color: dynamicGold }} />
              <h3 className="font-serif font-bold text-sm tracking-wide text-[#1c1b1a]">
                Payment Instructions
              </h3>
            </div>
            <div className="space-y-1.5 text-[11px] leading-relaxed">
              <p className="flex justify-between border-b border-[#ebdcc4] pb-1">
                <span className="text-[#847b6d]">Beneficiary:</span>
                <span className="font-semibold text-[#1c1b1a]">{data.company || 'Flowshark Inc.'}</span>
              </p>
              <p className="flex justify-between border-b border-[#ebdcc4] pb-1">
                <span className="text-[#847b6d]">Remittance Method:</span>
                <span className="font-medium text-[#1c1b1a]">Wire Transfer / ACH</span>
              </p>
              <p className="flex justify-between border-b border-[#ebdcc4] pb-1">
                <span className="text-[#847b6d]">Reference Code:</span>
                <span className="font-mono font-bold" style={{ color: dynamicGold }}>
                  {data.documentNumber}
                </span>
              </p>
              <p className="flex justify-between pt-0.5">
                <span className="text-[#847b6d]">Remittance Terms:</span>
                <span className="font-medium">{data.terms}</span>
              </p>
            </div>
            {data.notes && (
              <div className="mt-3.5 pt-2.5 border-t border-[#e2d5bd] text-[10px] text-[#71695c] italic">
                "{data.notes}"
              </div>
            )}
          </div>

          {/* Lower Right: Boxed Grand Total Card */}
          <div
            className="rounded-xl p-5 shadow-lg relative border-2"
            style={{
              backgroundColor: '#161514',
              borderColor: dynamicGold
            }}
          >
            <div className="space-y-2 text-xs text-[#c9c4bc]">
              <div className="flex justify-between">
                <span className="text-[#969085]">Subtotal</span>
                <span className="font-mono text-white font-medium">
                  {formatMoney(subtotal, data.currency)}
                </span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>Special VIP Discount</span>
                  <span className="font-mono">
                    −{formatMoney(discount, data.currency)}
                  </span>
                </div>
              )}
              <div className="flex justify-between border-b border-[#302d28] pb-2">
                <span className="text-[#969085]">Tax ({data.tax}%)</span>
                <span className="font-mono text-white font-medium">
                  {formatMoney(tax, data.currency)}
                </span>
              </div>

              {/* Boxed Grand Total Accent Bar */}
              <div
                className="pt-3 mt-1 flex justify-between items-center rounded-lg px-3.5 py-3"
                style={{
                  background: `linear-gradient(135deg, ${dynamicGold}22, ${dynamicGold}44)`,
                  border: `1px solid ${dynamicGold}`
                }}
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest block" style={{ color: dynamicGold }}>
                    TOTAL DUE
                  </span>
                  <span className="text-[9px] text-[#c9c4bc]">All taxes included</span>
                </div>
                <span
                  className="font-serif text-2xl font-bold tracking-tight"
                  style={{ color: '#fffdfa' }}
                >
                  {formatMoney(total, data.currency)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Handwritten-Style Thank You Message */}
        <div className="my-4 text-center">
          <p
            className="text-xl sm:text-2xl text-[#835c24] font-medium"
            style={{
              fontFamily: "'Caveat', cursive, serif",
              transform: 'rotate(-1.2deg)'
            }}
          >
            Thank you for your business — it is a privilege to partner with you.
          </p>
        </div>
      </div>

      {/* Dark Branded Footer */}
      <footer className="bg-[#121212] text-[#8e8981] px-10 py-4 border-t-2" style={{ borderColor: dynamicGold }}>
        <div className="flex flex-wrap items-center justify-between gap-4 text-[10px]">
          <div className="flex items-center gap-2 text-white font-semibold">
            <span
              className="w-4 h-4 rounded flex items-center justify-center text-[10px] font-bold font-serif"
              style={{ background: dynamicGold, color: '#121212' }}
            >
              F
            </span>
            <span>{data.company || 'Flowshark.ai'}</span>
            <span className="text-[#656057] font-normal">| Premium Studio</span>
          </div>
          <div className="flex items-center gap-4 text-[#aba59c]">
            <span className="flex items-center gap-1.5"><Mail size={11} style={{ color: dynamicGold }} /> billing@flowshark.ai</span>
            <span className="flex items-center gap-1.5"><Phone size={11} style={{ color: dynamicGold }} /> +1 (415) 890-5020</span>
            <span className="flex items-center gap-1.5"><Globe size={11} style={{ color: dynamicGold }} /> www.flowshark.ai</span>
          </div>
          <div className="flex items-center gap-1 text-[#6e685f]">
            <ShieldCheck size={11} />
            <span>Authorized & Secured</span>
          </div>
        </div>
      </footer>
    </article>
  )
}

import type { DocumentData, Template } from '../types'
import { calculateTotals, formatMoney } from '../utils/formatters'
import { Sparkles, Pin, Compass, Palette, Heart, CheckCircle2 } from 'lucide-react'

type Props = {
  data: DocumentData
  template: Template
  accent: string
}

export default function ProposalCreative({ data, template, accent }: Props) {
  const { subtotal, discount, tax, total } = calculateTotals(data)
  const warmColor = template.color || '#d89a55'
  const dynamicWarm = accent !== '#5838e8' ? accent : warmColor

  // Pastel themes for colorful deliverable cards
  const cardPalettes = [
    { bg: 'bg-[#fff0e6]', border: 'border-[#fed7aa]', badge: 'bg-[#ea580c] text-white', text: 'text-[#9a3412]' },
    { bg: 'bg-[#f3e8ff]', border: 'border-[#e9d5ff]', badge: 'bg-[#9333ea] text-white', text: 'text-[#6b21a8]' },
    { bg: 'bg-[#ecfdf5]', border: 'border-[#a7f3d0]', badge: 'bg-[#059669] text-white', text: 'text-[#065f46]' },
    { bg: 'bg-[#fef9c3]', border: 'border-[#fef08a]', badge: 'bg-[#ca8a04] text-white', text: 'text-[#854d0e]' },
    { bg: 'bg-[#f0f9ff]', border: 'border-[#bae6fd]', badge: 'bg-[#0284c7] text-white', text: 'text-[#075985]' },
    { bg: 'bg-[#ffe4e6]', border: 'border-[#fecdd3]', badge: 'bg-[#e11d48] text-white', text: 'text-[#9f1239]' }
  ]

  return (
    <article
      className="proposal-creative w-full max-w-[800px] min-h-[1060px] bg-[#fffcf7] text-[#2c221e] font-['DM_Sans',sans-serif] shadow-2xl relative flex flex-col justify-between overflow-hidden p-8 sm:p-12 border border-amber-100"
      style={{
        '--creative-warm': dynamicWarm
      } as React.CSSProperties}
    >
      {/* Decorative Warm Shapes */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-bl-[160px] opacity-10 pointer-events-none"
        style={{ background: dynamicWarm }}
      />
      <div className="absolute top-36 right-12 w-28 h-28 rounded-full border border-amber-300/40 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        {/* Top Header */}
        <div className="flex justify-between items-center pb-6 border-b border-[#f0e4d7]">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-white text-lg shadow-sm"
              style={{ background: dynamicWarm }}
            >
              F
            </div>
            <div>
              <span className="font-serif font-bold text-base text-[#241712] block">
                {data.company || 'Flowshark.ai'}
              </span>
              <span className="text-[10px] text-[#8e7465] uppercase tracking-wider block">
                {data.tagline || 'Design, Strategy & Operations'}
              </span>
            </div>
          </div>

          <div className="text-right text-xs font-serif italic text-[#846b5e]">
            Proposal № {data.documentNumber}
          </div>
        </div>

        {/* 1. Warm Ivory Cover Banner & Editorial Typography */}
        <div className="my-7">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-amber-100/70 text-amber-900 mb-3">
            <Sparkles size={11} style={{ color: dynamicWarm }} />
            <span>CREATIVE PARTNERSHIP DISPATCH</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl font-black tracking-tight leading-[0.95] text-[#241712]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Ideas into <br />
            <span className="italic font-normal" style={{ color: dynamicWarm }}>
              Measurable Impact.
            </span>
          </h1>

          <p className="text-xs text-[#7e675b] mt-3 font-medium max-w-md">
            A bespoke proposal handcrafted for <strong className="text-[#2b1c15]">{data.client}</strong> to modernize workflows and unlock team momentum.
          </p>
        </div>

        {/* 2. Contents Section & Visual Storytelling Overview */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-4 py-4 border-t border-b border-[#f3e5d8] items-start">
          {/* Contents Section */}
          <div className="md:col-span-4 bg-[#fbf5ed] p-4 rounded-2xl border border-amber-200/60">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#91796c] block mb-2 font-serif">
              Proposal Index
            </span>
            <ul className="space-y-2 text-xs font-medium text-[#46342b]">
              <li className="flex items-center gap-2">
                <span className="font-serif italic text-amber-700">01.</span>
                <span>The Narrative</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-serif italic text-amber-700">02.</span>
                <span>Creative Workstreams</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-serif italic text-amber-700">03.</span>
                <span>Deliverables & SOW</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-serif italic text-amber-700">04.</span>
                <span>Budget & Terms</span>
              </li>
            </ul>
          </div>

          {/* Visual Storytelling Overview */}
          <div className="md:col-span-8 flex flex-col justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
              THE VISION & STRATEGIC STORY
            </span>
            <p className="text-xs text-[#5f493d] leading-relaxed">
              {data.intro || 'Transforming communication into connected action. Flowshark unites leads, contracts, milestone deliveries, and client retention into one fluid workspace.'}
            </p>
            <div className="mt-3 flex gap-3 text-[11px] text-[#7c6356]">
              <span className="flex items-center gap-1 font-semibold text-amber-900">
                <Palette size={13} style={{ color: dynamicWarm }} /> Modern Experience
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 font-semibold text-amber-900">
                <Compass size={13} style={{ color: dynamicWarm }} /> Guided Roadmap
              </span>
            </div>
          </div>
        </div>

        {/* 3. Sticky-Note-Inspired Callouts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          {/* Sticky Note 1 */}
          <div
            className="p-4 rounded-xl shadow-md bg-[#fef08a] text-[#713f12] relative border border-[#fde047]/60 transform -rotate-1 hover:rotate-0 transition-transform"
          >
            <div className="w-8 h-2.5 bg-amber-200/70 rounded absolute -top-1.5 left-1/2 transform -translate-x-1/2 border border-amber-300/40" />
            <div className="flex items-center gap-1.5 mb-1 text-[10px] font-bold uppercase tracking-wider text-amber-800 font-mono">
              <Pin size={11} className="text-amber-800" />
              <span>KEY CLIENT PRIORITY</span>
            </div>
            <p className="text-xs font-serif italic leading-relaxed text-[#78350f]">
              "Automate client onboarding and lead-to-proposal velocity to save 12+ hours every week!"
            </p>
          </div>

          {/* Sticky Note 2 */}
          <div
            className="p-4 rounded-xl shadow-md bg-[#fed7aa] text-[#7c2d12] relative border border-[#fdba74]/60 transform rotate-1 hover:rotate-0 transition-transform"
          >
            <div className="w-8 h-2.5 bg-orange-200/70 rounded absolute -top-1.5 left-1/2 transform -translate-x-1/2 border border-orange-300/40" />
            <div className="flex items-center gap-1.5 mb-1 text-[10px] font-bold uppercase tracking-wider text-orange-800 font-mono">
              <Pin size={11} className="text-orange-800" />
              <span>INCLUDED PARTNER PERK</span>
            </div>
            <p className="text-xs font-serif italic leading-relaxed text-[#7c2d12]">
              "Includes dedicated Slack Connect channel and weekly strategic check-ins during rollout."
            </p>
          </div>
        </div>

        {/* 4. Colorful Deliverable Cards */}
        <div className="mb-6 flex-1">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#35251e] font-serif">
              Proposed Scope & Deliverables
            </span>
            <span className="text-xs text-[#8f7567]">
              {data.items.length} Modules Defined
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.items.map((item, idx) => {
              const theme = cardPalettes[idx % cardPalettes.length]
              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-2xl border ${theme.bg} ${theme.border} shadow-xs flex flex-col justify-between`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${theme.badge}`}>
                      Module {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500">
                      Qty: {item.qty}
                    </span>
                  </div>

                  <h4 className={`text-xs font-bold mb-1 ${theme.text}`}>
                    {item.description}
                  </h4>

                  <div className="flex justify-between items-center pt-2 border-t border-black/5 text-xs">
                    <span className="text-[10px] text-stone-500">Allocation</span>
                    <span className={`font-mono font-bold ${theme.text}`}>
                      {formatMoney(item.qty * item.price, data.currency)}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* 5. Creative Budget Summary & Next Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-end mb-6">
          <div className="text-xs text-[#735c50] space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 block font-serif">
              ACCEPTANCE & TIMELINE
            </span>
            <p className="text-[11px] leading-relaxed">
              Target completion estimated at 4–6 weeks. Terms are governed by {data.terms}.
            </p>
            {data.notes && (
              <p className="text-[11px] italic text-[#846b5d]">
                "{data.notes}"
              </p>
            )}
          </div>

          {/* Warm Total Box */}
          <div
            className="p-5 rounded-2xl border-2 border-amber-200 bg-white shadow-md"
          >
            <div className="space-y-1.5 text-xs text-[#715c4f] mb-3">
              <div className="flex justify-between">
                <span>Services Subtotal</span>
                <span className="font-mono text-[#281a14]">{formatMoney(subtotal, data.currency)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-orange-600">
                  <span>Creative Partner Credit</span>
                  <span className="font-mono">−{formatMoney(discount, data.currency)}</span>
                </div>
              )}
              <div className="flex justify-between border-b border-amber-100 pb-1.5">
                <span>Tax ({data.tax}%)</span>
                <span className="font-mono text-[#281a14]">{formatMoney(tax, data.currency)}</span>
              </div>
            </div>

            <div
              className="p-3.5 rounded-xl text-white flex justify-between items-center"
              style={{
                background: `linear-gradient(135deg, ${dynamicWarm}, #b46b25)`
              }}
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-100 block">
                  TOTAL INVESTMENT
                </span>
                <span className="text-[10px] text-amber-200">Full scope included</span>
              </div>
              <span className="text-2xl font-black font-mono tracking-tight text-white">
                {formatMoney(total, data.currency)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 pt-4 border-t border-amber-200/70 text-[10px] text-[#937b6e] flex justify-between items-center font-serif">
        <div>{data.company || 'Flowshark.ai'} · Creative Proposal Studio</div>
        <div className="italic">Ready to build something wonderful together.</div>
      </footer>
    </article>
  )
}

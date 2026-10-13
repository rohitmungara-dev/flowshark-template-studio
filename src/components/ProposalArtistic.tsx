import type { DocumentData, Template } from '../types'
import { calculateTotals, formatMoney } from '../utils/formatters'
import { Sparkles, Palette, Compass, Feather, HeartHandshake, Eye } from 'lucide-react'

type Props = {
  data: DocumentData
  template: Template
  accent: string
}

export default function ProposalArtistic({ data, template, accent }: Props) {
  const { subtotal, discount, tax, total } = calculateTotals(data)
  const artisticColor = template.color || '#ec8aa8'
  const dynamicRose = accent !== '#5838e8' ? accent : artisticColor

  return (
    <article
      className="proposal-artistic w-full max-w-[800px] min-h-[1060px] bg-[#fff9fb] text-[#2c1b22] font-['DM_Sans',sans-serif] shadow-2xl relative flex flex-col justify-between overflow-hidden p-8 sm:p-12 border border-pink-100"
      style={{
        '--artistic-rose': dynamicRose
      } as React.CSSProperties}
    >
      {/* Layered Decorative Shapes */}
      <div
        className="absolute -top-16 -right-16 w-80 h-80 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: dynamicRose }}
      />
      <div className="absolute top-1/3 -left-20 w-64 h-64 rounded-full bg-rose-200/30 blur-2xl pointer-events-none" />
      <div
        className="absolute top-28 right-8 w-44 h-24 rounded-full border border-pink-300/40 transform rotate-12 pointer-events-none"
      />
      <div
        className="absolute top-36 right-16 w-32 h-16 rounded-full border border-pink-400/30 transform -rotate-6 pointer-events-none"
      />

      {/* Main Container */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        {/* Top Header */}
        <div className="flex justify-between items-center pb-6 border-b border-pink-100">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-base shadow-md"
              style={{ background: dynamicRose }}
            >
              F
            </div>
            <div>
              <div className="font-bold text-base text-[#24131a] tracking-tight font-['Manrope',sans-serif]">
                {data.company || 'Flowshark Studio'}
              </div>
              <div className="text-[10px] text-pink-700 font-medium uppercase tracking-wider">
                {data.tagline || 'Art & Intelligent Systems'}
              </div>
            </div>
          </div>

          <div className="text-right text-xs text-pink-900/60 font-serif italic">
            Artistic Proposal № {data.documentNumber}
          </div>
        </div>

        {/* 1. Asymmetrical Cover Composition & Expressive Typography */}
        <div className="my-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.25em] block mb-2"
              style={{ color: dynamicRose }}
            >
              CREATIVE DIRECTION & SCALE
            </span>

            {/* Expressive Typography */}
            <h1
              className="text-4xl sm:text-5xl font-black tracking-tight leading-[0.98] text-[#24121a]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              The Architecture <br />
              <span className="italic font-normal" style={{ color: dynamicRose }}>
                of Experience.
              </span>
            </h1>

            <p className="text-xs text-[#715460] mt-3 leading-relaxed max-w-sm">
              Crafted with care for <strong className="text-[#321723]">{data.client}</strong>. Fusing expressive brand aesthetics with seamless client automation.
            </p>
          </div>

          {/* 2. Distinctive Image / Visual Placement (CSS Abstract Art Composition) */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-52 h-44 rounded-3xl overflow-hidden shadow-lg border border-pink-200/80 p-4 bg-gradient-to-tr from-pink-100/80 via-white to-rose-50 flex flex-col justify-between">
              {/* Layered Organic Pill Shapes */}
              <div
                className="absolute -top-4 -right-4 w-28 h-28 rounded-full opacity-40 blur-sm pointer-events-none"
                style={{ background: dynamicRose }}
              />
              <div className="absolute bottom-4 left-6 w-24 h-12 rounded-full bg-rose-300/40 transform -rotate-12 pointer-events-none" />

              <div className="relative z-10 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-pink-900">
                <span>ART DIRECTED</span>
                <Sparkles size={13} style={{ color: dynamicRose }} />
              </div>

              {/* Artistic Center Motif */}
              <div className="relative z-10 flex flex-col items-center justify-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-md transform rotate-6 mb-1"
                  style={{ background: `linear-gradient(135deg, ${dynamicRose}, #f43f5e)` }}
                >
                  <Eye size={24} />
                </div>
                <span className="text-[10px] font-serif italic text-pink-800">
                  Visual Distinction
                </span>
              </div>

              <div className="relative z-10 text-[9px] text-pink-900/60 font-mono text-center">
                FLOWSHARK DESIGN SYSTEM
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Callout */}
        <div className="bg-pink-50/70 p-4 rounded-2xl border border-pink-200/50 my-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-pink-800 block mb-1">
            CREATIVE COLLABORATION OVERVIEW
          </span>
          <p className="text-xs text-[#5f4450] leading-relaxed">
            {data.intro || 'We believe that utility and beauty should never be separated. Flowshark transforms every touchpoint of your client relationship into a seamless, memorable experience.'}
          </p>
        </div>

        {/* 3. Creative Project Timeline */}
        <div className="my-5 bg-white/80 p-5 rounded-2xl border border-pink-100 shadow-xs">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#321723] font-serif">
              Creative Project Roadmap
            </span>
            <span className="text-[10px] text-pink-700 font-medium">4-6 Weeks Trajectory</span>
          </div>

          <div className="grid grid-cols-4 gap-3 text-center relative">
            <div className="flex flex-col items-center">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-sm mb-1.5"
                style={{ background: dynamicRose }}
              >
                01
              </div>
              <span className="text-[11px] font-bold text-[#2e1520]">Discovery</span>
              <span className="text-[9px] text-[#856372]">Vision & Goals</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-pink-100 border border-pink-300 flex items-center justify-center text-xs font-bold text-pink-800 shadow-xs mb-1.5">
                02
              </div>
              <span className="text-[11px] font-bold text-[#2e1520]">Design</span>
              <span className="text-[9px] text-[#856372]">Prototypes</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-pink-100 border border-pink-300 flex items-center justify-center text-xs font-bold text-pink-800 shadow-xs mb-1.5">
                03
              </div>
              <span className="text-[11px] font-bold text-[#2e1520]">Integration</span>
              <span className="text-[9px] text-[#856372]">Automations</span>
            </div>

            <div className="flex flex-col items-center">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-sm mb-1.5"
                style={{ background: dynamicRose }}
              >
                04
              </div>
              <span className="text-[11px] font-bold text-[#2e1520]">Launch</span>
              <span className="text-[9px] text-[#856372]">Evolution</span>
            </div>
          </div>
        </div>

        {/* 4. Expressive Deliverable Cards */}
        <div className="mb-5 flex-1">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#321723] font-serif">
              Curated Deliverables & Value
            </span>
            <span className="text-xs text-pink-800 font-medium">
              {data.items.length} Creative Pillars
            </span>
          </div>

          <div className="space-y-2">
            {data.items.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white/90 border border-pink-100/90 shadow-2xs flex justify-between items-center"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-bold text-white shadow-xs"
                    style={{ background: dynamicRose }}
                  >
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-[#28131c]">
                      {item.description}
                    </h4>
                    <span className="text-[10px] text-[#846473]">
                      Units: {item.qty} × {formatMoney(item.price, data.currency)}
                    </span>
                  </div>
                </div>

                <span className="font-mono text-xs font-bold text-[#2b141e]">
                  {formatMoney(item.qty * item.price, data.currency)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Total Investment Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-end mb-5">
          <div className="text-xs text-[#735865] space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-pink-900 block font-serif">
              ENGAGEMENT AGREEMENT
            </span>
            <p className="text-[11px] leading-relaxed">
              Standard engagement terms: {data.terms}. Invoicing staggered across project milestones.
            </p>
            {data.notes && (
              <p className="text-[11px] italic text-[#846675]">
                "{data.notes}"
              </p>
            )}
          </div>

          {/* Rose Total Box */}
          <div className="p-4 rounded-2xl bg-white border-2 border-pink-200 shadow-md">
            <div className="space-y-1 text-xs text-[#6e515e] mb-2">
              <div className="flex justify-between">
                <span>Gross Total</span>
                <span className="font-mono text-[#25121b]">{formatMoney(subtotal, data.currency)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-pink-700">
                  <span>Artistic Credit</span>
                  <span className="font-mono">−{formatMoney(discount, data.currency)}</span>
                </div>
              )}
              <div className="flex justify-between border-b border-pink-100 pb-1">
                <span>Tax ({data.tax}%)</span>
                <span className="font-mono text-[#25121b]">{formatMoney(tax, data.currency)}</span>
              </div>
            </div>

            <div
              className="p-3 rounded-xl text-white flex justify-between items-center"
              style={{
                background: `linear-gradient(135deg, ${dynamicRose}, #db2777)`
              }}
            >
              <div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-pink-100 block">
                  AGREED INVESTMENT
                </span>
                <span className="text-[9px] text-pink-200">Full scope included</span>
              </div>
              <span className="text-2xl font-black font-mono tracking-tight text-white">
                {formatMoney(total, data.currency)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 pt-4 border-t border-pink-100 text-[10px] text-[#937785] flex justify-between items-center font-serif italic">
        <div>{data.company || 'Flowshark.ai'} · Artistic Direction Studio</div>
        <div>Dedicated to extraordinary client experiences.</div>
      </footer>
    </article>
  )
}

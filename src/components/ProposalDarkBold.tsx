import type { DocumentData, Template } from '../types'
import { calculateTotals, formatMoney } from '../utils/formatters'
import { Sparkles, Terminal, CheckCircle2, ArrowRight, Zap, Target, Cpu } from 'lucide-react'

type Props = {
  data: DocumentData
  template: Template
  accent: string
}

export default function ProposalDarkBold({ data, template, accent }: Props) {
  const { subtotal, discount, tax, total } = calculateTotals(data)
  const violetColor = template.color || '#7864ff'
  const dynamicViolet = accent || violetColor

  return (
    <article
      className="proposal-dark-bold w-full max-w-[800px] min-h-[1060px] bg-[#090912] text-[#e3e1f2] font-['DM_Sans',sans-serif] shadow-2xl relative flex flex-col justify-between overflow-hidden p-8 sm:p-11 border border-violet-950/80"
      style={{
        '--darkbold-violet': dynamicViolet
      } as React.CSSProperties}
    >
      {/* Background Abstract Violet Graphics & Glowing Geometry */}
      <div
        className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full blur-[130px] opacity-20 pointer-events-none"
        style={{ background: dynamicViolet }}
      />
      <div className="absolute top-44 right-8 w-56 h-56 rounded-full border border-violet-500/20 pointer-events-none" />
      <div className="absolute top-52 right-16 w-40 h-40 rounded-full border border-violet-400/15 pointer-events-none" />
      <div className="absolute top-60 right-24 w-24 h-24 rounded-full border border-dashed border-violet-300/25 pointer-events-none animate-spin" style={{ animationDuration: '40s' }} />

      {/* Main Container */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        {/* Top Brand & Metadata Bar */}
        <div className="flex justify-between items-center pb-6 border-b border-violet-900/40">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl text-white shadow-lg shadow-violet-950"
              style={{ background: dynamicViolet }}
            >
              F
            </div>
            <div>
              <div className="font-extrabold text-base tracking-tight text-white font-['Manrope',sans-serif]">
                {data.company || 'Flowshark.ai'}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-violet-400">
                PROPOSAL // {data.documentNumber}
              </div>
            </div>
          </div>

          <div className="px-3 py-1 rounded-full bg-violet-950/80 border border-violet-800/50 text-[11px] font-mono text-violet-300 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: dynamicViolet }} />
            <span>CONFIDENTIAL STRATEGY</span>
          </div>
        </div>

        {/* 1. Nearly Black Cover: Large Stacked Typography & Abstract Graphics */}
        <div className="my-7">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-violet-400 uppercase mb-3">
            <Zap size={13} style={{ color: dynamicViolet }} />
            <span>COMMERCIAL INITIATIVE // 2026</span>
          </div>

          {/* Large Stacked Typography */}
          <h1
            className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[0.9] text-white font-['Manrope',sans-serif]"
          >
            STRATEGIC <br />
            <span
              style={{
                color: dynamicViolet,
                textShadow: `0 0 30px ${dynamicViolet}88`
              }}
            >
              ACCELERATION
            </span> <br />
            PROPOSAL.
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <div>TARGET CLIENT: <strong className="text-white font-semibold">{data.client}</strong></div>
            <div>·</div>
            <div>ISSUE DATE: <span className="text-violet-300 font-mono">{data.issueDate}</span></div>
            <div>·</div>
            <div>VALID UNTIL: <span className="text-violet-300 font-mono">{data.dueDate}</span></div>
          </div>
        </div>

        {/* Executive Summary Callout */}
        <div className="bg-[#121124] border border-violet-900/40 rounded-2xl p-5 mb-6 shadow-inner">
          <span className="text-[10px] font-mono uppercase tracking-widest text-violet-400 block mb-1">
            01 // STRATEGIC PROBLEM & SOLUTION
          </span>
          <p className="text-xs text-slate-300 leading-relaxed">
            {data.intro || 'A modern client operations platform designed to help businesses capture, convert and retain clients through AI acceleration, unified CRM, and seamless automated workflows.'}
          </p>
        </div>

        {/* 2. Horizontal Implementation Roadmap */}
        <div className="mb-6 bg-[#100f20] p-5 rounded-2xl border border-violet-900/30">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-violet-300">
              02 // HORIZONTAL IMPLEMENTATION ROADMAP
            </span>
            <span className="text-[10px] text-slate-400 font-mono">4-STAGE DEPLOYMENT</span>
          </div>

          {/* Connected Horizontal Timeline Nodes */}
          <div className="grid grid-cols-4 gap-2 relative">
            {/* Connecting Track Line */}
            <div
              className="absolute top-3.5 left-4 right-4 h-0.5 bg-violet-900/60 -z-0"
            />

            {/* Stage 1 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-md border-2 border-[#090912] mb-2"
                style={{ background: dynamicViolet }}
              >
                01
              </div>
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">Discovery</span>
              <span className="text-[9px] text-violet-400/80 font-mono">Weeks 1–2</span>
            </div>

            {/* Stage 2 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-md border-2 border-[#090912] mb-2"
                style={{ background: dynamicViolet }}
              >
                02
              </div>
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">Architecture</span>
              <span className="text-[9px] text-violet-400/80 font-mono">Weeks 3–4</span>
            </div>

            {/* Stage 3 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-md border-2 border-[#090912] mb-2"
                style={{ background: dynamicViolet }}
              >
                03
              </div>
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">Automations</span>
              <span className="text-[9px] text-violet-400/80 font-mono">Weeks 5–6</span>
            </div>

            {/* Stage 4 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-md border-2 border-[#090912] mb-2"
                style={{ background: dynamicViolet }}
              >
                04
              </div>
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">Go-Live</span>
              <span className="text-[9px] text-violet-400/80 font-mono">Week 7+</span>
            </div>
          </div>
        </div>

        {/* 3. Dark Deliverable Cards */}
        <div className="mb-6 flex-1">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-violet-300">
              03 // SOW DELIVERABLE MODULES
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              {data.items.length} KEY OBJECTIVES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#131124] border border-violet-900/50 rounded-xl p-3.5 flex flex-col justify-between shadow-sm hover:border-violet-600/50 transition-colors"
              >
                <div className="flex justify-between items-start gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-5 h-5 rounded flex items-center justify-center font-mono text-[10px] font-bold text-white"
                      style={{ background: dynamicViolet }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h4 className="font-bold text-xs text-white leading-tight">
                      {item.description}
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-violet-400/80 bg-violet-950/70 px-1.5 py-0.5 rounded border border-violet-900/40">
                    x{item.qty}
                  </span>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-violet-950 text-xs font-mono">
                  <span className="text-[10px] text-slate-400">ALLOCATION</span>
                  <span className="font-bold text-white">
                    {formatMoney(item.qty * item.price, data.currency)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Total Investment Card & Terms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-end mb-6">
          <div className="text-xs text-slate-400 space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-violet-400 block font-bold">
              ENGAGEMENT PROTOCOL
            </span>
            <p className="text-[11px] leading-relaxed">
              Delivery governed by Flowshark Master Services Agreement. Standard terms are {data.terms}.
            </p>
            {data.notes && (
              <p className="text-[11px] italic text-violet-300">
                "{data.notes}"
              </p>
            )}
          </div>

          {/* Glowing Total Investment Box */}
          <div
            className="p-5 rounded-2xl border shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #18152e, #100e20)',
              borderColor: `${dynamicViolet}77`
            }}
          >
            <div className="space-y-1.5 text-xs text-slate-300 mb-3">
              <div className="flex justify-between">
                <span>Phase Subtotal</span>
                <span className="font-mono text-white">{formatMoney(subtotal, data.currency)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-violet-400">
                  <span>Incentive Rebate</span>
                  <span className="font-mono">−{formatMoney(discount, data.currency)}</span>
                </div>
              )}
              <div className="flex justify-between border-b border-violet-900/40 pb-1.5">
                <span>Tax ({data.tax}%)</span>
                <span className="font-mono text-white">{formatMoney(tax, data.currency)}</span>
              </div>
            </div>

            <div className="flex justify-between items-baseline pt-1">
              <div>
                <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-violet-300 block">
                  TOTAL PROPOSED
                </span>
                <span className="text-[10px] text-slate-400 font-mono">All phases included</span>
              </div>
              <span
                className="text-2xl font-black font-mono tracking-tight text-white"
                style={{ textShadow: `0 0 20px ${dynamicViolet}88` }}
              >
                {formatMoney(total, data.currency)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 pt-4 border-t border-violet-950 text-[10px] font-mono text-slate-400 flex justify-between items-center">
        <div>FLOWSHARK_AI // SECURE COMMERCIAL TRANSMISSION</div>
        <div>AUTHORIZED SPECIFICATION</div>
      </footer>
    </article>
  )
}

import type { DocumentData, Template } from '../types'
import { calculateTotals, formatMoney } from '../utils/formatters'
import { Check, ArrowRight, Layers, FileText, CheckCircle2, ChevronRight } from 'lucide-react'

type Props = {
  data: DocumentData
  template: Template
  accent: string
}

export default function ProposalMinimal({ data, template, accent }: Props) {
  const { subtotal, discount, tax, total } = calculateTotals(data)
  const blueColor = template.color || '#1764e8'
  const dynamicBlue = accent !== '#5838e8' ? accent : blueColor

  return (
    <article
      className="proposal-modern-minimal w-full max-w-[800px] min-h-[1060px] bg-white text-slate-800 font-['DM_Sans',sans-serif] shadow-2xl relative flex flex-col justify-between overflow-hidden p-8 sm:p-12 border border-slate-100"
      style={{
        '--proposal-blue': dynamicBlue
      } as React.CSSProperties}
    >
      {/* Main Container */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Top Minimal Brand Row */}
        <div className="flex justify-between items-center pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-base shadow-sm"
              style={{ background: dynamicBlue }}
            >
              F
            </div>
            <span className="font-bold text-sm tracking-tight text-slate-900 font-['Manrope',sans-serif]">
              {data.company || 'Flowshark.ai'}
            </span>
          </div>
          <div className="text-right text-xs text-slate-400 font-mono">
            REF // {data.documentNumber}
          </div>
        </div>

        {/* 1. White Cover / Header: Oversized Blue Title & Architectural Visual */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <span
              className="text-xs font-bold uppercase tracking-[0.2em] block mb-2"
              style={{ color: dynamicBlue }}
            >
              COMMERCIAL PROPOSAL 2026
            </span>
            <h1
              className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-[0.95] text-slate-900 font-['Manrope',sans-serif]"
            >
              Client <br />
              <span style={{ color: dynamicBlue }}>Operations</span> <br />
              Platform.
            </h1>
            <p className="text-xs text-slate-500 mt-4 leading-relaxed font-normal max-w-sm">
              Prepared especially for <strong className="text-slate-800 font-semibold">{data.client}</strong>. Modernizing your client lifecycle from acquisition to retention.
            </p>
          </div>

          {/* Architectural Visual (CSS / SVG engineered graphic) */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-48 h-48 border border-slate-200 rounded-2xl p-4 bg-slate-50/50 flex flex-col justify-between overflow-hidden shadow-inner">
              {/* Perspective grid lines */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="archGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke={dynamicBlue} strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#archGrid)" />
                </svg>
              </div>

              {/* Architectural Wireframe Isometric Blocks */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase">
                  ARCH_STRUCT v2
                </span>
                <span className="w-2 h-2 rounded-full" style={{ background: dynamicBlue }} />
              </div>

              {/* Layered Architectural CSS Blocks */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                <div
                  className="w-28 h-7 rounded border shadow-sm flex items-center justify-center text-[10px] font-bold text-white mb-1.5 transition-transform"
                  style={{ background: dynamicBlue }}
                >
                  Finn Intelligence Core
                </div>
                <div className="w-20 h-6 rounded border border-slate-300 bg-white shadow-xs flex items-center justify-center text-[9px] font-medium text-slate-600 mb-1.5">
                  Workflow Engine
                </div>
                <div className="w-16 h-5 rounded border border-slate-300 bg-white/80 shadow-xs flex items-center justify-center text-[8px] font-mono text-slate-500">
                  Data Pipeline
                </div>
              </div>

              <div className="relative z-10 text-[9px] font-mono text-slate-400 text-right">
                MODULAR ARCHITECTURE
              </div>
            </div>
          </div>
        </div>

        {/* 2. Split Contents Page & Structured Project Overview */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-6 py-6 border-t border-b border-slate-100 items-start">
          {/* Left Column: Split Table of Contents */}
          <div className="md:col-span-5 bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-3 font-mono">
              TABLE OF CONTENTS
            </span>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center justify-between text-slate-700 font-medium">
                <span className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-slate-400">01</span>
                  <span>Executive Overview</span>
                </span>
                <ChevronRight size={13} className="text-slate-300" />
              </li>
              <li className="flex items-center justify-between text-slate-700 font-medium">
                <span className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-slate-400">02</span>
                  <span>Proposed Deliverables</span>
                </span>
                <ChevronRight size={13} className="text-slate-300" />
              </li>
              <li className="flex items-center justify-between text-slate-700 font-medium">
                <span className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-slate-400">03</span>
                  <span>Execution Timeline</span>
                </span>
                <ChevronRight size={13} className="text-slate-300" />
              </li>
              <li className="flex items-center justify-between font-bold" style={{ color: dynamicBlue }}>
                <span className="flex items-center gap-2">
                  <span className="font-mono text-[10px]">04</span>
                  <span>Investment & Sign-Off</span>
                </span>
                <ChevronRight size={13} />
              </li>
            </ul>
          </div>

          {/* Right Column: Structured Project Overview */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <span
                className="text-[10px] font-bold uppercase tracking-wider block mb-1"
                style={{ color: dynamicBlue }}
              >
                01 // EXECUTIVE SUMMARY
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-2 font-['Manrope',sans-serif]">
                Strategic Objective & Transformation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {data.intro || 'A modern client operations platform designed to help businesses capture, convert and retain clients with intelligent automation and human oversight.'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100/60">
                <span className="text-[10px] font-bold uppercase text-blue-800 block">Delivery Window</span>
                <span className="text-xs font-semibold text-slate-800 mt-0.5 block">4–6 Weeks Structured SOW</span>
              </div>
              <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100/60">
                <span className="text-[10px] font-bold uppercase text-blue-800 block">Terms of Service</span>
                <span className="text-xs font-semibold text-slate-800 mt-0.5 block">{data.terms}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Scope & Deliverables Grid */}
        <div className="mb-6 flex-1">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 font-['Manrope',sans-serif]">
              02 // SCOPE OF WORK & DELIVERABLES
            </span>
            <span className="text-xs text-slate-400 font-mono">
              ESTIMATED TOTAL: {formatMoney(total, data.currency)}
            </span>
          </div>

          <div className="rounded-xl overflow-hidden border border-slate-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-[10px] uppercase font-mono tracking-wider border-b border-slate-200">
                  <th className="py-2.5 px-3 w-10 text-center">#</th>
                  <th className="py-2.5 px-3">Scope / Deliverable Description</th>
                  <th className="py-2.5 px-3 text-right w-16">Units</th>
                  <th className="py-2.5 px-3 text-right w-24">Unit Rate</th>
                  <th className="py-2.5 px-3 text-right w-28">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {data.items.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="py-3 px-3 text-center text-slate-400 font-mono text-[11px]">
                      {String(idx + 1).padStart(2, '0')}
                    </td>
                    <td className="py-3 px-3 font-semibold text-slate-800">
                      {item.description}
                    </td>
                    <td className="py-3 px-3 text-right text-slate-600 font-mono">
                      {item.qty}
                    </td>
                    <td className="py-3 px-3 text-right text-slate-600 font-mono">
                      {formatMoney(item.price, data.currency)}
                    </td>
                    <td className="py-3 px-3 text-right font-bold text-slate-900 font-mono">
                      {formatMoney(item.qty * item.price, data.currency)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. Investment Breakdown & Acceptance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-end mb-6 pt-2">
          {/* Notes & Acceptance Statement */}
          <div className="text-xs text-slate-500 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block font-mono">
              PROPOSAL ACCEPTANCE TERMS
            </span>
            <p className="text-[11px] leading-relaxed">
              Upon approval, implementation begins within 3 business days. All milestones include complete documentation and dedicated engineering support.
            </p>
            {data.notes && (
              <p className="text-[11px] italic text-slate-600">
                "{data.notes}"
              </p>
            )}
          </div>

          {/* Clean Total Investment Box */}
          <div className="p-5 rounded-2xl bg-slate-900 text-white shadow-lg">
            <div className="space-y-1.5 text-xs text-slate-300 mb-3">
              <div className="flex justify-between">
                <span>Base Subtotal</span>
                <span className="font-mono">{formatMoney(subtotal, data.currency)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>Partner Savings</span>
                  <span className="font-mono">−{formatMoney(discount, data.currency)}</span>
                </div>
              )}
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span>Tax ({data.tax}%)</span>
                <span className="font-mono">{formatMoney(tax, data.currency)}</span>
              </div>
            </div>

            <div className="flex justify-between items-baseline pt-1">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">
                  TOTAL INVESTMENT
                </span>
                <span className="text-[10px] text-slate-400">Due under {data.terms}</span>
              </div>
              <span
                className="text-2xl font-black font-mono tracking-tight"
                style={{ color: dynamicBlue }}
              >
                {formatMoney(total, data.currency)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Minimal Proposal Footer */}
      <footer className="pt-4 border-t border-slate-100 text-[10px] text-slate-400 flex justify-between items-center">
        <div>{data.company || 'Flowshark.ai'} · Modern Minimal Proposal Specification</div>
        <div>Client: {data.client}</div>
      </footer>
    </article>
  )
}

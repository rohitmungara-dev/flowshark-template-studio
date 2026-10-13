import type { DocumentData, Template } from '../types'
import { calculateTotals, formatMoney } from '../utils/formatters'
import { Cpu, Terminal, ArrowRight, CheckSquare, Layers, Database, Activity, ShieldCheck } from 'lucide-react'

type Props = {
  data: DocumentData
  template: Template
  accent: string
}

export default function ProposalBlueprint({ data, template, accent }: Props) {
  const { subtotal, discount, tax, total } = calculateTotals(data)
  const blueprintBlue = template.color || '#0877df'
  const dynamicCyan = accent !== '#5838e8' ? accent : blueprintBlue

  return (
    <article
      className="proposal-blueprint w-full max-w-[800px] min-h-[1060px] bg-[#f7fbff] text-[#0f2842] font-['Space_Mono',monospace] shadow-2xl relative flex flex-col justify-between overflow-hidden p-8 sm:p-11 border-2 border-[#b8daf8]"
      style={{
        '--bp-color': dynamicCyan,
        backgroundImage: 'radial-gradient(#c6e1fc 1px, transparent 1px)',
        backgroundSize: '16px 16px'
      } as React.CSSProperties}
    >
      {/* Decorative Blueprint Corner Markers */}
      <div className="absolute top-2 left-2 text-[9px] text-[#71a3d3] select-none">+0,0</div>
      <div className="absolute top-2 right-2 text-[9px] text-[#71a3d3] select-none">+800,0</div>
      <div className="absolute bottom-2 left-2 text-[9px] text-[#71a3d3] select-none">+0,1060</div>
      <div className="absolute bottom-2 right-2 text-[9px] text-[#71a3d3] select-none">+800,1060</div>

      {/* Main Container */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        {/* 1. Structured Technical Grid Header */}
        <div className="bg-[#0b335c] text-white p-5 rounded-lg border border-[#164c85] shadow-sm mb-6">
          <div className="flex justify-between items-start border-b border-[#1c5594] pb-4 mb-3">
            <div>
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold mb-1">
                <Terminal size={14} />
                <span>SPECIFICATION_FILE // {data.documentNumber}</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase font-sans">
                SYSTEM BLUEPRINT & ARCHITECTURE SPEC
              </h1>
              <p className="text-[11px] text-[#8fc3f3] mt-1 font-mono">
                TARGET_NODE: {data.client || 'Client Organization'} // CREATED_BY: {data.company || 'Flowshark.ai'}
              </p>
            </div>

            <div className="text-right">
              <span className="inline-block px-2.5 py-1 bg-cyan-950 border border-cyan-400 text-cyan-300 text-[10px] font-bold rounded">
                STATUS: APPROVED_SPEC
              </span>
              <div className="text-[10px] text-[#8fc3f3] mt-1.5 font-mono">
                DATE: {data.issueDate}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] text-[#b9dbfc]">
            <div>DEPLOY_ENV: <span className="text-white font-bold">AWS_CLOUD</span></div>
            <div>SECURITY: <span className="text-white font-bold">SOC2_TYPE_II</span></div>
            <div>SLA: <span className="text-white font-bold">99.99%_UPTIME</span></div>
            <div>TERMS: <span className="text-white font-bold">{data.terms}</span></div>
          </div>
        </div>

        {/* 2. Technical Diagrams Built with HTML/CSS */}
        <div className="bg-white/95 border-2 border-[#b8daf8] rounded-xl p-5 mb-6 shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b335c] flex items-center gap-1.5 font-sans">
              <Activity size={14} style={{ color: dynamicCyan }} />
              DATA FLOW & WORKFLOW PIPELINE ARCHITECTURE
            </span>
            <span className="text-[10px] font-mono text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
              LATENCY &lt; 15MS
            </span>
          </div>

          {/* Fully Coded CSS System Flow Diagram */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 items-center text-center my-2">
            {/* Node 1 */}
            <div className="bg-slate-50 border border-slate-300 p-2.5 rounded-lg">
              <span className="text-[9px] font-bold text-slate-500 block uppercase">NODE 01</span>
              <span className="text-xs font-bold text-slate-800 block my-0.5">Inbound Leads</span>
              <span className="text-[9px] text-slate-500 font-mono">Gmail / Web / API</span>
            </div>

            {/* Node 2 */}
            <div className="bg-blue-50 border-2 border-blue-400 p-2.5 rounded-lg relative">
              <span className="text-[9px] font-bold text-blue-600 block uppercase">NODE 02: CORE</span>
              <span className="text-xs font-bold text-blue-900 block my-0.5">Finn AI Parser</span>
              <span className="text-[9px] text-blue-600 font-mono">Realtime Inference</span>
            </div>

            {/* Node 3 */}
            <div className="bg-slate-50 border border-slate-300 p-2.5 rounded-lg">
              <span className="text-[9px] font-bold text-slate-500 block uppercase">NODE 03</span>
              <span className="text-xs font-bold text-slate-800 block my-0.5">Automations</span>
              <span className="text-[9px] text-slate-500 font-mono">Trigger Rules</span>
            </div>

            {/* Node 4 */}
            <div className="bg-emerald-50 border border-emerald-300 p-2.5 rounded-lg">
              <span className="text-[9px] font-bold text-emerald-600 block uppercase">NODE 04</span>
              <span className="text-xs font-bold text-emerald-900 block my-0.5">Settlement</span>
              <span className="text-[9px] text-emerald-600 font-mono">Billing & Retain</span>
            </div>
          </div>

          <p className="text-[11px] text-[#426182] leading-relaxed mt-3 font-sans">
            {data.intro || 'Automated client intelligence architecture connecting communication signals directly to structured pipelines, proposal generation, and automated invoices.'}
          </p>
        </div>

        {/* 3. Scope Details / Itemized Technical Modules */}
        <div className="mb-6 flex-1">
          <div className="flex justify-between items-center mb-2 px-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b335c] font-sans">
              ITEMIZED SYSTEM MODULES & SPECIFICATIONS
            </span>
            <span className="text-[10px] text-slate-500 font-mono">
              SPEC_COUNT: {data.items.length}
            </span>
          </div>

          <div className="border-2 border-[#b8daf8] rounded-lg overflow-hidden bg-white shadow-xs">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#0b335c] text-white text-[10px] uppercase tracking-wider border-b border-[#0b335c]">
                  <th className="py-2.5 px-3 w-14 text-center font-mono">CODE</th>
                  <th className="py-2.5 px-3 font-sans">Technical Module Scope</th>
                  <th className="py-2.5 px-3 text-right w-14">QTY</th>
                  <th className="py-2.5 px-3 text-right w-24">UNIT_COST</th>
                  <th className="py-2.5 px-3 text-right w-28">ALLOCATION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-100 font-mono text-[11px]">
                {data.items.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-blue-50/40'}>
                    <td className="py-2.5 px-3 text-center text-slate-400">
                      M-{String(idx + 1).padStart(2, '0')}
                    </td>
                    <td className="py-2.5 px-3 font-sans font-semibold text-[#0d2a48]">
                      {item.description}
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-600">
                      {item.qty}
                    </td>
                    <td className="py-2.5 px-3 text-right text-slate-600">
                      {formatMoney(item.price, data.currency)}
                    </td>
                    <td className="py-2.5 px-3 text-right font-bold text-[#0b335c]">
                      {formatMoney(item.qty * item.price, data.currency)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. Clearly Organized Investment Plan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start mb-6">
          {/* Engineering Verification & Stamp */}
          <div className="bg-white/90 border border-[#b8daf8] p-4 rounded-xl text-xs space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-[#0b335c] font-sans">
              <ShieldCheck size={16} style={{ color: dynamicCyan }} />
              <span>ENGINEERING DEPLOYMENT AUTHORIZATION</span>
            </div>
            <p className="text-[11px] text-[#4a6b8f] font-sans leading-relaxed">
              Execution commences automatically upon contract lock. Standard SLA and support warranty applied according to {data.terms}.
            </p>
            {data.notes && (
              <p className="text-[10px] text-slate-500 border-t border-blue-100 pt-1.5 italic font-sans">
                DISPATCH_NOTE: "{data.notes}"
              </p>
            )}
          </div>

          {/* Investment Matrix */}
          <div className="bg-[#0b335c] text-white p-4 rounded-xl border border-[#164c85] shadow-md font-mono text-xs">
            <span className="text-[10px] text-cyan-300 block mb-2 uppercase font-bold">
              COMMERCIAL COMPUTATION // TOTAL
            </span>
            <div className="space-y-1.5 border-b border-[#1c5594] pb-2 text-[11px] text-[#b4d8fa]">
              <div className="flex justify-between">
                <span>SUBTOTAL_GROSS:</span>
                <span>{formatMoney(subtotal, data.currency)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-cyan-300">
                  <span>DISCOUNT_CREDIT:</span>
                  <span>−{formatMoney(discount, data.currency)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>STATUTORY_TAX ({data.tax}%):</span>
                <span>{formatMoney(tax, data.currency)}</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2 text-white">
              <span className="font-bold text-xs uppercase text-cyan-300 font-sans">
                TOTAL INVESTMENT:
              </span>
              <span className="text-xl font-bold font-mono tracking-tight text-white">
                {formatMoney(total, data.currency)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Blueprint Footer */}
      <footer className="relative z-10 pt-3 border-t border-[#b8daf8] text-[10px] text-[#5586b7] flex justify-between items-center font-mono">
        <div>SYS_SIG: SHA256-VERIFIED-{data.documentNumber}</div>
        <div>PAGE_01_OF_01 // END_OF_SPEC</div>
      </footer>
    </article>
  )
}

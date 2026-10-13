import type { DocumentData, Template } from '../types'
import { calculateTotals, formatMoney } from '../utils/formatters'
import { Building2, Shield, FileCheck, CheckCircle2 } from 'lucide-react'

type Props = {
  data: DocumentData
  template: Template
  accent: string
}

export default function ProposalCorporate({ data, template, accent }: Props) {
  const { subtotal, discount, tax, total } = calculateTotals(data)
  // Restrained corporate charcoal & slate palette
  const corporateAccent = accent !== '#5838e8' ? accent : '#18181b'

  return (
    <article
      className="proposal-premium-corporate w-full max-w-[800px] min-h-[1060px] bg-white text-zinc-900 font-['DM_Sans',sans-serif] shadow-2xl relative flex flex-col justify-between overflow-hidden p-8 sm:p-12 border border-zinc-300"
    >
      {/* Main Container */}
      <div className="flex-1 flex flex-col justify-between">
        {/* 1. Restrained Header: Formal Corporate Typography & Identity */}
        <div className="pb-6 border-b-2 border-zinc-900 flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zinc-900 text-white rounded flex items-center justify-center font-bold text-xl">
              F
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight text-zinc-900 uppercase font-['Manrope',sans-serif]">
                {data.company || 'Flowshark Technologies Inc.'}
              </div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">
                Enterprise Client Operations Group
              </div>
            </div>
          </div>

          <div className="text-right">
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 block font-mono">
              DOCUMENT ID // {data.documentNumber}
            </span>
            <span className="inline-block px-2.5 py-0.5 rounded bg-zinc-100 text-zinc-800 text-[10px] font-mono font-bold mt-1">
              COMMERCIAL PROPOSAL · CONFIDENTIAL
            </span>
          </div>
        </div>

        {/* Project Metadata Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-b border-zinc-200 text-xs font-mono">
          <div>
            <span className="text-[9px] uppercase tracking-wider text-zinc-400 block font-sans">Client Partner</span>
            <span className="font-bold text-zinc-900">{data.client}</span>
          </div>
          <div>
            <span className="text-[9px] uppercase tracking-wider text-zinc-400 block font-sans">Date Submitted</span>
            <span className="text-zinc-800">{data.issueDate}</span>
          </div>
          <div>
            <span className="text-[9px] uppercase tracking-wider text-zinc-400 block font-sans">Offer Validity</span>
            <span className="text-zinc-800">{data.dueDate}</span>
          </div>
          <div>
            <span className="text-[9px] uppercase tracking-wider text-zinc-400 block font-sans">Commercial Terms</span>
            <span className="text-zinc-800">{data.terms}</span>
          </div>
        </div>

        {/* 2. Formal Executive Summary */}
        <div className="my-6">
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-1 font-mono">
            SECTION 1.0 // FORMAL EXECUTIVE SUMMARY
          </span>
          <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-900 mb-2 font-['Manrope',sans-serif]">
            Statement of Work & Strategic Architecture
          </h1>
          <p className="text-xs text-zinc-700 leading-relaxed max-w-2xl">
            {data.intro || 'Flowshark is pleased to submit this comprehensive commercial proposal for modernizing and scaling your end-to-end client operations. Our proven methodology establishes automated client intake, deal progression, milestone billing, and lifecycle retention.'}
          </p>
        </div>

        {/* 3. Formal Table of Contents */}
        <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-200 my-4 text-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-2 font-mono">
            SECTION 2.0 // TABLE OF CONTENTS
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 text-zinc-700 font-mono text-[11px]">
            <div className="flex justify-between border-b border-dotted border-zinc-300 pb-0.5">
              <span>1.0 Executive Summary</span>
              <span className="text-zinc-400">Pg 01</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-zinc-300 pb-0.5">
              <span>2.0 Table of Contents</span>
              <span className="text-zinc-400">Pg 01</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-zinc-300 pb-0.5">
              <span>3.0 Scope & Deliverables Matrix</span>
              <span className="text-zinc-400">Pg 02</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-zinc-300 pb-0.5">
              <span>4.0 Investment & Terms</span>
              <span className="text-zinc-400">Pg 02</span>
            </div>
            <div className="flex justify-between border-b border-dotted border-zinc-300 pb-0.5 sm:col-span-2">
              <span>5.0 Mutual Acceptance & Sign-Off</span>
              <span className="text-zinc-400">Pg 02</span>
            </div>
          </div>
        </div>

        {/* 4. Scope-and-Deliverables Table */}
        <div className="my-5 flex-1">
          <div className="flex justify-between items-center mb-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 font-mono">
              SECTION 3.0 // SCOPE & DELIVERABLES MATRIX
            </span>
            <span className="text-xs text-zinc-500 font-mono">
              Total Modules: {data.items.length}
            </span>
          </div>

          <div className="border border-zinc-300 rounded overflow-hidden">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-zinc-900 text-white text-[10px] uppercase font-mono tracking-wider">
                  <th className="py-2.5 px-3 w-16 text-center">Ref</th>
                  <th className="py-2.5 px-3">Scope Specification & Deliverable</th>
                  <th className="py-2.5 px-3 text-right w-16">Units</th>
                  <th className="py-2.5 px-3 text-right w-24">Rate</th>
                  <th className="py-2.5 px-3 text-right w-28">Subtotal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {data.items.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-zinc-50/70'}>
                    <td className="py-3 px-3 text-center font-mono text-[11px] text-zinc-500">
                      DEL-{String(idx + 1).padStart(2, '0')}
                    </td>
                    <td className="py-3 px-3 font-semibold text-zinc-900">
                      {item.description}
                    </td>
                    <td className="py-3 px-3 text-right text-zinc-600 font-mono">
                      {item.qty}
                    </td>
                    <td className="py-3 px-3 text-right text-zinc-600 font-mono">
                      {formatMoney(item.price, data.currency)}
                    </td>
                    <td className="py-3 px-3 text-right font-bold text-zinc-900 font-mono">
                      {formatMoney(item.qty * item.price, data.currency)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. Formal Investment Breakdown & Next Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start my-4">
          {/* Section 4.0 Investment Table */}
          <div className="border border-zinc-300 rounded-xl p-4 bg-zinc-50/50">
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-600 block mb-2 font-mono">
              SECTION 4.0 // INVESTMENT BREAKDOWN
            </span>
            <div className="space-y-1.5 text-xs text-zinc-700">
              <div className="flex justify-between border-b border-zinc-200 pb-1">
                <span>Gross Project Subtotal</span>
                <span className="font-mono">{formatMoney(subtotal, data.currency)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between border-b border-zinc-200 pb-1 text-zinc-800 font-medium">
                  <span>Authorized Enterprise Concession</span>
                  <span className="font-mono">−{formatMoney(discount, data.currency)}</span>
                </div>
              )}
              <div className="flex justify-between border-b border-zinc-200 pb-1">
                <span>Applicable Tax ({data.tax}%)</span>
                <span className="font-mono">{formatMoney(tax, data.currency)}</span>
              </div>
              <div className="flex justify-between items-center pt-2 text-zinc-900 font-bold">
                <span className="uppercase text-xs font-mono">Total Agreed Investment</span>
                <span className="font-mono text-lg font-black">{formatMoney(total, data.currency)}</span>
              </div>
            </div>
          </div>

          {/* Section 5.0 Formal Next Steps & Mutual Signatures */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-600 block mb-2 font-mono">
              SECTION 5.0 // FORMAL NEXT STEPS & SIGN-OFF
            </span>
            <p className="text-[11px] text-zinc-600 leading-relaxed mb-4">
              Upon dual signature, this proposal transforms into an active Statement of Work. Project kickoff commences in accordance with {data.terms}.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="border-t border-zinc-400 pt-1 text-[10px] text-zinc-500">
                <div className="h-6 flex items-end font-serif italic text-xs text-zinc-800">
                  {data.client}
                </div>
                <div className="font-mono uppercase font-bold text-zinc-700">Client Signatory</div>
                <div>Date: _________________</div>
              </div>

              <div className="border-t border-zinc-400 pt-1 text-[10px] text-zinc-500">
                <div className="h-6 flex items-end font-serif italic text-xs text-zinc-800">
                  {data.company || 'Flowshark Officer'}
                </div>
                <div className="font-mono uppercase font-bold text-zinc-700">Flowshark Officer</div>
                <div>Date: {data.issueDate}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Proposal Footer */}
      <footer className="pt-4 border-t border-zinc-200 text-[10px] font-mono text-zinc-500 flex justify-between items-center">
        <div>FLOWSHARK ENTERPRISE DOCUMENT ARCHIVE // STRICTLY CONFIDENTIAL</div>
        <div>AUTHORIZED SPECIFICATION</div>
      </footer>
    </article>
  )
}

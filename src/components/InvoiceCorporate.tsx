import type { DocumentData, Template } from '../types'
import { calculateTotals, formatMoney } from '../utils/formatters'
import { Building2, Shield, FileCheck, Landmark, CheckCircle, Mail, Phone, Globe, MapPin } from 'lucide-react'

type Props = {
  data: DocumentData
  template: Template
  accent: string
}

export default function InvoiceCorporate({ data, template, accent }: Props) {
  const { subtotal, discount, tax, total } = calculateTotals(data)
  const corporateBlue = template.color || '#0877df'
  const dynamicBlue = accent !== '#5838e8' ? accent : corporateBlue

  return (
    <article
      className="corporate-invoice w-full max-w-[800px] min-h-[1060px] bg-white text-slate-800 font-['DM_Sans',sans-serif] shadow-2xl relative flex flex-col justify-between overflow-hidden border border-slate-200"
      style={{
        '--corporate-blue': dynamicBlue
      } as React.CSSProperties}
    >
      {/* 1. Full-Width Blue Top Section containing logo, company tagline, invoice heading, and metadata */}
      <div
        className="w-full text-white p-8 sm:p-9 shadow-md relative"
        style={{
          background: `linear-gradient(135deg, ${dynamicBlue}, #0a4d8c)`
        }}
      >
        {/* Top bar inside blue header: Logo & Tagline on left, Invoice Heading on right */}
        <div className="flex flex-row justify-between items-start gap-6 pb-6 border-b border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center font-bold text-2xl shadow" style={{ color: dynamicBlue }}>
              F
            </div>
            <div>
              <div className="text-2xl font-bold tracking-tight text-white font-['Manrope',sans-serif]">
                {data.company || 'Flowshark Technologies Inc.'}
              </div>
              <div className="text-xs text-blue-100 tracking-wider uppercase font-medium mt-0.5">
                {data.tagline || 'Enterprise Client Operations Platform'}
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-xs uppercase tracking-widest text-blue-200 font-semibold mb-1">
              OFFICIAL COMMERCIAL DOCUMENT
            </div>
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-['Manrope',sans-serif]">
              TAX INVOICE
            </h1>
          </div>
        </div>

        {/* Metadata Grid inside the Full-Width Blue Top Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-5 text-xs">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 border border-white/15">
            <span className="text-[10px] uppercase text-blue-200 block font-semibold">
              Invoice Reference
            </span>
            <span className="font-mono text-sm font-bold text-white tracking-wide">
              {data.documentNumber}
            </span>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 border border-white/15">
            <span className="text-[10px] uppercase text-blue-200 block font-semibold">
              Date of Issue
            </span>
            <span className="font-medium text-white">{data.issueDate}</span>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 border border-white/15">
            <span className="text-[10px] uppercase text-blue-200 block font-semibold">
              Payment Due Date
            </span>
            <span className="font-bold text-amber-200">{data.dueDate}</span>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 border border-white/15">
            <span className="text-[10px] uppercase text-blue-200 block font-semibold">
              Billing Terms
            </span>
            <span className="font-medium text-white">{data.terms}</span>
          </div>
        </div>
      </div>

      {/* 2. White / Very Light Content Area */}
      <div className="p-8 sm:p-9 flex-1 flex flex-col justify-between bg-slate-50/50">
        {/* 3. Client details arranged in two columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-5 rounded-xl border border-slate-200 shadow-sm mb-6">
          {/* Column 1: Client Organization */}
          <div className="border-r-0 sm:border-r sm:border-slate-100 sm:pr-6">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              <Building2 size={13} style={{ color: dynamicBlue }} />
              <span>BILLED TO (CLIENT DETAILS)</span>
            </div>
            <h2 className="text-base font-bold text-slate-900 mb-1.5 font-['Manrope',sans-serif]">
              {data.client || 'Client Organization Ltd.'}
            </h2>
            <p className="text-xs text-slate-500 whitespace-pre-line leading-relaxed">
              {data.clientAddress}
            </p>
            <div className="mt-2 text-[11px] text-slate-400">
              Tax ID / GSTIN: <span className="font-mono text-slate-700">29AAACB1234F1Z5</span>
            </div>
          </div>

          {/* Column 2: Supplier / Issuing Entity Details */}
          <div className="sm:pl-2">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              <Shield size={13} style={{ color: dynamicBlue }} />
              <span>ISSUED BY (SUPPLIER DETAILS)</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5 font-['Manrope',sans-serif]">
              {data.company || 'Flowshark Technologies Inc.'}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Global Operations Center, Tech Park Campus<br />
              Bengaluru, Karnataka 560103, India<br />
              Corporate Tax ID: <span className="font-mono text-slate-700">CIN-U72200KA2024PTC18900</span>
            </p>
          </div>
        </div>

        {/* 4. Large White Invoice Table with Blue Accents */}
        <div className="mb-6 flex-1">
          <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-white" style={{ background: dynamicBlue }}>
                  <th className="py-3 px-4 text-[10px] font-bold uppercase tracking-wider w-12 text-center text-blue-100">
                    Item
                  </th>
                  <th className="py-3 px-4 text-[10px] font-bold uppercase tracking-wider text-white">
                    Deliverable / Description of Services
                  </th>
                  <th className="py-3 px-3 text-[10px] font-bold uppercase tracking-wider text-right w-16 text-blue-100">
                    Qty
                  </th>
                  <th className="py-3 px-4 text-[10px] font-bold uppercase tracking-wider text-right w-28 text-blue-100">
                    Unit Rate
                  </th>
                  <th className="py-3 px-4 text-[10px] font-bold uppercase tracking-wider text-right w-32 text-white">
                    Net Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {data.items.map((item, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}
                  >
                    <td className="py-3.5 px-4 text-center font-mono text-slate-400 text-[11px]">
                      {String(idx + 1).padStart(2, '0')}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">
                      {item.description}
                    </td>
                    <td className="py-3.5 px-3 text-right text-slate-600 font-mono">
                      {item.qty}
                    </td>
                    <td className="py-3.5 px-4 text-right text-slate-600 font-mono">
                      {formatMoney(item.price, data.currency)}
                    </td>
                    <td className="py-3.5 px-4 text-right font-bold text-slate-900 font-mono">
                      {formatMoney(item.qty * item.price, data.currency)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. Structured Payment Details & Blue Total Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start mb-6">
          {/* Structured Payment Details */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm text-xs">
            <div className="flex items-center gap-2 mb-3 font-bold text-slate-800 font-['Manrope',sans-serif]">
              <Landmark size={15} style={{ color: dynamicBlue }} />
              <span>Remittance & Wire Transfer Details</span>
            </div>
            <div className="space-y-1.5 text-[11px] text-slate-600">
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-400">Beneficiary Bank:</span>
                <span className="font-semibold text-slate-800">Standard Corporate Bank</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-400">Account Name:</span>
                <span className="font-semibold text-slate-800">{data.company || 'Flowshark Technologies Inc.'}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-400">Account / IBAN:</span>
                <span className="font-mono font-medium text-slate-800">SCBL00049281920</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-400">SWIFT / BIC:</span>
                <span className="font-mono font-medium text-slate-800">SCBLINBBXXX</span>
              </div>
              <div className="flex justify-between pt-0.5">
                <span className="text-slate-400">Payment Ref:</span>
                <span className="font-mono font-bold" style={{ color: dynamicBlue }}>{data.documentNumber}</span>
              </div>
            </div>
            {data.notes && (
              <p className="mt-3 text-[10px] text-slate-400 border-t border-slate-100 pt-2 italic">
                Note: {data.notes}
              </p>
            )}
          </div>

          {/* Financial Calculation + Blue Total Bar */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="p-4 space-y-2 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Gross Subtotal</span>
                <span className="font-mono font-semibold text-slate-800">
                  {formatMoney(subtotal, data.currency)}
                </span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-blue-600">
                  <span>Contractual Rebate / Discount</span>
                  <span className="font-mono font-bold">
                    −{formatMoney(discount, data.currency)}
                  </span>
                </div>
              )}
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span>Corporate Tax / VAT ({data.tax}%)</span>
                <span className="font-mono font-semibold text-slate-800">
                  {formatMoney(tax, data.currency)}
                </span>
              </div>
            </div>

            {/* Blue Total Bar */}
            <div
              className="p-4 text-white flex justify-between items-center"
              style={{ background: dynamicBlue }}
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-100 block">
                  TOTAL AMOUNT PAYABLE
                </span>
                <span className="text-[10px] text-blue-200">Due Date: {data.dueDate}</span>
              </div>
              <span className="text-2xl font-black font-mono tracking-tight text-white">
                {formatMoney(total, data.currency)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Professional Corporate Footer */}
      <footer className="bg-slate-900 text-slate-400 px-8 py-4 border-t border-slate-800 text-[10px]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white font-semibold">
            <FileCheck size={13} style={{ color: dynamicBlue }} />
            <span>{data.company || 'Flowshark Inc.'} Enterprise Billing System</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1"><Mail size={11} /> finance@flowshark.ai</span>
            <span className="flex items-center gap-1"><Phone size={11} /> +1 (888) 555-FLOW</span>
            <span className="flex items-center gap-1"><Globe size={11} /> flowshark.ai/enterprise</span>
          </div>
          <div className="text-slate-500 text-[9px]">
            Strictly Confidential & Proprietary · System ID: {data.documentNumber}
          </div>
        </div>
      </footer>
    </article>
  )
}

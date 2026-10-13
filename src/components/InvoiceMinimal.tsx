import type { DocumentData, Template } from '../types'
import { calculateTotals, formatMoney } from '../utils/formatters'

type Props = {
  data: DocumentData
  template: Template
  accent: string
}

export default function InvoiceMinimal({ data, template, accent }: Props) {
  const { subtotal, discount, tax, total } = calculateTotals(data)
  // Minimal template honors monochrome black & white architecture, with subtle optional accent
  const customAccent = accent !== '#5838e8' && accent !== '#191919' ? accent : '#000000'

  return (
    <article
      className="minimal-invoice w-full max-w-[800px] min-h-[1060px] bg-white text-black font-['DM_Sans',sans-serif] shadow-xl relative flex flex-col justify-between overflow-hidden p-10 sm:p-12 border border-neutral-200"
    >
      {/* Main Container */}
      <div className="flex-1 flex flex-col justify-between">
        {/* 1. Header: Small Logo on left, Bold Right-Aligned INVOICE heading */}
        <div className="flex flex-row justify-between items-start gap-6 pb-6">
          <div className="flex items-center gap-3">
            {/* Small understated logo */}
            <div
              className="w-8 h-8 rounded border border-black flex items-center justify-center font-bold text-base text-black"
              style={{ borderColor: customAccent !== '#000000' ? customAccent : '#000000' }}
            >
              F
            </div>
            <div>
              <div className="text-base font-bold tracking-tight uppercase text-black font-['Manrope',sans-serif]">
                {data.company || 'Flowshark.ai'}
              </div>
              <div className="text-[10px] tracking-wider text-neutral-500 uppercase">
                {data.tagline || 'Studio'}
              </div>
            </div>
          </div>

          <div className="text-right">
            <h1
              className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black font-['Manrope',sans-serif]"
              style={{ color: customAccent !== '#000000' ? customAccent : '#000000' }}
            >
              INVOICE
            </h1>
            <div className="font-mono text-xs text-neutral-600 mt-1">
              № {data.documentNumber}
            </div>
          </div>
        </div>

        {/* 2. Thin divider line */}
        <div className="w-full h-px bg-black my-2" />

        {/* 3. Compact metadata without decorative cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 text-xs font-mono">
          <div>
            <span className="text-[9px] uppercase tracking-wider text-neutral-400 block font-sans">
              Invoice Number
            </span>
            <span className="font-semibold text-black">{data.documentNumber}</span>
          </div>
          <div>
            <span className="text-[9px] uppercase tracking-wider text-neutral-400 block font-sans">
              Issue Date
            </span>
            <span className="font-normal text-black">{data.issueDate}</span>
          </div>
          <div>
            <span className="text-[9px] uppercase tracking-wider text-neutral-400 block font-sans">
              Payment Due
            </span>
            <span className="font-bold text-black">{data.dueDate}</span>
          </div>
          <div>
            <span className="text-[9px] uppercase tracking-wider text-neutral-400 block font-sans">
              Payment Terms
            </span>
            <span className="font-normal text-neutral-700">{data.terms}</span>
          </div>
        </div>

        {/* Thin divider line */}
        <div className="w-full h-px bg-neutral-200 mb-6" />

        {/* Client Details: Typographic, clean, no decorative cards */}
        <div className="mb-8">
          <span className="text-[9px] uppercase tracking-widest text-neutral-400 block mb-1">
            Billed To
          </span>
          <div className="text-base font-bold text-black font-['Manrope',sans-serif]">
            {data.client || 'Client Name'}
          </div>
          <div className="text-xs text-neutral-600 leading-relaxed whitespace-pre-line mt-1">
            {data.clientAddress}
          </div>
        </div>

        {/* 4. Simple Monochrome Table with Thin Divider Lines */}
        <div className="mb-8 flex-1">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-t border-b border-black text-black text-[10px] uppercase tracking-wider font-semibold">
                <th className="py-2.5 px-2 w-10 text-center font-mono">#</th>
                <th className="py-2.5 px-3">Description</th>
                <th className="py-2.5 px-3 text-right w-16">Qty</th>
                <th className="py-2.5 px-3 text-right w-24">Rate</th>
                <th className="py-2.5 px-3 text-right w-28">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 text-xs">
              {data.items.map((item, idx) => (
                <tr key={idx} className="border-b border-neutral-100">
                  <td className="py-3 px-2 text-center text-neutral-400 font-mono text-[11px]">
                    {String(idx + 1).padStart(2, '0')}
                  </td>
                  <td className="py-3 px-3 text-neutral-900 font-medium">
                    {item.description}
                  </td>
                  <td className="py-3 px-3 text-right text-neutral-600 font-mono">
                    {item.qty}
                  </td>
                  <td className="py-3 px-3 text-right text-neutral-600 font-mono">
                    {formatMoney(item.price, data.currency)}
                  </td>
                  <td className="py-3 px-3 text-right font-semibold text-black font-mono">
                    {formatMoney(item.qty * item.price, data.currency)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-full h-px bg-black mt-0.5" />
        </div>

        {/* 5. Minimal Payment Details (Left) & Right-Aligned Totals (Right) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start mb-8 pt-2">
          {/* Minimal Payment Details & Terms and Conditions */}
          <div className="text-xs space-y-4">
            <div>
              <span className="text-[9px] uppercase tracking-wider text-neutral-400 block font-semibold mb-1.5">
                Payment Details
              </span>
              <div className="font-mono text-[11px] text-neutral-700 space-y-1">
                <div>Bank: First National Commercial Bank</div>
                <div>Account: {data.company || 'Flowshark'} Operations</div>
                <div>Reference: {data.documentNumber}</div>
              </div>
            </div>

            <div>
              <span className="text-[9px] uppercase tracking-wider text-neutral-400 block font-semibold mb-1">
                Terms & Conditions
              </span>
              <p className="text-[11px] text-neutral-500 leading-relaxed">
                Payment is required within {data.terms}. All late payments are subject to a 1.5% monthly finance charge.
              </p>
              {data.notes && (
                <p className="text-[11px] text-neutral-600 italic mt-1.5">
                  "{data.notes}"
                </p>
              )}
            </div>
          </div>

          {/* Right-Aligned Totals */}
          <div className="text-xs space-y-2 text-neutral-700">
            <div className="flex justify-between">
              <span className="text-neutral-500">Subtotal</span>
              <span className="font-mono">{formatMoney(subtotal, data.currency)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-neutral-600">
                <span>Discount</span>
                <span className="font-mono">−{formatMoney(discount, data.currency)}</span>
              </div>
            )}
            <div className="flex justify-between pb-2 border-b border-neutral-200">
              <span className="text-neutral-500">Tax ({data.tax}%)</span>
              <span className="font-mono">{formatMoney(tax, data.currency)}</span>
            </div>

            {/* Total with bold underline / double border */}
            <div className="pt-2 flex justify-between items-baseline border-b-2 border-black pb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-black">
                Total Due
              </span>
              <span className="text-2xl font-black font-mono text-black">
                {formatMoney(total, data.currency)}
              </span>
            </div>
          </div>
        </div>

        {/* 6. Understated Signature Area */}
        <div className="flex justify-end pt-4 pb-6">
          <div className="w-52 text-left">
            <div className="h-10 border-b border-neutral-400 flex items-end pb-1 font-serif italic text-xs text-neutral-800">
              Flowshark Finance
            </div>
            <div className="text-[9px] uppercase tracking-wider text-neutral-400 mt-1">
              Authorized Signature
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Footer */}
      <footer className="pt-4 border-t border-neutral-200 text-[10px] text-neutral-400 flex justify-between items-center font-mono">
        <div>{data.company || 'Flowshark'} · Invoice {data.documentNumber}</div>
        <div>Page 1 of 1</div>
      </footer>
    </article>
  )
}

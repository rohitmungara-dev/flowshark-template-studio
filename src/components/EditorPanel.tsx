import type { DocumentData, Kind } from '../types'
import { Plus, Trash2 } from 'lucide-react'

type Props = { data: DocumentData; onChange: (data: DocumentData) => void; kind: Kind }
export default function EditorPanel({ data, onChange, kind }: Props) {
  const set = (key: keyof DocumentData, value: string | number) => onChange({ ...data, [key]: value })
  const setItem = (index: number, key: 'description' | 'qty' | 'price', value: string) => onChange({ ...data, items: data.items.map((item, i) => i === index ? { ...item, [key]: key === 'description' ? value : Number(value) || 0 } : item) })
  return <div className="editor-panel">
    <div className="editor-section"><h3>Business details</h3>
      <label>Company name<input value={data.company} onChange={e => set('company', e.target.value)}/></label>
      <label>Tagline<input value={data.tagline} onChange={e => set('tagline', e.target.value)}/></label>
      <label>Client / customer<input value={data.client} onChange={e => set('client', e.target.value)}/></label>
      <label>Client address<textarea rows={3} value={data.clientAddress} onChange={e => set('clientAddress', e.target.value)}/></label>
    </div>
    <div className="editor-section"><h3>{kind === 'proposal' ? 'Proposal' : 'Invoice'} details</h3>
      <div className="field-grid"><label>Document number<input value={data.documentNumber} onChange={e => set('documentNumber', e.target.value)}/></label><label>Issue date<input value={data.issueDate} onChange={e => set('issueDate', e.target.value)}/></label><label>Due date<input value={data.dueDate} onChange={e => set('dueDate', e.target.value)}/></label><label>Payment terms<input value={data.terms} onChange={e => set('terms', e.target.value)}/></label></div>
      {kind === 'proposal' && <label>Project overview<textarea rows={3} value={data.intro} onChange={e => set('intro', e.target.value)}/></label>}
    </div>
    <div className="editor-section"><div className="section-heading"><h3>Line items</h3><button className="small-button" onClick={() => onChange({ ...data, items: [...data.items, { description: 'New service', qty: 1, price: 100 }] })}><Plus size={14}/> Add item</button></div>
      {data.items.map((item, i) => <div className="item-editor" key={i}><div className="item-editor-title"><span>Item {String(i + 1).padStart(2, '0')}</span><button aria-label="Remove item" onClick={() => onChange({ ...data, items: data.items.filter((_, index) => index !== i) })}><Trash2 size={14}/></button></div><label>Description<input value={item.description} onChange={e => setItem(i, 'description', e.target.value)}/></label><div className="field-grid"><label>Quantity<input type="number" min="0" value={item.qty} onChange={e => setItem(i, 'qty', e.target.value)}/></label><label>Unit price<input type="number" min="0" value={item.price} onChange={e => setItem(i, 'price', e.target.value)}/></label></div></div>)}
    </div>
    <div className="editor-section"><h3>Totals & notes</h3><div className="field-grid"><label>Tax (%)<input type="number" min="0" value={data.tax} onChange={e => set('tax', Number(e.target.value))}/></label><label>Discount<input type="number" min="0" value={data.discount} onChange={e => set('discount', Number(e.target.value))}/></label><label>Currency<select value={data.currency} onChange={e => set('currency', e.target.value)}><option>USD</option><option>INR</option><option>EUR</option><option>GBP</option></select></label></div><label>Notes<textarea rows={3} value={data.notes} onChange={e => set('notes', e.target.value)}/></label></div>
  </div>
}

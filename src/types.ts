export type Kind = 'proposal' | 'invoice'
export type LineItem = { description: string; qty: number; price: number }
export type DocumentData = {
  company: string; tagline: string; client: string; clientAddress: string;
  documentNumber: string; issueDate: string; dueDate: string; terms: string;
  intro: string; notes: string; tax: number; discount: number; currency: string;
  items: LineItem[]
}
export type Template = { id: string; name: string; description: string; kind: Kind; style: string; color: string; accent: string }

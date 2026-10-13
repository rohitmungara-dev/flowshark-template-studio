import type { DocumentData, Template } from './types'

export const initialData: DocumentData = {
  company: 'Flowshark.ai', tagline: 'Build. Automate. Scale.',
  client: 'BrightLens Media Pvt. Ltd.', clientAddress: '456 Creative Street\\nBengaluru, KA 560001\\nIndia\\nfinance@brightlens.in',
  documentNumber: 'FS-2026-0428', issueDate: '13 Oct 2026', dueDate: '27 Oct 2026',
  terms: 'Net 14 days', intro: 'A modern client operations platform designed to help businesses capture, convert and retain clients.', 
  notes: 'Thank you for choosing Flowshark.ai. We truly appreciate your business.',
  tax: 8, discount: 100, currency: 'USD',
  items: [
    { description: 'Flowshark.ai Business Plan', qty: 1, price: 299 },
    { description: 'Workflow Automation Setup', qty: 1, price: 499 },
    { description: 'Advanced Analytics Module', qty: 1, price: 249 },
    { description: 'Team Onboarding', qty: 1, price: 199 },
    { description: 'Priority Support (3 Months)', qty: 1, price: 149 }
  ]
}

export const templates: Template[] = [
  { id: 'luxe', name: 'Luxe', description: 'Premium black & champagne', kind: 'invoice', style: 'luxe', color: '#b78b42', accent: '#171717' },
  { id: 'modern', name: 'Modern', description: 'Violet gradients & clean lines', kind: 'invoice', style: 'modern', color: '#5838e8', accent: '#eee9ff' },
  { id: 'corporate', name: 'Corporate', description: 'Confident blue business', kind: 'invoice', style: 'corporate', color: '#0877df', accent: '#e8f3ff' },
  { id: 'minimal', name: 'Minimal', description: 'Monochrome and understated', kind: 'invoice', style: 'minimal', color: '#191919', accent: '#f0f0f0' },
  { id: 'creative', name: 'Creative', description: 'Warm editorial composition', kind: 'invoice', style: 'creative', color: '#e56f4e', accent: '#fff0e6' },
  { id: 'bold', name: 'Dark Bold', description: 'High-impact dark theme', kind: 'invoice', style: 'bold', color: '#7864ff', accent: '#11101d' },
  { id: 'proposal-luxe', name: 'Modern Minimal', description: 'Bright, clear proposal', kind: 'proposal', style: 'proposal-minimal', color: '#1764e8', accent: '#e9f2ff' },
  { id: 'proposal-dark', name: 'Dark Bold', description: 'Strategic, high contrast', kind: 'proposal', style: 'proposal-dark', color: '#7864ff', accent: '#090912' },
  { id: 'proposal-creative', name: 'Creative', description: 'Warm, visual storytelling', kind: 'proposal', style: 'proposal-creative', color: '#d89a55', accent: '#fff0df' },
  { id: 'proposal-corporate', name: 'Premium Corporate', description: 'Elegant enterprise-ready', kind: 'proposal', style: 'proposal-corporate', color: '#252525', accent: '#f0f0f0' },
  { id: 'proposal-artistic', name: 'Artistic', description: 'Expressive and distinctive', kind: 'proposal', style: 'proposal-artistic', color: '#ec8aa8', accent: '#fff0f5' },
  { id: 'proposal-blueprint', name: 'Blueprint', description: 'Structured and technical', kind: 'proposal', style: 'proposal-blueprint', color: '#0877df', accent: '#e9f4ff' }
]

import type { DocumentData } from '../types'

export type CalculatedTotals = {
  subtotal: number
  discount: number
  taxableAmount: number
  tax: number
  total: number
}

export function calculateTotals(data: DocumentData): CalculatedTotals {
  const subtotal = (data.items || []).reduce((sum, item) => {
    const qty = Number(item.qty) || 0
    const price = Number(item.price) || 0
    return sum + qty * price
  }, 0)

  const rawDiscount = Number(data.discount) || 0
  const discount = Math.max(0, Math.min(subtotal, rawDiscount))
  const taxableAmount = Math.max(0, subtotal - discount)
  const taxRate = Number(data.tax) || 0
  const tax = Math.max(0, (taxableAmount * taxRate) / 100)
  const total = Math.max(0, taxableAmount + tax)

  return {
    subtotal,
    discount,
    taxableAmount,
    tax,
    total
  }
}

export function formatMoney(amount: number, currency: string = 'USD'): string {
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency || 'USD',
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    }).format(amount)
  } catch {
    const symbolMap: Record<string, string> = {
      USD: '$',
      EUR: '€',
      GBP: '£',
      INR: '₹'
    }
    const sym = symbolMap[currency] || currency
    return `${sym}${amount.toFixed(2)}`
  }
}

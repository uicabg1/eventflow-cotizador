import type { QuotePricing } from './pricing'
import type { QuoteState } from './types'

export type ProposalDetail = {
  label: string
  value: string
}

export type ProposalSummary = {
  title: string
  subtitle: string
  details: ProposalDetail[]
  packageName: string
  packageDescription: string
  packageIncluded: string[]
  extraLines: string[]
  pricingLines: ProposalDetail[]
  totalLabel: string
  validityNote: string
}

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'MXN',
  maximumFractionDigits: 0,
})

export function createProposalSummary(quote: QuoteState, pricing: QuotePricing): ProposalSummary {
  const clientName = formatClientName(quote.clientName)
  const dateLabel = formatOptionalEventDate(quote.eventDate)
  const eventPhrase = createEventPhrase(pricing.eventType.name)

  return {
    title: quote.clientName.trim() ? `Proposal for ${clientName}` : 'Event proposal',
    subtitle: `${eventPhrase}${dateLabel ? ` on ${dateLabel}` : ''} for ${formatGuestCount(
      pricing.guestCount,
    )}.`,
    details: [
      { label: 'Client', value: clientName },
      { label: 'Tentative date', value: dateLabel || 'To be confirmed' },
      { label: 'Event type', value: pricing.eventType.name },
      { label: 'Guests', value: formatGuestCount(pricing.guestCount) },
    ],
    packageName: pricing.package.name,
    packageDescription: pricing.package.description,
    packageIncluded: pricing.package.included,
    extraLines: pricing.extraLineItems.length
      ? pricing.extraLineItems.map((extra) => `${extra.name} - ${formatCurrency(extra.amount)}`)
      : ['No extras selected'],
    pricingLines: [
      { label: 'Package', value: formatCurrency(pricing.packageSubtotal) },
      { label: 'Event adjustment', value: formatCurrency(pricing.eventAdjustment) },
      { label: 'Extras', value: formatCurrency(pricing.extrasSubtotal) },
    ],
    totalLabel: formatCurrency(pricing.total),
    validityNote: 'Estimate subject to availability and final details.',
  }
}

export function createWhatsAppMessage(quote: QuoteState, pricing: QuotePricing): string {
  const clientName = formatClientName(quote.clientName)
  const dateLabel = formatOptionalEventDate(quote.eventDate) || 'To be confirmed'
  const extrasLabel = pricing.selectedExtras.length
    ? pricing.selectedExtras.map((extra) => extra.name).join(', ')
    : 'No extras selected'

  return [
    `Hi ${clientName === 'Prospective client' ? 'there' : clientName}, here is your EventFlow quote.`,
    `Event: ${pricing.eventType.name}`,
    `Date: ${dateLabel}`,
    `Guests: ${pricing.guestCount}`,
    `Package: ${pricing.package.name}`,
    `Extras: ${extrasLabel}`,
    `Estimated total: ${formatCurrency(pricing.total)}`,
  ].join('\n')
}

function formatClientName(clientName: string): string {
  const trimmedName = clientName.trim()

  return trimmedName || 'Prospective client'
}

function createEventPhrase(eventName: string): string {
  return eventName.toLowerCase().endsWith('event') ? eventName : `${eventName} event`
}

function formatGuestCount(guestCount: number): string {
  return guestCount === 1 ? '1 guest' : `${guestCount} guests`
}

function formatOptionalEventDate(eventDate: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(eventDate)

  if (!match) {
    return ''
  }

  const year = match[1]
  const monthIndex = Number(match[2]) - 1
  const day = Number(match[3])
  const monthName = monthNames[monthIndex]

  if (!monthName || day < 1 || day > 31) {
    return ''
  }

  return `${monthName} ${day}, ${year}`
}

function formatCurrency(value: number): string {
  return currencyFormatter.format(value)
}

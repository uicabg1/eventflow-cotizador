import { describe, expect, it } from 'vitest'

import { calculateQuotePricing } from './pricing'
import { createProposalSummary, createWhatsAppMessage } from './proposal'
import type { QuoteState } from './types'

describe('proposal generation', () => {
  it('creates a proposal summary with client, date, package, extras and total', () => {
    const quote: QuoteState = {
      eventTypeId: 'wedding',
      guestCount: 80,
      selectedPackageId: 'premium',
      selectedExtraIds: ['floral-design', 'dessert-table'],
      eventDate: '2026-05-30',
      clientName: 'Ana',
      notes: '',
    }
    const pricing = calculateQuotePricing(quote)

    const summary = createProposalSummary(quote, pricing)

    expect(summary.title).toBe('Proposal for Ana')
    expect(summary.subtitle).toBe('Wedding event on May 30, 2026 for 80 guests.')
    expect(summary.details).toEqual([
      { label: 'Client', value: 'Ana' },
      { label: 'Tentative date', value: 'May 30, 2026' },
      { label: 'Event type', value: 'Wedding' },
      { label: 'Guests', value: '80 guests' },
    ])
    expect(summary.packageName).toBe('Premium')
    expect(summary.packageDescription).toBe('Full production for events with a high level of detail.')
    expect(summary.packageIncluded).toContain('Premium menu')
    expect(summary.extraLines).toEqual(['Floral design - MX$6,500', 'Dessert table - MX$7,600'])
    expect(summary.pricingLines).toEqual([
      { label: 'Package', value: 'MX$88,400' },
      { label: 'Event adjustment', value: 'MX$22,100' },
      { label: 'Extras', value: 'MX$14,100' },
    ])
    expect(summary.totalLabel).toBe('MX$124,600')
  })

  it('uses generic copy when client, date and extras are missing', () => {
    const quote: QuoteState = {
      eventTypeId: 'birthday',
      guestCount: 25,
      selectedPackageId: 'essential',
      selectedExtraIds: [],
      eventDate: '',
      clientName: '',
      notes: '',
    }
    const pricing = calculateQuotePricing(quote)

    const summary = createProposalSummary(quote, pricing)

    expect(summary.title).toBe('Event proposal')
    expect(summary.subtitle).toBe('Birthday event for 25 guests.')
    expect(summary.details).toContainEqual({ label: 'Client', value: 'Prospective client' })
    expect(summary.details).toContainEqual({ label: 'Tentative date', value: 'To be confirmed' })
    expect(summary.extraLines).toEqual(['No extras selected'])
    expect(summary.totalLabel).toBe('MX$16,500')
  })

  it('creates a concise WhatsApp message with quote essentials', () => {
    const quote: QuoteState = {
      eventTypeId: 'wedding',
      guestCount: 80,
      selectedPackageId: 'premium',
      selectedExtraIds: ['floral-design', 'dessert-table'],
      eventDate: '2026-05-30',
      clientName: 'Ana',
      notes: '',
    }
    const pricing = calculateQuotePricing(quote)

    const message = createWhatsAppMessage(quote, pricing)

    expect(message).toContain('Hi Ana, here is your EventFlow quote.')
    expect(message).toContain('Event: Wedding')
    expect(message).toContain('Date: May 30, 2026')
    expect(message).toContain('Guests: 80')
    expect(message).toContain('Package: Premium')
    expect(message).toContain('Extras: Floral design, Dessert table')
    expect(message).toContain('Estimated total: MX$124,600')
  })
})

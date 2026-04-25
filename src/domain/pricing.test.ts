import { describe, expect, it } from 'vitest'

import { calculateQuotePricing } from './pricing'
import type { QuoteState } from './types'

describe('calculateQuotePricing', () => {
  it('calculates package subtotal, event adjustment, extras and total', () => {
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

    expect(pricing.eventType.name).toBe('Wedding')
    expect(pricing.package.name).toBe('Premium')
    expect(pricing.selectedExtras.map((extra) => extra.id)).toEqual(['floral-design', 'dessert-table'])
    expect(pricing.packageSubtotal).toBe(88_400)
    expect(pricing.eventAdjustment).toBe(22_100)
    expect(pricing.extrasSubtotal).toBe(14_100)
    expect(pricing.total).toBe(124_600)
  })

  it('calculates a base quote without extras', () => {
    const quote: QuoteState = {
      eventTypeId: 'birthday',
      guestCount: 25,
      selectedPackageId: 'essential',
      selectedExtraIds: [],
      eventDate: '2026-06-12',
      clientName: 'Luis',
      notes: '',
    }

    const pricing = calculateQuotePricing(quote)

    expect(pricing.packageSubtotal).toBe(16_500)
    expect(pricing.eventAdjustment).toBe(0)
    expect(pricing.extrasSubtotal).toBe(0)
    expect(pricing.total).toBe(16_500)
  })

  it('rejects quotes without a positive guest count', () => {
    const quote: QuoteState = {
      eventTypeId: 'birthday',
      guestCount: 0,
      selectedPackageId: 'essential',
      selectedExtraIds: [],
      eventDate: '2026-06-12',
      clientName: 'Luis',
      notes: '',
    }

    expect(() => calculateQuotePricing(quote)).toThrow('Guest count must be a positive integer.')
  })
})

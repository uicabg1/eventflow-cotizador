import { describe, expect, it } from 'vitest'

import { createInitialQuoteState, toggleExtraId, updateQuoteState } from './useQuoteState'

describe('quote state helpers', () => {
  it('creates a usable default quote state from the catalog', () => {
    const quote = createInitialQuoteState()

    expect(quote.eventTypeId).toBe('wedding')
    expect(quote.guestCount).toBe(80)
    expect(quote.selectedPackageId).toBe('celebration')
    expect(quote.selectedExtraIds).toEqual(['ambient-lighting'])
    expect(quote.clientName).toBe('')
  })

  it('updates quote state without mutating the original value', () => {
    const quote = createInitialQuoteState()
    const updated = updateQuoteState(quote, {
      guestCount: 120,
      selectedPackageId: 'premium',
    })

    expect(updated.guestCount).toBe(120)
    expect(updated.selectedPackageId).toBe('premium')
    expect(quote.guestCount).toBe(80)
    expect(quote.selectedPackageId).toBe('celebration')
  })

  it('toggles extras on and off while preserving the rest of the quote', () => {
    const quote = createInitialQuoteState()
    const withDj = toggleExtraId(quote, 'dj')
    const withoutLighting = toggleExtraId(withDj, 'ambient-lighting')

    expect(withDj.selectedExtraIds).toEqual(['ambient-lighting', 'dj'])
    expect(withoutLighting.selectedExtraIds).toEqual(['dj'])
    expect(withoutLighting.selectedPackageId).toBe('celebration')
  })
})

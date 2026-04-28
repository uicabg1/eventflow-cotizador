import { describe, expect, it } from 'vitest'

import { assertGuestCountInRange, normalizeGuestCount } from './validation'

describe('quote validation', () => {
  it('normalizes guest counts into the 10 to 500 range', () => {
    expect(normalizeGuestCount(1)).toBe(10)
    expect(normalizeGuestCount(80)).toBe(80)
    expect(normalizeGuestCount(501)).toBe(500)
  })

  it('rounds decimal guest counts before clamping', () => {
    expect(normalizeGuestCount(25.4)).toBe(25)
    expect(normalizeGuestCount(25.5)).toBe(26)
  })

  it('rejects guest counts outside the supported event range', () => {
    expect(() => assertGuestCountInRange(9)).toThrow(
      'Guest count must be an integer between 10 and 500.',
    )
    expect(() => assertGuestCountInRange(501)).toThrow(
      'Guest count must be an integer between 10 and 500.',
    )
    expect(() => assertGuestCountInRange(10)).not.toThrow()
    expect(() => assertGuestCountInRange(500)).not.toThrow()
  })
})

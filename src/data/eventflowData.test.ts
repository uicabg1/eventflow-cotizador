import { describe, expect, it } from 'vitest'

import { eventTypes } from './eventTypes'
import { extras } from './extras'
import { packages } from './packages'

describe('EventFlow base data', () => {
  it('provides the initial quote catalog', () => {
    expect(eventTypes).toHaveLength(4)
    expect(packages).toHaveLength(3)
    expect(extras.length).toBeGreaterThanOrEqual(6)
  })

  it('uses English-facing catalog copy', () => {
    expect(eventTypes.map((eventType) => eventType.name)).toEqual([
      'Wedding',
      'Birthday',
      'Corporate event',
      'Private dinner',
    ])
    expect(packages.map((packageOption) => packageOption.name)).toEqual([
      'Essential',
      'Celebration',
      'Premium',
    ])
    expect(extras.map((extra) => extra.name)).toContain('Ambient lighting')
  })
})

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
})

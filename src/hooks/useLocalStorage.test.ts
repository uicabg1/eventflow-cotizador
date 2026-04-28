import { describe, expect, it } from 'vitest'

import { createInitialQuoteState } from './useQuoteState'
import { quoteStorageKey, readStoredQuote, writeStoredQuote } from './useLocalStorage'

class MemoryStorage {
  private items = new Map<string, string>()

  getItem(key: string): string | null {
    return this.items.get(key) ?? null
  }

  setItem(key: string, value: string): void {
    this.items.set(key, value)
  }
}

describe('quote localStorage helpers', () => {
  it('writes and reads a quote from storage', () => {
    const storage = new MemoryStorage()
    const quote = {
      ...createInitialQuoteState(),
      clientName: 'Ana',
      guestCount: 120,
      selectedExtraIds: ['dj'],
    }

    writeStoredQuote(quote, storage)

    expect(readStoredQuote(storage)).toEqual(quote)
    expect(storage.getItem(quoteStorageKey)).toContain('"clientName":"Ana"')
  })

  it('normalizes persisted guest counts when reading', () => {
    const storage = new MemoryStorage()
    storage.setItem(
      quoteStorageKey,
      JSON.stringify({
        ...createInitialQuoteState(),
        guestCount: 501,
      }),
    )

    expect(readStoredQuote(storage)?.guestCount).toBe(500)
  })

  it('ignores malformed stored quotes', () => {
    const storage = new MemoryStorage()
    storage.setItem(quoteStorageKey, '{not json')

    expect(readStoredQuote(storage)).toBeNull()
  })
})

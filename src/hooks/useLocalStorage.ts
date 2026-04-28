import type { QuoteState } from '../domain/types'
import { normalizeGuestCount } from '../domain/validation'

export const quoteStorageKey = 'eventflow.quote.v1'

export type QuoteStorage = {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
}

export function getBrowserStorage(): QuoteStorage | undefined {
  if (typeof window === 'undefined') {
    return undefined
  }

  return window.localStorage
}

export function readStoredQuote(storage: QuoteStorage | undefined): QuoteState | null {
  if (!storage) {
    return null
  }

  try {
    const storedQuote = storage.getItem(quoteStorageKey)

    if (!storedQuote) {
      return null
    }

    const parsedQuote = JSON.parse(storedQuote)

    if (!isStoredQuote(parsedQuote)) {
      return null
    }

    return {
      ...parsedQuote,
      guestCount: normalizeGuestCount(parsedQuote.guestCount),
    }
  } catch {
    return null
  }
}

export function writeStoredQuote(quote: QuoteState, storage: QuoteStorage | undefined): void {
  if (!storage) {
    return
  }

  storage.setItem(quoteStorageKey, JSON.stringify(quote))
}

function isStoredQuote(value: unknown): value is QuoteState {
  if (!value || typeof value !== 'object') {
    return false
  }

  const quote = value as Record<string, unknown>

  return (
    typeof quote.eventTypeId === 'string' &&
    typeof quote.guestCount === 'number' &&
    typeof quote.selectedPackageId === 'string' &&
    Array.isArray(quote.selectedExtraIds) &&
    quote.selectedExtraIds.every((extraId) => typeof extraId === 'string') &&
    typeof quote.eventDate === 'string' &&
    typeof quote.clientName === 'string' &&
    typeof quote.notes === 'string'
  )
}

import { useEffect, useMemo, useState } from 'react'

import { eventTypes } from '../data/eventTypes'
import { extras } from '../data/extras'
import { packages } from '../data/packages'
import { calculateQuotePricing } from '../domain/pricing'
import type { QuotePricing } from '../domain/pricing'
import type { QuoteState } from '../domain/types'
import { normalizeGuestCount } from '../domain/validation'
import { getBrowserStorage, readStoredQuote, writeStoredQuote } from './useLocalStorage'

export type QuoteStatePatch = Partial<QuoteState>

export function createInitialQuoteState(): QuoteState {
  return {
    eventTypeId: eventTypes[0].id,
    guestCount: 80,
    selectedPackageId: packages[1].id,
    selectedExtraIds: [extras.find((extra) => extra.id === 'ambient-lighting')?.id ?? extras[0].id],
    eventDate: '',
    clientName: '',
    notes: '',
  }
}

export function updateQuoteState(quote: QuoteState, patch: QuoteStatePatch): QuoteState {
  const normalizedPatch =
    typeof patch.guestCount === 'number'
      ? {
          ...patch,
          guestCount: normalizeGuestCount(patch.guestCount),
        }
      : patch

  return {
    ...quote,
    ...normalizedPatch,
  }
}

export function toggleExtraId(quote: QuoteState, extraId: string): QuoteState {
  const isSelected = quote.selectedExtraIds.includes(extraId)
  const selectedExtraIds = isSelected
    ? quote.selectedExtraIds.filter((selectedExtraId) => selectedExtraId !== extraId)
    : [...quote.selectedExtraIds, extraId]

  return updateQuoteState(quote, { selectedExtraIds })
}

export function useQuoteState(initialQuote?: QuoteState) {
  const storage = useMemo(() => getBrowserStorage(), [])
  const [quote, setQuote] = useState<QuoteState>(
    () => initialQuote ?? readStoredQuote(storage) ?? createInitialQuoteState(),
  )
  const pricing = useMemo<QuotePricing>(() => calculateQuotePricing(quote), [quote])

  useEffect(() => {
    writeStoredQuote(quote, storage)
  }, [quote, storage])

  return {
    quote,
    pricing,
    setQuote,
    updateQuote: (patch: QuoteStatePatch) => {
      setQuote((currentQuote) => updateQuoteState(currentQuote, patch))
    },
    toggleExtra: (extraId: string) => {
      setQuote((currentQuote) => toggleExtraId(currentQuote, extraId))
    },
  }
}

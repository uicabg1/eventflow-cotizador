import { eventTypes } from '../data/eventTypes'
import { extras } from '../data/extras'
import { packages } from '../data/packages'
import type { EventType, ExtraOption, PackageOption, QuoteState } from './types'

export type PricingCatalog = {
  eventTypes: EventType[]
  packages: PackageOption[]
  extras: ExtraOption[]
}

export type ExtraPricingLine = {
  id: string
  name: string
  priceType: ExtraOption['priceType']
  unitPrice: number
  quantity: number
  amount: number
}

export type QuotePricing = {
  eventType: EventType
  package: PackageOption
  selectedExtras: ExtraOption[]
  guestCount: number
  packageSubtotal: number
  adjustedPackageSubtotal: number
  eventAdjustment: number
  extraLineItems: ExtraPricingLine[]
  extrasSubtotal: number
  total: number
}

const defaultPricingCatalog: PricingCatalog = {
  eventTypes,
  packages,
  extras,
}

export function calculateQuotePricing(
  quote: QuoteState,
  catalog: PricingCatalog = defaultPricingCatalog,
): QuotePricing {
  assertPositiveGuestCount(quote.guestCount)

  const eventType = findRequired(catalog.eventTypes, quote.eventTypeId, 'event type')
  const quotePackage = findRequired(catalog.packages, quote.selectedPackageId, 'package')
  const selectedExtras = quote.selectedExtraIds.map((extraId) =>
    findRequired(catalog.extras, extraId, 'extra'),
  )

  const packageSubtotal = quotePackage.basePrice + quote.guestCount * quotePackage.pricePerGuest
  const adjustedPackageSubtotal = roundCurrency(packageSubtotal * eventType.baseMultiplier)
  const eventAdjustment = adjustedPackageSubtotal - packageSubtotal
  const extraLineItems = selectedExtras.map((extra) => createExtraLineItem(extra, quote.guestCount))
  const extrasSubtotal = extraLineItems.reduce((subtotal, extra) => subtotal + extra.amount, 0)

  return {
    eventType,
    package: quotePackage,
    selectedExtras,
    guestCount: quote.guestCount,
    packageSubtotal,
    adjustedPackageSubtotal,
    eventAdjustment,
    extraLineItems,
    extrasSubtotal,
    total: adjustedPackageSubtotal + extrasSubtotal,
  }
}

export function calculateExtraPrice(extra: ExtraOption, guestCount: number): number {
  assertPositiveGuestCount(guestCount)

  if (extra.priceType === 'perGuest') {
    return roundCurrency(extra.price * guestCount)
  }

  return roundCurrency(extra.price)
}

function createExtraLineItem(extra: ExtraOption, guestCount: number): ExtraPricingLine {
  return {
    id: extra.id,
    name: extra.name,
    priceType: extra.priceType,
    unitPrice: extra.price,
    quantity: extra.priceType === 'perGuest' ? guestCount : 1,
    amount: calculateExtraPrice(extra, guestCount),
  }
}

function findRequired<T extends { id: string }>(items: T[], id: string, label: string): T {
  const item = items.find((candidate) => candidate.id === id)

  if (!item) {
    throw new Error(`Unknown ${label}: ${id}`)
  }

  return item
}

function assertPositiveGuestCount(guestCount: number): void {
  if (!Number.isInteger(guestCount) || guestCount < 1) {
    throw new Error('Guest count must be a positive integer.')
  }
}

function roundCurrency(value: number): number {
  return Math.round(value)
}

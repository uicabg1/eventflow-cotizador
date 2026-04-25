export type EventType = {
  id: string
  name: string
  description: string
  baseMultiplier: number
}

export type PackageOption = {
  id: string
  name: string
  description: string
  basePrice: number
  pricePerGuest: number
  included: string[]
  recommendedFor: string
}

export type ExtraOption = {
  id: string
  name: string
  description: string
  priceType: 'fixed' | 'perGuest'
  price: number
}

export type QuoteState = {
  eventTypeId: string
  guestCount: number
  selectedPackageId: string
  selectedExtraIds: string[]
  eventDate: string
  clientName: string
  notes: string
}

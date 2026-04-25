import type { PackageOption } from '../domain/types'

export const packages: PackageOption[] = [
  {
    id: 'essential',
    name: 'Essential',
    description: 'A clean setup for smaller events with the essentials covered.',
    basePrice: 8500,
    pricePerGuest: 320,
    included: ['Core furniture', 'Setup service', 'Initial coordination'],
    recommendedFor: 'Birthdays, family gatherings and simple dinners.',
  },
  {
    id: 'celebration',
    name: 'Celebration',
    description: 'A balanced experience with ambience and expanded service.',
    basePrice: 14500,
    pricePerGuest: 520,
    included: ['Base decor', 'Day-of coordination', 'Social menu', 'Warm lighting'],
    recommendedFor: 'Mid-sized social events and special celebrations.',
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Full production for events with a high level of detail.',
    basePrice: 26000,
    pricePerGuest: 780,
    included: ['Experience design', 'Dedicated coordinator', 'Premium menu', 'Complete ambience'],
    recommendedFor: 'Weddings, corporate events and high-impact celebrations.',
  },
]

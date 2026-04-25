import type { ExtraOption } from '../domain/types'

export const extras: ExtraOption[] = [
  {
    id: 'floral-design',
    name: 'Floral design',
    description: 'Centerpieces and floral accents to elevate the setup.',
    priceType: 'fixed',
    price: 6500,
  },
  {
    id: 'dessert-table',
    name: 'Dessert table',
    description: 'A curated sweets table for the final part of the event.',
    priceType: 'perGuest',
    price: 95,
  },
  {
    id: 'photo-coverage',
    name: 'Photography',
    description: 'Event photo coverage with digital delivery.',
    priceType: 'fixed',
    price: 9000,
  },
  {
    id: 'dj',
    name: 'DJ',
    description: 'Music and light hosting to keep the event moving.',
    priceType: 'fixed',
    price: 7500,
  },
  {
    id: 'ambient-lighting',
    name: 'Ambient lighting',
    description: 'Warm decorative lighting to transform the venue.',
    priceType: 'fixed',
    price: 5800,
  },
  {
    id: 'event-coordinator',
    name: 'Event coordinator',
    description: 'Operational support to manage timing and vendors.',
    priceType: 'fixed',
    price: 8200,
  },
]

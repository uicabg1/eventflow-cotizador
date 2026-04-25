import type { ExtraOption } from '../domain/types'

export const extras: ExtraOption[] = [
  {
    id: 'floral-design',
    name: 'Decoracion floral',
    description: 'Centros de mesa y acentos florales para elevar el montaje.',
    priceType: 'fixed',
    price: 6500,
  },
  {
    id: 'dessert-table',
    name: 'Mesa de postres',
    description: 'Mesa dulce curada para acompanar el cierre del evento.',
    priceType: 'perGuest',
    price: 95,
  },
  {
    id: 'photo-coverage',
    name: 'Fotografia',
    description: 'Cobertura fotografica del evento con entrega digital.',
    priceType: 'fixed',
    price: 9000,
  },
  {
    id: 'dj',
    name: 'DJ',
    description: 'Musica y conduccion ligera para mantener el ritmo del evento.',
    priceType: 'fixed',
    price: 7500,
  },
  {
    id: 'ambient-lighting',
    name: 'Iluminacion ambiental',
    description: 'Luz calida y decorativa para transformar el espacio.',
    priceType: 'fixed',
    price: 5800,
  },
  {
    id: 'event-coordinator',
    name: 'Coordinador del evento',
    description: 'Acompanamiento operativo para cuidar tiempos y proveedores.',
    priceType: 'fixed',
    price: 8200,
  },
]

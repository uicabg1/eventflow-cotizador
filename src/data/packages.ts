import type { PackageOption } from '../domain/types'

export const packages: PackageOption[] = [
  {
    id: 'essential',
    name: 'Esencial',
    description: 'Montaje limpio para eventos pequenos con lo indispensable cubierto.',
    basePrice: 8500,
    pricePerGuest: 320,
    included: ['Mobiliario base', 'Servicio de montaje', 'Coordinacion inicial'],
    recommendedFor: 'Cumpleanos, reuniones familiares y cenas sencillas.',
  },
  {
    id: 'celebration',
    name: 'Celebracion',
    description: 'Experiencia equilibrada con ambientacion y servicio ampliado.',
    basePrice: 14500,
    pricePerGuest: 520,
    included: ['Decoracion base', 'Coordinacion del dia', 'Menu social', 'Iluminacion calida'],
    recommendedFor: 'Eventos sociales medianos y celebraciones especiales.',
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Produccion completa para eventos con alto nivel de detalle.',
    basePrice: 26000,
    pricePerGuest: 780,
    included: ['Diseno de experiencia', 'Coordinador dedicado', 'Menu premium', 'Ambientacion completa'],
    recommendedFor: 'Bodas, eventos empresariales y celebraciones de alto impacto.',
  },
]

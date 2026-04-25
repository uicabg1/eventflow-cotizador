import type { EventType } from '../domain/types'

export const eventTypes: EventType[] = [
  {
    id: 'wedding',
    name: 'Boda',
    description: 'Celebraciones con mayor produccion, protocolo y ambientacion.',
    baseMultiplier: 1.25,
  },
  {
    id: 'birthday',
    name: 'Cumpleanos',
    description: 'Fiestas familiares o sociales con montaje flexible.',
    baseMultiplier: 1,
  },
  {
    id: 'corporate',
    name: 'Evento empresarial',
    description: 'Reuniones, lanzamientos y cenas corporativas con imagen cuidada.',
    baseMultiplier: 1.15,
  },
  {
    id: 'private-dinner',
    name: 'Cena privada',
    description: 'Experiencias intimas con servicio y detalles personalizados.',
    baseMultiplier: 1.1,
  },
]

import type { EventType } from '../domain/types'

export const eventTypes: EventType[] = [
  {
    id: 'wedding',
    name: 'Wedding',
    description: 'High-touch celebrations with production, protocol and atmosphere.',
    baseMultiplier: 1.25,
  },
  {
    id: 'birthday',
    name: 'Birthday',
    description: 'Family or social parties with a flexible event setup.',
    baseMultiplier: 1,
  },
  {
    id: 'corporate',
    name: 'Corporate event',
    description: 'Meetings, launches and company dinners with a polished presence.',
    baseMultiplier: 1.15,
  },
  {
    id: 'private-dinner',
    name: 'Private dinner',
    description: 'Intimate experiences with service and personalized details.',
    baseMultiplier: 1.1,
  },
]

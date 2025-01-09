import { LocationCardDefinition } from './LocationCard';

export const LOCATION_CARDS: LocationCardDefinition[] = [
  {
    id: '101',
    name: 'Transmission Tower',
    barriers: ['H'],
    energyCount: 1,
    upgradeCount: 0,
    resourceCount: 0,
  },
  {
    id: '201',
    name: 'Solar Farm',
    barriers: ['E', 'D'],
    energyCount: 2,
    upgradeCount: 0,
    resourceCount: 0,
  },
  {
    id: '301',
    name: 'Wind Turbine',
    barriers: ['D', 'H', 'H'],
    energyCount: 3,
    upgradeCount: 0,
    resourceCount: 0,
  },
  {
    id: '401',
    name: 'Energy Station',
    barriers: ['E', 'E', 'D', 'H'],
    energyCount: 4,
    upgradeCount: 0,
    resourceCount: 0,
  },
  {
    id: '501',
    name: 'Power Plant',
    barriers: ['H', 'H', 'D', 'H', 'D'],
    energyCount: 5,
    upgradeCount: 0,
    resourceCount: 0,
  },
  {
    id: '601',
    name: 'Fusion Facility',
    barriers: ['D', 'H', 'E', 'H', 'D', 'D'],
    energyCount: 6,
    upgradeCount: 0,
    resourceCount: 0,
  },
  {
    id: '701',
    name: 'Energy Nexus',
    barriers: ['E', 'H', 'E', 'E', 'D', 'D', 'H'],
    energyCount: 7,
    upgradeCount: 0,
    resourceCount: 0,
  },
  {
    id: '604',
    name: 'Government Bunker',
    barriers: ['E', 'H', 'D', 'D', 'D', 'H', 'D'],
    energyCount: 2,
    upgradeCount: 1,
    resourceCount: 2,
  },
];

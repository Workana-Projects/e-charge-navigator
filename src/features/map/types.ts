export type ConnectorType = 'CCS2' | 'CHAdeMO' | 'Type2' | 'J1772';

export type StationStatus = 'active' | 'maintenance' | 'offline' | 'planned';

export interface ChargingStation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  address: string;
  city: string;
  state: string;
  connectorTypes: ConnectorType[];
  power: number;
  status: StationStatus;
  score: number;
  operator: string;
  pricePerKwh: number;
  availableConnectors: number;
  totalConnectors: number;
}

export interface MapFilter {
  connectorTypes: ConnectorType[];
  minPower: number;
  maxPower: number;
  statuses: StationStatus[];
  minScore: number;
}

export interface ScoreFactors {
  populationDensity: number;
  trafficFlow: number;
  competitorProximity: number;
  gridCapacity: number;
  accessibility: number;
  evRegistrations: number;
}

export interface MapBounds {
  latMin: number;
  latMax: number;
  lngMin: number;
  lngMax: number;
}

import { DashboardStats, SimulatorInput } from './types';

export const MOCK_DASHBOARD_STATS: DashboardStats = {
  totalStations: 5247,
  activeStations: 4891,
  avgScore: 74,
  totalEnergy: 128450,
  avgPrice: 1.68,
  statesCount: 27,
};

export const DEFAULT_SIMULATOR_INPUT: SimulatorInput = {
  investmentAmount: 250000,
  location: 'São Paulo, SP',
  connectors: 4,
  powerPerConnector: 150,
  pricePerKwh: 1.85,
  estimatedUtilization: 35,
};

export const SIMULATOR_LOCATIONS = [
  'São Paulo, SP',
  'Rio de Janeiro, RJ',
  'Belo Horizonte, MG',
  'Curitiba, PR',
  'Brasília, DF',
  'Porto Alegre, RS',
  'Salvador, BA',
  'Recife, PE',
  'Fortaleza, CE',
  'Campinas, SP',
];

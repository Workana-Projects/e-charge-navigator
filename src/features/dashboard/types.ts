export type DashboardTab = 'overview' | 'map' | 'simulator' | 'api';

export interface DashboardStats {
  totalStations: number;
  activeStations: number;
  avgScore: number;
  totalEnergy: number;
  avgPrice: number;
  statesCount: number;
}

export interface SimulatorInput {
  investmentAmount: number;
  location: string;
  connectors: number;
  powerPerConnector: number;
  pricePerKwh: number;
  estimatedUtilization: number;
}

export interface SimulatorResult {
  monthlyRevenue: number;
  monthlyExpenses: number;
  monthlyProfit: number;
  paybackMonths: number;
  roi: number;
  yearlyRevenue: number;
}

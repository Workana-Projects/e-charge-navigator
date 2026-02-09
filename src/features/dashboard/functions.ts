import { SimulatorInput, SimulatorResult } from './types';

export function calculateSimulation(input: SimulatorInput): SimulatorResult {
  const sessionsPerDay = input.connectors * (input.estimatedUtilization / 100) * 12;
  const avgKwhPerSession = (input.powerPerConnector * 0.5);
  const dailyRevenue = sessionsPerDay * avgKwhPerSession * input.pricePerKwh;
  const monthlyRevenue = dailyRevenue * 30;

  const electricityCost = monthlyRevenue * 0.35;
  const maintenance = input.connectors * 500;
  const rent = 3000;
  const operational = 2000;
  const monthlyExpenses = electricityCost + maintenance + rent + operational;

  const monthlyProfit = monthlyRevenue - monthlyExpenses;
  const paybackMonths = monthlyProfit > 0 ? Math.ceil(input.investmentAmount / monthlyProfit) : 999;
  const roi = monthlyProfit > 0 ? ((monthlyProfit * 12) / input.investmentAmount) * 100 : 0;

  return {
    monthlyRevenue: Math.round(monthlyRevenue),
    monthlyExpenses: Math.round(monthlyExpenses),
    monthlyProfit: Math.round(monthlyProfit),
    paybackMonths,
    roi: Math.round(roi * 10) / 10,
    yearlyRevenue: Math.round(monthlyRevenue * 12),
  };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat('pt-BR').format(value);
}

export function formatCompactNumber(value: number): string {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
  return value.toString();
}

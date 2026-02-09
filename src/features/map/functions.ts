import { ChargingStation, MapBounds, MapFilter, ScoreFactors } from './types';
import { BRAZIL_BOUNDS } from './constants';

export function mapCoordToPercent(
  lat: number,
  lng: number,
  bounds: MapBounds = BRAZIL_BOUNDS
): { x: number; y: number } {
  const x = ((lng - bounds.lngMin) / (bounds.lngMax - bounds.lngMin)) * 100;
  const y = ((bounds.latMax - lat) / (bounds.latMax - bounds.latMin)) * 100;
  return { x: Math.max(2, Math.min(98, x)), y: Math.max(2, Math.min(98, y)) };
}

export function filterStations(
  stations: ChargingStation[],
  filter: MapFilter
): ChargingStation[] {
  return stations.filter((s) => {
    if (filter.connectorTypes.length > 0 && !s.connectorTypes.some((c) => filter.connectorTypes.includes(c))) return false;
    if (s.power < filter.minPower || s.power > filter.maxPower) return false;
    if (filter.statuses.length > 0 && !filter.statuses.includes(s.status)) return false;
    if (s.score < filter.minScore) return false;
    return true;
  });
}

export function calculateScore(factors: ScoreFactors): number {
  const weights = { populationDensity: 0.25, trafficFlow: 0.2, competitorProximity: 0.15, gridCapacity: 0.15, accessibility: 0.15, evRegistrations: 0.1 };
  const raw =
    factors.populationDensity * weights.populationDensity +
    factors.trafficFlow * weights.trafficFlow +
    factors.competitorProximity * weights.competitorProximity +
    factors.gridCapacity * weights.gridCapacity +
    factors.accessibility * weights.accessibility +
    factors.evRegistrations * weights.evRegistrations;
  return Math.round(Math.max(0, Math.min(100, raw)));
}

export function getScoreColor(score: number): string {
  if (score >= 80) return 'hsl(43, 76%, 49%)';
  if (score >= 60) return 'hsl(43, 60%, 40%)';
  if (score >= 40) return 'hsl(30, 50%, 40%)';
  return 'hsl(0, 50%, 45%)';
}

export function getScoreLabel(score: number): string {
  if (score >= 80) return 'Excelente';
  if (score >= 60) return 'Bom';
  if (score >= 40) return 'Regular';
  return 'Baixo';
}

export function getStationsByState(stations: ChargingStation[]): Record<string, number> {
  return stations.reduce<Record<string, number>>((acc, s) => {
    acc[s.state] = (acc[s.state] || 0) + 1;
    return acc;
  }, {});
}

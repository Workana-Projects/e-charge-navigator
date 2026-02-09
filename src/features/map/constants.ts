import { ChargingStation, MapBounds, MapFilter } from './types';

export const BRAZIL_BOUNDS: MapBounds = {
  latMin: -33.5,
  latMax: 5.3,
  lngMin: -73.9,
  lngMax: -34.8,
};

export const DEFAULT_MAP_FILTER: MapFilter = {
  connectorTypes: [],
  minPower: 0,
  maxPower: 350,
  statuses: ['active', 'maintenance', 'planned'],
  minScore: 0,
};

export const CONNECTOR_LABELS: Record<string, string> = {
  CCS2: 'CCS Combo 2',
  CHAdeMO: 'CHAdeMO',
  Type2: 'Type 2 (AC)',
  J1772: 'J1772 (SAE)',
};

export const STATUS_LABELS: Record<string, string> = {
  active: 'Ativo',
  maintenance: 'Manutenção',
  offline: 'Offline',
  planned: 'Planejado',
};

export const MOCK_STATIONS: ChargingStation[] = [
  { id: '1', name: 'Pluggon SP - Av. Paulista', lat: -23.5615, lng: -46.6559, address: 'Av. Paulista, 1578', city: 'São Paulo', state: 'SP', connectorTypes: ['CCS2', 'CHAdeMO'], power: 150, status: 'active', score: 94, operator: 'Pluggon', pricePerKwh: 1.89, availableConnectors: 3, totalConnectors: 4 },
  { id: '2', name: 'Pluggon SP - Faria Lima', lat: -23.5677, lng: -46.6937, address: 'Av. Faria Lima, 3477', city: 'São Paulo', state: 'SP', connectorTypes: ['CCS2', 'Type2'], power: 150, status: 'active', score: 91, operator: 'Pluggon', pricePerKwh: 1.95, availableConnectors: 2, totalConnectors: 3 },
  { id: '3', name: 'Pluggon RJ - Copacabana', lat: -22.9711, lng: -43.1863, address: 'Av. Atlântica, 1702', city: 'Rio de Janeiro', state: 'RJ', connectorTypes: ['CCS2', 'CHAdeMO', 'Type2'], power: 200, status: 'active', score: 89, operator: 'Pluggon', pricePerKwh: 1.79, availableConnectors: 4, totalConnectors: 6 },
  { id: '4', name: 'EletroVia - Savassi', lat: -19.9352, lng: -43.9307, address: 'Praça da Savassi, 45', city: 'Belo Horizonte', state: 'MG', connectorTypes: ['CCS2'], power: 100, status: 'active', score: 82, operator: 'EletroVia', pricePerKwh: 1.65, availableConnectors: 1, totalConnectors: 2 },
  { id: '5', name: 'Pluggon PR - Batel', lat: -25.4372, lng: -49.2869, address: 'R. Batel, 1350', city: 'Curitiba', state: 'PR', connectorTypes: ['CCS2', 'Type2'], power: 150, status: 'active', score: 87, operator: 'Pluggon', pricePerKwh: 1.72, availableConnectors: 2, totalConnectors: 3 },
  { id: '6', name: 'Zap Charge - Asa Sul', lat: -15.8267, lng: -47.9218, address: 'SQS 308, Bloco A', city: 'Brasília', state: 'DF', connectorTypes: ['CCS2', 'CHAdeMO'], power: 120, status: 'active', score: 85, operator: 'Zap Charge', pricePerKwh: 1.55, availableConnectors: 2, totalConnectors: 2 },
  { id: '7', name: 'Pluggon RS - Moinhos', lat: -30.0257, lng: -51.2005, address: 'R. Padre Chagas, 314', city: 'Porto Alegre', state: 'RS', connectorTypes: ['CCS2'], power: 100, status: 'maintenance', score: 78, operator: 'Pluggon', pricePerKwh: 1.68, availableConnectors: 0, totalConnectors: 2 },
  { id: '8', name: 'Voltia - Barra', lat: -12.9988, lng: -38.4599, address: 'Av. Oceânica, 2400', city: 'Salvador', state: 'BA', connectorTypes: ['CCS2', 'Type2'], power: 80, status: 'active', score: 73, operator: 'Voltia', pricePerKwh: 1.49, availableConnectors: 1, totalConnectors: 2 },
  { id: '9', name: 'EletroVia - Boa Viagem', lat: -8.1204, lng: -34.9005, address: 'Av. Boa Viagem, 5000', city: 'Recife', state: 'PE', connectorTypes: ['CCS2'], power: 60, status: 'active', score: 68, operator: 'EletroVia', pricePerKwh: 1.45, availableConnectors: 1, totalConnectors: 1 },
  { id: '10', name: 'Pluggon CE - Aldeota', lat: -3.7327, lng: -38.5099, address: 'Av. Santos Dumont, 3131', city: 'Fortaleza', state: 'CE', connectorTypes: ['CCS2', 'CHAdeMO'], power: 100, status: 'active', score: 71, operator: 'Pluggon', pricePerKwh: 1.52, availableConnectors: 2, totalConnectors: 3 },
  { id: '11', name: 'Zap Charge - Setor Bueno', lat: -16.7074, lng: -49.2586, address: 'Av. T-10, 1200', city: 'Goiânia', state: 'GO', connectorTypes: ['Type2'], power: 22, status: 'active', score: 65, operator: 'Zap Charge', pricePerKwh: 1.35, availableConnectors: 1, totalConnectors: 1 },
  { id: '12', name: 'Pluggon SP - Cambuí', lat: -22.8923, lng: -47.0642, address: 'Av. Norte-Sul, 785', city: 'Campinas', state: 'SP', connectorTypes: ['CCS2', 'Type2'], power: 150, status: 'active', score: 88, operator: 'Pluggon', pricePerKwh: 1.82, availableConnectors: 3, totalConnectors: 4 },
  { id: '13', name: 'Voltia - Centro', lat: -27.5945, lng: -48.5477, address: 'R. Felipe Schmidt, 515', city: 'Florianópolis', state: 'SC', connectorTypes: ['CCS2'], power: 100, status: 'active', score: 80, operator: 'Voltia', pricePerKwh: 1.60, availableConnectors: 1, totalConnectors: 2 },
  { id: '14', name: 'Pluggon SP - Gonzaga', lat: -23.9619, lng: -46.3342, address: 'Av. Ana Costa, 400', city: 'Santos', state: 'SP', connectorTypes: ['CCS2', 'CHAdeMO'], power: 120, status: 'active', score: 83, operator: 'Pluggon', pricePerKwh: 1.75, availableConnectors: 2, totalConnectors: 3 },
  { id: '15', name: 'EletroVia - Jardim Paulista', lat: -21.1775, lng: -47.8103, address: 'Av. Pres. Vargas, 2001', city: 'Ribeirão Preto', state: 'SP', connectorTypes: ['Type2'], power: 22, status: 'planned', score: 76, operator: 'EletroVia', pricePerKwh: 1.40, availableConnectors: 0, totalConnectors: 2 },
  { id: '16', name: 'Pluggon RJ - Icaraí', lat: -22.9035, lng: -43.1042, address: 'R. Moreira César, 229', city: 'Niterói', state: 'RJ', connectorTypes: ['CCS2'], power: 100, status: 'active', score: 79, operator: 'Pluggon', pricePerKwh: 1.69, availableConnectors: 1, totalConnectors: 2 },
  { id: '17', name: 'Pluggon SP - Vila Mariana', lat: -23.5874, lng: -46.6379, address: 'R. Domingos de Morais, 2564', city: 'São Paulo', state: 'SP', connectorTypes: ['CCS2', 'Type2', 'J1772'], power: 200, status: 'active', score: 96, operator: 'Pluggon', pricePerKwh: 1.92, availableConnectors: 5, totalConnectors: 6 },
  { id: '18', name: 'Zap Charge - Ponta Negra', lat: -3.1190, lng: -60.0217, address: 'Av. Coronel Teixeira, 3100', city: 'Manaus', state: 'AM', connectorTypes: ['CCS2'], power: 60, status: 'active', score: 55, operator: 'Zap Charge', pricePerKwh: 1.99, availableConnectors: 1, totalConnectors: 1 },
  { id: '19', name: 'Pluggon MG - Lourdes', lat: -19.9291, lng: -43.9428, address: 'R. da Bahia, 2020', city: 'Belo Horizonte', state: 'MG', connectorTypes: ['CCS2', 'CHAdeMO'], power: 150, status: 'active', score: 86, operator: 'Pluggon', pricePerKwh: 1.78, availableConnectors: 3, totalConnectors: 4 },
  { id: '20', name: 'Voltia - Meireles', lat: -3.7256, lng: -38.4920, address: 'Av. Beira Mar, 3190', city: 'Fortaleza', state: 'CE', connectorTypes: ['Type2'], power: 22, status: 'planned', score: 62, operator: 'Voltia', pricePerKwh: 1.38, availableConnectors: 0, totalConnectors: 2 },
];

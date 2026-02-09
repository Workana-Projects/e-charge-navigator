import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard, Map, Calculator, Code2, LogOut, Zap,
  MapPin, Activity, TrendingUp, DollarSign, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MOCK_STATIONS } from '@/features/map/constants';
import { STATUS_LABELS, CONNECTOR_LABELS } from '@/features/map/constants';
import { mapCoordToPercent, getScoreColor } from '@/features/map/functions';
import { MOCK_DASHBOARD_STATS, DEFAULT_SIMULATOR_INPUT, SIMULATOR_LOCATIONS } from '@/features/dashboard/constants';
import { MOCK_USER } from '@/features/auth/constants';
import { calculateSimulation, formatCurrency, formatNumber } from '@/features/dashboard/functions';
import { DashboardTab, SimulatorInput } from '@/features/dashboard/types';
import { ChargingStation } from '@/features/map/types';

const TABS: Array<{ id: DashboardTab; label: string; Icon: typeof LayoutDashboard }> = [
  { id: 'overview', label: 'Visão Geral', Icon: LayoutDashboard },
  { id: 'map', label: 'Mapa', Icon: Map },
  { id: 'simulator', label: 'Simulador', Icon: Calculator },
  { id: 'api', label: 'API', Icon: Code2 },
];

const StatCard = ({ icon: Icon, label, value }: { icon: typeof Activity; label: string; value: string }) => (
  <div className="glass-card flex items-center gap-3 rounded-lg p-4">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
      <Icon className="h-5 w-5 text-primary" />
    </div>
    <div>
      <div className="font-display text-xl font-bold text-foreground">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  </div>
);

const StationDot = ({ station, onClick }: { station: ChargingStation; onClick: () => void }) => {
  const pos = mapCoordToPercent(station.lat, station.lng);
  return (
    <button
      onClick={onClick}
      className="absolute z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform hover:scale-150"
      style={{ left: `${pos.x}%`, top: `${pos.y}%`, backgroundColor: getScoreColor(station.score), boxShadow: `0 0 6px ${getScoreColor(station.score)}` }}
      title={station.name}
    />
  );
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview');
  const [selectedStation, setSelectedStation] = useState<ChargingStation | null>(null);
  const [simInput, setSimInput] = useState<SimulatorInput>(DEFAULT_SIMULATOR_INPUT);
  const simResult = calculateSimulation(simInput);
  const stats = MOCK_DASHBOARD_STATS;

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="flex w-56 shrink-0 flex-col border-r border-border bg-card">
        <div className="flex h-14 items-center gap-2 border-b border-border px-4">
          <Zap className="h-5 w-5 text-primary" />
          <span className="font-display text-sm font-bold tracking-wider text-foreground">PLUGGON</span>
        </div>
        <nav className="flex-1 space-y-1 p-2">
          {TABS.map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                activeTab === id ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-secondary'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </nav>
        <div className="border-t border-border p-3">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
              {MOCK_USER.avatarInitials}
            </div>
            <div className="text-xs">
              <div className="font-medium text-foreground">{MOCK_USER.name}</div>
              <div className="text-muted-foreground">{MOCK_USER.role}</div>
            </div>
          </div>
          <Link to="/">
            <Button variant="ghost" size="sm" className="w-full gap-2 text-xs">
              <LogOut className="h-3 w-3" /> Sair
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto p-4">
        {activeTab === 'overview' && (
          <div className="space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">Visão Geral</h2>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              <StatCard icon={MapPin} label="Total Estações" value={formatNumber(stats.totalStations)} />
              <StatCard icon={Activity} label="Estações Ativas" value={formatNumber(stats.activeStations)} />
              <StatCard icon={TrendingUp} label="Score Médio" value={`${stats.avgScore}/100`} />
              <StatCard icon={DollarSign} label="Preço Médio/kWh" value={`R$ ${stats.avgPrice.toFixed(2)}`} />
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              <div className="glass-card col-span-2 rounded-lg p-4">
                <h3 className="mb-3 text-sm font-semibold text-foreground">Mapa de Cobertura</h3>
                <div className="relative h-64 overflow-hidden rounded-md bg-background" style={{
                  backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)',
                  backgroundSize: '30px 30px'
                }}>
                  {MOCK_STATIONS.map((s) => <StationDot key={s.id} station={s} onClick={() => setSelectedStation(s)} />)}
                </div>
              </div>
              <div className="glass-card rounded-lg p-4">
                <h3 className="mb-3 text-sm font-semibold text-foreground">Top Estações</h3>
                <div className="space-y-2">
                  {MOCK_STATIONS.filter(s => s.status === 'active').sort((a, b) => b.score - a.score).slice(0, 5).map((s) => (
                    <button key={s.id} onClick={() => setSelectedStation(s)} className="flex w-full items-center justify-between rounded-md bg-background p-2 text-left transition-colors hover:bg-secondary">
                      <div>
                        <div className="text-xs font-medium text-foreground">{s.name}</div>
                        <div className="text-xs text-muted-foreground">{s.city}, {s.state}</div>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold" style={{ color: getScoreColor(s.score) }}>{s.score}</span>
                        <ChevronRight className="h-3 w-3 text-muted-foreground" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'map' && (
          <div className="flex h-full gap-4">
            <div className="flex-1">
              <div className="relative h-full min-h-[500px] overflow-hidden rounded-lg bg-card" style={{
                backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }}>
                {MOCK_STATIONS.map((s) => <StationDot key={s.id} station={s} onClick={() => setSelectedStation(s)} />)}
              </div>
            </div>
            <div className="w-72 space-y-3 overflow-auto">
              <h3 className="text-sm font-semibold text-foreground">Estações ({MOCK_STATIONS.length})</h3>
              {MOCK_STATIONS.map((s) => (
                <button key={s.id} onClick={() => setSelectedStation(s)} className={`w-full rounded-lg border p-3 text-left transition-colors ${selectedStation?.id === s.id ? 'border-primary bg-primary/5' : 'border-border bg-card hover:border-primary/40'}`}>
                  <div className="flex items-start justify-between">
                    <div className="text-xs font-medium text-foreground">{s.name}</div>
                    <span className="rounded-full px-1.5 py-0.5 text-xs font-bold" style={{ color: getScoreColor(s.score), backgroundColor: `${getScoreColor(s.score)}20` }}>{s.score}</span>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.city}, {s.state} — {s.power}kW</div>
                  <div className="mt-1 flex gap-1">{s.connectorTypes.map(c => <span key={c} className="rounded bg-secondary px-1 py-0.5 text-xs text-secondary-foreground">{c}</span>)}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'simulator' && (
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">Simulador Financeiro</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="glass-card space-y-3 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-foreground">Parâmetros</h3>
                <div className="space-y-2">
                  <div><Label className="text-xs">Investimento (R$)</Label><Input type="number" value={simInput.investmentAmount} onChange={e => setSimInput({...simInput, investmentAmount: +e.target.value})} /></div>
                  <div><Label className="text-xs">Localização</Label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={simInput.location} onChange={e => setSimInput({...simInput, location: e.target.value})}>
                      {SIMULATOR_LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                  </div>
                  <div><Label className="text-xs">Conectores</Label><Input type="number" value={simInput.connectors} onChange={e => setSimInput({...simInput, connectors: +e.target.value})} /></div>
                  <div><Label className="text-xs">Potência/Conector (kW)</Label><Input type="number" value={simInput.powerPerConnector} onChange={e => setSimInput({...simInput, powerPerConnector: +e.target.value})} /></div>
                  <div><Label className="text-xs">Preço/kWh (R$)</Label><Input type="number" step="0.01" value={simInput.pricePerKwh} onChange={e => setSimInput({...simInput, pricePerKwh: +e.target.value})} /></div>
                  <div><Label className="text-xs">Utilização Estimada (%)</Label><Input type="number" value={simInput.estimatedUtilization} onChange={e => setSimInput({...simInput, estimatedUtilization: +e.target.value})} /></div>
                </div>
              </div>
              <div className="glass-card space-y-3 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-foreground">Resultados</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Receita Mensal', value: formatCurrency(simResult.monthlyRevenue), highlight: true },
                    { label: 'Despesas Mensais', value: formatCurrency(simResult.monthlyExpenses) },
                    { label: 'Lucro Mensal', value: formatCurrency(simResult.monthlyProfit), highlight: true },
                    { label: 'Receita Anual', value: formatCurrency(simResult.yearlyRevenue) },
                    { label: 'Payback', value: `${simResult.paybackMonths} meses` },
                    { label: 'ROI Anual', value: `${simResult.roi}%`, highlight: true },
                  ].map(({ label, value, highlight }) => (
                    <div key={label} className="flex items-center justify-between rounded-md bg-background p-2">
                      <span className="text-xs text-muted-foreground">{label}</span>
                      <span className={`text-sm font-bold ${highlight ? 'text-primary' : 'text-foreground'}`}>{value}</span>
                    </div>
                  ))}
                </div>
                <Button variant="hero" className="mt-2 w-full gap-2 text-sm">
                  Gerar Business Plan (PDF)
                </Button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'api' && (
          <div className="mx-auto max-w-2xl space-y-4">
            <h2 className="font-display text-xl font-bold text-foreground">API REST v1</h2>
            <p className="text-sm text-muted-foreground">Documentação completa dos endpoints disponíveis.</p>
            <div className="glass-card space-y-4 rounded-lg p-4">
              {[
                { method: 'GET', path: '/api/v1/stations', desc: 'Listar todas as estações com filtros' },
                { method: 'GET', path: '/api/v1/stations/:id', desc: 'Detalhes de uma estação' },
                { method: 'GET', path: '/api/v1/stations/:id/score', desc: 'Score de viabilidade detalhado' },
                { method: 'POST', path: '/api/v1/simulate', desc: 'Simulação financeira' },
                { method: 'GET', path: '/api/v1/heatmap/:region', desc: 'Dados de heatmap por região' },
                { method: 'POST', path: '/api/v1/report/pdf', desc: 'Gerar Business Plan em PDF' },
              ].map(({ method, path, desc }) => (
                <div key={path} className="flex items-center gap-3 rounded-md bg-background p-3">
                  <span className={`shrink-0 rounded px-2 py-0.5 text-xs font-bold ${method === 'GET' ? 'bg-accent/20 text-primary' : 'bg-accent/20 text-accent-foreground'}`}>{method}</span>
                  <div>
                    <code className="text-xs text-foreground">{path}</code>
                    <div className="text-xs text-muted-foreground">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Station detail modal */}
        {selectedStation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm" onClick={() => setSelectedStation(null)}>
            <div className="glass-card w-full max-w-md rounded-lg p-6" onClick={e => e.stopPropagation()}>
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{selectedStation.name}</h3>
                  <p className="text-xs text-muted-foreground">{selectedStation.address}, {selectedStation.city} - {selectedStation.state}</p>
                </div>
                <span className="rounded-full px-3 py-1 text-sm font-bold" style={{ color: getScoreColor(selectedStation.score), backgroundColor: `${getScoreColor(selectedStation.score)}20` }}>
                  {selectedStation.score}/100
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-md bg-background p-2"><div className="text-xs text-muted-foreground">Potência</div><div className="text-sm font-bold text-foreground">{selectedStation.power} kW</div></div>
                <div className="rounded-md bg-background p-2"><div className="text-xs text-muted-foreground">Status</div><div className="text-sm font-bold text-foreground">{STATUS_LABELS[selectedStation.status]}</div></div>
                <div className="rounded-md bg-background p-2"><div className="text-xs text-muted-foreground">Preço/kWh</div><div className="text-sm font-bold text-foreground">R$ {selectedStation.pricePerKwh.toFixed(2)}</div></div>
                <div className="rounded-md bg-background p-2"><div className="text-xs text-muted-foreground">Conectores</div><div className="text-sm font-bold text-foreground">{selectedStation.availableConnectors}/{selectedStation.totalConnectors}</div></div>
              </div>
              <div className="mt-3 flex flex-wrap gap-1">
                {selectedStation.connectorTypes.map(c => <span key={c} className="rounded bg-primary/10 px-2 py-0.5 text-xs text-primary">{CONNECTOR_LABELS[c]}</span>)}
              </div>
              <Button variant="ghost" size="sm" className="mt-4 w-full" onClick={() => setSelectedStation(null)}>Fechar</Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;

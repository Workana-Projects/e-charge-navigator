import { Zap, MapPin, Activity, Shield } from 'lucide-react';

const STATS = [
  { Icon: MapPin, value: '5.247', label: 'Pontos de Carregamento Mapeados' },
  { Icon: Zap, value: '50+', label: 'Eletropostos Próprios em Operação' },
  { Icon: Activity, value: '128K+', label: 'Sessões de Recarga Monitoradas' },
  { Icon: Shield, value: '99.9%', label: 'Disponibilidade da Plataforma' },
];

const StatsSection = () => (
  <section id="stats" className="border-y border-border bg-secondary py-16">
    <div className="mx-auto max-w-7xl px-4">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {STATS.map(({ Icon, value, label }, i) => (
          <div
            key={label}
            className="text-center animate-fade-in"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <Icon className="mx-auto mb-3 h-6 w-6 text-primary" />
            <div className="font-display text-3xl font-bold text-foreground md:text-4xl">
              {value}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">{label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;

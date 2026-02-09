import cityCoverageImg from '@/assets/city-coverage.jpg';
import { TrendingUp, Users, Zap, MapPin } from 'lucide-react';

const COVERAGE_STATS = [
  { Icon: MapPin, value: '5.247', label: 'Pontos mapeados' },
  { Icon: Users, value: '2.1M+', label: 'EVs registrados no Brasil' },
  { Icon: Zap, value: '128K+', label: 'Sessões monitoradas/mês' },
  { Icon: TrendingUp, value: '340%', label: 'Crescimento do setor (2020-2025)' },
];

const CoverageSection = () => (
  <section className="relative overflow-hidden py-24">
    <div
      className="absolute inset-0 z-0 opacity-40"
      style={{
        backgroundImage: `url(${cityCoverageImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
    <div className="absolute inset-0 z-0 bg-gradient-to-r from-background via-background/90 to-background/70" />

    <div className="relative z-10 mx-auto max-w-7xl px-4">
      <div className="max-w-2xl">
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
          Cobertura Nacional
        </span>
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
          Dados de <span className="text-gradient-gold">Todo o Brasil</span>,
          Atualizados em Tempo Real
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Nossa plataforma consolida dados de múltiplas fontes oficiais e proprietárias, cobrindo
          todos os 27 estados brasileiros. Monitore tendências, identifique oportunidades e tome
          decisões baseadas em dados reais do mercado.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
        {COVERAGE_STATS.map(({ Icon, value, label }) => (
          <div key={label} className="glass-card rounded-lg p-5 text-center">
            <Icon className="mx-auto mb-3 h-6 w-6 text-primary" />
            <div className="font-display text-2xl font-bold text-foreground md:text-3xl">{value}</div>
            <div className="mt-1 text-xs text-muted-foreground">{label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoverageSection;

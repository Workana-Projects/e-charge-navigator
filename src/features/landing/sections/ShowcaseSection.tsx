import evChargingImg from '@/assets/ev-charging.jpg';
import { Battery, Gauge, Wifi, Shield } from 'lucide-react';

const HIGHLIGHTS = [
  { Icon: Battery, label: 'Fast Charging até 350kW' },
  { Icon: Gauge, label: 'Monitoramento em tempo real' },
  { Icon: Wifi, label: 'Conectividade IoT integrada' },
  { Icon: Shield, label: 'Dados criptografados' },
];

const ShowcaseSection = () => (
  <section className="overflow-hidden bg-background py-24">
    <div className="mx-auto max-w-7xl px-4">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <img
              src={evChargingImg}
              alt="Estação de carregamento de veículo elétrico à noite"
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 rounded-lg border border-border bg-card p-4 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                <Battery className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-display text-lg font-bold text-primary">150 kW</div>
                <div className="text-xs text-muted-foreground">Carregamento rápido</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Infraestrutura de Ponta
          </span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
            A Maior Rede de Dados de{' '}
            <span className="text-gradient-gold">Eletropostos</span> do Brasil
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Com dados proprietários de mais de 50 eletropostos em operação e integração com bases
            públicas da ANEEL e DENATRAN, oferecemos a visão mais completa do ecossistema de
            eletromobilidade brasileiro. Cada ponto no mapa representa dados reais, atualizados
            em tempo real.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {HIGHLIGHTS.map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ShowcaseSection;

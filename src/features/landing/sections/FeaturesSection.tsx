import { MapPin, BarChart3, Calculator, Code2 } from 'lucide-react';

const FEATURES = [
  {
    Icon: MapPin,
    title: 'Mapa Interativo',
    description: 'Visualize 5.000+ pontos de carregamento com heatmap, filtros avançados e busca por região em tempo real.',
  },
  {
    Icon: BarChart3,
    title: 'Score de Viabilidade',
    description: 'Algoritmo proprietário que analisa 6 fatores para gerar score 0-100 de viabilidade para novos pontos.',
  },
  {
    Icon: Calculator,
    title: 'Simulador Financeiro',
    description: 'Simule investimentos, calcule ROI e gere Business Plans profissionais em PDF automaticamente.',
  },
  {
    Icon: Code2,
    title: 'API REST Documentada',
    description: 'Integre dados de geolocalização e viabilidade no seu sistema via API REST com Swagger.',
  },
];

const FeaturesSection = () => (
  <section id="features" className="border-t border-border bg-card py-24">
    <div className="mx-auto max-w-7xl px-4">
      <div className="mb-16 text-center">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
          Ferramentas que <span className="text-gradient-gold">Transformam</span> Dados em Decisões
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Tudo que você precisa para analisar, planejar e expandir sua rede de eletropostos com confiança.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ Icon, title, description }) => (
          <div
            key={title}
            className="glass-card group rounded-lg p-6 transition-all duration-300 hover:border-primary/40 hover:glow-gold-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
            </div>
            <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;

import { Search, BarChart3, FileCheck } from 'lucide-react';

const STEPS = [
  {
    Icon: Search,
    step: '01',
    title: 'Selecione a Região',
    description: 'Navegue pelo mapa interativo, aplique filtros e identifique áreas com potencial para novos eletropostos.',
  },
  {
    Icon: BarChart3,
    step: '02',
    title: 'Analise os Dados',
    description: 'Visualize scores de viabilidade, densidade de concorrência, frota de EVs e capacidade da rede elétrica.',
  },
  {
    Icon: FileCheck,
    step: '03',
    title: 'Tome Decisões',
    description: 'Use o simulador financeiro para projetar ROI e gere um Business Plan completo em PDF.',
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="bg-background py-24">
    <div className="mx-auto max-w-7xl px-4">
      <div className="mb-16 text-center">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
          Como <span className="text-gradient-gold">Funciona</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Do mapeamento à decisão de investimento em três passos simples.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {STEPS.map(({ Icon, step, title, description }, i) => (
          <div key={step} className="relative text-center">
            {i < STEPS.length - 1 && (
              <div className="absolute right-0 top-12 hidden h-px w-full bg-gradient-to-r from-primary/30 to-transparent md:block" style={{ left: '60%', width: '80%' }} />
            )}
            <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-primary/20" />
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary font-display text-xs font-bold text-primary-foreground">
                {step}
              </span>
            </div>
            <h3 className="mb-2 font-display text-xl font-semibold text-foreground">{title}</h3>
            <p className="mx-auto max-w-xs text-sm text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;

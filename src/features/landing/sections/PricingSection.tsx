import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PLANS = [
  {
    name: 'Starter',
    price: 'R$ 497',
    period: '/mês',
    description: 'Para operadores com até 10 eletropostos',
    features: [
      'Mapa interativo com filtros básicos',
      'Score de viabilidade (5 consultas/mês)',
      'Dados de cobertura nacional',
      'Suporte por email',
      'Exportação CSV',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: 'R$ 1.297',
    period: '/mês',
    description: 'Para redes em expansão agressiva',
    features: [
      'Tudo do plano Starter',
      'Score ilimitado + detalhamento',
      'Simulador financeiro completo',
      'Geração de Business Plan (PDF)',
      'API REST (10K req/mês)',
      'Heatmap de demanda',
      'Suporte prioritário',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Sob consulta',
    period: '',
    description: 'Para grandes operadores e concessionárias',
    features: [
      'Tudo do plano Professional',
      'API ilimitada + SLA 99.9%',
      'Dados proprietários exclusivos',
      'Dashboard white-label',
      'Integração com ERPs',
      'Gerente de conta dedicado',
      'Treinamento da equipe',
    ],
    highlighted: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="bg-background py-24">
    <div className="mx-auto max-w-7xl px-4">
      <div className="mb-16 text-center">
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
          Planos
        </span>
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
          Escolha o Plano <span className="text-gradient-gold">Ideal</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Escale conforme sua necessidade. Todos os planos incluem acesso à plataforma completa.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-xl border p-6 transition-all duration-300 ${
              plan.highlighted
                ? 'border-primary bg-primary/5 glow-gold-sm'
                : 'border-border bg-card hover:border-primary/30'
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                Mais Popular
              </div>
            )}

            <div className="mb-6">
              <h3 className="font-display text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{plan.description}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-3xl font-bold text-foreground">{plan.price}</span>
                {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
              </div>
            </div>

            <ul className="mb-6 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>

            <Link to="/login">
              <Button
                variant={plan.highlighted ? 'hero' : 'outline'}
                className="w-full gap-2"
              >
                {plan.price === 'Sob consulta' ? 'Falar com Vendas' : 'Começar Agora'}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;

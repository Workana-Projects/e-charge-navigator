import evConnectorImg from '@/assets/ev-connector.jpg';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ADVANTAGES = [
  'Dados proprietários de 50+ estações próprias',
  'Algoritmo de score validado em operações reais',
  'Atualização diária de bases públicas',
  'Time com 8+ anos de experiência em eletromobilidade',
];

const DifferentialSection = () => (
  <section className="overflow-hidden border-t border-border bg-card py-24">
    <div className="mx-auto max-w-7xl px-4">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Nosso Diferencial
          </span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
            Construído por Quem <span className="text-gradient-gold">Opera</span> Eletropostos
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Diferente de plataformas genéricas, a Pluggon nasceu dentro da operação de eletropostos.
            Nossos algoritmos são calibrados com dados reais de utilização, receita e custos
            operacionais de dezenas de estações em funcionamento.
          </p>

          <ul className="mt-8 space-y-3">
            {ADVANTAGES.map((adv) => (
              <li key={adv} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-foreground">{adv}</span>
              </li>
            ))}
          </ul>

          <Link to="/login" className="mt-8 inline-block">
            <Button variant="hero" size="lg" className="gap-2">
              Explorar Plataforma
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <img
              src={evConnectorImg}
              alt="Conector CCS2 conectado a veículo elétrico"
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-lg border border-primary/30 bg-card p-4 shadow-lg">
            <div className="font-display text-2xl font-bold text-primary">50+</div>
            <div className="text-xs text-muted-foreground">Eletropostos próprios<br/>em operação</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DifferentialSection;

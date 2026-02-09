import { Link } from 'react-router-dom';
import { ArrowRight, Database, Globe, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DATA_SOURCES = [
  { Icon: Database, label: 'ANEEL', desc: 'Dados de eletropostos registrados' },
  { Icon: Globe, label: 'DENATRAN', desc: 'Frota de veículos elétricos' },
  { Icon: ShieldCheck, label: 'Pluggon', desc: '50+ estações proprietárias' },
];

const CTASection = () => (
  <section id="cta" className="border-t border-border bg-card py-24">
    <div className="mx-auto max-w-7xl px-4">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
            Dados Reais.{' '}
            <span className="text-gradient-gold">Decisões Inteligentes.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Nossa plataforma integra dados oficiais e proprietários para oferecer a visão mais completa do mercado de eletromobilidade brasileiro.
          </p>

          <div className="mt-8 space-y-4">
            {DATA_SOURCES.map(({ Icon, label, desc }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{label}</div>
                  <div className="text-xs text-muted-foreground">{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <Link to="/login" className="mt-8 inline-block">
            <Button variant="hero" size="lg" className="gap-2">
              Comece Agora
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="glass-card rounded-lg p-8">
          <div className="mb-6">
            <h3 className="font-display text-xl font-semibold text-foreground">API REST v1</h3>
            <p className="mt-1 text-sm text-muted-foreground">Documentação Swagger completa</p>
          </div>
          <div className="space-y-3 rounded-lg bg-background p-4 font-mono text-xs">
            <div className="flex gap-2">
              <span className="rounded bg-green-500/20 px-2 py-0.5 text-green-400">GET</span>
              <span className="text-muted-foreground">/api/v1/stations</span>
            </div>
            <div className="flex gap-2">
              <span className="rounded bg-green-500/20 px-2 py-0.5 text-green-400">GET</span>
              <span className="text-muted-foreground">/api/v1/stations/:id/score</span>
            </div>
            <div className="flex gap-2">
              <span className="rounded bg-blue-500/20 px-2 py-0.5 text-blue-400">POST</span>
              <span className="text-muted-foreground">/api/v1/simulate</span>
            </div>
            <div className="flex gap-2">
              <span className="rounded bg-green-500/20 px-2 py-0.5 text-green-400">GET</span>
              <span className="text-muted-foreground">/api/v1/heatmap/:region</span>
            </div>
            <div className="flex gap-2">
              <span className="rounded bg-blue-500/20 px-2 py-0.5 text-blue-400">POST</span>
              <span className="text-muted-foreground">/api/v1/report/pdf</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;

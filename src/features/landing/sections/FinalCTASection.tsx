import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FinalCTASection = () => (
  <section className="relative overflow-hidden border-t border-border py-32">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5" />
    <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

    <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
      <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
        <Sparkles className="h-7 w-7 text-primary" />
      </div>
      <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
        Pronto para Revolucionar sua{' '}
        <span className="text-gradient-gold">Estratégia</span>?
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
        Junte-se às empresas líderes que já utilizam a Pluggon para tomar decisões
        estratégicas baseadas em dados reais do mercado de eletromobilidade.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link to="/login">
          <Button variant="hero" size="lg" className="gap-2">
            Comece Gratuitamente
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
        <a href="#pricing">
          <Button variant="heroOutline" size="lg">
            Ver Planos
          </Button>
        </a>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Sem cartão de crédito. Teste grátis por 14 dias.
      </p>
    </div>
  </section>
);

export default FinalCTASection;

import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleBackground from '../components/ParticleBackground';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => (
  <section className="relative flex min-h-screen items-center overflow-hidden">
    <div
      className="absolute inset-0 z-0 opacity-30"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
    <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    <ParticleBackground />

    <div className="relative z-10 mx-auto max-w-7xl px-4 py-32">
      <div className="max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse-gold" />
          <span className="text-xs font-medium text-primary">
            Dados reais de 50+ eletropostos em operação
          </span>
        </div>

        <h1 className="font-display text-5xl font-bold uppercase leading-tight tracking-tight text-foreground md:text-7xl">
          Inteligência{' '}
          <span className="text-gradient-gold">Geoespacial</span>{' '}
          para Eletromobilidade
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Mapeie, analise e simule investimentos em infraestrutura de recarga para
          veículos elétricos com dados reais e algoritmos proprietários de viabilidade.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/login">
            <Button variant="hero" size="lg" className="gap-2">
              Explorar Plataforma
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <a href="#how-it-works">
            <Button variant="heroOutline" size="lg" className="gap-2">
              <Play className="h-4 w-4" />
              Como Funciona
            </Button>
          </a>
        </div>

        <div className="mt-12 flex gap-8 border-t border-border pt-8">
          {[
            { value: '5.000+', label: 'Pontos Mapeados' },
            { value: '27', label: 'Estados' },
            { value: '99.9%', label: 'Uptime' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;

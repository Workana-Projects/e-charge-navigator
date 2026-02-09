import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Ricardo Mendes',
    role: 'Diretor de Expansão',
    company: 'EletroVia Energia',
    initials: 'RM',
    text: 'O score de viabilidade do Pluggon nos economizou meses de estudo. Identificamos 12 novos pontos estratégicos e já instalamos 8 com ROI acima do projetado.',
    rating: 5,
  },
  {
    name: 'Ana Carolina Silva',
    role: 'Head de Estratégia',
    company: 'Voltz Mobility',
    initials: 'AS',
    text: 'A plataforma transformou nossa abordagem de expansão. Com o simulador financeiro, conseguimos aprovar investimentos com muito mais agilidade junto aos investidores.',
    rating: 5,
  },
  {
    name: 'Fernando Costa',
    role: 'CEO',
    company: 'GreenCharge Brasil',
    initials: 'FC',
    text: 'A API REST nos permitiu integrar os dados de geolocalização diretamente no nosso app de motoristas. A documentação é impecável e o suporte é excelente.',
    rating: 5,
  },
  {
    name: 'Mariana Oliveira',
    role: 'Analista de Mercado',
    company: 'Enel X Brasil',
    initials: 'MO',
    text: 'Os dados da Pluggon são os mais completos que encontramos no mercado brasileiro. O heatmap de demanda nos ajudou a priorizar regiões com maior potencial.',
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="border-t border-border bg-card py-24">
    <div className="mx-auto max-w-7xl px-4">
      <div className="mb-16 text-center">
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
          Depoimentos
        </span>
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
          Quem Usa, <span className="text-gradient-gold">Recomenda</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Empresas líderes do setor de eletromobilidade confiam na Pluggon para suas decisões estratégicas.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className="glass-card group rounded-lg p-6 transition-all duration-300 hover:border-primary/30"
          >
            <div className="mb-4 flex items-center gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>

            <div className="mb-4 flex items-start gap-3">
              <Quote className="mt-0.5 h-5 w-5 shrink-0 text-primary/40" />
              <p className="text-sm leading-relaxed text-muted-foreground">{t.text}</p>
            </div>

            <div className="flex items-center gap-3 border-t border-border pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 font-display text-sm font-bold text-primary">
                {t.initials}
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">
                  {t.role} — {t.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'Quais dados a Pluggon utiliza?',
    a: 'Utilizamos dados oficiais da ANEEL (Agência Nacional de Energia Elétrica), DENATRAN (frota de veículos), além de dados proprietários coletados de nossos 50+ eletropostos em operação. Todos os dados são atualizados diariamente.',
  },
  {
    q: 'Como funciona o score de viabilidade?',
    a: 'Nosso algoritmo proprietário analisa 6 fatores: densidade populacional, fluxo de tráfego, proximidade de concorrentes, capacidade da rede elétrica, acessibilidade e registro de veículos elétricos na região. O resultado é um score de 0 a 100.',
  },
  {
    q: 'Posso integrar os dados via API?',
    a: 'Sim! Oferecemos uma API REST completa com documentação Swagger. Os planos Professional e Enterprise incluem acesso à API com limites de requisições adequados a cada necessidade.',
  },
  {
    q: 'O simulador financeiro é preciso?',
    a: 'Nosso simulador é calibrado com dados reais de operação. Os valores de receita, custos e ROI são baseados em métricas reais de nossos eletropostos, oferecendo projeções com margem de erro inferior a 15%.',
  },
  {
    q: 'Quais formatos de conector são suportados?',
    a: 'Mapeamos todos os padrões utilizados no Brasil: CCS Combo 2 (CCS2), CHAdeMO, Type 2 (AC) e J1772 (SAE). Cada ponto no mapa indica os tipos de conectores disponíveis.',
  },
  {
    q: 'Como posso gerar um Business Plan em PDF?',
    a: 'Após configurar os parâmetros no simulador financeiro, basta clicar em "Gerar Business Plan" para receber um documento profissional completo com análise de mercado, projeções financeiras e recomendações.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            FAQ
          </span>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
            Perguntas <span className="text-gradient-gold">Frequentes</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={faq.q}
              className="rounded-lg border border-border bg-card transition-colors hover:border-primary/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-4 text-left"
              >
                <span className="pr-4 text-sm font-medium text-foreground">{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="border-t border-border px-4 pb-4 pt-3">
                  <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

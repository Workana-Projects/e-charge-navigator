import { Zap, Github, Linkedin, Twitter } from 'lucide-react';

const FOOTER_LINKS = {
  Produto: ['Mapa Interativo', 'Score de Viabilidade', 'Simulador Financeiro', 'API REST'],
  Empresa: ['Sobre', 'Carreiras', 'Blog', 'Contato'],
  Legal: ['Termos de Uso', 'Privacidade', 'LGPD'],
};

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="font-display text-lg font-bold tracking-wider text-foreground">
              PLUGGON
            </span>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">
            Inteligência geoespacial para o futuro da eletromobilidade no Brasil.
          </p>
          <div className="flex gap-3">
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Github">
              <Github className="h-4 w-4" />
            </a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
          <div key={title}>
            <h4 className="mb-3 text-sm font-semibold text-foreground">{title}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Pluggon. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;

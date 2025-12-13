import { ArrowRight, Eye } from 'lucide-react';
import { perfilGuilhermeImage } from '@/assets';
import FloatingShapes from './FloatingShapes';

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      <FloatingShapes />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Disponível para novos projetos
            </div>

            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Olá, eu sou{' '}
              <span className="font-brush text-primary text-5xl sm:text-6xl lg:text-7xl">
                Guilly Barros
              </span>
              <br />
              <span className="text-foreground/90">Desenvolvedor Web</span>
            </h1>

            <p 
              className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              Crio landing pages, sistemas web e interfaces modernas para tirar ideias do papel e levar para o mundo digital.
            </p>

            <p 
              className="text-muted-foreground animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              Transformo conceitos em experiências digitais memoráveis, com foco em design elegante, código limpo e resultados que convertem.
            </p>

            <div 
              className="flex flex-wrap gap-4 animate-fade-in-up"
              style={{ animationDelay: '0.5s' }}
            >
              <a href="#projetos" className="btn-hero flex items-center gap-2">
                <Eye size={20} />
                Ver meus projetos
              </a>
              <a href="#contato" className="btn-outline-hero flex items-center gap-2">
                Solicitar orçamento
                <ArrowRight size={20} />
              </a>
            </div>

            {/* Quick Stats */}
            <div 
              className="flex flex-wrap gap-8 pt-8 border-t border-border/50 animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <div>
                <div className="text-3xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Projetos entregues</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Clientes satisfeitos</div>
              </div>
            </div>
          </div>

          {/* Photo Placeholder */}
          <div 
            className="relative flex justify-center lg:justify-end animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl scale-110" />
              
              {/* Photo container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <img
                  src={perfilGuilhermeImage}
                  alt="Foto de Guilly Barros"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 pointer-events-none" />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-background rounded-xl shadow-lg border border-border animate-float">
                <span className="text-sm font-medium text-foreground">React</span>
              </div>
              <div className="absolute -bottom-2 -left-6 px-4 py-2 bg-background rounded-xl shadow-lg border border-border animate-float-delayed">
                <span className="text-sm font-medium text-foreground">TypeScript</span>
              </div>
              <div className="absolute top-1/2 -right-8 px-4 py-2 bg-background rounded-xl shadow-lg border border-border animate-float-slow">
                <span className="text-sm font-medium text-foreground">UI/UX</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

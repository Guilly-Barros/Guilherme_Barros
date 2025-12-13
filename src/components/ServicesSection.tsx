import { Monitor, Code, Layout, Settings, Rocket } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  {
    icon: Monitor,
    title: 'Landing Pages Profissionais',
    description: 'Páginas de alta conversão, otimizadas para SEO e com design moderno que transmite credibilidade ao seu negócio.',
  },
  {
    icon: Code,
    title: 'Sistemas Web',
    description: 'Desenvolvimento de aplicações web simples e funcionais, com código limpo e manutenção facilitada.',
  },
  {
    icon: Layout,
    title: 'Otimização de Layout',
    description: 'Melhoria de interfaces existentes, tornando-as mais intuitivas, responsivas e agradáveis visualmente.',
  },
  {
    icon: Settings,
    title: 'Manutenção de Sites',
    description: 'Atualização e correção de sites existentes, garantindo que seu projeto continue funcionando perfeitamente.',
  },
  {
    icon: Rocket,
    title: 'Consultoria Digital',
    description: 'Orientação estratégica para sua presença digital, ajudando a escolher as melhores tecnologias e abordagens.',
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="servicos" ref={ref} className="py-24">
      <div className="section-container">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Serviços
          </span>
          <h2 className="section-title mt-2">
            O que eu{' '}
            <span className="font-brush text-primary text-4xl sm:text-5xl">faço</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Ofereço soluções completas para sua presença digital, desde a criação até a manutenção.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-hover group ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-primary group-hover:shadow-glow">
                <service.icon className="w-7 h-7 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Decorative line */}
              <div className="mt-6 h-1 w-12 rounded-full bg-primary/20 transition-all duration-300 group-hover:w-full group-hover:bg-primary/40" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <p className="text-muted-foreground mb-4">
            Não encontrou o que precisa? Vamos conversar!
          </p>
          <a href="#contato" className="btn-hero inline-flex items-center gap-2">
            Solicitar orçamento personalizado
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

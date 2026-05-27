import { ExternalLink, Github } from 'lucide-react';
import { 
  cartorioAlvarengaImage, 
  equityOilImage,
  gestaoClinicoImage,
  gestaoOficinaImage,
  gestaoCadastroMassaImage,
  gestaoPortalAutomacaoImage
} from '@/assets';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useToast } from '@/hooks/use-toast';

const projects = [
  {
    title: 'Cartório Alvarenga',
    description: 'Landing page institucional moderna para o Cartório Alvarenga.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    image: cartorioAlvarengaImage,
    github: '#',
    live: 'https://cartorioalvarenga.com.br/',
  },
  {
    title: 'EquityOil',
    description: 'Plataforma para apresentação institucional da EquityOil.',
    tags: ['React', 'Tailwind', 'Vite'],
    image: equityOilImage,
    github: '#',
    live: 'https://equityoil.com.br/',
  },
  {
    title: 'Sistema de Gestão Clínica',
    description: 'Sistema completo para gestão de clínicas.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: gestaoClinicoImage,
    github: '#',
    live: '#',
    customMessage: 'Este sistema já foi desenvolvido, porém não está disponível para acesso.',
  },
  {
    title: 'Sistema de Gestão Mecânica',
    description: 'Plataforma para gerenciamento de oficinas mecânicas.',
    tags: ['React', 'Supabase', 'Tailwind'],
    image: gestaoOficinaImage,
    github: '#',
    live: '#',
    customMessage: 'Este sistema já foi desenvolvido, porém não está disponível para acesso.',
  },
  {
    title: 'Bot de Cadastros em Massa',
    description: 'Site elegante para exibição de trabalhos fotográficos.',
    tags: ['Next.js', 'Framer Motion'],
    image: gestaoCadastroMassaImage,
    github: '#',
    live: '#',
    customMessage: 'Este sistema já foi desenvolvido, porém ele está rodando em um servidor dedicado do Tribunal de Justiça do Estado de Goiás.',
  },
  {
    title: 'Portal de Automação TJGO',
    description: 'Backend robusto para aplicação de delivery.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    image: gestaoPortalAutomacaoImage,
    github: '#',
    live: '#',
    customMessage: 'Este sistema já foi desenvolvido, porém ele está rodando em um servidor dedicado do Tribunal de Justiça do Estado de Goiás.',
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const { toast } = useToast();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, project: typeof projects[number]) => {
    if (project.customMessage) {
      e.preventDefault();
      toast({
        title: project.title,
        description: project.customMessage,
      });
    }
  };

  return (
    <section id="projetos" ref={ref} className="py-24 bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Portfólio
          </span>
          <h2 className="section-title mt-2">
            Projetos em{' '}
            <span className="font-brush text-primary text-4xl sm:text-5xl">destaque</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Alguns dos projetos que desenvolvi, cada um com seus desafios únicos e soluções criativas.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group card-hover overflow-hidden ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 -mx-6 -mt-6 mb-5 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Projeto ${project.title}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50">
                    <span className="text-sm">Imagem do projeto</span>
                  </div>
                )}
                
                {/* Overlay on hover */}
                <div
                  className="absolute inset-0 bg-[rgba(0,0,0,0.1)] group-hover:bg-[rgba(0,0,0,0.15)] flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <a
                    href={project.github}
                    onClick={(e) => handleLinkClick(e, project)}
                    className="w-12 h-12 rounded-full bg-background/20 flex items-center justify-center hover:bg-background/30 transition-colors"
                    aria-label="Ver código no GitHub"
                  >
                    <Github className="w-5 h-5 text-primary stroke-[1.5]" />
                  </a>
                  <a
                    href={project.live}
                    onClick={(e) => handleLinkClick(e, project)}
                    className="w-12 h-12 rounded-full bg-background/20 flex items-center justify-center hover:bg-background/30 transition-colors"
                    aria-label="Ver projeto ao vivo"
                  >
                    <ExternalLink className="w-5 h-5 text-primary stroke-[1.5]" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View more */}
        <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <a
            href="#"
            className="btn-outline-hero inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            Ver mais no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

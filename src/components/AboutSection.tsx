import { Code2, Palette, Smartphone, Zap } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const skills = [
  { icon: Code2, title: 'Stack Principal', items: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'] },
  { icon: Palette, title: 'Design', items: ['Figma', 'UI/UX', 'Tailwind CSS', 'Framer Motion'] },
  { icon: Smartphone, title: 'Responsividade', items: ['Mobile First', 'PWA', 'Performance'] },
  { icon: Zap, title: 'Ferramentas', items: ['Git', 'VS Code', 'Vite', 'Node.js'] },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="sobre" ref={ref} className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Sobre mim
            </span>
            <h2 className="section-title">
              Transformando ideias em{' '}
              <span className="font-brush text-primary text-4xl sm:text-5xl">experiências digitais</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou estudante de <strong className="text-foreground">Engenharia de Software</strong> apaixonado 
                por criar interfaces que fazem a diferença. Minha jornada no desenvolvimento web começou com 
                curiosidade e evoluiu para uma verdadeira paixão por resolver problemas através do código.
              </p>
              <p>
                Meu foco está em <strong className="text-foreground">front-end e UX/UI</strong>, onde combino 
                conhecimento técnico com sensibilidade visual para entregar produtos que não só funcionam 
                perfeitamente, mas também encantam os usuários.
              </p>
              <p>
                Acredito que um bom código é aquele que é <strong className="text-foreground">limpo, 
                responsivo e acessível</strong>. Cada projeto é uma oportunidade de criar algo único que 
                ajude meus clientes a alcançarem seus objetivos.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className={`grid grid-cols-2 gap-4 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="card-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">{skill.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <span key={item} className="tech-tag text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { Quote, Star } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const feedbacks = [
  {
    name: 'João Silva',
    role: 'Empreendedor',
    content: 'Trabalho impecável! O site ficou muito além das minhas expectativas. Profissional atencioso e comprometido com a qualidade.',
    rating: 5,
  },
  {
    name: 'Maria Santos',
    role: 'Proprietária de Clínica',
    content: 'Minha clínica ganhou uma presença digital incrível. Os clientes elogiam muito o site e a facilidade de navegação.',
    rating: 5,
  },
  {
    name: 'Pedro Oliveira',
    role: 'Restaurante',
    content: 'Excelente comunicação durante todo o projeto. Entregou no prazo e com qualidade superior. Super recomendo!',
    rating: 5,
  },
  {
    name: 'Ana Costa',
    role: 'Consultora',
    content: 'Profissional extremamente dedicado. Transformou minha visão em realidade digital de forma surpreendente.',
    rating: 5,
  },
];

const FeedbacksSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="feedbacks" ref={ref} className="py-24">
      <div className="section-container">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="section-title mt-2">
            Feedbacks de quem já{' '}
            <span className="font-brush text-primary text-4xl sm:text-5xl">trabalhou comigo</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A satisfação dos meus clientes é minha maior motivação.
          </p>
        </div>

        {/* Feedbacks Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {feedbacks.map((feedback, index) => (
            <div
              key={feedback.name}
              className={`card-hover relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 ml-6">
                {[...Array(feedback.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 leading-relaxed mb-6 italic">
                "{feedback.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {feedback.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{feedback.name}</h4>
                  <p className="text-sm text-muted-foreground">{feedback.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbacksSection;

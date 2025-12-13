import { useState } from 'react';
import { Send, MessageCircle, Mail, Github, Linkedin } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useToast } from '@/hooks/use-toast';
import DigitalNetworkBackground from './DigitalNetworkBackground';

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqarngyg";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _subject: `Contato de ${formData.name}`, // opcional (ajuda no assunto)
      };

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || "Falha ao enviar formulário.");
      }

      toast({
        title: "Mensagem enviada com sucesso",
        description: "Recebi sua mensagem e retornarei o mais breve possível.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      // Fallback: abre mailto caso o Formspree falhe
      const subject = encodeURIComponent(`Contato de ${formData.name}`);
      const bodyLines = [
        `Nome: ${formData.name}`,
        `E-mail: ${formData.email}`,
        "",
        formData.message,
      ];
      const body = encodeURIComponent(bodyLines.join("\n"));

      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

      toast({
        title: "Não foi possível enviar automaticamente",
        description:
          "Abrindo seu cliente de e-mail como alternativa. Se preferir, envie direto para gbparros0201@gmail.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Dados oficiais de contato
  const whatsappNumber = '5562999875544';
  const email = 'gbparros0201@gmail.com';
  const githubUrl = 'https://github.com/Guilly-Barros';
  const linkedinUrl = 'https://www.linkedin.com/in/guilly-barros-passos/';

  return (
    <section id="contato" ref={ref} className="relative py-24 bg-secondary/30 overflow-hidden">
      <DigitalNetworkBackground className="opacity-70" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Contato
              </span>
              <h2 className="section-title mt-2">
                Vamos tirar seu projeto{' '}
                <span className="font-brush text-primary text-4xl sm:text-5xl">do papel?</span>
              </h2>
              <p className="section-subtitle mt-4">
                Estou pronto para transformar sua ideia em realidade. Entre em contato e vamos
                conversar sobre seu projeto.
              </p>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=Olá! Vim pelo seu site e gostaria de um orçamento.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>

            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-background hover:bg-background/80 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="font-medium text-foreground">{email}</p>
                </div>
              </a>

              <div className="flex gap-4">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-4 p-4 rounded-xl bg-background hover:bg-background/80 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">GitHub</span>
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center gap-4 p-4 rounded-xl bg-background hover:bg-background/80 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <form onSubmit={handleSubmit} className="card-hover space-y-6">
              {/* Honeypot anti-spam (campo invisível) */}
              <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Envie uma mensagem
              </h3>
              <p className="text-sm text-muted-foreground">
                Preencha o formulário abaixo que entrarei em contato o mais breve possível.
              </p>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Conte um pouco sobre seu projeto..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-hero w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar mensagem
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#inicio" className="font-brush text-2xl text-primary font-bold">
            Guilly Barros
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} • Feito Guilherme Barros.
          </p>

          {/* Back to top */}
          <a
            href="#inicio"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Voltar ao topo ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

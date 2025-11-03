const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Yogor Castro. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm">
            Desenvolvido com React, TypeScript e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

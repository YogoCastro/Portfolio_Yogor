import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
      }}
    >
      <div className="container mx-auto px-4 py-20 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
          Yogor Castro
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Desenvolvedor Front-End e Back-End
        </p>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Focado em criar sistemas modernos e funcionais com JavaScript, React, HTML e CSS
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Ver Projetos
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-primary text-primary hover:bg-primary/10"
          >
            Entre em Contato
          </Button>
        </div>
      </div>
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </button>
    </section>
  );
};

export default Hero;

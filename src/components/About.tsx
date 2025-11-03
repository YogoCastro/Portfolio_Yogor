import { Code2, Palette, Zap } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Código Limpo",
      description: "Escrevo código semântico, escalável e fácil de manter",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Design Responsivo",
      description: "Interfaces que funcionam perfeitamente em todos os dispositivos",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance",
      description: "Otimização para carregamento rápido e melhor experiência",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
          Sobre Mim
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-2xl opacity-20"></div>
              <img
                src={profilePhoto}
                alt="Yogor Castro"
                className="relative rounded-2xl w-80 h-80 object-cover shadow-[var(--shadow-card-hover)] border-4 border-background"
              />
            </div>
          </div>
          <div className="animate-slide-in-right">
            <p className="text-lg text-muted-foreground mb-6">
              Sou um desenvolvedor front-end e back-end apaixonado por transformar ideias em experiências digitais incríveis. 
              Com foco em tecnologias modernas como JavaScript, React, HTML e CSS, busco sempre criar 
              interfaces intuitivas e performáticas.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Minha jornada no desenvolvimento web começou com curiosidade e evoluiu para uma paixão por 
              resolver problemas complexos através de código elegante e design centrado no usuário.
            </p>
            <p className="text-lg text-muted-foreground">
              Acredito que a melhor tecnologia é aquela que as pessoas nem percebem que estão usando - 
              ela simplesmente funciona.
            </p>
          </div>
          <div className="space-y-6 animate-fade-in-up">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-card border border-border hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

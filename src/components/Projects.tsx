import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Moderno",
      description: "Plataforma de e-commerce completa com carrinho de compras, sistema de pagamento e painel administrativo.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard interativo para visualização de dados com gráficos em tempo real e relatórios customizados.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Recharts", "TanStack Query"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "App de Tarefas",
      description: "Aplicativo de gerenciamento de tarefas com drag-and-drop, categorias e sistema de prioridades.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "DnD Kit", "Local Storage"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Landing Page SaaS",
      description: "Landing page moderna para produto SaaS com animações suaves e design responsivo.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Blog Pessoal",
      description: "Blog com sistema de posts, categorias, busca e comentários, com interface limpa e legível.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Markdown", "SEO"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Portfolio Website",
      description: "Website de portfólio responsivo e acessível com animações e otimização de performance.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      liveLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
          Projetos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-lg overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

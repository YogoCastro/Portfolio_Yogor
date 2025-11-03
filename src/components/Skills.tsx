const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
      ],
    },
    {
      title: "Backend & Ferramentas",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Git/GitHub", level: 85 },
        { name: "APIs REST", level: 80 },
        { name: "VS Code", level: 90 },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Resolução de Problemas", level: 90 },
        { name: "Trabalho em Equipe", level: 85 },
        { name: "Comunicação", level: 85 },
        { name: "Aprendizado Contínuo", level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
          Habilidades
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="p-6 rounded-lg bg-card border border-border hover:shadow-[var(--shadow-card)] transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          background: "var(--gradient-primary)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

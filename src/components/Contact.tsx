import { useState } from "react";
import { Mail, Github, Linkedin, Send, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    // 🚀 Enviar com EmailJS
    emailjs
      .send(
        "service_u1ypk2l", // substitua aqui
        "template_nod0yyr", // substitua aqui
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "fs5chxdPrgCaPNPgc" // substitua aqui
      )
      .then(() => {
        toast.success(
          "Mensagem enviada com sucesso! Entrarei em contato em breve."
        );
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.error("Erro ao enviar mensagem. Tente novamente mais tarde.");
      });
  };

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yogo-ribeiro-b734541b7/",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      label: "Instagram",
      href: "https://www.instagram.com/yogo_castro/",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/YogoCastro",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      href: "mailto:yogoribeiro0902@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
          Entre em Contato
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-semibold mb-4">Vamos conversar!</h3>
            <p className="text-muted-foreground mb-8">
              Estou sempre aberto a novos projetos, oportunidades de colaboração
              ou apenas para trocar ideias sobre desenvolvimento web. Sinta-se à
              vontade para entrar em contato!
            </p>
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:shadow-[var(--shadow-card)] hover:border-primary transition-all duration-300"
                >
                  <div className="text-primary">{link.icon}</div>
                  <span className="font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Sua mensagem"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full min-h-[150px]"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Send className="h-4 w-4 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

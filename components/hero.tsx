"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="/perfil.jpg"
            alt="Mateus Tomaz"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
          />
        </div>

        <h1 className="font-geist text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4">
          Mateus Tomaz
        </h1>

        <p className="font-manrope text-xl sm:text-2xl text-muted-foreground mb-8">
          Desenvolvedor Frontend & UX/UI Designer
        </p>

        <p className="font-manrope text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Desenvolvedor Frontend com experiência em UX/UI, unindo design e
          código para criar interfaces funcionais, acessíveis e escaláveis. Atuo
          há dois anos como freelancer, desenvolvendo projetos do protótipo à
          entrega final.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => window.open("/MateusTomaz_CV.pdf", "_blank")}
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>

          <div className="flex gap-4">
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-accent hover:bg-primary/90 bg-transparent"
              onClick={() =>
                window.open("https://github.com/mateustomaz1", "_blank")
              }
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-accent hover:bg-primary/90 bg-transparent"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/mateus-tomaz-270b30204/",
                  "_blank"
                )
              }
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <ArrowDown className="h-8 w-8 mx-auto" />
        </button>
      </div>
    </section>
  );
}

"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Site Evoluir",
      description:
        "Site completo da empresa Evoluir com layout moderno e navegação otimizada. Responsável pelo desenvolvimento completo: prototipagem no Figma, codificação e deploy.",
      image: "/Evoluir.png",
      category: "frontend",
      technologies: ["HTML", "CSS", "JavaScript", "Figma"],
      liveUrl: "https://evoluirproject.netlify.app",
      githubUrl: "https://github.com/mateustomaz1/Evoluir",
    },
    {
      id: 2,
      title: "API - Marketplace",
      description:
        "Projeto acadêmico que consiste em uma API de Marketplace, permitindo que usuários — vendedores e compradores — interajam em uma plataforma digital para oferta",
      image: "/diagrama-classes.png",
      category: "Backend",
      technologies: ["Spring Boot", "PostgreSQL", "Java"],
      liveUrl: "https://github.com/mateustomaz1/marketplace?tab=readme-ov-file",
      githubUrl: "https://github.com/mateustomaz1/marketplace?tab=readme-ov-file",
    },
    {
      id: 3,
      title: "APAE",
      description:
        "Projeto em desenvolvimento, surtido de uma parceria entre o IFPB (Campus Esperança) e a APAE.",
      image: "/APAE.png",
      category: "Frontend",
      technologies: ["React", "Prototipação", "Next.js", "Acessibilidade", "TypeScript"],
      liveUrl: "https://ifpbesp.github.io/apae-site-comemorativo/",
      githubUrl: "https://github.com/IFPBEsp/apae-site-comemorativo",
    },
    {
      id: 4,
      title: "Projeto INCLUS - Inclusão Digital",
      description:
        "Desenvolvimento de atividades práticas para inclusão digital, apoiando jovens e idosos no uso de ferramentas como Word e Excel.",
      image: "/digital-inclusion-education-computer-lab.png",
      category: "ui",
      technologies: ["Educação Digital", "Acessibilidade", "UX/UI", "Inclusão"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Portfólio Pessoal",
      description:
        "Portfólio pessoal desenvolvido com as mais modernas tecnologias, demonstrando habilidades em frontend e design.",
      image: "portfolio.png",
      category: "frontend",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Projetos em Desenvolvimento",
      description:
        "Atualmente expandindo conhecimentos em Node.js, TypeScript, Next.js e Prisma para projetos futuros.",
      image: "/nodejs-typescript-development-learning.png",
      category: "frontend",
      technologies: ["Node.js", "TypeScript", "Next.js", "Prisma"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const categories = [
    { id: "all", label: "Todos" },
    { id: "frontend", label: "Frontend" },
    { id: "Backend", label: "Backend" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-geist text-3xl sm:text-4xl font-bold text-primary mb-6">Meus Projetos</h2>
          <p className="font-manrope text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Uma seleção dos meus trabalhos mais recentes, demonstrando diferentes habilidades e tecnologias.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-1 bg-card rounded-lg">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "ghost"}
                onClick={() => setFilter(category.id)}
                className={`font-manrope ${
                  filter === category.id ? "bg-accent text-accent-foreground" : "hover:bg-accent/10"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-white hover:text-primary transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Projeto
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-black hover:border-transparent hover:text-white transition-all duration-300"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="font-geist text-xl text-primary">{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="font-manrope text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-manrope text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

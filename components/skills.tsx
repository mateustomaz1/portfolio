import { Badge } from "@/components/ui/badge"
import { Code, Palette, Database, Wrench, BookOpen } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      skills: ["HTML/CSS", "JavaScript", "React", "Responsividade", "Acessibilidade"],
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
      skills: ["Figma", "Prototipagem", "UX Research", "Design Systems", "Wireframing"],
    },
    {
      title: "Backend",
      icon: Database,
      color: "bg-green-500/10 text-green-600 dark:text-green-400",
      skills: ["Java", "Spring Boot", "PostgreSQL", "Node.js"],
    },
    {
      title: "Ferramentas",
      icon: Wrench,
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
      skills: ["Git/GitHub", "Figma", "VS Code", "IntelliJ"],
    },
  ]

  const softSkills = [
    "Resolução de Problemas",
    "Trabalho em Equipe",
    "Comunicação",
    "Inclusão Digital",
    "Metodologias Ágeis",   
  ]

  const learning = ["Node.js", "TypeScript", "Next.js", "Prisma"]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-geist text-3xl sm:text-4xl font-bold mb-4">Habilidades Técnicas</h2>
          <p className="font-manrope text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para criar soluções completas e funcionais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${category.color}`}>
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="font-geist text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="font-manrope text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="font-geist text-xl font-semibold mb-6 text-center">Competências Complementares</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <Badge key={skill} variant="outline" className="font-manrope">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <BookOpen className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <h3 className="font-geist text-xl font-semibold">Atualmente Aprendendo</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {learning.map((tech) => (
              <Badge
                key={tech}
                className="bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20 font-manrope hover:text-white transition-colors duration-200"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

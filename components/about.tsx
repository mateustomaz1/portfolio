import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export function About() {
  const values = [
    {
      icon: Code,
      title: "Código Limpo",
      description: "Escrevo código maintível, escalável e seguindo as melhores práticas da indústria.",
    },
    {
      icon: Palette,
      title: "Design Centrado no Usuário",
      description: "Crio interfaces intuitivas que proporcionam experiências excepcionais aos usuários.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimizo cada detalhe para garantir aplicações rápidas e responsivas.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-geist text-3xl sm:text-4xl font-bold mb-6">Sobre Mim</h2>
          <p className="font-manrope text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Desenvolvedor Frontend com experiência em UX/UI e desenvolvimento web, unindo design e código para criar
            interfaces funcionais, acessíveis e escaláveis. Atualmente cursando Análise e Desenvolvimento de Sistemas no
            IFPB.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-08-24%20%C3%A0%28s%29%2023.04.35_4c8ce0b0.jpg-b8E9AozNrCjhIbqliMi8oWJj3syfZP.jpeg"
              alt="Mateus Tomaz trabalhando no laboratório"
              className="rounded-lg object-cover w-full h-80"
            />
          </div>

          <div className="space-y-6">
            <h3 className="font-geist text-2xl font-semibold">Minha Jornada</h3>
            <p className="font-manrope text-muted-foreground leading-relaxed">
              Atuo há dois anos como freelancer, desenvolvendo projetos do protótipo à entrega final. Minha experiência
              inclui a criação completa do site da empresa Evoluir, desde a prototipagem no Figma até o deploy final.
            </p>
            <p className="font-manrope text-muted-foreground leading-relaxed">
              Trabalho principalmente com HTML, CSS, JavaScript e React, com conhecimento em Java e Spring Boot. Também
              atuo como voluntário no Projeto INCLUS, apoiando jovens e idosos no uso de ferramentas digitais, sempre
              focando em acessibilidade e inclusão digital.
            </p>
            <p className="font-manrope text-muted-foreground leading-relaxed">
              Atualmente estou expandindo meus conhecimentos em Node.js, TypeScript, Next.js e Prisma, sempre buscando
              as melhores soluções para cada projeto.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="pt-6">
                <value.icon className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-geist text-xl font-semibold mb-3">{value.title}</h3>
                <p className="font-manrope text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

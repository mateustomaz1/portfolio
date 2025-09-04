"use client"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mateustomaz147@gmail.com",
      href: "mailto:mateustomaz147@gmail.com",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "(83) 99636-8197",
      href: "tel:+5583996368197",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Esperança, PB - Brasil",
      href: "https://www.google.com/maps/place/Esperan%C3%A7a,+PB,+58135-000/data=!4m2!3m1!1s0x7ac2890159d88db:0x1bb834a9c6a2f643?sa=X&ved=1t:242&ictx=111",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-geist text-3xl sm:text-4xl font-bold text-primary mb-6">Contato</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-geist font-medium text-primary mb-2">{info.title}</h4>
                <a
                  href={info.href}
                  className="font-manrope text-muted-foreground hover:text-accent transition-colors duration-200 text-sm"
                >
                  {info.value}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h4 className="font-geist font-medium text-primary mb-6">Redes Sociais</h4>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.linkedin.com/in/mateus-tomaz-270b30204/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/mateustomaz1" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="font-manrope text-muted-foreground">
            © 2024 Mateus Tomaz. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  )
}

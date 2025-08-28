"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Maria Santos",
      role: "CEO, TechStart",
      avatar: "/professional-woman-ceo.png",
      content:
        "João entregou um trabalho excepcional. Sua atenção aos detalhes e capacidade de transformar ideias em realidade é impressionante. Recomendo sem hesitação!",
      rating: 5,
    },
    {
      name: "Carlos Oliveira",
      role: "CTO, InnovaCorp",
      avatar: "/professional-cto.png",
      content:
        "Trabalhar com João foi uma experiência fantástica. Ele não apenas desenvolveu nossa plataforma, mas também sugeriu melhorias que aumentaram nossa conversão em 40%.",
      rating: 5,
    },
    {
      name: "Ana Rodriguez",
      role: "Product Manager, DesignLab",
      avatar: "/professional-woman-product-manager.png",
      content:
        "A combinação de habilidades técnicas e design do João é rara no mercado. Ele entende tanto de código quanto de experiência do usuário. Resultado: produtos incríveis!",
      rating: 5,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-geist text-3xl sm:text-4xl font-bold text-primary mb-6">
            O Que Dizem Sobre Meu Trabalho
          </h2>
          <p className="font-manrope text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Feedback de clientes e parceiros que confiaram em mim para seus projetos.
          </p>
        </div>

        <div className="relative">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <div className="flex mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="font-manrope text-lg md:text-xl text-foreground leading-relaxed mb-8 max-w-3xl">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                    />
                    <AvatarFallback>
                      {testimonials[currentIndex].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-geist font-semibold text-primary">{testimonials[currentIndex].name}</div>
                    <div className="font-manrope text-muted-foreground">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between items-center mt-8">
            <Button variant="outline" size="sm" onClick={prevTestimonial}>
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-accent" : "bg-muted"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <Button variant="outline" size="sm" onClick={nextTestimonial}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
